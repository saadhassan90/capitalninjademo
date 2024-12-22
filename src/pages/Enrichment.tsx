import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { EnrichmentUpload } from "@/components/enrichment/EnrichmentUpload";
import { EnrichmentTable } from "@/components/enrichment/EnrichmentTable";
import { Sparkles } from "lucide-react";

const Enrichment = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <main className="flex-1">
          <div className="container p-6">
            <div className="flex flex-col gap-6">
              <div>
                <h1 className="text-4xl font-bold flex items-center gap-2">
                  <Sparkles className="h-8 w-8" />
                  Enrichment
                </h1>
              </div>

              <EnrichmentUpload />
              <EnrichmentTable />
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Enrichment;