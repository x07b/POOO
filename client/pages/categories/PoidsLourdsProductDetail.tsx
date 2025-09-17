import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Link, useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowRight, Trophy, Car, Shield, Star, Zap, Award, Check, Package, FileText, Truck } from "lucide-react";

export default function PoidsLourdsProductDetail() {
  const { productId } = useParams();

  const products = {
    "dinoil-5w30-euro-truck": {
      name: "DINOIL 5W/30 EURO TRUCK",
      code: "4357",
      image: "https://cdn.builder.io/api/v1/image/assets%2F367800b539f442f7b8aca37c33d3b377%2F81c75ce1704e488b883cc9a54552d742?format=webp&width=800",
      category: "Heavy Duty",
      description: "Un lubrifiant de pointe, entièrement synthétique, pour les moteurs diesel des flottes commerciales, qui dépasse les spécifications européennes les plus strictes. Elle répond à la demande actuelle d'huiles ayant des propriétés de 'conservation du carburant' et de longues périodes de vidange. Particulièrement adapté aux moteurs Euro 3, Euro 4 et Euro 5 sans filtre à particules (DPF) des principaux constructeurs européens.",
      specifications: [
        "API CI4/ CF",
        "ACEA: 2002 E5/ E4/ B4/ B3",
        "MB 228.5",
        "MAN 3277",
        "MTU Type 3",
        "VOLVO VDS-2",
        "RENAULT RXD",
        "SKANIA LDF",
        "IVECO",
        "DAF HP-2",
        "Global DHD-1",
        "JASO DH-1",
        "MACK EO-M+",
        "Cummins CES20071/072/076/077/078"
      ],
      packages: ["20LT", "60 LT", "200 LT"],
      features: [
        "Lubrifiant entièrement synthétique",
        "Dépasse spécifications européennes strictes",
        "Propriétés conservation du carburant",
        "Longues périodes de vidange",
        "Adapté moteurs Euro 3, 4 et 5",
        "Sans filtre à particules (DPF)",
        "Constructeurs européens principaux"
      ]
    },
    "dinoil-10w40-truck-low-saps": {
      name: "DINOIL 10W/40 TRUCK LOW SAPS SYNTH TECH",
      code: "4364",
      image: "https://cdn.builder.io/api/v1/image/assets%2F367800b539f442f7b8aca37c33d3b377%2Fe2ed82f897c94d23918320cee922d255?format=webp&width=800",
      category: "Heavy Duty",
      description: "Huile synthétique 'low SAPS' pour moteurs diesel à haute performance. Développé pour offrir une protection supérieure et une excellente économie de carburant aux véhicules commerciaux lourds. Garanties protection et fiabilité dans des conditions extrêmes des conditions de fonctionnement extrêmes. En particulier conçu pour les dernières génération de moteurs diesel des principaux constructeurs européens.",
      specifications: [
        "API CI-4",
        "ACEA E9/E7/E6",
        "MB 228.51",
        "MAN 3477/3271-1",
        "MTU Type 3.1",
        "VOLVO VDS-3 (CNG)",
        "RENAULT RVI/RXD/RGD",
        "CAT ECF-1-a",
        "Deutz DQC III-05",
        "MACK EO-M+",
        "Cummins CES20077"
      ],
      packages: ["20LT", "200LT"],
      features: [
        "Huile synthétique low SAPS",
        "Haute performance diesel",
        "Protection supérieure garantie",
        "Excellente économie carburant",
        "Véhicules commerciaux lourds",
        "Conditions de fonctionnement extrêmes",
        "Dernières générations moteurs diesel",
        "Constructeurs européens principaux"
      ]
    },
    "dinoil-10w40-truck-shpd": {
      name: "DINOIL 10W/40 TRUCK SHPD SYNTH TECH",
      code: "4388",
      image: "https://cdn.builder.io/api/v1/image/assets%2F367800b539f442f7b8aca37c33d3b377%2F25ea035d7a95485abfb2535943b249bc?format=webp&width=800",
      category: "Heavy Duty",
      description: "Huile de haute qualité 'SHPD-Super High Performance Diesel' conçue pour les moteurs diesel lourds. Enrichi d'huiles de base synthétiques permettant un démarrage à froid facile, une faible consommation de carburant et des caractéristiques de performance fiables. Répond aux exigences des principaux constructeurs de moteurs Euro 1, Euro 2 et Euro 3.",
      specifications: [
        "API CI-4/CH-4/CG-4/CF-4/CF/SL",
        "ACEA A3/B4",
        "ACEA E7/E5/E3",
        "MB 228.3/229.1",
        "MAN M3275",
        "VOLVO VDS-3",
        "MTU Type 2",
        "RENAULT RLD/RLD-2",
        "DAF SHPD",
        "CAT ECF-2/ECF-1-a",
        "ZF TE-ML-07C",
        "MACK EO-M+",
        "GLOBAL DHD-1",
        "DEUTZ DQC II-05",
        "CUMMINS CES 20076/20077/20078"
      ],
      packages: ["20LT", "60 LT", "200 LT"],
      features: [
        "Haute qualité SHPD-Super High Performance",
        "Moteurs diesel lourds",
        "Huiles de base synthétiques",
        "Démarrage à froid facile",
        "Faible consommation carburant",
        "Caractéristiques performance fiables",
        "Moteurs Euro 1, Euro 2 et Euro 3",
        "Principaux constructeurs"
      ]
    },
    "dinoil-10w40-truck-uhpdo": {
      name: "DINOIL 10W/40 TRUCK UHPDO SYNTH TECH",
      code: "4371",
      image: "https://cdn.builder.io/api/v1/image/assets%2F367800b539f442f7b8aca37c33d3b377%2F25ea035d7a95485abfb2535943b249bc?format=webp&width=800",
      category: "Heavy Duty",
      description: "Huile diesel semi-synthétique 'UHPDO-Ultra High Performance Diesel Oil' conçue pour les moteurs fonctionnant dans des conditions extrêmes. Formulé avec des huiles de base et des additifs de haute performance qui permettent au produit final de répondre aux exigences des principaux fabricants européens. Il offre d'excellentes propriétés nettoyantes et anti-usure, garantissant un haut niveau de protection et une longue durée de vie de tous les organes du moteur.",
      specifications: [
        "API CI-4",
        "ACEA E7/E4",
        "MB 228.5",
        "MAN 3277",
        "VOLVO VDS-3",
        "MTU Type 3",
        "RENAULT RVI/ RXD/ RLD/ RLD-2",
        "SKANIA LDF-2",
        "CAT ECF-1-a",
        "Deutz DQC III-05/ IV-05",
        "MACK EO-M+",
        "Cummins CES 20077"
      ],
      packages: ["20LT", "60 LT", "200 LT"],
      features: [
        "Huile diesel semi-synthétique",
        "UHPDO-Ultra High Performance",
        "Moteurs conditions extrêmes",
        "Huiles de base haute performance",
        "Additifs haute performance",
        "Fabricants européens principaux",
        "Excellentes propriétés nettoyantes",
        "Propriétés anti-usure",
        "Haut niveau protection",
        "Longue durée de vie moteur"
      ]
    }
  };

  const product = products[productId as keyof typeof products];

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-6 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-black text-[#02173C] mb-6">Produit non trouvé</h1>
            <Link 
              to="/produits/poids-lourds"
              className="inline-flex items-center bg-[#BE941B] text-white px-6 py-3 rounded-xl hover:bg-[#02173C] transition-colors"
            >
              <ChevronLeft size={20} className="mr-2" />
              Retour à la gamme Poids Lourds
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#02173C] to-[#02173C]/90 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80" 
            alt={product.name}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#02173C]/80 to-[#02173C]/60"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm mb-8" aria-label="Breadcrumb">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">
              Accueil
            </Link>
            <ChevronRight size={16} className="text-gray-400" />
            <Link to="/produits" className="text-gray-300 hover:text-white transition-colors">
              Produits
            </Link>
            <ChevronRight size={16} className="text-gray-400" />
            <Link to="/produits/poids-lourds" className="text-gray-300 hover:text-white transition-colors">
              Poids Lourds
            </Link>
            <ChevronRight size={16} className="text-gray-400" />
            <span className="text-[#BE941B] font-medium">{product.name}</span>
          </nav>

          <div className="text-center">
            <div className="inline-flex items-center bg-[#BE941B]/20 border border-[#BE941B]/30 rounded-full px-8 py-3 mb-8">
              <Truck className="w-5 h-5 text-[#BE941B] mr-2" />
              <span className="text-[#BE941B] font-bold text-sm uppercase tracking-widest">{product.category}</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              <span className="block bg-gradient-to-r from-[#BE941B] to-white bg-clip-text text-transparent">
                {product.name}
              </span>
            </h1>
            
            <div className="w-32 h-1 bg-gradient-to-r from-[#BE941B] via-white to-[#BE941B] mx-auto mb-8 rounded-full"></div>
            
            <div className="inline-flex items-center bg-[#02173C]/20 border border-[#BE941B]/30 rounded-full px-6 py-2">
              <span className="text-[#BE941B] font-bold text-sm uppercase tracking-widest">Code: {product.code}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Section */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            
            {/* Left - Product Image */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <div className="aspect-square relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Right - Product Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-[#02173C] mb-6">
                  {product.name}
                </h2>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {product.description}
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="bg-gradient-to-br from-[#BE941B]/5 to-[#02173C]/5 rounded-2xl p-6 border border-[#BE941B]/20">
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-[#BE941B] mr-2" />
                  <h3 className="font-bold text-[#02173C] text-lg">Caractéristiques Principales</h3>
                </div>
                <div className="space-y-3">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-5 h-5 bg-[#BE941B] rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <Check size={12} className="text-white" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            
            {/* Specifications */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <FileText className="w-6 h-6 text-[#BE941B] mr-3" />
                <h3 className="text-2xl font-black text-[#02173C]">Spécifications Techniques</h3>
              </div>
              <div className="space-y-3">
                {product.specifications.map((spec, index) => (
                  <div key={index} className="flex items-center py-2 border-b border-gray-200 last:border-b-0">
                    <div className="w-3 h-3 bg-[#BE941B] rounded-full mr-3"></div>
                    <span className="font-medium text-gray-700">{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Packaging */}
            <div className="bg-gradient-to-br from-[#02173C]/5 to-[#BE941B]/5 rounded-3xl p-8 shadow-lg border border-[#BE941B]/20">
              <div className="flex items-center mb-6">
                <Package className="w-6 h-6 text-[#BE941B] mr-3" />
                <h3 className="text-2xl font-black text-[#02173C]">Conditionnements Disponibles</h3>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {product.packages.map((pkg, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 text-center shadow-md border border-gray-100">
                    <div className="w-8 h-8 bg-[#BE941B]/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Package size={16} className="text-[#BE941B]" />
                    </div>
                    <span className="font-bold text-[#02173C]">{pkg}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Link 
              to="/produits/poids-lourds"
              className="group inline-flex items-center bg-white hover:bg-[#02173C] border-2 border-[#02173C] text-[#02173C] hover:text-white px-8 py-4 rounded-2xl transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <ChevronLeft size={20} className="mr-2 transform group-hover:-translate-x-1 transition-transform duration-300" />
              <span>Retour à la Gamme Poids Lourds</span>
            </Link>
            
            <Link 
              to="/contact"
              className="group inline-flex items-center bg-[#BE941B] hover:bg-[#02173C] text-white px-8 py-4 rounded-2xl transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span>Nous Contacter</span>
              <ArrowRight size={20} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
