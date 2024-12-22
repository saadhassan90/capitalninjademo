export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      investor_uploads: {
        Row: {
          created_at: string
          filename: string
          id: string
          row_count: number | null
          status: string
        }
        Insert: {
          created_at?: string
          filename: string
          id?: string
          row_count?: number | null
          status: string
        }
        Update: {
          created_at?: string
          filename?: string
          id?: string
          row_count?: number | null
          status?: string
        }
        Relationships: []
      }
      investors: {
        Row: {
          affiliated_funds_count: number | null
          affiliated_investors_count: number | null
          alias: string | null
          allocation_alternatives_pct: number | null
          allocation_cash_pct: number | null
          allocation_equities_pct: number | null
          allocation_fixed_income_pct: number | null
          allocation_hedge_funds_pct: number | null
          allocation_private_equity_pct: number | null
          allocation_real_estate_pct: number | null
          allocation_special_opps_pct: number | null
          aum_millions: number | null
          commitment_debt: boolean | null
          commitment_energy: boolean | null
          commitment_funds_of_funds: boolean | null
          commitment_infrastructure: boolean | null
          commitment_other: boolean | null
          commitment_private_equity: boolean | null
          commitment_real_estate: boolean | null
          commitment_venture_capital: boolean | null
          created_at: string
          description: string | null
          email: string | null
          fax_number: string | null
          former_name: string | null
          global_region: string | null
          global_subregion: string | null
          headquarters_address: string | null
          headquarters_city: string | null
          headquarters_country: string | null
          headquarters_location: string | null
          headquarters_postal_code: string | null
          headquarters_state: string | null
          id: string
          investment_policy_description: string | null
          investor_type: string | null
          max_commitment_size: number | null
          max_direct_investment_size: number | null
          min_commitment_size: number | null
          min_direct_investment_size: number | null
          name: string
          open_to_first_time_funds: boolean | null
          phone_number: string | null
          preferred_commitment_size: number | null
          preferred_direct_investment_size: number | null
          preferred_fund_types: string[] | null
          preferred_geography: string[] | null
          primary_contact_email: string | null
          primary_contact_name: string | null
          primary_contact_phone: string | null
          primary_contact_title: string | null
          target_alternatives_max_pct: number | null
          target_alternatives_min_pct: number | null
          target_private_equity_max_pct: number | null
          target_private_equity_min_pct: number | null
          target_real_estate_max_pct: number | null
          target_real_estate_min_pct: number | null
          target_special_opps_max_pct: number | null
          target_special_opps_min_pct: number | null
          total_direct_investments: number | null
          updated_at: string
          website: string | null
          year_founded: number | null
        }
        Insert: {
          affiliated_funds_count?: number | null
          affiliated_investors_count?: number | null
          alias?: string | null
          allocation_alternatives_pct?: number | null
          allocation_cash_pct?: number | null
          allocation_equities_pct?: number | null
          allocation_fixed_income_pct?: number | null
          allocation_hedge_funds_pct?: number | null
          allocation_private_equity_pct?: number | null
          allocation_real_estate_pct?: number | null
          allocation_special_opps_pct?: number | null
          aum_millions?: number | null
          commitment_debt?: boolean | null
          commitment_energy?: boolean | null
          commitment_funds_of_funds?: boolean | null
          commitment_infrastructure?: boolean | null
          commitment_other?: boolean | null
          commitment_private_equity?: boolean | null
          commitment_real_estate?: boolean | null
          commitment_venture_capital?: boolean | null
          created_at?: string
          description?: string | null
          email?: string | null
          fax_number?: string | null
          former_name?: string | null
          global_region?: string | null
          global_subregion?: string | null
          headquarters_address?: string | null
          headquarters_city?: string | null
          headquarters_country?: string | null
          headquarters_location?: string | null
          headquarters_postal_code?: string | null
          headquarters_state?: string | null
          id?: string
          investment_policy_description?: string | null
          investor_type?: string | null
          max_commitment_size?: number | null
          max_direct_investment_size?: number | null
          min_commitment_size?: number | null
          min_direct_investment_size?: number | null
          name: string
          open_to_first_time_funds?: boolean | null
          phone_number?: string | null
          preferred_commitment_size?: number | null
          preferred_direct_investment_size?: number | null
          preferred_fund_types?: string[] | null
          preferred_geography?: string[] | null
          primary_contact_email?: string | null
          primary_contact_name?: string | null
          primary_contact_phone?: string | null
          primary_contact_title?: string | null
          target_alternatives_max_pct?: number | null
          target_alternatives_min_pct?: number | null
          target_private_equity_max_pct?: number | null
          target_private_equity_min_pct?: number | null
          target_real_estate_max_pct?: number | null
          target_real_estate_min_pct?: number | null
          target_special_opps_max_pct?: number | null
          target_special_opps_min_pct?: number | null
          total_direct_investments?: number | null
          updated_at?: string
          website?: string | null
          year_founded?: number | null
        }
        Update: {
          affiliated_funds_count?: number | null
          affiliated_investors_count?: number | null
          alias?: string | null
          allocation_alternatives_pct?: number | null
          allocation_cash_pct?: number | null
          allocation_equities_pct?: number | null
          allocation_fixed_income_pct?: number | null
          allocation_hedge_funds_pct?: number | null
          allocation_private_equity_pct?: number | null
          allocation_real_estate_pct?: number | null
          allocation_special_opps_pct?: number | null
          aum_millions?: number | null
          commitment_debt?: boolean | null
          commitment_energy?: boolean | null
          commitment_funds_of_funds?: boolean | null
          commitment_infrastructure?: boolean | null
          commitment_other?: boolean | null
          commitment_private_equity?: boolean | null
          commitment_real_estate?: boolean | null
          commitment_venture_capital?: boolean | null
          created_at?: string
          description?: string | null
          email?: string | null
          fax_number?: string | null
          former_name?: string | null
          global_region?: string | null
          global_subregion?: string | null
          headquarters_address?: string | null
          headquarters_city?: string | null
          headquarters_country?: string | null
          headquarters_location?: string | null
          headquarters_postal_code?: string | null
          headquarters_state?: string | null
          id?: string
          investment_policy_description?: string | null
          investor_type?: string | null
          max_commitment_size?: number | null
          max_direct_investment_size?: number | null
          min_commitment_size?: number | null
          min_direct_investment_size?: number | null
          name?: string
          open_to_first_time_funds?: boolean | null
          phone_number?: string | null
          preferred_commitment_size?: number | null
          preferred_direct_investment_size?: number | null
          preferred_fund_types?: string[] | null
          preferred_geography?: string[] | null
          primary_contact_email?: string | null
          primary_contact_name?: string | null
          primary_contact_phone?: string | null
          primary_contact_title?: string | null
          target_alternatives_max_pct?: number | null
          target_alternatives_min_pct?: number | null
          target_private_equity_max_pct?: number | null
          target_private_equity_min_pct?: number | null
          target_real_estate_max_pct?: number | null
          target_real_estate_min_pct?: number | null
          target_special_opps_max_pct?: number | null
          target_special_opps_min_pct?: number | null
          total_direct_investments?: number | null
          updated_at?: string
          website?: string | null
          year_founded?: number | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
