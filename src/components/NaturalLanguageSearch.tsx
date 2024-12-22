import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface NaturalLanguageSearchProps {
  onSearchResults: (results: string[]) => void;
}

export const NaturalLanguageSearch = ({ onSearchResults }: NaturalLanguageSearchProps) => {
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const { toast } = useToast();

  const handleSearch = async () => {
    if (!query.trim()) return;

    setIsSearching(true);
    try {
      const response = await fetch('https://api.perplexity.ai/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_PERPLEXITY_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'llama-3.1-sonar-small-128k-online',
          messages: [
            {
              role: 'system',
              content: 'You are helping filter a list of investors. Return only relevant search terms based on the user query. Format your response as a comma-separated list of keywords.'
            },
            {
              role: 'user',
              content: query
            }
          ],
          temperature: 0.2,
        }),
      });

      if (!response.ok) {
        throw new Error('Search failed');
      }

      const data = await response.json();
      const keywords = data.choices[0].message.content.split(',').map((k: string) => k.trim());
      onSearchResults(keywords);
    } catch (error) {
      toast({
        title: "Search Error",
        description: "Failed to process natural language search. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="flex gap-2 w-full max-w-2xl mb-6">
      <Input
        placeholder="Describe the investor you're looking for..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        className="flex-1"
      />
      <Button onClick={handleSearch} disabled={isSearching}>
        <Search className="h-4 w-4 mr-2" />
        {isSearching ? "Searching..." : "Search"}
      </Button>
    </div>
  );
};