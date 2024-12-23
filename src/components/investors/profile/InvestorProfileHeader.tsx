import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ListPlus } from "lucide-react";

interface InvestorProfileHeaderProps {
  investor: {
    name: string;
    investor_type?: string | null;
  };
  onAddToList: () => void;
}

export const InvestorProfileHeader = ({ investor, onAddToList }: InvestorProfileHeaderProps) => {
  return (
    <DialogHeader className="p-6 border-b bg-background sticky top-0 z-40">
      <div className="flex items-center justify-between pr-12">
        <div className="space-y-1.5">
          <DialogTitle className="text-2xl font-semibold tracking-tight">{investor.name}</DialogTitle>
          {investor.investor_type && (
            <div className="flex items-center gap-2">
              <span className="bg-primary/10 text-primary text-xs px-2.5 py-0.5 rounded-full font-medium">
                {investor.investor_type}
              </span>
            </div>
          )}
        </div>
        <Button 
          variant="outline" 
          size="sm"
          onClick={onAddToList}
          className="gap-2"
        >
          <ListPlus className="h-4 w-4" />
          Add to List
        </Button>
      </div>
    </DialogHeader>
  );
};