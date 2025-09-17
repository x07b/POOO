import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Link, useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowRight, Trophy, Car, Shield, Star, Zap, Award, Check, Package, FileText } from "lucide-react";

export default function MultigradeProductDetail() {
  const { productId } = useParams();

  const products = {
    "dinoil-4000-sae-20w60-xm": {
      name: "DINOIL 4000 SAE 20W/60 XM",
      image: "https://cdn.builder.io/api/v1/image/assets%2F367800b539f442f7b8aca37c33d3b377%2F9e67a123dffe4dff888791f96a43e66d?format=webp&width=800",
      description: "Lubrifiant adapté à tous les types de moteurs diesel et turbodiesel. Composé avec des additifs spéciaux qui permettent d'empêcher la formation de boues, assurer une lubrification parfaite et réduire les émissions de gaz d'échappement. Son utilisation est particulièrement adaptée pour les moteurs usés. Il se caractérise par sa puissance détergente dispersante élevée et sa protection du moteur.",
      specifications: [
        "API SJ/CF",
        "ACEA A2-96/B2-02", 
        "MB 229.1"
      ],
      packages: ["1 LT", "5 LT", "20 LT", "60 LT", "200 LT"],
      features: [
        "Puissance détergente dispersante élevée",
        "Protection du moteur exceptionnelle",
        "Particulièrement adapté pour moteurs usés",
        "Réduction des émissions de gaz d'échappement",
        "Prévention de la formation de boues"
      ]
    },
    "dinoil-4000-sae-20w50-xm": {
      name: "DINOIL 4000 SAE 20W/50 XM",
      image: "https://cdn.builder.io/api/v1/image/assets%2F367800b539f442f7b8aca37c33d3b377%2F0f881515469843f8bb243a88fead08f3?format=webp&width=800",
      description: "Lubrifiant adapté à tous les types de moteurs diesel et turbodiesel. Composé avec des additifs spéciaux qui permettent d'empêcher la formation de boues, assurer une lubrification parfaite et réduire les émissions de gaz d'échappement. Son utilisation est particulièrement adaptée pour les moteurs usés. Il se caractérise par sa puissance détergente dispersante élevée et sa protection du moteur.",
      specifications: [
        "API SJ/CF",
        "ACEA A2-96/B2-02",
        "MB 229.1"
      ],
      packages: ["1 LT", "5 LT", "20 LT", "60 LT", "200 LT"],
      features: [
        "Puissance détergente dispersante élevée",
        "Protection du moteur exceptionnelle", 
        "Particulièrement adapté pour moteurs usés",
        "Réduction des émissions de gaz d'échappement",
        "Prévention de la formation de boues"
      ]
    },
    "dinoil-3000-sae-15w40-td": {
      name: "DINOIL 3000 SAE 15W/40 TD",
      image: "https://cdn.builder.io/api/v1/image/assets%2F367800b539f442f7b8aca37c33d3b377%2F15cfe440baff4b57bc637a69305d0178?format=webp&width=800",
      description: "Lubrifiant multigrade d'excellente qualité adapté aux moteurs diesel à aspiration naturelle et turbo. Sa formulation avec des additifs de haute qualité permet de maintenir les pistons extrêmement propres, sans encrassement lié à la combustion, tout en assurant une excellente performance et protection du moteur. Les propriétés antifriction et antioxydantes de ce lubrifiant permettent de prolonger les intervalles de vidange.",
      specifications: [
        "API CI4/CF",
        "ACEA E5/E4/B4/B3",
        "MB 228.5",
        "MAN 3277",
        "MTU Type 3",
        "VOLVO VDS-2",
        "RENAULT RXD",
        "SCANIA LDF",
        "IVECO",
        "DAF HP-2"
      ],
      packages: ["1 LT", "5 LT", "20 LT", "60 LT", "200 LT"],
      features: [
        "Excellente qualité multigrade",
        "Adapté moteurs diesel aspiration naturelle et turbo",
        "Pistons extrêmement propres",
        "Propriétés antifriction et antioxydantes",
        "Intervalles de vidange prolongés",
        "Haute protection moteur"
      ]
    },
    "dinoil-3000-sae-15w40-sm": {
      name: "DINOIL 3000 SAE 15W/40 SM",
      image: "https://cdn.builder.io/api/v1/image/assets%2F367800b539f442f7b8aca37c33d3b377%2F24926bd727384ae5a39e8a7cf89e4793?format=webp&width=800",
      description: "Lubrifiant multigrade pour les moteurs de technologie moderne et ancienne avec et sans convertisseur catalytique. Elle convient aux moteurs à essence et diesel et offre une protection maximale par rapport aux autres huiles de sa catégorie. Fabriqué à partir de matières premières de pointe, il garantit une fiabilité totale dans toutes les conditions de service. La forte résistance à l'oxydation permet une performance durable, même aux températures de fonctionnement les plus extrêmes.",
      specifications: [
        "API SF/CF",
        "ACEA A2/B2",
        "MB 227.1",
        "MIL-L-46152 B",
        "MIL-L-21D4 4",
        "CCMC G4"
      ],
      packages: ["1 LT", "5 LT", "20 LT", "60 LT", "200 LT"],
      features: [
        "Moteurs technologie moderne et ancienne",
        "Compatible avec et sans convertisseur catalytique",
        "Convient moteurs essence et diesel",
        "Protection maximale de sa catégorie",
        "Matières premières de pointe",
        "Forte résistance à l'oxydation",
        "Performance durable températures extrêmes"
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
              to="/produits/multigrade-line/vehicules"
              className="inline-flex items-center bg-[#BE941B] text-white px-6 py-3 rounded-xl hover:bg-[#02173C] transition-colors"
            >
              <ChevronLeft size={20} className="mr-2" />
              Retour à la gamme Multigrade
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
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80" 
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
            <Link to="/produits/multigrade-line/vehicules" className="text-gray-300 hover:text-white transition-colors">
              Multigrade Line Véhicules
            </Link>
            <ChevronRight size={16} className="text-gray-400" />
            <span className="text-[#BE941B] font-medium">{product.name}</span>
          </nav>

          <div className="text-center">
            <div className="inline-flex items-center bg-[#BE941B]/20 border border-[#BE941B]/30 rounded-full px-8 py-3 mb-8">
              <Trophy className="w-5 h-5 text-[#BE941B] mr-2" />
              <span className="text-[#BE941B] font-bold text-sm uppercase tracking-widest">Multigrade Line</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              <span className="block bg-gradient-to-r from-[#BE941B] to-white bg-clip-text text-transparent">
                {product.name}
              </span>
            </h1>
            
            <div className="w-32 h-1 bg-gradient-to-r from-[#BE941B] via-white to-[#BE941B] mx-auto mb-8 rounded-full"></div>
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
              <div className="grid grid-cols-2 gap-4">
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
              to="/produits/multigrade-line/vehicules"
              className="group inline-flex items-center bg-white hover:bg-[#02173C] border-2 border-[#02173C] text-[#02173C] hover:text-white px-8 py-4 rounded-2xl transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <ChevronLeft size={20} className="mr-2 transform group-hover:-translate-x-1 transition-transform duration-300" />
              <span>Retour à la Gamme Multigrade</span>
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
