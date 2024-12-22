import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { InvestorTable } from "@/components/InvestorTable";
import { ListsSidebar } from "@/components/ListsSidebar";
import { useState } from "react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Investor Database</h1>
          <p className="text-muted-foreground">Search, organize, and export investor data</p>
        </header>

        <div className="flex gap-6">
          <ListsSidebar />
          
          <main className="flex-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1">
                <Input
                  placeholder="Search investors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                />
              </div>
              <Button>Export List</Button>
            </div>
            
            <InvestorTable searchQuery={searchQuery} />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Index;