import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Link, useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowRight, Trophy, Car, Shield, Star, Zap, Award, Check, Package, FileText, Bike, Anchor } from "lucide-react";

export default function MotoSeaEnginesProductDetail() {
  const { productId } = useParams();

  const products = {
    "dinoil-2t-competition-full-synth": {
      name: "DINOIL PREMIUM 2T MOTO COMPETITION FULL SYNTH",
      image: "https://cdn.builder.io/api/v1/image/assets%2F367800b539f442f7b8aca37c33d3b377%2F2bfc03518f6145e0b7e2eebdb56aedf9?format=webp&width=800",
      category: "2T Premium",
      description: "Huile entièrement synthétique pour motos de course à deux temps. Il doit être mélangé à l'essence dans une proportion inférieure à 3%. La proportion est toutefois déterminée par le fabricant. Il garantit d'excellents résultats, tant sur les moteurs lubrifiés avec un mélange prêt à l'emploi que sur ceux équipés d'un système séparé où l'huile est injectée directement dans le collecteur d'admission ou dans le carburateur lui-même. Réduit la fumée d'échappement.",
      specifications: [
        "API TC+",
        "JASO FC",
        "ISO-L-EGD",
        "ASTM TSC-4"
      ],
      packages: ["100ml", "500ml", "1L", "20L", "200L"],
      features: [
        "Huile entièrement synthétique",
        "Mélange essence inférieur à 3%",
        "Excellents résultats garantis",
        "Compatible système séparé injection",
        "Réduit la fumée d'échappement",
        "Formule pour moteurs de course"
      ]
    },
    "dinoil-2t-semi-synth": {
      name: "DINOIL PREMIUM 2T MOTO SEMI SYNTH",
      image: "https://cdn.builder.io/api/v1/image/assets%2F367800b539f442f7b8aca37c33d3b377%2Ffdb945b4ea484baa964640a84c2222f8?format=webp&width=800",
      category: "2T Premium",
      description: "Nouveau lubrifiant semi-synthétique qui permet une faible émission de gaz d'échappement tout en respectant les normes Jaso. Idéal pour les moteurs à deux temps, il possède la particularité de réduire la consommation en améliorant la lubrification, tout en protégeant les pièces.",
      specifications: [
        "API TC",
        "JASO FC",
        "ISO-L-EGC"
      ],
      packages: ["100ml", "500ml", "1L", "20L", "200L"],
      features: [
        "Lubrifiant semi-synthétique nouveau",
        "Faible émission gaz d'échappement",
        "Respecte normes JASO",
        "Réduit la consommation",
        "Améliore la lubrification",
        "Protection des pièces optimisée"
      ]
    },
    "dinoil-2t-mineral": {
      name: "DINOIL MULTIGRADE 2T MINERAL",
      image: "https://cdn.builder.io/api/v1/image/assets%2F367800b539f442f7b8aca37c33d3b377%2F71dd56287f2943ce9a11e080e13f200d?format=webp&width=800",
      category: "2T Multigrade",
      description: "Huile de mélange à base minérale, de bonne qualité, spécialement conçue pour la lubrification des moteurs à deux temps refroidis par air. Grâce à sa technologie appropriée correctement équilibrée, il garantit bon pouvoir lubrifiant et anti-usure, très peu de dépôts dans la chambre de combustion, propreté maximale de la bougie d'allumage et excellente transmission de la puissance du moteur.",
      specifications: [
        "API TA/TB",
        "JASO FB",
        "ASTM TCS-1/-2",
        "ISO-L-EGC"
      ],
      packages: ["100ml", "500ml", "1L", "4L", "20L", "200L"],
      features: [
        "Base minérale de bonne qualité",
        "Moteurs 2T refroidis par air",
        "Bon pouvoir lubrifiant et anti-usure",
        "Très peu de dépôts combustion",
        "Propreté maximale bougie",
        "Excellente transmission puissance"
      ]
    },
    "dinoil-2t-outboard": {
      name: "DINOIL MULTIGRADE 2T OUTBOARD",
      image: "https://cdn.builder.io/api/v1/image/assets%2F367800b539f442f7b8aca37c33d3b377%2Fa8c7be674a9c482ab7a8315cb3b9572c?format=webp&width=800",
      category: "2T Marine",
      description: "Lubrifiant spécial nouvellement formulé pour les moteurs hors-bord à 2 temps. Grâce à sa formule spéciale respectueuse de l'environnement, il ne pollue pas l'eau et le sol en cas de fuite. Et convient pour une utilisation dans les bateaux, les traîneaux et les motos équipés de moteurs refroidis par eau avec système d'injection avec et sans mélangeur. Misce jusqu'à 100:1. Répond à la spécification NMMA TC-W3.",
      specifications: [
        "NMMA TC-W3"
      ],
      packages: ["100ml", "500ml", "1L", "20L", "200L"],
      features: [
        "Spécial moteurs hors-bord 2T",
        "Formule respectueuse environnement",
        "Ne pollue pas eau et sol",
        "Moteurs refroidis par eau",
        "Système injection avec/sans mélangeur",
        "Misce jusqu'à 100:1",
        "Spécification NMMA TC-W3"
      ]
    },
    "dinoil-4t-5w40-competition": {
      name: "DINOIL PREMIUM 4T MOTO 5W/40 COMPETITION",
      image: "https://cdn.builder.io/api/v1/image/assets%2F367800b539f442f7b8aca37c33d3b377%2Fd74c64a6787e4a5db310f86d3483718f?format=webp&width=800",
      category: "4T Premium",
      description: "Lubrifiant synthétique pour moteurs à essence à 4 temps, spécialement conçu pour répondre aux exigences des moteurs de motos modernes à 4 temps à haute performance, avec refroidissement par air ou par eau. Il offre une excellente protection pour le moteur, la boîte de vitesses et les embrayages humides utilisés dans les moteurs à 4 temps. Il garantit une fiabilité maximale, même dans des conditions de fonctionnement sévères et à des températures élevées.",
      specifications: [
        "API SL",
        "JASO MA2"
      ],
      packages: ["1L", "20L", "200L"],
      features: [
        "Lubrifiant synthétique 4 temps",
        "Haute performance motos modernes",
        "Refroidissement air ou eau",
        "Protection moteur, boîte, embrayage",
        "Fiabilité maximale conditions sévères",
        "Résistance températures élevées"
      ]
    },
    "dinoil-4t-10w40-synthetic": {
      name: "DINOIL PREMIUM 4T MOTO 10W/40 SYNTHETIC",
      image: "https://cdn.builder.io/api/v1/image/assets%2F367800b539f442f7b8aca37c33d3b377%2F9d975f4f9051465d90f4b6cc532f5557?format=webp&width=800",
      category: "4T Premium",
      description: "Lubrifiant semi-synthétique formulé pour les moteurs à essence à 4 temps. Développée spécifiquement pour répondre aux exigences des moteurs de motos modernes et performants à 4 temps, avec refroidissement par air ou par eau. Offre une excellente protection pour le moteur, la boîte de vitesses et les embrayages humides utilisés dans les moteurs de motos à 4 temps. Garantit une fiabilité maximale, même dans des conditions de fonctionnement difficiles et à des températures élevées.",
      specifications: [
        "API SL",
        "JASO MA2"
      ],
      packages: ["1L", "20L", "200L"],
      features: [
        "Lubrifiant semi-synthétique 4T",
        "Moteurs essence modernes performants",
        "Refroidissement air ou eau",
        "Excellente protection intégrée",
        "Fiabilité maximale garantie",
        "Conditions difficiles haute température"
      ]
    },
    "dinoil-4t-20w50-multigrade": {
      name: "DINOIL MULTIGRADE 4T MOTO 20W/50",
      image: "https://cdn.builder.io/api/v1/image/assets%2F367800b539f442f7b8aca37c33d3b377%2F92d0ddc310df4694a0819b87f815552d?format=webp&width=800",
      category: "4T Multigrade",
      description: "Lubrifiant multigrade haute performance pour moteurs à essence à quatre temps. Le seuil de viscosité SAE 20W-50 et l'additif ciblé en font le produit idéal pour les applications où les vitesses et les températures élevées sont fréquentes et mettent le lubrifiant à l'épreuve. Excellente propreté du moteur grâce à l'additif détergent-dispersant. Fortes caractéristiques anti-usure, particulièrement requises dans les utilisations professionnelles sévères.",
      specifications: [
        "API SG",
        "JASO MA2"
      ],
      packages: ["1L", "20L", "200L"],
      features: [
        "Multigrade haute performance 4T",
        "Viscosité SAE 20W-50 optimale",
        "Vitesses et températures élevées",
        "Excellente propreté moteur",
        "Additif détergent-dispersant",
        "Fortes caractéristiques anti-usure",
        "Utilisations professionnelles sévères"
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
              to="/produits/moto-sea-engines"
              className="inline-flex items-center bg-[#BE941B] text-white px-6 py-3 rounded-xl hover:bg-[#02173C] transition-colors"
            >
              <ChevronLeft size={20} className="mr-2" />
              Retour à la gamme Moto & Marine
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
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&q=80" 
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
            <Link to="/produits/moto-sea-engines" className="text-gray-300 hover:text-white transition-colors">
              Moto and Sea Engines
            </Link>
            <ChevronRight size={16} className="text-gray-400" />
            <span className="text-[#BE941B] font-medium">{product.name}</span>
          </nav>

          <div className="text-center">
            <div className="inline-flex items-center bg-[#BE941B]/20 border border-[#BE941B]/30 rounded-full px-8 py-3 mb-8">
              {product.category.includes("2T") ? (
                <Bike className="w-5 h-5 text-[#BE941B] mr-2" />
              ) : (
                <Anchor className="w-5 h-5 text-[#BE941B] mr-2" />
              )}
              <span className="text-[#BE941B] font-bold text-sm uppercase tracking-widest">{product.category}</span>
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
              to="/produits/moto-sea-engines"
              className="group inline-flex items-center bg-white hover:bg-[#02173C] border-2 border-[#02173C] text-[#02173C] hover:text-white px-8 py-4 rounded-2xl transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <ChevronLeft size={20} className="mr-2 transform group-hover:-translate-x-1 transition-transform duration-300" />
              <span>Retour à la Gamme Moto & Marine</span>
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
