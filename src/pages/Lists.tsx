import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { ListsSidebar } from "@/components/ListsSidebar";

const Lists = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <main className="flex-1">
          <div className="container p-6">
            <div className="flex flex-col gap-6">
              <div>
                <h1 className="text-4xl font-bold mb-2">My Lists</h1>
                <p className="text-muted-foreground">Organize and manage your investor lists</p>
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