import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { ListPlus, X } from "lucide-react";
import { useState } from "react";
import { AddToListDialog } from "./actions/AddToListDialog";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { InvestorProfileSections } from "./profile/InvestorProfileSections";
import { InvestorProfileHeader } from "./profile/InvestorProfileHeader";

interface InvestorProfileModalProps {
  investor: {
    id: string;
    name: string;
    former_name?: string | null;
    alias?: string | null;
    investor_type?: string | null;
    aum_millions?: number | null;
    year_founded?: number | null;
    website?: string | null;
    phone_number?: string | null;
    primary_contact_email?: string | null;
    headquarters_address?: string | null;
    headquarters_city?: string | null;
    headquarters_state?: string | null;
    headquarters_country?: string | null;
    primary_contact_title?: string | null;
    primary_contact_phone?: string | null;
    allocation_alternatives_pct?: number | null;
    allocation_private_equity_pct?: number | null;
    allocation_real_estate_pct?: number | null;
    allocation_hedge_funds_pct?: number | null;
    allocation_equities_pct?: number | null;
    allocation_fixed_income_pct?: number | null;
    allocation_cash_pct?: number | null;
    min_commitment_size?: number | null;
    max_commitment_size?: number | null;
    preferred_commitment_size?: number | null;
    min_direct_investment_size?: number | null;
    max_direct_investment_size?: number | null;
    preferred_direct_investment_size?: number | null;
    commitment_debt?: boolean;
    commitment_private_equity?: boolean;
    commitment_real_estate?: boolean;
    commitment_venture_capital?: boolean;
    commitment_infrastructure?: boolean;
    commitment_energy?: boolean;
    commitment_other?: boolean;
    open_to_first_time_funds?: boolean;
    affiliated_funds_count?: number | null;
    affiliated_investors_count?: number | null;
    total_direct_investments?: number | null;
    investment_policy_description?: string | null;
    global_region?: string | null;
    global_subregion?: string | null;
    target_alternatives_min_pct?: number | null;
    target_alternatives_max_pct?: number | null;
    target_private_equity_min_pct?: number | null;
    target_private_equity_max_pct?: number | null;
    target_real_estate_min_pct?: number | null;
    target_real_estate_max_pct?: number | null;
    target_special_opps_min_pct?: number | null;
    target_special_opps_max_pct?: number | null;
  };
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const InvestorProfileModal = ({ investor, open, onOpenChange }: InvestorProfileModalProps) => {
  const [isListDialogOpen, setIsListDialogOpen] = useState(false);
  const { toast } = useToast();

  const { data: lists = [], refetch: refetchLists } = useQuery({
    queryKey: ['lists'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('lists')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data;
    },
  });

  const handleCreateList = async (name: string, description: string) => {
    if (!name.trim()) return;

    try {
      const { data: newList, error: createError } = await supabase
        .from('lists')
        .insert([{ name, description }])
        .select()
        .single();

      if (createError) throw createError;

      await handleAddToList(newList.id);
      refetchLists();

      toast({
        title: "Success",
        description: "New list created and investor added",
      });
    } catch (error) {
      console.error('Error creating list:', error);
      toast({
        title: "Error",
        description: "Failed to create list",
        variant: "destructive",
      });
    }
  };

  const handleAddToList = async (listId: string) => {
    try {
      const { error } = await supabase
        .from('list_investors')
        .upsert(
          { list_id: listId, investor_id: investor.id },
          { onConflict: 'list_id,investor_id' }
        );

      if (error) throw error;

      toast({
        title: "Success",
        description: "Investor added to list",
      });
      setIsListDialogOpen(false);
    } catch (error) {
      console.error('Error adding to list:', error);
      toast({
        title: "Error",
        description: "Failed to add investor to list",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[800px] max-h-[90vh] p-0 overflow-hidden bg-white dark:bg-zinc-950">
        <div className="absolute right-4 top-4 z-50">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onOpenChange(false)}
            className="hover:bg-accent rounded-full h-8 w-8 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        <InvestorProfileHeader 
          investor={investor}
          onAddToList={() => setIsListDialogOpen(true)}
        />

        <ScrollArea className="flex-1 h-[calc(90vh-120px)]">
          <div className="space-y-6 p-6">
            <InvestorProfileSections investor={investor} />
          </div>
        </ScrollArea>

        <AddToListDialog
          open={isListDialogOpen}
          onOpenChange={setIsListDialogOpen}
          lists={lists}
          onCreateList={handleCreateList}
          onAddToList={handleAddToList}
        />
      </DialogContent>
    </Dialog>
  );
};