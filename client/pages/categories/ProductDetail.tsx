import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Link, useParams, useLocation } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowRight, Trophy, Shield, Star, Award } from "lucide-react";

export default function ProductDetail() {
  const { productId } = useParams();
  const location = useLocation();

  // Determine category based on URL
  const isMotoProduct = location.pathname.includes('/moto/');
  const isMarineProduct = location.pathname.includes('/motos-moteurs-marins/');
  const isProfessionalProduct = location.pathname.includes('/professional-line/');
  const isMultigradeProduct = location.pathname.includes('/multigrade-line/');
  const categoryPath = isMotoProduct ? '/produits/competition-line/moto' :
                      isMarineProduct ? '/produits/competition-line/motos-moteurs-marins' :
                      isProfessionalProduct ? '/produits/professional-line/vehicules' :
                      isMultigradeProduct ? '/produits/multigrade-line/vehicules' :
                      '/produits/competition-line/vehicules';
  const categoryName = isMotoProduct ? 'Competition Line - Moto' :
                      isMarineProduct ? 'Competition Line - Motos et Moteurs Marins' :
                      isProfessionalProduct ? 'Professional Line - Véhicules' :
                      isMultigradeProduct ? 'Multigrade Line - Véhicules' :
                      'Competition Line - Véhicules';

  // Product data - this could be moved to a context or external data source later
  const productData: { [key: string]: any } = {
    "dinoil-daytona-5w50": {
      name: "DINOIL DAYTONA 5W/50",
      image: "https://cdn.builder.io/api/v1/image/assets%2F1ca0949e89764f508ab3c74fe08ee0a0%2F1e27fc02201c4e54a6f85d1d9b954d5b?format=webp&width=800",
      description: "DINOIL DAYTONA 5W/50 est conçu avec une formulation unique pour fournir une protection maximale du moteur. Elle est entièrement compatible avec toutes les autres huiles synthétiques conventionnelles. DINOIL DAYTONA 5W/50 a été testée dans les conditions de charge les plus sévères, dans les moteurs de compétition et pour répondre aux demandes des pilotes les plus exigeants. Il répond aux exigences OEM les plus strictes.",
      category: "Competition Line - Véhicules",
      features: [
        "Protection maximale du moteur",
        "Compatible avec toutes les huiles synthétiques",
        "Testée dans des conditions de charge sévères",
        "Conçue pour les moteurs de compétition",
        "Répond aux exigences OEM les plus strictes"
      ]
    },
    "dinoil-daytona-10w60": {
      name: "DINOIL DAYTONA 10W/60",
      image: "https://cdn.builder.io/api/v1/image/assets%2F1ca0949e89764f508ab3c74fe08ee0a0%2Fe9cc2c3fa4f04081b10cac03dba87a1b?format=webp&width=800",
      description: "DINOIL DAYTONA 10W/60 est une huile moteur entièrement synthétique, à faible frottement, développée avec un mélange de base PAO/ESTERE. Conçu spécifiquement pour la course et la compétition hors route. DINOIL 10W/60 DAYTONA est un lubrifiant adapté à une large gamme de moteurs modernes aux performances sportives. Ce produit a été testé dans des moteurs de course, dans les conditions les plus sévères, pour répondre aux demandes des pilotes les plus exigeants. Il répond aux exigences OEM les plus strictes.",
      category: "Competition Line - Véhicules",
      features: [
        "Huile moteur entièrement synthétique",
        "Formulation à faible frottement PAO/ESTERE",
        "Conçu pour la course et compétition hors route",
        "Adapté aux moteurs modernes sportifs",
        "Testé dans des conditions de course sévères",
        "Répond aux exigences OEM les plus strictes"
      ]
    },
    "dinoil-daytona-15w50": {
      name: "DINOIL DAYTONA 15W/50",
      image: "https://cdn.builder.io/api/v1/image/assets%2F1ca0949e89764f508ab3c74fe08ee0a0%2F76fadbd49e8648dea32fdbc1c961a04d?format=webp&width=800",
      description: "DINOIL DAYTONA 15W/50 est tout simplement l'une des meilleures huiles de haute qualité. C'est un lubrifiant développé à partir d'un mélange de bases PAO/ESTER entièrement synthétiques et créé pour répondre aux besoins des conducteurs les plus exigeants. Il peut être utilisé dans de nombreuses voitures modernes et convient particulièrement aux moteurs de course à haute performance. Il s'agit d'un lubrifiant extrêmement résistant à l'oxydation pour les pièces mobiles du moteur travaillant dans les conditions les plus extrêmes. Il répond aux exigences les plus strictes des OEM.",
      category: "Competition Line - Véhicules",
      features: [
        "L'une des meilleures huiles de haute qualité",
        "Développé à partir de bases PAO/ESTER entièrement synthétiques",
        "Créé pour les conducteurs les plus exigeants",
        "Convient aux moteurs de course à haute performance",
        "Extrêmement résistant à l'oxydation",
        "Adapté aux conditions les plus extrêmes",
        "Répond aux exigences strictes des OEM"
      ]
    },
    "dinoil-daytona-20w60": {
      name: "DINOIL DAYTONA 20W/60",
      image: "https://cdn.builder.io/api/v1/image/assets%2F1ca0949e89764f508ab3c74fe08ee0a0%2F1fbe9cbad46b487a91095e40abe8a977?format=webp&width=800",
      description: "DINOIL DAYTONA 20W/60 est un lubrifiant entièrement synthétique, développé à partir de bases PAO et mélangé à des additifs de haute technologie de pointe. Créé pour satisfaire les conducteurs les plus exigeants. Il peut être utilisé dans de nombreuses voitures modernes, et est particulièrement adapté aux moteurs de haute performance et de course. Ce lubrifiant assure une protection même dans les conditions les plus extrêmes. Il répond aux exigences OEM les plus strictes.",
      category: "Competition Line - Véhicules",
      features: [
        "Lubrifiant entièrement synthétique",
        "Développé à partir de bases PAO de haute qualité",
        "Mélangé à des additifs de haute technologie",
        "Créé pour les conducteurs les plus exigeants",
        "Adapté aux moteurs de haute performance et de course",
        "Assure une protection dans les conditions les plus extrêmes",
        "Répond aux exigences OEM les plus strictes"
      ]
    },
    "dinoil-gp-competition-5w40": {
      name: "DINOIL GP COMPETITION 5W/40",
      image: "https://cdn.builder.io/api/v1/image/assets%2F1ca0949e89764f508ab3c74fe08ee0a0%2Fc958531a9c3a40eba552479b5bbdfdaf?format=webp&width=800",
      description: "DINOIL GP COMPETITION 4T -5W/40, lubrifiant de course haute performance 100% synthétique. Formulé avec des bases PAO et mélangé avec des additifs de pointe. Convient à tous les moteurs 4T qui supportent des charges et des vitesses variables dans des conditions de course. Convient à toutes les motos et quads. Recommandé pour les moteurs de course ou les moteurs soumis à une utilisation intensive. Assure une excellente lubrification, tant à très basse qu'à très haute température. Cette huile convient également pour la lubrification des moteurs à embrayage humide. Réduit la friction des pièces mobiles. Répond aux exigences les plus strictes des OEM.",
      category: "Competition Line - Moto",
      features: [
        "Lubrifiant de course 100% synthétique",
        "Formulé avec des bases PAO et additifs de pointe",
        "Convient à tous les moteurs 4T",
        "Adapté aux charges et vitesses variables de course",
        "Convient à toutes les motos et quads",
        "Recommandé pour moteurs de course et utilisation intensive",
        "Excellente lubrification à basse et haute température",
        "Compatible avec moteurs à embrayage humide",
        "Réduit la friction des pièces mobiles",
        "Répond aux exigences strictes des OEM"
      ]
    },
    "dinoil-gp-competition-10w60": {
      name: "DINOIL GP COMPETITION 10W/60",
      image: "https://cdn.builder.io/api/v1/image/assets%2F1ca0949e89764f508ab3c74fe08ee0a0%2F8429a284dcb541d798effcbb2ad6208f?format=webp&width=800",
      description: "DINOIL GP COMPETITION 4T -10W/60, lubrifiant de compétition moto haute performance 100% synthétique. Formulé à partir de bases synthétiques Tri-ester et renforcé par des additifs de pointe, qui assurent une lubrification parfaite dans les conditions de course de moto les plus sévères et les plus exigeantes. Cette huile convient également pour la lubrification des moteurs à embrayage humide. Il assure une excellente lubrification, tant à très basse qu'à très haute température. Il réduit la friction des pièces mobiles. Des additifs détergents et dispersants rigoureux assurent la propreté du moteur et le maintiennent exempt de dépôts. Faible consommation d'huile, même à des charges/régimes élevés. Prolonge la durée de vie du moteur et du convertisseur catalytique. Répond aux exigences OEM les plus strictes.",
      category: "Competition Line - Moto",
      features: [
        "Lubrifiant de compétition moto 100% synthétique",
        "Formulé à partir de bases synthétiques Tri-ester",
        "Renforcé par des additifs de pointe",
        "Lubrification parfaite dans conditions de course sévères",
        "Compatible avec moteurs à embrayage humide",
        "Excellente lubrification à basse et haute température",
        "Réduit la friction des pièces mobiles",
        "Additifs détergents et dispersants rigoureux",
        "Maintient le moteur exempt de dépôts",
        "Faible consommation d'huile à charges/régimes élevés",
        "Prolonge la durée de vie du moteur et convertisseur catalytique",
        "Répond aux exigences OEM les plus strictes"
      ]
    },
    "dinoil-formula-jet-ski-10w40": {
      name: "DINOIL FORMULA JET SKI 10W/40",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fe98689421e434387bc8e35ec01be1ffb%2Ff980eebbbf4e48918d9952d0d19cdbb2?format=webp&width=800",
      description: "Il s'agit d'une huile lubrifiante synthétique à 4 temps formulée avec des additifs de pointe. Produit haut de gamme, il offre une protection extrême, une puissance accrue et améliore le rendement du moteur. Des propriétés détergentes exceptionnelles garantissent un moteur propre à tout moment et minimisent la consommation d'huile. Huile de lubrification pour moteurs hors-bord et jet ski 4 temps. Convient particulièrement aux moteurs avec embrayage humide. Fournit une excellente lubrification à la fois à haute et à basse température. Réduit les dépôts de carbone. Réduit les émissions de gaz d'échappement.",
      category: "Competition Line - Motos et Moteurs Marins",
      features: [
        "Huile lubrifiante synthétique 4 temps",
        "Formulée avec des additifs de pointe",
        "Protection extrême et puissance accrue",
        "Propriétés détergentes exceptionnelles",
        "Spécialement pour moteurs hors-bord et jet ski 4T",
        "Compatible avec moteurs à embrayage humide",
        "Excellente lubrification haute et basse température",
        "Réduit les dépôts de carbone",
        "Réduit les émissions de gaz d'échappement"
      ]
    },
    "dinoil-formula-jet-ski-2t": {
      name: "DINOIL FORMULA JET SKI 2T",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fe98689421e434387bc8e35ec01be1ffb%2F2703a245c6b94fcdba38452115d57e41?format=webp&width=800",
      description: "Huile de lubrification de compétition pour les moteurs de course à 2 temps, spécialement formulée pour les Jet Ski. Huile moteur deux temps auto-mélangeuse à base d'esters 100% synthétiques. Développée pour répondre aux exigences des moteurs à haut régime. Formula Jet Ski est spécialement conçu pour augmenter la puissance du moteur. Convient particulièrement à tous les moteurs hors-bord et jet ski 2T. Excellente protection contre la rouille pendant les longues périodes d'hivernage. Réduit les émissions de gaz d'échappement.",
      category: "Competition Line - Motos et Moteurs Marins",
      features: [
        "Huile de compétition pour moteurs 2 temps",
        "Spécialement formulée pour Jet Ski",
        "Auto-mélangeuse à base d'esters 100% synthétiques",
        "Développée pour moteurs à haut régime",
        "Conçu pour augmenter la puissance du moteur",
        "Compatible avec tous moteurs hors-bord et jet ski 2T",
        "Excellente protection contre la rouille",
        "Protection pendant les longues périodes d'hivernage",
        "Réduit les émissions de gaz d'échappement"
      ]
    },
    "dinoil-formula-kart-2t": {
      name: "DINOIL FORMULA KART 2T",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fe98689421e434387bc8e35ec01be1ffb%2Fd3038e7d50a9453fae1c0efcea3f8df0?format=webp&width=800",
      description: "Huile lubrifiante de compétition pour moteurs de course à 2 temps, spécialement formulée pour les karts. Huile moteur deux temps 100% synthétique à base d'ester. Développée pour répondre aux exigences des courses de karting dans les moteurs à haut régime. Formula Kart 2T est spécialement conçu pour augmenter la puissance du moteur. S'utilise dans tous les types de moteurs de kart à 2 temps. Le pourcentage d'utilisation est déterminé par le fabricant. Réduit le frottement interne du moteur plus que les autres huiles de la même catégorie. Empêche l'encrassement des bougies d'allumage et maintient le moteur plus propre. Excellentes propriétés d'auto-mélange. Excellentes propriétés low-smoke et low-ash.",
      category: "Competition Line - Motos et Moteurs Marins",
      features: [
        "Huile de compétition pour moteurs kart 2 temps",
        "100% synthétique à base d'ester",
        "Développée pour courses de karting haut régime",
        "Spécialement conçu pour augmenter la puissance",
        "Compatible avec tous types de moteurs kart 2T",
        "Pourcentage d'utilisation selon fabricant",
        "Réduit le frottement interne du moteur",
        "Empêche l'encrassement des bougies",
        "Maintient le moteur plus propre",
        "Excellentes propriétés d'auto-mélange",
        "Propriétés low-smoke et low-ash"
      ]
    },
    "dinoil-formula-mini-2t": {
      name: "DINOIL FORMULA MINI 2T",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fe98689421e434387bc8e35ec01be1ffb%2F4551033487034832a83251eeb6a7c81f?format=webp&width=800",
      description: "Huile lubrifiante de compétition pour moteurs 2 temps, spécialement formulée pour Mini Moto. Huile moteur deux temps auto-mélangeuse à base d'esters 100% synthétiques. Développé pour répondre aux exigences des courses de minimoto pour les moteurs nécessitant un régime élevé. Formula Mini 2T a été spécialement conçue pour augmenter la puissance du moteur. Pour utilisation dans tous les types de moteurs 2 temps Mini Moto. Le pourcentage d'utilisation est déterminé par le fabricant. Réduit le frottement interne du moteur plus que les autres huiles de la même catégorie. Empêche l'encrassement des bougies d'allumage et maintient le moteur plus propre. Excellentes propriétés d'auto-mélange. Excellentes propriétés low-smoke et low-ash.",
      category: "Competition Line - Motos et Moteurs Marins",
      features: [
        "Huile de compétition pour Mini Moto 2 temps",
        "Auto-mélangeuse à base d'esters 100% synthétiques",
        "Développée pour courses de minimoto",
        "Spécialement pour moteurs à régime élevé",
        "Conçue pour augmenter la puissance du moteur",
        "Compatible avec tous types moteurs Mini Moto 2T",
        "Pourcentage d'utilisation selon fabricant",
        "Réduit le frottement interne du moteur",
        "Empêche l'encrassement des bougies",
        "Maintient le moteur plus propre",
        "Excellentes propriétés d'auto-mélange",
        "Propriétés low-smoke et low-ash"
      ]
    },
    "dinoil-sae-0w16": {
      name: "DINOIL SAE 0W/16",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fe98689421e434387bc8e35ec01be1ffb%2F0fe9146d2324437d93810973bd38a526?format=webp&width=800",
      description: "Lubrifiant entièrement synthétique doté de la technologie CleanSynto, formulé à partir d'huiles de base PAO (polyalphaoléfines) et de modificateurs spéciaux du coefficient de frottement. Développée pour les moteurs modernes à essence, diesel et turbo diesel, à aspiration naturelle et suralimentés, avec injection directe. Particulièrement adapté aux véhicules hybrides. La formulation spéciale à base de molybdène tri-nucléaire garantit d'excellentes propriétés de friction minimale, des intervalles de vidange prolongés, une consommation de carburant réduite, d'excellentes propriétés de démarrage à froid même à des températures très basses.",
      category: "Professional Line - Véhicules",
      features: [
        "Lubrifiant entièrement synthétique",
        "Technologie CleanSynto avancée",
        "Huiles de base PAO (polyalphaoléfines)",
        "Modificateurs spéciaux du coefficient de frottement",
        "Adapté aux moteurs modernes essence et diesel",
        "Compatible avec véhicules hybrides",
        "Formulation à base de molybdène tri-nucléaire",
        "Propriétés de friction minimale",
        "Intervalles de vidange prolongés",
        "Consommation de carburant réduite",
        "Excellentes propriétés démarrage à froid"
      ]
    },
    "dinoil-sae-0w20": {
      name: "DINOIL SAE 0W/20",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fe98689421e434387bc8e35ec01be1ffb%2Fd9022ed4ebba488283a9c6b322b81407?format=webp&width=800",
      description: "Lubrifiant entièrement synthétique doté de la technologie CleanSynto, formulé à partir d'huiles de base PAO (polyalphaoléfines) et de modificateurs spéciaux du coefficient de frottement. Développé pour les moteurs modernes à essence et diesel, à aspiration naturelle et suralimentés, avec injection directe. Les additifs spéciaux garantissent des intervalles de vidange prolongés, d'excellentes performances de démarrage à froid, une protection exceptionnelle du moteur et une économie de carburant améliorée. Il offre une réduction fiable des émissions et une protection du système d'échappement.",
      category: "Professional Line - Véhicules",
      features: [
        "Lubrifiant entièrement synthétique",
        "Technologie CleanSynto",
        "Huiles de base PAO (polyalphaoléfines)",
        "Modificateurs spéciaux du coefficient de frottement",
        "Adapté aux moteurs essence et diesel modernes",
        "Compatible avec injection directe",
        "Intervalles de vidange prolongés",
        "Excellentes performances démarrage à froid",
        "Protection exceptionnelle du moteur",
        "Économie de carburant améliorée",
        "Réduction fiable des émissions",
        "Protection du système d'échappement"
      ]
    },
    "dinoil-sae-0w30": {
      name: "DINOIL SAE 0W/30",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fe98689421e434387bc8e35ec01be1ffb%2F6a424e418ef54e35a0369a7ac73fa622?format=webp&width=800",
      description: "DINOIL DAYTONA 0W/30 est un lubrifiant 100% synthétique, (mid-SAPS), de nouvelle technologie pour la dernière génération de moteurs diesel qui répondent aux limites d'émission Euro 6. Recommandé pour les véhicules (Fiat, Peugeot, Citroën, Suzuki, Mitsubishi, Honda) équipés d'un filtre à particules et/ou d'un convertisseur catalytique et assurer une plus grande propreté interne avec des intervalles de changement d'huile plus longs.",
      category: "Professional Line - Véhicules",
      features: [
        "Lubrifiant 100% synthétique",
        "Technologie mid-SAPS",
        "Nouvelle technologie Euro 6",
        "Dernière génération moteurs diesel",
        "Recommandé pour Fiat, Peugeot, Citroën",
        "Compatible Suzuki, Mitsubishi, Honda",
        "Équipé filtre à particules",
        "Compatible convertisseur catalytique",
        "Plus grande propreté interne",
        "Intervalles de changement prolongés"
      ]
    },
    "dinoil-sae-5w20-ford": {
      name: "DINOIL SAE 5W/20 FORD / ASIAN CARS",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fe98689421e434387bc8e35ec01be1ffb%2Fb8776563eaf84af491ba5c3d4c5627f9?format=webp&width=800",
      description: "Lubrifiant entièrement synthétique formulé avec un ensemble d'additifs de pointe qui dépasse les exigences de l'ILSAC GF-4. Sa caractéristique 'conservation de l'énergie' offre un rendement énergétique optimal, une excellente lubrification générale dans des conditions de froid extrême et une réduction des émissions de gaz d'échappement. Particulièrement recommandé pour les nouveaux moteurs de FORD, HONDA, MAZDA, NISSAN, MITSUBISHI, TOYOTA mais aussi adapté pour Jaguar, Land Rover, Mercedes Benz, Porsche, Dodge Viper, Chevrolet, Cadillac.",
      category: "Professional Line - Véhicules",
      features: [
        "Lubrifiant entièrement synthétique",
        "Additifs de pointe ILSAC GF-4",
        "Caractéristique 'conservation de l'énergie'",
        "Rendement énergétique optimal",
        "Excellente lubrification conditions froid extrême",
        "Réduction émissions gaz d'échappement",
        "Recommandé pour FORD, HONDA, MAZDA",
        "Compatible NISSAN, MITSUBISHI, TOYOTA",
        "Adapté Jaguar, Land Rover, Mercedes Benz",
        "Compatible Porsche, Dodge Viper, Chevrolet, Cadillac"
      ]
    },
    "dinoil-sae-5w30-audi-vw": {
      name: "DINOIL SAE 5W/30 AUDI / VW",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fe98689421e434387bc8e35ec01be1ffb%2F2c53e19f19c6447288d7359502ed879f?format=webp&width=800",
      description: "Huile moteur entièrement synthétique formulée pour répondre aux spécifications VW les plus exigeantes à ce jour - VW 504.00 et 507.00 - ainsi qu'aux exigences Long Life III. Spécialement conçue pour les moteurs diesel du groupe VAG (Volkswagen, Audi, Seat, Skoda) avec injecteur-pompe équipés de filtres à particules DPF et de convertisseurs catalytiques (TWC). Ne convient pas aux moteurs V10TDI et R5 TDI avant 2007, où la spécification 506.01 est requise.",
      category: "Professional Line - Véhicules",
      features: [
        "Huile moteur entièrement synthétique",
        "Répond aux spécifications VW 504.00 et 507.00",
        "Compatible avec exigences Long Life III",
        "Spécialement pour moteurs diesel VAG",
        "Groupe Volkswagen, Audi, Seat, Skoda",
        "Équipés de filtres à particules DPF",
        "Compatible convertisseurs catalytiques TWC",
        "Moteurs avec injecteur-pompe",
        "Non compatible V10TDI et R5 TDI avant 2007"
      ]
    },
    "dinoil-sae-5w30-ford-mazda": {
      name: "DINOIL SAE 5W/30 FORD / MAZDA",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fe98689421e434387bc8e35ec01be1ffb%2F403678bdc74d449793f8b0b0cfafc78e?format=webp&width=800",
      description: "Lubrifiant entièrement synthétique formulé avec des additifs de pointe. Spécialement conçu pour les moteurs Ford à essence et diesel équipés de filtres à particules DPF et TWC répondant aux spécifications WSS-M2C913-C/D. Elle offre d'excellentes propriétés d'économie de carburant et des intervalles plus longs entre les changements d'huile. Convient à tous les moteurs à essence et diesel les plus récents de Ford, Toyota, Volvo, Mazda, Jaguar, Range Rover, Rover MG.",
      category: "Professional Line - Véhicules",
      features: [
        "Lubrifiant entièrement synthétique",
        "Formulé avec additifs de pointe",
        "Spécialement pour moteurs Ford",
        "Compatible essence et diesel",
        "Équipés filtres à particules DPF et TWC",
        "Répond aux spécifications WSS-M2C913-C/D",
        "Excellentes propriétés économie carburant",
        "Intervalles changement huile prolongés",
        "Compatible Ford, Toyota, Volvo, Mazda",
        "Adapté Jaguar, Range Rover, Rover MG"
      ]
    },
    "dinoil-sae-5w30-gm-opel": {
      name: "DINOIL SAE 5W/30 GM / OPEL",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fe98689421e434387bc8e35ec01be1ffb%2F8145c45c9f884bca8d72a89598d7217f?format=webp&width=800",
      description: "Lubrifiant entièrement synthétique formulé avec des huiles de base de première qualité et un ensemble d'additifs avancés. Spécialement conçu pour les moteurs GM modernes à essence et diesel équipés de filtres à particules. La technologie Low Saps protège les filtres à particules et les dispositifs de post-traitement des gaz d'échappement. Recommandé pour une utilisation dans les derniers moteurs General Motors de Opel, Saab, Chevrolet, Vauxhall, etc.",
      category: "Professional Line - Véhicules",
      features: [
        "Lubrifiant entièrement synthétique",
        "Huiles de base de première qualité",
        "Ensemble d'additifs avancés",
        "Spécialement pour moteurs GM modernes",
        "Compatible essence et diesel",
        "Équipés de filtres à particules",
        "Technologie Low Saps",
        "Protège filtres �� particules",
        "Protection dispositifs post-traitement",
        "Recommandé pour Opel, Saab, Chevrolet, Vauxhall"
      ]
    },
    "dinoil-sae-5w30-mercedes-bmw": {
      name: "DINOIL SAE 5W/30 MERCEDES BENZ / BMW",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fe98689421e434387bc8e35ec01be1ffb%2Feecb554aa3aa4fb99d8b284e5922dda8?format=webp&width=800",
      description: "Lubrifiant entièrement synthétique formulé avec des huiles de base de première qualité et un ensemble d'additifs avancés. Spécialement conçu pour la nouvelle génération de moteurs à essence et diesel équipés de filtres à particules DPF TWC (Three-Way Catalyst) répondant à la spécification MB 229.51. Sa formule et ses additifs Low SAPS assurent une protection complète des dispositifs de post-traitement des gaz d'échappement et des filtres à particules diesel, un allongement des intervalles de vidange et une économie de carburant pour les véhicules Euro 4 et Euro 5.",
      category: "Professional Line - Véhicules",
      features: [
        "Lubrifiant entièrement synthétique",
        "Huiles de base de première qualité",
        "Additifs avancés spécialisés",
        "Nouvelle génération moteurs essence et diesel",
        "Équipés filtres à particules DPF TWC",
        "Répond à sp��cification MB 229.51",
        "Formule et additifs Low SAPS",
        "Protection complète dispositifs post-traitement",
        "Allongement intervalles de vidange",
        "Économie carburant Euro 4 et Euro 5"
      ]
    },
    "dinoil-sae-5w30-psa-fiat": {
      name: "DINOIL SAE 5W/30 PSA / FIAT",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fe98689421e434387bc8e35ec01be1ffb%2F78ba41f2f835457185705d49d5266d6e?format=webp&width=800",
      description: "Lubrifiant entièrement synthétique formulé avec des huiles de base de première qualité et un ensemble d'additifs avancés. Spécialement développé pour les moteurs modernes Fiat PSA essence et diesel équipés de dispositifs de post-traitement des gaz d'échappement répondant à la spécification PSA B 712.290, y compris ceux avec filtres à particules. Il offre d'excellentes caractéristiques d'écoulement à basse température de fonctionnement et une très bonne économie de carburant. Convient pour une utilisation normale et une durée de vie prolongée pour les moteurs Peugeot et Citroën et également pour les véhicules Fiat nécessitant la spécification Fiat 9.55535 S1.",
      category: "Professional Line - Véhicules",
      features: [
        "Lubrifiant entièrement synthétique",
        "Huiles de base de première qualité",
        "Additifs avancés spécialisés",
        "Spécialement pour moteurs Fiat PSA",
        "Compatible essence et diesel",
        "Dispositifs post-traitement gaz échappement",
        "Répond à spécification PSA B 712.290",
        "Compatible filtres à particules",
        "Excellentes caractéristiques écoulement basse température",
        "Très bonne économie de carburant",
        "Adapté Peugeot, Citroën et Fiat"
      ]
    },
    "dinoil-sae-5w30-renault": {
      name: "DINOIL SAE 5W/30 RENAULT",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fe98689421e434387bc8e35ec01be1ffb%2Fbfdac3b1e16241e88bd640e38e631e98?format=webp&width=800",
      description: "Lubrifiant formulé avec une huile de base entièrement synthétique et des additifs de pointe. Spécialement conçu pour assurer une protection supérieure des systèmes de post-traitement des moteurs Renault. Offre des propriétés d'économie de carburant extrêmes et des intervalles de changement d'huile prolongés. Convient aux derniers moteurs Renault-Nissan à essence et diesel équipés du TWC (Three Way Catalyst) et est obligatoire pour tous les moteurs équipés d'un filtre à particules.",
      category: "Professional Line - Véhicules",
      features: [
        "Huile de base entièrement synthétique",
        "Additifs de pointe spécialisés",
        "Spécialement pour moteurs Renault",
        "Protection supérieure systèmes post-traitement",
        "Propriétés économie carburant extrêmes",
        "Intervalles changement huile prolongés",
        "Compatible moteurs Renault-Nissan",
        "Équipés TWC (Three Way Catalyst)",
        "Obligatoire pour moteurs avec filtre à particules",
        "Compatible essence et diesel"
      ]
    },
    "dinoil-sae-5w40-esp-formula": {
      name: "DINOIL SAE 5W/40 ESP FORMULA",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fe98689421e434387bc8e35ec01be1ffb%2Fe658bd0e65a74299805960b0686f66f0?format=webp&width=800",
      description: "Lubrifiant synthétique à 100%. Il s'agit d'une nouvelle formulation basée sur les dernières technologies. Particulièrement adapté aux exigences des moteurs modernes, il assure une plus longue durée de vie du convertisseur catalytique et réduit les émissions de gaz d'échappement. Les propriétés de ce lubrifiant permettent des intervalles de vidange beaucoup plus longs. Il est recommandé pour les moteurs à essence et diesel, qu'ils soient à aspiration naturelle ou à turbocompression, et pour les voitures à injection directe.",
      category: "Professional Line - Véhicules",
      features: [
        "Lubrifiant synthétique à 100%",
        "Nouvelle formulation dernières technologies",
        "Particulièrement adapté moteurs modernes",
        "Plus longue durée de vie convertisseur catalytique",
        "Réduit émissions gaz d'échappement",
        "Intervalles de vidange prolongés",
        "Recommandé moteurs essence et diesel",
        "Compatible aspiration naturelle et turbocompression",
        "Adapté voitures injection directe"
      ]
    },
    "dinoil-sae-5w40-gas": {
      name: "DINOIL SAE 5W/40 GAS LPG METHANE",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fe98689421e434387bc8e35ec01be1ffb%2F92889ad671954a458255bd559f800d17?format=webp&width=800",
      description: "Pure Power GAS est une huile moteur 100% synthétique conçue pour les moteurs à aspiration naturelle et les moteurs turbocompressés fonctionnant au gaz naturel, au GPL ou au bicarburant (essence+gaz). Il a été mis au point à l'aide de technologies qui garantissent une protection contre l'usure des soupapes. En outre, sa formulation neutralise les composés acides de la combustion, ce qui permet de ne pas altérer les performances du moteur. Ses excellentes capacités de lubrification réduisent considérablement la consommation de carburant et d'huile d'évaporation.",
      category: "Professional Line - Véhicules",
      features: [
        "Huile moteur 100% synthétique",
        "Conçue pour moteurs aspiration naturelle",
        "Compatible moteurs turbocompressés",
        "Fonctionnement gaz naturel, GPL",
        "Compatible bicarburant (essence+gaz)",
        "Technologies protection usure soupapes",
        "Neutralise composés acides combustion",
        "Maintient performances du moteur",
        "Excellentes capacités de lubrification",
        "Réduit consommation carburant et huile"
      ]
    },
    "dinoil-8000-sae-5w30-lsa": {
      name: "DINOIL 8000 SAE 5W/30 LSA",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fe98689421e434387bc8e35ec01be1ffb%2F08c6b9a9b55048248c694aae68d7c891?format=webp&width=800",
      description: "Sa formulation avec des additifs de dernière génération, 100% synthétique, permet de réduire les émissions de cendres sulfatées, de phosphore et de soufre (Low-Saps), assurant une moindre usure du moteur et du turbo compresseur, les protégeant des démarrages à froid et garantissant une plus grande économie de carburant. Il dépasse les exigences en matière de faibles émissions adoptées par les plus grands constructeurs automobiles (Daimler-Chrysler et BMW), qui utilisent des moteurs à essence et diesel, répondant aux normes Euro 4 et équipés d'un filtre à particules.",
      category: "Multigrade Line - Véhicules",
      features: [
        "Formulation 100% synthétique",
        "Additifs de dernière génération",
        "Réduit émissions cendres sulfatées, phosphore et soufre",
        "Technologie Low-Saps",
        "Moindre usure moteur et turbo compresseur",
        "Protection démarrages à froid",
        "Plus grande économie de carburant",
        "Dépasse exigences faibles émissions",
        "Conforme Daimler-Chrysler et BMW",
        "Compatible normes Euro 4",
        "Adapté filtres à particules"
      ]
    },
    "dinoil-7000-sae-5w30": {
      name: "DINOIL 7000 SAE 5W/30",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fe98689421e434387bc8e35ec01be1ffb%2Fb59d873abdda4f288c4fcbf2e2840099?format=webp&width=800",
      description: "Lubrifiant synthétique à 100% pour les moteurs à essence et diesel haute performance, turbocompressés multisoupapes, à injection directe et ceux fonctionnant dans les conditions les plus difficiles. Réduit considérablement la consommation de carburant. Améliore la puissance du moteur. Dépasse largement toutes les exigences et les tests de moteur prescrits par les principaux constructeurs automobiles.",
      category: "Multigrade Line - Véhicules",
      features: [
        "Lubrifiant synthétique à 100%",
        "Pour moteurs essence et diesel haute performance",
        "Compatible turbocompressés multisoupapes",
        "Adapté injection directe",
        "Fonctionne dans conditions difficiles",
        "Réduit considérablement consommation carburant",
        "Améliore puissance du moteur",
        "Dépasse exigences constructeurs automobiles",
        "Tests moteur approuvés"
      ]
    },
    "dinoil-6000-sae-5w40-tdi": {
      name: "DINOIL 6000 SAE 5W/40 TDI",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fe98689421e434387bc8e35ec01be1ffb%2F96c0c5cfa50b4aa0a9971a563b246424?format=webp&width=800",
      description: "Lubrifiant 100% synthétique. Il s'agit d'une nouvelle formulation basée sur les dernières technologies. Particulièrement adapté aux exigences des moteurs modernes, il assure une plus longue durée de vie du convertisseur catalytique et réduit les émissions de gaz d'échappement. Les propriétés de ce lubrifiant permettent des intervalles de vidange beaucoup plus longs. Il est recommandé pour les moteurs à aspiration naturelle et à turbocompression ainsi que pour les moteurs diesel à injection directe.",
      category: "Multigrade Line - Véhicules",
      features: [
        "Lubrifiant 100% synthétique",
        "Nouvelle formulation dernières technologies",
        "Particulièrement adapté moteurs modernes",
        "Plus longue durée de vie convertisseur catalytique",
        "Réduit émissions gaz d'échappement",
        "Intervalles vidange prolongés",
        "Recommandé aspiration naturelle et turbocompression",
        "Adapté moteurs diesel injection directe"
      ]
    },
    "dinoil-6000-sae-5w40-plus": {
      name: "DINOIL 6000 SAE 5W/40 PLUS",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fe98689421e434387bc8e35ec01be1ffb%2F356f1878a0d74593ab23faaf20ae592d?format=webp&width=800",
      description: "Lubrifiant synthétique à 100% pour les moteurs à essence et diesel haute performance, multisoupapes, turbocompressés, avec turbocompression, injection directe et pour ceux qui travaillent dans les conditions les plus difficiles. Réduit considérablement la consommation de carburant. Améliore la puissance du moteur. Dépasse de loin toutes les exigences et les tests de moteur prescrits par les principaux constructeurs automobiles.",
      category: "Multigrade Line - Véhicules",
      features: [
        "Lubrifiant synthétique à 100%",
        "Moteurs essence et diesel haute performance",
        "Compatible multisoupapes turbocompressés",
        "Adapté injection directe",
        "Fonctionne conditions difficiles",
        "Réduit considérablement consommation carburant",
        "Améliore puissance du moteur",
        "Dépasse exigences constructeurs",
        "Tests moteur validés"
      ]
    },
    "dinoil-5000-sae-10w40-formula-b4": {
      name: "DINOIL 5000 SAE 10W/40 FORMULA B4",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fe98689421e434387bc8e35ec01be1ffb%2F8b8b7bd3ddfb43d99884362d4c6b6b87?format=webp&width=800",
      description: "Lubrifiant semi-synthétique conforme aux dernières normes internationales et approuvé par les principaux fabricants. Son utilisation est recommandée pour les voitures, les fourgonnettes, les SUV et les camions légers fonctionnant à la fois au turbo diesel et à l'essence, multisoupapes et turbocompressés, ainsi que pour les véhicules équipés d'un convertisseur catalytique. L'excellente technologie d'additifs permet de meilleurs démarrages à froid, réduit l'usure du moteur au minimum. Réduction des coûts d'entretien.",
      category: "Multigrade Line - Véhicules",
      features: [
        "Lubrifiant semi-synthétique",
        "Conforme dernières normes internationales",
        "Approuvé par principaux fabricants",
        "Recommandé voitures, fourgonnettes, SUV",
        "Compatible camions légers",
        "Turbo diesel et essence",
        "Multisoupapes et turbocompressés",
        "Compatible convertisseur catalytique",
        "Meilleurs démarrages à froid",
        "Réduit usure moteur au minimum",
        "Réduction coûts entretien"
      ]
    },
    "dinoil-5000-sae-10w40-semi-synth": {
      name: "DINOIL 5000 SAE 10W/40 SEMI-SYNTH",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fe98689421e434387bc8e35ec01be1ffb%2F18eb6efddafe488096e01d0a56b96aef?format=webp&width=800",
      description: "Lubrifiant semi-synthétique conforme aux dernières normes internationales et approuvé par les principaux fabricants. Son utilisation est recommandée pour les moteurs essence et diesel, multivalves, suralimentés et pour les véhicules à convertisseur catalytique. Les excellentes capacités de nettoyage contrecarrent efficacement la formation de dépôts dans le turbo et sur les pistons et assurent une plus grande propreté du moteur, adaptée aux systèmes avec système méthane ou GPL.",
      category: "Multigrade Line - Véhicules",
      features: [
        "Lubrifiant semi-synthétique",
        "Conforme dernières normes internationales",
        "Approuvé principaux fabricants",
        "Recommandé moteurs essence et diesel",
        "Compatible multivalves suralimentés",
        "Adapté véhicules convertisseur catalytique",
        "Excellentes capacités de nettoyage",
        "Contrecarre formation dépôts turbo et pistons",
        "Plus grande propreté du moteur",
        "Compatible systèmes méthane ou GPL"
      ]
    }
  };

  const product = productData[productId || ""];

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-3xl font-bold text-[#02173C] mb-4">Produit non trouvé</h1>
          <Link to="/produits" className="text-[#BE941B] hover:underline">
            Retour aux produits
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
            alt="Product Background"
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
            <Link to={categoryPath} className="text-gray-300 hover:text-white transition-colors">
              {categoryName}
            </Link>
            <ChevronRight size={16} className="text-gray-400" />
            <span className="text-[#BE941B] font-medium">{product.name}</span>
          </nav>

          <div className="text-center">
            <div className="inline-flex items-center bg-[#BE941B]/20 border border-[#BE941B]/30 rounded-full px-8 py-3 mb-8">
              <Trophy className="w-5 h-5 text-[#BE941B] mr-2" />
              <span className="text-[#BE941B] font-bold text-sm uppercase tracking-widest">Competition Line</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              <span className="block bg-gradient-to-r from-[#BE941B] to-white bg-clip-text text-transparent">
                {product.name}
              </span>
            </h1>
            
            <div className="w-32 h-1 bg-gradient-to-r from-[#BE941B] via-white to-[#BE941B] mx-auto mb-8 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Product Details Section */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">

            {/* Product Image - Sticky */}
            <div className="relative">
              <div className="sticky top-24 z-10">
                <div className="aspect-square relative rounded-3xl bg-white shadow-2xl p-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#02173C]/5 to-transparent rounded-3xl"></div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-6 -right-6 bg-[#BE941B] text-white rounded-2xl p-4 shadow-2xl">
                  <div className="text-center">
                    <Trophy className="w-8 h-8 mx-auto mb-2" />
                    <p className="font-bold text-sm">Premium</p>
                    <p className="text-xs opacity-90">Quality</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Information */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center bg-[#BE941B]/10 border border-[#BE941B]/20 rounded-full px-6 py-2 mb-6">
                  <Shield className="w-4 h-4 text-[#BE941B] mr-2" />
                  <span className="text-[#BE941B] font-bold text-sm uppercase tracking-widest">Haute Performance</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-black text-[#02173C] mb-6 leading-tight">
                  Description du Produit
                </h2>
                
                <div className="w-24 h-1 bg-[#BE941B] mb-6 rounded-full"></div>
                
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {product.description}
                </p>
              </div>

              {/* Features List */}
              <div>
                <h3 className="text-xl font-bold text-[#02173C] mb-4">Caractéristiques Principales</h3>
                <div className="space-y-3">
                  {product.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-start">
                      <div className="w-6 h-6 bg-[#BE941B] rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                        <Star size={14} className="text-white" />
                      </div>
                      <span className="text-gray-600 leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="pt-8">
                <div className="bg-gradient-to-br from-[#BE941B]/5 to-[#02173C]/5 rounded-2xl p-6 border border-[#BE941B]/20">
                  <h4 className="font-bold text-[#02173C] mb-2">Besoin de ce produit ?</h4>
                  <p className="text-gray-600 mb-4">Contactez notre équipe pour plus d'informations ou pour passer commande.</p>
                  <button className="group bg-[#BE941B] hover:bg-[#02173C] px-8 py-4 text-white transition-all duration-300 font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    <span className="flex items-center">
                      Nous Contacter
                      <ArrowRight size={20} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>
                </div>
              </div>

              {/* Technical Specifications */}
              <div className="pt-8">
                <h3 className="text-xl font-bold text-[#02173C] mb-4">Spécifications Techniques</h3>
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Type:</span>
                        <span className="font-medium text-[#02173C]">100% Synthétique</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Application:</span>
                        <span className="font-medium text-[#02173C]">Competition</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Température:</span>
                        <span className="font-medium text-[#02173C]">-40°C à +150°C</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Norme:</span>
                        <span className="font-medium text-[#02173C]">API SN/CF</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Viscosité:</span>
                        <span className="font-medium text-[#02173C]">Haute performance</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Certification:</span>
                        <span className="font-medium text-[#02173C]">OEM Approuvé</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Usage Instructions */}
              <div className="pt-8">
                <h3 className="text-xl font-bold text-[#02173C] mb-4">Mode d'Emploi</h3>
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="space-y-4 text-gray-600">
                    <p><strong className="text-[#02173C]">1. Préparation:</strong> S'assurer que le moteur est à température ambiante avant la vidange.</p>
                    <p><strong className="text-[#02173C]">2. Vidange:</strong> Effectuer la vidange complète de l'ancienne huile.</p>
                    <p><strong className="text-[#02173C]">3. Application:</strong> Verser le produit selon les recommandations du constructeur.</p>
                    <p><strong className="text-[#02173C]">4. Vérification:</strong> Contrôler le niveau d'huile après quelques minutes de fonctionnement.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* Back to Products */}
          <div className="text-center mt-20">
            <Link
              to={categoryPath}
              className="group inline-flex items-center bg-white hover:bg-[#02173C] border-2 border-[#02173C] text-[#02173C] hover:text-white px-8 py-4 rounded-2xl transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <ChevronLeft size={20} className="mr-2 transform group-hover:-translate-x-1 transition-transform duration-300" />
              <span>Retour aux Produits</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
