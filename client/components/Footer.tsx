import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-promokar-navy to-promokar-secondary">
      {/* Main footer content */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F764e9f5cc4cb4c5fae9e810852d9697a%2F8aeb8b88b3be4b0cab7ee2b72f943358?format=webp&width=800"
                  alt="PROMOKAR Logo"
                  className="h-16 w-auto mb-6 brightness-0 invert"
                />
                <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                  PROMOKAR, votre partenaire de confiance pour l'excellence automobile.
                  Des solutions premium et une expertise technique de pointe depuis plus de 15 ans.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-promokar-gold/20 hover:bg-promokar-gold rounded-full flex items-center justify-center transition-all duration-300 group">
                  <Facebook size={20} className="text-promokar-gold group-hover:text-white" />
                </a>
                <a href="#" className="w-12 h-12 bg-promokar-gold/20 hover:bg-promokar-gold rounded-full flex items-center justify-center transition-all duration-300 group">
                  <Instagram size={20} className="text-promokar-gold group-hover:text-white" />
                </a>
                <a href="#" className="w-12 h-12 bg-promokar-gold/20 hover:bg-promokar-gold rounded-full flex items-center justify-center transition-all duration-300 group">
                  <Linkedin size={20} className="text-promokar-gold group-hover:text-white" />
                </a>
                <a href="#" className="w-12 h-12 bg-promokar-gold/20 hover:bg-promokar-gold rounded-full flex items-center justify-center transition-all duration-300 group">
                  <Twitter size={20} className="text-promokar-gold group-hover:text-white" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-bold text-white mb-6 text-lg">Nos Services</h3>
              <ul className="space-y-3">
                <li><Link to="/produits" className="text-gray-300 hover:text-promokar-gold transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-promokar-gold rounded-full mr-3 transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                  Véhicules Premium
                </Link></li>
                <li><Link to="/produits" className="text-gray-300 hover:text-promokar-gold transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-promokar-gold rounded-full mr-3 transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                  Maintenance Avancée
                </Link></li>
                <li><Link to="/produits" className="text-gray-300 hover:text-promokar-gold transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-promokar-gold rounded-full mr-3 transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                  Réparations Expert
                </Link></li>
                <li><Link to="/produits" className="text-gray-300 hover:text-promokar-gold transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-promokar-gold rounded-full mr-3 transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                  Garantie Étendue
                </Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-bold text-white mb-6 text-lg">Contact</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin size={20} className="text-promokar-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-sm">67, Avenue Habib Bourguiba,</p>
                    <p className="text-gray-300 text-sm">la Nouvelle Ariana 2080</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={20} className="text-promokar-gold" />
                  <a href="tel:+21612345678" className="text-gray-300 hover:text-promokar-gold transition-colors duration-300">
                    (+216) 711 007 50
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={20} className="text-promokar-gold" />
                  <a href="mailto:contact@promokar.net" className="text-gray-300 hover:text-promokar-gold transition-colors duration-300">
                    contact@promokar.net
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-promokar-gold/20 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Restez Informé</h3>
              <p className="text-gray-300">Abonnez-vous à notre newsletter pour recevoir nos dernières actualités et offres exclusives.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-6 py-3 rounded-full bg-white/10 border border-promokar-gold/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-promokar-gold focus:border-transparent"
              />
              <button className="bg-promokar-gold hover:bg-promokar-primary px-8 py-3 rounded-full text-white font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                S'abonner
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-promokar-secondary border-t border-promokar-gold/20 py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="text-gray-300 mb-4 md:mb-0">
              © 2024 PROMOKAR. Tous droits réservés.
            </p>
            <div className="flex items-center space-x-6">
              <Link to="/privacy" className="text-gray-300 hover:text-promokar-gold transition-colors duration-300">
                Politique de confidentialité
              </Link>
              <Link to="/terms" className="text-gray-300 hover:text-promokar-gold transition-colors duration-300">
                Conditions d'utilisation
              </Link>
              <span className="text-gray-400">|</span>
              <span className="text-gray-400">Powered by Excellence</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
