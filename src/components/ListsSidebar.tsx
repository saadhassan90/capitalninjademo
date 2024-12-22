import { useEffect, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ListCard } from "@/components/lists/ListCard";
import { ListContextMenu } from "@/components/lists/ListContextMenu";
import { ListsHeader } from "@/components/lists/ListsHeader";
import { supabase } from "@/integrations/supabase/client";

interface List {
  id: string;
  name: string;
  description: string | null;
}

export const ListsSidebar = () => {
  const [lists, setLists] = useState<List[]>([]);

  useEffect(() => {
    const fetchLists = async () => {
      const { data, error } = await supabase
        .from("lists")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching lists:", error);
        return;
      }

      setLists(data || []);
    };

    fetchLists();

    // Subscribe to changes
    const channel = supabase
      .channel('lists_changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'lists'
        },
        () => {
          fetchLists();
        }
      )
      .subscribe();

    return () => {
      channel.unsubscribe();
    };
  }, []);

  const handleDelete = async (id: string) => {
    const { error } = await supabase
      .from("lists")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Error deleting list:", error);
    }
  };

  const handleDuplicate = async (id: string) => {
    const listToDuplicate = lists.find(list => list.id === id);
    if (!listToDuplicate) return;

    const { error } = await supabase
      .from("lists")
      .insert([{
        name: `${listToDuplicate.name} (Copy)`,
        description: listToDuplicate.description
      }]);

    if (error) {
      console.error("Error duplicating list:", error);
    }
  };

  const handleOpen = (id: string) => {
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
                description={list.description}
              />
            </ListContextMenu>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};