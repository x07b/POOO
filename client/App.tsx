import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Presentation from "./pages/Presentation";
import Produits from "./pages/Produits";
import Additifs from "./pages/Additifs";
import ProductDetail from "./pages/ProductDetail";
import Entretien from "./pages/Entretien";
import Automobile from "./pages/Automobile";
import Moto from "./pages/Moto";
import Industrie from "./pages/Industrie";
import Marine from "./pages/Marine";
import Contact from "./pages/Contact";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";
import CompetitionLineVehicules from "./pages/categories/CompetitionLineVehicules";
import CompetitionLineMoto from "./pages/categories/CompetitionLineMoto";
import CompetitionLineMotosMoteurs from "./pages/categories/CompetitionLineMotosMoteurs";
import ProfessionalLineVehicules from "./pages/categories/ProfessionalLineVehicules";
import MultigradeLineVehicules from "./pages/categories/MultigradeLineVehicules";
import PoidsLourds from "./pages/categories/PoidsLourds";
import CompetitionProductDetail from "./pages/categories/ProductDetail";
import PremiumLineVehicules from "./pages/categories/PremiumLineVehicules";
import MultigradeProductDetail from "./pages/categories/MultigradeProductDetail";
import MotoSeaEngines from "./pages/categories/MotoSeaEngines";
import MotoSeaEnginesProductDetail from "./pages/categories/MotoSeaEnginesProductDetail";
import PoidsLourdsProductDetail from "./pages/categories/PoidsLourdsProductDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/presentation" element={<Presentation />} />
          <Route path="/produits" element={<Produits />} />
          {/* Competition Line Routes */}
          <Route path="/produits/competition-line/vehicules" element={<CompetitionLineVehicules />} />
          <Route path="/produits/competition-line/vehicules/:productId" element={<CompetitionProductDetail />} />
          <Route path="/produits/competition-line/moto" element={<CompetitionLineMoto />} />
          <Route path="/produits/competition-line/moto/:productId" element={<CompetitionProductDetail />} />
          <Route path="/produits/competition-line/motos-moteurs-marins" element={<CompetitionLineMotosMoteurs />} />
          <Route path="/produits/competition-line/motos-moteurs-marins/:productId" element={<CompetitionProductDetail />} />
          {/* Professional Line Routes */}
          <Route path="/produits/professional-line/vehicules" element={<ProfessionalLineVehicules />} />
          <Route path="/produits/professional-line/vehicules/:productId" element={<CompetitionProductDetail />} />
          {/* Premium Line Routes */}
          <Route path="/produits/premium-line/vehicules" element={<PremiumLineVehicules />} />
          <Route path="/produits/premium-line/vehicules/:productId" element={<CompetitionProductDetail />} />
          {/* Multigrade Line Routes */}
          <Route path="/produits/multigrade-line/vehicules" element={<MultigradeLineVehicules />} />
          <Route path="/produits/multigrade-line/vehicules/:productId" element={<MultigradeProductDetail />} />
          {/* Huile et Additifs pour Freins Routes (Main category with subcategories) */}
          <Route path="/produits/huile-additifs-freins/huile-frein-additifs" element={<div>Huile de Frein et Additifs</div>} />
          <Route path="/produits/huile-additifs-freins/additifs-produits-chimiques" element={<div>Additifs et Produits Chimiques</div>} />
          {/* Standalone Category Routes */}
          <Route path="/produits/poids-lourds" element={<PoidsLourds />} />
          <Route path="/produits/poids-lourds/:productId" element={<PoidsLourdsProductDetail />} />
          <Route path="/produits/moto-sea-engines" element={<MotoSeaEngines />} />
          <Route path="/produits/moto-sea-engines/:productId" element={<MotoSeaEnginesProductDetail />} />
          <Route path="/produits/lubrifiants-industriels" element={<div>Lubrifiants Industriels</div>} />
          <Route path="/produits/machines-agricoles" element={<div>Machines Agricoles</div>} />
          <Route path="/produits/boites-automatiques" element={<div>Boites Automatiques</div>} />
          <Route path="/produits/boite-manuelle" element={<div>Boite Manuelle</div>} />
          <Route path="/produits/antigel" element={<div>Antigel</div>} />
          <Route path="/produits/graisse" element={<div>Graisse</div>} />
          {/* Legacy routes for existing functionality */}
          <Route path="/produits/additifs" element={<Additifs />} />
          <Route path="/produits/additifs/:productId" element={<ProductDetail />} />
          <Route path="/produits/entretien" element={<Entretien />} />
          <Route path="/produits/entretien/:productId" element={<ProductDetail />} />
          <Route path="/produits/automobile" element={<Automobile />} />
          <Route path="/produits/automobile/:productId" element={<ProductDetail />} />
          <Route path="/produits/moto" element={<Moto />} />
          <Route path="/produits/moto/:productId" element={<ProductDetail />} />
          <Route path="/produits/industrie" element={<Industrie />} />
          <Route path="/produits/industrie/:productId" element={<ProductDetail />} />
          <Route path="/produits/marine" element={<Marine />} />
          <Route path="/produits/marine/:productId" element={<ProductDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search" element={<Search />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
