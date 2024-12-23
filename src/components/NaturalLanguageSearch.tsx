import React from 'react';
import { Search } from 'lucide-react';

interface NaturalLanguageSearchProps {
  onSearchResults: (searchQuery: string) => void;
}

export const NaturalLanguageSearch = ({ onSearchResults }: NaturalLanguageSearchProps) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchResults(e.target.value);
  };

  const searchContainerStyle = {
    position: 'relative' as const
  };

  const searchIconStyle = {
    position: 'absolute' as const,
    left: '12px',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '16px',
    height: '16px',
    color: '#6b7280'
  };

  const inputStyle = {
    width: '100%',
    padding: '10px 12px 10px 36px',
    fontSize: '14px',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    backgroundColor: 'white',
    outline: 'none',
    transition: 'border-color 0.2s',
    ':focus': {
      borderColor: '#3b82f6'
    }
  };

  return (
    <div style={searchContainerStyle}>
      <Search style={searchIconStyle} />
      <input
        placeholder="Search investors..."
        onChange={handleSearch}
        style={inputStyle}
      />
    </div>
  );
};