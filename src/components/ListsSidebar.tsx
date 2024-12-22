import { ScrollArea } from "@/components/ui/scroll-area";
import { ListCard } from "@/components/lists/ListCard";
import { ListContextMenu } from "@/components/lists/ListContextMenu";
import { ListsHeader } from "@/components/lists/ListsHeader";

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
      <ListsHeader />
      
      <ScrollArea className="h-[calc(100vh-200px)]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {lists.map((list) => (
            <ListContextMenu
              key={list.id}
              id={list.id}
              onOpen={handleOpen}
              onDuplicate={handleDuplicate}
              onDelete={handleDelete}
            >
              <ListCard
                id={list.id}
                name={list.name}
                count={list.count}
              />
            </ListContextMenu>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};
