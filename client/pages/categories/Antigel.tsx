import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Snowflake, Shield, Droplets, FlaskConical, Check } from "lucide-react";

export default function Antigel() {
  const products = [
    {
      id: "dinoil-antifreeze-g12-g13",
      name: "DINOIL ANTIFREEZE G12/G13",
      code: "2322 / 2325",
      image: "https://cdn.builder.io/api/v1/image/assets%2F367800b539f442f7b8aca37c33d3b377%2Fb0acc5ca816e40a98d8d57b2f07bf21f?format=webp&width=800"
    },
    {
      id: "dinoil-antifreeze-pure-g11-red",
      name: "DINOIL ANTIFREEZE PURE G11 RED",
      code: "1912",
      image: "https://cdn.builder.io/api/v1/image/assets%2F367800b539f442f7b8aca37c33d3b377%2Fb0acc5ca816e40a98d8d57b2f07bf21f?format=webp&width=800"
    },
    {
      id: "dinoil-antifreeze-pure-g11-yellow",
      name: "DINOIL ANTIFREEZE PURE G11 YELLOW",
      code: "4654",
      image: "https://cdn.builder.io/api/v1/image/assets%2F367800b539f442f7b8aca37c33d3b377%2Fb0acc5ca816e40a98d8d57b2f07bf21f?format=webp&width=800"
    },
    {
      id: "dinoil-antifreeze-pure-g11-blue",
      name: "DINOIL ANTIFREEZE PURE G11 BLUE",
      code: "1905",
      image: "https://cdn.builder.io/api/v1/image/assets%2F367800b539f442f7b8aca37c33d3b377%2Fb0acc5ca816e40a98d8d57b2f07bf21f?format=webp&width=800"
    },
    {
      id: "dinoil-antifreeze-permanent-g11",
      name: "DINOIL ANTIFREEZE PERMANENT G11 -40°C/-20°C",
      code: "1929 / 1939",
      image: "https://cdn.builder.io/api/v1/image/assets%2F367800b539f442f7b8aca37c33d3b377%2Fb0acc5ca816e40a98d8d57b2f07bf21f?format=webp&width=800"
    }
  ];

  const features = [
    { icon: Snowflake, title: "Protection Froid", description: "Jusqu'à -70°C selon le produit et la dilution" },
    { icon: Shield, title: "Anti-Corrosion", description: "Protège aluminium, alliages et toutes pièces" },
    { icon: Droplets, title: "Concentré ou Prêt", description: "Formules concentrées ou prêtes à l'emploi" },
    { icon: FlaskConical, title: "Normes Constructeurs", description: "Conforme SAE/ASTM/VW et plus" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="relative bg-gradient-to-br from-[#02173C] to-[#02173C]/90 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1514511547117-f9f9d6060b6e?w=1200&q=80" 
            alt="Antigel"
            className="w-full h-full object-cover opacity-20"/>
          <div className="absolute inset-0 bg-gradient-to-r from-[#02173C]/80 to-[#02173C]/60"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <nav className="flex items-center space-x-2 text-sm mb-8" aria-label="Breadcrumb">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">Accueil</Link>
            <ChevronRight size={16} className="text-gray-400" />
            <Link to="/produits" className="text-gray-300 hover:text-white transition-colors">Produits</Link>
            <ChevronRight size={16} className="text-gray-400" />
            <span className="text-[#BE941B] font-medium">Antigel</span>
          </nav>

          <div className="text-center">
            <div className="inline-flex items-center bg-[#BE941B]/20 border border-[#BE941B]/30 rounded-full px-8 py-3 mb-8">
              <Snowflake className="w-5 h-5 text-[#BE941B] mr-2" />
              <span className="text-[#BE941B] font-bold text-sm uppercase tracking-widest">ANTIFREEZE</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              <span className="block bg-gradient-to-r from-[#BE941B] to-white bg-clip-text text-transparent">Antigel</span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-[#BE941B] via-white to-[#BE941B] mx-auto mb-8 rounded-full"></div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Liquides antigel et anticorrosion pour systèmes modernes en aluminium.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-r from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((f, i) => {
              const Icon = f.icon; 
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
            <h2 className="text-4xl md:text-5xl font-black text-[#02173C] mb-6">
              Gamme <span className="bg-gradient-to-r from-[#BE941B] to-[#02173C] bg-clip-text text-transparent">Antigel</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#BE941B] to-[#02173C] mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Concentrés et prêts à l'emploi répondant aux normes internationales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {products.map((p) => (
              <Link key={p.id} to={`/produits/antigel/${p.id}`} className="group cursor-pointer">
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border border-gray-100">
                  <div className="bg-gradient-to-r from-[#BE941B] to-[#02173C] text-white text-center py-3 px-4">
                    <span className="font-bold text-sm uppercase tracking-widest">Code: {p.code}</span>
                  </div>
                  <div className="aspect-square relative bg-white p-4">
                    <img src={p.image} alt={p.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#02173C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6 text-center">
                    <h1 className="text-xl font-black text-[#02173C] group-hover:text-[#BE941B] transition-colors duration-300 uppercase tracking-wide">{p.name}</h1>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/produits" className="group inline-flex items-center bg-white hover:bg-[#02173C] border-2 border-[#02173C] text-[#02173C] hover:text-white px-8 py-4 rounded-2xl transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <ChevronLeft size={20} className="mr-2 transform group-hover:-translate-x-1 transition-transform duration-300" />
              <span>Retour aux Catégories</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[#02173C] to-[#02173C]/95">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="text-white">
              <div className="inline-flex items-center bg-[#BE941B]/20 border border-[#BE941B]/30 rounded-full px-6 py-2 mb-8">
                <Snowflake className="w-4 h-4 text-[#BE941B] mr-2" />
                <span className="text-[#BE941B] font-bold text-sm uppercase tracking-widest">Avantages Antigel</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Protection <span className="text-[#BE941B]">4 saisons</span></h2>
              <div className="w-24 h-1 bg-[#BE941B] mb-8 rounded-full"></div>
              <div className="space-y-4 mb-8">
                {[
                  "Protection jusqu'à -70°C selon dilution",
                  "Additifs anti-corrosion sans nitrites, amines ni phosphates (selon références)",
                  "Compatibilité avec systèmes en aluminium",
                  "Disponibles en 1kg, 4kg, 20kg, 230kg"
                ].map((b, i) => (
                  <div key={i} className="flex items-start">
                    <div className="w-6 h-6 bg-[#BE941B] rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <Check size={14} className="text-white" />
                    </div>
                    <span className="text-gray-300 leading-relaxed">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square relative overflow-hidden rounded-3xl">
                <img src="https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?w=600&q=80" alt="Antigel" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#BE941B]/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
