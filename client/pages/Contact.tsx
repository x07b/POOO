import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { MapPin, Phone, Mail, ChevronRight, Send, User, Clock } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#02173C] to-[#02173C]/90 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80" 
            alt="PROMOKAR Contact"
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
            <a href="/" className="text-gray-300 hover:text-[#BE941B] transition-colors">
              Accueil
            </a>
            <ChevronRight size={16} className="text-gray-400" />
            <span className="text-[#BE941B] font-medium">Contact</span>
          </nav>

          <div className="inline-flex items-center bg-[#BE941B]/20 border border-[#BE941B]/30 rounded-full px-8 py-3 mb-8">
            <Mail className="w-5 h-5 text-[#BE941B] mr-2" />
            <span className="text-[#BE941B] font-bold text-sm uppercase tracking-widest">Contact PROMOKAR</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="block">Contactez</span>
            <span className="block bg-gradient-to-r from-[#BE941B] to-white bg-clip-text text-transparent">-Nous</span>
          </h1>
          
          <div className="w-32 h-1 bg-gradient-to-r from-[#BE941B] via-white to-[#BE941B] mb-8 rounded-full"></div>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl leading-relaxed">
            Votre partenaire de confiance en lubrifiants et produits automobiles.
            L'équipe PROMOKAR est à votre disposition pour tous vos besoins.
            <br />
            <span className="text-[#BE941B] font-medium">Contactez-nous dès aujourd'hui.</span>
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-[#BE941B]/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-[#02173C]/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-1/6 w-24 h-24 bg-[#BE941B]/3 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <div className="space-y-12">
              {/* PROMOKAR Info */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg border border-gray-200">
                <div className="inline-flex items-center bg-[#BE941B]/10 border border-[#BE941B]/20 rounded-full px-6 py-2 mb-6">
                  <User className="w-4 h-4 text-[#BE941B] mr-2" />
                  <span className="text-[#BE941B] font-bold text-sm uppercase tracking-widest">Coordonnées</span>
                </div>
                
                <h2 className="text-3xl font-black text-[#02173C] mb-6">PROMOKAR Tunisie</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="text-[#BE941B] mt-1 flex-shrink-0" size={24} />
                    <div>
                      <p className="font-bold text-[#02173C] text-lg">Siège Social :</p>
                      <p className="text-gray-600 leading-relaxed">Zone Industrielle Mghira 2, 2082 Fouchana, Tunisie</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Phone className="text-[#BE941B] mt-1 flex-shrink-0" size={24} />
                    <div>
                      <p className="font-bold text-[#02173C] text-lg">Téléphone :</p>
                      <a href="tel:+21631342200" className="text-[#BE941B] font-bold text-xl hover:underline transition-colors">
                        (+216) 31 342 200
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="text-[#BE941B] mt-1 flex-shrink-0" size={24} />
                    <div>
                      <p className="font-bold text-[#02173C] text-lg">Email :</p>
                      <a href="mailto:contact@promokar.tn" className="text-[#BE941B] font-bold text-xl hover:underline transition-colors">
                        contact@promokar.tn
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="text-[#BE941B] mt-1 flex-shrink-0" size={24} />
                    <div>
                      <p className="font-bold text-[#02173C] text-lg">Horaires :</p>
                      <div className="text-gray-600">
                        <p>Lundi - Vendredi : 8h00 - 18h00</p>
                        <p>Samedi : 8h00 - 13h00</p>
                        <p>Dimanche : Fermé</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Network Information */}
              <div className="bg-gradient-to-br from-[#02173C] to-[#02173C]/95 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-black mb-4">Réseau de Distribution</h3>
                <p className="text-gray-300 mb-6">Plus de 115 points de vente PROMOKAR dans toute la Tunisie</p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#BE941B] rounded-full flex items-center justify-center">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="font-bold">21 Gouvernorats</p>
                    <p className="text-sm text-gray-300">Couverture nationale</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-[#02173C] to-[#02173C]/95 rounded-3xl p-8 text-white shadow-2xl">
              <div className="inline-flex items-center bg-[#BE941B]/20 border border-[#BE941B]/30 rounded-full px-6 py-2 mb-6">
                <Send className="w-4 h-4 text-[#BE941B] mr-2" />
                <span className="text-[#BE941B] font-bold text-sm uppercase tracking-widest">Formulaire</span>
              </div>
              
              <h2 className="text-3xl font-black mb-8">Envoyez-nous un Message</h2>
              
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-[#BE941B] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Message envoyé avec succès!</h3>
                  <p className="text-gray-300 mb-6">Nous vous répondrons dans les plus brefs délais.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-[#BE941B] hover:bg-white text-white hover:text-[#02173C] px-6 py-3 rounded-2xl transition-all duration-300 font-bold uppercase tracking-wide"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold mb-3 uppercase tracking-wide">
                      Nom & Prénom *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 bg-white/10 border-2 border-white/20 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#BE941B] focus:border-[#BE941B] transition-all duration-300"
                      placeholder="Votre nom complet"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold mb-3 uppercase tracking-wide">
                      Adresse Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 bg-white/10 border-2 border-white/20 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#BE941B] focus:border-[#BE941B] transition-all duration-300"
                      placeholder="votre@email.com"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-bold mb-3 uppercase tracking-wide">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-6 py-4 bg-white/10 border-2 border-white/20 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#BE941B] focus:border-[#BE941B] transition-all duration-300 resize-vertical"
                      placeholder="Décrivez votre demande..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#BE941B] hover:bg-white text-white hover:text-[#02173C] px-8 py-4 rounded-2xl transition-all duration-300 font-bold uppercase tracking-wide shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Envoi en cours...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Envoyer le message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-[#02173C]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-[#BE941B]/20 border border-[#BE941B]/30 rounded-full px-8 py-3 mb-8">
              <MapPin className="w-5 h-5 text-[#BE941B] mr-2" />
              <span className="text-[#BE941B] font-bold text-sm uppercase tracking-widest">Localisation</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Notre <span className="text-[#BE941B]">Emplacement</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#BE941B] via-white to-[#BE941B] mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Visitez notre siège social et découvrez notre gamme complète de produits PROMOKAR
            </p>
          </div>
          
          {/* Map Placeholder */}
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden shadow-2xl border border-[#BE941B]/20">
            <div className="aspect-video bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center relative">
              <img 
                src="https://images.unsplash.com/photo-1519302959554-a75be0afc82a?w=1200&q=80"
                alt="Carte de la Tunisie - Localisation PROMOKAR"
                className="w-full h-full object-cover"
              />
              
              {/* Location marker overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white rounded-3xl p-8 shadow-2xl max-w-md text-center border border-[#BE941B]/20">
                  <div className="w-12 h-12 bg-[#BE941B] rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <h3 className="font-black text-[#02173C] text-xl mb-4">PROMOKAR Tunisie</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p className="font-medium">Zone Industrielle Mghira 2</p>
                    <p>2082 Fouchana, Tunisie</p>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-[#BE941B] font-bold">115+ Points de Vente</p>
                      <p className="text-xs">Réseau national</p>
                    </div>
                  </div>
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
