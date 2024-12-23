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

  const tableContainerStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    height: 'calc(100vh - 12rem)',
    gap: '24px'
  };

  const searchSectionStyle = {
    width: '100%',
    flexShrink: 0
  };

  const tableWrapperStyle = {
    position: 'relative' as const,
    flex: 1,
    minHeight: 0,
    width: '100%',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    backgroundColor: 'white'
  };

  const scrollContainerStyle = {
    position: 'absolute' as const,
    inset: 0,
    overflowAuto: 'auto'
  };

  return (
    <div style={tableContainerStyle}>
      <div style={searchSectionStyle}>
        <NaturalLanguageSearch onSearchResults={handleSearch} />
      </div>
      
      <div style={searchSectionStyle}>
        <InvestorTableActions 
          selectedCount={selectedInvestors.length} 
          onFilterChange={handleFilterChange}
        />
      </div>

      <div style={tableWrapperStyle}>
        <div style={scrollContainerStyle}>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead style={{ width: '50px', position: 'sticky', left: 0, zIndex: 20, backgroundColor: 'white' }}>
                  <Checkbox
                    checked={selectedInvestors.length === filteredInvestors.length && filteredInvestors.length > 0}
                    onCheckedChange={handleSelectAll}
                  />
                </TableHead>
                <TableHead style={{ minWidth: '200px' }}>Name</TableHead>
                <TableHead style={{ minWidth: '150px' }}>Type</TableHead>
                <TableHead style={{ minWidth: '150px' }}>Location</TableHead>
                <TableHead style={{ minWidth: '100px' }}>AUM (M)</TableHead>
                <TableHead style={{ minWidth: '150px' }}>Contact Name</TableHead>
                <TableHead style={{ minWidth: '200px' }}>Contact Email</TableHead>
                <TableHead style={{ width: '100px', position: 'sticky', right: 0, zIndex: 20, backgroundColor: 'white' }}>
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredInvestors.map((investor) => (
                <TableRow key={investor.id}>
                  <TableCell style={{ position: 'sticky', left: 0, backgroundColor: 'white' }}>
                    <Checkbox
                      checked={selectedInvestors.includes(investor.id)}
                      onCheckedChange={() => handleSelectInvestor(investor.id)}
                    />
                  </TableCell>
                  <TableCell style={{ fontWeight: 500 }}>{investor.name}</TableCell>
                  <TableCell>{investor.investor_type}</TableCell>
                  <TableCell>{investor.headquarters_location}</TableCell>
                  <TableCell>{investor.aum_millions ? `$${investor.aum_millions}M` : '-'}</TableCell>
                  <TableCell>{investor.primary_contact_name}</TableCell>
                  <TableCell>{investor.primary_contact_email}</TableCell>
                  <TableCell style={{ position: 'sticky', right: 0, backgroundColor: 'white' }}>
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
