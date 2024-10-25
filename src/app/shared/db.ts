import { Questionnaire } from './models';

export const quizDB: Array<Questionnaire> = [
  {
    id: 1,
    label: 'Historique du journal Fraternité Matin',
    createdDate: '2024-10-25',
    enabled: true,
    questions: [
      {
        id: 1,
        label: 'En quelle année le journal Fraternité Matin a-t-il été créé ?',
        createdDate: '2024-10-25',
        questionnaireId: 1,
        correctAnswerId: 1,
        options: [
          { id: 1, label: '1964', questionId: 1 },
          { id: 2, label: '1975', questionId: 1 },
          { id: 3, label: '1965', questionId: 1 },
          { id: 4, label: '1980', questionId: 1 },
        ],
      },
      {
        id: 2,
        label: 'Qui est le fondateur du journal Fraternité Matin ?',
        createdDate: '2024-10-25',
        questionnaireId: 1,
        correctAnswerId: 5,
        options: [
          { id: 5, label: 'Félix Houphouët-Boigny', questionId: 2 },
          { id: 6, label: 'Laurent Gbagbo', questionId: 2 },
          { id: 7, label: 'Alassane Ouattara', questionId: 2 },
          { id: 8, label: 'Amadou Gon Coulibaly', questionId: 2 },
        ],
      },
      {
        id: 3,
        label: 'Quel est le premier numéro de Fraternité Matin paru ?',
        createdDate: '2024-10-25',
        questionnaireId: 1,
        correctAnswerId: 10,
        options: [
          { id: 9, label: '4 avril 1964', questionId: 3 },
          { id: 10, label: '9 décembre 1964', questionId: 3 },
          { id: 11, label: '20 mars 1965', questionId: 3 },
          { id: 12, label: '1er janvier 1964', questionId: 3 },
        ],
      },
      {
        id: 4,
        label: 'Dans quel but le quotidien Fraternité Matin a-t-il été fondé ?',
        createdDate: '2024-10-25',
        questionnaireId: 1,
        correctAnswerId: 14,
        options: [
          {
            id: 13,
            label: 'Promouvoir la liberté de la presse',
            questionId: 4,
          },
          {
            id: 14,
            label:
              'Relayer les informations gouvernementales et favoriser l’unité nationale',
            questionId: 4,
          },
          {
            id: 15,
            label: 'Critiquer l’administration publique',
            questionId: 4,
          },
          { id: 16, label: 'Soutenir les mouvements syndicaux', questionId: 4 },
        ],
      },
      {
        id: 5,
        label: 'Quel est le slogan de Fraternité Matin ?',
        createdDate: '2024-10-25',
        questionnaireId: 1,
        correctAnswerId: 19,
        options: [
          { id: 17, label: 'Le journal de la paix', questionId: 5 },
          { id: 18, label: 'Au service de la nation', questionId: 5 },
          { id: 19, label: 'Informer pour mieux servir', questionId: 5 },
          { id: 20, label: 'Pour une Côte d’Ivoire nouvelle', questionId: 5 },
        ],
      },
      {
        id: 6,
        label: 'Fraternité Matin est une entreprise de :',
        createdDate: '2024-10-25',
        questionnaireId: 1,
        correctAnswerId: 22,
        options: [
          { id: 21, label: 'Presse indépendante', questionId: 6 },
          { id: 22, label: 'Service public', questionId: 6 },
          { id: 23, label: 'Média étranger', questionId: 6 },
          {
            id: 24,
            label: "Société privée financée par l'opposition",
            questionId: 6,
          },
        ],
      },
      {
        id: 7,
        label: 'Où se trouve le siège social de Fraternité Matin ?',
        createdDate: '2024-10-25',
        questionnaireId: 1,
        correctAnswerId: 25,
        options: [
          { id: 25, label: 'Plateau, Abidjan', questionId: 7 },
          { id: 26, label: 'Yamoussoukro', questionId: 7 },
          { id: 27, label: 'Treichville, Abidjan', questionId: 7 },
          { id: 28, label: 'Cocody, Abidjan', questionId: 7 },
        ],
      },
      {
        id: 8,
        label:
          'Quel type de contenu trouve-t-on principalement dans Fraternité Matin ?',
        createdDate: '2024-10-25',
        questionnaireId: 1,
        correctAnswerId: 30,
        options: [
          { id: 29, label: 'Divertissement et potins', questionId: 8 },
          {
            id: 30,
            label: 'Informations politiques, économiques et sociales',
            questionId: 8,
          },
          {
            id: 31,
            label: 'Publicité et petites annonces uniquement',
            questionId: 8,
          },
          {
            id: 32,
            label: 'Exclusivement des articles d’opinion',
            questionId: 8,
          },
        ],
      },
      {
        id: 9,
        label:
          'Quel est le format de publication principal de Fraternité Matin ?',
        createdDate: '2024-10-25',
        questionnaireId: 1,
        correctAnswerId: 34,
        options: [
          { id: 33, label: 'Quotidien papier uniquement', questionId: 9 },
          {
            id: 34,
            label: 'Version papier et édition en ligne',
            questionId: 9,
          },
          { id: 35, label: 'Numérique uniquement', questionId: 9 },
          { id: 36, label: 'Hebdomadaire papier', questionId: 9 },
        ],
      },
      {
        id: 10,
        label:
          "Comment Fraternité Matin a-t-il évolué depuis la crise de 2010-2011 en Côte d'Ivoire ?",
        createdDate: '2024-10-25',
        questionnaireId: 1,
        correctAnswerId: 40,
        options: [
          {
            id: 37,
            label: 'Le journal a cessé de paraître temporairement',
            questionId: 10,
          },
          {
            id: 38,
            label: 'Fraternité Matin est devenu un journal pro-opposition',
            questionId: 10,
          },
          {
            id: 39,
            label:
              'Il a renforcé son rôle d’information publique et modernisé son site web',
            questionId: 10,
          },
          {
            id: 40,
            label: 'Le journal a été remplacé par un autre média d’État',
            questionId: 10,
          },
        ],
      },
    ],
  },
  // Questionnaire 2
  {
    id: 2,
    label: 'Produits et services de Fraternité Matin',
    createdDate: '2024-10-25',
    enabled: true,
    questions: [
      {
        id: 11,
        label: 'Quel type de journal est Fraternité Matin ?',
        createdDate: '2024-10-25',
        questionnaireId: 2,
        correctAnswerId: 41,
        options: [
          { id: 41, label: 'Quotidien généraliste', questionId: 11 },
          { id: 42, label: 'Magazine mensuel', questionId: 11 },
          { id: 43, label: 'Journal hebdomadaire', questionId: 11 },
          { id: 44, label: 'Journal spécialisé en économie', questionId: 11 },
        ],
      },
      {
        id: 12,
        label: 'Quel produit numérique propose Fraternité Matin ?',
        createdDate: '2024-10-25',
        questionnaireId: 2,
        correctAnswerId: 45,
        options: [
          { id: 45, label: 'Edition en ligne', questionId: 12 },
          { id: 46, label: 'Radio FM', questionId: 12 },
          { id: 47, label: 'Chaîne de télévision', questionId: 12 },
          { id: 48, label: 'Podcast quotidien', questionId: 12 },
        ],
      },
      {
        id: 13,
        label: 'Fraternité Matin propose-t-il un service d’abonnement ?',
        createdDate: '2024-10-25',
        questionnaireId: 2,
        correctAnswerId: 49,
        options: [
          {
            id: 49,
            label: "Oui, pour l'édition papier et en ligne",
            questionId: 13,
          },
          { id: 50, label: 'Non, uniquement en kiosque', questionId: 13 },
          {
            id: 51,
            label: 'Oui, mais seulement pour les entreprises',
            questionId: 13,
          },
          { id: 52, label: 'Non, l’accès est gratuit', questionId: 13 },
        ],
      },
      {
        id: 14,
        label: 'Quel supplément thématique est publié par Fraternité Matin ?',
        createdDate: '2024-10-25',
        questionnaireId: 2,
        correctAnswerId: 53,
        options: [
          { id: 53, label: "Frat'Mag", questionId: 14 },
          { id: 54, label: 'EcoTimes', questionId: 14 },
          { id: 55, label: 'Sportivo', questionId: 14 },
          { id: 56, label: 'Ciné Revue', questionId: 14 },
        ],
      },
      {
        id: 15,
        label: 'Quel service publicitaire propose Fraternité Matin ?',
        createdDate: '2024-10-25',
        questionnaireId: 2,
        correctAnswerId: 58,
        options: [
          { id: 57, label: 'Placement de produits', questionId: 15 },
          { id: 58, label: 'Annonces publicitaires', questionId: 15 },
          { id: 59, label: 'Spots radio', questionId: 15 },
          { id: 60, label: 'Bannières web dynamiques', questionId: 15 },
        ],
      },
      {
        id: 16,
        label: 'Quel autre média est associé à Fraternité Matin ?',
        createdDate: '2024-10-25',
        questionnaireId: 2,
        correctAnswerId: 62,
        options: [
          { id: 61, label: "Frat'Radio", questionId: 16 },
          { id: 62, label: "Frat'Event", questionId: 16 },
          { id: 63, label: "Frat'Sport", questionId: 16 },
          { id: 64, label: "Frat'TV", questionId: 16 },
        ],
      },
      {
        id: 17,
        label: 'Quelle est la fréquence de publication de Fraternité Matin ?',
        createdDate: '2024-10-25',
        questionnaireId: 2,
        correctAnswerId: 65,
        options: [
          { id: 65, label: 'Quotidienne', questionId: 17 },
          { id: 66, label: 'Hebdomadaire', questionId: 17 },
          { id: 67, label: 'Mensuelle', questionId: 17 },
          { id: 68, label: 'Trimestrielle', questionId: 17 },
        ],
      },
      {
        id: 18,
        label: 'Quel type d’événements Fraternité Matin organise-t-il ?',
        createdDate: '2024-10-25',
        questionnaireId: 2,
        correctAnswerId: 71,
        options: [
          { id: 69, label: 'Conférences en ligne', questionId: 18 },
          { id: 70, label: 'Expositions artistiques', questionId: 18 },
          { id: 71, label: 'Forums économiques', questionId: 18 },
          { id: 72, label: 'Tournées musicales', questionId: 18 },
        ],
      },
      {
        id: 19,
        label:
          'Fraternité Matin propose-t-il des archives de ses anciennes éditions ?',
        createdDate: '2024-10-25',
        questionnaireId: 2,
        correctAnswerId: 73,
        options: [
          { id: 73, label: 'Oui, sur son site web', questionId: 19 },
          { id: 74, label: 'Non, uniquement au format papier', questionId: 19 },
          { id: 75, label: "Oui, mais l'accès est payant", questionId: 19 },
          {
            id: 76,
            label: 'Non, les archives ne sont pas disponibles',
            questionId: 19,
          },
        ],
      },
      {
        id: 20,
        label: 'Quel service de formation propose Fraternité Matin ?',
        createdDate: '2024-10-25',
        questionnaireId: 2,
        correctAnswerId: 78,
        options: [
          { id: 77, label: 'Cours de journalisme en ligne', questionId: 20 },
          { id: 78, label: 'Stages en entreprise', questionId: 20 },
          { id: 79, label: "Ateliers d'écriture", questionId: 20 },
          { id: 80, label: 'Webinaires sur la presse', questionId: 20 },
        ],
      },
    ],
  },
  {
    id: 3,
    label: 'Valeurs et mission de Fraternité Matin',
    createdDate: '2024-10-25',
    enabled: true,
    questions: [
      {
        id: 21,
        label: 'Quelle est la mission principale de Fraternité Matin ?',
        createdDate: '2024-10-25',
        questionnaireId: 3,
        correctAnswerId: 81,
        options: [
          {
            id: 81,
            label: 'Informer de manière objective et fiable',
            questionId: 21,
          },
          {
            id: 82,
            label: 'Promouvoir la publicité commerciale',
            questionId: 21,
          },
          { id: 83, label: 'Divertir le grand public', questionId: 21 },
          { id: 84, label: 'Augmenter les ventes en kiosque', questionId: 21 },
        ],
      },
      {
        id: 22,
        label: 'Quelle valeur fondamentale Fraternité Matin défend-elle ?',
        createdDate: '2024-10-25',
        questionnaireId: 3,
        correctAnswerId: 85,
        options: [
          { id: 85, label: 'Intégrité', questionId: 22 },
          { id: 86, label: 'Compétitivité', questionId: 22 },
          { id: 87, label: 'Divertissement', questionId: 22 },
          { id: 88, label: 'Neutralité', questionId: 22 },
        ],
      },
      {
        id: 23,
        label: 'Dans quel domaine Fraternité Matin s’engage-t-il activement ?',
        createdDate: '2024-10-25',
        questionnaireId: 3,
        correctAnswerId: 89,
        options: [
          { id: 89, label: 'Promotion de la démocratie', questionId: 23 },
          { id: 90, label: 'Développement de la musique', questionId: 23 },
          {
            id: 91,
            label: 'Lutte contre le changement climatique',
            questionId: 23,
          },
          {
            id: 92,
            label: "Organisation d'événements sportifs",
            questionId: 23,
          },
        ],
      },
      {
        id: 24,
        label: 'Quel public Fraternité Matin cherche-t-il à atteindre ?',
        createdDate: '2024-10-25',
        questionnaireId: 3,
        correctAnswerId: 93,
        options: [
          { id: 93, label: 'Tous les citoyens', questionId: 24 },
          { id: 94, label: 'Les entreprises uniquement', questionId: 24 },
          { id: 95, label: 'Les jeunes exclusivement', questionId: 24 },
          { id: 96, label: 'Les acteurs politiques', questionId: 24 },
        ],
      },
      {
        id: 25,
        label: 'Quel rôle éducatif joue Fraternité Matin ?',
        createdDate: '2024-10-25',
        questionnaireId: 3,
        correctAnswerId: 97,
        options: [
          {
            id: 97,
            label: 'Sensibiliser sur les sujets de société',
            questionId: 25,
          },
          {
            id: 98,
            label: 'Former en journalisme d’investigation',
            questionId: 25,
          },
          { id: 99, label: 'Offrir des cours en ligne', questionId: 25 },
          {
            id: 100,
            label: 'Créer des campagnes de publicité',
            questionId: 25,
          },
        ],
      },
      {
        id: 26,
        label: 'Comment Fraternité Matin soutient-il la transparence ?',
        createdDate: '2024-10-25',
        questionnaireId: 3,
        correctAnswerId: 101,
        options: [
          {
            id: 101,
            label: 'En publiant des informations vérifiées',
            questionId: 26,
          },
          {
            id: 102,
            label: 'En évitant les sujets politiques',
            questionId: 26,
          },
          {
            id: 103,
            label: 'En publiant des articles anonymes',
            questionId: 26,
          },
          {
            id: 104,
            label: 'En favorisant les contenus sponsorisés',
            questionId: 26,
          },
        ],
      },
      {
        id: 27,
        label:
          'Quelle approche Fraternité Matin adopte-t-il face aux fake news ?',
        createdDate: '2024-10-25',
        questionnaireId: 3,
        correctAnswerId: 105,
        options: [
          {
            id: 105,
            label: 'Lutte active contre la désinformation',
            questionId: 27,
          },
          { id: 106, label: 'Indifférence', questionId: 27 },
          { id: 107, label: 'Encouragement du débat public', questionId: 27 },
          { id: 108, label: 'Réduction du contenu politique', questionId: 27 },
        ],
      },
      {
        id: 28,
        label:
          'Fraternité Matin encourage-t-il le journalisme d’investigation ?',
        createdDate: '2024-10-25',
        questionnaireId: 3,
        correctAnswerId: 109,
        options: [
          { id: 109, label: 'Oui', questionId: 28 },
          { id: 110, label: 'Non', questionId: 28 },
          {
            id: 111,
            label: 'Uniquement sur des sujets économiques',
            questionId: 28,
          },
          {
            id: 112,
            label: 'Uniquement sur des sujets locaux',
            questionId: 28,
          },
        ],
      },
      {
        id: 29,
        label:
          'Quelle est l’importance de l’impartialité pour Fraternité Matin ?',
        createdDate: '2024-10-25',
        questionnaireId: 3,
        correctAnswerId: 113,
        options: [
          { id: 113, label: 'Essentielle pour sa crédibilité', questionId: 29 },
          { id: 114, label: 'Secondaire', questionId: 29 },
          { id: 115, label: 'Non nécessaire', questionId: 29 },
          { id: 116, label: 'Dépend du sujet traité', questionId: 29 },
        ],
      },
      {
        id: 30,
        label:
          'Quel impact Fraternité Matin cherche-t-il à avoir sur la société ?',
        createdDate: '2024-10-25',
        questionnaireId: 3,
        correctAnswerId: 117,
        options: [
          { id: 117, label: 'Promouvoir le progrès social', questionId: 30 },
          { id: 118, label: 'Maintenir le statu quo', questionId: 30 },
          { id: 119, label: 'Encourager la consommation', questionId: 30 },
          { id: 120, label: 'Ignorer les enjeux sociaux', questionId: 30 },
        ],
      },
    ],
  },
  {
    id: 4,
    label: 'Événements marquants de Fraternité Matin',
    createdDate: '2024-10-25',
    enabled: true,
    questions: [
      {
        id: 31,
        label: 'En quelle année Fraternité Matin a-t-il été fondé ?',
        createdDate: '2024-10-25',
        questionnaireId: 4,
        correctAnswerId: 121,
        options: [
          { id: 121, label: '1964', questionId: 31 },
          { id: 122, label: '1975', questionId: 31 },
          { id: 123, label: '1980', questionId: 31 },
          { id: 124, label: '1990', questionId: 31 },
        ],
      },
      {
        id: 32,
        label:
          'Quel événement a marqué le 50e anniversaire de Fraternité Matin ?',
        createdDate: '2024-10-25',
        questionnaireId: 4,
        correctAnswerId: 125,
        options: [
          {
            id: 125,
            label: 'Un numéro spécial retraçant son histoire',
            questionId: 32,
          },
          {
            id: 126,
            label: 'Une refonte complète du site web',
            questionId: 32,
          },
          { id: 127, label: 'Le lancement d’une radio', questionId: 32 },
          {
            id: 128,
            label: 'Un partenariat avec une chaîne TV',
            questionId: 32,
          },
        ],
      },
      {
        id: 33,
        label:
          'Quel prix Fraternité Matin a-t-il reçu pour son engagement journalistique ?',
        createdDate: '2024-10-25',
        questionnaireId: 4,
        correctAnswerId: 129,
        options: [
          { id: 129, label: 'Prix Ebony', questionId: 33 },
          { id: 130, label: 'Prix Pulitzer', questionId: 33 },
          { id: 131, label: 'Prix Nobel de la Paix', questionId: 33 },
          { id: 132, label: 'Prix du Meilleur média digital', questionId: 33 },
        ],
      },
      {
        id: 34,
        label:
          'En quelle année Fraternité Matin a-t-il lancé sa version numérique ?',
        createdDate: '2024-10-25',
        questionnaireId: 4,
        correctAnswerId: 133,
        options: [
          { id: 133, label: '2013', questionId: 34 },
          { id: 134, label: '2010', questionId: 34 },
          { id: 135, label: '2015', questionId: 34 },
          { id: 136, label: '2018', questionId: 34 },
        ],
      },
      {
        id: 35,
        label:
          'Quel changement majeur a été opéré en 2004 par Fraternité Matin ?',
        createdDate: '2024-10-25',
        questionnaireId: 4,
        correctAnswerId: 137,
        options: [
          { id: 137, label: 'Passage au format tabloïd', questionId: 35 },
          {
            id: 138,
            label: 'Fermeture des éditions régionales',
            questionId: 35,
          },
          {
            id: 139,
            label: "Lancement d'une application mobile",
            questionId: 35,
          },
          {
            id: 140,
            label: 'Introduction de la couleur dans les pages',
            questionId: 35,
          },
        ],
      },
      {
        id: 36,
        label: 'Quelle figure emblématique a dirigé Fraternité Matin ?',
        createdDate: '2024-10-25',
        questionnaireId: 4,
        correctAnswerId: 141,
        options: [
          { id: 141, label: 'Venance Konan', questionId: 36 },
          { id: 142, label: 'Didier Drogba', questionId: 36 },
          { id: 143, label: 'Alassane Ouattara', questionId: 36 },
          { id: 144, label: 'Henri Konan Bédié', questionId: 36 },
        ],
      },
      {
        id: 37,
        label:
          "Qu'a représenté la création de Fraternité Matin pour la presse ivoirienne ?",
        createdDate: '2024-10-25',
        questionnaireId: 4,
        correctAnswerId: 145,
        options: [
          { id: 145, label: "Le premier quotidien d'État", questionId: 37 },
          { id: 146, label: 'Le premier magazine sportif', questionId: 37 },
          { id: 147, label: 'Le premier journal privé', questionId: 37 },
          {
            id: 148,
            label: 'Un journal exclusivement en ligne',
            questionId: 37,
          },
        ],
      },
      {
        id: 38,
        label:
          'Quelle initiative écologique Fraternité Matin a-t-il entreprise ?',
        createdDate: '2024-10-25',
        questionnaireId: 4,
        correctAnswerId: 149,
        options: [
          { id: 149, label: 'L’impression sur papier recyclé', questionId: 38 },
          { id: 150, label: 'L’arrêt de l’impression papier', questionId: 38 },
          {
            id: 151,
            label: "Une campagne pour la plantation d'arbres",
            questionId: 38,
          },
          {
            id: 152,
            label: "L'utilisation de plastique biodégradable",
            questionId: 38,
          },
        ],
      },
      {
        id: 39,
        label:
          'Quel partenariat stratégique Fraternité Matin a-t-il conclu en 2019 ?',
        createdDate: '2024-10-25',
        questionnaireId: 4,
        correctAnswerId: 153,
        options: [
          {
            id: 153,
            label: 'Avec Google pour du contenu numérique',
            questionId: 39,
          },
          {
            id: 154,
            label: 'Avec la FIFA pour des reportages',
            questionId: 39,
          },
          {
            id: 155,
            label: 'Avec l’ONU pour une campagne de paix',
            questionId: 39,
          },
          {
            id: 156,
            label: "Avec une maison d'édition française",
            questionId: 39,
          },
        ],
      },
      {
        id: 40,
        label: 'Comment Fraternité Matin a-t-il célébré son 60e anniversaire ?',
        createdDate: '2024-10-25',
        questionnaireId: 4,
        correctAnswerId: 157,
        options: [
          {
            id: 157,
            label: 'Organisation d’un colloque sur le journalisme',
            questionId: 40,
          },
          {
            id: 158,
            label: 'Lancement d’une chaîne de télévision',
            questionId: 40,
          },
          {
            id: 159,
            label: 'Ouverture d’un musée de la presse',
            questionId: 40,
          },
          {
            id: 160,
            label: "Développement d'une nouvelle application mobile",
            questionId: 40,
          },
        ],
      },
    ],
  },
  {
    id: 5,
    label: 'Partenariats et collaborations de Fraternité Matin',
    createdDate: '2024-10-25',
    enabled: true,
    questions: [
      {
        id: 41,
        label:
          "Avec quel organisme Fraternité Matin a-t-il établi un partenariat en 2018 pour promouvoir le journalisme d'investigation ?",
        createdDate: '2024-10-25',
        questionnaireId: 5,
        correctAnswerId: 161,
        options: [
          { id: 161, label: 'Reporters sans frontières', questionId: 41 },
          { id: 162, label: 'Amnesty International', questionId: 41 },
          { id: 163, label: "L'UNESCO", questionId: 41 },
          { id: 164, label: 'Transparency International', questionId: 41 },
        ],
      },
      {
        id: 42,
        label:
          'Quel réseau international de médias a collaboré avec Fraternité Matin pour des enquêtes communes ?',
        createdDate: '2024-10-25',
        questionnaireId: 5,
        correctAnswerId: 165,
        options: [
          {
            id: 165,
            label: 'Global Investigative Journalism Network',
            questionId: 42,
          },
          { id: 166, label: 'World Association of Newspapers', questionId: 42 },
          { id: 167, label: 'International Press Institute', questionId: 42 },
          { id: 168, label: 'European Journalism Centre', questionId: 42 },
        ],
      },
      {
        id: 43,
        label:
          'Fraternité Matin a signé un accord de collaboration avec quelle chaîne de télévision en 2020 ?',
        createdDate: '2024-10-25',
        questionnaireId: 5,
        correctAnswerId: 169,
        options: [
          { id: 169, label: 'TV5 Monde', questionId: 43 },
          { id: 170, label: 'France 24', questionId: 43 },
          { id: 171, label: 'Canal Plus', questionId: 43 },
          { id: 172, label: 'Al Jazeera', questionId: 43 },
        ],
      },
      {
        id: 44,
        label:
          "Quel partenariat a été formé avec un organisme non gouvernemental pour sensibiliser à la protection de l'environnement ?",
        createdDate: '2024-10-25',
        questionnaireId: 5,
        correctAnswerId: 173,
        options: [
          { id: 173, label: 'Greenpeace', questionId: 44 },
          { id: 174, label: 'WWF', questionId: 44 },
          { id: 175, label: 'Oxfam', questionId: 44 },
          { id: 176, label: 'Solidarité Internationale', questionId: 44 },
        ],
      },
      {
        id: 45,
        label:
          'Avec quel groupe de médias Fraternité Matin a-t-il collaboré pour le partage de contenu en ligne ?',
        createdDate: '2024-10-25',
        questionnaireId: 5,
        correctAnswerId: 177,
        options: [
          { id: 177, label: 'Groupe Jeune Afrique', questionId: 45 },
          { id: 178, label: 'Groupe Lagardère', questionId: 45 },
          { id: 179, label: 'Groupe Le Monde', questionId: 45 },
          { id: 180, label: 'Groupe TF1', questionId: 45 },
        ],
      },
      {
        id: 46,
        label:
          'Quel événement a été co-organisé par Fraternité Matin et une institution académique en 2021 ?',
        createdDate: '2024-10-25',
        questionnaireId: 5,
        correctAnswerId: 181,
        options: [
          {
            id: 181,
            label: 'Un colloque sur le journalisme éthique',
            questionId: 46,
          },
          { id: 182, label: 'Un concours de nouvelles', questionId: 46 },
          { id: 183, label: 'Un salon du livre', questionId: 46 },
          { id: 184, label: 'Un festival de cinéma', questionId: 46 },
        ],
      },
      {
        id: 47,
        label:
          'Fraternité Matin a collaboré avec quelle organisation pour la formation des jeunes journalistes ?',
        createdDate: '2024-10-25',
        questionnaireId: 5,
        correctAnswerId: 185,
        options: [
          {
            id: 185,
            label: "International Journalists' Network",
            questionId: 47,
          },
          { id: 186, label: 'African Media Initiative', questionId: 47 },
          { id: 187, label: 'European Journalism Centre', questionId: 47 },
          { id: 188, label: 'World Association of Newspapers', questionId: 47 },
        ],
      },
      {
        id: 48,
        label:
          "Quel projet de collaboration a été lancé par Fraternité Matin pour améliorer l'accès à l'information ?",
        createdDate: '2024-10-25',
        questionnaireId: 5,
        correctAnswerId: 189,
        options: [
          {
            id: 189,
            label: 'Un programme de journalisme mobile',
            questionId: 48,
          },
          {
            id: 190,
            label: "Un site d'actualités participatif",
            questionId: 48,
          },
          {
            id: 191,
            label: 'Une série de podcasts informatifs',
            questionId: 48,
          },
          { id: 192, label: 'Un journal en braille', questionId: 48 },
        ],
      },
      {
        id: 49,
        label:
          'Avec quel groupe a Fraternité Matin collaboré pour promouvoir la culture ivoirienne en 2022 ?',
        createdDate: '2024-10-25',
        questionnaireId: 5,
        correctAnswerId: 193,
        options: [
          { id: 193, label: 'Groupe de musique ivoirien', questionId: 49 },
          { id: 194, label: 'Ministère de la Culture', questionId: 49 },
          {
            id: 195,
            label: 'Fondation Félix Houphouët-Boigny',
            questionId: 49,
          },
          { id: 196, label: 'Centre culturel français', questionId: 49 },
        ],
      },
      {
        id: 50,
        label:
          "Quel type d'événement Fraternité Matin a-t-il organisé avec des entreprises pour renforcer les liens communautaires ?",
        createdDate: '2024-10-25',
        questionnaireId: 5,
        correctAnswerId: 197,
        options: [
          { id: 197, label: 'Des journées portes ouvertes', questionId: 50 },
          { id: 198, label: 'Des concerts de charité', questionId: 50 },
          { id: 199, label: "Des forums d'emploi", questionId: 50 },
          { id: 200, label: "Des séminaires d'affaires", questionId: 50 },
        ],
      },
    ],
  },
  {
    id: 6,
    label: 'Équipe et Direction de Fraternité Matin',
    createdDate: '2024-10-25',
    enabled: true,
    questions: [
      {
        id: 51,
        label: 'Qui est le directeur actuel de Fraternité Matin ?',
        createdDate: '2024-10-25',
        questionnaireId: 6,
        correctAnswerId: 201,
        options: [
          { id: 201, label: 'Venance Konan', questionId: 51 },
          { id: 202, label: 'Jean-Pierre Sidi', questionId: 51 },
          { id: 203, label: 'Alain Gbagbo', questionId: 51 },
          { id: 204, label: 'Kouadio Kouassi', questionId: 51 },
        ],
      },
      {
        id: 52,
        label:
          'Quel poste occupe le responsable des ressources humaines chez Fraternité Matin ?',
        createdDate: '2024-10-25',
        questionnaireId: 6,
        correctAnswerId: 205,
        options: [
          {
            id: 205,
            label: 'Directeur des ressources humaines',
            questionId: 52,
          },
          { id: 206, label: 'Chargé de communication', questionId: 52 },
          { id: 207, label: 'Directeur financier', questionId: 52 },
          { id: 208, label: 'Responsable marketing', questionId: 52 },
        ],
      },
      {
        id: 53,
        label:
          "Qui fait partie de l'équipe rédactionnelle de Fraternité Matin ?",
        createdDate: '2024-10-25',
        questionnaireId: 6,
        correctAnswerId: 209,
        options: [
          { id: 209, label: 'Des journalistes et rédacteurs', questionId: 53 },
          { id: 210, label: 'Des graphistes et illustrateurs', questionId: 53 },
          {
            id: 211,
            label: 'Des spécialistes en informatique',
            questionId: 53,
          },
          {
            id: 212,
            label: "Tous les employés de l'entreprise",
            questionId: 53,
          },
        ],
      },
      {
        id: 54,
        label:
          'Quel est le rôle du directeur de la publication chez Fraternité Matin ?',
        createdDate: '2024-10-25',
        questionnaireId: 6,
        correctAnswerId: 213,
        options: [
          { id: 213, label: 'Assurer la conformité légale', questionId: 54 },
          { id: 214, label: 'Superviser les ventes', questionId: 54 },
          { id: 215, label: 'Gérer les ressources humaines', questionId: 54 },
          {
            id: 216,
            label: 'Concevoir la stratégie marketing',
            questionId: 54,
          },
        ],
      },
      {
        id: 55,
        label:
          'Qui est en charge de la communication externe chez Fraternité Matin ?',
        createdDate: '2024-10-25',
        questionnaireId: 6,
        correctAnswerId: 217,
        options: [
          {
            id: 217,
            label: 'Le responsable de la communication',
            questionId: 55,
          },
          { id: 218, label: 'Le directeur financier', questionId: 55 },
          { id: 219, label: 'Le directeur général', questionId: 55 },
          {
            id: 220,
            label: 'Le chargé des affaires publiques',
            questionId: 55,
          },
        ],
      },
      {
        id: 56,
        label:
          "Quel est le rôle principal de l'équipe technique de Fraternité Matin ?",
        createdDate: '2024-10-25',
        questionnaireId: 6,
        correctAnswerId: 221,
        options: [
          {
            id: 221,
            label: "Gérer les systèmes d'information",
            questionId: 56,
          },
          { id: 222, label: 'Rédiger les articles', questionId: 56 },
          {
            id: 223,
            label: 'Concevoir des campagnes publicitaires',
            questionId: 56,
          },
          { id: 224, label: 'Former les nouveaux employés', questionId: 56 },
        ],
      },
      {
        id: 57,
        label: 'Qui est le chef de la rédaction de Fraternité Matin ?',
        createdDate: '2024-10-25',
        questionnaireId: 6,
        correctAnswerId: 225,
        options: [
          { id: 225, label: 'Mamadou Koulibaly', questionId: 57 },
          { id: 226, label: 'Alice Tchala', questionId: 57 },
          { id: 227, label: 'Emmanuelle Adje', questionId: 57 },
          { id: 228, label: 'Abdoulaye Diallo', questionId: 57 },
        ],
      },
      {
        id: 58,
        label:
          'Quelle est la principale responsabilité du directeur marketing chez Fraternité Matin ?',
        createdDate: '2024-10-25',
        questionnaireId: 6,
        correctAnswerId: 229,
        options: [
          {
            id: 229,
            label: 'Développer des stratégies de communication',
            questionId: 58,
          },
          { id: 230, label: 'Gérer le personnel', questionId: 58 },
          { id: 231, label: 'Rédiger des articles', questionId: 58 },
          {
            id: 232,
            label: 'Assurer le contrôle de la qualité',
            questionId: 58,
          },
        ],
      },
      {
        id: 59,
        label:
          'Quel est le rôle du comité de direction chez Fraternité Matin ?',
        createdDate: '2024-10-25',
        questionnaireId: 6,
        correctAnswerId: 233,
        options: [
          {
            id: 233,
            label: 'Prendre des décisions stratégiques',
            questionId: 59,
          },
          { id: 234, label: 'Superviser la rédaction', questionId: 59 },
          { id: 235, label: 'Gérer les finances', questionId: 59 },
          { id: 236, label: 'Contrôler la production', questionId: 59 },
        ],
      },
      {
        id: 60,
        label:
          'Quel poste le directeur des opérations occupe-t-il chez Fraternité Matin ?',
        createdDate: '2024-10-25',
        questionnaireId: 6,
        correctAnswerId: 237,
        options: [
          {
            id: 237,
            label: 'Superviser les activités quotidiennes',
            questionId: 60,
          },
          { id: 238, label: 'Gérer la stratégie de contenu', questionId: 60 },
          { id: 239, label: 'Développer des applications', questionId: 60 },
          { id: 240, label: 'Animer les réseaux sociaux', questionId: 60 },
        ],
      },
    ],
  },
  {
    id: 7,
    label: 'Projets futurs de Fraternité Matin',
    createdDate: '2024-10-25',
    enabled: true,
    questions: [
      {
        id: 61,
        label:
          'Quel projet Fraternité Matin prévoit-il de lancer pour renforcer sa présence en ligne ?',
        createdDate: '2024-10-25',
        questionnaireId: 7,
        correctAnswerId: 241,
        options: [
          {
            id: 241,
            label: 'Une plateforme de contenu interactif',
            questionId: 61,
          },
          {
            id: 242,
            label: 'Une application mobile de lecture',
            questionId: 61,
          },
          { id: 243, label: 'Un site de vente en ligne', questionId: 61 },
          { id: 244, label: 'Un blog de voyage', questionId: 61 },
        ],
      },
      {
        id: 62,
        label:
          "Quel nouveau format de contenu Fraternité Matin envisage-t-il d'introduire ?",
        createdDate: '2024-10-25',
        questionnaireId: 7,
        correctAnswerId: 245,
        options: [
          { id: 245, label: "Des podcasts d'actualités", questionId: 62 },
          { id: 246, label: 'Des vidéos en direct', questionId: 62 },
          { id: 247, label: 'Des newsletters hebdomadaires', questionId: 62 },
          { id: 248, label: 'Des reportages écrits', questionId: 62 },
        ],
      },
      {
        id: 63,
        label:
          "Fraternité Matin prévoit de s'associer avec quel type d'organisations pour ses futurs projets ?",
        createdDate: '2024-10-25',
        questionnaireId: 7,
        correctAnswerId: 249,
        options: [
          { id: 249, label: 'Des ONG', questionId: 63 },
          { id: 250, label: 'Des entreprises technologiques', questionId: 63 },
          { id: 251, label: 'Des gouvernements', questionId: 63 },
          { id: 252, label: 'Des écoles de journalisme', questionId: 63 },
        ],
      },
      {
        id: 64,
        label:
          "Quel est l'objectif principal du projet d'éducation média de Fraternité Matin ?",
        createdDate: '2024-10-25',
        questionnaireId: 7,
        correctAnswerId: 253,
        options: [
          {
            id: 253,
            label: 'Sensibiliser aux fausses informations',
            questionId: 64,
          },
          { id: 254, label: 'Former des journalistes', questionId: 64 },
          { id: 255, label: 'Promouvoir la lecture', questionId: 64 },
          {
            id: 256,
            label: 'Développer des compétences en écriture',
            questionId: 64,
          },
        ],
      },
      {
        id: 65,
        label:
          'Quel type de contenu Fraternité Matin souhaite-t-il produire dans le cadre de son nouveau projet ?',
        createdDate: '2024-10-25',
        questionnaireId: 7,
        correctAnswerId: 257,
        options: [
          { id: 257, label: 'Des documentaires', questionId: 65 },
          { id: 258, label: 'Des romans', questionId: 65 },
          { id: 259, label: 'Des guides pratiques', questionId: 65 },
          { id: 260, label: 'Des revues littéraires', questionId: 65 },
        ],
      },
      {
        id: 66,
        label:
          'Quel projet de diversification Fraternité Matin envisage-t-il ?',
        createdDate: '2024-10-25',
        questionnaireId: 7,
        correctAnswerId: 261,
        options: [
          { id: 261, label: 'Lancer une chaîne de télévision', questionId: 66 },
          { id: 262, label: "Créer une maison d'édition", questionId: 66 },
          {
            id: 263,
            label: 'Développer une plateforme de formation en ligne',
            questionId: 66,
          },
          {
            id: 264,
            label: 'Organiser des événements culturels',
            questionId: 66,
          },
        ],
      },
      {
        id: 67,
        label:
          "Fraternité Matin prévoit d'élargir son audience à quel groupe ?",
        createdDate: '2024-10-25',
        questionnaireId: 7,
        correctAnswerId: 265,
        options: [
          { id: 265, label: 'Les jeunes', questionId: 67 },
          { id: 266, label: 'Les seniors', questionId: 67 },
          { id: 267, label: 'Les professionnels', questionId: 67 },
          { id: 268, label: 'Les expatriés', questionId: 67 },
        ],
      },
      {
        id: 68,
        label:
          "Quel événement Fraternité Matin prévoit-il d'organiser pour célébrer son anniversaire ?",
        createdDate: '2024-10-25',
        questionnaireId: 7,
        correctAnswerId: 269,
        options: [
          { id: 269, label: 'Un gala de charité', questionId: 68 },
          { id: 270, label: 'Un concert', questionId: 68 },
          { id: 271, label: 'Une exposition', questionId: 68 },
          { id: 272, label: 'Un festival', questionId: 68 },
        ],
      },
      {
        id: 69,
        label:
          "Quel type d'initiatives Fraternité Matin souhaite-t-il développer pour renforcer la culture locale ?",
        createdDate: '2024-10-25',
        questionnaireId: 7,
        correctAnswerId: 273,
        options: [
          {
            id: 273,
            label: 'Des programmes de valorisation des artistes',
            questionId: 69,
          },
          { id: 274, label: 'Des compétitions sportives', questionId: 69 },
          { id: 275, label: "Des séminaires d'éducation", questionId: 69 },
          { id: 276, label: "Des projets d'infrastructure", questionId: 69 },
        ],
      },
      {
        id: 70,
        label:
          'Quelle est la priorité de Fraternité Matin pour les prochaines années ?',
        createdDate: '2024-10-25',
        questionnaireId: 7,
        correctAnswerId: 277,
        options: [
          {
            id: 277,
            label: 'Innover dans les formats de contenu',
            questionId: 70,
          },
          { id: 278, label: "Augmenter le chiffre d'affaires", questionId: 70 },
          { id: 279, label: 'Accroître le personnel', questionId: 70 },
          {
            id: 280,
            label: 'Élargir le réseau de partenaires',
            questionId: 70,
          },
        ],
      },
    ],
  },
  {
    id: 8,
    label: 'Évolution des médias et adaptation de Fraternité Matin',
    createdDate: '2024-10-25',
    enabled: true,
    questions: [
      {
        id: 71,
        label:
          'Comment Fraternité Matin a-t-il réagi à la montée des médias numériques ?',
        createdDate: '2024-10-25',
        questionnaireId: 8,
        correctAnswerId: 281,
        options: [
          {
            id: 281,
            label: 'En développant une présence en ligne',
            questionId: 71,
          },
          { id: 282, label: 'En réduisant ses publications', questionId: 71 },
          {
            id: 283,
            label: 'En se concentrant uniquement sur le papier',
            questionId: 71,
          },
          { id: 284, label: 'En cessant toute activité', questionId: 71 },
        ],
      },
      {
        id: 72,
        label:
          'Quel outil numérique Fraternité Matin utilise-t-il pour interagir avec son audience ?',
        createdDate: '2024-10-25',
        questionnaireId: 8,
        correctAnswerId: 285,
        options: [
          { id: 285, label: 'Les réseaux sociaux', questionId: 72 },
          { id: 286, label: 'Les courriers électroniques', questionId: 72 },
          { id: 287, label: 'Les SMS', questionId: 72 },
          { id: 288, label: 'Les publicités télévisées', questionId: 72 },
        ],
      },
      {
        id: 73,
        label:
          'Quelle stratégie Fraternité Matin a-t-il adoptée pour attirer les jeunes lecteurs ?',
        createdDate: '2024-10-25',
        questionnaireId: 8,
        correctAnswerId: 289,
        options: [
          { id: 289, label: 'Créer du contenu interactif', questionId: 73 },
          {
            id: 290,
            label: 'Diminuer la fréquence des publications',
            questionId: 73,
          },
          {
            id: 291,
            label: 'Investir uniquement dans des articles longs',
            questionId: 73,
          },
          { id: 292, label: "Éviter les sujets d'actualité", questionId: 73 },
        ],
      },
      {
        id: 74,
        label:
          'Quel changement technologique a le plus influencé Fraternité Matin ?',
        createdDate: '2024-10-25',
        questionnaireId: 8,
        correctAnswerId: 293,
        options: [
          { id: 293, label: "L'émergence d'Internet", questionId: 74 },
          { id: 294, label: 'La télévision', questionId: 74 },
          { id: 295, label: 'La radio', questionId: 74 },
          { id: 296, label: "L'imprimerie", questionId: 74 },
        ],
      },
      {
        id: 75,
        label:
          "Quelle est l'une des principales adaptations de Fraternité Matin face à l'évolution des médias ?",
        createdDate: '2024-10-25',
        questionnaireId: 8,
        correctAnswerId: 297,
        options: [
          {
            id: 297,
            label: "Lancement d'une application mobile",
            questionId: 75,
          },
          {
            id: 298,
            label: 'Augmentation du prix des journaux',
            questionId: 75,
          },
          {
            id: 299,
            label: 'Réduction du nombre de journalistes',
            questionId: 75,
          },
          {
            id: 300,
            label: 'Suppression des rubriques spécialisées',
            questionId: 75,
          },
        ],
      },
      {
        id: 76,
        label:
          'Quel type de contenu Fraternité Matin a-t-il commencé à privilégier récemment ?',
        createdDate: '2024-10-25',
        questionnaireId: 8,
        correctAnswerId: 301,
        options: [
          { id: 301, label: 'Du contenu vidéo', questionId: 76 },
          { id: 302, label: "Des articles d'opinion", questionId: 76 },
          { id: 303, label: 'Des interviews écrites', questionId: 76 },
          { id: 304, label: 'Des critiques de livres', questionId: 76 },
        ],
      },
      {
        id: 77,
        label:
          "Fraternité Matin a-t-il envisagé des partenariats avec d'autres médias ?",
        createdDate: '2024-10-25',
        questionnaireId: 8,
        correctAnswerId: 305,
        options: [
          { id: 305, label: 'Oui, pour des collaborations', questionId: 77 },
          { id: 306, label: 'Non, jamais', questionId: 77 },
          { id: 307, label: 'Oui, pour des acquisitions', questionId: 77 },
          {
            id: 308,
            label: 'Oui, uniquement pour la publicité',
            questionId: 77,
          },
        ],
      },
      {
        id: 78,
        label:
          "Quel défi majeur Fraternité Matin a-t-il dû surmonter en s'adaptant aux nouveaux médias ?",
        createdDate: '2024-10-25',
        questionnaireId: 8,
        correctAnswerId: 309,
        options: [
          { id: 309, label: 'La concurrence accrue', questionId: 78 },
          { id: 310, label: 'Le manque de contenu', questionId: 78 },
          { id: 311, label: "La réduction de l'audience", questionId: 78 },
          {
            id: 312,
            label: "La hausse des coûts d'impression",
            questionId: 78,
          },
        ],
      },
      {
        id: 79,
        label:
          "Quel est l'un des principaux objectifs de Fraternité Matin pour l'avenir en matière d'adaptation ?",
        createdDate: '2024-10-25',
        questionnaireId: 8,
        correctAnswerId: 313,
        options: [
          {
            id: 313,
            label: "S'adapter aux nouvelles technologies",
            questionId: 79,
          },
          {
            id: 314,
            label: 'Se concentrer uniquement sur les imprimeries',
            questionId: 79,
          },
          { id: 315, label: "Augmenter le nombre d'articles", questionId: 79 },
          { id: 316, label: 'Réduire les coûts', questionId: 79 },
        ],
      },
      {
        id: 80,
        label:
          'Quelle a été la réaction des lecteurs face aux changements de Fraternité Matin ?',
        createdDate: '2024-10-25',
        questionnaireId: 8,
        correctAnswerId: 317,
        options: [
          { id: 317, label: 'Majorité favorable', questionId: 80 },
          { id: 318, label: 'Majorité défavorable', questionId: 80 },
          { id: 319, label: 'Indifférence générale', questionId: 80 },
          { id: 320, label: 'Aucune opinion', questionId: 80 },
        ],
      },
    ],
  },
];
