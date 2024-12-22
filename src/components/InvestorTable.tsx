import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

// Mock data - in a real app this would come from your backend
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
  // Add more mock investors here
];

interface InvestorTableProps {
  searchQuery: string;
}

export const InvestorTable = ({ searchQuery }: InvestorTableProps) => {
  const filteredInvestors = investors.filter((investor) =>
    Object.values(investor).some((value) =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
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
  );
};