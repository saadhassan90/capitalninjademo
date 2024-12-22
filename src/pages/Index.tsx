import { InvestorTable } from "@/components/InvestorTable";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Users } from "lucide-react";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <div className="flex-1 flex flex-col min-h-screen">
          <main className="flex-1 overflow-y-auto">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 max-w-7xl">
              <div className="flex flex-col gap-4 mb-8">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold flex items-center gap-2">
                  <Users className="h-8 w-8" />
                  Investors
                </h1>
              </div>

              <InvestorTable />
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}

export default Index;