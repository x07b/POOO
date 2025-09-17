import { Link, useNavigate } from "react-router-dom";
import { Search, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setTimeout(() => {
        const searchInput = document.getElementById('search-input');
        if (searchInput) searchInput.focus();
      }, 100);
    }
  };

  return (
    <header className="bg-white shadow-lg relative z-50 border-b-2 border-promokar-gold/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="flex items-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F764e9f5cc4cb4c5fae9e810852d9697a%2F8aeb8b88b3be4b0cab7ee2b72f943358?format=webp&width=800"
                alt="PROMOKAR Logo"
                className="h-12 w-auto group-hover:scale-105 transition-transform duration-200"
              />
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <Link
              to="/"
              className="text-promokar-navy hover:text-promokar-gold transition-colors duration-300 font-medium text-lg relative group"
            >
              Présentation
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-promokar-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/produits"
              className="text-promokar-navy hover:text-promokar-gold transition-colors duration-300 font-medium text-lg relative group"
            >
              Produits
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-promokar-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <div className="relative group">
              <button className="text-promokar-navy hover:text-promokar-gold transition-colors duration-300 flex items-center font-medium text-lg">
                Revendeurs
                <svg className="ml-2 w-4 h-4 transform group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <Link
              to="/contact"
              className="bg-promokar-gold text-white px-6 py-3 rounded-full hover:bg-promokar-primary transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Contact
            </Link>
          </nav>

          {/* Search and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleSearch}
              className="p-3 text-promokar-navy hover:text-promokar-gold transition-colors duration-300 hover:bg-promokar-gold/10 rounded-full"
            >
              {isSearchOpen ? <X size={22} /> : <Search size={22} />}
            </button>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-3 text-promokar-navy hover:text-promokar-gold transition-colors duration-300 hover:bg-promokar-gold/10 rounded-full">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-xl z-50 transform transition-all duration-300">
          <div className="container mx-auto px-4 py-6">
            <form onSubmit={handleSearch} className="flex items-center space-x-4">
              <div className="flex-1 relative">
                <input
                  id="search-input"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Rechercher des produits PROMOKAR..."
                  className="w-full px-6 py-4 text-lg border-2 border-promokar-navy/20 rounded-full focus:outline-none focus:ring-2 focus:ring-promokar-gold focus:border-promokar-gold transition-all duration-300 bg-gray-50"
                />
                <Search className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
              </div>
              <button
                type="submit"
                className="bg-promokar-gold hover:bg-promokar-navy text-white px-8 py-4 rounded-full transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Rechercher
              </button>
            </form>
            <div className="mt-4 text-sm text-gray-600">
              <p>Recherchez parmi tous nos produits : lubrifiants automobile, moto, marine, industriels et plus encore.</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
