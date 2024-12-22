import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { InvestorTable } from "@/components/InvestorTable";
import { ListsSidebar } from "@/components/ListsSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { useState } from "react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <main className="flex-1">
          <div className="container p-6">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-4xl font-bold mb-2">Investor Database</h1>
                <p className="text-muted-foreground">Search, organize, and export investor data</p>
              </div>
              <SidebarTrigger />
            </div>

            <div className="flex gap-6">
              <ListsSidebar />
              
              <div className="flex-1">
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
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;