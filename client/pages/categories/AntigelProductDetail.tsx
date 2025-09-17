import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Link, useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight, Snowflake, Shield, Star, Check, Package, FileText } from "lucide-react";

export default function AntigelProductDetail() {
  const { productId } = useParams();

  const products = {
    "dinoil-antifreeze-g12-g13-vw": {
      name: "DINOIL ANTIFREEZE G12/G13 VW",
      code: "2322 / 2325",
      image: "https://cdn.builder.io/api/v1/image/assets%2Ff858c707aa6f488f835bf447c4e2be30%2Fddcab4a6d2d643679ba2316421db1d4d?format=webp&width=800",
      description:
        "Liquide antigel concentré de couleur rouge. Formulé sans nitrites, amines ni phosphates. Convient à tous les véhicules avec une protection jusqu'à -70°C selon la dilution. Protège le moteur de la surchauffe et de la corrosion de toutes les parties métalliques, aluminium et alliages inclus.",
      specifications: [
        "VW/AUDI/SEAT/SKODA: TL774 D/F",
        "OPEL GM: 6277M",
        "FORD: WSS-M97B44-D",
        "MB 325.3",
        "MAN 324 SNF"
      ],
      packages: ["1kg", "20kg", "230kg"],
      features: [
        "Antigel/antiboil concentré",
        "Sans nitrites, amines, phosphates",
        "Protection jusqu'à -70°C",
        "Haute protection anticorrosion",
        "Systèmes modernes en aluminium"
      ]
    },
    "dinoil-antifreeze-pure-g11-red": {
      name: "DINOIL ANTIFREEZE PURE G11 RED",
      code: "1912",
      image: undefined as unknown as string,
      description:
        "Liquide antigel rouge concentré, sans nitrites, amines et phosphates. Adapté à tous les véhicules avec une protection jusqu'à -70°C. Protège contre la surchauffe et la corrosion. Diluable à l'eau selon le point de congélation souhaité.",
      specifications: [
        "SAE J 1034",
        "CUNA NC 959-16",
        "VW TL 774 D"
      ],
      packages: ["1kg", "20kg", "230kg"],
      features: [
        "Concentré rouge G11",
        "Excellente protection corrosion",
        "Diluable à l'eau",
        "Compatibilité large parc",
        "Prévention surchauffe"
      ]
    },
    "dinoil-antifreeze-pure-g11-yellow": {
      name: "DINOIL ANTIFREEZE PURE G11 YELLOW",
      code: "4654",
      image: undefined as unknown as string,
      description:
        "Antigel concentré de couleur jaune, protection jusqu'à -70°C. Protège le moteur contre la surchauffe, la rouille et la corrosion. Diluable à l'eau selon le point de congélation voulu.",
      specifications: [
        "SAE J-1034",
        "ASTM D3306, D4985",
        "MB 325.2",
        "MAN 324",
        "GM 1899M, GM 1825M",
        "FORD EZE M-97B44-A",
        "John Deere H24B1/C1"
      ],
      packages: ["1kg", "4kg", "20kg", "230kg"],
      features: [
        "Couleur jaune G11",
        "Protection -70°C selon dilution",
        "Anticorrosion et antirouille",
        "Compatible multi-marques",
        "Diluable"
      ]
    },
    "dinoil-antifreeze-pure-g11-blue": {
      name: "DINOIL ANTIFREEZE PURE G11 BLUE",
      code: "1905",
      image: undefined as unknown as string,
      description:
        "Antigel anti-thermique, adapté à tous les véhicules avec protection jusqu'à -70°C. Protège le moteur contre la surchauffe, la rouille et la corrosion. Diluable à l'eau selon le grade souhaité.",
      specifications: [
        "CUNA NC 956 16/017",
        "VW TL 774 C"
      ],
      packages: ["1kg", "4kg", "20kg", "230kg"],
      features: [
        "Couleur bleue G11",
        "Protection -70°C",
        "Anticorrosion aluminium",
        "Diluable",
        "Utilisation universelle"
      ]
    },
    "dinoil-antifreeze-permanent-g11": {
      name: "DINOIL ANTIFREEZE PERMANENT G11 -40°C/-20°C",
      code: "1929 / 1939",
      image: undefined as unknown as string,
      description:
        "Antigel anti-thermique prêt à l'emploi (-40°C) ou diluable (-20°C) selon la référence. Protège contre la surchauffe, la rouille et la corrosion.",
      specifications: [
        "CUNA NC 956 16/017",
        "VW TL 774 C"
      ],
      packages: ["1kg", "4kg", "20kg", "230kg"],
      features: [
        "Prêt à l'emploi ou diluable",
        "Protection -40°C / -20°C",
        "Anticorrosion",
        "Large compatibilité parc",
        "Utilisation immédiate"
      ]
    }
  } as const;

  const product = products[productId as keyof typeof products];

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-6 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-black text-[#02173C] mb-6">Produit non trouvé</h1>
            <Link 
              to="/produits/antigel"
              className="inline-flex items-center bg-[#BE941B] text-white px-6 py-3 rounded-xl hover:bg-[#02173C] transition-colors"
            >
              <ChevronLeft size={20} className="mr-2" />
              Retour à la gamme Antigel
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

      <section className="relative bg-gradient-to-br from-[#02173C] to-[#02173C]/90 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519680772-8b3a0b46fcd8?w=1600&q=80"
            alt={product.name}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#02173C]/80 to-[#02173C]/60"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <nav className="flex items-center space-x-2 text-sm mb-8" aria-label="Breadcrumb">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">Accueil</Link>
            <ChevronRight size={16} className="text-gray-400" />
            <Link to="/produits" className="text-gray-300 hover:text-white transition-colors">Produits</Link>
            <ChevronRight size={16} className="text-gray-400" />
            <Link to="/produits/antigel" className="text-gray-300 hover:text-white transition-colors">Antigel</Link>
            <ChevronRight size={16} className="text-gray-400" />
            <span className="text-[#BE941B] font-medium">{product.name}</span>
          </nav>

          <div className="text-center">
            <div className="inline-flex items-center bg-[#BE941B]/20 border border-[#BE941B]/30 rounded-full px-8 py-3 mb-8">
              <Snowflake className="w-5 h-5 text-[#BE941B] mr-2" />
              <span className="text-[#BE941B] font-bold text-sm uppercase tracking-widest">Antifreeze</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              <span className="block bg-gradient-to-r from-[#BE941B] to-white bg-clip-text text-transparent">{product.name}</span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-[#BE941B] via-white to-[#BE941B] mx-auto mb-8 rounded-full"></div>
            <div className="inline-flex items-center bg-[#02173C]/20 border border-[#BE941B]/30 rounded-full px-6 py-2">
              <span className="text-[#BE941B] font-bold text-sm uppercase tracking-widest">Code: {product.code}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <div className="aspect-square relative flex items-center justify-center">
                  {product.image ? (
                    <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400 text-center">
                      <span className="text-sm">Aucune image fournie pour ce produit</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-[#02173C] mb-6">{product.name}</h2>
                <p className="text-gray-600 leading-relaxed text-lg">{product.description}</p>
              </div>

              <div className="bg-gradient-to-br from-[#BE941B]/5 to-[#02173C]/5 rounded-2xl p-6 border border-[#BE941B]/20">
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-[#BE941B] mr-2" />
                  <h3 className="font-bold text-[#02173C] text-lg">Caractéristiques Principales</h3>
                </div>
                <div className="space-y-3">
                  {product.features.map((f, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="w-5 h-5 bg-[#BE941B] rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <Check size={12} className="text-white" />
                      </div>
                      <span className="text-gray-700">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <FileText className="w-6 h-6 text-[#BE941B] mr-3" />
                <h3 className="text-2xl font-black text-[#02173C]">Normes et Spécifications</h3>
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

      <section className="py-16 bg-gradient-to-r from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Link 
              to="/produits/antigel"
              className="group inline-flex items-center bg-white hover:bg-[#02173C] border-2 border-[#02173C] text-[#02173C] hover:text-white px-8 py-4 rounded-2xl transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <ChevronLeft size={20} className="mr-2 transform group-hover:-translate-x-1 transition-transform duration-300" />
              <span>Retour à la Gamme Antigel</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
