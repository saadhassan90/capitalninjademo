import { useState } from "react";
import { Download } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

type EnrichmentStatus = "Completed" | "In Progress" | "Pending";

interface EnrichmentFile {
  id: string;
  filename: string;
  status: EnrichmentStatus;
  uploadedAt: string;
  rowCount: number;
}

// Mock data - replace with actual data fetching
const mockFiles: EnrichmentFile[] = [
  {
    id: "1",
    filename: "investors-batch-1.csv",
    status: "Completed",
    uploadedAt: "2024-03-22T10:00:00Z",
    rowCount: 150,
  },
  {
    id: "2",
    filename: "new-leads-march.csv",
    status: "In Progress",
    uploadedAt: "2024-03-22T11:30:00Z",
    rowCount: 75,
  },
  {
    id: "3",
    filename: "potential-investors.csv",
    status: "Pending",
    uploadedAt: "2024-03-22T12:00:00Z",
    rowCount: 200,
  },
];

const getStatusStyles = (status: EnrichmentStatus) => {
  switch (status) {
    case "Completed":
      return "bg-green-50 text-green-700 ring-green-600/20";
    case "In Progress":
      return "bg-gray-100 text-gray-700 ring-gray-600/20";
    case "Pending":
      return "bg-white text-gray-700 ring-gray-600/20";
    default:
      return "bg-gray-100 text-gray-700 ring-gray-600/20";
  }
};

export const EnrichmentTable = () => {
  const [selectedFiles, setSelectedFiles] = useState<string[]>([]);

  const handleSelectAll = () => {
    if (selectedFiles.length === mockFiles.length) {
      setSelectedFiles([]);
    } else {
      setSelectedFiles(mockFiles.map(file => file.id));
    }
  };

  const handleSelectFile = (fileId: string) => {
    setSelectedFiles(prev =>
      prev.includes(fileId)
        ? prev.filter(id => id !== fileId)
        : [...prev, fileId]
    );
  };

  const handleDownload = (fileId: string) => {
    // TODO: Implement download logic
    console.log("Downloading file:", fileId);
  };

  const handleBulkDownload = () => {
    // TODO: Implement bulk download logic
    console.log("Bulk downloading files:", selectedFiles);
  };

  return (
    <div className="space-y-4">
      {selectedFiles.length > 0 && (
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">
            {selectedFiles.length} files selected
          </span>
          <Button
            variant="outline"
            onClick={handleBulkDownload}
            className="flex items-center gap-2"
          >
            <Download className="h-4 w-4" />
            Download Selected
          </Button>
        </div>
      )}

      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">
                <Checkbox
                  checked={selectedFiles.length === mockFiles.length && mockFiles.length > 0}
                  onCheckedChange={handleSelectAll}
                />
              </TableHead>
              <TableHead>Filename</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Uploaded</TableHead>
              <TableHead>Rows</TableHead>
              <TableHead className="w-[150px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockFiles.map((file) => (
              <TableRow key={file.id}>
                <TableCell>
                  <Checkbox
                    checked={selectedFiles.includes(file.id)}
                    onCheckedChange={() => handleSelectFile(file.id)}
                  />
                </TableCell>
                <TableCell className="font-medium">{file.filename}</TableCell>
                <TableCell>
                  <span className={`inline-flex items-center rounded-full px-4 py-1 text-xs font-medium ring-1 ring-inset ${getStatusStyles(file.status)}`}>
                    {file.status}
                  </span>
                </TableCell>
                <TableCell>{new Date(file.uploadedAt).toLocaleDateString()}</TableCell>
                <TableCell>{file.rowCount}</TableCell>
                <TableCell>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDownload(file.id)}
                    disabled={file.status !== "Completed"}
                    className="flex items-center gap-2"
                  >
                    <Download className="h-4 w-4" />
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
};
