import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export const ListsHeader = () => {
  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-lg font-semibold">My Lists</h2>
      <Button size="sm">
        <Plus className="h-4 w-4 mr-1" />
        New List
      </Button>
    </div>
  );
};