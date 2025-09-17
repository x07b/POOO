import { Droplets, Shield, Zap, Truck, Clock, Award, CheckCircle, TrendingUp } from "lucide-react";

export function Services() {
  const oilProducts = [
    {
      icon: Droplets,
      title: "HUILES MOTEUR",
      subtitle: "HAUTE PERFORMANCE",
      description: "Lubrifiants synthétiques et minéraux pour tous types de moteurs",
      benefits: ["Protection maximale", "Longue durée de vie", "Performance optimisée"],
      color: "text-[#BE941B]",
      bgGradient: "from-[#BE941B]/10 to-[#02173C]/5"
    },
    {
      icon: Shield,
      title: "ADDITIFS",
      subtitle: "PROTECTION AVANCÉE",
      description: "Solutions spécialisées pour l'entretien et la protection",
      benefits: ["Anti-corrosion", "Nettoyage moteur", "Stabilité thermique"],
      color: "text-[#02173C]",
      bgGradient: "from-[#02173C]/10 to-[#BE941B]/5"
    },
    {
      icon: Zap,
      title: "LUBRIFIANTS",
      subtitle: "HAUTE TECHNOLOGIE",
      description: "Gamme complète pour transmission et hydraulique",
      benefits: ["Réduction friction", "Efficacité énergétique", "Durabilité"],
      color: "text-[#BE941B]",
      bgGradient: "from-[#BE941B]/10 to-[#02173C]/5"
    }
  ];

  const advantages = [
    {
      icon: Award,
      title: "QUALITÉ CERTIFIÉE",
      description: "Conformité aux standards internationaux API, ACEA",
      metric: "ISO 9001"
    },
    {
      icon: Truck,
      title: "LIVRAISON RAPIDE",
      description: "Réseau logistique national pour approvisionnement continu",
      metric: "24/48H"
    },
    {
      icon: Clock,
      title: "SUPPORT TECHNIQUE",
      description: "Assistance spécialisée et conseils d'experts",
      metric: "24/7"
    },
    {
      icon: TrendingUp,
      title: "ÉCONOMIES PROUVÉES",
      description: "Réduction des coûts de maintenance jusqu'à",
      metric: "30%"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-[#BE941B]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-[#02173C]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/6 w-24 h-24 bg-[#BE941B]/3 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center bg-[#BE941B]/10 border border-[#BE941B]/20 rounded-full px-8 py-3 mb-8">
            <Droplets className="w-5 h-5 text-[#BE941B] mr-2" />
            <span className="text-[#BE941B] font-bold text-sm uppercase tracking-widest">Nos Produits</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-[#02173C] mb-6 leading-tight">
            Solutions <span className="bg-gradient-to-r from-[#BE941B] to-[#02173C] bg-clip-text text-transparent">Lubrifiantes</span> Professionnelles
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#BE941B] via-[#02173C] to-[#BE941B] mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 leading-relaxed">
            Découvrez notre gamme complète d'huiles et lubrifiants haute performance, 
            conçus pour maximiser la durée de vie et l'efficacité de vos équipements.
          </p>
        </div>

        {/* Oil Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {oilProducts.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <div key={index} className="group relative">
                <div className={`bg-gradient-to-br ${product.bgGradient} rounded-3xl px-8 py-8 pb-[31px] shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/20 hover:border-[#BE941B]/30 transform hover:-translate-y-3 hover:scale-105 backdrop-blur-sm`}>
                  
                  {/* Icon */}
                  <div className="mb-6 flex justify-center">
                    <div className="w-24 h-24 bg-white/80 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                      <IconComponent size={40} className={product.color} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-2xl font-black text-[#02173C] mb-2 uppercase tracking-wide">
                      {product.title}
                    </h3>
                    <p className="text-[#BE941B] font-bold text-sm uppercase tracking-widest mb-4">
                      {product.subtitle}
                    </p>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Benefits */}
                    <div className="space-y-2">
                      {product.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center justify-center text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-[#BE941B] mr-2 flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hover accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#BE941B] to-[#02173C] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-3xl"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Advantages Section */}
        <div className="bg-gradient-to-r from-[#02173C] to-[#02173C]/90 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#BE941B]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#BE941B]/5 rounded-full blur-2xl"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-black mb-4">
                Pourquoi Choisir <span className="text-[#BE941B]">PROMOKAR</span> ?
              </h3>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Notre expertise et notre engagement qualité font la différence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {advantages.map((advantage, index) => {
                const IconComponent = advantage.icon;
                return (
                  <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                    <div className="w-20 h-20 bg-[#BE941B]/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#BE941B]/30 transition-colors duration-300">
                      <IconComponent size={32} className="text-[#BE941B]" />
                    </div>
                    <div className="text-3xl font-black text-[#BE941B] mb-2">{advantage.metric}</div>
                    <h4 className="text-lg font-bold mb-2 uppercase tracking-wide">{advantage.title}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{advantage.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative bg-[#BE941B] hover:bg-[#02173C] px-12 py-5 text-white transition-all duration-500 font-bold text-lg rounded-2xl shadow-2xl hover:shadow-[#BE941B]/50 transform hover:-translate-y-2 overflow-hidden">
              <span className="relative z-10 flex items-center justify-center">
                Demander un Devis
                <svg className="ml-3 w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-[#02173C] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </button>

            <button className="group border-3 border-[#02173C] hover:border-[#BE941B] px-12 py-5 text-[#02173C] hover:text-[#BE941B] transition-all duration-500 font-semibold text-lg rounded-2xl hover:bg-[#BE941B]/5 transform hover:-translate-y-1">
              <span className="flex items-center justify-center">
                Catalogue Produits
                <svg className="ml-3 w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
