import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Plus } from "lucide-react";

// Mock data - in a real app this would come from your backend
const lists = [
  { id: 1, name: "Seed Investors", count: 12 },
  { id: 2, name: "Series A VCs", count: 8 },
  { id: 3, name: "Fintech Focus", count: 15 },
  { id: 4, name: "Healthcare VCs", count: 10 },
  { id: 5, name: "Impact Investors", count: 7 },
  { id: 6, name: "Growth Equity", count: 20 },
];

export const ListsSidebar = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">My Lists</h2>
        <Button size="sm">
          <Plus className="h-4 w-4 mr-1" />
          New List
        </Button>
      </div>
      
      <ScrollArea className="h-[calc(100vh-200px)]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {lists.map((list) => (
            <Card 
              key={list.id} 
              className="cursor-pointer hover:bg-accent transition-colors"
            >
              <CardHeader className="p-4">
                <CardTitle className="text-base">{list.name}</CardTitle>
                <CardDescription>{list.count} investors</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};