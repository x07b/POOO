import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowRight, Trophy, Waves, Shield, Star, Zap, Award, Check, Ship } from "lucide-react";

export default function CompetitionLineMotosMoteurs() {
  const competitionProducts = [
    {
      id: "dinoil-formula-jet-ski-10w40",
      name: "DINOIL FORMULA JET SKI 10W/40",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fe98689421e434387bc8e35ec01be1ffb%2Ff980eebbbf4e48918d9952d0d19cdbb2?format=webp&width=800"
    },
    {
      id: "dinoil-formula-jet-ski-2t",
      name: "DINOIL FORMULA JET SKI 2T",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fe98689421e434387bc8e35ec01be1ffb%2F2703a245c6b94fcdba38452115d57e41?format=webp&width=800"
    },
    {
      id: "dinoil-formula-kart-2t",
      name: "DINOIL FORMULA KART 2T",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fe98689421e434387bc8e35ec01be1ffb%2Fd3038e7d50a9453fae1c0efcea3f8df0?format=webp&width=800"
    },
    {
      id: "dinoil-formula-mini-2t",
      name: "DINOIL FORMULA MINI 2T",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fe98689421e434387bc8e35ec01be1ffb%2F4551033487034832a83251eeb6a7c81f?format=webp&width=800"
    }
  ];

  const features = [
    {
      icon: Trophy,
      title: "Performance Extrême",
      description: "Conçu pour les conditions de compétition les plus exigeantes"
    },
    {
      icon: Waves,
      title: "Protection Marine",
      description: "Résistance à l'eau salée et aux conditions marines"
    },
    {
      icon: Zap,
      title: "Technologie Avancée",
      description: "Formules développées avec les dernières innovations"
    },
    {
      icon: Award,
      title: "Homologué Course",
      description: "Approuvé par les plus grandes équipes de course"
    }
  ];

  const benefits = [
    "Huiles 100% synthétiques haute performance",
    "Réduction des frottements internes",
    "Protection contre l'encrassement des bougies",
    "Excellente résistance aux hautes températures",
    "Propriétés auto-mélangeuses optimisées",
    "Faibles émissions de fumée et de cendres"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#02173C] to-[#02173C]/90 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80" 
            alt="Competition Line Motos et Moteurs Marins"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#02173C]/80 to-[#02173C]/60"></div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/6 w-3 h-3 bg-[#BE941B] rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-[#BE941B] rounded-full opacity-40 animate-bounce delay-300"></div>
          <div className="absolute bottom-1/3 right-1/2 w-1 h-1 bg-[#BE941B] rounded-full opacity-80 animate-ping delay-700"></div>
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
            <span className="text-gray-300">Competition Line</span>
            <ChevronRight size={16} className="text-gray-400" />
            <span className="text-[#BE941B] font-medium">Motos et Moteurs Marins</span>
          </nav>

          <div className="text-center">
            <div className="inline-flex items-center bg-[#BE941B]/20 border border-[#BE941B]/30 rounded-full px-8 py-3 mb-8">
              <Trophy className="w-5 h-5 text-[#BE941B] mr-2" />
              <span className="text-[#BE941B] font-bold text-sm uppercase tracking-widest">Competition Line</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              <span className="block">Motos et Moteurs</span>
              <span className="block bg-gradient-to-r from-[#BE941B] to-white bg-clip-text text-transparent">Marins</span>
            </h1>
            
            <div className="w-32 h-1 bg-gradient-to-r from-[#BE941B] via-white to-[#BE941B] mx-auto mb-8 rounded-full"></div>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Lubrifiants haute performance conçus pour motos et moteurs marins de compétition.
              <br />
              <span className="text-[#BE941B] font-medium">Excellence et fiabilité pour les conditions extrêmes.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Features Strip */}
      <section className="py-12 bg-gradient-to-r from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-[#BE941B]/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#BE941B]/20 transition-colors duration-300">
                    <IconComponent size={28} className="text-[#BE941B]" />
                  </div>
                  <h3 className="font-bold text-[#02173C] text-sm uppercase tracking-wide mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="pt-1 pb-20 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-6">
          {/* Dinoil Logo */}
          <div className="text-center mb-12">
            <img 
              src="https://cdn.builder.io/api/v1/image/assets%2Ff858c707aa6f488f835bf447c4e2be30%2Fb9814eb9a4974e549d1dc7fbe2c4d514?format=webp&width=800"
              alt="Dinoil Logo"
              className="mx-auto max-w-48 w-full h-auto mb-8"
            />
          </div>
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#02173C] mb-6">
              Gamme <span className="bg-gradient-to-r from-[#BE941B] to-[#02173C] bg-clip-text text-transparent">Competition Line</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#BE941B] to-[#02173C] mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Produits haute performance pour motos et moteurs marins de compétition
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {competitionProducts.map((product, index) => (
              <Link key={product.id} to={`/produits/competition-line/motos-moteurs-marins/${product.id}`} className="group cursor-pointer">
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border border-gray-100">
                  
                  {/* Product Image */}
                  <div className="aspect-square relative bg-white p-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#02173C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Product Info */}
                  <div className="p-6 text-center">
                    <h1 className="text-xl font-black text-[#02173C] group-hover:text-[#BE941B] transition-colors duration-300 uppercase tracking-wide">
                      {product.name}
                    </h1>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Back to Categories */}
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

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-[#02173C] to-[#02173C]/95">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            
            {/* Left - Benefits List */}
            <div className="text-white">
              <div className="inline-flex items-center bg-[#BE941B]/20 border border-[#BE941B]/30 rounded-full px-6 py-2 mb-8">
                <Trophy className="w-4 h-4 text-[#BE941B] mr-2" />
                <span className="text-[#BE941B] font-bold text-sm uppercase tracking-widest">Avantages Competition</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                Performance <span className="text-[#BE941B]">Extrême</span>
              </h2>
              
              <div className="w-24 h-1 bg-[#BE941B] mb-8 rounded-full"></div>
              
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-[#BE941B] rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <Check size={14} className="text-white" />
                    </div>
                    <span className="text-gray-300 leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <button className="group bg-[#BE941B] hover:bg-white px-8 py-4 text-white hover:text-[#02173C] transition-all duration-300 font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <span className="flex items-center">
                  Découvrir la Gamme
                  <ArrowRight size={20} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </div>

            {/* Right - Image */}
            <div className="relative">
              <div className="aspect-square relative overflow-hidden rounded-3xl">
                <img 
                  src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80"
                  alt="Competition Line Motos et Moteurs Marins" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#BE941B]/20 to-transparent"></div>
              </div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl border border-gray-100">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#BE941B]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Ship className="w-6 h-6 text-[#BE941B]" />
                  </div>
                  <p className="text-[#02173C] font-bold text-sm">Performance</p>
                  <p className="text-gray-600 text-xs">Niveau compétition</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
