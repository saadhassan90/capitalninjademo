import { Button } from "@/components/ui/button";
import { View, Send } from "lucide-react";

export const InvestorRowActions = () => {
  return (
    <div className="flex gap-2">
      <Button size="sm" variant="ghost">
        <View className="h-4 w-4 mr-2" />
        View
      </Button>
      <Button size="sm" variant="ghost">
        <Send className="h-4 w-4 mr-2" />
        Send to List
      </Button>
    </div>
  );
};