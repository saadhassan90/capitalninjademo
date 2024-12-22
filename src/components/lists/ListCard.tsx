import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MoreVertical } from "lucide-react";

interface ListCardProps {
  id: number;
  name: string;
  count: number;
}

export const ListCard = ({ id, name, count }: ListCardProps) => {
  return (
    <Card className="cursor-pointer hover:bg-accent transition-colors group relative">
      <CardHeader className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-base">{name}</CardTitle>
            <CardDescription>{count} investors</CardDescription>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8"
          >
            <MoreVertical className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
    </Card>
  );
};