import { Button } from "@/components/ui/button";
import { Filter, Plus } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

interface InvestorTableActionsProps {
  selectedCount: number;
  onFilterChange: (filters: Record<string, string>) => void;
}

export const InvestorTableActions = ({ 
  selectedCount, 
  onFilterChange 
}: InvestorTableActionsProps) => {
  const [filters, setFilters] = useState<Record<string, string>>({});
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [lists, setLists] = useState<{ id: string; name: string }[]>([]);
  const [isListsOpen, setIsListsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { toast } = useToast();

  const filterOptions = [
    { label: "Name", field: "name" },
    { label: "Type", field: "investor_type" },
    { label: "Location", field: "headquarters_location" },
    { label: "AUM", field: "aum_millions" },
    { label: "Contact Name", field: "primary_contact_name" },
    { label: "Contact Email", field: "primary_contact_email" },
  ];

  const handleFilterChange = (field: string, value: string) => {
    const newFilters = {
      ...filters,
      [field]: value,
    };
    if (!value) {
      delete newFilters[field];
    }
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const fetchLists = async () => {
    const { data, error } = await supabase
      .from("lists")
      .select("id, name")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching lists:", error);
      return;
    }

    setLists(data || []);
  };

  const handleAddToList = async (listId: string) => {
    toast({
      title: "Success",
      description: `Added ${selectedCount} investors to list`,
    });
    setIsListsOpen(false);
  };

  return (
    <>
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filters {Object.keys(filters).length > 0 && `(${Object.keys(filters).length})`}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80" align="start">
              <DropdownMenuLabel>Filter by</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                {filterOptions.map((option) => (
                  <DropdownMenuItem
                    key={option.field}
                    onSelect={(e) => {
                      e.preventDefault();
                      setActiveFilter(option.field);
                    }}
                  >
                    <div className="flex flex-col w-full gap-2">
                      <div className="flex items-center justify-between">
                        <span>{option.label}</span>
                        {filters[option.field] && " ✓"}
                      </div>
                      {activeFilter === option.field && (
                        <div className="pt-2">
                          <Input
                            placeholder={`Filter by ${option.label.toLowerCase()}...`}
                            value={filters[option.field] || ""}
                            onChange={(e) => handleFilterChange(option.field, e.target.value)}
                          />
                        </div>
                      )}
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          {selectedCount > 0 && (
            <Dialog open={isListsOpen} onOpenChange={setIsListsOpen}>
              <DialogTrigger asChild>
                <Button 
                  variant="outline"
                  onClick={() => {
                    fetchLists();
                    setIsListsOpen(true);
                  }}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add to List
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add to List</DialogTitle>
                  <DialogDescription>
                    Choose a list to add {selectedCount} selected investor(s)
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-2 py-4">
                  {lists.map((list) => (
                    <Button
                      key={list.id}
                      variant="outline"
                      className="w-full justify-start"
                      onClick={() => handleAddToList(list.id)}
                    >
                      {list.name}
                    </Button>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          )}
        </div>
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