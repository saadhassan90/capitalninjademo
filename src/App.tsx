import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import Index from "@/pages/Index";
import Dashboard from "@/pages/Dashboard";
import Lists from "@/pages/Lists";
import Exports from "@/pages/Exports";
import Enrichment from "@/pages/Enrichment";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/lists" element={<Lists />} />
        <Route path="/exports" element={<Exports />} />
        <Route path="/enrichment" element={<Enrichment />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;