import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

// Mock data for exports
const mockExports = [
  {
    id: "1",
    listName: "Top Tech Investors",
    fileName: "top-tech-investors-2024-03-22.csv",
    exportDate: new Date("2024-03-22T10:30:00"),
    rowCount: 150,
    fileSize: "2.3MB"
  },
  {
    id: "2",
    listName: "Real Estate Funds",
    fileName: "real-estate-funds-2024-03-21.csv",
    exportDate: new Date("2024-03-21T15:45:00"),
    rowCount: 75,
    fileSize: "1.1MB"
  },
  {
    id: "3",
    listName: "Angel Investors",
    fileName: "angel-investors-2024-03-20.csv",
    exportDate: new Date("2024-03-20T09:15:00"),
    rowCount: 200,
    fileSize: "3.5MB"
  }
];

export default function Exports() {
  const handleDownload = (fileName: string) => {
    // Mock download functionality
    console.log(`Downloading ${fileName}`);
  };

  return (
    <div className="container max-w-5xl mx-auto py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-foreground">Downloads</h1>
        <p className="text-muted-foreground mt-2">Access and download your exported investor lists</p>
      </div>

      <div className="bg-card rounded-lg border shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="w-[250px]">List</TableHead>
              <TableHead className="hidden md:table-cell">Date</TableHead>
              <TableHead className="hidden sm:table-cell text-right">Size</TableHead>
              <TableHead className="hidden lg:table-cell text-right">Records</TableHead>
              <TableHead className="w-[100px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockExports.map((export_) => (
              <TableRow key={export_.id} className="hover:bg-muted/50">
                <TableCell>
                  <div>
                    <p className="font-medium text-foreground">{export_.listName}</p>
                    <p className="text-sm text-muted-foreground hidden sm:block">{export_.fileName}</p>
                  </div>
                </TableCell>
                <TableCell className="hidden md:table-cell text-muted-foreground">
                  {formatDistanceToNow(export_.exportDate, { addSuffix: true })}
                </TableCell>
                <TableCell className="hidden sm:table-cell text-right text-muted-foreground">
                  {export_.fileSize}
                </TableCell>
                <TableCell className="hidden lg:table-cell text-right text-muted-foreground">
                  {export_.rowCount.toLocaleString()}
                </TableCell>
                <TableCell>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDownload(export_.fileName)}
                    className="w-full"
                  >
                    <Download className="h-4 w-4" />
                    <span className="sr-only">Download {export_.listName}</span>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}