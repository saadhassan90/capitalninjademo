import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { Copy, MoreVertical, Trash2, FolderOpen, Plus } from "lucide-react";

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
  const handleDelete = (id: number) => {
    console.log('Delete list:', id);
    // Implementation would go here
  };

  const handleDuplicate = (id: number) => {
    console.log('Duplicate list:', id);
    // Implementation would go here
  };

  const handleOpen = (id: number) => {
    console.log('Open list:', id);
    // Implementation would go here
  };

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
            <ContextMenu key={list.id}>
              <ContextMenuTrigger>
                <Card 
                  className="cursor-pointer hover:bg-accent transition-colors group relative"
                >
                  <CardHeader className="p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-base">{list.name}</CardTitle>
                        <CardDescription>{list.count} investors</CardDescription>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8"
                      >
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                </Card>
              </ContextMenuTrigger>
              <ContextMenuContent>
                <ContextMenuItem onClick={() => handleOpen(list.id)}>
                  <FolderOpen className="mr-2 h-4 w-4" />
                  Open
                </ContextMenuItem>
                <ContextMenuItem onClick={() => handleDuplicate(list.id)}>
                  <Copy className="mr-2 h-4 w-4" />
                  Duplicate
                </ContextMenuItem>
                <ContextMenuItem 
                  onClick={() => handleDelete(list.id)}
                  className="text-destructive"
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete
                </ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};