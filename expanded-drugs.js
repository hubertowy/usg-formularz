/* Formulation-specific medicines; official sources checked 19.10.2026. */
window.ExpandedDrugs=(()=>{
const entries=[
  {
    "id": "rheumocam-oral",
    "name": "Rheumocam · doustny",
    "species": [
      "dog"
    ],
    "strength": "1,5 mg/ml · zawiesina doustna",
    "substance": "meloksykam",
    "source": "https://ec.europa.eu/health/documents/community-register/2021/20210928153175/anx_153175_pl.pdf",
    "sourceLabel": "Polska ChPLW i ulotka — Komisja Europejska",
    "checked": "19.10.2026",
    "library": "vet",
    "kind": "schemes",
    "indications": "Ból i zapalenie w ostrych i przewlekłych schorzeniach narządu ruchu.",
    "notes": "Wstrząsnąć. Podawać z karmą. Bez poprawy przerwać najpóźniej po 10 dniach. Schemat początku dotyczy rozpoczęcia doustnego bez wcześniejszej iniekcji.",
    "cautions": "Nie łączyć z innymi NLPZ ani glikokortykosteroidami. Nie stosować przy chorobach nerek, wątroby, serca, owrzodzeniach, krwawieniu, w ciąży lub laktacji. Unikać odwodnienia.",
    "concentration": 1.5,
    "unit": "mg",
    "regimens": {
      "dog": [
        {
          "id": "first",
          "label": "Pierwszy dzień",
          "rate": 0.2,
          "frequency": "Jedno podanie w 1. dniu",
          "route": "Doustnie"
        },
        {
          "id": "next",
          "label": "Kolejne dni",
          "rate": 0.1,
          "frequency": "Raz dziennie, co 24 godziny",
          "route": "Doustnie"
        }
      ]
    },
    "minAge": 6,
    "currentSource": "https://medicines.health.europa.eu/veterinary/pl/600000003555"
  },
  {
    "id": "rheumocam-inj",
    "name": "Rheumocam · iniekcja",
    "species": [
      "dog",
      "cat"
    ],
    "strength": "5 mg/ml · iniekcja",
    "substance": "meloksykam",
    "source": "https://ec.europa.eu/health/documents/community-register/2021/20210928153175/anx_153175_pl.pdf",
    "sourceLabel": "Polska ChPLW i ulotka — Komisja Europejska",
    "checked": "19.10.2026",
    "library": "vet",
    "kind": "schemes",
    "indications": "Pies: narząd ruchu i ból pooperacyjny; kot: ból pooperacyjny.",
    "notes": "U kota nie kontynuować doustnym meloksykamem ani innymi NLPZ. U psa kontynuacja doustna 0,1 mg/kg po 24 godzinach.",
    "cautions": "Nie stosować poniżej 6 tygodni, u kotów poniżej 2 kg, przy chorobach nerek/wątroby/serca, owrzodzeniach, krwawieniu, w ciąży lub laktacji. Nie łączyć z NLPZ/GKS.",
    "concentration": 5,
    "unit": "mg",
    "regimens": {
      "dog": [
        {
          "id": "muscle",
          "label": "Narząd ruchu",
          "rate": 0.2,
          "frequency": "Jednorazowo",
          "route": "Podskórnie"
        },
        {
          "id": "postop",
          "label": "Ból pooperacyjny",
          "rate": 0.2,
          "frequency": "Jednorazowo przed zabiegiem",
          "route": "Podskórnie lub dożylnie"
        }
      ],
      "cat": [
        {
          "id": "postop",
          "label": "Ból pooperacyjny",
          "rate": 0.3,
          "frequency": "Jednorazowo przed zabiegiem",
          "route": "Podskórnie"
        }
      ]
    },
    "minAge": 6,
    "minWeightBySpecies": {
      "cat": 2
    },
    "currentSource": "https://medicines.health.europa.eu/veterinary/pl/600000003555"
  },
  {
    "id": "eluracat",
    "name": "Eluracat",
    "species": [
      "cat"
    ],
    "strength": "20 mg/ml · roztwór doustny",
    "substance": "winian kapromoreliny",
    "source": "https://ec.europa.eu/health/documents/community-register/2024/20241125164492/anx_164492_pl.pdf",
    "sourceLabel": "Charakterystyka / informacja urzędowa",
    "checked": "19.10.2026",
    "library": "vet",
    "kind": "schemes",
    "indications": "Zwiększanie masy ciała u kotów z osłabionym apetytem i utratą masy w chorobach przewlekłych.",
    "notes": "Bezpośrednio do jamy ustnej. Przelicznik dotyczy winianu kapromoreliny: 2 mg/kg = 0,1 ml/kg. Monitorować masę i apetyt.",
    "cautions": "Nie stosować w akromegalii. Ostrożnie przy cukrzycy, niedociśnieniu i chorobach serca. Skuteczność poniżej 6 lat lub 2 kg nie została wykazana.",
    "concentration": 20,
    "unit": "mg",
    "regimens": {
      "cat": [
        {
          "id": "daily",
          "label": "Zalecana dawka",
          "rate": 2,
          "frequency": "Raz dziennie",
          "route": "Doustnie"
        }
      ]
    },
    "minimumSafeWeight": 2,
    "ageNotice": "Skuteczność niepotwierdzona poniżej 6 lat."
  },
  {
    "id": "catosal",
    "name": "Catosal · iniekcja",
    "species": [
      "dog"
    ],
    "strength": "100 + 0,05 mg/ml",
    "substance": "butafosfan + cyjanokobalamina",
    "source": "https://rejestrymedyczne.ezdrowie.gov.pl/api/rpl/medicinal-products/16695/characteristic",
    "sourceLabel": "Charakterystyka / informacja urzędowa",
    "checked": "19.10.2026",
    "library": "vet",
    "kind": "schemes",
    "indications": "Leczenie wspomagające niedoborów fosforu i witaminy B12.",
    "notes": "Ogrzać do temperatury ciała. Dawka wyrażona w butafosfanie. Polska ChPLW obejmuje psa; nie przenosimy jej schematu na kota.",
    "cautions": "Nadwrażliwość na składniki. Bezpieczeństwo w ciąży i laktacji u suk nie zostało ustalone.",
    "concentration": 100,
    "unit": "mg",
    "regimens": {
      "dog": [
        {
          "id": "im",
          "label": "Domięśniowo",
          "rate": [
            10,
            15
          ],
          "frequency": "Powtórzenie w razie potrzeby",
          "route": "Domięśniowo"
        },
        {
          "id": "iv",
          "label": "Dożylnie",
          "rate": [
            10,
            15
          ],
          "frequency": "Powtórzenie w razie potrzeby",
          "route": "Dożylnie"
        },
        {
          "id": "sc",
          "label": "Podskórnie",
          "rate": [
            10,
            15
          ],
          "frequency": "Powtórzenie w razie potrzeby",
          "route": "Podskórnie"
        }
      ]
    }
  },
  {
    "id": "enrogal",
    "name": "Enrogal · iniekcja",
    "species": [
      "dog"
    ],
    "strength": "50 mg/ml · iniekcja",
    "substance": "enrofloksacyna",
    "source": "https://rejestrymedyczne.ezdrowie.gov.pl/api/rpl/medicinal-products/20369/characteristic",
    "sourceLabel": "Charakterystyka / informacja urzędowa",
    "checked": "19.10.2026",
    "library": "vet",
    "kind": "schemes",
    "indications": "Zakażenia bakteryjne wrażliwe na enrofloksacynę.",
    "notes": "Maksymalnie 5 ml w jednym miejscu podania. Stosowanie według wrażliwości drobnoustrojów.",
    "cautions": "Nie stosować u rosnących psów, w ciąży/laktacji, przy chorobach OUN lub zaburzeniach chrząstek stawowych. Nie łączyć m.in. z teofiliną, NLPZ i antybiotykami bakteriostatycznymi.",
    "concentration": 50,
    "unit": "mg",
    "regimens": {
      "dog": [
        {
          "id": "sc",
          "label": "Zalecany schemat",
          "rate": 5,
          "frequency": "Raz dziennie przez 3–5 dni",
          "route": "Podskórnie"
        }
      ]
    },
    "ageNotice": "Nie stosować w okresie wzrostu; granica zależy od wielkości rasy."
  },
  {
    "id": "fenbendazol-animedica",
    "name": "Fenbendazol aniMedica · żel doustny",
    "species": [
      "cat"
    ],
    "strength": "100 mg/ml · żel doustny",
    "substance": "fenbendazol",
    "source": "https://rejestrymedyczne.ezdrowie.gov.pl/api/rpl/medicinal-products/20309/characteristic",
    "sourceLabel": "Charakterystyka / informacja urzędowa",
    "checked": "19.10.2026",
    "library": "vet",
    "kind": "schemes",
    "indications": "Leczenie inwazji pasożytów jelitowych u kotów zgodnie z ChPLW.",
    "notes": "50 mg/kg odpowiada 0,5 ml/kg na podanie. Podawać doustnie; unikać równoczesnego podawania produktów mlecznych.",
    "cautions": "Nie stosować u ciężarnych kotek ani przy nadwrażliwości na składniki.",
    "concentration": 100,
    "unit": "mg",
    "regimens": {
      "cat": [
        {
          "id": "course",
          "label": "Zalecany schemat",
          "rate": 50,
          "frequency": "Raz dziennie przez 3 kolejne dni",
          "route": "Doustnie"
        }
      ]
    },
    "antiparasitic": true
  },
  {
    "id": "drontal-junior",
    "name": "Drontal Junior · zawiesina doustna",
    "species": [
      "dog"
    ],
    "strength": "15 + 14,4 mg/ml",
    "substance": "febantel + pyrantelu embonian",
    "source": "https://rejestrymedyczne.ezdrowie.gov.pl/api/rpl/medicinal-products/17108/characteristic",
    "sourceLabel": "Charakterystyka / informacja urzędowa",
    "checked": "19.10.2026",
    "library": "vet",
    "kind": "schemes",
    "indications": "Leczenie inwazji nicieni u szczeniąt i młodych psów.",
    "notes": "1 ml/kg doustnie, bezpośrednio lub z karmą. Nie wymaga głodówki. Schemat od ukończonych 2 tygodni i minimum 0,6 kg.",
    "cautions": "Nie stosować z piperazyną, w ciąży ani laktacji.",
    "concentration": 15,
    "unit": "mg",
    "regimens": {
      "dog": [
        {
          "id": "single",
          "label": "Odrobaczanie szczeniąt",
          "rate": 15,
          "frequency": "Jednorazowo; do 12. tygodnia co 2 tygodnie",
          "route": "Doustnie"
        }
      ]
    },
    "minAge": 2,
    "minWeight": 0.6,
    "antiparasitic": true
  },
  {
    "id": "mirataz",
    "name": "Mirataz · maść",
    "species": [
      "cat"
    ],
    "strength": "20 mg/g · maść przezskórna",
    "substance": "mirtazapina",
    "source": "https://www.vmd.defra.gov.uk/productinformationdatabase/files/SPC_Documents/SPC_3025132.PDF",
    "sourceLabel": "Urzędowa informacja VMD (angielska)",
    "checked": "19.10.2026",
    "library": "vet",
    "kind": "expandedDose",
    "indications": "Przyrost masy ciała u kotów z brakiem apetytu i utratą masy w chorobach przewlekłych.",
    "notes": "0,1 g maści = 2 mg = pasek 3,8 cm na wewnętrzną stronę małżowiny, raz dziennie przez 14 dni. Uszy stosować naprzemiennie. Rękawiczki; unikać kontaktu z miejscem aplikacji przez 12 godzin.",
    "cautions": "Nie stosować poniżej 7,5 miesiąca lub 2 kg, w ciąży, laktacji ani rozrodzie. Nie łączyć z tramadolem, cyproheptadyną lub inhibitorami MAO (także w poprzednich 14 dniach). Skuteczność <3 lat i bezpieczeństwo poza 2,1–7 kg niepotwierdzone.",
    "form": "fixed",
    "amount": [
      0.1
    ],
    "doseUnit": "g maści",
    "basis": "Stała dawka na kota: 2 mg mirtazapiny.",
    "route": "Przezskórnie — wewnętrzna strona małżowiny",
    "frequency": "Raz dziennie przez 14 dni",
    "minWeight": 2,
    "ageNotice": "Nie stosować poniżej 7,5 miesiąca."
  },
  {
    "id": "clevor",
    "name": "Clevor · krople do oczu",
    "species": [
      "dog"
    ],
    "strength": "30 mg/ml · krople do oczu",
    "substance": "ropinirol",
    "source": "https://www.uskvbl.cz/attachments/spc/0910f7c7808c6c4a.pdf",
    "sourceLabel": "Charakterystyka / informacja urzędowa",
    "checked": "19.10.2026",
    "library": "vet",
    "kind": "expandedDose",
    "indications": "Wywoływanie wymiotów u psów.",
    "notes": "2–4 krople rozdzielić na oba oczy. Przy 6–8 kroplach podać w dwóch etapach z przerwą 1–2 min. Bez wymiotów po 15 min można powtórzyć tę samą dawkę po 15–20 min.",
    "cautions": "Nie stosować po połknięciu żrących substancji, ostrych przedmiotów, lotnych związków ani przy zaburzeniach świadomości/odruchów obronnych. Pełne ograniczenia w ChPLW.",
    "form": "bands",
    "doseUnit": "kropli",
    "route": "Do oczu",
    "frequency": "Jednorazowo",
    "table": [
      {
        "lo": 1.8,
        "hi": 5,
        "amount": 1,
        "loOpen": false
      },
      {
        "lo": 5.1,
        "hi": 10,
        "amount": 2,
        "loOpen": false
      },
      {
        "lo": 10.1,
        "hi": 20,
        "amount": 3,
        "loOpen": false
      },
      {
        "lo": 20.1,
        "hi": 35,
        "amount": 4,
        "loOpen": false
      },
      {
        "lo": 35.1,
        "hi": 60,
        "amount": 6,
        "loOpen": false
      },
      {
        "lo": 60.1,
        "hi": 100,
        "amount": 8,
        "loOpen": false
      }
    ]
  },
  {
    "id": "tralieve-20",
    "name": "Tralieve · tabletki",
    "species": [
      "dog"
    ],
    "strength": "20 mg · tabletki do rozgryzania i żucia",
    "substance": "tramadolu chlorowodorek",
    "source": "https://rejestrymedyczne.ezdrowie.gov.pl/api/rpl/medicinal-products/43560/characteristic",
    "sourceLabel": "Charakterystyka / informacja urzędowa",
    "checked": "19.10.2026",
    "library": "vet",
    "kind": "expandedDose",
    "indications": "Łagodny ostry i przewlekły ból tkanek miękkich i narządu ruchu.",
    "notes": "Dawka 2–4 mg/kg na podanie. Zwykle co 8 godzin; odstęp nie krótszy niż 6 godzin. Maksymalnie 16 mg/kg na dobę. Tabletki podzielne na ćwiartki.",
    "cautions": "Nie stosować przy padaczce, z inhibitorami MAO, SSRI i trójpierścieniowymi lekami przeciwdepresyjnymi. Leki hamujące OUN mogą nasilać sedację.",
    "form": "tabletRange",
    "mg": 20,
    "rate": [
      2,
      4
    ],
    "route": "Doustnie",
    "frequency": "Zwykle co 8 godzin"
  },
  {
    "id": "tralieve-80",
    "name": "Tralieve · tabletki",
    "species": [
      "dog"
    ],
    "strength": "80 mg · tabletki do rozgryzania i żucia",
    "substance": "tramadolu chlorowodorek",
    "source": "https://rejestrymedyczne.ezdrowie.gov.pl/api/rpl/medicinal-products/43561/characteristic",
    "sourceLabel": "Charakterystyka / informacja urzędowa",
    "checked": "19.10.2026",
    "library": "vet",
    "kind": "expandedDose",
    "indications": "Łagodny ostry i przewlekły ból tkanek miękkich i narządu ruchu.",
    "notes": "Dawka 2–4 mg/kg na podanie. Zwykle co 8 godzin; odstęp nie krótszy niż 6 godzin. Maksymalnie 16 mg/kg na dobę. Tabletki podzielne na ćwiartki.",
    "cautions": "Nie stosować przy padaczce, z inhibitorami MAO, SSRI i trójpierścieniowymi lekami przeciwdepresyjnymi. Leki hamujące OUN mogą nasilać sedację.",
    "form": "tabletRange",
    "mg": 80,
    "rate": [
      2,
      4
    ],
    "route": "Doustnie",
    "frequency": "Zwykle co 8 godzin"
  },
  {
    "id": "clavusan-small",
    "name": "Clavusan · tabletki",
    "species": [
      "dog",
      "cat"
    ],
    "strength": "50 + 12,5 mg · tabletki",
    "substance": "amoksycylina + kwas klawulanowy",
    "source": "https://rejestrymedyczne.ezdrowie.gov.pl/api/rpl/medicinal-products/48185/characteristic",
    "sourceLabel": "Charakterystyka / informacja urzędowa",
    "checked": "19.10.2026",
    "library": "vet",
    "kind": "expandedDose",
    "indications": "Wrażliwe zakażenia bakteryjne według ChPLW.",
    "notes": "Doustnie 2 razy dziennie. Typowy czas leczenia 5–7 dni. Tabletki podzielne na ćwiartki. Powyżej 6,25 kg potrzebna jest większa moc.",
    "cautions": "Nie stosować przy alergii na beta-laktamy. Ocenić czynność nerek i wątroby oraz interakcje z antybiotykami bakteriostatycznymi.",
    "form": "bands",
    "doseUnit": "tabl.",
    "frequency": "2 razy dziennie",
    "route": "Doustnie",
    "table": [
      {
        "lo": 1,
        "hi": 1.25,
        "amount": 0.25,
        "strength": "",
        "loOpen": false
      },
      {
        "lo": 1.25,
        "hi": 2.5,
        "amount": 0.5,
        "strength": "",
        "loOpen": true
      },
      {
        "lo": 2.5,
        "hi": 3.75,
        "amount": 0.75,
        "strength": "",
        "loOpen": true
      },
      {
        "lo": 3.75,
        "hi": 5,
        "amount": 1,
        "strength": "",
        "loOpen": true
      },
      {
        "lo": 5,
        "hi": 6.25,
        "amount": 1.25,
        "strength": "",
        "loOpen": true
      }
    ]
  },
  {
    "id": "credelio-dog",
    "name": "Credelio · tabletki",
    "species": [
      "dog"
    ],
    "strength": "56 mg / 112 mg / 225 mg / 450 mg / 900 mg · tabletki",
    "substance": "lotilaner",
    "source": "https://www.vmd.defra.gov.uk/productinformationdatabase/files/SPC_Documents/SPC_2364550.PDF",
    "sourceLabel": "Urzędowa informacja VMD (angielska)",
    "checked": "19.10.2026",
    "library": "vet",
    "kind": "expandedDose",
    "indications": "Zwalczanie pcheł i kleszczy zgodnie z ChPLW.",
    "notes": "Podawać z posiłkiem lub po nim. Tabela dotyczy pcheł i kleszczy; leczenie nużycy i świerzbu wymaga oceny odpowiedzi.",
    "cautions": "Nie dzielić tabletek. Ostrożność przy zaburzeniach neurologicznych; pełne ograniczenia w źródle.",
    "form": "bands",
    "table": [
      {
        "lo": 1.3,
        "hi": 2.5,
        "amount": 1,
        "strength": "56 mg",
        "loOpen": false
      },
      {
        "lo": 2.5,
        "hi": 5.5,
        "amount": 1,
        "strength": "112 mg",
        "loOpen": true
      },
      {
        "lo": 5.5,
        "hi": 11,
        "amount": 1,
        "strength": "225 mg",
        "loOpen": true
      },
      {
        "lo": 11,
        "hi": 22,
        "amount": 1,
        "strength": "450 mg",
        "loOpen": true
      },
      {
        "lo": 22,
        "hi": 45,
        "amount": 1,
        "strength": "900 mg",
        "loOpen": true
      }
    ],
    "doseUnit": "tabl.",
    "frequency": "Co miesiąc",
    "route": "Doustnie",
    "minWeight": 1.3,
    "minAge": 8,
    "antiparasitic": true,
    "tickProduct": true,
    "protection": "Pchły i kleszcze: 1 miesiąc."
  },
  {
    "id": "nexgard",
    "name": "NexGard · tabletki",
    "species": [
      "dog"
    ],
    "strength": "11 mg / 28 mg / 68 mg / 136 mg · tabletki",
    "substance": "afoksolaner",
    "source": "https://www.vmd.defra.gov.uk/productinformationdatabase/files/QRD_Documents/QRD-Auth_2343161.PDF",
    "sourceLabel": "Urzędowa informacja VMD (angielska)",
    "checked": "19.10.2026",
    "library": "vet",
    "kind": "expandedDose",
    "indications": "Zwalczanie pcheł i kleszczy zgodnie z ChPLW.",
    "notes": "Nie dzielić. Miesięczny schemat dotyczy pcheł i kleszczy. Inne wskazania mają odrębne zalecenia.",
    "cautions": "Nie dzielić tabletek. Ostrożność przy zaburzeniach neurologicznych; pełne ograniczenia w źródle.",
    "form": "bands",
    "table": [
      {
        "lo": 2,
        "hi": 4,
        "amount": 1,
        "strength": "11 mg",
        "loOpen": false
      },
      {
        "lo": 4,
        "hi": 10,
        "amount": 1,
        "strength": "28 mg",
        "loOpen": true
      },
      {
        "lo": 10,
        "hi": 25,
        "amount": 1,
        "strength": "68 mg",
        "loOpen": true
      },
      {
        "lo": 25,
        "hi": 50,
        "amount": 1,
        "strength": "136 mg",
        "loOpen": true
      }
    ],
    "doseUnit": "tabl.",
    "frequency": "Co miesiąc",
    "route": "Doustnie",
    "minWeight": 2,
    "minAge": 8,
    "antiparasitic": true,
    "tickProduct": true,
    "protection": "Pchły: co najmniej 5 tygodni. Kleszcze: 1 miesiąc."
  },
  {
    "id": "nexgard-spectra",
    "name": "NexGard Spectra · tabletki",
    "species": [
      "dog"
    ],
    "strength": "9 + 2 mg / 19 + 4 mg / 38 + 8 mg / 75 + 15 mg / 150 + 30 mg · tabletki",
    "substance": "afoksolaner + milbemycyny oksym",
    "source": "https://www.vmd.defra.gov.uk/productinformationdatabase/files/SPC_Documents/SPC_2258291.PDF",
    "sourceLabel": "Urzędowa informacja VMD (angielska)",
    "checked": "19.10.2026",
    "library": "vet",
    "kind": "expandedDose",
    "indications": "Mieszane inwazje pasożytów zewnętrznych i wewnętrznych zgodnie z ChPLW.",
    "notes": "Stosować przy wskazaniu do jednoczesnego zwalczania pasożytów zewnętrznych i wewnętrznych. Nie dzielić. Schemat zależy od pasożyta. Pchły/kleszcze: schemat miesięczny; nicienie jelitowe: pojedyncze podanie. Profilaktyka nicieni sercowych wymaga odrębnego planu.",
    "cautions": "Przed profilaktyką dirofilariozy wykluczyć zarażenie. Nie traktować jako zamiennika leczenia dorosłych nicieni sercowych. Pełne ograniczenia w ChPLW.",
    "form": "bands",
    "table": [
      {
        "lo": 1.35,
        "hi": 3.5,
        "amount": 1,
        "strength": "9 + 2 mg",
        "loOpen": false
      },
      {
        "lo": 3.5,
        "hi": 7.5,
        "amount": 1,
        "strength": "19 + 4 mg",
        "loOpen": true
      },
      {
        "lo": 7.5,
        "hi": 15,
        "amount": 1,
        "strength": "38 + 8 mg",
        "loOpen": true
      },
      {
        "lo": 15,
        "hi": 30,
        "amount": 1,
        "strength": "75 + 15 mg",
        "loOpen": true
      },
      {
        "lo": 30,
        "hi": 60,
        "amount": 1,
        "strength": "150 + 30 mg",
        "loOpen": true
      }
    ],
    "doseUnit": "tabl.",
    "frequency": "Termin według wskazania",
    "route": "Doustnie",
    "minWeight": 1.35,
    "minAge": 8,
    "antiparasitic": true,
    "tickProduct": true,
    "protection": "Pchły: 5 tygodni. Kleszcze: 4 tygodnie. Pozostałe pasożyty: według wskazania w ChPLW."
  },
  {
    "id": "simparica",
    "name": "Simparica · tabletki",
    "species": [
      "dog"
    ],
    "strength": "5 mg / 10 mg / 20 mg / 40 mg / 80 mg / 120 mg · tabletki",
    "substance": "sarolaner",
    "source": "https://www.zoetis.com.pl/_locale-assets/charakterystyki-produktow/simparica-qrd-02.2025-vnra.pdf",
    "sourceLabel": "Charakterystyka / informacja urzędowa",
    "checked": "19.10.2026",
    "library": "vet",
    "kind": "expandedDose",
    "indications": "Zwalczanie pcheł i kleszczy zgodnie z ChPLW.",
    "notes": "Z karmą lub bez karmy. Nie dzielić. Miesięczny schemat dotyczy pcheł i kleszczy; świerzb uszny: jedno podanie i kontrola po 30 dniach.",
    "cautions": "Nie dzielić tabletek. Ostrożność przy zaburzeniach neurologicznych; pełne ograniczenia w źródle.",
    "form": "bands",
    "table": [
      {
        "lo": 1.3,
        "hi": 2.5,
        "amount": 1,
        "strength": "5 mg",
        "loOpen": false
      },
      {
        "lo": 2.5,
        "hi": 5,
        "amount": 1,
        "strength": "10 mg",
        "loOpen": true
      },
      {
        "lo": 5,
        "hi": 10,
        "amount": 1,
        "strength": "20 mg",
        "loOpen": true
      },
      {
        "lo": 10,
        "hi": 20,
        "amount": 1,
        "strength": "40 mg",
        "loOpen": true
      },
      {
        "lo": 20,
        "hi": 40,
        "amount": 1,
        "strength": "80 mg",
        "loOpen": true
      },
      {
        "lo": 40,
        "hi": 60,
        "amount": 1,
        "strength": "120 mg",
        "loOpen": true
      }
    ],
    "doseUnit": "tabl.",
    "frequency": "Co miesiąc",
    "route": "Doustnie",
    "minWeight": 1.3,
    "minAge": 8,
    "antiparasitic": true,
    "tickProduct": true,
    "protection": "Pchły i kleszcze: co najmniej 5 tygodni."
  },
  {
    "id": "simparica-trio",
    "name": "Simparica Trio · tabletki",
    "species": [
      "dog"
    ],
    "strength": "3 + 0,06 + 12,5 mg / 6 + 0,12 + 25 mg / 12 + 0,24 + 50 mg / 24 + 0,48 + 100 mg / 48 + 0,96 + 200 mg / 72 + 1,44 + 300 mg · tabletki",
    "substance": "sarolaner + moksydektyna + pyrantel",
    "source": "https://www.zoetis.com.pl/_locale-assets/charakterystyki-produktow/simparica-trio-qrd-04.2025-decqrd.pdf",
    "sourceLabel": "Charakterystyka / informacja urzędowa",
    "checked": "19.10.2026",
    "library": "vet",
    "kind": "expandedDose",
    "indications": "Mieszane inwazje pasożytów zewnętrznych i wewnętrznych zgodnie z ChPLW.",
    "notes": "Przy jednoczesnym wskazaniu do zwalczania pasożytów zewnętrznych i nicieni. Z karmą lub bez; nie dzielić. Termin zależy od pasożyta. Pchły/kleszcze: schemat miesięczny; nicienie jelitowe: pojedyncze podanie. Profilaktyka nicieni sercowych wymaga odrębnego planu.",
    "cautions": "Przed profilaktyką dirofilariozy wykluczyć zarażenie. Pełne ograniczenia w ChPLW.",
    "form": "bands",
    "table": [
      {
        "lo": 1.25,
        "hi": 2.5,
        "amount": 1,
        "strength": "3 + 0,06 + 12,5 mg",
        "loOpen": false
      },
      {
        "lo": 2.5,
        "hi": 5,
        "amount": 1,
        "strength": "6 + 0,12 + 25 mg",
        "loOpen": true
      },
      {
        "lo": 5,
        "hi": 10,
        "amount": 1,
        "strength": "12 + 0,24 + 50 mg",
        "loOpen": true
      },
      {
        "lo": 10,
        "hi": 20,
        "amount": 1,
        "strength": "24 + 0,48 + 100 mg",
        "loOpen": true
      },
      {
        "lo": 20,
        "hi": 40,
        "amount": 1,
        "strength": "48 + 0,96 + 200 mg",
        "loOpen": true
      },
      {
        "lo": 40,
        "hi": 60,
        "amount": 1,
        "strength": "72 + 1,44 + 300 mg",
        "loOpen": true
      }
    ],
    "doseUnit": "tabl.",
    "frequency": "Termin według wskazania",
    "route": "Doustnie",
    "minWeight": 1.25,
    "minAge": 8,
    "antiparasitic": true,
    "tickProduct": true,
    "protection": "Pchły: 5 tygodni. Kleszcze I. hexagonus, I. ricinus i R. sanguineus: 5 tygodni; D. reticulatus: 4 tygodnie."
  },
  {
    "id": "bravecto-oral",
    "name": "Bravecto · tabletki",
    "species": [
      "dog"
    ],
    "strength": "112,5 mg / 250 mg / 500 mg / 1000 mg / 1400 mg · tabletki",
    "substance": "fluralaner",
    "source": "https://www.msd-animal-health.pl/produkty/bravecto-wszystkie-postacie/",
    "sourceLabel": "Charakterystyka / informacja urzędowa",
    "checked": "19.10.2026",
    "library": "vet",
    "kind": "expandedDose",
    "indications": "Zwalczanie pcheł i kleszczy zgodnie z ChPLW.",
    "notes": "Cała tabletka z karmą. Nie dzielić. Pchły: 12 tygodni. R. sanguineus: 8 tygodni; pozostałe gatunki kleszczy według ChPLW.",
    "cautions": "Ostrożnie przy padaczce. Nie powtarzać częściej niż co 8 tygodni.",
    "form": "bands",
    "table": [
      {
        "lo": 2,
        "hi": 4.5,
        "amount": 1,
        "strength": "112,5 mg",
        "loOpen": false
      },
      {
        "lo": 4.5,
        "hi": 10,
        "amount": 1,
        "strength": "250 mg",
        "loOpen": true
      },
      {
        "lo": 10,
        "hi": 20,
        "amount": 1,
        "strength": "500 mg",
        "loOpen": true
      },
      {
        "lo": 20,
        "hi": 40,
        "amount": 1,
        "strength": "1000 mg",
        "loOpen": true
      },
      {
        "lo": 40,
        "hi": 56,
        "amount": 1,
        "strength": "1400 mg",
        "loOpen": true
      }
    ],
    "doseUnit": "tabl.",
    "frequency": "Według pasożyta: 8 lub 12 tygodni",
    "route": "Doustnie",
    "minWeight": 2,
    "minAge": 8,
    "antiparasitic": true,
    "tickProduct": true,
    "protection": "Pchły: 12 tygodni. Kleszcze: zależnie od gatunku, zwykle 12 tygodni; R. sanguineus: 8 tygodni."
  },
  {
    "id": "bravecto-spot-dog",
    "name": "Bravecto · spot-on dla psów",
    "species": [
      "dog"
    ],
    "strength": "112,5 mg / 250 mg / 500 mg / 1000 mg / 1400 mg · spot-on",
    "substance": "fluralaner",
    "source": "https://www.msd-animal-health.pl/produkty/bravecto-wszystkie-postacie/",
    "sourceLabel": "Charakterystyka / informacja urzędowa",
    "checked": "19.10.2026",
    "library": "vet",
    "kind": "expandedDose",
    "indications": "Zwalczanie pcheł i kleszczy zgodnie z ChPLW.",
    "notes": "Cała pipeta bezpośrednio na nieuszkodzoną skórę. Nie podawać doustnie. Nie kąpać i nie pozwalać pływać przez 3 dni po podaniu.",
    "cautions": "Ostrożnie przy padaczce. Nie powtarzać częściej niż co 8 tygodni.",
    "form": "bands",
    "table": [
      {
        "lo": 2,
        "hi": 4.5,
        "amount": 1,
        "strength": "112,5 mg",
        "loOpen": false
      },
      {
        "lo": 4.5,
        "hi": 10,
        "amount": 1,
        "strength": "250 mg",
        "loOpen": true
      },
      {
        "lo": 10,
        "hi": 20,
        "amount": 1,
        "strength": "500 mg",
        "loOpen": true
      },
      {
        "lo": 20,
        "hi": 40,
        "amount": 1,
        "strength": "1000 mg",
        "loOpen": true
      },
      {
        "lo": 40,
        "hi": 56,
        "amount": 1,
        "strength": "1400 mg",
        "loOpen": true
      }
    ],
    "doseUnit": "pipeta",
    "frequency": "Co 12 tygodni — pchły i kleszcze",
    "route": "Na skórę",
    "minWeight": 2,
    "minAge": 8,
    "antiparasitic": true,
    "tickProduct": true,
    "protection": "Pchły i kleszcze wskazane w ChPLW: 12 tygodni."
  },
  {
    "id": "bravecto-spot-cat",
    "name": "Bravecto · spot-on dla kotów",
    "species": [
      "cat"
    ],
    "strength": "112,5 mg / 250 mg / 500 mg · spot-on",
    "substance": "fluralaner",
    "source": "https://www.msd-animal-health.pl/produkty/bravecto-wszystkie-postacie/",
    "sourceLabel": "Charakterystyka / informacja urzędowa",
    "checked": "19.10.2026",
    "library": "vet",
    "kind": "expandedDose",
    "indications": "Zwalczanie pcheł i kleszczy zgodnie z ChPLW.",
    "notes": "Cała pipeta na skórę u podstawy czaszki; >6,25 kg w dwóch miejscach.",
    "cautions": "Nie podawać doustnie; nie dopuszczać do wzajemnego wylizywania.",
    "form": "bands",
    "table": [
      {
        "lo": 1.2,
        "hi": 2.8,
        "amount": 1,
        "strength": "112,5 mg",
        "loOpen": false
      },
      {
        "lo": 2.8,
        "hi": 6.25,
        "amount": 1,
        "strength": "250 mg",
        "loOpen": true
      },
      {
        "lo": 6.25,
        "hi": 12.5,
        "amount": 1,
        "strength": "500 mg",
        "loOpen": true
      }
    ],
    "doseUnit": "pipeta",
    "frequency": "Co 12 tygodni — pchły i I. ricinus",
    "route": "Na skórę",
    "minWeight": 1.2,
    "minAge": 9,
    "antiparasitic": true,
    "tickProduct": true,
    "protection": "Pchły i kleszcze I. ricinus: 12 tygodni."
  },
  {
    "id": "advantix",
    "name": "Advantix · spot-on",
    "species": [
      "dog"
    ],
    "strength": "40/200, 100/500, 250/1250, 400/2000 mg",
    "substance": "imidaklopryd + permetryna",
    "source": "https://rejestrymedyczne.ezdrowie.gov.pl/api/rpl/medicinal-products/17208/leaflet",
    "sourceLabel": "Charakterystyka / informacja urzędowa",
    "checked": "19.10.2026",
    "library": "vet",
    "kind": "expandedDose",
    "indications": "Zwalczanie pcheł i kleszczy; odstraszanie wybranych owadów zgodnie z ChPLW.",
    "notes": "Wyłącznie na skórę. Jedna cała pipeta o mocy dobranej do masy. Chronić kota przed kontaktem z leczonym psem do wyschnięcia miejsca podania.",
    "cautions": "TOKSYCZNY DLA KOTÓW. Nie stosować u kotów ani dopuścić do wylizywania leczonego psa. Nie stosować poniżej 7 tygodni.",
    "form": "bands",
    "doseUnit": "pipeta",
    "route": "Na skórę",
    "frequency": "Ochrona do 4 tygodni",
    "table": [
      {
        "lo": 0,
        "hi": 4,
        "amount": 1,
        "strength": "40 + 200 mg · 0,4 ml",
        "loOpen": false,
        "source": "https://rejestrymedyczne.ezdrowie.gov.pl/api/rpl/medicinal-products/17211/characteristic"
      },
      {
        "lo": 4,
        "hi": 10,
        "amount": 1,
        "strength": "100 + 500 mg · 1 ml",
        "loOpen": true,
        "source": "https://rejestrymedyczne.ezdrowie.gov.pl/api/rpl/medicinal-products/20769/characteristic"
      },
      {
        "lo": 10,
        "hi": 25,
        "amount": 1,
        "strength": "250 + 1250 mg · 2,5 ml",
        "loOpen": true,
        "source": "https://rejestrymedyczne.ezdrowie.gov.pl/api/rpl/medicinal-products/17209/characteristic"
      },
      {
        "lo": 25,
        "hi": 40,
        "amount": 1,
        "strength": "400 + 2000 mg · 4 ml",
        "loOpen": true,
        "source": "https://rejestrymedyczne.ezdrowie.gov.pl/api/rpl/medicinal-products/17208/characteristic"
      }
    ],
    "minAge": 7,
    "showUnavailable": true,
    "antiparasitic": true,
    "tickProduct": true,
    "protection": "Pchły i kleszcze: 4 tygodnie. Działanie odstraszające wobec wskazanych owadów: 4 tygodnie."
  },
  {
    "id": "milprazon-dog",
    "name": "Milprazon · tabletki dla psów",
    "species": [
      "dog"
    ],
    "strength": "2,5 + 25 / 12,5 + 125 mg",
    "substance": "milbemycyny oksym + prazykwantel",
    "source": "https://rejestrymedyczne.ezdrowie.gov.pl/api/rpl/medicinal-products/33500/leaflet",
    "sourceLabel": "Charakterystyka / informacja urzędowa",
    "checked": "19.10.2026",
    "library": "vet",
    "kind": "expandedDose",
    "indications": "Mieszane inwazje nicieni i tasiemców.",
    "notes": "Z karmą lub po posiłku. Tabela dotyczy pojedynczego podania w mieszanych inwazjach jelitowych. A. vasorum i Thelazia wymagają odrębnych schematów w ulotce.",
    "cautions": "Ostrożnie przy MDR1, mikrofilaremii i z innymi laktonami makrocyklicznymi. Wykluczyć dorosłe Dirofilaria przed profilaktyką.",
    "form": "bands",
    "doseUnit": "tabl.",
    "route": "Doustnie",
    "frequency": "Jednorazowo — inwazje jelitowe",
    "minWeight": 0.5,
    "table": [
      {
        "lo": 0.5,
        "hi": 1,
        "amount": 0.5,
        "strength": "2,5 + 25 mg",
        "loOpen": false
      },
      {
        "lo": 1,
        "hi": 5,
        "amount": 1,
        "strength": "2,5 + 25 mg",
        "loOpen": true
      },
      {
        "lo": 5,
        "hi": 25,
        "amount": 1,
        "strength": "12,5 + 125 mg",
        "loOpen": true
      },
      {
        "lo": 25,
        "hi": 50,
        "amount": 2,
        "strength": "12,5 + 125 mg",
        "loOpen": true
      },
      {
        "lo": 50,
        "hi": 75,
        "amount": 3,
        "strength": "12,5 + 125 mg",
        "loOpen": true
      }
    ],
    "antiparasitic": true
  },
  {
    "id": "milprazon-cat",
    "name": "Milprazon · tabletki dla kotów",
    "species": [
      "cat"
    ],
    "strength": "4 + 10 / 16 + 40 mg",
    "substance": "milbemycyny oksym + prazykwantel",
    "source": "https://rejestrymedyczne.ezdrowie.gov.pl/api/rpl/medicinal-products/34282/leaflet",
    "sourceLabel": "Charakterystyka / informacja urzędowa",
    "checked": "19.10.2026",
    "library": "vet",
    "kind": "expandedDose",
    "indications": "Mieszane inwazje nicieni i tasiemców.",
    "notes": "Jednorazowo z karmą lub po niej. Podzielność na połowy. Profilaktyka dirofilariozy wymaga osobnego planu.",
    "cautions": "Nie stosować mocy 16/40 mg poniżej 2 kg. Ostrożnie z innymi laktonami makrocyklicznymi oraz przy ciężkich chorobach nerek i wątroby.",
    "form": "bands",
    "doseUnit": "tabl.",
    "route": "Doustnie",
    "frequency": "Jednorazowo",
    "minWeight": 0.5,
    "table": [
      {
        "lo": 0.5,
        "hi": 1,
        "amount": 0.5,
        "strength": "4 + 10 mg",
        "loOpen": false
      },
      {
        "lo": 1,
        "hi": 2,
        "amount": 1,
        "strength": "4 + 10 mg",
        "loOpen": true
      },
      {
        "lo": 2,
        "hi": 4,
        "amount": 0.5,
        "strength": "16 + 40 mg",
        "loOpen": true
      },
      {
        "lo": 4,
        "hi": 8,
        "amount": 1,
        "strength": "16 + 40 mg",
        "loOpen": true
      },
      {
        "lo": 8,
        "hi": 12,
        "amount": 1.5,
        "strength": "16 + 40 mg",
        "loOpen": true
      }
    ],
    "antiparasitic": true
  },
  {
    "id": "milbenin",
    "name": "Milbenin · tabletki",
    "species": [
      "dog"
    ],
    "strength": "2,5 + 25 / 12,5 + 125 mg · tabletki",
    "substance": "milbemycyny oksym + prazykwantel",
    "source": "https://cimavet.aemps.es/cimavet/pdfs/es/p/4180%2BESP/P_4180%2BESP.pdf",
    "sourceLabel": "Urzędowa informacja AEMPS (hiszpańska)",
    "checked": "19.10.2026",
    "library": "vet",
    "kind": "expandedDose",
    "indications": "Mieszane inwazje tasiemców i nicieni.",
    "notes": "Całe tabletki z karmą lub po niej. Tabela dotyczy pojedynczego podania w inwazjach jelitowych; A. vasorum i Thelazia mają odrębne schematy.",
    "cautions": "Nie stosować poniżej 2 tygodni lub 1 kg. Ostrożnie przy MDR1 i mikrofilaremii. Całe tabletki — bez podziału.",
    "form": "bands",
    "doseUnit": "tabl.",
    "frequency": "Jednorazowo — inwazje jelitowe",
    "route": "Doustnie",
    "minWeight": 1,
    "table": [
      {
        "lo": 1,
        "hi": 5,
        "amount": 1,
        "strength": "2,5 + 25 mg",
        "loOpen": false
      },
      {
        "lo": 5,
        "hi": 25,
        "amount": 1,
        "strength": "12,5 + 125 mg",
        "loOpen": true
      },
      {
        "lo": 25,
        "hi": 50,
        "amount": 2,
        "strength": "12,5 + 125 mg",
        "loOpen": true
      },
      {
        "lo": 50,
        "hi": 75,
        "amount": 3,
        "strength": "12,5 + 125 mg",
        "loOpen": true
      }
    ],
    "minAge": 2,
    "antiparasitic": true
  },
  {
    "id": "aniprazol",
    "name": "Aniprazol · tabletki",
    "species": [
      "dog",
      "cat"
    ],
    "strength": "50 + 500 mg · tabletki",
    "substance": "prazykwantel + fenbendazol",
    "source": "https://rejestrymedyczne.ezdrowie.gov.pl/api/rpl/medicinal-products/16730/characteristic",
    "sourceLabel": "Charakterystyka / informacja urzędowa",
    "checked": "19.10.2026",
    "library": "vet",
    "kind": "expandedDose",
    "indications": "Mieszane inwazje nicieni i tasiemców.",
    "notes": "5 mg/kg prazykwantelu i 50 mg/kg fenbendazolu na podanie przez 3 kolejne dni. Tabletki podzielne na połowy i ćwiartki. Unikać równoczesnego podawania mleka.",
    "cautions": "Nie stosować u ciężarnych kotek. Ciąża suk i pozostałe ograniczenia: ChPLW.",
    "form": "tabletExact",
    "mg": 50,
    "rate": [
      5
    ],
    "doseUnit": "tabl.",
    "route": "Doustnie",
    "frequency": "Raz dziennie przez 3 dni",
    "basis": "5 mg/kg prazykwantelu + 50 mg/kg fenbendazolu.",
    "antiparasitic": true
  },
  {
    "id": "quanifen",
    "name": "Quanifen · tabletki",
    "species": [
      "dog",
      "cat"
    ],
    "strength": "50 + 500 mg · tabletki",
    "substance": "prazykwantel + fenbendazol",
    "source": "https://rejestrymedyczne.ezdrowie.gov.pl/api/rpl/medicinal-products/18837/characteristic",
    "sourceLabel": "Charakterystyka / informacja urzędowa",
    "checked": "19.10.2026",
    "library": "vet",
    "kind": "expandedDose",
    "indications": "Mieszane inwazje nicieni i tasiemców.",
    "notes": "Jednorazowo. Przy obleńcach kontynuować samym fenbendazolem 50 mg/kg przez następne 2 dni; nie powtarzać automatycznie całego Quanifenu przez 3 dni.",
    "cautions": "Nie stosować u kociąt <8 tygodni, ciężarnych kotek i suk do 39. dnia ciąży. Pełne ograniczenia w ChPLW. Tabela dla małych psów i szczeniąt dotyczy wieku powyżej 6 miesięcy.",
    "form": "speciesBands",
    "doseUnit": "tabl.",
    "route": "Doustnie",
    "frequency": "Jednorazowo",
    "minAgeBySpecies": {
      "cat": 8,
      "dog": 26
    },
    "tables": {
      "dog": [
        {
          "lo": 0.5,
          "hi": 2.5,
          "amount": 0.25,
          "loOpen": false
        },
        {
          "lo": 2.5,
          "hi": 5,
          "amount": 0.5,
          "loOpen": true
        },
        {
          "lo": 6,
          "hi": 10,
          "amount": 1,
          "loOpen": false
        },
        {
          "lo": 11,
          "hi": 15,
          "amount": 1.5,
          "loOpen": false
        },
        {
          "lo": 16,
          "hi": 20,
          "amount": 2,
          "loOpen": false
        },
        {
          "lo": 21,
          "hi": 25,
          "amount": 2.5,
          "loOpen": false
        },
        {
          "lo": 26,
          "hi": 30,
          "amount": 3,
          "loOpen": false
        },
        {
          "lo": 31,
          "hi": 35,
          "amount": 3.5,
          "loOpen": false
        },
        {
          "lo": 36,
          "hi": 40,
          "amount": 4,
          "loOpen": false
        }
      ],
      "cat": [
        {
          "lo": 0.5,
          "hi": 2.5,
          "amount": 0.25
        },
        {
          "lo": 2.5,
          "hi": 5,
          "amount": 0.5,
          "loOpen": true
        }
      ]
    },
    "antiparasitic": true
  },
  {
    "id": "drontal-cat",
    "name": "Drontal · tabletki dla kotów",
    "species": [
      "cat"
    ],
    "strength": "230 + 20 mg · tabletki",
    "substance": "pyrantelu embonian + prazykwantel",
    "source": "https://rejestrymedyczne.ezdrowie.gov.pl/api/rpl/medicinal-products/18501/characteristic",
    "sourceLabel": "Charakterystyka / informacja urzędowa",
    "checked": "19.10.2026",
    "library": "vet",
    "kind": "expandedDose",
    "indications": "Jelitowe inwazje nicieni i tasiemców.",
    "notes": "1 tabletka na 4 kg doustnie. Tabletki podzielne na połowy; wynik podziału musi odpowiadać możliwej do odmierzenia dawce.",
    "cautions": "Nie stosować poniżej 3 tygodni ani w dwóch pierwszych trymestrach ciąży.",
    "form": "tabletExact",
    "mg": 20,
    "rate": [
      5
    ],
    "tabletStep": 0.5,
    "doseUnit": "tabl.",
    "route": "Doustnie",
    "frequency": "Jednorazowo",
    "minAge": 3,
    "basis": "5 mg/kg prazykwantelu; 57,5 mg/kg embonianu pyrantelu.",
    "antiparasitic": true
  },
  {
    "id": "dehinel-cat",
    "name": "Dehinel · tabletki dla kotów",
    "species": [
      "cat"
    ],
    "strength": "230 + 20 mg · tabletki",
    "substance": "pyrantelu embonian + prazykwantel",
    "source": "https://rejestrymedyczne.ezdrowie.gov.pl/api/rpl/medicinal-products/38815/characteristic",
    "sourceLabel": "Charakterystyka / informacja urzędowa",
    "checked": "19.10.2026",
    "library": "vet",
    "kind": "expandedDose",
    "indications": "Jelitowe inwazje nicieni i tasiemców.",
    "notes": "Jednorazowo bezpośrednio do pyska lub z małą ilością karmy. W silnych inwazjach glist konieczne mogą być powtórzenia według ChPLW.",
    "cautions": "Nie stosować poniżej 1 kg, w ciąży ani równocześnie z piperazyną.",
    "form": "bands",
    "doseUnit": "tabl.",
    "route": "Doustnie",
    "frequency": "Jednorazowo",
    "minWeight": 1,
    "table": [
      {
        "lo": 1,
        "hi": 2,
        "amount": 0.5
      },
      {
        "lo": 2.1,
        "hi": 4,
        "amount": 1
      },
      {
        "lo": 4.1,
        "hi": 6,
        "amount": 1.5
      },
      {
        "lo": 6.1,
        "hi": 8,
        "amount": 2
      }
    ],
    "antiparasitic": true
  },
  {
    "id": "clavusan-medium",
    "name": "Clavusan · tabletki",
    "species": [
      "dog",
      "cat"
    ],
    "strength": "250 + 62,5 mg · tabletki",
    "substance": "amoksycylina + kwas klawulanowy",
    "source": "https://rejestrymedyczne.ezdrowie.gov.pl/api/rpl/medicinal-products/48186/characteristic",
    "sourceLabel": "Charakterystyka / informacja urzędowa",
    "checked": "19.10.2026",
    "library": "vet",
    "kind": "expandedDose",
    "indications": "Wrażliwe zakażenia bakteryjne według ChPLW.",
    "notes": "Doustnie dwa razy dziennie, zwykle 5–7 dni. Podział na ćwiartki. Dobór liczby tabletek według tabeli ChPLW.",
    "cautions": "Nie stosować przy alergii na beta-laktamy. Ocenić czynność nerek i wątroby oraz interakcje z antybiotykami bakteriostatycznymi.",
    "form": "bands",
    "doseUnit": "tabl.",
    "frequency": "2 razy dziennie",
    "route": "Doustnie",
    "table": [
      {
        "lo": 5,
        "hi": 6.25,
        "amount": 0.25,
        "loOpen": true
      },
      {
        "lo": 6.25,
        "hi": 12.5,
        "amount": 0.5,
        "loOpen": true
      },
      {
        "lo": 12.5,
        "hi": 18.75,
        "amount": 0.75,
        "loOpen": true
      },
      {
        "lo": 18.75,
        "hi": 25,
        "amount": 1,
        "loOpen": true
      },
      {
        "lo": 25,
        "hi": 31.25,
        "amount": 1.25,
        "loOpen": true
      },
      {
        "lo": 31.25,
        "hi": 37.5,
        "amount": 1.5,
        "loOpen": true
      }
    ]
  },
  {
    "id": "clavusan-large",
    "name": "Clavusan · tabletki",
    "species": [
      "dog"
    ],
    "strength": "500 + 125 mg · tabletki",
    "substance": "amoksycylina + kwas klawulanowy",
    "source": "https://rejestrymedyczne.ezdrowie.gov.pl/api/rpl/medicinal-products/48187/characteristic",
    "sourceLabel": "Charakterystyka / informacja urzędowa",
    "checked": "19.10.2026",
    "library": "vet",
    "kind": "expandedDose",
    "indications": "Wrażliwe zakażenia bakteryjne według ChPLW.",
    "notes": "Doustnie dwa razy dziennie, zwykle 5–7 dni. Podział na ćwiartki. Dobór liczby tabletek według tabeli ChPLW.",
    "cautions": "Nie stosować przy alergii na beta-laktamy. Ocenić czynność nerek i wątroby oraz interakcje z antybiotykami bakteriostatycznymi.",
    "form": "bands",
    "doseUnit": "tabl.",
    "frequency": "2 razy dziennie",
    "route": "Doustnie",
    "table": [
      {
        "lo": 6.25,
        "hi": 12.5,
        "amount": 0.25,
        "loOpen": true
      },
      {
        "lo": 18.75,
        "hi": 25,
        "amount": 0.5,
        "loOpen": true
      },
      {
        "lo": 37.5,
        "hi": 50,
        "amount": 1,
        "loOpen": true
      },
      {
        "lo": 50,
        "hi": 62.5,
        "amount": 1.25,
        "loOpen": true
      },
      {
        "lo": 62.5,
        "hi": 75,
        "amount": 1.5,
        "loOpen": true
      }
    ]
  },
  {
    "id": "drontal-dog",
    "name": "Drontal Dog Flavour · tabletki",
    "species": [
      "dog"
    ],
    "strength": "150 + 50 + 50 mg · tabletki",
    "substance": "febantel + pyrantel + prazykwantel",
    "source": "https://rejestrymedyczne.ezdrowie.gov.pl/api/rpl/medicinal-products/33964/characteristic",
    "sourceLabel": "Charakterystyka / informacja urzędowa",
    "checked": "19.10.2026",
    "library": "vet",
    "kind": "expandedDose",
    "indications": "Inwazje nicieni i tasiemców; Giardia zgodnie z ChPLW.",
    "notes": "Dawka z tabeli dotyczy podania jednorazowego przy robakach jelitowych. Przy Giardia tę samą dawkę podawać przez 3 kolejne dni. Tabletki dzielone na połowy.",
    "cautions": "Nie stosować poniżej 2 kg ani z piperazyną. Nie stosować w pierwszych dwóch trymestrach ciąży.",
    "form": "bands",
    "doseUnit": "tabl.",
    "route": "Doustnie",
    "frequency": "Jednorazowo; Giardia: 3 dni",
    "minWeight": 2,
    "table": [
      {
        "lo": 2,
        "hi": 5,
        "amount": 0.5,
        "strength": "",
        "loOpen": false
      },
      {
        "lo": 5,
        "hi": 10,
        "amount": 1.0,
        "strength": "",
        "loOpen": true
      },
      {
        "lo": 10,
        "hi": 15,
        "amount": 1.5,
        "strength": "",
        "loOpen": true
      },
      {
        "lo": 15,
        "hi": 20,
        "amount": 2.0,
        "strength": "",
        "loOpen": true
      },
      {
        "lo": 20,
        "hi": 25,
        "amount": 2.5,
        "strength": "",
        "loOpen": true
      },
      {
        "lo": 25,
        "hi": 30,
        "amount": 3.0,
        "strength": "",
        "loOpen": true
      },
      {
        "lo": 30,
        "hi": 35,
        "amount": 3.5,
        "strength": "",
        "loOpen": true
      },
      {
        "lo": 35,
        "hi": 40,
        "amount": 4.0,
        "strength": "",
        "loOpen": true
      },
      {
        "lo": 40,
        "hi": 45,
        "amount": 4.5,
        "strength": "",
        "loOpen": true
      }
    ],
    "antiparasitic": true
  },
  {
    "id": "drontal-dog-xl",
    "name": "Drontal Dog Flavour XL · tabletki",
    "species": [
      "dog"
    ],
    "strength": "525 + 504 + 175 mg · tabletki",
    "substance": "febantel + pyrantel + prazykwantel",
    "source": "https://rejestrymedyczne.ezdrowie.gov.pl/api/rpl/medicinal-products/40258/characteristic",
    "sourceLabel": "Charakterystyka / informacja urzędowa",
    "checked": "19.10.2026",
    "library": "vet",
    "kind": "expandedDose",
    "indications": "Inwazje nicieni i tasiemców; Giardia zgodnie z ChPLW.",
    "notes": "Dawka z tabeli dotyczy podania jednorazowego przy robakach jelitowych. Przy Giardia tę samą dawkę podawać przez 3 kolejne dni. Tabletki dzielone na połowy.",
    "cautions": "Nie stosować poniżej 7 kg ani z piperazyną. Nie stosować w pierwszych dwóch trymestrach ciąży.",
    "form": "bands",
    "doseUnit": "tabl.",
    "route": "Doustnie",
    "frequency": "Jednorazowo; Giardia: 3 dni",
    "minWeight": 7,
    "table": [
      {
        "lo": 7,
        "hi": 17.5,
        "amount": 0.5,
        "strength": "",
        "loOpen": false
      },
      {
        "lo": 17.5,
        "hi": 35.0,
        "amount": 1.0,
        "strength": "",
        "loOpen": true
      },
      {
        "lo": 35.0,
        "hi": 52.5,
        "amount": 1.5,
        "strength": "",
        "loOpen": true
      },
      {
        "lo": 52.5,
        "hi": 70.0,
        "amount": 2.0,
        "strength": "",
        "loOpen": true
      },
      {
        "lo": 70.0,
        "hi": 87.5,
        "amount": 2.5,
        "strength": "",
        "loOpen": true
      },
      {
        "lo": 87.5,
        "hi": 105.0,
        "amount": 3.0,
        "strength": "",
        "loOpen": true
      },
      {
        "lo": 105.0,
        "hi": 122.5,
        "amount": 3.5,
        "strength": "",
        "loOpen": true
      },
      {
        "lo": 122.5,
        "hi": 140.0,
        "amount": 4.0,
        "strength": "",
        "loOpen": true
      },
      {
        "lo": 140.0,
        "hi": 157.5,
        "amount": 4.5,
        "strength": "",
        "loOpen": true
      }
    ],
    "antiparasitic": true
  },
  {
    "id": "dehinel-plus",
    "name": "Dehinel Plus Flavour · tabletki",
    "species": [
      "dog"
    ],
    "strength": "50 + 144 + 150 mg",
    "substance": "prazykwantel + pyrantelu embonian + febantel",
    "source": "https://www.krka-polska.pl/_assets/Dehinel-Plus-Flavour-ChWPL.pdf",
    "sourceLabel": "Charakterystyka / informacja urzędowa",
    "checked": "19.10.2026",
    "library": "vet",
    "kind": "expandedDose",
    "indications": "Mieszane inwazje nicieni i tasiemców.",
    "notes": "Jednorazowo, bezpośrednio lub z pokarmem. Przelicznik: 5 mg/kg prazykwantelu. Dalsze terminy zależą od pasożyta i ryzyka ponownego zarażenia.",
    "cautions": "Nie stosować z piperazyną ani w pierwszych dwóch trymestrach ciąży. Pełne ograniczenia w ChPLW.",
    "form": "tabletExact",
    "mg": 50,
    "rate": [
      5
    ],
    "tabletStep": 0.25,
    "minWeight": null,
    "doseUnit": "tabl.",
    "route": "Doustnie",
    "frequency": "Jednorazowo",
    "basis": "5 mg/kg prazykwantelu; podział wyłącznie zgodnie z tą postacią.",
    "antiparasitic": true
  },
  {
    "id": "dehinel-xl",
    "name": "Dehinel Plus XL · tabletki",
    "species": [
      "dog"
    ],
    "strength": "175 + 504 + 525 mg",
    "substance": "prazykwantel + pyrantelu embonian + febantel",
    "source": "https://www.krka-polska.pl/_assets/Dehinel-Plus-XL-ChWPL.pdf",
    "sourceLabel": "Charakterystyka / informacja urzędowa",
    "checked": "19.10.2026",
    "library": "vet",
    "kind": "expandedDose",
    "indications": "Mieszane inwazje nicieni i tasiemców.",
    "notes": "Jednorazowo, bezpośrednio lub z pokarmem. Przelicznik: 5 mg/kg prazykwantelu. Dalsze terminy zależą od pasożyta i ryzyka ponownego zarażenia.",
    "cautions": "Nie stosować z piperazyną ani w pierwszych dwóch trymestrach ciąży. Pełne ograniczenia w ChPLW.",
    "form": "tabletExact",
    "mg": 175,
    "rate": [
      5
    ],
    "tabletStep": 0.5,
    "minWeight": 17.5,
    "doseUnit": "tabl.",
    "route": "Doustnie",
    "frequency": "Jednorazowo",
    "basis": "5 mg/kg prazykwantelu; podział wyłącznie zgodnie z tą postacią.",
    "antiparasitic": true
  },
  {
    "id": "rheumocam-tablets",
    "name": "Rheumocam · tabletki",
    "species": [
      "dog"
    ],
    "library": "vet",
    "kind": "expandedDose",
    "form": "meloxicamTablets",
    "strength": "1 / 2,5 mg · tabletki do rozgryzania i żucia",
    "substance": "meloksykam",
    "source": "https://ec.europa.eu/health/documents/community-register/2021/20210928153175/anx_153175_pl.pdf#page=7",
    "sourceLabel": "Polska ChPLW i ulotka — Komisja Europejska",
    "checked": "19.10.2026",
    "minAge": 6,
    "minWeight": 4,
    "route": "Doustnie",
    "frequency": "Raz dziennie, co 24 godziny",
    "indications": "Ból i zapalenie w ostrych i przewlekłych schorzeniach narządu ruchu u psów.",
    "notes": "Początek leczenia doustnego: 0,2 mg/kg w pierwszym dniu; następnie 0,1 mg/kg raz na dobę. Tabela tabletek dotyczy dawki podtrzymującej. Podział wyłącznie na połowy. Gdy dawki początkowej nie można odmierzyć połówkami, zastosować odpowiednią zawiesinę. Po wcześniejszej iniekcji obowiązuje schemat kontynuacji z ChPLW. Bez poprawy przerwać najpóźniej po 10 dniach.",
    "cautions": "Nie stosować poniżej 6 tygodni lub 4 kg, w ciąży/laktacji, przy chorobach nerek, wątroby lub serca, owrzodzeniu i krwawieniu. Unikać odwodnienia. Nie łączyć z innymi NLPZ ani glikokortykosteroidami.",
    "table": [
      {
        "lo": 4,
        "hi": 7,
        "amount": 0.5,
        "mg": 1
      },
      {
        "lo": 7.1,
        "hi": 10,
        "amount": 1,
        "mg": 1
      },
      {
        "lo": 10.1,
        "hi": 15,
        "amount": 1.5,
        "mg": 1
      },
      {
        "lo": 15.1,
        "hi": 20,
        "amount": 2,
        "mg": 1
      },
      {
        "lo": 20.1,
        "hi": 25,
        "amount": 1,
        "mg": 2.5
      },
      {
        "lo": 25.1,
        "hi": 35,
        "amount": 1.5,
        "mg": 2.5
      },
      {
        "lo": 35.1,
        "hi": 50,
        "amount": 2,
        "mg": 2.5
      }
    ],
    "currentSource": "https://medicines.health.europa.eu/veterinary/pl/600000003555"
  }
];
function calculate(d,kg,species){
 const min=d.minWeightBySpecies?.[species]??d.minWeight;
 if(min&&kg<min)return {status:'blocked',message:'Ta postać nie ma schematu dla masy poniżej '+String(min).replace('.',',')+' kg.'};
 const base={status:'expandedDose',route:d.route,frequency:d.frequency,basis:d.basis||'',strength:'',antiparasitic:!!d.antiparasitic,showWeightBand:!!d.tickProduct||(d.id!=='milbenin'&&new Set((d.table||[]).map(v=>v.strength).filter(Boolean)).size>1),protection:d.protection||''};
 if(d.form==='meloxicamTablets'){
  const row=d.table.find(r=>kg>=r.lo&&kg<=r.hi);
  if(!row)return {status:'outside',message:'Ta masa nie mieści się w tabeli tabletek. Sprawdź zawiesinę doustną.'};
  const initialMg=kg*.2,halfCount=initialMg/row.mg*2;
  const initialTablets=Math.ceil(halfCount-1e-9)/2;
  const initialRounded=Math.abs(initialTablets*row.mg-initialMg)>1e-8;
  return {...base,amount:[row.amount],unit:'tabl.',strength:String(row.mg).replace('.',',')+' mg',basis:'Kolejne dni: tabela ChPLW dla '+row.lo+'–'+row.hi+' kg.',stages:[{label:'Pierwszy dzień',mg:initialMg,calculatedTablets:initialMg/row.mg,tablets:initialTablets,rounded:initialRounded,actualMg:initialTablets*row.mg},{label:'Kolejne dni',mg:row.amount*row.mg,tablets:row.amount}]};
 }
 if(d.form==='fixed')return {...base,amount:d.amount,unit:d.doseUnit};
 if(d.form==='bands'||d.form==='speciesBands'){
  const matches=(d.tables?.[species]||d.table||[]).filter(r=>(r.loOpen?kg>r.lo:kg>=r.lo)&&kg<=r.hi);
  if(matches.length!==1)return {status:'outside',message:'Ta masa jest poza tabelą tej postaci. Sprawdź inną moc lub kombinację mocy w ChPLW.'};
  const r=matches[0];return {...base,amount:[r.amount],unit:d.doseUnit,strength:r.strength||'',source:r.source,weightBand:{lo:r.lo,hi:r.hi,loOpen:!!r.loOpen},basis:'Przedział tabeli: '+(r.loOpen?'powyżej ':'od ')+r.lo+' do '+r.hi+' kg.'};
 }
 const mg=d.rate.map(v=>v*kg),targets=mg.map(v=>v/d.mg),step=d.tabletStep||.25;
 let quantity;
 if(d.form==='tabletRange'){
  const lo=Math.max(1,Math.ceil(targets[0]/step-1e-9)),hi=Math.floor(targets[1]/step+1e-9);
  quantity=lo<=hi?[lo*step,hi*step]:null;
 }else if(d.antiparasitic)quantity=[Math.ceil(targets[0]/step-1e-9)*step];
 else quantity=Math.abs(targets[0]/step-Math.round(targets[0]/step))<1e-8?[Math.round(targets[0]/step)*step]:null;
 if(!mg.every(Number.isFinite)||quantity&&!quantity.every(Number.isFinite))return {status:'invalid'};
 const rounded=!!(d.antiparasitic&&quantity&&Math.abs(quantity[0]-targets[0])>1e-8);
 const perTabletKg=d.mg/d.rate[0],loRaw=quantity?(quantity[0]-step)*perTabletKg:0;
 const weightBand=d.antiparasitic&&quantity?{lo:Math.max(loRaw,d.minWeight||0),hi:quantity[0]*perTabletKg,loOpen:loRaw>=(d.minWeight||0)}:undefined;
 return {...base,weightBand,rounded,actualMg:quantity?quantity.map(v=>v*d.mg):null,amount:quantity||mg,unit:quantity?'tabl.':(d.form==='tabletRange'?'mg tramadolu chlorowodorku':'mg prazykwantelu'),basis:d.basis||d.rate.join('–')+' mg/kg na podanie.',targetMg:mg,tabletUnavailable:!quantity};
}
return {entries,calculate};
})();
