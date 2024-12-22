import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "@/pages/Index";
import Lists from "@/pages/Lists";
import Exports from "@/pages/Exports";
import Dashboard from "@/pages/Dashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/lists" element={<Lists />} />
            <Route path="/exports" element={<Exports />} />
            <Route path="/profile" element={<Index />} />
            <Route path="/settings" element={<Index />} />
            <Route path="/team" element={<Index />} />
            <Route path="/billing" element={<Index />} />
            <Route path="/logout" element={<Index />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;