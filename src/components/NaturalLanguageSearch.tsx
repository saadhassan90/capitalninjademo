import { useState } from "react";
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
    <div className="relative w-full max-w-4xl mx-auto mb-8">
      <input
        type="text"
        placeholder="Describe the investor you are looking for..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        className="w-full h-14 px-6 py-4 text-lg bg-gray-700/10 dark:bg-gray-800/80 rounded-xl border-0 focus:ring-2 focus:ring-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 placeholder:text-muted-foreground/60"
      />
      <Button 
        onClick={handleSearch} 
        disabled={isSearching}
        className="absolute right-2 top-2 h-10"
        variant="ghost"
      >
        <Search className="h-5 w-5" />
        <span className="sr-only">Search</span>
      </Button>
    </div>
  );
};