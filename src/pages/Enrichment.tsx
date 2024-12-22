import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { EnrichmentUpload } from "@/components/enrichment/EnrichmentUpload";
import { EnrichmentTable } from "@/components/enrichment/EnrichmentTable";

const Enrichment = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <main className="flex-1">
          <div className="container p-6">
            <div className="flex flex-col gap-6">
              <div>
                <h1 className="text-4xl font-bold mb-2">Investor Data Enrichment</h1>
                <p className="text-muted-foreground">
                  Upload your investor leads CSV and we'll enrich it with accurate, up-to-date information from our database.
                  Get comprehensive investor profiles with verified data.
                </p>
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