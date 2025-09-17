import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link, useSearchParams } from "react-router-dom";
import { ChevronRight, Search as SearchIcon, Filter, X } from "lucide-react";
import { useState, useEffect, useMemo } from "react";

// All products from all categories
const allProducts = [
  // Additifs
  { id: "octane-booster", name: "OCTANE BOOSTER", category: "additifs", categoryDisplay: "Additifs", image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&q=80", description: "Augmente l'indice d'octane du carburant" },
  { id: "fuel-injector-cleaner", name: "FUEL INJECTOR CLEANER", category: "additifs", categoryDisplay: "Additifs", image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=300&q=80", description: "Nettoie les injecteurs de carburant" },
  { id: "diesel-fuel-additive", name: "DIESEL FUEL ADDITIVE", category: "additifs", categoryDisplay: "Additifs", image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=300&q=80", description: "Additif pour carburant diesel" },
  { id: "anti-freeze-coolant", name: "ANTI-FREEZE COOLANT", category: "additifs", categoryDisplay: "Additifs", image: "https://images.unsplash.com/photo-1592840062661-bbb5d4d96b88?w=300&q=80", description: "Liquide de refroidissement antigel" },
  { id: "brake-fluid-additive", name: "BRAKE FLUID ADDITIVE", category: "additifs", categoryDisplay: "Additifs", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=300&q=80", description: "Additif pour liquide de frein" },
  { id: "engine-oil-additive", name: "ENGINE OIL ADDITIVE", category: "additifs", categoryDisplay: "Additifs", image: "https://images.unsplash.com/photo-1486754735734-325b5831c3ad?w=300&q=80", description: "Additif pour huile moteur" },
  { id: "transmission-fluid", name: "TRANSMISSION FLUID", category: "additifs", categoryDisplay: "Additifs", image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=300&q=80", description: "Fluide de transmission automatique" },
  { id: "radiator-sealant", name: "RADIATOR SEALANT", category: "additifs", categoryDisplay: "Additifs", image: "https://images.unsplash.com/photo-1594736797933-d0801ba2fe65?w=300&q=80", description: "Scellant pour radiateur" },
  { id: "power-steering-additive", name: "POWER STEERING ADDITIVE", category: "additifs", categoryDisplay: "Additifs", image: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=300&q=80", description: "Additif direction assistée" },

  // Automobile
  { id: "8100-x-cess", name: "8100 X-CESS", category: "automobile", categoryDisplay: "Automobile", image: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=300&q=80", description: "Huile moteur synthétique haute performance" },
  { id: "gear-300", name: "GEAR 300", category: "automobile", categoryDisplay: "Automobile", image: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=300&q=80", description: "Huile transmission manuelle 75W90" },
  { id: "6100-save-lite", name: "6100 SAVE LITE", category: "automobile", categoryDisplay: "Automobile", image: "https://images.unsplash.com/photo-1486754735734-325b5831c3ad?w=300&q=80", description: "Huile moteur semi-synthétique 5W30" },
  { id: "8100-eco-nergy", name: "8100 ECO-NERGY", category: "automobile", categoryDisplay: "Automobile", image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=300&q=80", description: "Huile moteur économie carburant 5W30" },
  { id: "motylgear-75w80", name: "MOTYLGEAR 75W80", category: "automobile", categoryDisplay: "Automobile", image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=300&q=80", description: "Huile boîte de vitesses synthétique" },
  { id: "brake-fluid-dot4", name: "BRAKE FLUID DOT 4", category: "automobile", categoryDisplay: "Automobile", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=300&q=80", description: "Liquide de frein DOT 4" },
  { id: "coolant-inugel-optimal", name: "INUGEL OPTIMAL", category: "automobile", categoryDisplay: "Automobile", image: "https://images.unsplash.com/photo-1592840062661-bbb5d4d96b88?w=300&q=80", description: "Liquide de refroidissement universel" },
  { id: "atf-vi", name: "ATF VI", category: "automobile", categoryDisplay: "Automobile", image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=300&q=80", description: "Fluide transmission automatique" },
  { id: "engine-oil-5w30", name: "ENGINE OIL 5W30", category: "automobile", categoryDisplay: "Automobile", image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=300&q=80", description: "Huile moteur haute performance" },

  // Entretien
  { id: "engine-clean", name: "ENGINE CLEAN", category: "entretien", categoryDisplay: "Entretien", image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=300&q=80", description: "Nettoyant moteur professionnel" },
  { id: "brake-clean", name: "BRAKE CLEAN", category: "entretien", categoryDisplay: "Entretien", image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=300&q=80", description: "Nettoyant freins dégraissant" },
  { id: "contact-cleaner", name: "CONTACT CLEANER", category: "entretien", categoryDisplay: "Entretien", image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=300&q=80", description: "Nettoyant contacts électriques" },
  { id: "air-filter-clean", name: "AIR FILTER CLEAN", category: "entretien", categoryDisplay: "Entretien", image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=300&q=80", description: "Nettoyant filtre à air" },
  { id: "foam-air-filter-oil", name: "FOAM AIR FILTER OIL", category: "entretien", categoryDisplay: "Entretien", image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=300&q=80", description: "Huile filtre à air mousse" },
  { id: "chain-clean", name: "CHAIN CLEAN", category: "entretien", categoryDisplay: "Entretien", image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=300&q=80", description: "Nettoyant chaînes" },
  { id: "carburetor-clean", name: "CARBURETOR CLEAN", category: "entretien", categoryDisplay: "Entretien", image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=300&q=80", description: "Nettoyant carburateur" },
  { id: "cooling-system-clean", name: "COOLING SYSTEM CLEAN", category: "entretien", categoryDisplay: "Entretien", image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=300&q=80", description: "Nettoyant circuit refroidissement" },
  { id: "radiator-stop-leak", name: "RADIATOR STOP LEAK", category: "entretien", categoryDisplay: "Entretien", image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=300&q=80", description: "Anti-fuite radiateur" },

  // Moto
  { id: "moto-7100-4t", name: "MOTO 7100 4T", category: "moto", categoryDisplay: "Moto", image: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=300&q=80", description: "Huile moteur 4 temps haute performance" },
  { id: "moto-gear-oil", name: "MOTO GEAR OIL", category: "moto", categoryDisplay: "Moto", image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&q=80", description: "Huile transmission moto 75W90" },
  { id: "moto-2t-racing", name: "MOTO 2T RACING", category: "moto", categoryDisplay: "Moto", image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=300&q=80", description: "Huile moteur 2 temps compétition" },
  { id: "moto-chain-lube", name: "CHAIN LUBE", category: "moto", categoryDisplay: "Moto", image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=300&q=80", description: "Lubrifiant chaîne toutes conditions" },
  { id: "moto-fork-oil", name: "FORK OIL 10W", category: "moto", categoryDisplay: "Moto", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&q=80", description: "Huile fourche hydraulique" },
  { id: "moto-brake-fluid", name: "BRAKE FLUID DOT 4", category: "moto", categoryDisplay: "Moto", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=300&q=80", description: "Liquide de frein moto DOT 4" },
  { id: "moto-coolant", name: "MOTOCOOL EXPERT", category: "moto", categoryDisplay: "Moto", image: "https://images.unsplash.com/photo-1592840062661-bbb5d4d96b88?w=300&q=80", description: "Liquide de refroidissement moto" },
  { id: "moto-wash", name: "MOTO WASH", category: "moto", categoryDisplay: "Moto", image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=300&q=80", description: "Nettoyant moto biodégradable" },
  { id: "moto-grease", name: "TECH GREASE", category: "moto", categoryDisplay: "Moto", image: "https://images.unsplash.com/photo-1486754735734-325b5831c3ad?w=300&q=80", description: "Graisse technique multifonctions" },

  // Industrie
  { id: "hydraulic-fluid-hm46", name: "HYDRAULIC FLUID HM 46", category: "industrie", categoryDisplay: "Industrie", image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=300&q=80", description: "Fluide hydraulique haute performance" },
  { id: "gear-oil-ep-220", name: "GEAR OIL EP 220", category: "industrie", categoryDisplay: "Industrie", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=300&q=80", description: "Huile engrenages industriels" },
  { id: "compressor-oil-100", name: "COMPRESSOR OIL 100", category: "industrie", categoryDisplay: "Industrie", image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=300&q=80", description: "Huile compresseur rotatif" },
  { id: "turbine-oil-46", name: "TURBINE OIL 46", category: "industrie", categoryDisplay: "Industrie", image: "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?w=300&q=80", description: "Huile turbine vapeur et gaz" },
  { id: "cutting-fluid", name: "CUTTING FLUID", category: "industrie", categoryDisplay: "Industrie", image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=300&q=80", description: "Fluide de coupe synthétique" },
  { id: "transformer-oil", name: "TRANSFORMER OIL", category: "industrie", categoryDisplay: "Industrie", image: "https://images.unsplash.com/photo-1594736797933-d0801ba2fe65?w=300&q=80", description: "Huile transformateur électrique" },
  { id: "spindle-oil-32", name: "SPINDLE OIL 32", category: "industrie", categoryDisplay: "Industrie", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=300&q=80", description: "Huile broche machine-outil" },
  { id: "bearing-grease", name: "BEARING GREASE", category: "industrie", categoryDisplay: "Industrie", image: "https://images.unsplash.com/photo-1601925248915-c7c80afe4b73?w=300&q=80", description: "Graisse roulements industriels" },
  { id: "chain-oil-460", name: "CHAIN OIL 460", category: "industrie", categoryDisplay: "Industrie", image: "https://images.unsplash.com/photo-1586864387242-dbf955c2ca94?w=300&q=80", description: "Huile cha��nes industrielles" },

  // Marine
  { id: "marine-diesel-15w40", name: "MARINE DIESEL 15W40", category: "marine", categoryDisplay: "Marine", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&q=80", description: "Huile moteur diesel marin haute performance" },
  { id: "marine-gear-oil", name: "MARINE GEAR OIL", category: "marine", categoryDisplay: "Marine", image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=300&q=80", description: "Huile transmission marine 80W90" },
  { id: "marine-hydraulic-oil", name: "MARINE HYDRAULIC OIL", category: "marine", categoryDisplay: "Marine", image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=300&q=80", description: "Fluide hydraulique marin biodégradable" },
  { id: "marine-2t-outboard", name: "MARINE 2T OUTBOARD", category: "marine", categoryDisplay: "Marine", image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=300&q=80", description: "Huile moteur hors-bord 2 temps" },
  { id: "marine-coolant", name: "MARINE COOLANT", category: "marine", categoryDisplay: "Marine", image: "https://images.unsplash.com/photo-1592840062661-bbb5d4d96b88?w=300&q=80", description: "Liquide de refroidissement marin" },
  { id: "marine-grease", name: "MARINE GREASE", category: "marine", categoryDisplay: "Marine", image: "https://images.unsplash.com/photo-1486754735734-325b5831c3ad?w=300&q=80", description: "Graisse marine résistante à l'eau" },
  { id: "stern-tube-oil", name: "STERN TUBE OIL", category: "marine", categoryDisplay: "Marine", image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&q=80", description: "Huile tube d'étambot" },
  { id: "marine-fuel-additive", name: "MARINE FUEL ADDITIVE", category: "marine", categoryDisplay: "Marine", image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=300&q=80", description: "Additif carburant marin" },
  { id: "turbine-oil-marine", name: "TURBINE OIL MARINE", category: "marine", categoryDisplay: "Marine", image: "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?w=300&q=80", description: "Huile turbine marine" }
];

const categories = [
  { value: "", label: "Toutes les catégories" },
  { value: "additifs", label: "Additifs" },
  { value: "automobile", label: "Automobile" },
  { value: "entretien", label: "Entretien" },
  { value: "moto", label: "Moto" },
  { value: "industrie", label: "Industrie" },
  { value: "marine", label: "Marine" }
];

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("");
  
  const query = searchParams.get("q") || "";
  
  // Filter products based on search query and category
  const filteredProducts = useMemo(() => {
    let filtered = allProducts;
    
    // Filter by search query
    if (query.trim()) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
      );
    }
    
    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }
    
    return filtered;
  }, [query, selectedCategory]);

  // Clear filters
  const clearFilters = () => {
    setSelectedCategory("");
    setSearchParams({ q: query });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#02173C] to-[#02173C]/90 text-white py-16 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80" 
            alt="PROMOKAR Search"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#02173C]/80 to-[#02173C]/60"></div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/6 w-3 h-3 bg-[#BE941B] rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-[#BE941B] rounded-full opacity-40 animate-bounce delay-300"></div>
          <div className="absolute bottom-1/3 right-1/2 w-1 h-1 bg-[#BE941B] rounded-full opacity-80 animate-ping delay-700"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm mb-8" aria-label="Breadcrumb">
            <Link to="/" className="text-gray-300 hover:text-[#BE941B] transition-colors">
              Accueil
            </Link>
            <ChevronRight size={16} className="text-gray-400" />
            <span className="text-[#BE941B] font-medium">Recherche</span>
          </nav>

          <div className="inline-flex items-center bg-[#BE941B]/20 border border-[#BE941B]/30 rounded-full px-8 py-3 mb-8">
            <SearchIcon className="w-5 h-5 text-[#BE941B] mr-2" />
            <span className="text-[#BE941B] font-bold text-sm uppercase tracking-widest">Recherche PROMOKAR</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            <span className="block">Résultats de</span>
            <span className="block bg-gradient-to-r from-[#BE941B] to-white bg-clip-text text-transparent">Recherche</span>
          </h1>
          
          <div className="w-32 h-1 bg-gradient-to-r from-[#BE941B] via-white to-[#BE941B] mb-8 rounded-full"></div>
          
          {query && (
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl leading-relaxed">
              Recherche pour "<span className="text-[#BE941B] font-medium">{query}</span>"
              <br />
              <span className="text-lg">{filteredProducts.length} produit{filteredProducts.length !== 1 ? 's' : ''} trouvé{filteredProducts.length !== 1 ? 's' : ''}</span>
            </p>
          )}
        </div>
      </section>

      {/* Search Results */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-[#BE941B]/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-[#02173C]/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-1/6 w-24 h-24 bg-[#BE941B]/3 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Filters */}
          <div className="mb-12 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="inline-flex items-center bg-[#BE941B]/10 border border-[#BE941B]/20 rounded-full px-6 py-2">
                <Filter className="w-4 h-4 text-[#BE941B] mr-2" />
                <span className="text-[#BE941B] font-bold text-sm uppercase tracking-widest">Filtres</span>
              </div>
              
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border-2 border-[#02173C]/20 rounded-xl bg-white text-[#02173C] focus:outline-none focus:ring-2 focus:ring-[#BE941B] focus:border-[#BE941B] transition-all duration-300"
              >
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            {(selectedCategory || query) && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-[#BE941B] transition-colors duration-300"
              >
                <X size={16} />
                <span>Effacer les filtres</span>
              </button>
            )}
          </div>

          {/* Results */}
          {!query ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-[#BE941B]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <SearchIcon size={48} className="text-[#BE941B]" />
              </div>
              <h2 className="text-2xl font-bold text-[#02173C] mb-4">Recherchez des produits PROMOKAR</h2>
              <p className="text-gray-600">Utilisez la barre de recherche pour trouver vos produits.</p>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-[#BE941B]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <SearchIcon size={48} className="text-[#BE941B]" />
              </div>
              <h2 className="text-2xl font-bold text-[#02173C] mb-4">Aucun résultat trouvé</h2>
              <p className="text-gray-600 mb-6">
                Aucun produit ne correspond à votre recherche "<span className="text-[#BE941B] font-medium">{query}</span>".
              </p>
              <div className="space-y-2 text-sm text-gray-500">
                <p>Suggestions :</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Vérifiez l'orthographe de votre recherche</li>
                  <li>Essayez des mots-clés plus généraux</li>
                  <li>Utilisez des termes plus courts</li>
                </ul>
              </div>
            </div>
          ) : (
            <>
              {/* Results Summary */}
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-black text-[#02173C] mb-4">
                  {filteredProducts.length} Produit{filteredProducts.length !== 1 ? 's' : ''} 
                  <span className="text-[#BE941B]"> Trouvé{filteredProducts.length !== 1 ? 's' : ''}</span>
                </h2>
                <div className="w-32 h-1 bg-gradient-to-r from-[#BE941B] via-[#02173C] to-[#BE941B] mx-auto rounded-full"></div>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredProducts.map((product) => (
                  <div key={`${product.category}-${product.id}`} className="group relative">
                    <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-[#BE941B]/30 transform hover:-translate-y-3 hover:scale-105">
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 right-4 z-10">
                        <span className="bg-[#BE941B] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                          {product.categoryDisplay}
                        </span>
                      </div>

                      {/* Product Image - Clickable */}
                      <Link
                        to={`/produits/${product.category}/${product.id}`}
                        className="block aspect-square mb-6 flex items-center justify-center cursor-pointer relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#BE941B]/5 to-[#02173C]/5"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#02173C]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </Link>

                      {/* Product Info */}
                      <div className="text-center space-y-3">
                        <h3 className="text-lg font-black text-[#02173C] uppercase tracking-wide group-hover:text-[#BE941B] transition-colors duration-300 line-clamp-2">
                          {product.name}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                          {product.description}
                        </p>
                        
                        {/* View Product Link */}
                        <Link
                          to={`/produits/${product.category}/${product.id}`}
                          className="inline-flex items-center text-[#BE941B] hover:text-[#02173C] font-medium text-sm transition-colors duration-300 group-hover:scale-105"
                        >
                          Voir le produit
                          <ChevronRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                      </div>

                      {/* Hover accent */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#BE941B] to-[#02173C] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-3xl"></div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
