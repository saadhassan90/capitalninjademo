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
    <div className="container mx-auto py-8 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Exported Lists</h1>
      </div>

      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>List Name</TableHead>
              <TableHead>File Name</TableHead>
              <TableHead>Export Date</TableHead>
              <TableHead>Row Count</TableHead>
              <TableHead>File Size</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockExports.map((export_) => (
              <TableRow key={export_.id}>
                <TableCell className="font-medium">{export_.listName}</TableCell>
                <TableCell>{export_.fileName}</TableCell>
                <TableCell>{formatDistanceToNow(export_.exportDate, { addSuffix: true })}</TableCell>
                <TableCell>{export_.rowCount.toLocaleString()} rows</TableCell>
                <TableCell>{export_.fileSize}</TableCell>
                <TableCell className="text-right">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDownload(export_.fileName)}
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
    </div>
  );
}