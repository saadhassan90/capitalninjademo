import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
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
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { useState } from "react";

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

  return (
    <>
      <div className="flex items-center justify-between gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filters {Object.keys(filters).length > 0 && `(${Object.keys(filters).length})`}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
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
                  {option.label}
                  {filters[option.field] && " ✓"}
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        {activeFilter && (
          <Popover open={true} onOpenChange={() => setActiveFilter(null)}>
            <PopoverTrigger asChild>
              <div />
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="space-y-4">
                <h4 className="font-medium leading-none">
                  Filter by {filterOptions.find(opt => opt.field === activeFilter)?.label}
                </h4>
                <div className="space-y-2">
                  <Input
                    placeholder="Enter value..."
                    value={filters[activeFilter] || ""}
                    onChange={(e) => handleFilterChange(activeFilter, e.target.value)}
                  />
                </div>
              </div>
            </PopoverContent>
          </Popover>
        )}
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