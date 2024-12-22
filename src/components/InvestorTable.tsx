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
import { Filter, Plus, Trash } from "lucide-react";

const investors = [
  {
    id: 1,
    name: "John Smith",
    firm: "Accel Partners",
    focus: "SaaS, Fintech",
    stage: "Series A-B",
    location: "San Francisco, CA",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    firm: "Sequoia Capital",
    focus: "Consumer Tech, AI",
    stage: "Seed-Series A",
    location: "New York, NY",
  },
  {
    id: 3,
    name: "Michael Chen",
    firm: "Andreessen Horowitz",
    focus: "AI, Enterprise Software",
    stage: "Series B-C",
    location: "Menlo Park, CA",
  },
];

interface InvestorTableProps {
  searchQuery?: string;
}

export const InvestorTable = ({ searchQuery = "" }: InvestorTableProps) => {
  const [selectedInvestors, setSelectedInvestors] = useState<number[]>([]);
  const [nlpKeywords, setNlpKeywords] = useState<string[]>([]);
  const [localSearchQuery, setLocalSearchQuery] = useState("");

  const handleSelectAll = () => {
    if (selectedInvestors.length === filteredInvestors.length) {
      setSelectedInvestors([]);
    } else {
      setSelectedInvestors(filteredInvestors.map(investor => investor.id));
    }
  };

  const handleSelectInvestor = (investorId: number) => {
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
      value.toString().toLowerCase().includes((searchQuery || localSearchQuery).toLowerCase())
    );

    const matchesNlp = nlpKeywords.length === 0 || nlpKeywords.some(keyword =>
      Object.values(investor).some(value =>
        value.toString().toLowerCase().includes(keyword.toLowerCase())
      )
    );

    return matchesSearch && matchesNlp;
  });

  return (
    <div className="space-y-6">
      <NaturalLanguageSearch onSearchResults={handleNaturalLanguageSearch} />
      
      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1">
          <Input
            placeholder="Search investors..."
            value={localSearchQuery}
            onChange={(e) => setLocalSearchQuery(e.target.value)}
            className="w-full"
          />
        </div>
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          Filters
        </Button>
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
              <TableHead>Firm</TableHead>
              <TableHead>Investment Focus</TableHead>
              <TableHead>Stage</TableHead>
              <TableHead>Location</TableHead>
              <TableHead className="w-[100px]">Actions</TableHead>
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
                <TableCell>{investor.firm}</TableCell>
                <TableCell>{investor.focus}</TableCell>
                <TableCell>{investor.stage}</TableCell>
                <TableCell>{investor.location}</TableCell>
                <TableCell>
                  <Button size="sm" variant="ghost">
                    <Plus className="h-4 w-4 mr-1" />
                    Add
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
