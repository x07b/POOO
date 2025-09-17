import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function Actualites() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Actualités</h1>
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
            <p className="text-gray-600 mb-6">
              Cette page est en cours de développement. Continuez à utiliser l'assistant pour remplir le contenu de cette page.
            </p>
            <div className="w-16 h-1 bg-cmca-red mx-auto"></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
