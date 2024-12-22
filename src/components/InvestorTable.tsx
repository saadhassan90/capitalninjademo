import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { NaturalLanguageSearch } from "@/components/NaturalLanguageSearch";
import { Filter, Trash, View, Send } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { InvestorUpload } from "./InvestorUpload";

interface Investor {
  id: string;
  name: string;
  investor_type: string | null;
  headquarters_location: string | null;
  aum_millions: number | null;
  primary_contact_name: string | null;
  primary_contact_email: string | null;
}

interface InvestorTableProps {
  searchQuery?: string;
}

export const InvestorTable = ({ searchQuery = "" }: InvestorTableProps) => {
  const [selectedInvestors, setSelectedInvestors] = useState<string[]>([]);
  const [nlpKeywords, setNlpKeywords] = useState<string[]>([]);
  const [localSearchQuery, setLocalSearchQuery] = useState("");

  const { data: investors = [], isLoading } = useQuery({
    queryKey: ['investors'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('investors')
        .select('id, name, investor_type, headquarters_location, aum_millions, primary_contact_name, primary_contact_email')
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

  const handleNaturalLanguageSearch = (keywords: string[]) => {
    setNlpKeywords(keywords);
  };

  const filteredInvestors = investors.filter((investor) => {
    const matchesSearch = Object.values(investor).some((value) =>
      value?.toString().toLowerCase().includes((searchQuery || localSearchQuery).toLowerCase())
    );

    const matchesNlp = nlpKeywords.length === 0 || nlpKeywords.some(keyword =>
      Object.values(investor).some(value =>
        value?.toString().toLowerCase().includes(keyword.toLowerCase())
      )
    );

    return matchesSearch && matchesNlp;
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <NaturalLanguageSearch onSearchResults={handleNaturalLanguageSearch} />
      
      <div className="flex items-center justify-between gap-4">
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          Filters
        </Button>
        <InvestorUpload />
      </div>

      {selectedInvestors.length > 0 && (
        <div className="flex items-center gap-2 mb-4">
          <Button variant="destructive" size="sm">
            <Trash className="h-4 w-4 mr-2" />
            Delete Selected
          </Button>
          <span className="text-sm text-muted-foreground">
            {selectedInvestors.length} investor(s) selected
          </span>
        </div>
      )}

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
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost">
                      <View className="h-4 w-4 mr-2" />
                      View
                    </Button>
                    <Button size="sm" variant="ghost">
                      <Send className="h-4 w-4 mr-2" />
                      Send to List
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};