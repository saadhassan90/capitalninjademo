import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { ListsSidebar } from "@/components/ListsSidebar";
import { List } from "lucide-react";

const Lists = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <main className="flex-1">
          <div className="container p-6">
            <div className="flex flex-col gap-6">
              <div>
                <h1 className="text-4xl font-bold flex items-center gap-2">
                  <List className="h-8 w-8" />
                  My Lists
                </h1>
              </div>

              <ListsSidebar />
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Lists;