import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Upload } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export const EnrichmentUpload = () => {
  const { toast } = useToast();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;

    if (!file.name.endsWith('.csv')) {
      toast({
        title: "Invalid file type",
        description: "Please upload a CSV file",
        variant: "destructive",
      });
      return;
    }

    // TODO: Implement file upload logic
    toast({
      title: "File uploaded",
      description: `${file.name} has been queued for enrichment`,
    });
  }, [toast]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'text/csv': ['.csv'],
    },
    multiple: false,
  });

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors bg-gray-50
        ${isDragActive ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'}`}
    >
      <input {...getInputProps()} />
      <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
      <h3 className="text-lg font-semibold mb-1">Upload CSV File</h3>
      <p className="text-muted-foreground">
        {isDragActive
          ? "Drop the file here"
          : "Drag and drop your CSV file here, or click to select"}
      </p>
    </div>
  );
};