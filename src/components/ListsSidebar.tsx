import { useEffect, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ListCard } from "@/components/lists/ListCard";
import { ListContextMenu } from "@/components/lists/ListContextMenu";
import { ListsHeader } from "@/components/lists/ListsHeader";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

interface List {
  id: string;
  name: string;
  description: string | null;
}

export const ListsSidebar = () => {
  const [lists, setLists] = useState<List[]>([]);
  const { toast } = useToast();
  const navigate = useNavigate();

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
    try {
      const { error } = await supabase
        .from("lists")
        .delete()
        .eq("id", id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "List deleted successfully",
      });
    } catch (error) {
      console.error("Error deleting list:", error);
      toast({
        title: "Error",
        description: "Failed to delete list",
        variant: "destructive",
      });
    }
  };

  const handleDuplicate = async (id: string) => {
    try {
      const listToDuplicate = lists.find(list => list.id === id);
      if (!listToDuplicate) return;

      const { error } = await supabase
        .from("lists")
        .insert([{
          name: `${listToDuplicate.name} (Copy)`,
          description: listToDuplicate.description
        }]);

      if (error) throw error;

      toast({
        title: "Success",
        description: "List duplicated successfully",
      });
    } catch (error) {
      console.error("Error duplicating list:", error);
      toast({
        title: "Error",
        description: "Failed to duplicate list",
        variant: "destructive",
      });
    }
  };

  const handleOpen = (id: string) => {
    navigate(`/lists/${id}`);
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
                onOpen={() => handleOpen(list.id)}
              />
            </ListContextMenu>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};