import { CreateListDialog } from "@/components/lists/CreateListDialog";

export const ListsHeader = () => {
  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-lg font-semibold">My Lists</h2>
      <CreateListDialog />
    </div>
  );
};