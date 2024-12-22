import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MoreVertical } from "lucide-react";

interface ListCardProps {
  id: string;
  name: string;
  description: string | null;
  onOpen?: () => void;
}

export const ListCard = ({ id, name, description, onOpen }: ListCardProps) => {
  return (
    <Card className="group relative">
      <CardHeader className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex-1 cursor-pointer" onClick={onOpen}>
            <CardTitle className="text-base">{name}</CardTitle>
            {description && (
              <CardDescription className="line-clamp-2">{description}</CardDescription>
            )}
          </div>
          {/* The context menu trigger will be wrapped around this button by the parent component */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <MoreVertical className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
    </Card>
  );
};