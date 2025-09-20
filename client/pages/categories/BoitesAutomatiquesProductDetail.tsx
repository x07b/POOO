import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Link, useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight, Cog, Star, Check, Package, FileText } from "lucide-react";

export default function BoitesAutomatiquesProductDetail() {
  const { productId } = useParams();

  const products = {
    "atf-5-4-hp-zf": {
      name: "DINOIL ATF 5/4 HP FLUID - ZF",
      code: "4067",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fe98689421e434387bc8e35ec01be1ffb%2F90b90a9a73504c2f8f0b2da7febfe3e3?format=webp&width=800",
      description:
        "Synthetic ATF formulated with PAO and hydrocracked bases with special additives. Suitable for ZF 4HP and 5HP transmissions (4HP20/22/24, 5HP18/19/24/30). Provides maximum protection and perfect transmission function.",
      specifications: [
        "BMW ATF LT 71141",
        "ATF LA 2634",
        "VW/Audi G 052162 A1/A2/A6 (VW TL 52 162)",
        "Mercedes A 0019892203",
        "ZF Lifeguard 4/5",
        "Porsche 999.917.547.00",
        "Jaguar JLM 20237",
        "Citroën/Peugeot AL4 PR 9736.22",
        "Land Rover STC4863",
        "Renault DP0",
        "Alfa Romeo 20HP 14891900",
      ],
      packages: ["1L", "20L", "200L"],
      features: [
        "Excellent shear stability",
        "Smooth shifting and anti-shudder",
        "High oxidation resistance",
        "Outstanding wear protection",
      ],
    },
    "atf-6hp-zf": {
      name: "DINOIL ATF 6HP FLUID - ZF 6HP",
      code: "4045",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fe98689421e434387bc8e35ec01be1ffb%2F5d0c05ac74154f2da8d5ab1d361e80a2?format=webp&width=800",
      description:
        "Synthetic ATF with PAO and hydrocracked bases for modern ZF 6HP transmissions (6HP19/21/26/28/32/34). Backward compatible with earlier ZF 4- and 5-speed transmissions. Not for DCT/DSG or CVT units.",
      specifications: [
        "BMW ATF M1375.4",
        "Ford Mercon SP XT-6-QSP",
        "Jaguar C2C 8432",
        "Land Rover TYK 500050",
        "VW/Audi G 055005 A1/A2/A6",
        "ZF Lifeguard 6",
        "Maserati 231603",
        "Hyundai 040000C90SG",
        "Toyota WS",
      ],
      packages: ["1L", "20L", "200L"],
      features: [
        "Optimized for 6-speed ZF automatics",
        "High temperature stability",
        "Excellent anti-wear protection",
        "Smooth shifting performance",
      ],
    },
    "atf-8hp-fluid": {
      name: "DINOIL ATF 8HP FLUID - AUDI/BMW/VW/LAND ROVER",
      code: "4043",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fe98689421e434387bc8e35ec01be1ffb%2F3a7369df9db347849276daccfe78dd16?format=webp&width=800",
      description:
        "Full automatic transmission fluid formulated with PAO and hydrocracked bases. Suitable for latest ZF 8HP transmissions (8HP45/55/70/90). Backward compatible for earlier 6HP series.",
      specifications: [
        "BMW 83222305397 / ATF L 12108 / BMW GA6L45R",
        "VW/Audi G 060162 A1/A2/A6 (ZF Lifeguard 8)",
        "Land Rover LR023288/LR023289",
        "Chrysler 68157995AA",
        "Jaguar 02 J DE 26444",
      ],
      packages: ["1L", "20L", "200L"],
      features: [
        "For ZF 8HP gearboxes",
        "Low-temperature flow and fast shifting",
        "Excellent oxidation control",
        "Long drain performance",
      ],
    },
    "atf-plus-4-chrysler": {
      name: "DINOIL ATF +4 CHRYSLER JEEP DODGE",
      code: "4050",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fe98689421e434387bc8e35ec01be1ffb%2Ff9e1cc6c11944969b5ccd10f727fccd9?format=webp&width=800",
      description:
        "Synthetic ATF formulated with PAO and hydrocracked bases to meet Chrysler transmissions and transaxles requirements. Suitable as hydraulic fluid for all Daimler-Chrysler, Jeep and Dodge automatics.",
      specifications: ["ATF+4 / Chrysler +3/+4 / Dodge / Jeep"],
      packages: ["1L", "20L", "200L"],
      features: [
        "Maximum wear protection",
        "Excellent friction durability",
        "Smooth operation in all conditions",
      ],
    },
    "atf-mb-9-serie": {
      name: "DINOIL ATF MERCEDES BENZ 9-SERIE",
      code: "4081",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fe98689421e434387bc8e35ec01be1ffb%2Ff179087f043945b2ac728acd78780af4?format=webp&width=800",
      description:
        "Synthetic ATF with PAO/hydrocracked bases for the latest 7-motion Mercedes-Benz automatics. Suitable for NAG2V Sport and 7G-Tronic (also for 5-gear transmissions). Not for CVT systems.",
      specifications: ["MB 236.14", "MB 236.12", "MB 236.10"],
      packages: ["1L", "20L", "200L"],
      features: [
        "OEM Mercedes approvals",
        "Fast gear engagement",
        "Outstanding cleanliness and oxidation control",
      ],
    },
    "atf-cvt": {
      name: "DINOIL ATF CVT MITSUBISHI/NISSAN/HONDA/TOYOTA",
      code: "4098",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fe98689421e434387bc8e35ec01be1ffb%2F4d09635d969846a7bd33df1683ff7ac5?format=webp&width=800",
      description:
        "Special fully-synthetic CVT fluid using PAO and advanced additive technology. Reduces metal-on-metal friction between belts and pulleys ensuring stable viscosity under high stress.",
      specifications: [
        "BMW CVT EZL 799A",
        "Ford CVT 23/30",
        "MB 236.2",
        "Honda CVT",
        "Mazda TFF CVT",
        "Nissan NS-1/NS-2/NS-3",
        "Opel/GM DEX CVT",
        "Subaru i-CVT",
        "Suzuki S-CVT",
        "Toyota CVT",
        "Mini Cooper CVT",
        "VW/Audi G052180 A1/A2/A6 (TL 52180)",
      ],
      packages: ["1L", "20L", "200L"],
      features: [
        "Anti-shudder performance",
        "Excellent belt/pulley protection",
        "Wide OEM coverage",
      ],
    },
    "atf-sp-iii-asiatic": {
      name: "DINOIL ATF SP III ASIATIC CARS",
      code: "4104",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fe98689421e434387bc8e35ec01be1ffb%2Fdc4cd95dc84848d3b358dd45a8a1fa05?format=webp&width=800",
      description:
        "Premium synthetic ATF with PAO/hydrocracked bases to meet latest Asian OEM requirements. Suitable for many Japanese and Korean vehicles requiring SP II / SP III or ATF Dexron II/III.",
      specifications: [
        "Mitsubishi SP II / SP III",
        "Toyota T-III / T-IV / WS",
        "Honda ATF Z1",
        "Nissan Matic D / J",
        "Hyundai & KIA PSF-3",
        "Subaru Special ATF JASO M315 1A",
        "MB 363.3",
      ],
      packages: ["1L", "20L", "200L"],
      features: [
        "Optimized for Asian OEMs",
        "Excellent low-temperature fluidity",
        "Stable friction characteristics",
      ],
    },
    "dct-dsg": {
      name: "DINOIL DCT/DSG VW/AUDI/BMW/FORD/CHRYSLER",
      code: "4111",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fe98689421e434387bc8e35ec01be1ffb%2Fb165cc98625b44eda6a01e714c5fb75f?format=webp&width=800",
      description:
        "Synthetic fluid formulated with high quality bases and advanced additives for wet and dry dual clutch transmissions (DCT/DSG). Specifically developed for VW/Audi DSG gearboxes.",
      specifications: [
        "VAG G 052 178/182/529",
        "BMW DCTF-1",
        "MB 236.21/236.25",
        "PSA 9734 S2",
        "Ford WSS-M2C-936A / WSS-M2C-200-D2",
        "Fiat 9.55550-MZ6",
        "Mitsubishi MZ320065",
        "Volvo 1161838/1161839",
        "BOT 341",
      ],
      packages: ["1L", "20L", "200L"],
      features: [
        "Extreme pressure protection",
        "Compatible with wet and dry DCTs",
        "Stable friction for quick shifts",
      ],
    },
    "gpsf-green-power": {
      name: "DINOIL PROFESSIONAL GPSF GREEN POWER STEERING",
      code: "4128",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fe98689421e434387bc8e35ec01be1ffb%2Feed151bf33d04f2a85675131270a12fc?format=webp&width=800",
      description:
        "Specific synthetic hydraulic fluid for suspension and power steering systems, fulfilling VW TL 521 46 specification. Suitable for VAG group vehicles (VW, Audi, Seat, Skoda).",
      specifications: [
        "ISO 7308",
        "DIN 51524 Part 2",
        "MB 343.0/345.0",
        "VW 521-46",
        "Audi / Seat / Skoda",
        "Jaguar / Porsche",
        "Saab / Volvo 1273.36",
      ],
      packages: ["1L", "20L", "200L"],
      features: [
        "All-season universal PSF",
        "Anti-wear and anti-corrosion",
        "Wide temperature operating range",
      ],
    },
    "psf-hydraulic": {
      name: "DINOIL PROFESSIONAL PSF HYDRAULIC",
      code: "4135",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fe98689421e434387bc8e35ec01be1ffb%2F65e72980517f4515ad12c36fce3b6858?format=webp&width=800",
      description:
        "Specific synthetic hydraulic fluid formulated with high quality bases and special additives for universal all-season power steering systems (PSF).",
      specifications: [
        "Honda PSF / Toyota PSF EH",
        "KIA PSF-III / Hyundai PSF-3",
        "Nissan PSF II / Subaru PSF",
        "Mazda PSF / PSA Fluid 9735 EJ",
        "Land Rover LRN 2261",
      ],
      packages: ["1L", "20L", "200L"],
      features: [
        "Smooth steering operation",
        "Wide OEM coverage",
        "High oxidation stability",
      ],
    },
    "atf-dex-ii-d": {
      name: "DINOIL PREMIUM ATF DEX II D",
      code: "3170",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fe98689421e434387bc8e35ec01be1ffb%2F34a2418c54f34af88bc5b4336c6ecac4?format=webp&width=800",
      description:
        "ATF DEX II developed for automatic transmissions and power steering of passenger cars and light trucks operating under severe conditions or wherever DEXRON II is required.",
      specifications: [
        "GM DEXRON IID",
        "MB 236.1",
        "ZF TE-ML 09",
        "MAN 339D",
        "VOLVO 97335",
        "Caterpillar TO-2",
        "Allison C3/C4",
      ],
      packages: ["1L", "20L", "200L"],
      features: [
        "Smooth, silent engagement",
        "Excellent anti-wear protection",
        "Reliable operation in severe service",
      ],
    },
    "atf-dex-iii": {
      name: "DINOIL PREMIUM ATF DEX III",
      code: "1639",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fe98689421e434387bc8e35ec01be1ffb%2Fc1edce5970c947468de6c37d03915e88?format=webp&width=800",
      description:
        "High performance ATF meeting GM DEXRON III for a wide range of automatic transmissions and power steering systems.",
      specifications: [
        "GM DEXRON III",
        "MB 236.1/236.5",
        "ZF TE-ML 02F/04D/09/11B/14A/17C",
        "CAT TO-2",
        "ALLISON C-4",
        "MAN 339Z",
      ],
      packages: ["1L", "20L", "200L"],
      features: [
        "Oxidation-resistant for long life",
        "Excellent friction durability",
        "Broad OEM compatibility",
      ],
    },
    "multigrade-type-a": {
      name: "DINOIL MULTIGRADE ATF TYPE A",
      code: "2032",
      image: undefined as unknown as string,
      description:
        "High quality transmission fluid for manual and automatic gearboxes where GM Type A Suffix A is required. Recommended for automatic/manual transmissions and power steering systems.",
      specifications: [
        "GM ATF TYPE A, Suffix A",
        "GLVII ALLISON C-3",
        "Caterpillar TO-2",
      ],
      packages: ["1L", "20L", "200L"],
      features: [
        "Strong oxidation resistance",
        "Good anti-wear properties",
        "Reliable performance at high temperatures",
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
              to="/produits/boites-automatiques"
              className="inline-flex items-center bg-[#BE941B] text-white px-6 py-3 rounded-xl hover:bg-[#02173C] transition-colors"
            >
              <ChevronLeft size={20} className="mr-2" />
              Retour à Boîtes Automatiques
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <SEO title={product.name} description={product.description} image={product.image} type="product" keywords={["ATF","boite automatique","dct","cvt","psf","dinoil","promokar","tunisie"]} jsonLd={{"@context":"https://schema.org","@type":"Product",name: product.name,image: product.image ? [product.image] : undefined,description: product.description,sku: product.code,brand: {"@type":"Brand", name:"DINOIL"}}} />
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
            <Link to="/produits/boites-automatiques" className="text-gray-300 hover:text-white transition-colors">Boîtes Automatiques</Link>
            <ChevronRight size={16} className="text-gray-400" />
            <span className="text-[#BE941B] font-medium">{product.name}</span>
          </nav>

          <div className="text-center">
            <div className="inline-flex items-center bg-[#BE941B]/20 border border-[#BE941B]/30 rounded-full px-8 py-3 mb-8">
              <Cog className="w-5 h-5 text-[#BE941B] mr-2" />
              <span className="text-[#BE941B] font-bold text-sm uppercase tracking-widest">ATF / PSF</span>
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
              to="/produits/boites-automatiques"
              className="group inline-flex items-center bg-white hover:bg-[#02173C] border-2 border-[#02173C] text-[#02173C] hover:text-white px-8 py-4 rounded-2xl transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <ChevronLeft size={20} className="mr-2 transform group-hover:-translate-x-1 transition-transform duration-300" />
              <span>Retour à la Gamme ATF</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
