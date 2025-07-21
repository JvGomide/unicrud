import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CooperadosList from "./pages/cooperadoList";
import CooperadoCreate from "./pages/cooperadoCreate";
import CooperadoEdit from "./pages/cooperadoEdit";
import CooperadoDetail from "./pages/cooperadoDetail";
import NotFound from "./pages/notFound";
import Dashboard from "./pages/dashboard";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/list" element={<CooperadosList />} />
        <Route path="/create" element={<CooperadoCreate />} />
        <Route path="/edit/:id" element={<CooperadoEdit />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/cooperado/:id" element={<CooperadoDetail />} />
      </Routes>
    </Router>
  );
}
