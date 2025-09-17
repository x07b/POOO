import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link, useParams, useLocation } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowRight, Shield, Star, Zap, Award, Check, MapPin, Download, Phone } from "lucide-react";

interface Product {
  id: string;
  name: string;
  category: string;
  categoryPath: string;
  image: string;
  description: string;
  detailedDescription: string;
  features: string[];
  benefits: string[];
  technicalSpecs?: Record<string, string>;
  applications: string[];
}

interface SimilarProduct {
  id: string;
  name: string;
  image: string;
  category: string;
}

export default function ProductDetail() {
  const { productId } = useParams<{ productId: string }>();
  const location = useLocation();
  const pathParts = location.pathname.split('/');
  const currentCategory = pathParts[2]; // Gets category from /produits/[category]/productId

  // Product data for all categories
  const productData: Record<string, Product> = {
    // Additifs
    "all-in-one-ultra-diesel": {
      id: "all-in-one-ultra-diesel",
      name: "ALL IN ONE ULTRA DIESEL",
      category: "Additifs",
      categoryPath: "additifs",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&q=80",
      description: "Additif multifonction haute performance pour moteurs diesel",
      detailedDescription: "DINOIL® ALL IN ONE ULTRA DIESEL est un nettoyant curatif concentré multi-action complet du système d'injection Diesel qui s'utilise dans tous types de moteurs Diesel : injection indirecte ou directe, atmosphérique ou turbo, avec ou sans FAP (Filtre À Particules), avec ou sans SCR (Selective Catalyst Reduction), et utilisant du Gasoil Diesel ou Biodiesel.\n\nDINOIL® ALL IN ONE ULTRA DIESEL est un additif Diesel tout-en-un concentré compatible avec les Biodiesels B7 (Biodiesel 7%) et B10 (Biodiesel 10%).\n\nCet additif nettoie efficacement les dépôts et encrassements inhérents au fonctionnement dans les systèmes d'alimentation en gasoil du moteur grâce à ses propriétés curatives permettant d'éliminer tous types de dépôts.",
      features: [
        "Nettoie efficacement les injecteurs",
        "Élimine les dépôts dans les chambres de combustion", 
        "Facilite la régénération du FAP",
        "Compatible avec les biodiesels B7 et B10",
        "Améliore les performances du moteur",
        "Réduit les émissions polluantes"
      ],
      benefits: [
        "Restaure la puissance originale du moteur",
        "Améliore le rendement énergétique",
        "Réduit la consommation de carburant",
        "Prolonge la durée de vie du moteur"
      ],
      applications: [
        "Véhicules particuliers diesel",
        "Véhicules utilitaires légers", 
        "Poids lourds et autobus",
        "Machines agricoles",
        "Groupes électrogènes diesel"
      ]
    },
    "all-in-one-ultra-essence": {
      id: "all-in-one-ultra-essence",
      name: "ALL IN ONE ULTRA ESSENCE",
      category: "Additifs",
      categoryPath: "additifs",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&q=80",
      description: "Additif multifonction premium pour moteurs essence",
      detailedDescription: "DINOIL® ALL IN ONE ULTRA ESSENCE est un additif essence multifonction haute performance spécialement développé pour les moteurs essence modernes. Sa formulation avancée nettoie, protège et optimise les performances de votre moteur.\n\nCompatible avec tous les types d'essence, y compris l'essence sans plomb et les biocarburants E10. Cet additif préventif et curatif maintient la propreté du système d'injection et des chambres de combustion.",
      features: [
        "Nettoie le système d'injection essence",
        "Élimine les dépôts carbonés",
        "Améliore l'indice d'octane",
        "Compatible essence sans plomb et E10",
        "Protection anti-corrosion",
        "Optimise la combustion"
      ],
      benefits: [
        "Améliore les performances du moteur",
        "Réduit la consommation d'essence",
        "Diminue les émissions polluantes",
        "Facilite les démarrages à froid"
      ],
      applications: [
        "Véhicules particuliers essence",
        "Motocyclettes 4 temps",
        "Véhicules utilitaires essence",
        "Tondeuses et petits moteurs",
        "Groupes électrogènes essence"
      ]
    },
    "cat-converter-cleaner": {
      id: "cat-converter-cleaner", 
      name: "CAT CONVERTER CLEANER",
      category: "Additifs",
      categoryPath: "additifs",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&q=80",
      description: "Nettoyant catalyseur pour performance optimale",
      detailedDescription: "DINOIL® CAT CONVERTER CLEANER est un additif spécialement conçu pour nettoyer et décrasser le catalyseur de votre véhicule. Il élimine efficacement les dépôts qui peuvent réduire l'efficacité du catalyseur et améliore les performances du système d'échappement.\n\nCe produit utilise une technologie avancée pour dissoudre les dépôts de carbone et autres contaminants qui s'accumulent dans le catalyseur au fil du temps.",
      features: [
        "Nettoie le catalyseur en profondeur",
        "Élimine les dépôts carbonés et métalliques",
        "Améliore les performances d'échappement",
        "Réduit les émissions polluantes",
        "Compatible tous véhicules essence",
        "Formule non-corrosive"
      ],
      benefits: [
        "Restaure l'efficacité du catalyseur",
        "Améliore le passage au contrôle technique",
        "Optimise les performances moteur",
        "Prolonge la durée de vie du catalyseur"
      ],
      applications: [
        "Véhicules essence avec catalyseur",
        "Véhicules hybrides",
        "Motocyclettes catalysées",
        "Véhicules de collection",
        "Véhicules à fort kilométrage"
      ]
    },
    "intake-clean": {
      id: "intake-clean",
      name: "INTAKE CLEAN", 
      category: "Additifs",
      categoryPath: "additifs",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&q=80",
      description: "Nettoyant collecteur d'admission professionnel",
      detailedDescription: "DINOIL® INTAKE CLEAN est un nettoyant professionnel spécialement formulé pour nettoyer le collecteur d'admission et les soupapes d'admission. Il élimine efficacement les dépôts de gomme, vernis et carbone qui s'accumulent dans le système d'admission.\n\nCe produit est particulièrement efficace sur les moteurs à injection directe où les dépôts sur les soupapes d'admission peuvent affecter significativement les performances.",
      features: [
        "Nettoie le collecteur d'admission",
        "Élimine les dépôts sur les soupapes",
        "Dissout gommes et vernis",
        "Compatible injection directe et indirecte",
        "Action rapide et efficace",
        "Formule professionnelle"
      ],
      benefits: [
        "Restaure le débit d'air optimal",
        "Améliore le rendement volumétrique",
        "Stabilise le ralenti",
        "Optimise la réponse à l'accélération"
      ],
      applications: [
        "Moteurs essence injection directe",
        "Moteurs turbocompressés",
        "Véhicules à fort kilométrage",
        "Moteurs de sport et performance",
        "Maintenance préventive professionnelle"
      ]
    },
    "octane-booster-gasoline": {
      id: "octane-booster-gasoline",
      name: "OCTANE BOOSTER GASOLINE",
      category: "Additifs", 
      categoryPath: "additifs",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&q=80",
      description: "Amplificateur d'octane pour essence premium",
      detailedDescription: "DINOIL® OCTANE BOOSTER GASOLINE est un amplificateur d'indice d'octane haute performance qui améliore la résistance au cliquetis et optimise les performances des moteurs essence haute compression.\n\nCe produit augmente efficacement l'indice d'octane de l'essence standard, permettant une combustion plus efficace et des performances optimales, particulièrement sur les moteurs sportifs et haute performance.",
      features: [
        "Augmente l'indice d'octane jusqu'à 3 points",
        "Améliore la résistance au cliquetis",
        "Optimise la combustion",
        "Compatible essence sans plomb",
        "Formule concentrée haute performance",
        "Ne contient pas de plomb"
      ],
      benefits: [
        "Libère la puissance maximale du moteur",
        "Améliore les performances d'accélération",
        "Réduit les risques de cliquetis",
        "Optimise l'avance à l'allumage"
      ],
      applications: [
        "Moteurs sportifs haute performance",
        "Véhicules de compétition",
        "Moteurs turbocompressés",
        "Véhicules de collection",
        "Moteurs haute compression"
      ]
    },
    "system-keep-clean-diesel": {
      id: "system-keep-clean-diesel",
      name: "SYSTEM KEEP CLEAN DIESEL",
      category: "Additifs",
      categoryPath: "additifs", 
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&q=80",
      description: "Système de nettoyage complet diesel",
      detailedDescription: "DINOIL® SYSTEM KEEP CLEAN DIESEL est un additif préventif qui maintient la propreté du système d'injection diesel et prévient la formation de nouveaux dépôts. Utilisé régulièrement, il assure un fonctionnement optimal du moteur diesel.\n\nSa formulation préventive empêche l'accumulation de dépôts dans les injecteurs, pompe à injection et circuit d'alimentation, garantissant des performances constantes et une durée de vie prolongée du système d'injection.",
      features: [
        "Prévient la formation de dépôts",
        "Maintient la propreté des injecteurs",
        "Protège le système d'injection",
        "Compatible tous moteurs diesel",
        "Formule préventive longue durée",
        "Améliore la pulvérisation du gasoil"
      ],
      benefits: [
        "Maintient les performances optimales",
        "Prévient les problèmes d'injection",
        "Réduit les coûts de maintenance",
        "Prolonge la durée de vie du moteur"
      ],
      applications: [
        "Maintenance préventive régulière",
        "Véhicules diesel modernes",
        "Systèmes common rail",
        "Véhicules utilitaires",
        "Usage professionnel intensif"
      ]
    },
    "system-keep-clean-gasoline": {
      id: "system-keep-clean-gasoline",
      name: "SYSTEM KEEP CLEAN GASOLINE", 
      category: "Additifs",
      categoryPath: "additifs",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&q=80",
      description: "Système de nettoyage avancé pour essence",
      detailedDescription: "DINOIL® SYSTEM KEEP CLEAN GASOLINE est un additif préventif avancé qui maintient la propreté du système d'injection essence et optimise les performances du moteur. Sa formulation préventive empêche l'accumulation de dépôts.\n\nUtilisé régulièrement, cet additif maintient l'efficacité du système d'injection, assure une pulvérisation optimale de l'essence et prévient les problèmes liés à l'encrassement.",
      features: [
        "Maintient la propreté du système d'injection",
        "Prévient les dépôts sur les injecteurs",
        "Optimise la pulvérisation de l'essence",
        "Compatible essence et biocarburants",
        "Action préventive continue",
        "Stabilise l'essence stockée"
      ],
      benefits: [
        "Maintient les performances du moteur",
        "Assure un ralenti stable",
        "Prévient les problèmes de démarrage",
        "Optimise la consommation"
      ],
      applications: [
        "Usage préventif régulier",
        "Véhicules essence modernes",
        "Injection directe et indirecte",
        "Véhicules peu utilisés",
        "Stockage longue durée"
      ]
    },
    "transmission-clean": {
      id: "transmission-clean",
      name: "TRANSMISSION CLEAN",
      category: "Additifs",
      categoryPath: "additifs",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&q=80",
      description: "Nettoyant transmission automatique et manuelle", 
      detailedDescription: "DINOIL® TRANSMISSION CLEAN est un nettoyant spécialement développé pour les transmissions automatiques et manuelles. Il élimine efficacement les dépôts, gommes et vernis qui s'accumulent dans le système de transmission.\n\nCe produit revitalise les joints et améliore les performances de changement de vitesse, tout en prolongeant la durée de vie de l'huile de transmission.",
      features: [
        "Nettoie transmissions automatiques et manuelles",
        "Élimine dépôts et vernis",
        "Revitalise les joints d'étanchéité",
        "Améliore la fluidité des changements",
        "Compatible tous types de transmissions",
        "Restaure les performances d'origine"
      ],
      benefits: [
        "Améliore la qualité des changements de vitesse",
        "Réduit les vibrations et à-coups",
        "Prolonge la durée de vie de la transmission",
        "Restaure l'étanchéité du système"
      ],
      applications: [
        "Transmissions automatiques",
        "Boîtes de vitesses manuelles",
        "Convertisseurs de couple",
        "Différentiels",
        "Maintenance préventive"
      ]
    },
    "valve-lifter-stop-noise": {
      id: "valve-lifter-stop-noise",
      name: "VALVE LIFTER STOP NOISE",
      category: "Additifs",
      categoryPath: "additifs",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&q=80",
      description: "Solution anti-bruit des poussoirs hydrauliques",
      detailedDescription: "DINOIL® VALVE LIFTER STOP NOISE est une solution spécialement formulée pour éliminer les bruits de poussoirs hydrauliques et restaurer leur fonctionnement silencieux. Ce produit agit rapidement pour résoudre les problèmes de claquements moteur.\n\nSa formulation avancée nettoie les poussoirs hydrauliques encrassés, restaure leur fonctionnement optimal et élimine les bruits parasites au démarrage et à chaud.",
      features: [
        "Élimine les bruits de poussoirs",
        "Nettoie les poussoirs hydrauliques", 
        "Restaure le fonctionnement silencieux",
        "Action rapide et efficace",
        "Compatible tous moteurs",
        "Formule non-abrasive"
      ],
      benefits: [
        "Supprime les claquements moteur",
        "Améliore le confort acoustique",
        "Restaure les performances d'origine",
        "Évite les réparations coûteuses"
      ],
      applications: [
        "Moteurs avec poussoirs hydrauliques",
        "Véhicules à fort kilométrage",
        "Problèmes de bruits moteur",
        "Maintenance corrective",
        "Restauration de véhicules"
      ]
    },

    // ========== AUTOMOBILE PRODUCTS ==========
    "8100-x-cess": {
      id: "8100-x-cess",
      name: "8100 X-CESS",
      category: "Automobile",
      categoryPath: "automobile",
      image: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=400&q=80",
      description: "Huile moteur 100% synthétique haute performance 5W40",
      detailedDescription: "DINOIL® 8100 X-CESS 5W-40 est une huile moteur 100% synthétique haute performance développée pour répondre aux exigences des moteurs essence et diesel les plus récents. Sa formulation avancée offre une protection exceptionnelle contre l'usure et maintient la propreté du moteur.\n\nCette huile répond aux spécifications les plus strictes des constructeurs automobiles européens et garantit des performances optimales dans toutes les conditions de conduite.",
      features: [
        "100% synthétique haute performance",
        "Protection exceptionnelle contre l'usure",
        "Excellent comportement à froid",
        "Stabilité thermique remarquable",
        "Compatible essence et diesel",
        "Intervalles de vidange prolongés"
      ],
      benefits: [
        "Maintient la puissance du moteur",
        "Réduit la consommation d'huile",
        "Facilite les démarrages à froid",
        "Prolonge la durée de vie du moteur"
      ],
      applications: [
        "Véhicules particuliers haut de gamme",
        "Moteurs turbocompressés",
        "Conduite sportive",
        "Conditions de conduite sévères",
        "Véhicules récents essence et diesel"
      ]
    },
    "gear-300": {
      id: "gear-300",
      name: "GEAR 300",
      category: "Automobile",
      categoryPath: "automobile",
      image: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=400&q=80",
      description: "Huile transmission manuelle 100% synthétique 75W90",
      detailedDescription: "DINOIL® GEAR 300 75W-90 est une huile de transmission 100% synthétique pour boîtes de vitesses manuelles et ponts autobloquants. Elle offre une protection optimale des engrenages même dans les conditions les plus sévères grâce à ses additifs anti-usure avancés.\n\nSa formulation synthétique assure une fluidité excellente à basse température et maintient ses propriétés lubrifiantes à haute température.",
      features: [
        "100% synthétique pour transmissions",
        "Protection optimale des engrenages",
        "Résistance aux conditions extrêmes",
        "Fluidité excellente à froid",
        "Compatible différentiels autobloquants",
        "Durabilité exceptionnelle"
      ],
      benefits: [
        "Améliore la précision des changements",
        "Réduit l'usure des synchros",
        "Diminue les bruits de transmission",
        "Prolonge la durée de vie de la boîte"
      ],
      applications: [
        "Boîtes de vitesses manuelles",
        "Différentiels autobloquants",
        "Transmissions sportives",
        "Véhicules de compétition",
        "Conditions de conduite extrêmes"
      ]
    },
    "6100-save-lite": {
      id: "6100-save-lite",
      name: "6100 SAVE LITE",
      category: "Automobile",
      categoryPath: "automobile",
      image: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=400&q=80",
      description: "Huile moteur semi-synthétique économique 5W30",
      detailedDescription: "DINOIL® 6100 SAVE LITE 5W-30 est une huile moteur semi-synthétique spécialement formulée pour les véhicules modernes nécessitant une huile économique en carburant. Elle combine les avantages de la technologie synthétique avec un excellent rapport qualité-prix.\n\nCette huile est idéale pour l'usage quotidien et offre une protection fiable tout en contribuant aux économies de carburant.",
      features: [
        "Formulation semi-synthétique optimisée",
        "Économies de carburant démontrées",
        "Protection moteur efficace",
        "Démarrages facilités",
        "Compatible FAP et catalyseur",
        "Excellent rapport qualité-prix"
      ],
      benefits: [
        "Réduit la consommation de carburant",
        "Protège efficacement le moteur",
        "Maintient la propreté interne",
        "Assure une lubrification constante"
      ],
      applications: [
        "Véhicules particuliers récents",
        "Usage urbain et routier",
        "Conduite économique",
        "Véhicules familiaux",
        "Entretien préventif régulier"
      ]
    },
    "8100-eco-nergy": {
      id: "8100-eco-nergy",
      name: "8100 ECO-NERGY",
      category: "Automobile",
      categoryPath: "automobile",
      image: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=400&q=80",
      description: "Huile moteur économie carburant haute technologie 5W30",
      detailedDescription: "DINOIL® 8100 ECO-NERGY 5W-30 est une huile moteur synthétique de dernière génération développée pour maximiser les économies de carburant tout en assurant une protection moteur exceptionnelle. Sa formulation exclusive permet de réduire significativement la consommation.\n\nCette huile répond aux normes les plus récentes et est particulièrement adaptée aux moteurs modernes équipés de systèmes de dépollution.",
      features: [
        "Technologie d'économie de carburant",
        "Protection moteur renforcée",
        "Formulation synthétique avancée",
        "Compatible systèmes dépollution",
        "Stabilité thermique excellente",
        "Fluidité optimisée"
      ],
      benefits: [
        "Économies de carburant jusqu'à 3%",
        "Réduction des émissions CO2",
        "Protection contre l'usure prématurée",
        "Maintien des performances moteur"
      ],
      applications: [
        "Véhicules modernes essence et diesel",
        "Moteurs éco-responsables",
        "Conduite économique",
        "Véhicules hybrides",
        "Usage urbain intensif"
      ]
    },
    "motylgear-75w80": {
      id: "motylgear-75w80",
      name: "MOTYLGEAR 75W80",
      category: "Automobile",
      categoryPath: "automobile",
      image: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=400&q=80",
      description: "Huile boîte de vitesses synthétique haute performance",
      detailedDescription: "DINOIL® MOTYLGEAR 75W-80 est une huile de transmission synthétique haute performance conçue pour les boîtes de vitesses manuelles modernes. Sa viscosité optimisée assure des changements de vitesse précis et protège efficacement les composants de transmission.\n\nFormulée avec des bases synthétiques de haute qualité et des additifs de dernière génération, elle garantit une longue durée de service.",
      features: [
        "Synthétique haute performance",
        "Viscosité optimisée 75W-80",
        "Protection anti-usure avancée",
        "Stabilité au cisaillement",
        "Résistance à l'oxydation",
        "Compatibilité joints étendue"
      ],
      benefits: [
        "Changements de vitesse plus doux",
        "Réduction du bruit transmission",
        "Protection optimale des synchros",
        "Durée de vie prolongée"
      ],
      applications: [
        "Boîtes manuelles modernes",
        "Transmissions haute performance",
        "Véhicules de sport",
        "Conduite dynamique",
        "Maintenance préventive"
      ]
    },
    "brake-fluid-dot4": {
      id: "brake-fluid-dot4",
      name: "BRAKE FLUID DOT 4",
      category: "Automobile",
      categoryPath: "automobile",
      image: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=400&q=80",
      description: "Liquide de frein DOT 4 haute performance",
      detailedDescription: "DINOIL® BRAKE FLUID DOT 4 est un liquide de frein synthétique haute performance qui répond aux spécifications DOT 4 les plus strictes. Il offre un point d'ébullition élevé et une excellente stabilité thermique pour un freinage sûr en toutes circonstances.\n\nSa formulation avancée résiste à l'absorption d'humidité et maintient ses propriétés dans le temps, assurant la sécurité du système de freinage.",
      features: [
        "Spécification DOT 4 certifiée",
        "Point d'ébullition élevé",
        "Résistance à l'humidité",
        "Stabilité thermique excellente",
        "Compatible ABS et ESP",
        "Formulation non-corrosive"
      ],
      benefits: [
        "Freinage sûr et efficace",
        "Résistance au fading",
        "Protection des composants",
        "Durée de service prolongée"
      ],
      applications: [
        "Systèmes de freinage automobiles",
        "Véhicules avec ABS/ESP",
        "Conduite sportive",
        "Véhicules de performance",
        "Maintenance préventive freins"
      ]
    },
    "coolant-inugel-optimal": {
      id: "coolant-inugel-optimal",
      name: "INUGEL OPTIMAL",
      category: "Automobile",
      categoryPath: "automobile",
      image: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=400&q=80",
      description: "Liquide de refroidissement universel longue durée",
      detailedDescription: "DINOIL® INUGEL OPTIMAL est un liquide de refroidissement universel basé sur la technologie éthylène glycol avec additifs organiques. Il protège efficacement contre le gel, la surchauffe et la corrosion pour tous types de moteurs automobiles.\n\nSa formulation longue durée réduit la fréquence de remplacement et assure une protection optimale du circuit de refroidissement.",
      features: [
        "Technologie organique OAT",
        "Protection universelle",
        "Longue durée de service",
        "Anti-gel jusqu'à -37°C",
        "Protection anti-corrosion",
        "Compatible tous métaux"
      ],
      benefits: [
        "Protège contre gel et surchauffe",
        "Prévient la corrosion interne",
        "Maintient l'efficacité de refroidissement",
        "Réduit les coûts de maintenance"
      ],
      applications: [
        "Tous véhicules automobiles",
        "Moteurs aluminium et fonte",
        "Radiateurs cuivre et aluminium",
        "Systèmes de chauffage",
        "Usage toutes saisons"
      ]
    },
    "power-steering-fluid": {
      id: "power-steering-fluid",
      name: "DEXRON III",
      category: "Automobile",
      categoryPath: "automobile",
      image: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=400&q=80",
      description: "Fluide direction assistée haute qualité",
      detailedDescription: "DINOIL® DEXRON III est un fluide hydraulique de haute qualité spécialement formulé pour les systèmes de direction assistée automobile. Il offre d'excellentes propriétés hydrauliques et protège efficacement contre l'usure des composants du système.\n\nSa formulation stable garantit un fonctionnement silencieux et précis de la direction assistée dans toutes les conditions d'utilisation.",
      features: [
        "Spécification DEXRON III",
        "Propriétés hydrauliques optimales",
        "Protection anti-usure",
        "Stabilité thermique",
        "Fonctionnement silencieux",
        "Compatible joints système"
      ],
      benefits: [
        "Direction assistée précise",
        "Réduction des bruits hydrauliques",
        "Protection des pompes",
        "Durée de service étendue"
      ],
      applications: [
        "Systèmes direction assistée",
        "Pompes hydrauliques auto",
        "Transmissions automatiques",
        "Systèmes hydrauliques légers",
        "Véhicules toutes marques"
      ]
    },
    "classic-oil-20w50": {
      id: "classic-oil-20w50",
      name: "CLASSIC OIL 20W50",
      category: "Automobile",
      categoryPath: "automobile",
      image: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=400&q=80",
      description: "Huile moteur minérale pour véhicules anciens",
      detailedDescription: "DINOIL® CLASSIC OIL 20W-50 est une huile moteur minérale spécialement formulée pour les véhicules anciens et classiques. Sa viscosité élevée compense l'usure des moteurs et assure une étanchéité optimale pour les mécaniques d'époque.\n\nCette huile respecte les spécifications d'origine et préserve l'authenticité des véhicules de collection tout en offrant une protection moderne.",
      features: [
        "Formulation minérale traditionnelle",
        "Viscosité élevée 20W-50",
        "Additifs anti-usure adaptés",
        "Compatible joints anciens",
        "Réduction des fuites",
        "Protection zinc-phosphore"
      ],
      benefits: [
        "Compense l'usure moteur",
        "Améliore l'étanchéité",
        "Maintient la pression d'huile",
        "Préserve les mécaniques anciennes"
      ],
      applications: [
        "Véhicules de collection",
        "Moteurs anciens forte usure",
        "Automobiles classiques",
        "Véhicules vintage",
        "Restauration automobile"
      ]
    },

    // ========== ENTRETIEN PRODUCTS ==========
    "engine-clean": {
      id: "engine-clean",
      name: "ENGINE CLEAN",
      category: "Entretien",
      categoryPath: "entretien",
      image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=400&q=80",
      description: "Nettoyant moteur interne haute performance",
      detailedDescription: "DINOIL® ENGINE CLEAN est un nettoyant moteur interne haute performance qui élimine efficacement tous les dépôts formés dans le moteur. Il se mélange à l'huile moteur usagée avant la vidange pour dissoudre les gommes, vernis et boues qui s'accumulent au fil du temps.\n\nCe produit restaure la propreté interne du moteur et prépare l'installation de l'huile neuve pour des performances optimales.",
      features: [
        "Nettoie l'intérieur du moteur",
        "Élimine les dépôts et gommes",
        "Dissout les boues d'huile",
        "Améliore la circulation de l'huile",
        "Compatible tous types de moteurs",
        "Utilisation simple avant vidange"
      ],
      benefits: [
        "Restaure les performances moteur",
        "Prolonge la durée de vie du moteur",
        "Améliore l'efficacité de l'huile neuve",
        "Réduit la consommation d'huile"
      ],
      applications: [
        "Moteurs essence et diesel",
        "Véhicules à fort kilométrage",
        "Maintenance préventive",
        "Avant changement d'huile",
        "Remise en état moteur"
      ]
    },
    "brake-clean": {
      id: "brake-clean",
      name: "BRAKE CLEAN",
      category: "Entretien",
      categoryPath: "entretien",
      image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=400&q=80",
      description: "Dégraissant puissant pour systèmes de freinage",
      detailedDescription: "DINOIL® BRAKE CLEAN est un dégraissant puissant spécialement formulé pour nettoyer les systèmes de freinage et d'embrayage. Il élimine efficacement l'huile, la graisse, les poussières de frein et autres contaminants sans laisser de résidu.\n\nSon évaporation rapide permet un nettoyage professionnel sans démontage et assure un freinage optimal après intervention.",
      features: [
        "Dégraisse les systèmes de freinage",
        "Élimine les poussières de frein",
        "Séchage rapide sans résidu",
        "Compatible tous types de freins",
        "Ne laisse aucune trace",
        "Formule non-inflammable"
      ],
      benefits: [
        "Améliore l'efficacité de freinage",
        "Élimine les bruits de freins",
        "Prépare surfaces pour réparation",
        "Assure la sécurité du freinage"
      ],
      applications: [
        "Disques et plaquettes de frein",
        "Systèmes d'embrayage",
        "Étriers et pistons",
        "Maintenance préventive",
        "Réparation freins"
      ]
    },
    "contact-cleaner": {
      id: "contact-cleaner",
      name: "CONTACT CLEANER",
      category: "Entretien",
      categoryPath: "entretien",
      image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=400&q=80",
      description: "Nettoyant contacts électriques et électroniques",
      detailedDescription: "DINOIL® CONTACT CLEANER est un nettoyant spécialisé pour les contacts électriques et électroniques. Il élimine l'oxydation, la corrosion et les dépôts qui perturbent les connexions électriques, restaurant ainsi la conductivité optimale.\n\nSa formulation spéciale respecte les composants électroniques délicats tout en assurant un nettoyage efficace.",
      features: [
        "Nettoie contacts électriques",
        "Élimine oxydation et corrosion",
        "Restaure la conductivité",
        "Séchage rapide",
        "Compatible électronique",
        "Ne laisse aucun résidu"
      ],
      benefits: [
        "Améliore les connexions électriques",
        "Élimine les défauts de contact",
        "Prévient l'oxydation future",
        "Restaure le fonctionnement optimal"
      ],
      applications: [
        "Contacts électriques automobiles",
        "Connecteurs électroniques",
        "Circuits imprimés",
        "Relais et commutateurs",
        "Maintenance électrique"
      ]
    },
    "air-filter-clean": {
      id: "air-filter-clean",
      name: "AIR FILTER CLEAN",
      category: "Entretien",
      categoryPath: "entretien",
      image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=400&q=80",
      description: "Nettoyant filtres à air haute efficacité",
      detailedDescription: "DINOIL® AIR FILTER CLEAN est un nettoyant spécialement développé pour les filtres à air réutilisables en mousse ou coton. Il dissout efficacement la saleté, l'huile et les particules accumulées, restaurant la capacité de filtration originale.\n\nCe produit prépare le filtre pour l'application d'huile de filtre et assure une filtration optimale de l'air d'admission.",
      features: [
        "Nettoie filtres mousse et coton",
        "Dissout saleté et particules",
        "Élimine l'huile usagée",
        "Restaure capacité filtration",
        "Biodégradable",
        "Rinçage à l'eau"
      ],
      benefits: [
        "Améliore les performances moteur",
        "Prolonge la durée de vie du filtre",
        "Assure une filtration optimale",
        "Économise l'achat de filtres neufs"
      ],
      applications: [
        "Filtres à air sport",
        "Filtres réutilisables",
        "Motocyclettes et quads",
        "Véhicules tout-terrain",
        "Maintenance périodique"
      ]
    },
    "foam-air-filter-oil": {
      id: "foam-air-filter-oil",
      name: "FOAM AIR FILTER OIL",
      category: "Entretien",
      categoryPath: "entretien",
      image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=400&q=80",
      description: "Huile pour filtres à air en mousse",
      detailedDescription: "DINOIL® FOAM AIR FILTER OIL est une huile spécialement formulée pour l'imprégnation des filtres à air en mousse. Elle améliore considérablement la capacité de filtration tout en maintenant un débit d'air optimal pour les performances moteur.\n\nSa viscosité étudiée assure une répartition homogène et une adhérence parfaite sur la mousse filtrante.",
      features: [
        "Formulation spéciale mousse",
        "Améliore la filtration",
        "Maintient le débit d'air",
        "Adhérence optimale",
        "Résistance aux projections",
        "Colorant de contrôle"
      ],
      benefits: [
        "Filtration supérieure des particules",
        "Protection moteur renforcée",
        "Maintien des performances",
        "Application facile et uniforme"
      ],
      applications: [
        "Filtres mousse sport",
        "Motocyclettes tout-terrain",
        "Quads et SSV",
        "Véhicules 4x4",
        "Compétition off-road"
      ]
    },
    "chain-clean": {
      id: "chain-clean",
      name: "CHAIN CLEAN",
      category: "Entretien",
      categoryPath: "entretien",
      image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=400&q=80",
      description: "Dégraissant chaînes motos et vélos",
      detailedDescription: "DINOIL® CHAIN CLEAN est un dégraissant puissant spécialement conçu pour le nettoyage des chaînes de transmission moto et vélo. Il élimine efficacement l'ancienne graisse, la saleté et les résidus de lubrifiant, préparant la chaîne pour une nouvelle lubrification.\n\nSa formulation respecte les joints X-Ring et O-Ring tout en assurant un dégraissage complet.",
      features: [
        "Dégraissage puissant chaînes",
        "Compatible joints X-Ring/O-Ring",
        "Élimine saleté et résidus",
        "Évaporation contrôlée",
        "Application facile spray",
        "Prépare nouvelle lubrification"
      ],
      benefits: [
        "Prolonge la durée de vie chaîne",
        "Améliore l'efficacité transmission",
        "Prépare lubrification optimale",
        "Maintient souplesse chaîne"
      ],
      applications: [
        "Chaînes moto route et cross",
        "Vélos et VTT",
        "Transmission par chaîne",
        "Maintenance préventive",
        "Compétition moto"
      ]
    },
    "carburetor-clean": {
      id: "carburetor-clean",
      name: "CARBURETOR CLEAN",
      category: "Entretien",
      categoryPath: "entretien",
      image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=400&q=80",
      description: "Nettoyant carburateurs et systèmes d'injection",
      detailedDescription: "DINOIL® CARBURETOR CLEAN est un nettoyant puissant formulé pour éliminer les dépôts de gomme, vernis et carbone dans les carburateurs et systèmes d'injection. Il restaure le fonctionnement optimal de l'alimentation en carburant.\n\nSa formulation spéciale dissout rapidement les encrassements sans endommager les joints et composants du système d'alimentation.",
      features: [
        "Nettoie carburateurs et injection",
        "Dissout gommes et vernis",
        "Élimine dépôts carbone",
        "Compatible joints système",
        "Action rapide efficace",
        "Restaure débit carburant"
      ],
      benefits: [
        "Améliore les performances moteur",
        "Facilite le démarrage",
        "Stabilise le ralenti",
        "Réduit la consommation"
      ],
      applications: [
        "Carburateurs moto et auto",
        "Systèmes injection essence",
        "Moteurs petite mécanique",
        "Véhicules de collection",
        "Maintenance curative"
      ]
    },
    "cooling-system-clean": {
      id: "cooling-system-clean",
      name: "COOLING SYSTEM CLEAN",
      category: "Entretien",
      categoryPath: "entretien",
      image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=400&q=80",
      description: "Nettoyant système de refroidissement",
      detailedDescription: "DINOIL® COOLING SYSTEM CLEAN est un nettoyant spécialisé pour l'entretien des circuits de refroidissement. Il élimine efficacement les dépôts calcaires, la rouille et les boues qui réduisent l'efficacité du refroidissement moteur.\n\nSon action désincrustante restaure l'échange thermique optimal et prépare le circuit pour le nouveau liquide de refroidissement.",
      features: [
        "Nettoie circuit refroidissement",
        "Élimine calcaire et rouille",
        "Dissout les boues",
        "Restaure échange thermique",
        "Compatible tous métaux",
        "Préparation nouveau liquide"
      ],
      benefits: [
        "Améliore refroidissement moteur",
        "Prévient la surchauffe",
        "Prolonge durée de vie radiateur",
        "Optimise circulation liquide"
      ],
      applications: [
        "Radiateurs auto et moto",
        "Circuits refroidissement",
        "Échangeurs thermiques",
        "Maintenance préventive",
        "Réparation système"
      ]
    },
    "radiator-stop-leak": {
      id: "radiator-stop-leak",
      name: "RADIATOR STOP LEAK",
      category: "Entretien",
      categoryPath: "entretien",
      image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=400&q=80",
      description: "Stop fuite radiateur et circuit refroidissement",
      detailedDescription: "DINOIL® RADIATOR STOP LEAK est un produit d'étanchéité spécialement formulé pour colmater les petites fuites dans les systèmes de refroidissement. Il réagit au contact de l'air pour former un bouchon étanche permanent dans les fissures et pores.\n\nSa formulation respecte les composants du circuit et n'obstrue pas les passages de circulation normale du liquide.",
      features: [
        "Colmate fuites radiateur",
        "Réaction chimique étanchéité",
        "Compatible tous liquides",
        "N'obstrue pas circulation",
        "Étanchéité permanente",
        "Utilisation préventive"
      ],
      benefits: [
        "Arrête les fuites rapidement",
        "Évite vidange circuit",
        "Solution économique",
        "Réparation temporaire fiable"
      ],
      applications: [
        "Radiateurs avec micro-fuites",
        "Circuits refroidissement",
        "Réparation d'urgence",
        "Véhicules anciens",
        "Maintenance corrective"
      ]
    },

    // ========== MOTO PRODUCTS ==========
    "7100-4t-10w40": {
      id: "7100-4t-10w40",
      name: "7100 4T 10W40",
      category: "Moto",
      categoryPath: "moto",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&q=80",
      description: "Huile moteur 4T 100% synthétique haute performance",
      detailedDescription: "DINOIL® 7100 4T 10W-40 est une huile moteur 100% synthétique spécialement développée pour les moteurs moto 4 temps haute performance. Elle offre une protection maximale et des performances optimales pour les motos sportives et de touring.\n\nSa formulation avancée résiste aux hautes températures et régimes élevés tout en protégeant l'embrayage bain d'huile.",
      features: [
        "100% synthétique pour motos 4T",
        "Protection maximale du moteur",
        "Performances optimales haute vitesse",
        "Résistance aux hautes températures",
        "Compatible embrayage bain d'huile",
        "Homologations constructeurs"
      ],
      benefits: [
        "Puissance et couple optimisés",
        "Protection contre l'usure extrême",
        "Embrayage progressif et précis",
        "Intervalles vidange prolongés"
      ],
      applications: [
        "Motos sportives haute performance",
        "Moteurs 4T refroidis liquide",
        "Usage piste et compétition",
        "Touring longue distance",
        "Motos récentes toutes cylindrées"
      ]
    },
    "chain-lube-road": {
      id: "chain-lube-road",
      name: "CHAIN LUBE ROAD",
      category: "Moto",
      categoryPath: "moto",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&q=80",
      description: "Lubrifiant chaîne route longue durée",
      detailedDescription: "DINOIL® CHAIN LUBE ROAD est un lubrifiant spécialement conçu pour les chaînes de transmission des motos utilisées sur route. Sa formule adhérente résiste à la projection et assure une lubrification durable même à haute vitesse.\n\nCe lubrifiant pénètre profond��ment dans les maillons et offre une protection optimale contre l'usure et la corrosion.",
      features: [
        "Formule adhérente longue durée",
        "Résistance à la projection",
        "Protection anti-usure optimale",
        "Compatible joints X-Ring/O-Ring",
        "Application facile en spray",
        "Pénétration profonde"
      ],
      benefits: [
        "Prolonge la durée de vie chaîne",
        "Réduit l'usure pignons",
        "Transmission silencieuse",
        "Espacement graissage prolongé"
      ],
      applications: [
        "Motos route toutes cylindrées",
        "Usage urbain et autoroutier",
        "Touring longue distance",
        "Conduite quotidienne",
        "Maintenance préventive"
      ]
    },
    "5100-4t-10w40": {
      id: "5100-4t-10w40",
      name: "5100 4T 10W40",
      category: "Moto",
      categoryPath: "moto",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&q=80",
      description: "Huile moteur 4T semi-synthétique performante",
      detailedDescription: "DINOIL® 5100 4T 10W-40 est une huile moteur semi-synthétique spécialement formulée pour les moteurs moto 4 temps. Elle combine les avantages de la technologie synthétique avec un excellent rapport qualité-prix pour un usage régulier.\n\nCette huile assure une protection fiable et maintient les performances du moteur dans toutes les conditions d'utilisation normale.",
      features: [
        "Formulation semi-synthétique",
        "Protection moteur efficace",
        "Compatible embrayage",
        "Stabilité thermique",
        "Excellent rapport qualité-prix",
        "Usage polyvalent"
      ],
      benefits: [
        "Protection équilibrée du moteur",
        "Performances constantes",
        "Embrayage souple",
        "Maintenance économique"
      ],
      applications: [
        "Motos 4T usage standard",
        "Moteurs refroidis air/liquide",
        "Conduite loisir",
        "Utilisation quotidienne",
        "Motos toutes cylindrées"
      ]
    },
    "gear-mb-80w90": {
      id: "gear-mb-80w90",
      name: "GEAR MB 80W90",
      category: "Moto",
      categoryPath: "moto",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&q=80",
      description: "Huile transmission moto haute protection",
      detailedDescription: "DINOIL® GEAR MB 80W-90 est une huile de transmission spécialement développée pour les boîtes de vitesses et transmissions finales des motocycles. Sa formulation offre une protection exceptionnelle contre l'usure et assure des changements précis.\n\nCette huile maintient ses propriétés lubrifiantes dans les conditions extrêmes de température et de charge.",
      features: [
        "Spécial transmissions moto",
        "Protection anti-usure élevée",
        "Changements précis",
        "Résistance conditions extrêmes",
        "Stabilité mécanique",
        "Compatible joints transmission"
      ],
      benefits: [
        "Boîte de vitesses souple",
        "Protection engrenages optimale",
        "Durée de vie prolongée",
        "Précision changements vitesse"
      ],
      applications: [
        "Boîtes vitesses moto",
        "Transmissions finales",
        "Cardans moto",
        "Réducteurs",
        "Maintenance transmission"
      ]
    },
    "chain-lube-off-road": {
      id: "chain-lube-off-road",
      name: "CHAIN LUBE OFF ROAD",
      category: "Moto",
      categoryPath: "moto",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&q=80",
      description: "Lubrifiant chaîne tout-terrain extrême",
      detailedDescription: "DINOIL® CHAIN LUBE OFF ROAD est un lubrifiant spécialement conçu pour les conditions extrêmes du tout-terrain. Sa formulation résistante adhère fortement même dans la boue, sable et projections, offrant une protection continue de la chaîne.\n\nCe produit est idéal pour le motocross, enduro et trail o�� les conditions d'utilisation sont particulièrement sévères.",
      features: [
        "Résistance conditions extrêmes",
        "Adhérence forte boue/sable",
        "Protection continue",
        "Résistance projections",
        "Compatible joints tous types",
        "Application par tous temps"
      ],
      benefits: [
        "Lubrification en conditions sévères",
        "Protection chaîne maximale",
        "Résistance au lavage",
        "Performance constante off-road"
      ],
      applications: [
        "Motocross et enduro",
        "Trail et aventure",
        "Quads tout-terrain",
        "Compétition off-road",
        "Conditions boue/sable"
      ]
    },
    "fork-oil-expert": {
      id: "fork-oil-expert",
      name: "FORK OIL EXPERT",
      category: "Moto",
      categoryPath: "moto",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&q=80",
      description: "Huile fourche moto haute précision",
      detailedDescription: "DINOIL® FORK OIL EXPERT est une huile de fourche haute précision spécialement formulée pour les suspensions avant moto. Sa viscosité contrôlée assure un amortissement progressif et reproductible pour un comportement routier optimal.\n\nDisponible en plusieurs viscosités pour s'adapter aux différents réglages et styles de conduite.",
      features: [
        "Viscosité haute précision",
        "Amortissement progressif",
        "Stabilité thermique",
        "Résistance moussage",
        "Protection joints fourche",
        "Plusieurs viscosités disponibles"
      ],
      benefits: [
        "Comportement fourche optimal",
        "Amortissement reproductible",
        "Confort et précision",
        "Durée de vie joints prolongée"
      ],
      applications: [
        "Fourches télescopiques moto",
        "Suspensions sport",
        "Réglages personnalisés",
        "Maintenance fourche",
        "Compétition et loisir"
      ]
    },
    "2t-mix": {
      id: "2t-mix",
      name: "2T MIX",
      category: "Moto",
      categoryPath: "moto",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&q=80",
      description: "Huile moteur 2T mélange haute qualité",
      detailedDescription: "DINOIL® 2T MIX est une huile moteur 2 temps haute qualité conçue pour le mélange avec l'essence. Elle offre une lubrification optimale des moteurs 2T tout en minimisant les dépôts et fumées d'échappement.\n\nSa formulation moderne assure une combustion propre et protège efficacement contre l'usure et le grippage.",
      features: [
        "Formulation 2T moderne",
        "Combustion propre",
        "Minimise dépôts et fumées",
        "Protection grippage",
        "Mélange facile essence",
        "Dosage précis"
      ],
      benefits: [
        "Moteur 2T protégé",
        "Échappement plus propre",
        "Performances constantes",
        "Démarrage facilité"
      ],
      applications: [
        "Moteurs 2T moto/scooter",
        "Motocross et enduro 2T",
        "Petite mécanique 2T",
        "Mélange manuel",
        "Tous carburants sans plomb"
      ]
    },
    "brake-fluid-racing": {
      id: "brake-fluid-racing",
      name: "BRAKE FLUID RACING",
      category: "Moto",
      categoryPath: "moto",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&q=80",
      description: "Liquide de frein racing très haut point ébullition",
      detailedDescription: "DINOIL® BRAKE FLUID RACING est un liquide de frein hautes performances développé pour la compétition moto. Il offre un point d'ébullition extrêmement élevé et une résistance exceptionnelle au fading pour un freinage constant en conditions extrêmes.\n\nCe produit est indispensable pour la piste, compétition et conduite sportive intensive.",
      features: [
        "Point ébullition très élevé",
        "Résistance fading extrême",
        "Spécial compétition",
        "Réponse freinage immédiate",
        "Stabilité thermique maximale",
        "Compatible systèmes racing"
      ],
      benefits: [
        "Freinage constant en compétition",
        "Absence de fading",
        "Sécurité maximale piste",
        "Performance reproductible"
      ],
      applications: [
        "Compétition moto piste",
        "Conduite sportive intensive",
        "Systèmes freinage racing",
        "Trackdays",
        "Motos haute performance"
      ]
    },
    "coolant-factory-line": {
      id: "coolant-factory-line",
      name: "COOLANT FACTORY LINE",
      category: "Moto",
      categoryPath: "moto",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&q=80",
      description: "Liquide refroidissement moto haute performance",
      detailedDescription: "DINOIL® COOLANT FACTORY LINE est un liquide de refroidissement spécialement formulé pour les moteurs moto haute performance. Il offre une protection optimale contre la surchauffe tout en préservant les composants du circuit de refroidissement.\n\nSa formulation résiste aux températures extrêmes et assure un refroidissement efficace même en usage intensif.",
      features: [
        "Spécial moteurs moto",
        "Protection surchauffe optimale",
        "Résistance températures extrêmes",
        "Compatible métaux légers",
        "Anti-corrosion renforcé",
        "Refroidissement efficace"
      ],
      benefits: [
        "Température moteur stable",
        "Protection radiateur optimale",
        "Performance refroidissement",
        "Durée de vie circuit prolongée"
      ],
      applications: [
        "Motos refroidies liquide",
        "Moteurs haute performance",
        "Usage piste et route",
        "Compétition moto",
        "Maintenance cooling"
      ]
    },

    // ========== INDUSTRIE PRODUCTS ==========
    "tekma-mega-x-15w40": {
      id: "tekma-mega-x-15w40",
      name: "TEKMA MEGA X 15W40",
      category: "Industrie",
      categoryPath: "industrie",
      image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=400&q=80",
      description: "Huile moteur poids lourds haute performance",
      detailedDescription: "DINOIL® TEKMA MEGA X 15W-40 est une huile moteur haute performance pour véhicules industriels et poids lourds. Elle offre une protection exceptionnelle contre l'usure et des intervalles de vidange prolongés, réduisant les coûts d'exploitation.\n\nSa formulation répond aux normes Euro 6 les plus récentes et s'adapte aux conditions d'utilisation les plus sévères du transport routier.",
      features: [
        "Haute performance poids lourds",
        "Protection moteur exceptionnelle",
        "Intervalles de vidange étendus",
        "Résistance aux conditions sévères",
        "Compatible moteurs Euro 6",
        "Économies d'exploitation"
      ],
      benefits: [
        "Réduction coûts maintenance",
        "Disponibilité véhicule maximale",
        "Protection moteur longue durée",
        "Performances constantes"
      ],
      applications: [
        "Poids lourds longue distance",
        "Transport routier",
        "Véhicules industriels",
        "Moteurs Euro 6",
        "Exploitation intensive"
      ]
    },
    "hydraulic-hm-46": {
      id: "hydraulic-hm-46",
      name: "HYDRAULIC HM 46",
      category: "Industrie",
      categoryPath: "industrie",
      image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=400&q=80",
      description: "Huile hydraulique industrielle haute qualité",
      detailedDescription: "DINOIL® HYDRAULIC HM 46 est une huile hydraulique industrielle haute qualité formulée pour les systèmes hydrauliques industriels fonctionnant dans des conditions normales à sévères. Elle offre d'excellentes propriétés anti-usure et une stabilité thermique remarquable.\n\nCette huile assure un fonctionnement fiable des systèmes hydrauliques et prolonge la durée de vie des composants.",
      features: [
        "Haute qualité industrielle",
        "Protection anti-usure optimale",
        "Stabilité thermique excellente",
        "Résistance à l'oxydation",
        "Compatible tous systèmes hydrauliques",
        "Longue durée de service"
      ],
      benefits: [
        "Fiabilité systèmes hydrauliques",
        "Réduction usure composants",
        "Maintenance réduite",
        "Performances constantes"
      ],
      applications: [
        "Systèmes hydrauliques industriels",
        "Machines-outils",
        "Équipements de manutention",
        "Presses hydrauliques",
        "Applications mobiles"
      ]
    },
    "tekma-diesel-10w40": {
      id: "tekma-diesel-10w40",
      name: "TEKMA DIESEL 10W40",
      category: "Industrie",
      categoryPath: "industrie",
      image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=400&q=80",
      description: "Huile moteur diesel industriel polyvalente",
      detailedDescription: "DINOIL® TEKMA DIESEL 10W-40 est une huile moteur diesel polyvalente pour applications industrielles et véhicules utilitaires. Elle offre une protection équilibrée et s'adapte à différents types de moteurs diesel dans des conditions d'utilisation variées.\n\nSa formulation moderne assure une bonne protection tout en maintenant un coût d'utilisation maîtrisé.",
      features: [
        "Formulation diesel polyvalente",
        "Protection équilibrée",
        "Multi-applications",
        "Stabilité service prolongé",
        "Compatible FAP",
        "Rapport qualité-prix optimal"
      ],
      benefits: [
        "Flexibilité d'utilisation",
        "Protection moteur fiable",
        "Coûts maîtrisés",
        "Simplicité de gestion"
      ],
      applications: [
        "Véhicules utilitaires",
        "Matériel agricole",
        "Engins de chantier",
        "Groupes électrogènes",
        "Flottes mixtes"
      ]
    },
    "transmission-gear-8-75w80": {
      id: "transmission-gear-8-75w80",
      name: "TRANSMISSION GEAR 8 75W80",
      category: "Industrie",
      categoryPath: "industrie",
      image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=400&q=80",
      description: "Huile transmission industrielle synthétique",
      detailedDescription: "DINOIL® TRANSMISSION GEAR 8 75W-80 est une huile de transmission synthétique haute performance pour boîtes de vitesses et ponts industriels. Elle offre une protection exceptionnelle contre l'usure et assure des changements précis même en conditions sévères.\n\nSa formulation synthétique garantit une longue durée de service et réduit les coûts de maintenance.",
      features: [
        "Synthétique haute performance",
        "Protection transmission optimale",
        "Changements précis",
        "Durée de service étendue",
        "Résistance conditions sévères",
        "Économies maintenance"
      ],
      benefits: [
        "Transmissions fiables",
        "Précision manœuvres",
        "Coûts réduits",
        "Disponibilité équipement"
      ],
      applications: [
        "Transmissions poids lourds",
        "Engins de chantier",
        "Matériel agricole",
        "Équipements industriels",
        "Applications sévères"
      ]
    },
    "hydraulic-hm-68": {
      id: "hydraulic-hm-68",
      name: "HYDRAULIC HM 68",
      category: "Industrie",
      categoryPath: "industrie",
      image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=400&q=80",
      description: "Huile hydraulique industrielle viscosité élevée",
      detailedDescription: "DINOIL® HYDRAULIC HM 68 est une huile hydraulique de viscosité élevée conçue pour les systèmes hydrauliques industriels fonctionnant sous forte charge et haute pression. Elle maintient ses propriétés lubrifiantes même dans les conditions les plus exigeantes.\n\nCette huile est particulièrement adaptée aux équipements lourds et applications haute pression.",
      features: [
        "Viscosité élevée ISO 68",
        "Haute pression et charge",
        "Propriétés anti-usure",
        "Stabilité au cisaillement",
        "Résistance moussage",
        "Protection corrosion"
      ],
      benefits: [
        "Performance haute pression",
        "Protection composants lourds",
        "Fiabilité système",
        "Durée de service étendue"
      ],
      applications: [
        "Systèmes haute pression",
        "Équipements lourds",
        "Presses industrielles",
        "Machines forestières",
        "Applications exigeantes"
      ]
    },
    "compressor-oil-100": {
      id: "compressor-oil-100",
      name: "COMPRESSOR OIL 100",
      category: "Industrie",
      categoryPath: "industrie",
      image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=400&q=80",
      description: "Huile compresseurs industriels haute performance",
      detailedDescription: "DINOIL® COMPRESSOR OIL 100 est une huile spécialement formulée pour les compresseurs d'air industriels rotatifs et à vis. Elle résiste aux hautes températures de compression et offre une excellente séparation air/huile pour un fonctionnement optimal.\n\nSa formulation assure une longue durée de service et protège efficacement contre l'usure et l'oxydation.",
      features: [
        "Spécial compresseurs industriels",
        "Résistance hautes températures",
        "Excellente séparation air/huile",
        "Protection anti-usure",
        "Stabilité oxydation",
        "Longue durée service"
      ],
      benefits: [
        "Compresseur fiable",
        "Air comprimé de qualité",
        "Maintenance réduite",
        "Économies exploitation"
      ],
      applications: [
        "Compresseurs rotatifs",
        "Compresseurs à vis",
        "Air comprimé industriel",
        "Stations de compression",
        "Maintenance préventive"
      ]
    },
    "cutting-oil-bio": {
      id: "cutting-oil-bio",
      name: "CUTTING OIL BIO",
      category: "Industrie",
      categoryPath: "industrie",
      image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=400&q=80",
      description: "Huile de coupe biodégradable industrielle",
      detailedDescription: "DINOIL® CUTTING OIL BIO est une huile de coupe biodégradable spécialement développée pour l'usinage des métaux. Elle offre d'excellentes propriétés lubrifiantes et de refroidissement tout en respectant l'environnement.\n\nSa formulation biodégradable facilite l'élimination et réduit l'impact environnemental sans compromettre les performances d'usinage.",
      features: [
        "Formulation biodégradable",
        "Excellentes propriétés lubrifiantes",
        "Refroidissement efficace",
        "Respectueux environnement",
        "Élimination facilitée",
        "Performances usinage optimales"
      ],
      benefits: [
        "Usinage de qualité",
        "Impact environnemental réduit",
        "Élimination simplifiée",
        "Conformité réglementaire"
      ],
      applications: [
        "Usinage métaux",
        "Machines-outils",
        "Ateliers mécaniques",
        "Industries respectueuses",
        "Applications écologiques"
      ]
    },
    "marine-grease-ep2": {
      id: "marine-grease-ep2",
      name: "MARINE GREASE EP2",
      category: "Industrie",
      categoryPath: "industrie",
      image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=400&q=80",
      description: "Graisse marine haute pression industrielle",
      detailedDescription: "DINOIL® MARINE GREASE EP2 est une graisse marine haute pression spécialement formulée pour les applications industrielles en environnement marin. Elle résiste à l'eau de mer et protège efficacement contre la corrosion saline.\n\nSa formulation extrême pression assure une lubrification fiable des mécanismes soumis à de fortes charges en milieu marin agressif.",
      features: [
        "Résistance eau de mer",
        "Protection corrosion saline",
        "Propriétés extrême pression",
        "Adhérence exceptionnelle",
        "Stabilité mécanique",
        "Pompage facilité"
      ],
      benefits: [
        "Mécanismes marins protégés",
        "Résistance corrosion",
        "Fiabilité applications marine",
        "Maintenance réduite"
      ],
      applications: [
        "Équipements portuaires",
        "Grues marines",
        "Treuils et palans",
        "Roulements marins",
        "Industrie offshore"
      ]
    },
    "thermal-oil-32": {
      id: "thermal-oil-32",
      name: "THERMAL OIL 32",
      category: "Industrie",
      categoryPath: "industrie",
      image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=400&q=80",
      description: "Huile caloporteuse industrielle haute température",
      detailedDescription: "DINOIL® THERMAL OIL 32 est une huile caloporteuse spécialement formulée pour les systèmes de chauffage industriel fonctionnant à haute température. Elle offre une excellente stabilité thermique et un transfert de chaleur optimal.\n\nSa formulation résiste à la dégradation thermique et assure un fonctionnement fiable des installations de chauffage industriel.",
      features: [
        "Spécial applications thermiques",
        "Stabilité haute température",
        "Transfert chaleur optimal",
        "Résistance dégradation",
        "Longue durée service",
        "Sécurité exploitation"
      ],
      benefits: [
        "Chauffage industriel efficace",
        "Système thermique fiable",
        "Coûts réduits",
        "Sécurité renforcée"
      ],
      applications: [
        "Systèmes chauffage industriel",
        "Transfert thermique",
        "Processus haute température",
        "Chaudières thermiques",
        "Industries chimiques"
      ]
    },

    // ========== MARINE PRODUCTS ==========
    "outboard-tech-4t-10w30": {
      id: "outboard-tech-4t-10w30",
      name: "OUTBOARD TECH 4T 10W30",
      category: "Marine",
      categoryPath: "marine",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80",
      description: "Huile moteur hors-bord 4 temps marine",
      detailedDescription: "DINOIL® OUTBOARD TECH 4T 10W-30 est une huile moteur spécialement formulée pour les moteurs hors-bord 4 temps. Elle résiste à la corrosion marine et offre une protection optimale en environnement marin agressif avec eau salée.\n\nSa formulation marine spécifique assure une lubrification fiable même lors d'immersions prolongées et protège contre la corrosion saline.",
      features: [
        "Spécial moteurs hors-bord 4T",
        "Résistance corrosion marine",
        "Protection optimale eau salée",
        "Stabilité thermique marine",
        "Compatible tous constructeurs",
        "Durabilité environnement marin"
      ],
      benefits: [
        "Moteur hors-bord protégé",
        "Résistance milieu salin",
        "Performance marine constante",
        "Durée de vie prolongée"
      ],
      applications: [
        "Moteurs hors-bord 4T",
        "Bateaux de plaisance",
        "Embarcations professionnelles",
        "Navigation côtière",
        "Usage marin intensif"
      ]
    },
    "grease-marine-tech": {
      id: "grease-marine-tech",
      name: "GREASE MARINE TECH",
      category: "Marine",
      categoryPath: "marine",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80",
      description: "Graisse marine résistante à l'eau de mer",
      detailedDescription: "DINOIL® GREASE MARINE TECH est une graisse marine haute performance spécialement conçue pour résister à l'eau de mer et protéger les mécanismes marins contre la corrosion. Son adhérence exceptionnelle assure une lubrification continue même sous l'eau.\n\nCette graisse est indispensable pour tous les équipements navals exposés aux embruns et immersions marines.",
      features: [
        "Haute résistance eau de mer",
        "Protection anticorrosion marine",
        "Adhérence exceptionnelle",
        "Résistance au délavage",
        "Compatible tous mécanismes marins",
        "Longue durée de service"
      ],
      benefits: [
        "Mécanismes marins protégés",
        "Lubrification sous-marine",
        "Résistance corrosion saline",
        "Maintenance marine réduite"
      ],
      applications: [
        "Roulements d'étambot",
        "Treuils de pont",
        "Mécanismes gouvernail",
        "Équipements pont",
        "Matériel de pêche"
      ]
    },
    "outboard-2t-mix": {
      id: "outboard-2t-mix",
      name: "OUTBOARD 2T MIX",
      category: "Marine",
      categoryPath: "marine",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80",
      description: "Huile moteur hors-bord 2 temps marine",
      detailedDescription: "DINOIL® OUTBOARD 2T MIX est une huile moteur 2 temps spécialement développée pour les moteurs hors-bord marins. Elle offre une combustion propre et une protection anti-corrosion renforcée pour l'environnement marin agressif.\n\nSa formulation marine assure une lubrification optimale et minimise les dépôts dans la chambre de combustion.",
      features: [
        "Spécial hors-bord 2T marine",
        "Combustion propre marine",
        "Protection anti-corrosion",
        "Minimise dépôts combustion",
        "Mélange facile carburant",
        "Biodégradabilité améliorée"
      ],
      benefits: [
        "Moteur 2T marin protégé",
        "Échappement propre",
        "Démarrage facilité",
        "Respect environnement marin"
      ],
      applications: [
        "Moteurs hors-bord 2T",
        "Jet-skis",
        "Annexes pneumatiques",
        "Pêche professionnelle",
        "Navigation côtière"
      ]
    },
    "marine-gear-80w90": {
      id: "marine-gear-80w90",
      name: "MARINE GEAR 80W90",
      category: "Marine",
      categoryPath: "marine",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80",
      description: "Huile transmission marine résistante",
      detailedDescription: "DINOIL® MARINE GEAR 80W-90 est une huile de transmission marine spécialement formulée pour les inverseurs et réducteurs marins. Elle résiste à la contamination par l'eau de mer et maintient ses propriétés lubrifiantes en environnement marin.\n\nSa protection anti-corrosion assure la longévité des engrenages et mécanismes de transmission marine.",
      features: [
        "Spécial transmissions marines",
        "Résistance contamination eau",
        "Protection engrenages marine",
        "Anti-corrosion renforcé",
        "Stabilité émulsion",
        "Démoussage efficace"
      ],
      benefits: [
        "Transmissions marines fiables",
        "Protection contamination",
        "Durée de vie prolongée",
        "Maintenance marine réduite"
      ],
      applications: [
        "Inverseurs marins",
        "Réducteurs hors-bord",
        "Transmissions inboard",
        "Mécanismes marine",
        "Bateaux tous types"
      ]
    },
    "hydraulic-marine-hm": {
      id: "hydraulic-marine-hm",
      name: "HYDRAULIC MARINE HM",
      category: "Marine",
      categoryPath: "marine",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80",
      description: "Huile hydraulique marine anti-corrosion",
      detailedDescription: "DINOIL® HYDRAULIC MARINE HM est une huile hydraulique spécialement développée pour les systèmes hydrauliques marins. Elle offre une protection anti-corrosion exceptionnelle et résiste à la contamination par l'eau de mer.\n\nSa formulation marine assure un fonctionnement fiable des équipements hydrauliques même en environnement salin agressif.",
      features: [
        "Formulation hydraulique marine",
        "Protection anti-corrosion marine",
        "Résistance eau de mer",
        "Propriétés anti-usure",
        "Stabilité hydrolytique",
        "Démoussage rapide"
      ],
      benefits: [
        "Hydraulique marine fiable",
        "Protection corrosion saline",
        "Système hydraulique durable",
        "Performance constante"
      ],
      applications: [
        "Systèmes hydrauliques bateau",
        "Vérins de trim",
        "Direction hydraulique",
        "Équipements pont",
        "Matériel de pêche"
      ]
    },
    "marine-coolant-long-life": {
      id: "marine-coolant-long-life",
      name: "MARINE COOLANT LONG LIFE",
      category: "Marine",
      categoryPath: "marine",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80",
      description: "Liquide refroidissement marine longue durée",
      detailedDescription: "DINOIL® MARINE COOLANT LONG LIFE est un liquide de refroidissement spécialement formulé pour les moteurs marins. Il offre une protection anti-corrosion renforcée contre l'eau de mer et les embruns salins qui peuvent contaminer le circuit de refroidissement.\n\nSa durée de service prolongée réduit la maintenance et assure une protection continue en environnement marin.",
      features: [
        "Spécial moteurs marins",
        "Protection anti-corrosion marine",
        "Résistance contamination saline",
        "Longue durée service",
        "Compatible métaux marins",
        "Refroidissement efficace"
      ],
      benefits: [
        "Moteur marin protégé",
        "Circuit refroidissement durable",
        "Maintenance réduite",
        "Fiabilité navigation"
      ],
      applications: [
        "Moteurs inboard/outboard",
        "Circuits refroidissement fermé",
        "Refroidissement auxiliaire",
        "Bateaux professionnels",
        "Navigation hauturière"
      ]
    },
    "marine-brake-fluid": {
      id: "marine-brake-fluid",
      name: "MARINE BRAKE FLUID",
      category: "Marine",
      categoryPath: "marine",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80",
      description: "Liquide frein marine résistant corrosion",
      detailedDescription: "DINOIL® MARINE BRAKE FLUID est un liquide de frein spécialement conçu pour les applications marines où l'exposition aux embruns et à l'humidité saline est constante. Il maintient ses propriétés de freinage même en environnement marin agressif.\n\nSa résistance à la corrosion protège les systèmes de freinage des remorques de bateaux et équipements marins.",
      features: [
        "Résistance environnement marin",
        "Protection anti-corrosion",
        "Maintien propriétés freinage",
        "Compatible systèmes marins",
        "Résistance humidité saline",
        "Stabilité longue durée"
      ],
      benefits: [
        "Freinage sûr en milieu marin",
        "Protection système frein",
        "Fiabilité conditions marines",
        "Sécurité transport maritime"
      ],
      applications: [
        "Remorques bateaux",
        "Équipements portuaires",
        "Systèmes frein marins",
        "Matériel de manutention",
        "Transport maritime"
      ]
    },
    "anti-corrosion-spray": {
      id: "anti-corrosion-spray",
      name: "ANTI-CORROSION SPRAY",
      category: "Marine",
      categoryPath: "marine",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80",
      description: "Spray anti-corrosion marine protection",
      detailedDescription: "DINOIL® ANTI-CORROSION SPRAY est un produit de protection spécialement développé pour prévenir la corrosion marine. Il forme un film protecteur durable qui résiste aux embruns salins et protège les métaux exposés en environnement marin.\n\nSon application facile en spray permet une protection rapide et efficace de tous les équipements métalliques marins.",
      features: [
        "Protection anti-corrosion marine",
        "Film protecteur durable",
        "Résistance embruns salins",
        "Application spray facile",
        "Pénétration excellente",
        "Protection longue durée"
      ],
      benefits: [
        "Métaux marins protégés",
        "Prévention corrosion saline",
        "Application simple rapide",
        "Maintenance préventive"
      ],
      applications: [
        "Équipements pont",
        "Visserie marine",
        "Ferrures inox",
        "Mécanismes exposés",
        "Protection préventive"
      ]
    },
    "waterproof-grease": {
      id: "waterproof-grease",
      name: "WATERPROOF GREASE",
      category: "Marine",
      categoryPath: "marine",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80",
      description: "Graisse étanche marine haute adhérence",
      detailedDescription: "DINOIL® WATERPROOF GREASE est une graisse étanche spécialement formulée pour les applications marines nécessitant une étanchéité parfaite. Elle adhère fortement même sous l'eau et maintient ses propriétés lubrifiantes lors d'immersions prolongées.\n\nCette graisse est indispensable pour tous les mécanismes marins devant fonctionner sous l'eau ou en immersion.",
      features: [
        "Étanchéité parfaite",
        "Adhérence sous-marine",
        "Lubrification immersion",
        "Résistance délavage",
        "Protection corrosion",
        "Stabilité mécanique"
      ],
      benefits: [
        "Mécanismes étanches",
        "Lubrification sous-marine",
        "Protection immersion",
        "Fiabilité marine absolue"
      ],
      applications: [
        "Roulements étanches",
        "Mécanismes immergés",
        "Équipements sous-marins",
        "Systèmes étanchéité",
        "Applications offshore"
      ]
    }
  };

  // Get similar products based on category
  const getSimilarProducts = (currentCategory: string, currentProductId: string): SimilarProduct[] => {
    const categoryProducts = Object.values(productData).filter(p => p.categoryPath === currentCategory && p.id !== currentProductId);
    return categoryProducts.slice(0, 4).map(p => ({
      id: p.id,
      name: p.name,
      image: p.image,
      category: p.categoryPath
    }));
  };

  const product = productData[productId || ""];
  const similarProducts = product ? getSimilarProducts(currentCategory, productId || "") : [];

  // Get category display name
  const getCategoryDisplayName = (categoryPath: string): string => {
    const categoryNames: Record<string, string> = {
      'additifs': 'Additifs',
      'entretien': 'Entretien',
      'automobile': 'Automobile',
      'moto': 'Moto',
      'industrie': 'Industrie',
      'marine': 'Marine'
    };
    return categoryNames[categoryPath] || categoryPath;
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="py-20 text-center">
          <h1 className="text-4xl font-bold text-[#02173C] mb-4">Produit non trouvé</h1>
          <Link to={`/produits/${currentCategory}`} className="text-[#BE941B] hover:underline">
            Retour aux {getCategoryDisplayName(currentCategory)}
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#02173C] to-[#02173C]/90 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80" 
            alt="Dinoil Products"
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
            <Link to={`/produits/${currentCategory}`} className="text-gray-300 hover:text-white transition-colors">
              {getCategoryDisplayName(currentCategory)}
            </Link>
            <ChevronRight size={16} className="text-gray-400" />
            <span className="text-[#BE941B] font-medium">{product.name}</span>
          </nav>

          <div className="text-center">
            <div className="inline-flex items-center bg-[#BE941B]/20 border border-[#BE941B]/30 rounded-full px-8 py-3 mb-8">
              <Award className="w-5 h-5 text-[#BE941B] mr-2" />
              <span className="text-[#BE941B] font-bold text-sm uppercase tracking-widest">Dinoil {product.category}</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              {product.name}
            </h1>
            
            <div className="w-32 h-1 bg-gradient-to-r from-[#BE941B] via-white to-[#BE941B] mx-auto mb-8 rounded-full"></div>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {product.description}
            </p>
          </div>
        </div>
      </section>

      {/* Product Information Section */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
            
            {/* Product Image */}
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-[#02173C] to-[#02173C]/90 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#BE941B]/10 rounded-full blur-2xl"></div>
                
                <div className="relative z-10 text-center mb-8">
                  <div className="inline-flex items-center bg-[#BE941B]/20 border border-[#BE941B]/30 rounded-full px-6 py-2 mb-4">
                    <Star className="w-4 h-4 text-[#BE941B] mr-2" />
                    <span className="text-[#BE941B] font-bold text-sm uppercase tracking-widest">Dinoil Premium</span>
                  </div>
                  <h3 className="text-xl font-black mb-2">
                    {product.name}
                  </h3>
                </div>
                
                <div className="aspect-square bg-white/10 rounded-2xl flex items-center justify-center border border-[#BE941B]/20 backdrop-blur-sm">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-[#02173C] mb-6">
                  Description Produit
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#BE941B] to-[#02173C] mb-6 rounded-full"></div>
              </div>

              {/* Detailed Description */}
              <div className="space-y-4">
                {product.detailedDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-600 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Features */}
              {product.features && (
                <div className="bg-gradient-to-br from-[#BE941B]/5 to-[#02173C]/5 rounded-2xl p-6 border border-[#BE941B]/20">
                  <h3 className="text-xl font-black text-[#02173C] mb-4 flex items-center">
                    <Shield className="w-5 h-5 text-[#BE941B] mr-2" />
                    Caractéristiques Techniques
                  </h3>
                  <ul className="space-y-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-5 h-5 bg-[#BE941B] rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <Check size={12} className="text-white" />
                        </div>
                        <span className="text-gray-700 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact"
                  className="group bg-[#BE941B] hover:bg-[#02173C] px-8 py-4 text-white transition-all duration-300 font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
                >
                  <span className="flex items-center justify-center">
                    <Phone size={18} className="mr-2" />
                    Nous Contacter
                  </span>
                </Link>
                <button className="group border-2 border-[#02173C] text-[#02173C] hover:bg-[#02173C] hover:text-white px-8 py-4 transition-all duration-300 font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  <span className="flex items-center justify-center">
                    <Download size={18} className="mr-2" />
                    Fiche Technique
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Applications Section */}
      <section className="py-20 bg-gradient-to-r from-[#02173C] to-[#02173C]/95">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            
            {/* Benefits */}
            {product.benefits && (
              <div className="text-white">
                <div className="inline-flex items-center bg-[#BE941B]/20 border border-[#BE941B]/30 rounded-full px-6 py-2 mb-8">
                  <Zap className="w-4 h-4 text-[#BE941B] mr-2" />
                  <span className="text-[#BE941B] font-bold text-sm uppercase tracking-widest">Avantages</span>
                </div>
                
                <h3 className="text-3xl font-black mb-6 leading-tight">
                  Bénéfices <span className="text-[#BE941B]">Produit</span>
                </h3>
                
                <div className="w-24 h-1 bg-[#BE941B] mb-8 rounded-full"></div>
                
                <div className="space-y-4">
                  {product.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-6 h-6 bg-[#BE941B] rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                        <Check size={14} className="text-white" />
                      </div>
                      <span className="text-gray-300 leading-relaxed">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Applications */}
            {product.applications && (
              <div className="text-white">
                <div className="inline-flex items-center bg-[#BE941B]/20 border border-[#BE941B]/30 rounded-full px-6 py-2 mb-8">
                  <Star className="w-4 h-4 text-[#BE941B] mr-2" />
                  <span className="text-[#BE941B] font-bold text-sm uppercase tracking-widest">Applications</span>
                </div>
                
                <h3 className="text-3xl font-black mb-6 leading-tight">
                  Domaines <span className="text-[#BE941B]">d'Usage</span>
                </h3>
                
                <div className="w-24 h-1 bg-[#BE941B] mb-8 rounded-full"></div>
                
                <div className="space-y-4">
                  {product.applications.map((application, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-6 h-6 bg-[#BE941B] rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                        <ArrowRight size={14} className="text-white" />
                      </div>
                      <span className="text-gray-300 leading-relaxed">{application}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>


      {/* Find Dealer Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#02173C] mb-6">
              Réseau de <span className="bg-gradient-to-r from-[#BE941B] to-[#02173C] bg-clip-text text-transparent">Distribution</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#BE941B] to-[#02173C] mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trouvez un revendeur PROMOKAR près de chez vous pour vous procurer {product.name}
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
                      Plus de 115 points de vente
                    </p>
                  </div>
                  
                  {/* Tunisia Map Placeholder */}
                  <div className="aspect-square bg-[#BE941B]/10 rounded-2xl flex items-center justify-center border border-[#BE941B]/20 backdrop-blur-sm">
                    <div className="text-center">
                      <MapPin className="w-20 h-20 text-[#BE941B] mx-auto mb-4" />
                      <p className="text-white font-medium">Carte Interactive</p>
                      <p className="text-gray-300 text-sm">Tunisie entière</p>
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
                  Notre réseau de distribution couvre l'ensemble du territoire tunisien. 
                  Nos revendeurs qualifiés sont à votre disposition pour vous conseiller 
                  et vous fournir {product.name}.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-[#BE941B]/5 to-[#02173C]/5 rounded-2xl p-6 border border-[#BE941B]/20">
                <h4 className="font-bold text-[#02173C] mb-4">Services Disponibles</h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <Check size={16} className="text-[#BE941B] mr-3" />
                    Conseil technique personnalisé
                  </li>
                  <li className="flex items-center">
                    <Check size={16} className="text-[#BE941B] mr-3" />
                    Stock permanent disponible
                  </li>
                  <li className="flex items-center">
                    <Check size={16} className="text-[#BE941B] mr-3" />
                    Formation et support technique
                  </li>
                  <li className="flex items-center">
                    <Check size={16} className="text-[#BE941B] mr-3" />
                    Garantie et service après-vente
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

      {/* Back Navigation */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="container mx-auto px-6 text-center">
          <Link
            to={`/produits/${currentCategory}`}
            className="group inline-flex items-center bg-white hover:bg-[#02173C] border-2 border-[#02173C] text-[#02173C] hover:text-white px-8 py-4 rounded-2xl transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <ChevronLeft size={20} className="mr-2 transform group-hover:-translate-x-1 transition-transform duration-300" />
            <span>Retour aux {getCategoryDisplayName(currentCategory)}</span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
