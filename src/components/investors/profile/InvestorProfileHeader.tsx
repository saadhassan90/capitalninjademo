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
    <DialogHeader className="p-6 border-b bg-card">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <DialogTitle className="text-2xl font-semibold">{investor.name}</DialogTitle>
          {investor.investor_type && (
            <span className="text-muted-foreground text-sm">{investor.investor_type}</span>
          )}
        </div>
        <Button 
          variant="outline" 
          size="sm"
          onClick={onAddToList}
        >
          <ListPlus className="h-4 w-4 mr-2" />
          Add to List
        </Button>
      </div>
    </DialogHeader>
  );
};