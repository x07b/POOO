import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Cog, Shield, Droplets, Award } from "lucide-react";

export default function BoitesAutomatiques() {
  type Product = {
    id: string;
    name: string;
    code?: string;
    image?: string;
  };

  const products: Product[] = [
    {
      id: "atf-5-4-hp-zf",
      name: "DINOIL ATF 5/4 HP FLUID - ZF",
      code: "4067",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fe98689421e434387bc8e35ec01be1ffb%2F90b90a9a73504c2f8f0b2da7febfe3e3?format=webp&width=800",
    },
    {
      id: "atf-6hp-zf",
      name: "DINOIL ATF 6HP FLUID - ZF 6HP",
      code: "4045",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fe98689421e434387bc8e35ec01be1ffb%2F5d0c05ac74154f2da8d5ab1d361e80a2?format=webp&width=800",
    },
    {
      id: "atf-8hp-fluid",
      name: "DINOIL ATF 8HP FLUID - AUDI/BMW/VW/LAND ROVER",
      code: "4043",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fe98689421e434387bc8e35ec01be1ffb%2F3a7369df9db347849276daccfe78dd16?format=webp&width=800",
    },
    {
      id: "atf-plus-4-chrysler",
      name: "DINOIL ATF +4 CHRYSLER JEEP DODGE",
      code: "4050",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fe98689421e434387bc8e35ec01be1ffb%2Ff9e1cc6c11944969b5ccd10f727fccd9?format=webp&width=800",
    },
    {
      id: "atf-mb-9-serie",
      name: "DINOIL ATF MERCEDES BENZ 9-SERIE",
      code: "4081",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fe98689421e434387bc8e35ec01be1ffb%2Ff179087f043945b2ac728acd78780af4?format=webp&width=800",
    },
    {
      id: "atf-cvt",
      name: "DINOIL ATF CVT MITSUBISHI/NISSAN/HONDA/TOYOTA",
      code: "4098",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fe98689421e434387bc8e35ec01be1ffb%2F4d09635d969846a7bd33df1683ff7ac5?format=webp&width=800",
    },
    {
      id: "atf-sp-iii-asiatic",
      name: "DINOIL ATF SP III ASIATIC CARS",
      code: "4104",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fe98689421e434387bc8e35ec01be1ffb%2Fdc4cd95dc84848d3b358dd45a8a1fa05?format=webp&width=800",
    },
    {
      id: "dct-dsg",
      name: "DINOIL DCT/DSG VW/AUDI/BMW/FORD/CHRYSLER",
      code: "4111",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fe98689421e434387bc8e35ec01be1ffb%2Fb165cc98625b44eda6a01e714c5fb75f?format=webp&width=800",
    },
    {
      id: "gpsf-green-power",
      name: "DINOIL PROFESSIONAL GPSF GREEN POWER STEERING",
      code: "4128",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fe98689421e434387bc8e35ec01be1ffb%2Feed151bf33d04f2a85675131270a12fc?format=webp&width=800",
    },
    {
      id: "psf-hydraulic",
      name: "DINOIL PROFESSIONAL PSF HYDRAULIC",
      code: "4135",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fe98689421e434387bc8e35ec01be1ffb%2F65e72980517f4515ad12c36fce3b6858?format=webp&width=800",
    },
    {
      id: "atf-dex-ii-d",
      name: "DINOIL PREMIUM ATF DEX II D",
      code: "3170",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fe98689421e434387bc8e35ec01be1ffb%2F34a2418c54f34af88bc5b4336c6ecac4?format=webp&width=800",
    },
    {
      id: "atf-dex-iii",
      name: "DINOIL PREMIUM ATF DEX III",
      code: "1639",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fe98689421e434387bc8e35ec01be1ffb%2Fc1edce5970c947468de6c37d03915e88?format=webp&width=800",
    },
    {
      id: "multigrade-type-a",
      name: "DINOIL MULTIGRADE ATF TYPE A",
      code: "2032",
      image: undefined as unknown as string,
    },
  ];

  const features = [
    { icon: Cog, title: "Passages Souples", description: "Confort de conduite et réactivité" },
    { icon: Shield, title: "Protection Maximale", description: "Anti-usure, anti-oxydation, anti-mousse" },
    { icon: Droplets, title: "Stabilité Thermique", description: "Viscosité stable à haute température" },
    { icon: Award, title: "Homologations OEM", description: "Conformité ZF, MB, VW/Audi, JASO..." },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="relative bg-gradient-to-br from-[#02173C] to-[#02173C]/90 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519638399535-1b036603ac77?w=1600&q=80"
            alt="ATF & Boites Automatiques"
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
            <span className="text-[#BE941B] font-medium">Boîtes Automatiques / ATF</span>
          </nav>

          <div className="text-center">
            <div className="inline-flex items-center bg-[#BE941B]/20 border border-[#BE941B]/30 rounded-full px-8 py-3 mb-8">
              <Cog className="w-5 h-5 text-[#BE941B] mr-2" />
              <span className="text-[#BE941B] font-bold text-sm uppercase tracking-widest">ATF & PSF</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              <span className="block">Boîtes</span>
              <span className="block bg-gradient-to-r from-[#BE941B] to-white bg-clip-text text-transparent">Automatiques</span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-[#BE941B] via-white to-[#BE941B] mx-auto mb-8 rounded-full"></div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Fluides ATF/PSF synthétiques et spécifications constructeurs pour performances optimales.
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
              Gamme <span className="bg-gradient-to-r from-[#BE941B] to-[#02173C] bg-clip-text text-transparent">Boîtes Automatiques / ATF</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#BE941B] to-[#02173C] mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Sélection complète de fluides ATF, CVT, DCT/DSG, PSF et GPSF
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {products.map((p) => (
              <Link key={p.id} to={`/produits/boites-automatiques/${p.id}`} className="group cursor-pointer">
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
