import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Partners from "./pages/Partners";
import PmoDiensten from "./pages/PmoDiensten";
import Contact from "./pages/Contact";
import Praktijk from "./pages/Praktijk";
import Sportdietist from "./pages/Sportdietist";
import Bedankt from "./pages/Bedankt";
import NotFound from "./pages/NotFound";
import WhatsAppButton from "./components/WhatsAppButton";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/workshops" element={<PmoDiensten />} />
          <Route path="/pmo-diensten" element={<PmoDiensten />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/praktijk" element={<Praktijk />} />
          <Route path="/sportdietist" element={<Sportdietist />} />
          <Route path="/bedankt" element={<Bedankt />} />
          <Route path="/afspraak" element={<Navigate to="/contact" replace />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsAppButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
