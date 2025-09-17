export function About() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-promokar-gray-light relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/6 w-40 h-40 bg-promokar-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-56 h-56 bg-promokar-navy/5 rounded-full blur-3xl"></div>
      </div>

      {/* Decorative banner */}
      <div className="absolute top-20 left-0 bg-gradient-to-r from-promokar-gold to-promokar-primary text-white px-8 py-3 z-20 rounded-r-full shadow-lg">
        <span className="text-sm uppercase tracking-wider font-semibold">Notre Excellence</span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content - Values */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <h2 className="text-6xl md:text-7xl font-bold text-promokar-navy/20 mb-8 italic leading-tight">
                <span className="block relative">
                  QUALITÉ
                  <div className="absolute -top-2 -right-4 w-8 h-8 bg-promokar-gold/20 rounded-full"></div>
                </span>
                <span className="block relative">
                  INNOVATION
                  <div className="absolute top-1/2 -left-6 w-6 h-6 bg-promokar-primary/20 rounded-full"></div>
                </span>
                <span className="block relative">
                  EXPERTISE
                  <div className="absolute -bottom-2 right-1/3 w-4 h-4 bg-promokar-gold/30 rounded-full"></div>
                </span>
              </h2>

              <div className="w-24 h-1 bg-gradient-to-r from-promokar-gold to-promokar-primary mb-8 rounded-full"></div>

              {/* Value indicators */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-promokar-gold rounded-full"></div>
                  <span className="text-promokar-navy font-medium">15+ années d'expérience</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-promokar-primary rounded-full"></div>
                  <span className="text-promokar-navy font-medium">1000+ clients satisfaits</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-promokar-gold rounded-full"></div>
                  <span className="text-promokar-navy font-medium">Certification ISO 9001</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right content - Company info */}
          <div className="order-1 lg:order-2">
            <div className="bg-white p-10 shadow-2xl max-w-lg ml-auto rounded-2xl border border-gray-100 relative">
              {/* Decorative corner */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-promokar-gold to-promokar-primary rounded-full shadow-lg"></div>

              <div className="mb-8">
                <div className="inline-flex items-center bg-promokar-gold/10 border border-promokar-gold/20 rounded-full px-4 py-2 mb-4">
                  <span className="text-promokar-gold font-medium text-sm uppercase tracking-wider">À propos</span>
                </div>
                <h3 className="text-2xl font-bold text-promokar-navy mb-4">PROMOKAR</h3>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                <strong>PROMOKAR</strong> se positionne comme le leader de l'excellence automobile en Tunisie.
                Notre expertise couvre l'ensemble des services premium dédiés aux véhicules haut de gamme.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                Avec une approche innovante et des technologies de pointe, nous garantissons
                des solutions sur mesure qui répondent aux exigences les plus élevées de notre clientèle.
              </p>

              <button className="group relative bg-promokar-gold hover:bg-promokar-primary px-8 py-4 text-white transition-all duration-300 font-semibold uppercase tracking-wide rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 overflow-hidden">
                <span className="relative z-10">Notre Histoire</span>
                <div className="absolute inset-0 bg-promokar-primary transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Modern facility showcase */}
        <div className="mt-20">
          <div className="max-w-6xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1200&q=80"
                alt="PROMOKAR Modern Facility"
                className="w-full h-80 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-promokar-navy/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <h4 className="text-white text-2xl md:text-3xl font-bold mb-2">
                  Installations Modernes
                </h4>
                <p className="text-white/90 text-lg">
                  Des équipements de dernière génération pour une qualité de service exceptionnelle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
