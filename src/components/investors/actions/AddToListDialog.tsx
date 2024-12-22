import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Plus } from "lucide-react";
import { useState } from "react";

interface AddToListDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  lists: any[];
  onCreateList: (name: string, description: string) => Promise<void>;
  onAddToList: (listId: string) => Promise<void>;
}

export const AddToListDialog = ({
  open,
  onOpenChange,
  lists,
  onCreateList,
  onAddToList,
}: AddToListDialogProps) => {
  const [newListName, setNewListName] = useState("");
  const [newListDescription, setNewListDescription] = useState("");

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
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
                onClick={() => onCreateList(newListName, newListDescription)}
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
                    onClick={() => onAddToList(list.id)}
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
  );
};