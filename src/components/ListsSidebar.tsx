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
];

export const ListsSidebar = () => {
  return (
    <aside className="w-[300px] shrink-0">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">My Lists</h2>
        <Button size="sm">
          <Plus className="h-4 w-4 mr-1" />
          New List
        </Button>
      </div>
      
      <ScrollArea className="h-[calc(100vh-200px)]">
        <div className="space-y-3">
          {lists.map((list) => (
            <Card key={list.id} className="cursor-pointer hover:bg-accent">
              <CardHeader className="p-4">
                <CardTitle className="text-base">{list.name}</CardTitle>
                <CardDescription>{list.count} investors</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </aside>
  );
};