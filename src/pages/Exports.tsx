import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { mockExports } from "@/data/mockInvestors";
import { format } from "date-fns";

const Exports = () => {
  const handleDownload = (id: string) => {
    console.log(`Downloading export ${id}`);
    // In a real implementation, this would trigger the actual download
  };

  return (
    <SidebarProvider>
      <div className="grid grid-cols-[auto,1fr] h-screen w-full">
        <AppSidebar />
        <main className="overflow-auto p-8">
          <div className="max-w-6xl mx-auto space-y-6">
            <h1 className="text-3xl font-bold flex items-center gap-2">
              <Download className="h-8 w-8" />
              Exports
            </h1>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockExports.map((exportItem) => (
                  <TableRow key={exportItem.id}>
                    <TableCell className="font-medium">{exportItem.name}</TableCell>
                    <TableCell>{exportItem.description}</TableCell>
                    <TableCell>
                      {format(new Date(exportItem.created_at), 'MMM d, yyyy')}
                    </TableCell>
                    <TableCell className="uppercase text-xs">
                      {exportItem.type}
                    </TableCell>
                    <TableCell>
                      <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset bg-green-50 text-green-700 ring-green-600/20">
                        {exportItem.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDownload(exportItem.id)}
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Exports;