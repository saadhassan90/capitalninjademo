import { InvestorTable } from "@/components/InvestorTable";
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function Index() {
  return (
    <SidebarProvider>
      <div className="flex h-screen">
        <AppSidebar />
        <main className="flex-1 overflow-hidden bg-background">
          <div className="container py-6">
            <h1 className="text-3xl font-bold mb-6">Investors</h1>
            <InvestorTable />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}