/* Official Ilovet catalogue and formulation-specific instructions, checked 19.10.2026.
   Exact table bounds are retained; overlaps and gaps require checking the source. */
window.Ilovet=(()=>{
const entries=[
  {
    "id": "ilovet-d-o-s-pet",
    "name": "D.O.S. Pet cane e gatto · kapsułki miękkie",
    "species": [
      "dog",
      "cat"
    ],
    "kind": "ilovet",
    "library": "supplement",
    "aliases": "Ilovet Illovet NBF Lanes Kapsułki miękkie",
    "substance": "Ilovet · Kapsułki miękkie · Omega-3, witaminy, beta-karoten",
    "source": "https://ilovet.pl/oczy-i-powieki/d-o-s-pet/",
    "sourceLabel": "Zalecenia Ilovet",
    "checked": "19.10.2026",
    "strength": "Kapsułki miękkie",
    "categoryBadge": "Suplement",
    "indications": "Wsparcie w stanach zapalnych oka oraz zjawiskach zwyrodnieniowych pogarszających wzrok u psów i kotów.",
    "notes": "Doustnie, bezpośrednio do pyska lub z pokarmem. ",
    "cautions": "",
    "rules": {
      "dog": [
        {
          "mass": "≤10 kg",
          "amount": 1.0,
          "unit": "kaps.",
          "frequency": "jeden raz dziennie",
          "max": 10.0
        },
        {
          "mass": "11-25 kg",
          "amount": 2.0,
          "unit": "kaps.",
          "frequency": "jeden raz dziennie",
          "min": 11.0,
          "max": 25.0
        },
        {
          "mass": ">25 kg",
          "amount": 3.0,
          "unit": "kaps.",
          "frequency": "jeden raz dziennie",
          "min": 25.0,
          "minExclusive": true
        }
      ],
      "cat": [
        {
          "mass": "Niezależnie od masy",
          "amount": 1.0,
          "unit": "kaps.",
          "frequency": "jeden raz dziennie"
        }
      ]
    }
  },
  {
    "id": "ilovet-oftalid-masc",
    "name": "Oftalid cane e gatto · maść",
    "species": [
      "dog",
      "cat"
    ],
    "kind": "ilovet",
    "library": "supplement",
    "aliases": "Ilovet Illovet NBF Lanes Maść",
    "substance": "Ilovet · Maść",
    "source": "https://ilovet.pl/skora-i-siersc/oftalid-masc/",
    "sourceLabel": "Zalecenia Ilovet",
    "checked": "19.10.2026",
    "strength": "Maść",
    "categoryBadge": "Pielęgnacja",
    "indications": "Pielęgnacja skóry powiek.",
    "notes": "Niewielką ilość maści nałożyć na palec lub wacik, a następnie nałożyć na powiekę i masować delikatnie do całkowitego wchłonięcia. Zaleca się stosowanie Oftalid wyłącznie na powiece i unikanie kontaktu ze spojówką. Zalecane stosowanie: 2-3 razy dziennie.",
    "cautions": "",
    "rules": {},
    "topical": true,
    "instructions": "Niewielką ilość maści nałożyć na palec lub wacik, a następnie nałożyć na powiekę i masować delikatnie do całkowitego wchłonięcia. Zaleca się stosowanie Oftalid wyłącznie na powiece i unikanie kontaktu ze spojówką. Zalecane stosowanie: 2-3 razy dziennie."
  },
  {
    "id": "ilovet-omega-pet-cane-e-gatto-plyn",
    "name": "Omega Pet cane e gatto · płyn",
    "species": [
      "dog",
      "cat"
    ],
    "kind": "ilovet",
    "library": "supplement",
    "aliases": "Ilovet Illovet NBF Lanes Płyn",
    "substance": "Ilovet · Płyn · Omega-3, witamina e",
    "source": "https://ilovet.pl/skora-i-siersc/omega-pet-cane-e-gatto-plyn/",
    "sourceLabel": "Zalecenia Ilovet",
    "checked": "19.10.2026",
    "strength": "Płyn",
    "categoryBadge": "Suplement",
    "indications": "Wsparcie utrzymania prawidłowych funkcji skóry, dzięki wysokiej zawartości kwasów tłuszczowych omega-3.",
    "notes": "Doustnie, bezpośrednio do pyska lub z pokarmem. ",
    "cautions": "",
    "rules": {
      "dog": [
        {
          "mass": "≤5 kg",
          "amount": 0.5,
          "unit": "łyżeczki",
          "frequency": "jeden raz dziennie",
          "max": 5.0
        },
        {
          "mass": "6-10 kg",
          "amount": 1.0,
          "unit": "łyżeczki",
          "frequency": "jeden raz dziennie",
          "min": 6.0,
          "max": 10.0
        },
        {
          "mass": "11-15 kg",
          "amount": 2.0,
          "unit": "łyżeczki",
          "frequency": "jeden raz dziennie",
          "min": 11.0,
          "max": 15.0
        },
        {
          "mass": ">30 kg",
          "amount": 2.5,
          "unit": "łyżeczki",
          "frequency": "jeden raz dziennie",
          "min": 30.0,
          "minExclusive": true
        }
      ],
      "cat": [
        {
          "mass": "na każde 5 kg masy ciała",
          "amount": 0.5,
          "unit": "łyżeczki",
          "frequency": "jeden raz dziennie",
          "perKg": 5.0
        }
      ]
    }
  },
  {
    "id": "ilovet-omega-pet-cane-e-gatto",
    "name": "Omega Pet cane e gatto · kapsułki miękkie",
    "species": [
      "dog",
      "cat"
    ],
    "kind": "ilovet",
    "library": "supplement",
    "aliases": "Ilovet Illovet NBF Lanes Kapsułki miękkie",
    "substance": "Ilovet · Kapsułki miękkie · Omega-3 witamina e",
    "source": "https://ilovet.pl/skora-i-siersc/omega-pet-cane-e-gatto/",
    "sourceLabel": "Zalecenia Ilovet",
    "checked": "19.10.2026",
    "strength": "Kapsułki miękkie",
    "categoryBadge": "Suplement",
    "indications": "Wsparcie utrzymania prawidłowych funkcji skóry, dzięki wysokiej zawartości kwasów tłuszczowych omega-3.",
    "notes": "Doustnie, bezpośrednio do pyska lub z pokarmem. ",
    "cautions": "",
    "rules": {
      "dog": [
        {
          "mass": "≤5 kg",
          "amount": 1.0,
          "unit": "kaps.",
          "frequency": "jeden raz dziennie",
          "max": 5.0
        },
        {
          "mass": "6-10 kg",
          "amount": 2.0,
          "unit": "kaps.",
          "frequency": "jeden raz dziennie",
          "min": 6.0,
          "max": 10.0
        },
        {
          "mass": ">10 kg",
          "amount": 3.0,
          "unit": "kaps.",
          "frequency": "jeden raz dziennie",
          "min": 10.0,
          "minExclusive": true
        }
      ],
      "cat": [
        {
          "mass": "na każde 5 kg masy ciała",
          "amount": 1.0,
          "unit": "kaps.",
          "frequency": "jeden raz dziennie",
          "perKg": 5.0
        }
      ]
    }
  },
  {
    "id": "ilovet-ribes-pet-80-krople",
    "name": "Ribes Pet 80 cane e gatto · krople",
    "species": [
      "dog",
      "cat"
    ],
    "kind": "ilovet",
    "library": "supplement",
    "aliases": "Ilovet Illovet NBF Lanes Krople",
    "substance": "Ilovet · Krople · olej z pestek czarnej porzeczki",
    "source": "https://ilovet.pl/skora-i-siersc/ribes-pet-80-krople/",
    "sourceLabel": "Zalecenia Ilovet",
    "checked": "19.10.2026",
    "strength": "Krople",
    "categoryBadge": "Suplement",
    "indications": "Wsparcie leczenia zwierząt cierpiących na dermatozy o różnym pochodzeniu. Źródło Omeg – 100% olej z pestek czarnej porzeczki.",
    "notes": "Doustnie, bezpośrednio do pyska lub z pokarmem. ",
    "cautions": "",
    "rules": {
      "dog": [
        {
          "mass": "≤15 kg",
          "amount": 15.0,
          "unit": "kropli",
          "frequency": "jeden raz dziennie",
          "max": 15.0
        },
        {
          "mass": "16-30 kg",
          "amount": 20.0,
          "unit": "kropli",
          "frequency": "jeden raz dziennie",
          "min": 16.0,
          "max": 30.0
        },
        {
          "mass": "31-50 kg",
          "amount": 25.0,
          "unit": "kropli",
          "frequency": "jeden raz dziennie",
          "min": 31.0,
          "max": 50.0
        },
        {
          "mass": ">50 kg",
          "amount": 30.0,
          "unit": "kropli",
          "frequency": "jeden raz dziennie",
          "min": 50.0,
          "minExclusive": true
        }
      ],
      "cat": [
        {
          "mass": "5-10 kg",
          "amount": 10.0,
          "unit": "kropli",
          "frequency": "jeden raz dziennie",
          "min": 5.0,
          "max": 10.0
        }
      ]
    }
  },
  {
    "id": "ilovet-ribes-pet-kapsulki",
    "name": "Ribes Pet cane e gatto · kapsułki miękkie",
    "species": [
      "dog",
      "cat"
    ],
    "kind": "ilovet",
    "library": "supplement",
    "aliases": "Ilovet Illovet NBF Lanes Kapsułki miękkie",
    "substance": "Ilovet · Kapsułki miękkie · olej z pestek czarnej porzeczki",
    "source": "https://ilovet.pl/skora-i-siersc/ribes-pet-kapsulki/",
    "sourceLabel": "Zalecenia Ilovet",
    "checked": "19.10.2026",
    "strength": "Kapsułki miękkie",
    "categoryBadge": "Suplement",
    "indications": "Wsparcie leczenia zwierząt cierpiących na dermatozy o różnym pochodzeniu. Źródło Omeg – 100% oleju z pestek czarnej porzeczki.",
    "notes": "Doustnie, bezpośrednio do pyska lub z pokarmem. ",
    "cautions": "",
    "rules": {
      "dog": [
        {
          "mass": "<5 kg",
          "amount": 1.0,
          "unit": "kaps.",
          "frequency": "jeden raz dziennie",
          "max": 5.0,
          "maxExclusive": true
        },
        {
          "mass": "5-10 kg",
          "amount": 2.0,
          "unit": "kaps.",
          "frequency": "jeden raz dziennie",
          "min": 5.0,
          "max": 10.0
        },
        {
          "mass": "10-20 kg",
          "amount": 3.0,
          "unit": "kaps.",
          "frequency": "jeden raz dziennie",
          "min": 10.0,
          "max": 20.0
        },
        {
          "mass": ">20 kg",
          "amount": 4.0,
          "unit": "kaps.",
          "frequency": "jeden raz dziennie",
          "min": 20.0,
          "minExclusive": true
        }
      ],
      "cat": [
        {
          "mass": "<5 kg",
          "amount": 1.0,
          "unit": "kaps.",
          "frequency": "jeden raz dziennie",
          "max": 5.0,
          "maxExclusive": true
        },
        {
          "mass": "5-10 kg",
          "amount": 2.0,
          "unit": "kaps.",
          "frequency": "jeden raz dziennie",
          "min": 5.0,
          "max": 10.0
        }
      ]
    }
  },
  {
    "id": "ilovet-ribes-pet-sollievo-cane-e-gatto",
    "name": "Ribes Pet Sollievo cane e gatto · kapsułki miękkie",
    "species": [
      "dog",
      "cat"
    ],
    "kind": "ilovet",
    "library": "supplement",
    "aliases": "Ilovet Illovet NBF Lanes Kapsułki miękkie",
    "substance": "Ilovet · Kapsułki miękkie · Olej z pestek czarnej porzeczki",
    "source": "https://ilovet.pl/skora-i-siersc/ribes-pet-sollievo-cane-e-gatto/",
    "sourceLabel": "Zalecenia Ilovet",
    "checked": "19.10.2026",
    "strength": "Kapsułki miękkie",
    "categoryBadge": "Suplement",
    "indications": "Wsparcie funkcji skóry w przypadku dermatoz i nadmiernego wypadania sierści oraz alergii skórnych.",
    "notes": "Doustnie, bezpośrednio do pyska lub z pokarmem. ",
    "cautions": "",
    "rules": {
      "dog": [
        {
          "mass": "<10 kg",
          "amount": 1.0,
          "unit": "kaps.",
          "frequency": "jeden raz dziennie",
          "max": 10.0,
          "maxExclusive": true
        },
        {
          "mass": "10-25 kg",
          "amount": 2.0,
          "unit": "kaps.",
          "frequency": "jeden raz dziennie",
          "min": 10.0,
          "max": 25.0
        },
        {
          "mass": "26-40 kg",
          "amount": 3.0,
          "unit": "kaps.",
          "frequency": "jeden raz dziennie",
          "min": 26.0,
          "max": 40.0
        },
        {
          "mass": ">40 kg",
          "amount": 4.0,
          "unit": "kaps.",
          "frequency": "jeden raz dziennie",
          "min": 40.0,
          "minExclusive": true
        }
      ],
      "cat": [
        {
          "mass": "Niezależnie od masy",
          "amount": 1.0,
          "unit": "kaps.",
          "frequency": "jeden raz dziennie"
        }
      ]
    }
  },
  {
    "id": "ilovet-ribes-pet-symbio-cane-e-gatto",
    "name": "Ribes Pet Symbio cane e gatto · pasta w saszetkach",
    "species": [
      "dog",
      "cat"
    ],
    "kind": "ilovet",
    "library": "supplement",
    "aliases": "Ilovet Illovet NBF Lanes Pasta smakowa",
    "substance": "Ilovet · Pasta smakowa · Czarna porzeczka, L. Reuteri",
    "source": "https://ilovet.pl/skora-i-siersc/ribes-pet-symbio-cane-e-gatto/",
    "sourceLabel": "Zalecenia Ilovet",
    "checked": "19.10.2026",
    "strength": "Pasta smakowa",
    "categoryBadge": "Suplement",
    "indications": "Wsparcie symbiotyczne i holistyczne w procesie leczenia atopii. Zdrowa skóra, zdrowe jelita.",
    "notes": "Doustnie, bezpośrednio do pyska lub z pokarmem. ",
    "cautions": "",
    "rules": {
      "dog": [
        {
          "mass": "≤25 kg",
          "amount": 1.0,
          "unit": "saszetki",
          "frequency": "jeden raz dziennie",
          "max": 25.0
        },
        {
          "mass": "26-50 kg",
          "amount": 2.0,
          "unit": "saszetki",
          "frequency": "jeden raz dziennie",
          "min": 26.0,
          "max": 50.0
        },
        {
          "mass": ">50 kg",
          "amount": 3.0,
          "unit": "saszetki",
          "frequency": "dwa razy dziennie",
          "min": 50.0,
          "minExclusive": true
        }
      ],
      "cat": [
        {
          "mass": "Niezależnie od masy",
          "amount": 1.0,
          "unit": "saszetki",
          "frequency": "jeden raz dziennie"
        }
      ]
    }
  },
  {
    "id": "ilovet-ribes-pet-ultra-2",
    "name": "Ribes Pet Ultra cane e gatto · emulsja dermatologiczna",
    "species": [
      "dog",
      "cat"
    ],
    "kind": "ilovet",
    "library": "supplement",
    "aliases": "Ilovet Illovet NBF Lanes Emulsja dermatologiczna",
    "substance": "Ilovet · Emulsja dermatologiczna",
    "source": "https://ilovet.pl/skora-i-siersc/ribes-pet-ultra-2/",
    "sourceLabel": "Zalecenia Ilovet",
    "checked": "19.10.2026",
    "strength": "Emulsja dermatologiczna",
    "categoryBadge": "Pielęgnacja",
    "indications": "Pielęgnacja skóry i sierści psów i kotów.",
    "notes": "Emulsję można łatwo rozpylić i nałożyć za pomocą gazy. Stosować raz lub kilka razy dziennie, w zależności od zaleceń lekarza weterynarii. Szybsze rezultaty można uzyskać poprzez uzupełnienie kuracji miejscowej kuracji doustną, podając Ribes Pet (kapsułki) lub Ribes Pet 80 (krople).",
    "cautions": "",
    "rules": {},
    "topical": true,
    "instructions": "Emulsję można łatwo rozpylić i nałożyć za pomocą gazy. Stosować raz lub kilka razy dziennie, w zależności od zaleceń lekarza weterynarii. Szybsze rezultaty można uzyskać poprzez uzupełnienie kuracji miejscowej kuracji doustną, podając Ribes Pet (kapsułki) lub Ribes Pet 80 (krople)."
  },
  {
    "id": "ilovet-ribes-pet-ultra-saszetki",
    "name": "Ribes Pet Ultra cane e gatto · szampon-balsam w saszetkach",
    "species": [
      "dog",
      "cat"
    ],
    "kind": "ilovet",
    "library": "supplement",
    "aliases": "Ilovet Illovet NBF Lanes Szampon-balsam w saszetkach",
    "substance": "Ilovet · Szampon-balsam w saszetkach",
    "source": "https://ilovet.pl/skora-i-siersc/ribes-pet-ultra-saszetki/",
    "sourceLabel": "Zalecenia Ilovet",
    "checked": "19.10.2026",
    "strength": "Szampon-balsam w saszetkach",
    "categoryBadge": "Pielęgnacja",
    "indications": "Pielęgnacja skóry i sierści psów i kotów.",
    "notes": "Częstotliwość stosowania: w razie potrzeby, raz lub kilka razy w tygodniu. 1. Nałożyć na sierść zwilżoną uprzednio letnią wodą. 2. Równomiernie masować całe ciało zwierzęcia. 3. Pozostawić na 5 minut. 4. Obficie spłukać.",
    "cautions": "",
    "rules": {},
    "topical": true,
    "instructions": "Częstotliwość stosowania: w razie potrzeby, raz lub kilka razy w tygodniu. 1. Nałożyć na sierść zwilżoną uprzednio letnią wodą. 2. Równomiernie masować całe ciało zwierzęcia. 3. Pozostawić na 5 minut. 4. Obficie spłukać."
  },
  {
    "id": "ilovet-ribes-pet-ultra",
    "name": "Ribes Pet Ultra cane e gatto · szampon-balsam",
    "species": [
      "dog",
      "cat"
    ],
    "kind": "ilovet",
    "library": "supplement",
    "aliases": "Ilovet Illovet NBF Lanes Szampon-balsam",
    "substance": "Ilovet · Szampon-balsam",
    "source": "https://ilovet.pl/skora-i-siersc/ribes-pet-ultra/",
    "sourceLabel": "Zalecenia Ilovet",
    "checked": "19.10.2026",
    "strength": "Szampon-balsam",
    "categoryBadge": "Pielęgnacja",
    "indications": "Pielęgnacja skóry i sierści psów i kotów.",
    "notes": "Częstotliwość stosowania: w razie potrzeby, raz lub kilka razy w tygodniu. 1. Nałożyć na sierść zwilżoną uprzednio letnią wodą. 2. Równomiernie masować całe ciało zwierzęcia. 3. Pozostawić na 5 minut. 4. Obficie spłukać.",
    "cautions": "",
    "rules": {},
    "topical": true,
    "instructions": "Częstotliwość stosowania: w razie potrzeby, raz lub kilka razy w tygodniu. 1. Nałożyć na sierść zwilżoną uprzednio letnią wodą. 2. Równomiernie masować całe ciało zwierzęcia. 3. Pozostawić na 5 minut. 4. Obficie spłukać."
  },
  {
    "id": "ilovet-artikrill-cane",
    "name": "Artikrill cane · kapsułki miękkie",
    "species": [
      "dog"
    ],
    "kind": "ilovet",
    "library": "supplement",
    "aliases": "Ilovet Illovet NBF Lanes Kapsułki miękkie",
    "substance": "Ilovet · Kapsułki miękkie · chondroityna, glukozamina, olej z kryla",
    "source": "https://ilovet.pl/stawy-i-kosci/artikrill-cane/",
    "sourceLabel": "Zalecenia Ilovet",
    "checked": "19.10.2026",
    "strength": "Kapsułki miękkie",
    "categoryBadge": "Suplement",
    "indications": "Wspiera procesy leczenia choroby zwyrodnieniowej stawów u psów. Polecany również w profilaktyce.",
    "notes": "Doustnie, bezpośrednio do pyska lub z pokarmem. ",
    "cautions": "",
    "rules": {
      "dog": [
        {
          "mass": "≤20 kg",
          "amount": 1.0,
          "unit": "kaps.",
          "frequency": "jeden raz dziennie",
          "max": 20.0
        },
        {
          "mass": "21-45 kg",
          "amount": 2.0,
          "unit": "kaps.",
          "frequency": "jeden raz dziennie",
          "min": 21.0,
          "max": 45.0
        },
        {
          "mass": "46-70 kg",
          "amount": 3.0,
          "unit": "kaps.",
          "frequency": "jeden raz dziennie",
          "min": 46.0,
          "max": 70.0
        },
        {
          "mass": ">70 kg",
          "amount": 4.0,
          "unit": "kaps.",
          "frequency": "jeden raz dziennie",
          "min": 70.0,
          "minExclusive": true
        }
      ]
    }
  },
  {
    "id": "ilovet-artikrill-crestica",
    "name": "Artikrill Crescita cane · tabletki smakowe",
    "species": [
      "dog"
    ],
    "kind": "ilovet",
    "library": "supplement",
    "aliases": "Ilovet Illovet NBF Lanes Tabletki smakowe",
    "substance": "Ilovet · Tabletki smakowe · Arginina, lizyna, chondroityna, kolagen",
    "source": "https://ilovet.pl/stawy-i-kosci/artikrill-crestica/",
    "sourceLabel": "Zalecenia Ilovet",
    "checked": "19.10.2026",
    "strength": "Tabletki smakowe",
    "categoryBadge": "Suplement",
    "indications": "Wspiera zrównoważony proces wzrostu szczeniąt w pełnym zakresie: kości, stawy, mięśnie oraz ścięgna i więzadła.",
    "notes": "Doustnie, bezpośrednio do pyska lub z pokarmem. Stosować w cyklach 60-90 dniowych z przerwą 30-60 dni.",
    "cautions": "",
    "rules": {
      "dog": [
        {
          "mass": "≤10 kg",
          "amount": 0.5,
          "unit": "tabl.",
          "frequency": "jeden raz dziennie",
          "max": 10.0
        },
        {
          "mass": "11-25 kg",
          "amount": 1.0,
          "unit": "tabl.",
          "frequency": "jeden raz dziennie",
          "min": 11.0,
          "max": 25.0
        },
        {
          "mass": "26-50 kg",
          "amount": 1.5,
          "unit": "tabl.",
          "frequency": "jeden raz dziennie",
          "min": 26.0,
          "max": 50.0
        },
        {
          "mass": ">50 kg",
          "amount": 2.0,
          "unit": "tabl.",
          "frequency": "jeden raz dziennie",
          "min": 50.0,
          "minExclusive": true
        }
      ]
    }
  },
  {
    "id": "ilovet-artikrill-dol-cane-e-gatto",
    "name": "Artikrill Dol cane e gatto · pasta smakowa",
    "species": [
      "dog",
      "cat"
    ],
    "kind": "ilovet",
    "library": "supplement",
    "aliases": "Ilovet Illovet NBF Lanes Pasta smakowa",
    "substance": "Ilovet · Pasta smakowa · salicyna, glukozamina, l-karnityna",
    "source": "https://ilovet.pl/stawy-i-kosci/artikrill-dol-cane-e-gatto/",
    "sourceLabel": "Zalecenia Ilovet",
    "checked": "19.10.2026",
    "strength": "Pasta smakowa",
    "categoryBadge": "Suplement",
    "indications": "Wsparcie organizmu psa i kota w walce ze stanem zapalnym i bólem w chorobie zwyrodnieniowej stawów.",
    "notes": "Doustnie, bezpośrednio do pyska lub z pokarmem. 1,2 g odpowiada 1 kresce na tłoku = 1ml",
    "cautions": "",
    "rules": {
      "dog": [
        {
          "mass": "na każde 10 kg masy ciała",
          "amount": 1.2,
          "unit": "g pasty",
          "frequency": "jeden raz dziennie",
          "perKg": 10.0
        }
      ],
      "cat": [
        {
          "mass": "Niezależnie od masy",
          "amount": 1.2,
          "unit": "g pasty",
          "frequency": "jeden raz dziennie"
        }
      ]
    }
  },
  {
    "id": "ilovet-artikrill-dol-cane",
    "name": "Artikrill Dol cane · kapsułki miękkie",
    "species": [
      "dog"
    ],
    "kind": "ilovet",
    "library": "supplement",
    "aliases": "Ilovet Illovet NBF Lanes Kapsułki miękkie",
    "substance": "Ilovet · Kapsułki miękkie · Chondroityna, glukozamina, Salicyna",
    "source": "https://ilovet.pl/stawy-i-kosci/artikrill-dol-cane/",
    "sourceLabel": "Zalecenia Ilovet",
    "checked": "19.10.2026",
    "strength": "Kapsułki miękkie",
    "categoryBadge": "Suplement",
    "indications": "Wspiera organizm psa w walce ze stanem zapalnym i bólem w przypadku choroby zwyrodnieniowej stawów.",
    "notes": "Doustnie, bezpośrednio do pyska lub z pokarmem. Zaleca się stosowanie zbilansowanej diety.",
    "cautions": "",
    "rules": {
      "dog": [
        {
          "mass": "≤25 kg",
          "amount": 1.0,
          "unit": "kaps.",
          "frequency": "jeden raz dziennie",
          "max": 25.0
        },
        {
          "mass": "26-60 kg",
          "amount": 2.0,
          "unit": "kaps.",
          "frequency": "jeden raz dziennie",
          "min": 26.0,
          "max": 60.0
        },
        {
          "mass": ">60 kg",
          "amount": 3.0,
          "unit": "kaps.",
          "frequency": "jeden raz dziennie",
          "min": 60.0,
          "minExclusive": true
        }
      ]
    }
  },
  {
    "id": "ilovet-artikrill-gatto",
    "name": "Artikrill gatto · kapsułki miękkie twist-off",
    "species": [
      "cat"
    ],
    "kind": "ilovet",
    "library": "supplement",
    "aliases": "Ilovet Illovet NBF Lanes Kapsułki miękkie twist-off",
    "substance": "Ilovet · Kapsułki miękkie twist-off · Glukozamina, olej z kryla, chondroityna",
    "source": "https://ilovet.pl/stawy-i-kosci/artikrill-gatto/",
    "sourceLabel": "Zalecenia Ilovet",
    "checked": "19.10.2026",
    "strength": "Kapsułki miękkie twist-off",
    "categoryBadge": "Suplement",
    "indications": "Wspiera proces leczenia choroby zwyrodnieniowej stawów u kotów. Polecany również w profilaktyce.",
    "notes": "Doustnie, bezpośrednio do pyska lub z pokarmem. ",
    "cautions": "",
    "rules": {
      "cat": [
        {
          "mass": "≤6 kg",
          "amount": 1.0,
          "unit": "kaps.",
          "frequency": "jeden raz dziennie",
          "max": 6.0
        },
        {
          "mass": ">6 kg",
          "amount": 2.0,
          "unit": "kaps.",
          "frequency": "jeden raz dziennie",
          "min": 6.0,
          "minExclusive": true
        }
      ]
    }
  },
  {
    "id": "ilovet-coractiv-cane-e-gatto",
    "name": "Coractiv cane e gatto · kapsułki miękkie",
    "species": [
      "dog",
      "cat"
    ],
    "kind": "ilovet",
    "library": "supplement",
    "aliases": "Ilovet Illovet NBF Lanes Kapsułki miękkie",
    "substance": "Ilovet · Kapsułki miękkie · omega-3, witamina E",
    "source": "https://ilovet.pl/uklad-krazenia/coractiv-cane-e-gatto/",
    "sourceLabel": "Zalecenia Ilovet",
    "checked": "19.10.2026",
    "strength": "Kapsułki miękkie",
    "categoryBadge": "Suplement",
    "indications": "Wsparcie prawidłowych czynności serca dzięki wysokiej zawartości kwasów tłuszczowych omega-3.",
    "notes": "Doustnie, bezpośrednio do pyska lub z pokarmem. ",
    "cautions": "",
    "rules": {
      "dog": [
        {
          "mass": "≤5 kg",
          "amount": 1.0,
          "unit": "kaps.",
          "frequency": "jeden raz dziennie",
          "max": 5.0
        },
        {
          "mass": "6-10 kg",
          "amount": 2.0,
          "unit": "kaps.",
          "frequency": "jeden raz dziennie",
          "min": 6.0,
          "max": 10.0
        },
        {
          "mass": "11-20 kg",
          "amount": 3.0,
          "unit": "kaps.",
          "frequency": "jeden raz dziennie",
          "min": 11.0,
          "max": 20.0
        },
        {
          "mass": ">20 kg",
          "amount": 4.0,
          "unit": "kaps.",
          "frequency": "jeden raz dziennie",
          "min": 20.0,
          "minExclusive": true
        }
      ],
      "cat": [
        {
          "mass": "Niezależnie od masy",
          "amount": 1.0,
          "unit": "kaps.",
          "frequency": "jeden raz dziennie"
        }
      ]
    }
  },
  {
    "id": "ilovet-karenal-pet-cane-e-gatto",
    "name": "Karenal Pet cane e gatto · pasta smakowa",
    "species": [
      "dog",
      "cat"
    ],
    "kind": "ilovet",
    "library": "supplement",
    "aliases": "Ilovet Illovet NBF Lanes Pasta smakowa",
    "substance": "Ilovet · Pasta smakowa · Cytrynian potasu",
    "source": "https://ilovet.pl/uklad-moczowy/karenal-pet-cane-e-gatto/",
    "sourceLabel": "Zalecenia Ilovet",
    "checked": "19.10.2026",
    "strength": "Pasta smakowa",
    "categoryBadge": "Suplement",
    "indications": "Wsparcie w uzupełnieniu niedoborów potasu. Jedyny na rynku weterynaryjnym preparat, w formie pasty.",
    "notes": "Doustnie, bezpośrednio do pyska lub z pokarmem. 1,2 g odpowiada 1 kresce na tłoku = 1ml",
    "cautions": "",
    "rules": {
      "dog": [
        {
          "mass": "na każde 10 kg masy ciała",
          "amount": 1.2,
          "unit": "g pasty",
          "frequency": "jeden raz dziennie",
          "perKg": 10.0
        }
      ],
      "cat": [
        {
          "mass": "Niezależnie od masy",
          "amount": 1.2,
          "unit": "g pasty",
          "frequency": "jeden raz dziennie"
        }
      ]
    }
  },
  {
    "id": "ilovet-nefrokrill",
    "name": "Nefrokrill · kapsułki miękkie twist-off",
    "species": [
      "dog",
      "cat"
    ],
    "kind": "ilovet",
    "library": "supplement",
    "aliases": "Ilovet Illovet NBF Lanes Kapsułki miękkie twist-off",
    "substance": "Ilovet · Kapsułki miękkie twist-off · Węglan lantanu, olej z kryla",
    "source": "https://ilovet.pl/uklad-moczowy/nefrokrill/",
    "sourceLabel": "Zalecenia Ilovet",
    "checked": "19.10.2026",
    "strength": "Kapsułki miękkie twist-off",
    "categoryBadge": "Suplement",
    "indications": "Wsparcie pierwszego na rynku weterynaryjnym preparatu z węglanem lantanu, który wspiera funkcje nerek przy ich przewlekłej niewydolności.",
    "notes": "Doustnie, bezpośrednio do pyska lub z pokarmem. Nie przekraczać 3 kapsułek dziennie. Jeśli Nefrokrill jest zalecany do użycia w razie czasowej niewydolności nerek, zalecany okres stosowania powinien wynosić dwa do czterech tygodni.",
    "cautions": "",
    "rules": {
      "dog": [
        {
          "mass": "na każde 10 kg masy ciała",
          "amount": 1.0,
          "unit": "kaps.",
          "frequency": "jeden raz dziennie",
          "perKg": 10.0
        }
      ],
      "cat": [
        {
          "mass": "Niezależnie od masy",
          "amount": 1.0,
          "unit": "kaps.",
          "frequency": "jeden raz dziennie"
        }
      ]
    }
  },
  {
    "id": "ilovet-prostapet-cane",
    "name": "Prostapet cane · żel smakowy",
    "species": [
      "dog"
    ],
    "kind": "ilovet",
    "library": "supplement",
    "aliases": "Ilovet Illovet NBF Lanes Żel smakowy",
    "substance": "Ilovet · Żel smakowy · Kwas foliowy, omega-3, MelofeeD",
    "source": "https://ilovet.pl/uklad-moczowy/prostapet-cane/",
    "sourceLabel": "Zalecenia Ilovet",
    "checked": "19.10.2026",
    "strength": "Żel smakowy",
    "categoryBadge": "Suplement",
    "indications": "Wsparcie w poprawie jakości nasienia oraz ochrony i poprawie funkcjonowania gruczołu krokowego u psów.",
    "notes": "Doustnie, bezpośrednio do pyska lub z pokarmem. ",
    "cautions": "",
    "rules": {
      "dog": [
        {
          "mass": "<25 kg",
          "amount": 1.0,
          "unit": "saszetki",
          "frequency": "jeden raz dziennie",
          "max": 25.0,
          "maxExclusive": true
        },
        {
          "mass": ">26 kg",
          "amount": 2.0,
          "unit": "saszetki",
          "frequency": "jeden raz dziennie",
          "min": 26.0,
          "minExclusive": true
        }
      ]
    }
  },
  {
    "id": "ilovet-urikrill-cane-e-gatto",
    "name": "Urikrill cane e gatto · pasta smakowa",
    "species": [
      "dog",
      "cat"
    ],
    "kind": "ilovet",
    "library": "supplement",
    "aliases": "Ilovet Illovet NBF Lanes Pasta smakowa",
    "substance": "Ilovet · Pasta smakowa · Żurawina, FOS, mannoza",
    "source": "https://ilovet.pl/uklad-moczowy/urikrill-cane-e-gatto/",
    "sourceLabel": "Zalecenia Ilovet",
    "checked": "19.10.2026",
    "strength": "Pasta smakowa",
    "categoryBadge": "Suplement",
    "indications": "Wsparcie prawidłowego funkcjonowania dolnych dróg moczowych u kotów i psów małych ras.",
    "notes": "Doustnie, bezpośrednio do pyska lub z pokarmem. (do 25 kg) 1,2 g odpowiada 1 kresce na tłoku = 1ml",
    "cautions": "",
    "rules": {
      "dog": [
        {
          "mass": "na każde 10 kg masy ciała",
          "amount": 1.2,
          "unit": "g pasty",
          "frequency": "jeden raz dziennie",
          "perKg": 10.0,
          "max": 25
        }
      ],
      "cat": [
        {
          "mass": "Niezależnie od masy",
          "amount": 1.2,
          "unit": "g pasty",
          "frequency": "jeden raz dziennie"
        }
      ]
    }
  },
  {
    "id": "ilovet-urikrill-cane-zel-smakowy",
    "name": "Urikrill cane · żel smakowy",
    "species": [
      "dog"
    ],
    "kind": "ilovet",
    "library": "supplement",
    "aliases": "Ilovet Illovet NBF Lanes Żel smakowy",
    "substance": "Ilovet · Żel smakowy · mannoza, lespedeza, mannoza, lespedeza, ortosyfon",
    "source": "https://ilovet.pl/uklad-moczowy/urikrill-cane-zel-smakowy/",
    "sourceLabel": "Zalecenia Ilovet",
    "checked": "19.10.2026",
    "strength": "Żel smakowy",
    "categoryBadge": "Suplement",
    "indications": "Wsparcie właściwego funkcjonowania dolnych dróg moczowych u psów.",
    "notes": "Doustnie, bezpośrednio do pyska lub z pokarmem. ",
    "cautions": "",
    "rules": {
      "dog": [
        {
          "mass": "26-50 kg",
          "amount": 1.0,
          "unit": "saszetki",
          "frequency": "jeden raz dziennie",
          "min": 26.0,
          "max": 50.0
        },
        {
          "mass": ">50 kg",
          "amount": 2.0,
          "unit": "saszetki",
          "frequency": "jeden raz dziennie",
          "min": 50.0,
          "minExclusive": true
        }
      ]
    }
  },
  {
    "id": "ilovet-neurogen-pet-cane-e-gatto",
    "name": "Neurogen Pet cane e gatto · kapsułki miękkie",
    "species": [
      "dog",
      "cat"
    ],
    "kind": "ilovet",
    "library": "supplement",
    "aliases": "Ilovet Illovet NBF Lanes Kapsułki miękkie",
    "substance": "Ilovet · Kapsułki miękkie · Cholina, urydyna, resweratrol",
    "source": "https://ilovet.pl/uklad-nerwowy/neurogen-pet-cane-e-gatto/",
    "sourceLabel": "Zalecenia Ilovet",
    "checked": "19.10.2026",
    "strength": "Kapsułki miękkie",
    "categoryBadge": "Suplement",
    "indications": "Wspomaga funkcje mózgu u psów i kotów w każdym wieku. Zawiera resweratrol, urydynę, cholinę oraz kwas DHA.",
    "notes": "Doustnie, bezpośrednio do pyska lub z pokarmem. ",
    "cautions": "",
    "rules": {
      "dog": [
        {
          "mass": "≤10 kg",
          "amount": 1.0,
          "unit": "kaps.",
          "frequency": "jeden raz dziennie",
          "max": 10.0
        },
        {
          "mass": "11-25 kg",
          "amount": 2.0,
          "unit": "kaps.",
          "frequency": "jeden raz dziennie",
          "min": 11.0,
          "max": 25.0
        },
        {
          "mass": ">25 kg",
          "amount": 3.0,
          "unit": "kaps.",
          "frequency": "jeden raz dziennie",
          "min": 25.0,
          "minExclusive": true
        }
      ],
      "cat": [
        {
          "mass": "Niezależnie od masy",
          "amount": 1.0,
          "unit": "kaps.",
          "frequency": "jeden raz dziennie"
        }
      ]
    }
  },
  {
    "id": "ilovet-neurogen-pet-ultra-cane-e-gatto",
    "name": "Neurogen Pet Ultra cane e gatto · tabletki smakowe",
    "species": [
      "dog",
      "cat"
    ],
    "kind": "ilovet",
    "library": "supplement",
    "aliases": "Ilovet Illovet NBF Lanes Tabletki smakowe",
    "substance": "Ilovet · Tabletki smakowe · Polifenole, cholina, urydyna",
    "source": "https://ilovet.pl/uklad-nerwowy/neurogen-pet-ultra-cane-e-gatto/",
    "sourceLabel": "Zalecenia Ilovet",
    "checked": "19.10.2026",
    "strength": "Tabletki smakowe",
    "categoryBadge": "Suplement",
    "indications": "Wsparcie mózgu starszych psów i kotów. Zawiera polifenole, kwasy Omega 3, urydynę, cholinę oraz kurkumę.",
    "notes": "Doustnie, bezpośrednio do pyska lub z pokarmem. ",
    "cautions": "",
    "rules": {
      "dog": [
        {
          "mass": "na każde 5 kg",
          "amount": 0.5,
          "unit": "tabl.",
          "frequency": "jeden raz dziennie",
          "perKg": 5.0
        }
      ],
      "cat": [
        {
          "mass": "na każde 5 kg",
          "amount": 0.5,
          "unit": "tabl.",
          "frequency": "jeden raz dziennie",
          "perKg": 5.0
        }
      ]
    }
  },
  {
    "id": "ilovet-perognidol-forte-cane-e-gatto",
    "name": "Perognidol Forte cane e gatto · kapsułki miękkie",
    "species": [
      "dog",
      "cat"
    ],
    "kind": "ilovet",
    "library": "supplement",
    "aliases": "Ilovet Illovet NBF Lanes Kapsułki miękkie",
    "substance": "Ilovet · Kapsułki miękkie · beta-kariofylen, mirra, MCT",
    "source": "https://ilovet.pl/uklad-nerwowy/perognidol-forte-cane-e-gatto/",
    "sourceLabel": "Zalecenia Ilovet",
    "checked": "19.10.2026",
    "strength": "Kapsułki miękkie",
    "categoryBadge": "Suplement",
    "indications": "Wsparcie w łagodzeniu odczuwania bólu oraz wspomaganie funkcjonowania układu endokannabinoidowego. Zawiera olej konopny, kwasy MCT oraz omega-3.",
    "notes": "Doustnie, bezpośrednio do pyska lub z pokarmem. ",
    "cautions": "",
    "rules": {
      "dog": [
        {
          "mass": "<20 kg",
          "amount": 1.0,
          "unit": "kaps.",
          "frequency": "jeden raz dziennie",
          "max": 20.0,
          "maxExclusive": true
        },
        {
          "mass": "21-35 kg",
          "amount": 2.0,
          "unit": "kaps.",
          "frequency": "jeden raz dziennie",
          "min": 21.0,
          "max": 35.0
        },
        {
          "mass": "36-50 kg",
          "amount": 3.0,
          "unit": "kaps.",
          "frequency": "jeden raz dziennie",
          "min": 36.0,
          "max": 50.0
        },
        {
          "mass": ">50 kg",
          "amount": 4.0,
          "unit": "kaps.",
          "frequency": "jeden raz dziennie",
          "min": 50.0,
          "minExclusive": true
        }
      ],
      "cat": [
        {
          "mass": "Niezależnie od masy",
          "amount": 1.0,
          "unit": "kaps.",
          "frequency": "jeden raz dziennie"
        }
      ]
    }
  },
  {
    "id": "ilovet-perognidol-forte-krople",
    "name": "Perognidol Forte cane e gatto · krople",
    "species": [
      "dog",
      "cat"
    ],
    "kind": "ilovet",
    "library": "supplement",
    "aliases": "Ilovet Illovet NBF Lanes Krople",
    "substance": "Ilovet · Krople · beta-kariofylen, mirra, MCT",
    "source": "https://ilovet.pl/uklad-nerwowy/perognidol-forte-krople/",
    "sourceLabel": "Zalecenia Ilovet",
    "checked": "19.10.2026",
    "strength": "Krople",
    "categoryBadge": "Suplement",
    "indications": "Wsparcie w łagodzeniu odczuwania bólu oraz wspomaganie funkcjonowania układu endokannabinoidowego. Zawiera olej konopny, kwasy MCT oraz omega-3.",
    "notes": "Doustnie, bezpośrednio do pyska lub z pokarmem. Zakraplacz został zaprojektowany, aby wydobyć zawartość do ostatniej kropli, a także dla bezpiecznego podania bezpośrednio do pyska. Po otwarciu, przechowywać w lodówce.",
    "cautions": "",
    "rules": {
      "dog": [
        {
          "mass": "<10 kg",
          "amount": 2.0,
          "unit": "kropli",
          "frequency": "dwa razy dziennie",
          "max": 10.0,
          "maxExclusive": true
        },
        {
          "mass": "11-20 kg",
          "amount": 5.0,
          "unit": "kropli",
          "frequency": "dwa razy dziennie",
          "min": 11.0,
          "max": 20.0
        },
        {
          "mass": "21-35 kg",
          "amount": 10.0,
          "unit": "kropli",
          "frequency": "dwa razy dziennie",
          "min": 21.0,
          "max": 35.0
        },
        {
          "mass": "36-50 kg",
          "amount": 15.0,
          "unit": "kropli",
          "frequency": "dwa razy dziennie",
          "min": 36.0,
          "max": 50.0
        },
        {
          "mass": ">50 kg",
          "amount": 20.0,
          "unit": "kropli",
          "frequency": "dwa razy dziennie",
          "min": 50.0,
          "minExclusive": true
        }
      ],
      "cat": [
        {
          "mass": "5-10 kg",
          "amount": 2.0,
          "unit": "kropli",
          "frequency": "dwa razy dziennie",
          "min": 5.0,
          "max": 10.0
        }
      ]
    }
  },
  {
    "id": "ilovet-relaxigen-cane",
    "name": "Relaxigen Pet cane · tabletki smakowe",
    "species": [
      "dog"
    ],
    "kind": "ilovet",
    "library": "supplement",
    "aliases": "Ilovet Illovet NBF Lanes Tabletki smakowe",
    "substance": "Ilovet · Tabletki smakowe · Teanina, 5-HTP, L. Reuteri",
    "source": "https://ilovet.pl/uklad-nerwowy/relaxigen-cane/",
    "sourceLabel": "Zalecenia Ilovet",
    "checked": "19.10.2026",
    "strength": "Tabletki smakowe",
    "categoryBadge": "Suplement",
    "indications": "Wsparcie organizmu psa w walce ze stresem, niepokojem i strachem. Jedyny z 5-hydroksytryptofanem, L-teaniną oraz sprzężonym kwasem linolowym.",
    "notes": "Doustnie, bezpośrednio do pyska lub z pokarmem. ",
    "cautions": "",
    "rules": {
      "dog": [
        {
          "mass": "26-35 kg",
          "amount": 0.5,
          "unit": "tabl.",
          "frequency": "jeden raz dziennie",
          "min": 26.0,
          "max": 35.0
        },
        {
          "mass": ">35 kg",
          "amount": 1.0,
          "unit": "tabl.",
          "frequency": "jeden raz dziennie",
          "min": 35.0,
          "minExclusive": true
        }
      ]
    }
  },
  {
    "id": "ilovet-relaxigen-mini-cane-e-gatto",
    "name": "Relaxigen Pet Mini cane e gatto · tabletki smakowe",
    "species": [
      "dog",
      "cat"
    ],
    "kind": "ilovet",
    "library": "supplement",
    "aliases": "Ilovet Illovet NBF Lanes Tabletki smakowe",
    "substance": "Ilovet · Tabletki smakowe · Teanina, 5-HTP L. Reuteri",
    "source": "https://ilovet.pl/uklad-nerwowy/relaxigen-mini-cane-e-gatto/",
    "sourceLabel": "Zalecenia Ilovet",
    "checked": "19.10.2026",
    "strength": "Tabletki smakowe",
    "categoryBadge": "Suplement",
    "indications": "Wsparcie organizmu kota oraz małego i średniego psa w walce ze stresem, niepokojem i strachem. Jedyny z 5-hydroksytryptofanem, L-teaniną oraz sprzężonym kwasem linolowym.",
    "notes": "Doustnie, bezpośrednio do pyska lub z pokarmem. ",
    "cautions": "",
    "rules": {
      "dog": [
        {
          "mass": "≤10 kg",
          "amount": 1.0,
          "unit": "tabl.",
          "frequency": "jeden raz dziennie",
          "max": 10.0
        },
        {
          "mass": "11–25 kg",
          "amount": 2.0,
          "unit": "tabl.",
          "frequency": "jeden raz dziennie",
          "min": 11.0,
          "max": 25.0
        }
      ],
      "cat": [
        {
          "mass": "Niezależnie od masy",
          "amount": 1.0,
          "unit": "tabl.",
          "frequency": "jeden raz dziennie"
        }
      ]
    }
  },
  {
    "id": "ilovet-carevit-dog-cane",
    "name": "Carevit Dog cane · tabletki",
    "species": [
      "dog"
    ],
    "kind": "ilovet",
    "library": "supplement",
    "aliases": "Ilovet Illovet NBF Lanes Tabletki",
    "substance": "Ilovet · Tabletki · Witaminy, minerały",
    "source": "https://ilovet.pl/uklad-odpornosciowy/carevit-dog-cane/",
    "sourceLabel": "Zalecenia Ilovet",
    "checked": "19.10.2026",
    "strength": "Tabletki",
    "categoryBadge": "Suplement",
    "indications": "Witaminy i minerały w wysokiej dawce dla psów w każdym wieku.",
    "notes": "Doustnie, bezpośrednio do pyska lub z pokarmem. Lekarz weterynarii może zalecić inne dawkowanie. Tabletki są podzielne.",
    "cautions": "",
    "rules": {
      "dog": [
        {
          "mass": "≤10 kg",
          "amount": 1.0,
          "unit": "tabl.",
          "frequency": "jeden raz dziennie",
          "max": 10.0
        },
        {
          "mass": "11-25 kg",
          "amount": 2.0,
          "unit": "tabl.",
          "frequency": "jeden raz dziennie",
          "min": 11.0,
          "max": 25.0
        },
        {
          "mass": "26-40 kg",
          "amount": 3.0,
          "unit": "tabl.",
          "frequency": "jeden raz dziennie",
          "min": 26.0,
          "max": 40.0
        },
        {
          "mass": ">40 kg",
          "amount": 4.0,
          "unit": "tabl.",
          "frequency": "jeden raz dziennie",
          "min": 40.0,
          "minExclusive": true
        }
      ]
    }
  },
  {
    "id": "ilovet-carevit-ultra-cane",
    "name": "Carevit Ultra cane · proszek smakowy",
    "species": [
      "dog"
    ],
    "kind": "ilovet",
    "library": "supplement",
    "aliases": "Ilovet Illovet NBF Lanes Proszek smakowy",
    "substance": "Ilovet · Proszek smakowy · pierwiastki śladowe, witaminy, minerały",
    "source": "https://ilovet.pl/uklad-odpornosciowy/carevit-ultra-cane/",
    "sourceLabel": "Zalecenia Ilovet",
    "checked": "19.10.2026",
    "strength": "Proszek smakowy",
    "categoryBadge": "Suplement",
    "indications": "Źródło minerałów, witamin i pierwiastków śladowych dla psów dorosłych i starszych. Polecane jako uzupełnienie diet domowych, eliminacyjnych, B.A.R.F oraz mieszanych.",
    "notes": "Doustnie, bezpośrednio do pyska lub z pokarmem. ",
    "cautions": "",
    "rules": {
      "dog": [
        {
          "mass": "na każde 5 kg masy ciała",
          "amount": 0.5,
          "unit": "saszetki",
          "frequency": "jeden raz dziennie",
          "perKg": 5.0
        }
      ]
    }
  },
  {
    "id": "ilovet-drenalase-pet-cane",
    "name": "Drenalase Pet cane · tabletki",
    "species": [
      "dog"
    ],
    "kind": "ilovet",
    "library": "supplement",
    "aliases": "Ilovet Illovet NBF Lanes Tabletki",
    "substance": "Ilovet · Tabletki · Bromelina, escyna, werbaskozyd",
    "source": "https://ilovet.pl/uklad-odpornosciowy/drenalase-pet-cane/",
    "sourceLabel": "Zalecenia Ilovet",
    "checked": "19.10.2026",
    "strength": "Tabletki",
    "categoryBadge": "Suplement",
    "indications": "Wsparcie dla prawidłowego drenażu płynów tkankowych u psów.",
    "notes": "Doustnie, bezpośrednio do pyska lub z pokarmem. Tabletki nie należy dzielić ani kruszyć.",
    "cautions": "",
    "rules": {
      "dog": [
        {
          "mass": "11-25 kg",
          "amount": 1.0,
          "unit": "tabl.",
          "frequency": "jeden raz dziennie",
          "min": 11.0,
          "max": 25.0
        },
        {
          "mass": "26-35 kg",
          "amount": 2.0,
          "unit": "tabl.",
          "frequency": "jeden raz dziennie",
          "min": 26.0,
          "max": 35.0
        },
        {
          "mass": ">36 kg",
          "amount": 3.0,
          "unit": "tabl.",
          "frequency": "jeden raz dziennie",
          "min": 36.0,
          "minExclusive": true
        }
      ]
    }
  },
  {
    "id": "ilovet-drenalase-pet-mini-cane-e-gatto",
    "name": "Drenalase Pet Mini cane e gatto · tabletki",
    "species": [
      "dog",
      "cat"
    ],
    "kind": "ilovet",
    "library": "supplement",
    "aliases": "Ilovet Illovet NBF Lanes Tabletki",
    "substance": "Ilovet · Tabletki · Bromelina, escyna, werbaskozyd",
    "source": "https://ilovet.pl/uklad-odpornosciowy/drenalase-pet-mini-cane-e-gatto/",
    "sourceLabel": "Zalecenia Ilovet",
    "checked": "19.10.2026",
    "strength": "Tabletki",
    "categoryBadge": "Suplement",
    "indications": "Wsparcie dla prawidłowego drenażu płynów tkankowych u psów i kotów.",
    "notes": "Doustnie, bezpośrednio do pyska lub z pokarmem. Tabletki nie należy dzielić ani kruszyć.",
    "cautions": "",
    "rules": {
      "dog": [
        {
          "mass": "≤ 10 kg",
          "amount": 1.0,
          "unit": "tabl.",
          "frequency": "jeden raz dziennie",
          "max": 10.0
        },
        {
          "mass": "11-25 kg",
          "amount": 2.0,
          "unit": "tabl.",
          "frequency": "jeden raz dziennie",
          "min": 11.0,
          "max": 25.0
        }
      ],
      "cat": [
        {
          "mass": "Niezależnie od masy",
          "amount": 1.0,
          "unit": "tabl.",
          "frequency": "jeden raz dziennie"
        }
      ]
    }
  },
  {
    "id": "ilovet-profluid-pet-cane-e-gatto",
    "name": "Profluid Pet cane e gatto · syrop smakowy",
    "species": [
      "dog",
      "cat"
    ],
    "kind": "ilovet",
    "library": "supplement",
    "aliases": "Ilovet Illovet NBF Lanes Syrop smakowy",
    "substance": "Ilovet · Syrop smakowy · Miód manuka, cynk, arabinogalaktan",
    "source": "https://ilovet.pl/uklad-odpornosciowy/profluid-pet-cane-e-gatto/",
    "sourceLabel": "Zalecenia Ilovet",
    "checked": "19.10.2026",
    "strength": "Syrop smakowy",
    "categoryBadge": "Suplement",
    "indications": "Wsparcie prawidłowego funkcjonowania dróg oddechowych.",
    "notes": "Doustnie, bezpośrednio do pyska lub z pokarmem. Zalecane codzienne stosowanie przez co najmniej 15 dni.",
    "cautions": "",
    "rules": {
      "dog": [
        {
          "mass": "≤15 kg",
          "amount": 2.0,
          "unit": "ml",
          "frequency": "jeden raz dziennie",
          "max": 15.0
        },
        {
          "mass": "16-30 kg",
          "amount": 3.0,
          "unit": "ml",
          "frequency": "jeden raz dziennie",
          "min": 16.0,
          "max": 30.0
        },
        {
          "mass": "31-50 kg",
          "amount": 4.0,
          "unit": "ml",
          "frequency": "jeden raz dziennie",
          "min": 31.0,
          "max": 50.0
        },
        {
          "mass": ">50 kg",
          "amount": 5.0,
          "unit": "ml",
          "frequency": "jeden raz dziennie",
          "min": 50.0,
          "minExclusive": true
        }
      ],
      "cat": [
        {
          "mass": "Niezależnie od masy",
          "amount": 2.0,
          "unit": "ml",
          "frequency": "jeden raz dziennie"
        }
      ]
    }
  },
  {
    "id": "ilovet-progeny-pet-cane-e-gatto",
    "name": "Progeny Pet cane e gatto · żel smakowy",
    "species": [
      "dog",
      "cat"
    ],
    "kind": "ilovet",
    "library": "supplement",
    "aliases": "Ilovet Illovet NBF Lanes Żel smakowy",
    "substance": "Ilovet · Żel smakowy · Kwas foliowy, witaminy z grupy B, L. Reuteri",
    "source": "https://ilovet.pl/uklad-odpornosciowy/progeny-pet-cane-e-gatto/",
    "sourceLabel": "Zalecenia Ilovet",
    "checked": "19.10.2026",
    "strength": "Żel smakowy",
    "categoryBadge": "Suplement",
    "indications": "Wsparcie okresu rozrodczego u psów i kotów.",
    "notes": "Doustnie, bezpośrednio do pyska lub z pokarmem. Rekomendowany okres podania: Samice: od ostatniej fazy ciąży do potwierdzenia kolejnej ciąży. Samce: w okresach aktywności reprodukcyjnej.",
    "cautions": "",
    "rules": {
      "dog": [
        {
          "mass": "na każde 10 kg masy ciała",
          "amount": 1.0,
          "unit": "saszetki",
          "frequency": "jeden raz dziennie",
          "perKg": 10.0
        }
      ],
      "cat": [
        {
          "mass": "Niezależnie od masy",
          "amount": 1.0,
          "unit": "saszetki",
          "frequency": "jeden raz dziennie"
        }
      ]
    }
  },
  {
    "id": "ilovet-selen-pet-cane-e-gatto",
    "name": "Selen Pet cane e gatto · kapsułki miękkie",
    "species": [
      "dog",
      "cat"
    ],
    "kind": "ilovet",
    "library": "supplement",
    "aliases": "Ilovet Illovet NBF Lanes Kapsułki miękkie",
    "substance": "Ilovet · Kapsułki miękkie · Omega-3, selen",
    "source": "https://ilovet.pl/uklad-odpornosciowy/selen-pet-cane-e-gatto/",
    "sourceLabel": "Zalecenia Ilovet",
    "checked": "19.10.2026",
    "strength": "Kapsułki miękkie",
    "categoryBadge": "Suplement",
    "indications": "Wsparcie w przeciwdziałaniu przypadłościom i chorobom starszych psów i kotów.",
    "notes": "Doustnie, bezpośrednio do pyska lub z pokarmem. ",
    "cautions": "",
    "rules": {
      "dog": [
        {
          "mass": "≤10 kg",
          "amount": 1.0,
          "unit": "kaps.",
          "frequency": "jeden raz dziennie",
          "max": 10.0
        },
        {
          "mass": "11-25 kg",
          "amount": 2.0,
          "unit": "kaps.",
          "frequency": "jeden raz dziennie",
          "min": 11.0,
          "max": 25.0
        },
        {
          "mass": ">25 kg",
          "amount": 3.0,
          "unit": "kaps.",
          "frequency": "jeden raz dziennie",
          "min": 25.0,
          "minExclusive": true
        }
      ],
      "cat": [
        {
          "mass": "Niezależnie od masy",
          "amount": 1.0,
          "unit": "kaps.",
          "frequency": "jeden raz dziennie"
        }
      ]
    }
  },
  {
    "id": "ilovet-zincogen-pet-immuno-cane-e-gatto",
    "name": "Zincogen Pet Immuno cane e gatto · pasta smakowa",
    "species": [
      "dog",
      "cat"
    ],
    "kind": "ilovet",
    "library": "supplement",
    "aliases": "Ilovet Illovet NBF Lanes Pasta smakowa",
    "substance": "Ilovet · Pasta smakowa · Lizyna, cynk, Beta-glukan",
    "source": "https://ilovet.pl/uklad-odpornosciowy/zincogen-pet-immuno-cane-e-gatto/",
    "sourceLabel": "Zalecenia Ilovet",
    "checked": "19.10.2026",
    "strength": "Pasta smakowa",
    "categoryBadge": "Suplement",
    "indications": "Wsparcie utrzymania prawidłowych funkcji układu odpornościowego u psów i kotów.",
    "notes": "Doustnie, bezpośrednio do pyska lub z pokarmem. ",
    "cautions": "",
    "rules": {
      "dog": [
        {
          "mass": "≤ 20 kg",
          "amount": 1.0,
          "unit": "saszetki",
          "frequency": "jeden raz dziennie",
          "max": 20.0
        },
        {
          "mass": "21-50 kg",
          "amount": 2.0,
          "unit": "saszetki",
          "frequency": "jeden raz dziennie",
          "min": 21.0,
          "max": 50.0
        },
        {
          "mass": ">50 kg",
          "amount": 3.0,
          "unit": "saszetki",
          "frequency": "jeden raz dziennie",
          "min": 50.0,
          "minExclusive": true
        }
      ],
      "cat": [
        {
          "mass": "Niezależnie od masy",
          "amount": 1.0,
          "unit": "saszetki",
          "frequency": "jeden raz dziennie"
        }
      ]
    }
  },
  {
    "id": "ilovet-zincogen-pet-immuno-cane",
    "name": "Zincogen Pet Immuno cane · tabletki smakowe",
    "species": [
      "dog"
    ],
    "kind": "ilovet",
    "library": "supplement",
    "aliases": "Ilovet Illovet NBF Lanes Tabletki smakowe",
    "substance": "Ilovet · Tabletki smakowe · MOS, cynk, Beta-glukan",
    "source": "https://ilovet.pl/uklad-odpornosciowy/zincogen-pet-immuno-cane/",
    "sourceLabel": "Zalecenia Ilovet",
    "checked": "19.10.2026",
    "strength": "Tabletki smakowe",
    "categoryBadge": "Suplement",
    "indications": "Wsparcie utrzymania prawidłowych funkcji układu odpornościowego u psów.",
    "notes": "Doustnie, bezpośrednio do pyska lub z pokarmem. ",
    "cautions": "",
    "rules": {
      "dog": [
        {
          "mass": "na każde 10 kg masy ciała",
          "amount": 1.0,
          "unit": "tabl.",
          "frequency": "jeden raz dziennie",
          "perKg": 10.0
        }
      ]
    }
  },
  {
    "id": "ilovet-carobin-pet-digest-cane-e-gatto",
    "name": "Carobin Pet Digest cane e gatto · proszek smakowy",
    "species": [
      "dog",
      "cat"
    ],
    "kind": "ilovet",
    "library": "supplement",
    "aliases": "Ilovet Illovet NBF Lanes Proszek smakowy",
    "substance": "Ilovet · Proszek smakowy · Enterococcus Faecium, karob",
    "source": "https://ilovet.pl/uklad-pokarmowy/carobin-pet-digest-cane-e-gatto/",
    "sourceLabel": "Zalecenia Ilovet",
    "checked": "19.10.2026",
    "strength": "Proszek smakowy",
    "categoryBadge": "Suplement",
    "indications": "Wsparcie przy zaburzeniach pracy jelit u psów i kotów. Wygodne saszetki z karobem.",
    "notes": "Doustnie, bezpośrednio do pyska lub z pokarmem. W przypadku podawania karmy suchej, delikatnie zwilżyć karmę, aby zapewnić odpowiednią przyczepność proszku i jego całkowite spożycie. Uzupełniać dawkę dzienną zwykłym pokarmem. Zaleca się stosowanie zrównoważonej diety.",
    "cautions": "",
    "rules": {
      "dog": [
        {
          "mass": "Niezależnie od masy",
          "amount": 1.0,
          "unit": "saszetki",
          "frequency": "jeden raz dziennie"
        }
      ],
      "cat": [
        {
          "mass": "Niezależnie od masy",
          "amount": 1.0,
          "unit": "saszetki",
          "frequency": "jeden raz dziennie"
        }
      ]
    }
  },
  {
    "id": "ilovet-carobin-pet-forte-cane-e-gatto-2",
    "name": "Carobin Pet Forte cane e gatto · tabletki smakowe",
    "species": [
      "dog",
      "cat"
    ],
    "kind": "ilovet",
    "library": "supplement",
    "aliases": "Ilovet Illovet NBF Lanes Tabletki smakowe",
    "substance": "Ilovet · Tabletki smakowe · Cynk, tanina, L. Reuteri",
    "source": "https://ilovet.pl/uklad-pokarmowy/carobin-pet-forte-cane-e-gatto-2/",
    "sourceLabel": "Zalecenia Ilovet",
    "checked": "19.10.2026",
    "strength": "Tabletki smakowe",
    "categoryBadge": "Suplement",
    "indications": "Wsparcie w przypadku ostrej biegunki oraz w okresie rekonwalescencji u psów i kotów.",
    "notes": "Doustnie, bezpośrednio do pyska lub z pokarmem. Zalecany okres stosowania: od 1-7 dni.",
    "cautions": "",
    "rules": {
      "dog": [
        {
          "mass": "0-5 kg",
          "amount": 0.25,
          "unit": "tabl.",
          "frequency": "jeden raz dziennie",
          "min": 0.0,
          "max": 5.0
        },
        {
          "mass": "6-10 kg",
          "amount": 0.5,
          "unit": "tabl.",
          "frequency": "jeden raz dziennie",
          "min": 6.0,
          "max": 10.0
        },
        {
          "mass": "11-20 kg",
          "amount": 1.0,
          "unit": "tabl.",
          "frequency": "jeden raz dziennie",
          "min": 11.0,
          "max": 20.0
        },
        {
          "mass": "21-30 kg",
          "amount": 1.5,
          "unit": "tabl.",
          "frequency": "jeden raz dziennie",
          "min": 21.0,
          "max": 30.0
        },
        {
          "mass": "31-40 kg",
          "amount": 2.0,
          "unit": "tabl.",
          "frequency": "jeden raz dziennie",
          "min": 31.0,
          "max": 40.0
        },
        {
          "mass": ">40 kg",
          "amount": 2.5,
          "unit": "tabl.",
          "frequency": "jeden raz dziennie",
          "min": 40.0,
          "minExclusive": true
        }
      ],
      "cat": [
        {
          "mass": "na każde 5 kg masy ciała",
          "amount": 0.25,
          "unit": "tabl.",
          "frequency": "jeden raz dziennie",
          "perKg": 5.0
        }
      ]
    }
  },
  {
    "id": "ilovet-carobin-pet-forte-cane-e-gatto",
    "name": "Carobin Pet Forte cane e gatto · pasta smakowa",
    "species": [
      "dog",
      "cat"
    ],
    "kind": "ilovet",
    "library": "supplement",
    "aliases": "Ilovet Illovet NBF Lanes Pasta smakowa",
    "substance": "Ilovet · Pasta smakowa · Karob, tanina, L. Reuteri",
    "source": "https://ilovet.pl/uklad-pokarmowy/carobin-pet-forte-cane-e-gatto/",
    "sourceLabel": "Zalecenia Ilovet",
    "checked": "19.10.2026",
    "strength": "Pasta smakowa",
    "categoryBadge": "Suplement",
    "indications": "Wsparcie w przypadku ostrej biegunki oraz w okresie rekonwalescencji u psów i kotów.",
    "notes": "Doustnie, bezpośrednio do pyska lub z pokarmem. 1,2 g odpowiada 1 kresce na tłoku = 1ml",
    "cautions": "",
    "rules": {
      "dog": [
        {
          "mass": "na każde 5 kg masy ciała",
          "amount": 1.2,
          "unit": "g pasty",
          "frequency": "jeden raz dziennie",
          "perKg": 5.0
        }
      ],
      "cat": [
        {
          "mass": "Niezależnie od masy",
          "amount": 1.2,
          "unit": "g pasty",
          "frequency": "jeden raz dziennie"
        }
      ]
    }
  },
  {
    "id": "ilovet-carobin-pet-forte-mini-cane-e-gatto",
    "name": "Carobin Pet Forte Mini cane e gatto · tabletki smakowe",
    "species": [
      "dog",
      "cat"
    ],
    "kind": "ilovet",
    "library": "supplement",
    "aliases": "Ilovet Illovet NBF Lanes Tabletki smakowe",
    "substance": "Ilovet · Tabletki smakowe · Cynk, tanina, L. Reuteri",
    "source": "https://ilovet.pl/uklad-pokarmowy/carobin-pet-forte-mini-cane-e-gatto/",
    "sourceLabel": "Zalecenia Ilovet",
    "checked": "19.10.2026",
    "strength": "Tabletki smakowe",
    "categoryBadge": "Suplement",
    "indications": "Wsparcie w przypadku ostrej biegunki oraz w okresie rekonwalescencji u psów i kotów.",
    "notes": "Doustnie, bezpośrednio do pyska lub z pokarmem. Zalecany okres stosowania: od 1-7 dni.",
    "cautions": "",
    "rules": {
      "dog": [
        {
          "mass": "0-5 kg",
          "amount": 0.5,
          "unit": "tabl.",
          "frequency": "jeden raz dziennie",
          "min": 0.0,
          "max": 5.0
        },
        {
          "mass": "6-10 kg",
          "amount": 1.0,
          "unit": "tabl.",
          "frequency": "jeden raz dziennie",
          "min": 6.0,
          "max": 10.0
        },
        {
          "mass": "11-20 kg",
          "amount": 2.0,
          "unit": "tabl.",
          "frequency": "jeden raz dziennie",
          "min": 11.0,
          "max": 20.0
        }
      ],
      "cat": [
        {
          "mass": "na każde 5 kg masy ciała",
          "amount": 0.5,
          "unit": "tabl.",
          "frequency": "jeden raz dziennie",
          "perKg": 5.0
        }
      ]
    }
  },
  {
    "id": "ilovet-carobin-pet",
    "name": "Carobin Pet Digest cane e gatto · pasta smakowa",
    "species": [
      "dog",
      "cat"
    ],
    "kind": "ilovet",
    "library": "supplement",
    "aliases": "Ilovet Illovet NBF Lanes Pasta smakowa",
    "substance": "Ilovet · Pasta smakowa · Karob, nukleotydy, witamina B12",
    "source": "https://ilovet.pl/uklad-pokarmowy/carobin-pet/",
    "sourceLabel": "Zalecenia Ilovet",
    "checked": "19.10.2026",
    "strength": "Pasta smakowa",
    "categoryBadge": "Suplement",
    "indications": "Wsparcie w przypadku zaburzeń pracy jelit u psów i kotów.",
    "notes": "Doustnie, bezpośrednio do pyska lub z pokarmem. 1,2 g odpowiada 1 kresce na tłoku = 1ml",
    "cautions": "",
    "rules": {
      "dog": [
        {
          "mass": "na każde 5 kg masy ciała",
          "amount": 1.2,
          "unit": "g pasty",
          "frequency": "dwa razy dziennie",
          "perKg": 5.0
        }
      ],
      "cat": [
        {
          "mass": "Niezależnie od masy",
          "amount": 1.2,
          "unit": "g pasty",
          "frequency": "dwa razy dziennie"
        }
      ]
    }
  },
  {
    "id": "ilovet-ciellea-pet-cane-e-gatto",
    "name": "Ciellea Pet cane e gatto · kapsułki miękkie",
    "species": [
      "dog",
      "cat"
    ],
    "kind": "ilovet",
    "library": "supplement",
    "aliases": "Ilovet Illovet NBF Lanes Kapsułki miękkie",
    "substance": "Ilovet · Kapsułki miękkie · Witamina E, CLA",
    "source": "https://ilovet.pl/uklad-pokarmowy/ciellea-pet-cane-e-gatto/",
    "sourceLabel": "Zalecenia Ilovet",
    "checked": "19.10.2026",
    "strength": "Kapsułki miękkie",
    "categoryBadge": "Suplement",
    "indications": "Wsparcie przy redukcji otyłości u psów i kotów. Pierwszy preparat o wysokiej zawartości CLA pochodzenia roślinnego.",
    "notes": "Doustnie, bezpośrednio do pyska lub z pokarmem. ",
    "cautions": "",
    "rules": {
      "dog": [
        {
          "mass": "≤10 kg",
          "amount": 1.0,
          "unit": "kaps.",
          "frequency": "jeden raz dziennie",
          "max": 10.0
        },
        {
          "mass": "11-25 kg",
          "amount": 2.0,
          "unit": "kaps.",
          "frequency": "jeden raz dziennie",
          "min": 11.0,
          "max": 25.0
        },
        {
          "mass": "26-40 kg",
          "amount": 3.0,
          "unit": "kaps.",
          "frequency": "jeden raz dziennie",
          "min": 26.0,
          "max": 40.0
        },
        {
          "mass": ">40 kg",
          "amount": 4.0,
          "unit": "kaps.",
          "frequency": "jeden raz dziennie",
          "min": 40.0,
          "minExclusive": true
        }
      ],
      "cat": [
        {
          "mass": "Niezależnie od masy",
          "amount": 1.0,
          "unit": "kaps.",
          "frequency": "jeden raz dziennie"
        }
      ]
    }
  },
  {
    "id": "ilovet-gastrovom-cane-e-gatto-saszetki",
    "name": "Gastrovom cane e gatto · żel smakowy w saszetkach",
    "species": [
      "dog",
      "cat"
    ],
    "kind": "ilovet",
    "library": "supplement",
    "aliases": "Ilovet Illovet NBF Lanes Żel smakowy w saszetkach",
    "substance": "Ilovet · Żel smakowy w saszetkach · L-alanina, Pektyny, imbir",
    "source": "https://ilovet.pl/uklad-pokarmowy/gastrovom-cane-e-gatto-saszetki/",
    "sourceLabel": "Zalecenia Ilovet",
    "checked": "19.10.2026",
    "strength": "Żel smakowy w saszetkach",
    "categoryBadge": "Suplement",
    "indications": "Wspiera utrzymanie prawidłowych funkcji żołądka.",
    "notes": "Doustnie, bezpośrednio do pyska lub z pokarmem. ",
    "cautions": "",
    "rules": {
      "dog": [
        {
          "mass": "≤25 kg",
          "amount": 1.0,
          "unit": "saszetki",
          "frequency": "jeden raz dziennie",
          "max": 25.0
        },
        {
          "mass": "26-50 kg",
          "amount": 2.0,
          "unit": "saszetki",
          "frequency": "jeden raz dziennie",
          "min": 26.0,
          "max": 50.0
        },
        {
          "mass": ">50 kg",
          "amount": 3.0,
          "unit": "saszetki",
          "frequency": "jeden raz dziennie",
          "min": 50.0,
          "minExclusive": true
        }
      ],
      "cat": [
        {
          "mass": "Niezależnie od masy",
          "amount": 1.0,
          "unit": "saszetki",
          "frequency": "jeden raz dziennie"
        }
      ]
    }
  },
  {
    "id": "ilovet-gastrovom-cane-e-gatto",
    "name": "Gastrovom cane e gatto · żel smakowy w butelce",
    "species": [
      "dog",
      "cat"
    ],
    "kind": "ilovet",
    "library": "supplement",
    "aliases": "Ilovet Illovet NBF Lanes Żel smakowy w butelce",
    "substance": "Ilovet · Żel smakowy w butelce · L-alanina, Pektyny, imbir",
    "source": "https://ilovet.pl/uklad-pokarmowy/gastrovom-cane-e-gatto/",
    "sourceLabel": "Zalecenia Ilovet",
    "checked": "19.10.2026",
    "strength": "Żel smakowy w butelce",
    "categoryBadge": "Suplement",
    "indications": "Wspiera utrzymanie prawidłowych funkcji żołądka dzięki L-alaninie, pektynom oraz imbirowi.",
    "notes": "Doustnie, bezpośrednio do pyska lub z pokarmem. ",
    "cautions": "",
    "rules": {
      "dog": [
        {
          "mass": "≤5 kg",
          "amount": 1.0,
          "unit": "ml",
          "frequency": "jeden raz dziennie",
          "max": 5.0
        },
        {
          "mass": "6-15 kg",
          "amount": 2.0,
          "unit": "ml",
          "frequency": "jeden raz dziennie",
          "min": 6.0,
          "max": 15.0
        },
        {
          "mass": "16-30 kg",
          "amount": 3.0,
          "unit": "ml",
          "frequency": "jeden raz dziennie",
          "min": 16.0,
          "max": 30.0
        },
        {
          "mass": "31-50 kg",
          "amount": 4.0,
          "unit": "ml",
          "frequency": "jeden raz dziennie",
          "min": 31.0,
          "max": 50.0
        },
        {
          "mass": ">50 kg",
          "amount": 5.0,
          "unit": "ml",
          "frequency": "jeden raz dziennie",
          "min": 50.0,
          "minExclusive": true
        }
      ],
      "cat": [
        {
          "mass": "Niezależnie od masy",
          "amount": 1.0,
          "unit": "ml",
          "frequency": "jeden raz dziennie"
        }
      ]
    }
  },
  {
    "id": "ilovet-hepatikrill-cane-e-gatto",
    "name": "Hepatikrill cane e gatto · kapsułki miękkie",
    "species": [
      "dog",
      "cat"
    ],
    "kind": "ilovet",
    "library": "supplement",
    "aliases": "Ilovet Illovet NBF Lanes Kapsułki miękkie",
    "substance": "Ilovet · Kapsułki miękkie · Fosfatydylocholina, Fosfatydylo-cholina, omega-3, sylibina sylibina, omega-3",
    "source": "https://ilovet.pl/uklad-pokarmowy/hepatikrill-cane-e-gatto/",
    "sourceLabel": "Zalecenia Ilovet",
    "checked": "19.10.2026",
    "strength": "Kapsułki miękkie",
    "categoryBadge": "Suplement",
    "indications": "Wsparcie funkcji wątroby w przypadku przewlekłej niewydolności wątroby u psa i kota.",
    "notes": "Doustnie, bezpośrednio do pyska lub z pokarmem. ",
    "cautions": "",
    "rules": {
      "dog": [
        {
          "mass": "≤20 kg",
          "amount": 1.0,
          "unit": "kaps.",
          "frequency": "jeden raz dziennie",
          "max": 20.0
        },
        {
          "mass": "21-40 kg",
          "amount": 2.0,
          "unit": "kaps.",
          "frequency": "jeden raz dziennie",
          "min": 21.0,
          "max": 40.0
        },
        {
          "mass": ">40 kg",
          "amount": 3.0,
          "unit": "kaps.",
          "frequency": "jeden raz dziennie",
          "min": 40.0,
          "minExclusive": true
        }
      ],
      "cat": [
        {
          "mass": "Niezależnie od masy",
          "amount": 1.0,
          "unit": "kaps.",
          "frequency": "jeden raz dziennie"
        }
      ]
    }
  },
  {
    "id": "ilovet-microbiotal-cane-e-gatto",
    "name": "Microbiotal cane e gatto · pasta smakowa",
    "species": [
      "dog",
      "cat"
    ],
    "kind": "ilovet",
    "library": "supplement",
    "aliases": "Ilovet Illovet NBF Lanes Pasta smakowa",
    "substance": "Ilovet · Pasta smakowa · L. Reuteri, FOS, polifenole",
    "source": "https://ilovet.pl/uklad-pokarmowy/microbiotal-cane-e-gatto/",
    "sourceLabel": "Zalecenia Ilovet",
    "checked": "19.10.2026",
    "strength": "Pasta smakowa",
    "categoryBadge": "Suplement",
    "indications": "Wsparcie prawidłowego funkcjonowania mikrobioty jelitowej psów i kotów.",
    "notes": "Doustnie, bezpośrednio do pyska lub z pokarmem. 1,2 g odpowiada 1 kresce na tłoku = 1ml",
    "cautions": "",
    "rules": {
      "dog": [
        {
          "mass": "na każde 10 kg masy ciała",
          "amount": 1.2,
          "unit": "g pasty",
          "frequency": "jeden raz dziennie",
          "perKg": 10.0
        }
      ],
      "cat": [
        {
          "mass": "Niezależnie od masy",
          "amount": 1.2,
          "unit": "g pasty",
          "frequency": "jeden raz dziennie"
        }
      ]
    }
  },
  {
    "id": "ilovet-microbiotal-cane",
    "name": "Microbiotal cane · tabletki smakowe",
    "species": [
      "dog"
    ],
    "kind": "ilovet",
    "library": "supplement",
    "aliases": "Ilovet Illovet NBF Lanes Tabletki smakowe",
    "substance": "Ilovet · Tabletki smakowe · L. reuteri, FOS, kwas masłowy",
    "source": "https://ilovet.pl/uklad-pokarmowy/microbiotal-cane/",
    "sourceLabel": "Zalecenia Ilovet",
    "checked": "19.10.2026",
    "strength": "Tabletki smakowe",
    "categoryBadge": "Suplement",
    "indications": "W­sparcie prawidłowego funkcjonowania mikrobioty jelitowej psów.",
    "notes": "Doustnie, bezpośrednio do pyska lub z pokarmem. ",
    "cautions": "",
    "rules": {
      "dog": [
        {
          "mass": "≤10 kg",
          "amount": 0.5,
          "unit": "tabl.",
          "frequency": "jeden raz dziennie",
          "max": 10.0
        },
        {
          "mass": "11-25 kg",
          "amount": 1.0,
          "unit": "tabl.",
          "frequency": "jeden raz dziennie",
          "min": 11.0,
          "max": 25.0
        },
        {
          "mass": "26-40 kg",
          "amount": 2.0,
          "unit": "tabl.",
          "frequency": "jeden raz dziennie",
          "min": 26.0,
          "max": 40.0
        },
        {
          "mass": ">40 kg",
          "amount": 3.0,
          "unit": "tabl.",
          "frequency": "jeden raz dziennie",
          "min": 40.0,
          "minExclusive": true
        }
      ]
    }
  },
  {
    "id": "ilovet-normaliver-pet-cane-e-gatto",
    "name": "Normaliver Pet cane e gatto · zawiesina smakowa",
    "species": [
      "dog",
      "cat"
    ],
    "kind": "ilovet",
    "library": "supplement",
    "aliases": "Ilovet Illovet NBF Lanes Zawiesina smakowa",
    "substance": "Ilovet · Zawiesina smakowa · sylimaryna, betaina, l-karnityna",
    "source": "https://ilovet.pl/uklad-pokarmowy/normaliver-pet-cane-e-gatto/",
    "sourceLabel": "Zalecenia Ilovet",
    "checked": "19.10.2026",
    "strength": "Zawiesina smakowa",
    "categoryBadge": "Suplement",
    "indications": "Wsparcie utrzymania prawidłowych funkcji wątroby psa i kota.",
    "notes": "Doustnie, bezpośrednio do pyska lub z pokarmem. Przed każdym użyciem należy bardzo dobrze wstrząsnąć butelką z zamkniętą nakrętką, aż do wyczucia ruchu zawartych w niej kulek.",
    "cautions": "",
    "rules": {
      "dog": [
        {
          "mass": "≤10 kg",
          "amount": 1.0,
          "unit": "ml",
          "frequency": "jeden raz dziennie",
          "max": 10.0
        },
        {
          "mass": "11-25 kg",
          "amount": 2.0,
          "unit": "ml",
          "frequency": "jeden raz dziennie",
          "min": 11.0,
          "max": 25.0
        },
        {
          "mass": "26-50 kg",
          "amount": 3.0,
          "unit": "ml",
          "frequency": "jeden raz dziennie",
          "min": 26.0,
          "max": 50.0
        },
        {
          "mass": ">50 kg",
          "amount": 4.0,
          "unit": "ml",
          "frequency": "jeden raz dziennie",
          "min": 50.0,
          "minExclusive": true
        }
      ],
      "cat": [
        {
          "mass": "Niezależnie od masy",
          "amount": 1.0,
          "unit": "ml",
          "frequency": "jeden raz dziennie"
        }
      ]
    }
  },
  {
    "id": "ilovet-reufiber-cane-e-gatto",
    "name": "Reufiber cane e gatto · proszek smakowy",
    "species": [
      "dog",
      "cat"
    ],
    "kind": "ilovet",
    "library": "supplement",
    "aliases": "Ilovet Illovet NBF Lanes Proszek smakowy",
    "substance": "Ilovet · Proszek smakowy · Kompleks włókien, Witamina B, L. reuteri",
    "source": "https://ilovet.pl/uklad-pokarmowy/reufiber-cane-e-gatto/",
    "sourceLabel": "Zalecenia Ilovet",
    "checked": "19.10.2026",
    "strength": "Proszek smakowy",
    "categoryBadge": "Suplement",
    "indications": "Wsparcie prawidłowej funkcji jelit dzięki dostarczeniu włókien rozpuszczalnych i nierozpuszczalnych oraz witaminy B12.",
    "notes": "Doustnie, bezpośrednio do pyska lub z pokarmem. ",
    "cautions": "",
    "rules": {
      "dog": [
        {
          "mass": "≤10 kg",
          "amount": 1.0,
          "unit": "miarki",
          "frequency": "jeden raz dziennie",
          "max": 10.0
        },
        {
          "mass": "11-25 kg",
          "amount": 2.0,
          "unit": "miarki",
          "frequency": "jeden raz dziennie",
          "min": 11.0,
          "max": 25.0
        },
        {
          "mass": "26-40 kg",
          "amount": 3.0,
          "unit": "miarki",
          "frequency": "jeden raz dziennie",
          "min": 26.0,
          "max": 40.0
        },
        {
          "mass": ">40 kg",
          "amount": 4.0,
          "unit": "miarki",
          "frequency": "jeden raz dziennie",
          "min": 40.0,
          "minExclusive": true
        }
      ],
      "cat": [
        {
          "mass": "Niezależnie od masy",
          "amount": 1.0,
          "unit": "miarki",
          "frequency": "jeden raz dziennie"
        }
      ]
    }
  },
  {
    "id": "ilovet-reufolb12-cane-e-gatto",
    "name": "ReufolB12 cane e gatto · kapsułki twarde",
    "species": [
      "dog",
      "cat"
    ],
    "kind": "ilovet",
    "library": "supplement",
    "aliases": "Ilovet Illovet NBF Lanes Kapsułki twarde",
    "substance": "Ilovet · Kapsułki twarde · L. reuteri, Witamina B12, Kwas foliowy",
    "source": "https://ilovet.pl/uklad-pokarmowy/reufolb12-cane-e-gatto/",
    "sourceLabel": "Zalecenia Ilovet",
    "checked": "19.10.2026",
    "strength": "Kapsułki twarde",
    "categoryBadge": "Suplement",
    "indications": "Wsparcie w utrzymaniu właściwego poziomu witaminy B12 oraz kwasu foliowego u psów i kotów. Zawiera inaktywowane szczepy L.reuteri.",
    "notes": "Doustnie, bezpośrednio do pyska lub z pokarmem. ",
    "cautions": "",
    "rules": {
      "dog": [
        {
          "mass": "≤10 kg",
          "amount": 1.0,
          "unit": "kaps.",
          "frequency": "co drugi dzień",
          "max": 10.0
        },
        {
          "mass": "11-20 kg",
          "amount": 1.0,
          "unit": "kaps.",
          "frequency": "jeden raz dziennie",
          "min": 11.0,
          "max": 20.0
        },
        {
          "mass": ">20 kg",
          "amount": 2.0,
          "unit": "kaps.",
          "frequency": "jeden raz dziennie",
          "min": 20.0,
          "minExclusive": true
        }
      ],
      "cat": [
        {
          "mass": "Niezależnie od masy",
          "amount": 1.0,
          "unit": "kaps.",
          "frequency": "co drugi dzień"
        }
      ]
    }
  },
  {
    "id": "ilovet-reuteral-pet-cane",
    "name": "Reuteral Pet cane · kapsułki twarde",
    "species": [
      "dog"
    ],
    "kind": "ilovet",
    "library": "supplement",
    "aliases": "Ilovet Illovet NBF Lanes Kapsułki twarde",
    "substance": "Ilovet · Kapsułki twarde · L. reuteri, S. cerevisae, witamina B12",
    "source": "https://ilovet.pl/uklad-pokarmowy/reuteral-pet-cane/",
    "sourceLabel": "Zalecenia Ilovet",
    "checked": "19.10.2026",
    "strength": "Kapsułki twarde",
    "categoryBadge": "Suplement",
    "indications": "Wsparcie w utrzymaniu prawidłowej równowagi mikrobioty jelitowej.",
    "notes": "Doustnie, bezpośrednio do pyska lub z pokarmem. Kapsułki można podawać w całości lub po otwarciu kapsułki zawartość rozprowadzić w dziennej dawce pokarmowej. Produkt nie musi być przechowywany w lodówce.",
    "cautions": "",
    "rules": {
      "dog": [
        {
          "mass": "<25 kg",
          "amount": 1.0,
          "unit": "kaps.",
          "frequency": "jeden raz dziennie",
          "max": 25.0,
          "maxExclusive": true
        },
        {
          "mass": "26-50 kg",
          "amount": 2.0,
          "unit": "kaps.",
          "frequency": "jeden raz dziennie",
          "min": 26.0,
          "max": 50.0
        },
        {
          "mass": ">50 kg",
          "amount": 3.0,
          "unit": "kaps.",
          "frequency": "jeden raz dziennie",
          "min": 50.0,
          "minExclusive": true
        }
      ]
    }
  },
  {
    "id": "ilovet-reuteral-pet-gatto",
    "name": "Reuteral Pet gatto · krople",
    "species": [
      "cat"
    ],
    "kind": "ilovet",
    "library": "supplement",
    "aliases": "Ilovet Illovet NBF Lanes Krople",
    "substance": "Ilovet · Krople · L. reuteri, E. faecium, witamina d3",
    "source": "https://ilovet.pl/uklad-pokarmowy/reuteral-pet-gatto/",
    "sourceLabel": "Zalecenia Ilovet",
    "checked": "19.10.2026",
    "strength": "Krople",
    "categoryBadge": "Suplement",
    "indications": "Wsparcie w utrzymaniu prawidłowej równowagi mikrobioty jelitowej kotów.",
    "notes": "Doustnie, bezpośrednio do pyska lub z pokarmem. Przed każdym użyciem należy dobrze wstrząsnąć butelką. Produkt nie musi być przechowywany w lodówce.",
    "cautions": "",
    "rules": {
      "cat": [
        {
          "mass": "Niezależnie od masy",
          "amount": 10.0,
          "unit": "kropli",
          "frequency": "jeden raz dziennie"
        }
      ]
    }
  }
];
function calculate(d,kg,species){
 if(d.topical)return {status:'ilovetCare'};
 const matches=(d.rules[species]||[]).filter(r=>(r.min===undefined||(r.minExclusive?kg>r.min:kg>=r.min))&&(r.max===undefined||(r.maxExclusive?kg<r.max:kg<=r.max)));
 if(matches.length!==1)return {status:'ilovetCheck',message:matches.length?'Na tej granicy nakładają się przedziały producenta. Sprawdź zalecenia.':'Ta masa nie mieści się w podanych przedziałach. Sprawdź zalecenia.'};
 const rule=matches[0];let amount=rule.amount*(rule.perKg?kg/rule.perKg:1);
 // User preference: whole capsules for each started weight interval. Other units are not rounded up.
 if(rule.perKg&&rule.unit==='kaps.')amount=Math.ceil(kg/rule.perKg)*rule.amount;
 if(d.id==='ilovet-nefrokrill')amount=Math.min(amount,3);
 if(rule.unit==='tabl.'&&Math.abs(amount*4-Math.round(amount*4))>1e-8)return {status:'ilovetCheck',message:'Wynik nie odpowiada ćwiartce tabletki. Sprawdź sposób odmierzania w zaleceniach.'};
 if(!Number.isFinite(amount))return {status:'invalid'};
 return {status:'ilovetDose',amount,unit:rule.unit,frequency:rule.frequency,rule};
}
return {entries,calculate};
})();
