import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { NaturalLanguageSearch } from "@/components/NaturalLanguageSearch";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { InvestorTableActions } from "./investors/InvestorTableActions";
import { InvestorRowActions } from "./investors/InvestorRowActions";

interface Investor {
  id: string;
  name: string;
  investor_type: string | null;
  headquarters_location: string | null;
  aum_millions: number | null;
  primary_contact_name: string | null;
  primary_contact_email: string | null;
  description: string | null;
  website: string | null;
  phone_number: string | null;
  year_founded: number | null;
  headquarters_address: string | null;
  headquarters_city: string | null;
  headquarters_state: string | null;
  headquarters_country: string | null;
  primary_contact_title: string | null;
  primary_contact_phone: string | null;
  allocation_alternatives_pct: number | null;
  allocation_private_equity_pct: number | null;
  allocation_real_estate_pct: number | null;
  allocation_hedge_funds_pct: number | null;
  allocation_equities_pct: number | null;
  allocation_fixed_income_pct: number | null;
  allocation_cash_pct: number | null;
}

interface InvestorTableProps {
  searchQuery?: string;
}

export const InvestorTable = ({ searchQuery = "" }: InvestorTableProps) => {
  const [selectedInvestors, setSelectedInvestors] = useState<string[]>([]);
  const [localSearchQuery, setLocalSearchQuery] = useState("");

  const { data: investors = [], isLoading } = useQuery({
    queryKey: ['investors'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('investors')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data as Investor[];
    },
  });

  const handleSelectAll = () => {
    if (selectedInvestors.length === filteredInvestors.length) {
      setSelectedInvestors([]);
    } else {
      setSelectedInvestors(filteredInvestors.map(investor => investor.id));
    }
  };

  const handleSelectInvestor = (investorId: string) => {
    setSelectedInvestors(prev =>
      prev.includes(investorId)
        ? prev.filter(id => id !== investorId)
        : [...prev, investorId]
    );
  };

  const handleSearch = (query: string) => {
    setLocalSearchQuery(query);
  };

  const filteredInvestors = investors.filter((investor) => {
    const searchTerm = (searchQuery || localSearchQuery).toLowerCase();
    if (!searchTerm) return true;
    
    return Object.values(investor).some((value) =>
      value?.toString().toLowerCase().includes(searchTerm)
    );
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <NaturalLanguageSearch onSearchResults={handleSearch} />
      
      <InvestorTableActions selectedCount={selectedInvestors.length} />

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">
                <Checkbox
                  checked={selectedInvestors.length === filteredInvestors.length && filteredInvestors.length > 0}
                  onCheckedChange={handleSelectAll}
                />
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>AUM (M)</TableHead>
              <TableHead>Contact Name</TableHead>
              <TableHead>Contact Email</TableHead>
              <TableHead className="w-[200px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredInvestors.map((investor) => (
              <TableRow key={investor.id}>
                <TableCell>
                  <Checkbox
                    checked={selectedInvestors.includes(investor.id)}
                    onCheckedChange={() => handleSelectInvestor(investor.id)}
                  />
                </TableCell>
                <TableCell className="font-medium">{investor.name}</TableCell>
                <TableCell>{investor.investor_type}</TableCell>
                <TableCell>{investor.headquarters_location}</TableCell>
                <TableCell>{investor.aum_millions ? `$${investor.aum_millions}M` : '-'}</TableCell>
                <TableCell>{investor.primary_contact_name}</TableCell>
                <TableCell>{investor.primary_contact_email}</TableCell>
                <TableCell>
                  <InvestorRowActions investor={investor} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};