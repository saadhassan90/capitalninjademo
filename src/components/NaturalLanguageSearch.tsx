import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

interface NaturalLanguageSearchProps {
  onSearchResults: (keywords: string[]) => void;
}

export const NaturalLanguageSearch = ({ onSearchResults }: NaturalLanguageSearchProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Split the search query into keywords, removing empty strings
    const keywords = searchQuery
      .toLowerCase()
      .split(' ')
      .filter(keyword => keyword.trim() !== '');
    
    onSearchResults(keywords);
  };

  return (
    <form onSubmit={handleSearch} className="relative">
      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        placeholder="Search investors using natural language..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="pl-8"
      />
    </form>
  );
};