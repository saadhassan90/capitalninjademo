import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Eye, ListPlus, Plus } from "lucide-react";
import { InvestorProfileDrawer } from "./InvestorProfileDrawer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface InvestorRowActionsProps {
  investor: {
    id: string;
    name: string;
    investor_type: string | null;
    headquarters_location: string | null;
    aum_millions: number | null;
    primary_contact_name: string | null;
    primary_contact_email: string | null;
    description: string | null;
    website: string | null;
    phone_number: string | null;
    year_founded: number | null;
    headquarters_address: string | null;
    headquarters_city: string | null;
    headquarters_state: string | null;
    headquarters_country: string | null;
    primary_contact_title: string | null;
    primary_contact_phone: string | null;
    allocation_alternatives_pct: number | null;
    allocation_private_equity_pct: number | null;
    allocation_real_estate_pct: number | null;
    allocation_hedge_funds_pct: number | null;
    allocation_equities_pct: number | null;
    allocation_fixed_income_pct: number | null;
    allocation_cash_pct: number | null;
  };
}

export const InvestorRowActions = ({ investor }: InvestorRowActionsProps) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isListDialogOpen, setIsListDialogOpen] = useState(false);
  const [newListName, setNewListName] = useState("");
  const [newListDescription, setNewListDescription] = useState("");
  const { toast } = useToast();

  const { data: lists = [], refetch: refetchLists } = useQuery({
    queryKey: ['lists'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('lists')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data;
    },
  });

  const handleCreateList = async () => {
    if (!newListName.trim()) return;

    try {
      const { data: newList, error: createError } = await supabase
        .from('lists')
        .insert([{ name: newListName, description: newListDescription }])
        .select()
        .single();

      if (createError) throw createError;

      await handleAddToList(newList.id);
      setNewListName("");
      setNewListDescription("");
      refetchLists();

      toast({
        title: "Success",
        description: "New list created and investor added",
      });
    } catch (error) {
      console.error('Error creating list:', error);
      toast({
        title: "Error",
        description: "Failed to create list",
        variant: "destructive",
      });
    }
  };

  const handleAddToList = async (listId: string) => {
    try {
      // Using upsert to handle duplicates
      const { error } = await supabase
        .from('list_investors')
        .upsert(
          { list_id: listId, investor_id: investor.id },
          { onConflict: 'list_id,investor_id' }
        );

      if (error) throw error;

      toast({
        title: "Success",
        description: "Investor added to list",
      });
      setIsListDialogOpen(false);
    } catch (error) {
      console.error('Error adding to list:', error);
      toast({
        title: "Error",
        description: "Failed to add investor to list",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <div className="flex items-center gap-2">
        <Button 
          size="sm" 
          variant="outline"
          className="font-medium"
          onClick={() => setIsProfileOpen(true)}
        >
          <Eye className="h-4 w-4 mr-2" />
          View
        </Button>
        <Button 
          size="sm" 
          variant="ghost"
          className="text-muted-foreground"
          onClick={() => setIsListDialogOpen(true)}
        >
          <ListPlus className="h-4 w-4 mr-2" />
          Add to List
        </Button>
      </div>

      <InvestorProfileDrawer 
        investor={investor}
        open={isProfileOpen}
        onOpenChange={setIsProfileOpen}
      />

      <Dialog open={isListDialogOpen} onOpenChange={setIsListDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add to List</DialogTitle>
            <DialogDescription>
              Choose an existing list or create a new one
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col gap-4">
            <div className="space-y-4 pb-4 border-b">
              <div className="space-y-2">
                <Input
                  placeholder="New list name"
                  value={newListName}
                  onChange={(e) => setNewListName(e.target.value)}
                />
                <Input
                  placeholder="Description (optional)"
                  value={newListDescription}
                  onChange={(e) => setNewListDescription(e.target.value)}
                />
                <Button 
                  onClick={handleCreateList}
                  disabled={!newListName.trim()}
                  className="w-full"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Create New List
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-medium">Existing Lists</h4>
              <ScrollArea className="h-[200px]">
                <div className="space-y-2">
                  {lists.map((list) => (
                    <Button
                      key={list.id}
                      variant="outline"
                      className="w-full justify-start"
                      onClick={() => handleAddToList(list.id)}
                    >
                      {list.name}
                    </Button>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};