import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { Copy, FolderOpen, Trash2 } from "lucide-react";

interface ListContextMenuProps {
  children: React.ReactNode;
  id: string;
  onOpen: (id: string) => void;
  onDuplicate: (id: string) => void;
  onDelete: (id: string) => void;
}

export const ListContextMenu = ({ 
  children, 
  id, 
  onOpen, 
  onDuplicate, 
  onDelete 
}: ListContextMenuProps) => {
  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        {children}
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem onClick={() => onOpen(id)}>
          <FolderOpen className="mr-2 h-4 w-4" />
          Open
        </ContextMenuItem>
        <ContextMenuItem onClick={() => onDuplicate(id)}>
          <Copy className="mr-2 h-4 w-4" />
          Duplicate
        </ContextMenuItem>
        <ContextMenuItem 
          onClick={() => onDelete(id)}
          className="text-destructive"
        >
          <Trash2 className="mr-2 h-4 w-4" />
          Delete
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
};