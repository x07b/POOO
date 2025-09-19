import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Link, useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight, Cog, Star, Check, Package, FileText } from "lucide-react";

export default function BoiteManuelleProductDetail() {
  const { productId } = useParams();

  const products = {
    "premium-75w80-ldc": {
      name: "DINOIL PREMIUM SAE 75W/80 LDC",
      code: "1516",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fe98689421e434387bc8e35ec01be1ffb%2Fca003bb37aed4abf9898e45655982d19?format=webp&width=800",
      description:
        "Huile de transmission universelle synthétique haute performance pour boîtes manuelles modernes et différentiels, développée pour les services sévères. La technologie additive avancée assure une protection maximale des mécanismes et une excellente compatibilité des synchroniseurs.",
      specifications: [
        "API GL-4/GL-5",
        "MAN 341",
        "MIL-L-2105 D",
        "FIAT",
        "VOLVO",
        "BMW",
      ],
      packages: ["1L", "20L", "200L"],
      features: [
        "Excellentes propriétés EP",
        "Antimousse et détergence pour une lubrification constante",
        "Indice de viscosité élevé pour une parfaite fluidité",
        "Protection anticorrosion et anti-usure",
      ],
    },
    "premium-75w90-synth": {
      name: "DINOIL PREMIUM SAE 75W/90 SYNTH",
      code: "1608",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fe98689421e434387bc8e35ec01be1ffb%2F3bd8070ac170424cbb2e76c1a1b0e7d2?format=webp&width=800",
      description:
        "Lubrifiant 100% synthétique formulé avec des bases à haute viscosité et un système d'additifs assurant une résistance maximale à l'usure et de hautes charges, compatible avec les matériaux de synchronisation.",
      specifications: [
        "API GL-4/GL-5",
        "US MIL-L-2105D",
        "ZF TE-ML 05B/12B/17B/19C/21B",
        "MAN 342",
        "Scania",
        "FIAT / VOLVO / BMW",
      ],
      packages: ["1L", "20L", "200L"],
      features: [
        "Très haute stabilité au cisaillement",
        "Excellente protection des engrenages",
        "Compatibilité synchroniseurs",
        "Démulsibilité et anti-mousse maîtrisées",
      ],
    },
    "multigrade-80w90-gl5": {
      name: "DINOIL MULTIGRADE SAE 80W/90 GL 5",
      code: "2063",
      image: undefined as unknown as string,
      description:
        "Lubrifiant formulé avec des bases à haute viscosité et additifs EP garantissant d'excellentes propriétés contre l'usure par friction. Recommandé pour engrenages et transmissions travaillant en conditions sévères.",
      specifications: [
        "API GL-4/GL-5",
        "MIL-L-2105 D",
        "MB 235.0",
        "MAN 342",
        "ZF TE-ML 05A/12E/16B/17B/19B/21A",
      ],
      packages: ["1L", "20L", "200L"],
      features: [
        "Excellentes propriétés EP",
        "Protection optimale même au démarrage et à l'accélération",
        "Anti-usure renforcée des pignons et roulements",
        "Faible moussage, bonne démulsibilité",
      ],
    },
    "multigrade-85w140-gl5": {
      name: "DINOIL MULTIGRADE SAE 85W/140 GL 5",
      code: "2070",
      image: undefined as unknown as string,
      description:
        "Lubrifiant spécialement conçu pour boîtes de vitesses et différentiels soumis à fortes charges. Base à haute viscosité avec additifs EP offrant une protection optimale même à bas régime et forte charge.",
      specifications: [
        "API GL-4/GL-5",
        "MIL-L-2105 D",
        "ZF TE-ML 05A/16D/21A",
        "MAN 342",
        "TYP M-1 / CS 3000B",
        "MACK GO-G / GM / MB 235.0",
      ],
      packages: ["1L", "20L", "200L"],
      features: [
        "Protection EP en conditions extrêmes",
        "Longue durée des composants de transmission",
        "Excellente anti-usure et anticorrosion",
        "Maintien de la viscosité à haute température",
      ],
    },
  } as Record<string, {
    name: string;
    code?: string;
    image?: string;
    description: string;
    specifications: string[];
    packages: string[];
    features: string[];
    pdfUrl?: string;
  }>;

  const product = products[productId as string];

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-6 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-black text-[#02173C] mb-6">Produit non trouvé</h1>
            <Link 
              to="/produits/boite-manuelle"
              className="inline-flex items-center bg-[#BE941B] text-white px-6 py-3 rounded-xl hover:bg-[#02173C] transition-colors"
            >
              <ChevronLeft size={20} className="mr-2" />
              Retour à Boîte Manuelle
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
            src="https://images.unsplash.com/photo-1519638399535-1b036603ac77?w=1600&q=80"
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
            <Link to="/produits/boite-manuelle" className="text-gray-300 hover:text-white transition-colors">Boîte Manuelle</Link>
            <ChevronRight size={16} className="text-gray-400" />
            <span className="text-[#BE941B] font-medium">{product.name}</span>
          </nav>

          <div className="text-center">
            <div className="inline-flex items-center bg-[#BE941B]/20 border border-[#BE941B]/30 rounded-full px-8 py-3 mb-8">
              <Cog className="w-5 h-5 text-[#BE941B] mr-2" />
              <span className="text-[#BE941B] font-bold text-sm uppercase tracking-widest">Gear Oil</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              <span className="block bg-gradient-to-r from-[#BE941B] to-white bg-clip-text text-transparent">{product.name}</span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-[#BE941B] via-white to-[#BE941B] mx-auto mb-8 rounded-full"></div>
            {product.code && (
              <div className="inline-flex items-center bg-[#02173C]/20 border border-[#BE941B]/30 rounded-full px-6 py-2">
                <span className="text-[#BE941B] font-bold text-sm uppercase tracking-widest">Code: {product.code}</span>
              </div>
            )}
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
                {product.pdfUrl && (
                  <a href={product.pdfUrl} target="_blank" rel="noreferrer" className="inline-flex items-center mt-4 text-[#02173C] hover:text-[#BE941B] font-semibold">
                    <FileText size={18} className="mr-2" /> Télécharger la fiche PDF
                  </a>
                )}
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
              to="/produits/boite-manuelle"
              className="group inline-flex items-center bg-white hover:bg-[#02173C] border-2 border-[#02173C] text-[#02173C] hover:text-white px-8 py-4 rounded-2xl transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <ChevronLeft size={20} className="mr-2 transform group-hover:-translate-x-1 transition-transform duration-300" />
              <span>Retour à la Gamme Boîte Manuelle</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
