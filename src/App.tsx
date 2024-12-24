import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Index from "@/pages/Index";
import Dashboard from "@/pages/Dashboard";
import Lists from "@/pages/Lists";
import Exports from "@/pages/Exports";
import Enrichment from "@/pages/Enrichment";
import Introduction from "@/pages/Introduction";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/investors" element={<Index />} />
          <Route path="/lists" element={<Lists />} />
          <Route path="/exports" element={<Exports />} />
          <Route path="/enrichment" element={<Enrichment />} />
        </Routes>
        <Toaster />
      </Router>
    </QueryClientProvider>
  );
}

export default App;