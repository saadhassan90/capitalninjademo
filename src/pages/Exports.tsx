import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

const Exports = () => {
  return (
    <SidebarProvider>
      <div className="grid grid-cols-[auto,1fr] h-screen w-full">
        <AppSidebar />
        <main className="overflow-auto p-8">
          <div className="max-w-6xl mx-auto space-y-6">
            <h1 className="text-3xl font-bold">Exports</h1>
            <p className="text-muted-foreground">
              This is the new exports page. You can start implementing your desired export functionality here.
            </p>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Exports;