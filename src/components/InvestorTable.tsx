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
import { InvestorTableActions } from "./investors/InvestorTableActions";
import { InvestorRowActions } from "./investors/InvestorRowActions";
import { mockInvestors } from "@/data/mockInvestors";

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
  const [filters, setFilters] = useState<Record<string, string>>({});

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

  const handleFilterChange = (newFilters: Record<string, string>) => {
    setFilters(newFilters);
  };

  const filteredInvestors = mockInvestors.filter((investor) => {
    // Apply search filter
    const searchTerm = (searchQuery || localSearchQuery).toLowerCase();
    const matchesSearch = !searchTerm || Object.values(investor).some((value) =>
      value?.toString().toLowerCase().includes(searchTerm)
    );

    // Apply column filters
    const matchesFilters = Object.entries(filters).every(([field, value]) => {
      const fieldValue = investor[field as keyof Investor];
      return !value || 
        fieldValue?.toString().toLowerCase().includes(value.toLowerCase());
    });

    return matchesSearch && matchesFilters;
  });

  return (
    <div className="flex flex-col h-[calc(100vh-12rem)] space-y-6">
      <div className="w-full flex-none">
        <NaturalLanguageSearch onSearchResults={handleSearch} />
      </div>
      
      <div className="w-full flex-none">
        <InvestorTableActions 
          selectedCount={selectedInvestors.length} 
          onFilterChange={handleFilterChange}
        />
      </div>

      <div className="relative flex-1 min-h-0 w-full border rounded-md">
        <div className="absolute inset-0 overflow-auto">
          <Table>
            <TableHeader className="sticky top-0 z-10">
              <TableRow>
                <TableHead className="sticky left-0 z-20 bg-background w-[50px]">
                  <Checkbox
                    checked={selectedInvestors.length === filteredInvestors.length && filteredInvestors.length > 0}
                    onCheckedChange={handleSelectAll}
                  />
                </TableHead>
                <TableHead className="min-w-[200px]">Name</TableHead>
                <TableHead className="min-w-[150px]">Type</TableHead>
                <TableHead className="min-w-[150px]">Location</TableHead>
                <TableHead className="min-w-[100px]">AUM (M)</TableHead>
                <TableHead className="min-w-[150px]">Contact Name</TableHead>
                <TableHead className="min-w-[200px]">Contact Email</TableHead>
                <TableHead className="sticky right-0 z-20 bg-background w-[100px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredInvestors.map((investor) => (
                <TableRow key={investor.id}>
                  <TableCell className="sticky left-0 bg-background">
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
                  <TableCell className="sticky right-0 bg-background">
                    <InvestorRowActions investor={investor} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};