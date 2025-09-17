import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Factory, CheckCircle, Award, Shield, Settings, Star, Zap } from "lucide-react";

export default function Industrie() {
  const categories = [
    { name: "Additifs", path: "/produits/additifs", active: false },
    { name: "Automobile", path: "/produits/automobile", active: false },
    { name: "Entretien", path: "/produits/entretien", active: false },
    { name: "Moto", path: "/produits/moto", active: false },
    { name: "Industrie", path: "/produits/industrie", active: true },
    { name: "Marine", path: "/produits/marine", active: false }
  ];
  const industrieProducts = [
    {
      id: "hydraulic-fluid-hm46",
      name: "HYDRAULIC FLUID HM 46",
      image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=300&q=80",
      description: "Fluide hydraulique haute performance"
    },
    {
      id: "gear-oil-ep-220",
      name: "GEAR OIL EP 220",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=300&q=80",
      description: "Huile engrenages industriels"
    },
    {
      id: "compressor-oil-100",
      name: "COMPRESSOR OIL 100",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=300&q=80",
      description: "Huile compresseur rotatif"
    },
    {
      id: "turbine-oil-46",
      name: "TURBINE OIL 46",
      image: "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?w=300&q=80",
      description: "Huile turbine vapeur et gaz"
    },
    {
      id: "cutting-fluid",
      name: "CUTTING FLUID",
      image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=300&q=80",
      description: "Fluide de coupe synthétique"
    },
    {
      id: "transformer-oil",
      name: "TRANSFORMER OIL",
      image: "https://images.unsplash.com/photo-1594736797933-d0801ba2fe65?w=300&q=80",
      description: "Huile transformateur électrique"
    },
    {
      id: "spindle-oil-32",
      name: "SPINDLE OIL 32",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=300&q=80",
      description: "Huile broche machine-outil"
    },
    {
      id: "bearing-grease",
      name: "BEARING GREASE",
      image: "https://images.unsplash.com/photo-1601925248915-c7c80afe4b73?w=300&q=80",
      description: "Graisse roulements industriels"
    },
    {
      id: "chain-oil-460",
      name: "CHAIN OIL 460",
      image: "https://images.unsplash.com/photo-1586864387242-dbf955c2ca94?w=300&q=80",
      description: "Huile chaînes industrielles"
    },
    {
      id: "slide-way-oil",
      name: "SLIDE WAY OIL",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=300&q=80",
      description: "Huile glissières machines"
    },
    {
      id: "heat-transfer-oil",
      name: "HEAT TRANSFER OIL",
      image: "https://images.unsplash.com/photo-1562071707-7249ab23b57a?w=300&q=80",
      description: "Fluide caloporteur synthétique"
    },
    {
      id: "pneumatic-oil",
      name: "PNEUMATIC OIL",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&q=80",
      description: "Huile circuits pneumatiques"
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Solutions Industrielles",
      description: "Lubrifiants haute performance pour l'industrie"
    },
    {
      icon: Zap,
      title: "Efficacité Maximale",
      description: "Optimisation des performances industrielles"
    },
    {
      icon: Star,
      title: "Technologies Avancées",
      description: "Formulations pour applications exigeantes"
    },
    {
      icon: Award,
      title: "Expertise Dinoil",
      description: "Solutions certifiées pour l'industrie"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#02173C] to-[#02173C]/90 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=1200&q=80" 
            alt="PROMOKAR Industrie"
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
            <Link to="/produits" className="text-gray-300 hover:text-[#BE941B] transition-colors">
              Produits
            </Link>
            <ChevronRight size={16} className="text-gray-400" />
            <span className="text-[#BE941B] font-medium">Industrie</span>
          </nav>

          <div className="inline-flex items-center bg-[#BE941B]/20 border border-[#BE941B]/30 rounded-full px-8 py-3 mb-8">
            <Factory className="w-5 h-5 text-[#BE941B] mr-2" />
            <span className="text-[#BE941B] font-bold text-sm uppercase tracking-widest">Industrie PROMOKAR</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="block">Solutions</span>
            <span className="block bg-gradient-to-r from-[#BE941B] to-white bg-clip-text text-transparent">Industrielles</span>
          </h1>
          
          <div className="w-32 h-1 bg-gradient-to-r from-[#BE941B] via-white to-[#BE941B] mb-8 rounded-full"></div>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl leading-relaxed">
            Solutions industrielles avancées PROMOKAR pour tous secteurs d'activité.
            Lubrifiants techniques et fluides spécialisés haute performance.
            <br />
            <span className="text-[#BE941B] font-medium">Expertise technique pour l'industrie lourde et manufacturière.</span>
          </p>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="bg-gradient-to-r from-gray-50 to-white py-8 border-b border-gray-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={category.path}
                className={`px-8 py-3 rounded-2xl border-2 transition-all duration-300 font-bold uppercase tracking-wide text-sm transform hover:-translate-y-1 ${
                  category.active
                    ? "bg-[#BE941B] border-[#BE941B] text-white shadow-lg hover:shadow-xl"
                    : "border-[#02173C] text-[#02173C] hover:bg-[#02173C] hover:text-white shadow-md hover:shadow-lg"
                }`}
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-[#BE941B]/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-[#02173C]/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-1/6 w-24 h-24 bg-[#BE941B]/3 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-[#BE941B]/10 border border-[#BE941B]/20 rounded-full px-8 py-3 mb-8">
              <Factory className="w-5 h-5 text-[#BE941B] mr-2" />
              <span className="text-[#BE941B] font-bold text-sm uppercase tracking-widest">Gamme PROMOKAR</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-[#02173C] mb-6 leading-tight">
              Lubrifiants <span className="bg-gradient-to-r from-[#BE941B] to-[#02173C] bg-clip-text text-transparent">Industriels</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#BE941B] via-[#02173C] to-[#BE941B] mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Découvrez notre gamme complète de solutions industrielles pour optimiser vos processus de production.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {industrieProducts.map((product) => (
              <div key={product.id} className="group relative">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-[#BE941B]/30 transform hover:-translate-y-3 hover:scale-105">
                  
                  {/* Product Image - Clickable */}
                  <Link
                    to={`/produits/industrie/${product.id}`}
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
                    <h3 className="text-xl font-black text-[#02173C] uppercase tracking-wide group-hover:text-[#BE941B] transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {product.description}
                    </p>
                    
                    {/* Benefits */}
                    <div className="flex items-center justify-center text-sm text-gray-700 pt-2">
                      <CheckCircle className="w-4 h-4 text-[#BE941B] mr-2 flex-shrink-0" />
                      <span>Qualité professionnelle</span>
                    </div>
                  </div>

                  {/* Hover accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#BE941B] to-[#02173C] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-3xl"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-5xl mx-auto">
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-[#BE941B]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#BE941B]/20 transition-colors duration-300">
                <Settings size={28} className="text-[#BE941B]" />
              </div>
              <h3 className="text-lg font-bold text-[#02173C] mb-2 uppercase tracking-wide">Expertise Technique</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Solutions sur mesure pour chaque application</p>
            </div>
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-[#BE941B]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#BE941B]/20 transition-colors duration-300">
                <Shield size={28} className="text-[#BE941B]" />
              </div>
              <h3 className="text-lg font-bold text-[#02173C] mb-2 uppercase tracking-wide">Fiabilité Maximale</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Performance continue en conditions extrêmes</p>
            </div>
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-[#BE941B]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#BE941B]/20 transition-colors duration-300">
                <Award size={28} className="text-[#BE941B]" />
              </div>
              <h3 className="text-lg font-bold text-[#02173C] mb-2 uppercase tracking-wide">Normes Internationales</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Conformité aux standards industriels</p>
            </div>
          </div>

          {/* Back to Categories */}
          <div className="text-center mt-16">
            <Link 
              to="/produits"
              className="group inline-flex items-center space-x-2 bg-[#02173C] hover:bg-[#BE941B] text-white px-8 py-4 rounded-2xl transition-all duration-300 font-bold uppercase tracking-wide shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <ChevronLeft size={20} className="transform group-hover:-translate-x-1 transition-transform duration-300" />
              <span>Retour aux catégories</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Find a Dealer Section */}
      <section className="py-20 bg-gradient-to-r from-[#02173C] to-[#02173C]/95">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-[#BE941B]/20 border border-[#BE941B]/30 rounded-full px-8 py-3 mb-8">
              <svg className="w-5 h-5 text-[#BE941B] mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <span className="text-[#BE941B] font-bold text-sm uppercase tracking-widest">Réseau National</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Réseau de <span className="text-[#BE941B]">Distribution</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#BE941B] via-white to-[#BE941B] mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Plus de 115 points de vente PROMOKAR dans toute la Tunisie
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            {/* Left - Tunisia Map */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#BE941B]/10 to-[#02173C]/5 rounded-3xl p-8 border border-[#BE941B]/20 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#BE941B]/10 rounded-full blur-2xl"></div>
                
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center bg-[#BE941B]/20 border border-[#BE941B]/30 rounded-full px-6 py-2 mb-4">
                      <svg className="w-4 h-4 text-[#BE941B] mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                      <span className="text-[#BE941B] font-bold text-sm uppercase tracking-widest">21 Gouvernorats</span>
                    </div>
                    <h3 className="text-2xl font-black mb-2 text-white">
                      Réseau PROMOKAR
                    </h3>
                    <p className="text-gray-300">
                      Présent dans toute la Tunisie
                    </p>
                  </div>
                  
                  {/* Tunisia Map Placeholder */}
                  <div className="aspect-square bg-[#BE941B]/10 rounded-2xl flex items-center justify-center border border-[#BE941B]/20 backdrop-blur-sm">
                    <div className="text-center">
                      <svg className="w-20 h-20 text-[#BE941B] mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                      <p className="text-white font-medium">Carte Interactive</p>
                      <p className="text-gray-300 text-sm">115+ Points de Vente</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Dealer Information */}
            <div className="space-y-8 text-white">
              <div>
                <h3 className="text-2xl font-black mb-4">
                  Trouvez Votre Revendeur
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Les revendeurs PROMOKAR en Tunisie sont disponibles pour vous conseiller, 
                  orienter et offrir les produits idéaux pour votre véhicule.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-[#BE941B]/5 to-[#02173C]/5 rounded-2xl p-6 border border-[#BE941B]/20">
                <h4 className="font-bold text-white mb-2">Services Disponibles</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-[#BE941B] mr-2" />
                    Conseil et orientation technique
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-[#BE941B] mr-2" />
                    Gamme complète PROMOKAR
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-[#BE941B] mr-2" />
                    Support après-vente
                  </li>
                </ul>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-[#BE941B] hover:bg-white text-white hover:text-[#02173C] px-8 py-4 font-bold uppercase tracking-wide transition-all duration-300 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  <span className="flex items-center justify-center">
                    Revendeurs PROMOKAR
                    <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </span>
                </button>
                <button className="group border-2 border-[#BE941B] hover:border-white text-[#BE941B] hover:text-white px-8 py-4 font-bold uppercase tracking-wide transition-all duration-300 rounded-2xl hover:bg-[#BE941B]/10 transform hover:-translate-y-1">
                  <span className="flex items-center justify-center">
                    Devenir Revendeur
                    <ChevronRight size={20} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
