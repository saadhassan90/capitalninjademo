import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

interface InvestorTableActionsProps {
  selectedCount: number;
}

export const InvestorTableActions = ({ selectedCount }: InvestorTableActionsProps) => {
  return (
    <>
      <div className="flex items-center justify-between gap-4">
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          Filters
        </Button>
      </div>

      {selectedCount > 0 && (
        <div className="flex items-center gap-2 mb-4">
          <span className="text-sm text-muted-foreground">
            {selectedCount} investor(s) selected
          </span>
        </div>
      )}
    </>
  );
};