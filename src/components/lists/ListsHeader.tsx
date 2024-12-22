import { CreateListDialog } from "@/components/lists/CreateListDialog";

interface ListsHeaderProps {
  onNewList?: (list: { id: string; name: string; description: string | null }) => void;
}

export const ListsHeader = ({ onNewList }: ListsHeaderProps) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <CreateListDialog onNewList={onNewList} />
    </div>
  );
};