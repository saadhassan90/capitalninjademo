import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.7.1'
import { parse } from 'https://deno.land/std@0.181.0/csv/parse.ts'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const formData = await req.formData()
    const file = formData.get('file')

    if (!file) {
      throw new Error('No file uploaded')
    }

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // Create upload record
    const { data: uploadData, error: uploadRecordError } = await supabase
      .from('investor_uploads')
      .insert({
        filename: file.name,
        status: 'processing',
      })
      .select()
      .single()

    if (uploadRecordError) {
      throw uploadRecordError
    }

    // Upload file to storage
    const fileExt = file.name.split('.').pop()
    const filePath = `${uploadData.id}.${fileExt}`

    const { error: storageError } = await supabase.storage
      .from('investor-files')
      .upload(filePath, file, {
        contentType: file.type,
        upsert: false
      })

    if (storageError) {
      throw storageError
    }

    // Process CSV content
    const text = await file.text()
    const rows = parse(text, { skipFirstRow: true })
    
    const investors = rows.map(row => ({
      name: row[0] || '',
      firm: row[1] || null,
      focus: row[2] || null,
      stage: row[3] || null,
      location: row[4] || null,
    }))

    // Insert investors
    const { error: insertError } = await supabase
      .from('investors')
      .insert(investors)

    if (insertError) {
      throw insertError
    }

    // Update upload status
    const { error: updateError } = await supabase
      .from('investor_uploads')
      .update({ 
        status: 'completed',
        row_count: investors.length
      })
      .eq('id', uploadData.id)

    if (updateError) {
      throw updateError
    }

    return new Response(
      JSON.stringify({ message: 'File processed successfully', count: investors.length }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    console.error('Error processing file:', error)

    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400
      }
    )
  }
})