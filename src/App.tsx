import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail";
import Training from "./pages/Training";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/jaunumi" element={<News />} />
          <Route path="/jaunumi/:id" element={<NewsDetail />} />
          <Route path="/pasakumi" element={<Events />} />
          <Route path="/pasakumi/:id" element={<EventDetail />} />
          <Route path="/talakizglitiba" element={<Training />} />
          <Route path="/materiali" element={<Resources />} />
          <Route path="/resursi" element={<Navigate to="/materiali" replace />} />
          <Route path="/kontakti" element={<Contact />} />
          <Route path="/par-mums" element={<Navigate to="/kontakti" replace />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

