// src/data/services.js
export const services = [
  {
    id: 1,
    slug: "microblading",
    name: "Microblading",
    imageHero: "microblading-hero", // nom de l'image principale sans extension
    images: ["microblading-1", "microblading-2"], // autres images illustratives
    description: `Le Microblading est une technique de maquillage semi-permanent des sourcils, réalisée par Fatma, seule praticienne de l’institut à Lanester. Cette méthode permet de redessiner et densifier les sourcils de manière naturelle et harmonieuse. Idéal pour les clientes de Lorient, Hennebont, Larmor-Plage, Ploemeur et Quéven, le Microblading offre un résultat durable jusqu’à 18 mois, parfaitement adapté à votre morphologie et couleur de peau.`,
    sessionDetails: `La séance de Microblading se déroule de manière professionnelle et personnalisée : dessin des sourcils adapté à votre morphologie, application du pigment semi-permanent, et suivi avec une retouche prévue 4 à 6 semaines après la première séance.`,
    benefits: [
      "Sourcils parfaitement dessinés et densifiés.",
      "Effet naturel et durable jusqu’à 18 mois.",
      "Gain de temps chaque matin pour le maquillage.",
      "Résultat harmonieux adapté à votre morphologie.",
      "Séance indolore et réalisée par une praticienne qualifiée.",
      "Correction des asymétries ou lacunes dans les sourcils.",
      "Suivi personnalisé avec retouche incluse."
    ],
    sessionsAvailable: "1 séance initiale suivie d’une retouche après 4 à 6 semaines.",
    faq: [
      {
        question: "Les pigments restent-ils visibles longtemps ?",
        answer: [
          {
            children: [
              { text: "Les pigments restent visibles environ 12 à 18 mois, selon le type de peau et l’entretien." }
            ]
          }
        ]
      },
      {
        question: "La séance est-elle douloureuse ?",
        answer: [
          {
            children: [
              { text: "La séance est peu douloureuse, grâce à un anesthésiant appliqué avant le tracé." }
            ]
          }
        ]
      },
      {
        question: "Faut-il préparer la peau avant la séance ?",
        answer: [
          {
            children: [
              { text: "Évitez l’exposition au soleil, les peelings chimiques et l’épilation des sourcils 48h avant la séance." }
            ]
          }
        ]
      },
      {
        question: "Y a-t-il des contre-indications ?",
        answer: [
          {
            children: [
              { text: "Les femmes enceintes, personnes sous traitement dermatologique ou avec certaines maladies de peau doivent reporter la séance." }
            ]
          }
        ]
      },
      {
        question: "Une retouche est-elle nécessaire ?",
        answer: [
          {
            children: [
              { text: "Oui, une retouche est prévue 4 à 6 semaines après la première séance pour un résultat optimal." }
            ]
          }
        ]
      },
      {
        question: "À qui s’adresse le Microblading ?",
        answer: [
          {
            children: [
              { text: "Le Microblading s’adresse à toute personne souhaitant redessiner ou densifier ses sourcils de manière naturelle et durable." }
            ]
          }
        ]
      }
    ]
  },

  {
    id: 2,
    slug: "microneedling",
    name: "Microneedling",
    imageHero: "microneedling-hero",
    images: ["microneedling-1", "microneedling-2"],
    description: `Le Microneedling à Lanester est un soin esthétique professionnel conçu pour stimuler la production naturelle de collagène et régénérer la peau en profondeur. 
Idéal pour les personnes de Lorient, Hennebont et les communes proches, ce traitement non invasif lisse les rides, atténue les cicatrices d’acné, réduit les taches pigmentaires et améliore la texture et l’élasticité de la peau. 
Réalisé par des praticiens expérimentés, le microneedling visage offre un résultat naturel, lumineux et raffermi, sans chirurgie, avec un minimum de contraintes et une récupération rapide. 
Ce soin est recommandé pour toute personne souhaitant retrouver un teint éclatant, une peau plus ferme et un visage rajeuni.`,
    sessionDetails: `Chaque séance commence par un nettoyage minutieux de la peau et l’application d’une crème anesthésiante, assurant un confort optimal. 
Le praticien effectue ensuite des passages précis avec le dispositif à micro-aiguilles sur les zones ciblées pour stimuler la production de collagène et d’élastine. 
La séance dure environ 45 minutes à 1 heure et se termine par l’application d’un sérum apaisant et hydratant, maximisant l’effet régénérant du soin.`,
    benefits: [
      "Stimulation naturelle du collagène et de l’élastine pour une peau plus ferme",
      "Réduction des rides, ridules et cicatrices d’acné",
      "Atténuation des taches et uniformisation du teint",
      "Amélioration de la texture et de l’élasticité de la peau",
      "Soin visage non invasif, adapté à tous types de peau"
    ],
    sessionsAvailable: "Pour des résultats durables, nous recommandons une cure de 3 à 6 séances, espacées de 3 semaines. Les habitants de Lanester, Lorient et Hennebont profitent ainsi d’une peau visiblement plus ferme et d’un teint uniformisé au fil des séances.",
    faq: [
      {
        question: "Combien de séances sont nécessaires pour un résultat optimal ?",
        answer: [
          {
            children: [
              {
                text: "Pour des résultats durables, une cure de 3 à 6 séances espacées de 3 à 4 semaines est recommandée. Les habitants de Lanester, Lorient et Hennebont remarquent une peau plus ferme et un teint plus uniforme dès la première séance."
              }
            ]
          }
        ]
      },
      {
        question: "La séance est-elle douloureuse ?",
        answer: [
          {
            children: [
              {
                text: "Le soin utilise de fines micro-aiguilles pour stimuler la peau. Une crème anesthésiante est appliquée au préalable pour garantir un confort maximal. La sensation peut être décrite comme un léger picotement."
              }
            ]
          }
        ]
      },
      {
        question: "Le microneedling est-il adapté à tous les types de peau ?",
        answer: [
          {
            children: [
              {
                text: "Oui, le microneedling est adapté aux peaux sensibles, sèches, matures ou sujettes aux cicatrices d’acné. Il aide à réduire rides, imperfections et irrégularités du teint, tout en stimulant la régénération naturelle de la peau."
              }
            ]
          }
        ]
      },
      {
        question: "Faut-il suivre des précautions après la séance ?",
        answer: [
          {
            children: [
              {
                text: "Après le soin, il est conseillé de protéger la peau du soleil, d’éviter les produits irritants et de suivre nos recommandations pour maximiser les résultats et prolonger l’effet rajeunissant."
              }
            ]
          }
        ]
      },
      {
        question: "À qui s’adresse le microneedling ?",
        answer: [
          {
            children: [
              {
                text: "Le microneedling s’adresse à toute personne souhaitant stimuler la production de collagène, améliorer l’élasticité de la peau et atténuer rides, ridules, cicatrices ou taches pigmentaires pour un teint plus uniforme et raffermi."
              }
            ]
          }
        ]
      }
    ]
  },

  {
    slug: "soin-visage-and-corps",
    name: "Soin Visage & Corps",
    imageHero: "soin-visage-corps-hero",
    images: ["soin-visage-corps-1", "soin-visage-corps-2"],
    description:
      "Les Soins Visage et Corps à Lanester offrent une approche complète de bien-être et de beauté, combinant relaxation, hydratation et régénération de la peau. Idéal pour les habitants de Lorient, Hennebont et leurs environs, chaque soin est personnalisé selon votre type de peau et vos besoins spécifiques. L’institut est tenu par une praticienne unique, garantissant une attention individualisée et un suivi sur mesure. Ces soins contribuent à nourrir, tonifier et revitaliser la peau, tout en offrant un moment de détente profonde pour le visage et le corps.",
    sessionDetails:
      "La séance commence par un diagnostic de la peau et un nettoyage en profondeur, suivi de gommages, massages et applications de masques adaptés à votre type de peau. La praticienne applique ensuite des sérums, crèmes ou huiles spécifiques pour hydrater et régénérer la peau du visage et du corps. Chaque séance dure 60 à 90 minutes, offrant un moment de détente complet et un soin personnalisé et sur mesure.",
    benefits: ["Hydratation et régénération profonde de la peau",
      "Tonification et élasticité améliorée du visage et du corps",
      "Relaxation et bien-être complet pendant la séance",
      "Soin personnalisé selon le type de peau et les besoins",
      "Suivi individuel et attention personnalisée par la praticienne",],
    sessionsAvailable: "Pour un effet durable et optimal, il est conseillé de suivre une cure de 4 à 6 séances, espacées de 2 à 3 semaines. Ces soins peuvent également être planifiés avant un événement spécial ou en entretien régulier pour conserver une peau éclatante et revitalisée, toujours avec un suivi individualisé par la praticienne.",
    servicesSimilaires: [],
    faq: [
      {
        question: "Les soins conviennent-ils à tous les types de peau ?",
        answer: [{ children: [{ text: "Oui, les soins sont adaptés à tous les types de peau, y compris les peaux sensibles ou réactives. La praticienne adapte chaque étape pour nourrir, apaiser et revitaliser la peau de façon optimale." }] }]
      },
      {
        question: "Combien de séances sont recommandées pour un effet durable ?",
        answer: [{ children: [{ text: "Une cure de 4 à 6 séances, espacées de 2 à 3 semaines, permet de maintenir l’éclat, la fermeté et l’hydratation de la peau." }] }]
      },
      {
        question: "Faut-il préparer la peau avant la séance ?",
        answer: [{ children: [{ text: "Il n’y a pas de préparation spécifique requise. Nous recommandons simplement d’éviter l’exposition solaire excessive et de venir reposée et détendue, pour profiter pleinement du soin." }] }]
      },
      {
        question: "Les soins sont-ils relaxants et sûrs ?",
        answer: [{ children: [{ text: "Oui, chaque soin combine techniques professionnelles et produits de qualité, garantissant un moment de détente complet et une sécurité maximale pour la peau." }] }]
      },
    ],
    shortDescription:
      "Rituel complet pour harmoniser votre corps et votre esprit avec un soin visage & corps.",
  },

  {
    id: 5,
    slug: "winner-filler",
    name: "Winner Filler",
    imageHero: "winner-filler-hero",
    images: ["winner-filler-1", "winner-filler-2"],
    description: `Le Winner Filler à Lanester est un soin esthétique avancé pour repulper, lisser et redéfinir les volumes du visage. 
Idéal pour les habitants de Lorient, Hennebont et leurs environs, ce traitement non invasif permet de combler les rides, restaurer l’harmonie du visage et sublimer vos traits de manière naturelle. 
L’institut est tenu par une praticienne unique, vous offrant un suivi personnalisé et une approche sécurisée pour des résultats précis et durables. 
Le Winner Filler combine techniques expertes et produits de qualité médicale pour un visage plus jeune et raffermi.`,
    sessionDetails: `Chaque séance commence par un nettoyage et désinfection de la peau, suivi d’une évaluation précise des zones à traiter. 
La praticienne injecte ensuite le Winner Filler pour combler les rides et redessiner les volumes, en respectant l’équilibre naturel du visage. 
Chaque séance dure environ 30 à 60 minutes, et inclut un soin post-injection pour apaiser la peau et optimiser les résultats.`,
    benefits: [
      "Comblement efficace des rides et ridules",
      "Redéfinition naturelle des volumes du visage",
      "Résultat visible et durable sans chirurgie",
      "Effet rajeunissant et harmonieux du visage",
      "Soin personnalisé avec suivi individuel par la praticienne"
    ],
    sessionsAvailable: "Pour un effet durable et optimal, 1 à 2 séances suffisent généralement selon la zone et le type de correction souhaitée. Un entretien annuel ou semestriel est conseillé pour maintenir les résultats. Ce soin est également idéal pour préparer le visage avant un événement spécial, toujours avec un suivi personnalisé par la praticienne.",
    faq: [
      {
        question: "La séance est-elle douloureuse ?",
        answer: [
          {
            children: [
              {
                text: "Le soin est réalisé avec des techniques douces et un anesthésiant local si nécessaire, garantissant un confort maximal pendant toute la séance."
              }
            ]
          }
        ]
      },
      {
        question: "Combien de séances sont nécessaires ?",
        answer: [
          {
            children: [
              {
                text: "Selon la zone et la correction souhaitée, 1 à 2 séances suffisent généralement. Un entretien régulier permet de maintenir l’effet rajeunissant sur le long terme."
              }
            ]
          }
        ]
      },
      {
        question: "Le Winner Filler est-il adapté à tous les types de peau ?",
        answer: [
          {
            children: [
              {
                text: "Oui, le Winner Filler est adapté à la plupart des peaux adultes et est ajusté par la praticienne pour garantir un résultat naturel et sûr."
              }
            ]
          }
        ]
      },
      {
        question: "Faut-il suivre des précautions après la séance ?",
        answer: [
          {
            children: [
              {
                text: "Après la séance, il est conseillé d’éviter le soleil direct, les activités physiques intenses et de suivre les conseils de la praticienne pour optimiser la récupération et les résultats."
              }
            ]
          }
        ]
      },
      {
        question: "À qui s’adresse le Winner Filler ?",
        answer: [
          {
            children: [
              {
                text: "Le Winner Filler s’adresse à toute personne souhaitant repulper, lisser et redéfinir les volumes du visage de manière naturelle et durable, avec un suivi personnalisé par une praticienne qualifiée."
              }
            ]
          }
        ]
      }
    ]
  },

  {
    id: 6,
    slug: "acide-hyaluronique",
    name: "Acide Hyaluronique",
    imageHero: "acide-hyaluronique-hero",
    images: ["acide-hyaluronique-1", "acide-hyaluronique-2"],
    description: `L’Acide Hyaluronique est un soin non invasif de rajeunissement du visage et du corps, réalisé par Fatma, praticienne unique de l’institut à Lanester. 
Il hydrate intensément la peau, comble rides et ridules, et redonne du volume aux zones relâchées. Adapté à tous types de peau, il procure un résultat naturel et harmonieux. 
Disponible pour les clientes de Lorient, Hennebont, Larmor-Plage, Ploemeur et Quéven.`,
    sessionDetails: `Après une analyse personnalisée de votre peau, Fatma prépare les zones à traiter et applique le gel d’acide hyaluronique par micro-injections ciblées. 
La séance dure entre 45 minutes et 1 heure selon les zones et la quantité de produit utilisée. 
Un massage doux répartit le gel pour un effet uniforme, suivi d’une application apaisante pour limiter rougeurs et inconforts. Séance indolore et sécurisée.`,
    benefits: [
      "Comblement immédiat des rides et ridules pour un effet visible dès la séance",
      "Hydratation intense qui redonne souplesse et élasticité à la peau",
      "Redensification des volumes du visage : lèvres, pommettes et contours",
      "Résultat naturel et harmonieux, sans effet figé",
      "Peau visiblement plus jeune, lisse et lumineuse",
      "Effet durable, pouvant être entretenu par des retouches périodiques",
      "Adapté à tous types de peau et à toutes les morphologies"
    ],
    sessionsAvailable: "Séance unique idéale pour un résultat immédiat. Pour un effet durable et harmonieux, il est recommandé de répéter la séance tous les 6 à 12 mois, selon le métabolisme individuel et les zones traitées. Disponible pour les clientes de Lanester, Lorient, Hennebont, Larmor-Plage, Ploemeur et Quéven.",
    faq: [
      {
        question: "Quand les résultats sont-ils visibles et combien de temps durent-ils ?",
        answer: [
          { children: [{ text: "Les résultats sont visibles immédiatement et peuvent durer entre 6 et 12 mois selon la zone traitée et le métabolisme de la peau. Des retouches sont possibles pour maintenir l’effet." }] }
        ]
      },
      {
        question: "La séance est-elle douloureuse ?",
        answer: [
          { children: [{ text: "La séance est indolore grâce à l’utilisation d’un gel anesthésiant. Un soin apaisant est appliqué à la fin pour limiter toute gêne." }] }
        ]
      },
      {
        question: "Ce soin est-il sûr pour tous les types de peau ?",
        answer: [
          { children: [{ text: "Ce soin est sûr pour la majorité des peaux. En cas de grossesse, d’allergies spécifiques ou de pathologies cutanées, consultez le praticien avant la séance." }] }
        ]
      },
      {
        question: "À qui s’adresse le soin à l’Acide Hyaluronique ?",
        answer: [
          { children: [{ text: "À toute personne souhaitant hydrater sa peau, combler rides et ridules, redensifier les volumes du visage et obtenir un résultat naturel et harmonieux." }] }
        ]
      },
      {
        question: "Combien de séances sont nécessaires ?",
        answer: [
          { children: [{ text: "Une séance unique peut suffire pour un résultat immédiat, mais pour un effet durable et harmonieux, il est recommandé de répéter la séance tous les 6 à 12 mois selon le métabolisme et les zones traitées." }] }
        ]
      }
    ]
  },

  {
    id: 7,
    slug: "onglerie",
    name: "Onglerie",
    imageHero: "onglerie-hero",
    images: ["onglerie-1", "onglerie-2"],
    description: `L’Onglerie à Lanester vous propose des soins professionnels et personnalisés pour sublimer vos mains et vos pieds. 
Idéal pour les habitants de Lorient, Hennebont et leurs environs, l’institut est tenu par une praticienne unique, qui vous accompagne de manière individuelle tout au long de votre soin. 
Vous bénéficiez d’une attention personnalisée, avec des techniques expertes pour la pose de vernis semi-permanent, manucure, pédicure et nail art. 
Chaque prestation est réalisée avec des produits de qualité professionnelle pour des ongles sains, solides et élégants, que vous souhaitiez un style naturel ou sophistiqué.`,
    sessionDetails: `La séance commence par un nettoyage et préparation des ongles, suivi d’un soin complet des cuticules et des mains/pieds pour garantir la santé et la beauté de vos ongles. 
Ensuite, la praticienne applique le vernis semi-permanent, les capsules ou le nail art avec précision. 
Chaque séance dure environ 45 à 90 minutes, selon le type de prestation, et se termine par l’application d’un sérum ou d’une huile nourrissante, pour des ongles et cuticules parfaitement hydratés et sublimés.`,
    benefits: [
      "Ongles renforcés et en parfaite santé",
      "Pose de vernis semi-permanent longue durée",
      "Soin des cuticules et hydratation optimale",
      "Nail art personnalisé pour un style unique",
      "Suivi individualisé et attention personnalisée par la praticienne"
    ],
    sessionsAvailable: "Pour un résultat durable, il est conseillé de prévoir une séance toutes les 3 à 4 semaines pour les poses de vernis semi-permanent ou le nail art. Les soins peuvent également être planifiés pour préparer vos mains et pieds avant un événement spécial, ou pour un entretien régulier, toujours avec un suivi individualisé par la praticienne.",
    faq: [
      {
        question: "Tous les types d’ongles sont-ils pris en charge ?",
        answer: [
          { children: [{ text: "Oui, tous les types d’ongles sont pris en charge. La praticienne adapte les techniques et produits pour garantir des ongles sains, solides et esthétiques, même pour les peaux ou ongles sensibles." }] }
        ]
      },
      {
        question: "Quelle est la durée du vernis semi-permanent et à quelle fréquence prévoir une séance ?",
        answer: [
          { children: [{ text: "Le vernis semi-permanent dure généralement 3 à 4 semaines. Pour un entretien optimal, il est recommandé de prévoir une séance toutes les 3 à 4 semaines, toujours avec un suivi individualisé par la praticienne." }] }
        ]
      },
      {
        question: "Les outils et produits sont-ils hygiéniques et sûrs ?",
        answer: [
          { children: [{ text: "Oui, tous les outils sont désinfectés et stérilisés après chaque séance. Les produits utilisés sont professionnels et respectueux de la santé des ongles et de la peau." }] }
        ]
      },
      {
        question: "Faut-il réserver à l’avance ?",
        answer: [
          { children: [{ text: "Oui, pour garantir votre créneau et profiter d’un soin personnalisé, il est recommandé de réserver à l’avance, surtout les week-ends ou avant les événements spéciaux." }] }
        ]
      }
    ]
  },

  {
    id: 8,
    slug: "therapie-par-ventouses",
    name: "Thérapie par Ventouses",
    imageHero: "ventouses-hero",
    images: ["ventouses-1", "ventouses-2"],
    description: `La Thérapie par Ventouses à Lanester est une méthode naturelle et efficace pour stimuler la circulation sanguine, soulager les tensions musculaires et favoriser le bien-être général. 
Idéale pour les habitants de Lorient, Hennebont et leurs environs, cette technique douce et non invasive est réalisée par une praticienne unique, qui vous offre un suivi personnalisé et un soin adapté à vos besoins. 
Les ventouses permettent de détoxifier, détendre et revitaliser le corps, tout en apportant un moment de relaxation profonde.`,
    sessionDetails: `La séance commence par un diagnostic des zones à traiter et un échauffement léger des muscles. 
La praticienne applique ensuite les ventouses sur les points ciblés, créant une succion douce qui stimule la circulation et relâche les tensions. 
Chaque séance dure environ 45 à 60 minutes, incluant un temps de détente et d’hydratation post-traitement, pour maximiser les bienfaits et le confort.`,
    benefits: [
      "Stimulation de la circulation sanguine et lymphatique",
      "Soulagement des tensions musculaires et douleurs localisées",
      "Détoxification et revitalisation du corps",
      "Relaxation profonde et moment de bien-être",
      "Soin personnalisé et suivi individuel par la praticienne"
    ],
    sessionsAvailable: "Pour des résultats durables, il est recommandé de prévoir une cure de 3 à 6 séances, espacées de 1 à 2 semaines, selon vos besoins et la zone traitée. Ce soin est également idéal pour préparer le corps avant une activité physique, soulager des douleurs ou simplement profiter d’un moment de bien-être, toujours avec un suivi individuel par la praticienne.",
    faq: [
      {
        question: "Combien de séances sont nécessaires pour des résultats durables ?",
        answer: [
          { children: [{ text: "Selon vos besoins, une cure de 3 à 6 séances, espacées de 1 à 2 semaines, est recommandée pour des résultats durables." }] }
        ]
      },
      {
        question: "Quelle sensation ressent-on pendant la séance ?",
        answer: [
          { children: [{ text: "La sensation peut être décrite comme un tiraillement ou une légère succion, totalement normale et temporaire. Le soin est doux et non invasif." }] }
        ]
      },
      {
        question: "La thérapie par ventouses convient-elle à tout le monde ?",
        answer: [
          { children: [{ text: "Oui, la thérapie par ventouses est adaptée à la plupart des adultes et peut être personnalisée selon votre état physique, votre âge et vos besoins." }] }
        ]
      },
      {
        question: "Faut-il préparer son corps avant la séance ?",
        answer: [
          { children: [{ text: "Il est conseillé de venir bien hydraté et détendu. Évitez les repas lourds ou l’alcool juste avant la séance pour profiter pleinement des bienfaits." }] }
        ]
      }
    ]
  },

  {
    id: 9,
    slug: "plasma-pen",
    name: "Plasma Pen",
    imageHero: "plasma-pen-hero",
    images: ["plasma-pen-1", "plasma-pen-2"],
    description: `Le Plasma Pen à Lanester est un soin esthétique innovant et non invasif qui permet de lisser les rides, raffermir la peau et rajeunir le visage sans chirurgie. 
Idéal pour les habitants de Lorient, Hennebont et leurs environs, ce traitement ciblé agit sur les zones sensibles comme les paupières, le contour des yeux, le front et le cou. 
L’institut est tenu par une praticienne unique, assurant un suivi personnalisé et un résultat naturel, précis et durable. 
Le Plasma Pen combine technologie avancée et expertise esthétique pour offrir une peau plus ferme, tonifiée et éclatante.`,
    sessionDetails: `Chaque séance commence par un nettoyage et préparation de la peau, suivi d’une application d’une crème anesthésiante sur les zones à traiter. 
La praticienne utilise ensuite le Plasma Pen, générant de petites décharges pour stimuler le raffermissement et la régénération cutanée. 
Chaque séance dure environ 45 à 60 minutes, selon les zones à traiter, et se termine par l’application d’un sérum apaisant et hydratant pour maximiser le confort et les résultats.`,
    benefits: [
      "Lissage efficace des rides et ridules",
      "Raffermissement et tonification de la peau",
      "Rajeunissement du visage sans chirurgie",
      "Résultats naturels et durables",
      "Soin personnalisé avec suivi individuel par la praticienne"
    ],
    sessionsAvailable: "Pour des résultats durables, une cure de 1 à 3 séances est généralement recommandée, selon la zone et la profondeur des rides. Le traitement peut être répété après 6 à 12 semaines si nécessaire. Idéal pour un entretien régulier ou en préparation d’un événement spécial, avec un suivi individualisé par la praticienne.",
    faq: [
      {
        question: "Combien de séances sont nécessaires pour des résultats visibles ?",
        answer: [
          { children: [{ text: "Selon la zone et l’état de la peau, 1 à 3 séances sont généralement suffisantes. Une amélioration visible peut être constatée dès la première séance." }] }
        ]
      },
      {
        question: "Le soin est-il douloureux ?",
        answer: [
          { children: [{ text: "Une crème anesthésiante est appliquée pour assurer un confort maximal. Vous pouvez ressentir de légères sensations de picotement, parfaitement normales et temporaires." }] }
        ]
      },
      {
        question: "Le Plasma Pen convient-il à tous les types de peau ?",
        answer: [
          { children: [{ text: "Oui, ce soin est adapté à la plupart des types de peau. La praticienne adapte la technique en fonction de votre peau pour garantir des résultats naturels et sûrs." }] }
        ]
      },
      {
        question: "Quelles précautions prendre après la séance ?",
        answer: [
          { children: [{ text: "Après le soin, il est recommandé de protéger la peau du soleil, d’éviter les produits irritants et de suivre les conseils de la praticienne pour maximiser les résultats et la régénération cutanée." }] }
        ]
      }
    ]
  },

  {
    id: 9,
    slug: "lipocavitation-anticellulite",
    name: "Lipocavitation Anticellulite",
    imageHero: "lipocavitation-hero",
    images: ["lipocavitation-1", "lipocavitation-2"],
    description: `La Lipocavitation Anticellulite est une technologie non invasive pour réduire la cellulite et remodeler la silhouette, réalisée par Fatma, praticienne unique de l’institut à Lanester. 
Cette technique utilise des ultrasons ciblés pour détruire les cellules graisseuses et lisser la peau. 
Disponible pour les clientes de Lorient, Hennebont, Larmor-Plage, Ploemeur et Quéven, elle permet un remodelage précis et efficace, pour une silhouette affinée et harmonieuse.`,
    sessionDetails: `Le rendez-vous débute par une écoute attentive de vos besoins, suivie d’une étude morphologique personnalisée. 
Après désinfection et préparation de la peau, Fatma applique la Lipocavitation sur les zones ciblées pour détruire les cellules graisseuses et stimuler le drainage naturel. 
Chaque séance dure environ 45 minutes et est indolore, offrant confort et efficacité pour un remodelage visible dès les premières séances.`,
    benefits: [
      "Réduction visible de la cellulite et peau plus lisse",
      "Affinement et remodelage de la silhouette",
      "Séances indolores et non invasives",
      "Amélioration de la tonicité et élasticité de la peau",
      "Effet progressif et durable sur plusieurs zones du corps",
      "Adapté à tous types de peau et morphologies",
      "Résultats optimisés avec une cure de 4 à 6 séances"
    ],
    sessionsAvailable: "Séance unique idéale pour une escapade bien-être ou une cure de 4 à 6 séances pour un résultat durable. Disponible pour les clientes de Lanester, Lorient, Hennebont, Larmor-Plage, Ploemeur et Quéven.",
    faq: [
      {
        question: "La séance est-elle douloureuse ?",
        answer: [
          { children: [{ text: "Non, la séance est indolore. Vous pouvez ressentir une légère vibration due aux ultrasons, mais aucun inconfort n’est à prévoir." }] }
        ]
      },
      {
        question: "Combien de séances sont nécessaires pour des résultats visibles ?",
        answer: [
          { children: [{ text: "Une séance unique peut améliorer légèrement la silhouette, mais pour un résultat visible et durable, il est recommandé de prévoir une cure de 4 à 6 séances selon la zone et le métabolisme." }] }
        ]
      },
      {
        question: "Le soin convient-il à tout le monde ?",
        answer: [
          { children: [{ text: "Cette technique est déconseillée en cas de grossesse, maladies cardiovasculaires, inflammation cutanée ou présence de pacemaker. Consultez le praticien avant la séance si vous avez un doute." }] }
        ]
      },
      {
        question: "À qui s’adresse la Lipocavitation ?",
        answer: [
          { children: [{ text: "À toute personne souhaitant réduire la cellulite, lisser la peau et remodeler sa silhouette de manière non invasive et sécurisée." }] }
        ]
      },
      {
        question: "Quand les effets sont-ils visibles ?",
        answer: [
          { children: [{ text: "Les premiers effets peuvent être visibles dès la première séance, avec une amélioration progressive et plus durable après plusieurs séances selon le protocole conseillé." }] }
        ]
      }
    ]
  },

  {
    id: 9,
    slug: "epilation-a-la-cire-et-au-fil",
    name: "Épilation à la cire et au fil",
    imageHero: "epilation-hero",
    images: ["epilation-1", "epilation-2"],
    description: `L’Épilation à la Cire et au Fil à Lanester offre une solution professionnelle pour enlever les poils indésirables du visage et du corps avec efficacité et précision. 
Idéale pour les habitants de Lorient, Hennebont et leurs environs, cette technique permet une peau douce et nette, tout en respectant la sensibilité de votre peau. 
L’institut est tenu par une praticienne unique, garantissant un suivi personnalisé et une attention particulière à chaque client. 
Que ce soit pour le visage, les jambes, les bras ou les zones intimes, ces méthodes assurent un résultat durable et précis.`,
    sessionDetails: `Chaque séance commence par un nettoyage et préparation de la peau. 
Selon la zone et le type de poils, la praticienne utilise la cire ou le fil pour retirer les poils à la racine. 
La technique est adaptée pour minimiser l’inconfort et garantir une peau nette. 
Chaque séance dure entre 20 et 60 minutes, selon la zone traitée, et se termine par l’application d’un soin apaisant ou d’une huile nourrissante pour calmer la peau et prévenir les irritations.`,
    benefits: [
      "Élimination précise des poils indésirables du visage et du corps",
      "Résultat durable avec peau douce et nette",
      "Soin personnalisé avec suivi individuel par la praticienne",
      "Techniques adaptées à tous types de peau et zones sensibles",
      "Application d’un soin apaisant pour minimiser les irritations"
    ],
    sessionsAvailable: "Pour un résultat optimal et durable, il est conseillé de répéter les séances toutes les 3 à 5 semaines, selon la zone et la vitesse de repousse des poils. Les soins peuvent être planifiés pour un entretien régulier ou avant un événement spécial, toujours avec un suivi individualisé par la praticienne.",
    faq: [
      {
        question: "La séance est-elle douloureuse ?",
        answer: [
          { children: [{ text: "La sensation peut être légèrement désagréable, surtout sur les zones sensibles, mais la praticienne adapte la technique pour minimiser l’inconfort. L’application d’un soin apaisant après la séance aide à calmer la peau." }] }
        ]
      },
      {
        question: "Combien de séances sont nécessaires pour un résultat optimal ?",
        answer: [
          { children: [{ text: "Pour un entretien régulier, il est recommandé de prévoir des séances toutes les 3 à 5 semaines, selon la zone et la vitesse de repousse des poils." }] }
        ]
      },
      {
        question: "Ce soin convient-il à tous les types de peau ?",
        answer: [
          { children: [{ text: "Oui, l’épilation à la cire et au fil convient à tous les types de peau et zones du corps, avec un suivi personnalisé pour garantir sécurité et confort." }] }
        ]
      },
      {
        question: "Quelles précautions prendre après la séance ?",
        answer: [
          { children: [{ text: "Il est conseillé d’éviter l’exposition au soleil, les produits irritants et les frottements sur la zone traitée pendant 24 à 48 heures pour maintenir la peau douce et prévenir les irritations." }] }
        ]
      }
    ]
  },

  {
    id: 10,
    slug: "epilation-electrique-a-l-aiguille",
    name: "Épilation Électrique à l’Aiguille",
    imageHero: "epilation-electrique-hero",
    images: ["epilation-electrique-1", "epilation-electrique-2"],
    description: `L’Épilation Électrique à l’Aiguille à Lanester est une méthode professionnelle et définitive pour éliminer durablement les poils indésirables sur toutes les zones du visage et du corps. 
Idéale pour les habitants de Lorient, Hennebont et leurs environs, cette technique précise cible chaque follicule pileux pour un résultat sûr et durable. 
L’institut est tenu par une praticienne unique, offrant un suivi individualisé et attentif, garantissant sécurité et efficacité à chaque séance.`,
    sessionDetails: `La séance commence par un nettoyage et désinfection minutieux de la zone à traiter. 
La praticienne applique ensuite l’épilation électrique à l’aiguille, traitant follicule par follicule pour éliminer les poils de manière définitive. 
Chaque séance dure entre 30 et 90 minutes, selon la zone et le nombre de poils à traiter. 
Un soin apaisant post-traitement est appliqué pour minimiser rougeurs et inconfort et favoriser la régénération de la peau.`,
    benefits: [
      "Élimination définitive des poils indésirables",
      "Traitement précis follicule par follicule",
      "Résultats durables sur toutes les zones du visage et du corps",
      "Soin personnalisé avec suivi individuel par la praticienne",
      "Méthode sûre et professionnelle adaptée à tous types de poils"
    ],
    sessionsAvailable: "Pour un résultat optimal et durable, il est recommandé de prévoir plusieurs séances, espacées de 4 à 6 semaines selon la zone traitée. La cure complète varie selon le type de poils et la zone, permettant une épilation définitive progressive. Ce soin est idéal pour un suivi personnalisé et un résultat impeccable, toujours sous la supervision de la praticienne.",
    faq: [
      {
        question: "La séance est-elle douloureuse ?",
        answer: [
          { children: [{ text: "La sensation peut être décrite comme un picotement ou une légère chaleur. La praticienne adapte la technique pour un maximum de confort et applique un soin apaisant après la séance." }] }
        ]
      },
      {
        question: "Combien de séances sont nécessaires pour un résultat définitif ?",
        answer: [
          { children: [{ text: "Selon la zone et le type de poils, plusieurs séances espacées de 4 à 6 semaines sont nécessaires pour éliminer définitivement les poils." }] }
        ]
      },
      {
        question: "Ce soin convient-il à tous les types de peau et de poils ?",
        answer: [
          { children: [{ text: "Oui, cette technique est adaptée à tous les types de peau et poils. La praticienne ajuste le traitement en fonction de chaque client pour garantir sécurité et efficacité." }] }
        ]
      },
      {
        question: "Quelles précautions prendre après la séance ?",
        answer: [
          { children: [{ text: "Il est conseillé d’éviter l’exposition solaire et les produits irritants sur la zone traitée pendant quelques jours. Suivre les conseils de la praticienne assure un résultat optimal et une peau apaisée." }] }
        ]
      }
    ]
  },
];