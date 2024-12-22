import React from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

interface NaturalLanguageSearchProps {
  onSearchResults: (searchQuery: string) => void;
}

export const NaturalLanguageSearch = ({ onSearchResults }: NaturalLanguageSearchProps) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchResults(e.target.value);
  };

  return (
    <div className="relative">
      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        placeholder="Search investors..."
        onChange={handleSearch}
        className="pl-8"
      />
    </div>
  );
};