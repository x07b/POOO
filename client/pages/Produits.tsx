import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import { Trophy, Car, Bike, Ship, Factory, Truck, Cog, Droplets, Wrench, Award, Clock, Shield, ArrowRight, MapPin } from "lucide-react";

export default function Produits() {
  // Flattened categories with combined titles
  const allProductCategories = [
    // Competition Line categories
    {
      title: "COMPETITION LINE VEHICULES",
      path: "/produits/competition-line/vehicules",
      image: "https://cdn.builder.io/api/v1/image/assets%2F367800b539f442f7b8aca37c33d3b377%2Fa80bb1fca4824fe2ad0500930d9067c7?format=webp&width=800"
    },
    {
      title: "COMPETITION LINE MOTO",
      path: "/produits/competition-line/moto",
      image: "https://cdn.builder.io/api/v1/image/assets%2F367800b539f442f7b8aca37c33d3b377%2F14c8e414d1ae4d71a923a62a5dc509e0?format=webp&width=800"
    },
    {
      title: "COMPETITION LINE MOTOS MOTEURS MARINS",
      path: "/produits/competition-line/motos-moteurs-marins",
      image: "https://cdn.builder.io/api/v1/image/assets%2F367800b539f442f7b8aca37c33d3b377%2Fe877adfd762b4eb485870422b7a54361?format=webp&width=800"
    },
    // Professional Line categories
    {
      title: "PROFESSIONAL LINE VEHICULES",
      path: "/produits/professional-line/vehicules",
      image: "https://cdn.builder.io/api/v1/image/assets%2F367800b539f442f7b8aca37c33d3b377%2Fb01b681442d64d56ac8f45d4fed9f961?format=webp&width=800"
    },
    // Premium Line categories
    {
      title: "PREMIUM LINE VEHICULES",
      path: "/produits/premium-line/vehicules",
      image: "https://cdn.builder.io/api/v1/image/assets%2F367800b539f442f7b8aca37c33d3b377%2Fa569c72f0b1a4b1289375199ec078d53?format=webp&width=800"
    },
    // Multigrade Line categories
    {
      title: "MULTIGRADE LINE VEHICULES",
      path: "/produits/multigrade-line/vehicules",
      image: "https://cdn.builder.io/api/v1/image/assets%2F367800b539f442f7b8aca37c33d3b377%2Fdfdd48596d8e4517acb1cf22439b2fa9?format=webp&width=800"
    },
    // Standalone categories
    {
      title: "POIDS LOURDS",
      path: "/produits/poids-lourds",
      image: "https://images.pexels.com/photos/7019371/pexels-photo-7019371.jpeg"
    },
    {
      title: "MOTO AND SEA ENGINES",
      path: "/produits/moto-sea-engines",
      image: "https://images.pexels.com/photos/30519983/pexels-photo-30519983.jpeg"
    },
    {
      title: "LUBRIFIANTS INDUSTRIELS",
      path: "/produits/lubrifiants-industriels",
      image: "https://images.pexels.com/photos/1145434/pexels-photo-1145434.jpeg"
    },
    {
      title: "MACHINES AGRICOLES",
      path: "/produits/machines-agricoles",
      image: "https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg"
    },
    {
      title: "BOITES AUTOMATIQUES",
      path: "/produits/boites-automatiques",
      image: "https://images.pexels.com/photos/2986849/pexels-photo-2986849.jpeg"
    },
    {
      title: "BOITE MANUELLE",
      path: "/produits/boite-manuelle",
      image: "https://images.pexels.com/photos/2986849/pexels-photo-2986849.jpeg"
    },
    {
      title: "ANTIGEL",
      path: "/produits/antigel",
      image: "https://images.pexels.com/photos/20710361/pexels-photo-20710361.jpeg"
    },
    {
      title: "GRAISSE",
      path: "/produits/graisse",
      image: "https://images.pexels.com/photos/4116171/pexels-photo-4116171.jpeg"
    }
  ];

  const features = [
    {
      icon: Award,
      title: "Qualité Certifiée",
      description: "Conformité aux standards internationaux"
    },
    {
      icon: Clock,
      title: "Livraison Rapide",
      description: "Service 24/48h dans toute la Tunisie"
    },
    {
      icon: Shield,
      title: "Garantie Étendue",
      description: "Protection complète sur tous nos produits"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#02173C] to-[#02173C]/90 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F367800b539f442f7b8aca37c33d3b377%2Fb23e6bb4032d42ad9db522a9fdba0376?format=webp&width=800"
            alt="PROMOKAR Products"
            className="w-full h-full object-cover opacity-40"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F367800b539f442f7b8aca37c33d3b377%2F3e96a82ce7ae40d3868530314569e47b?format=webp&width=800"
            alt="Carbon Fiber Texture"
            className="absolute inset-0 w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#02173C]/70 to-[#02173C]/50"></div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/6 w-3 h-3 bg-[#BE941B] rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-[#BE941B] rounded-full opacity-40 animate-bounce delay-300"></div>
          <div className="absolute bottom-1/3 right-1/2 w-1 h-1 bg-[#BE941B] rounded-full opacity-80 animate-ping delay-700"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="inline-flex items-center bg-[#BE941B]/20 border border-[#BE941B]/30 rounded-full px-8 py-3 mb-8">
            <Droplets className="w-5 h-5 text-[#BE941B] mr-2" />
            <span className="text-[#BE941B] font-bold text-sm uppercase tracking-widest">Notre Gamme</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="block">Catalogue</span>
            <span className="block bg-gradient-to-r from-[#BE941B] to-white bg-clip-text text-transparent">PROMOKAR</span>
          </h1>
          
          <div className="w-32 h-1 bg-gradient-to-r from-[#BE941B] via-white to-[#BE941B] mx-auto mb-8 rounded-full"></div>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Découvrez notre gamme complète de lubrifiants et additifs haute performance. 
            <br />
            <span className="text-[#BE941B] font-medium">Plus de 260 produits disponibles en Tunisie.</span>
          </p>
        </div>
      </section>

      {/* Features Strip */}
      <section className="py-12 bg-gradient-to-r from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="flex items-center justify-center text-center group">
                  <div className="w-12 h-12 bg-[#BE941B]/10 rounded-xl flex items-center justify-center mr-4 group-hover:bg-[#BE941B]/20 transition-colors duration-300">
                    <IconComponent size={24} className="text-[#BE941B]" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-[#02173C] text-sm uppercase tracking-wide">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DINOIL Partnership Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center py-8 md:py-12">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fe4359f63018e41f4b5c3ebff8141a6d7%2F5b442674599842ab9becc82c75c06756?format=webp&width=800"
              alt="DINOIL - Notre fournisseur de confiance"
              className="h-24 md:h-32 lg:h-40 xl:h-48 mx-auto object-contain mb-6"
            />
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              PROMOKAR s'associe avec <span className="font-bold text-[#BE941B]">DINOIL</span>, notre fournisseur de confiance,
              pour vous offrir une gamme complète de lubrifiants haute performance.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-16 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-[#02173C] mb-6">
              Catalogue <span className="bg-gradient-to-r from-[#BE941B] to-[#02173C] bg-clip-text text-transparent">Dinoil en Tunisie</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#BE941B] to-[#02173C] mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explorez notre large gamme de produits spécialisés pour chaque domaine d'application
            </p>
          </div>

          {/* Single Unified Grid 4x4 */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allProductCategories.map((category, index) => (
                <Link key={index} to={category.path} className="group cursor-pointer">
                  <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 overflow-hidden border border-gray-100">
                    {/* Full Image */}
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    {/* Title */}
                    <div className="p-6 text-center">
                      <h3 className="text-lg font-black text-[#02173C] group-hover:text-[#BE941B] transition-colors duration-300 uppercase tracking-wide leading-tight">
                        {category.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Find Dealer Section */}
      <section className="pt-14 pb-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#02173C] mb-6">
              Réseau de <span className="bg-gradient-to-r from-[#BE941B] to-[#02173C] bg-clip-text text-transparent">Distribution</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#BE941B] to-[#02173C] mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Plus de 115 points de vente dans toute la Tunisie
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            
            {/* Left - Map */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#02173C] to-[#02173C]/90 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#BE941B]/10 rounded-full blur-2xl"></div>
                
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center bg-[#BE941B]/20 border border-[#BE941B]/30 rounded-full px-6 py-2 mb-4">
                      <MapPin className="w-4 h-4 text-[#BE941B] mr-2" />
                      <span className="text-[#BE941B] font-bold text-sm uppercase tracking-widest">21 Gouvernorats</span>
                    </div>
                    <h3 className="text-2xl font-black mb-2">
                      Réseau PROMOKAR
                    </h3>
                    <p className="text-gray-300">
                      Présent dans toute la Tunisie
                    </p>
                  </div>
                  
                  {/* Tunisia Map Placeholder */}
                  <div className="aspect-square bg-[#BE941B]/10 rounded-2xl flex items-center justify-center border border-[#BE941B]/20 backdrop-blur-sm">
                    <div className="text-center">
                      <MapPin className="w-20 h-20 text-[#BE941B] mx-auto mb-4" />
                      <p className="text-white font-medium">Carte Interactive</p>
                      <p className="text-gray-300 text-sm">115+ Points de Vente</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-black text-[#02173C] mb-4">
                  Trouvez Votre Revendeur
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Notre réseau de distribution couvre l'ensemble du territoire tunisien avec 
                  des revendeurs qualifiés dans 21 gouvernorats.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-600">
                {[
                  "Ariana", "Ben Arous", "Béja", "Bizerte", "Gabès", "Gafsa",
                  "Kairouan", "Kasserine", "Le Kef", "La Manouba", "Mahdia", "Médenine",
                  "Monastir", "Nabeul", "Sidi Bouzid", "Siliana", "Sfax", "Sousse",
                  "Tataouine", "Tunis", "Zaghouan"
                ].map((city, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-[#BE941B] rounded-full mr-2"></div>
                    <span>{city}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-gradient-to-br from-[#BE941B]/5 to-[#02173C]/5 rounded-2xl p-6 border border-[#BE941B]/20">
                <h4 className="font-bold text-[#02173C] mb-2">Services Disponibles</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <ArrowRight size={16} className="text-[#BE941B] mr-2" />
                    Conseil et orientation technique
                  </li>
                  <li className="flex items-center">
                    <ArrowRight size={16} className="text-[#BE941B] mr-2" />
                    Gamme complète PROMOKAR
                  </li>
                  <li className="flex items-center">
                    <ArrowRight size={16} className="text-[#BE941B] mr-2" />
                    Support après-vente
                  </li>
                </ul>
              </div>
              
              <button className="group bg-[#BE941B] hover:bg-[#02173C] px-8 py-4 text-white transition-all duration-300 font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <span className="flex items-center">
                  Localiser un Revendeur
                  <MapPin size={20} className="ml-2 transform group-hover:scale-110 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
