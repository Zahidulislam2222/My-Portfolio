import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import WorkIndex from "./pages/WorkIndex";
import CaseStudy from "./pages/CaseStudy";
import NotFound from "./pages/NotFound";

// Shared by the browser router (main.tsx) and the build-time renderer (entry-server.tsx).
const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/work" element={<WorkIndex />} />
    <Route path="/work/:id" element={<CaseStudy />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
