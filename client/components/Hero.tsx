export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 z-0">
        {/* Primary background image */}
        <div className="absolute inset-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fe4359f63018e41f4b5c3ebff8141a6d7%2Fdc53f443d2e549199c3a3b7fe3f4fef0?format=webp&width=800"
            alt="Excellence automobile - Racing car performance"
            className="w-full h-full object-cover transform scale-105 animate-pulse duration-[8s]"
          />
          {/* Gradient overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#02173C]/85 via-[#02173C]/70 to-[#02173C]/50"></div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0">
          {/* Floating golden particles */}
          <div className="absolute top-1/4 left-1/6 w-3 h-3 bg-[#BE941B] rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-[#BE941B] rounded-full opacity-40 animate-bounce delay-300"></div>
          <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-[#BE941B] rounded-full opacity-80 animate-ping delay-700"></div>
          <div className="absolute top-2/3 left-1/4 w-2 h-2 bg-[#BE941B] rounded-full opacity-50 animate-pulse delay-1000"></div>

          {/* Geometric accent shapes */}
          <div className="absolute top-20 left-10 w-32 h-32 border border-[#BE941B]/20 rounded-full animate-spin duration-[20s]"></div>
          <div className="absolute bottom-20 left-20 w-20 h-20 bg-[#BE941B]/10 rounded-full blur-xl animate-pulse"></div>
        </div>
      </div>

      {/* Header with logo */}
      <div className="absolute top-0 left-0 right-0 z-30 pt-8 px-6 lg:px-12">
        <div className="container mx-auto">
          <div className="flex justify-start">
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 lg:px-12 pb-32 text-center">
          <div className="max-w-5xl mx-auto mt-11">
            
            {/* Premium Badge */}
            <div className="inline-flex items-center bg-[#BE941B]/20 backdrop-blur-sm border border-[#BE941B]/30 rounded-full px-8 py-3 mb-8 animate-fadeIn">
              <span className="text-[#BE941B] font-bold text-sm uppercase tracking-widest">Excellence Automobile</span>
            </div>

            {/* Main Heading - Center aligned */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-6 text-center animate-slideUp">
              <span className="block bg-gradient-to-r from-white to-[#BE941B] bg-clip-text text-transparent drop-shadow-2xl">
                Performance.
              </span>
              <span className="block bg-gradient-to-r from-[#BE941B] to-white bg-clip-text text-transparent drop-shadow-2xl">
                Innovation.
              </span>
              <span className="block bg-gradient-to-r from-white via-[#BE941B] to-white bg-clip-text text-transparent drop-shadow-2xl">
                Excellence.
              </span>
            </h1>

            {/* Decorative line */}
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#BE941B] to-transparent mb-8 mx-auto rounded-full animate-expandWidth"></div>

            {/* Subheading */}
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 leading-relaxed font-light text-center mb-12 max-w-4xl mx-auto animate-fadeIn delay-300">
              Notre vision pour l'industrie automobile de demain
              <br />
              <span className="text-[#BE941B] font-medium">Innovation, qualité et service d'excellence</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slideUp delay-500">
              <button className="group relative bg-[#BE941B] hover:bg-[#02173C] px-10 py-5 text-white transition-all duration-500 font-bold text-lg rounded-2xl shadow-2xl hover:shadow-[#BE941B]/50 transform hover:-translate-y-2 hover:scale-105 overflow-hidden">
                <span className="relative z-10 flex items-center justify-center">
                  Découvrir nos services
                  <svg className="ml-3 w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-[#02173C] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              </button>

              <button className="group border-3 border-white/60 hover:border-[#BE941B] px-10 py-5 text-white hover:text-[#BE941B] transition-all duration-500 font-semibold text-lg rounded-2xl backdrop-blur-sm hover:bg-white/20 transform hover:-translate-y-1 hover:scale-105">
                <span className="flex items-center justify-center">
                  Nous contacter
                  <svg className="ml-3 w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
              </button>
            </div>

            {/* Stats/Features Section */}
            <div className="mt-16 pt-8 border-t border-white/20 animate-fadeIn delay-700">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="group hover:scale-110 transition-all duration-300 cursor-pointer">
                  <div className="text-3xl md:text-4xl font-bold text-[#BE941B] mb-2 group-hover:text-white transition-colors duration-300">+15</div>
                  <div className="text-white/80 font-medium group-hover:text-white transition-colors duration-300">Années d'expérience</div>
                </div>
                <div className="group hover:scale-110 transition-all duration-300 cursor-pointer">
                  <div className="text-3xl md:text-4xl font-bold text-[#BE941B] mb-2 group-hover:text-white transition-colors duration-300">1000+</div>
                  <div className="text-white/80 font-medium group-hover:text-white transition-colors duration-300">Clients satisfaits</div>
                </div>
                <div className="group hover:scale-110 transition-all duration-300 cursor-pointer">
                  <div className="text-3xl md:text-4xl font-bold text-[#BE941B] mb-2 group-hover:text-white transition-colors duration-300">24/7</div>
                  <div className="text-white/80 font-medium group-hover:text-white transition-colors duration-300">Support technique</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center text-white/60 animate-bounce hover:text-[#BE941B] transition-colors duration-300 cursor-pointer">
          <span className="text-sm mb-2 font-medium">Découvrir plus</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes expandWidth {
          from { width: 0; }
          to { width: 8rem; }
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        
        .animate-slideUp {
          animation: slideUp 1.2s ease-out forwards;
        }
        
        .animate-expandWidth {
          animation: expandWidth 1.5s ease-out forwards;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
        }
        
        .delay-500 {
          animation-delay: 0.5s;
        }
        
        .delay-700 {
          animation-delay: 0.7s;
        }
      `}</style>
    </section>
  );
}
