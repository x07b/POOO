import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Link, useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight, Droplets, Check, Package, FileText } from "lucide-react";

export default function GraisseProductDetail() {
  const { productId } = useParams();

  const products = {
    "dinoil-grease-graphite": {
      name: "DINOIL GRAPHITE GREASE",
      code: "4623",
      image: "https://cdn.builder.io/api/v1/image/assets%2F367800b539f442f7b8aca37c33d3b377%2F78ecb8ac3d2d49649d7c0570a53818a8?format=webp&width=800",
      category: "Graisse Graphite",
      description:
        "Graisse spéciale à base de savons de graphite, enrichie en bisulfure de molybdène. Lubrification optimale pour roues et roulements opérant en conditions sévères. Plage d'utilisation: −20°C à +230°C.",
      specifications: [
        "ISO 6743‑9",
        "DIN 51825",
        "DIN 51502",
        "Base: Graphite + MoS₂",
        "Température: −20°C à +230°C"
      ],
      packages: ["850 g", "4 kg", "16 kg", "180 kg"],
      features: [
        "Très haute pression",
        "Faible friction",
        "Protection anti‑usure",
        "Conditions sévères"
      ]
    },
    "dinoil-grease-lithium": {
      name: "DINOIL LITHIUM GREASE 00/0/1/2/3",
      code: "4630",
      image: "https://cdn.builder.io/api/v1/image/assets%2F367800b539f442f7b8aca37c33d3b377%2F0196465a665d405f90ed6294a801ff75?format=webp&width=800",
      category: "Graisse Lithium",
      description:
        "Graisse multifonctionnelle à base de savons de lithium et d'huile minérale hautement raffinée. Adaptée à la lubrification générale des véhicules et des roulements de machines industrielles en charge moyenne et à températures élevées. Haute résistance à l'eau.",
      specifications: [
        "ISO 6743‑9",
        "DIN 51825",
        "DIN 51502",
        "Grades disponibles: 00/0/1/2/3"
      ],
      packages: ["850 g", "4 kg", "16 kg", "180 kg"],
      features: [
        "Polyvalente véhicules/industrie",
        "Bonne stabilité mécanique",
        "Protection anti‑corrosion",
        "Longue durée de service"
      ]
    },
    "dinoil-grease-calcium": {
      name: "DINOIL MULTI PURPOSE CALCIUM 1/2/3",
      code: "4647",
      image: "https://cdn.builder.io/api/v1/image/assets%2F367800b539f442f7b8aca37c33d3b377%2Ffaa6d4fa22254c6a977ac7c1f745dc12?format=webp&width=800",
      category: "Graisse Calcium",
      description:
        "Graisse à base d'huile minérale de haute qualité. Renforce la protection des pièces soumises à de fortes contraintes en environnements humides. Améliore la résistance à la traction et la tenue aux charges lourdes à faible vitesse, pour températures de basses à moyennes.",
      specifications: [
        "ISO 6743‑9",
        "DIN 51825",
        "DIN 51502"
      ],
      packages: ["850 g", "4 kg", "16 kg", "180 kg"],
      features: [
        "Protection en milieux humides",
        "Charges lourdes, basse vitesse",
        "Anti‑corrosion",
        "Usage auto et industriel"
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
            <Link to="/produits/graisse" className="inline-flex items-center bg-[#BE941B] text-white px-6 py-3 rounded-xl hover:bg-[#02173C] transition-colors">
              <ChevronLeft size={20} className="mr-2" />
              Retour à la gamme Graisse
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
          <img src="https://cdn.builder.io/api/v1/image/assets%2F367800b539f442f7b8aca37c33d3b377%2F04c864c21dde4aef9412459e8399e803?format=webp&width=1200" alt={product.name} className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#02173C]/80 to-[#02173C]/60"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <nav className="flex items-center space-x-2 text-sm mb-8" aria-label="Breadcrumb">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">Accueil</Link>
            <ChevronRight size={16} className="text-gray-400" />
            <Link to="/produits" className="text-gray-300 hover:text-white transition-colors">Produits</Link>
            <ChevronRight size={16} className="text-gray-400" />
            <Link to="/produits/graisse" className="text-gray-300 hover:text-white transition-colors">Graisse</Link>
            <ChevronRight size={16} className="text-gray-400" />
            <span className="text-[#BE941B] font-medium">{product.name}</span>
          </nav>

          <div className="text-center">
            <div className="inline-flex items-center bg-[#BE941B]/20 border border-[#BE941B]/30 rounded-full px-8 py-3 mb-8">
              <Droplets className="w-5 h-5 text-[#BE941B] mr-2" />
              <span className="text-[#BE941B] font-bold text-sm uppercase tracking-widest">Grease</span>
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
                <div className="aspect-square relative">
                  <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
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
                  <Droplets className="w-5 h-5 text-[#BE941B] mr-2" />
                  <h3 className="font-bold text-[#02173C] text-lg">Caractéristiques</h3>
                </div>
                <div className="space-y-3">
                  {product.features.map((f, i) => (
                    <div key={i} className="flex items-start">
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
                <h3 className="text-2xl font-black text-[#02173C]">Spécifications</h3>
              </div>
              <div className="space-y-3">
                {product.specifications.map((s, i) => (
                  <div key={i} className="flex items-center py-2 border-b border-gray-200 last:border-b-0">
                    <div className="w-3 h-3 bg-[#BE941B] rounded-full mr-3"></div>
                    <span className="font-medium text-gray-700">{s}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#02173C]/5 to-[#BE941B]/5 rounded-3xl p-8 shadow-lg border border-[#BE941B]/20">
              <div className="flex items-center mb-6">
                <Package className="w-6 h-6 text-[#BE941B] mr-3" />
                <h3 className="text-2xl font-black text-[#02173C]">Conditionnements</h3>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {product.packages.map((pkg, i) => (
                  <div key={i} className="bg-white rounded-xl p-4 text-center shadow-md border border-gray-100">
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
            <Link to="/produits/graisse" className="group inline-flex items-center bg-white hover:bg-[#02173C] border-2 border-[#02173C] text-[#02173C] hover:text-white px-8 py-4 rounded-2xl transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <ChevronLeft size={20} className="mr-2 transform group-hover:-translate-x-1 transition-transform duration-300" />
              <span>Retour à la Gamme Graisse</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
