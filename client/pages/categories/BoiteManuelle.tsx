import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Cog, Shield, Droplets, Award } from "lucide-react";
import { SEO } from "../../components/SEO";

export default function BoiteManuelle() {
  type Product = {
    id: string;
    name: string;
    code?: string;
    image?: string;
  };

  const products: Product[] = [
    {
      id: "premium-75w80-ldc",
      name: "DINOIL PREMIUM SAE 75W/80 LDC",
      code: "1516",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fe98689421e434387bc8e35ec01be1ffb%2Fca003bb37aed4abf9898e45655982d19?format=webp&width=800",
    },
    {
      id: "premium-75w90-synth",
      name: "DINOIL PREMIUM SAE 75W/90 SYNTH",
      code: "1608",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fe98689421e434387bc8e35ec01be1ffb%2F3bd8070ac170424cbb2e76c1a1b0e7d2?format=webp&width=800",
    },
    {
      id: "multigrade-80w90-gl5",
      name: "DINOIL MULTIGRADE SAE 80W/90 GL 5",
      code: "2063",
      image: undefined as unknown as string,
    },
    {
      id: "multigrade-85w140-gl5",
      name: "DINOIL MULTIGRADE SAE 85W/140 GL 5",
      code: "2070",
      image: undefined as unknown as string,
    },
  ];

  const features = [
    { icon: Shield, title: "Protection EP", description: "Excellente protection anti-usure et charges extrêmes" },
    { icon: Droplets, title: "Stabilité", description: "Indice de viscosité élevé et faible moussage" },
    { icon: Cog, title: "Synchroniseurs", description: "Compatibilité avec boîtes synchronisées" },
    { icon: Award, title: "Normes", description: "API GL-4/GL-5, ZF, MAN, MB… selon produit" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO title="Boîte Manuelle – Huiles de transmission" description="Huiles de boîte manuelle et différentiel: 75W80 LDC, 75W90 Synth, 80W90 GL-5, 85W140 GL-5. API GL-4/GL-5, ZF, MAN." keywords={["huile boite manuelle","75w80","75w90","80w90","85w140","gl5","promokar","dinoil","tunisie"]} />
      <Header />

      <section className="relative bg-gradient-to-br from-[#02173C] to-[#02173C]/90 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519638399535-1b036603ac77?w=1600&q=80"
            alt="Boîte manuelle"
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
            <span className="text-[#BE941B] font-medium">Boîte Manuelle</span>
          </nav>

          <div className="text-center">
            <div className="inline-flex items-center bg-[#BE941B]/20 border border-[#BE941B]/30 rounded-full px-8 py-3 mb-8">
              <Cog className="w-5 h-5 text-[#BE941B] mr-2" />
              <span className="text-[#BE941B] font-bold text-sm uppercase tracking-widest">Gear Oil</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              <span className="block">Boîte</span>
              <span className="block bg-gradient-to-r from-[#BE941B] to-white bg-clip-text text-transparent">Manuelle</span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-[#BE941B] via-white to-[#BE941B] mx-auto mb-8 rounded-full"></div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Huiles de transmission EP pour boîtes manuelles, ponts et différentiels.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-r from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((f, i) => {
              const Icon = f.icon as any;
              return (
                <div key={i} className="text-center group">
                  <div className="w-16 h-16 bg-[#BE941B]/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#BE941B]/20 transition-colors duration-300">
                    <Icon size={28} className="text-[#BE941B]" />
                  </div>
                  <h3 className="font-bold text-[#02173C] text-sm uppercase tracking-wide mb-2">{f.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{f.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pt-1 pb-20 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <img 
              src="https://cdn.builder.io/api/v1/image/assets%2Ff858c707aa6f488f835bf447c4e2be30%2Fb9814eb9a4974e549d1dc7fbe2c4d514?format=webp&width=800"
              alt="Dinoil Logo"
              className="mx-auto max-w-48 w-full h-auto mb-8"
            />
            <h2 className="text-4xl md:text-5xl font-black text-[#02173C] mb-6">
              Gamme <span className="bg-gradient-to-r from-[#BE941B] to-[#02173C] bg-clip-text text-transparent">Boîte Manuelle</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#BE941B] to-[#02173C] mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Sélection d'huiles de transmission pour engrenages, boîtes et différentiels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {products.map((p) => (
              <Link key={p.id} to={`/produits/boite-manuelle/${p.id}`} className="group cursor-pointer">
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border border-gray-100">
                  {p.code && (
                    <div className="bg-gradient-to-r from-[#BE941B] to-[#02173C] text-white text-center py-3 px-4">
                      <span className="font-bold text-sm uppercase tracking-widest">Code: {p.code}</span>
                    </div>
                  )}
                  <div className="aspect-square relative bg-white p-4 flex items-center justify-center">
                    {p.image ? (
                      <img src={p.image} alt={p.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-center text-gray-400">
                        <span className="text-sm">Image non fournie</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#02173C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6 text-center">
                    <h1 className="text-xl font-black text-[#02173C] group-hover:text-[#BE941B] transition-colors duration-300 uppercase tracking-wide">
                      {p.name}
                    </h1>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link 
              to="/produits"
              className="group inline-flex items-center bg-white hover:bg-[#02173C] border-2 border-[#02173C] text-[#02173C] hover:text-white px-8 py-4 rounded-2xl transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <ChevronLeft size={20} className="mr-2 transform group-hover:-translate-x-1 transition-transform duration-300" />
              <span>Retour aux Catégories</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
