
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import HomePage from "./pages/HomePage";
import PropostaPage from "./pages/PropostaPage";
import AuthPage from "./pages/AuthPage";
import NotFound from "./pages/NotFound";
import { DashboardLayout } from "./components/Layout/DashboardLayout";
import DashboardOverview from "./pages/DashboardOverview";
import CrmPage from "./pages/CrmPage";
import AgendaPage from "./pages/AgendaPage";
import KnowledgeBasePage from "./pages/KnowledgeBasePage";
import EvolutionApiPage from "./pages/EvolutionApiPage";
import PlansPage from "./pages/PlansPage";
import { AuthProvider } from "./hooks/useAuth";
import { ProtectedRoute } from "./components/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/planos" element={<PlansPage />} />
            <Route path="/proposta" element={<PropostaPage />} />
            <Route path="/login" element={<AuthPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }>
              <Route index element={<DashboardOverview />} />
            </Route>
            <Route path="/crm" element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }>
              <Route index element={<CrmPage />} />
            </Route>
            <Route path="/agenda" element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }>
              <Route index element={<AgendaPage />} />
            </Route>
            <Route path="/knowledge-base" element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }>
              <Route index element={<KnowledgeBasePage />} />
            </Route>
            <Route path="/evolution-api" element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }>
              <Route index element={<EvolutionApiPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
