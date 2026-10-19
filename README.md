# Narzędzia weterynaryjne

[Otwórz stronę](https://hubertowy.github.io/usg-formularz/)

Trzy panele w jasnym, szklanym interfejsie:
- Szablony badań USG: jama brzuszna, układ moczowy i układ pokarmowy.
- Leki i suplementy: wyszukiwanie, gatunek, masa ciała, ograniczenia wieku, zakresy dawkowania oraz źródła.
- Dietetyka: tłuszcz w suchej masie karmy.

Strona statyczna bez instalacji zależności. Do uruchomienia lokalnie użyj serwera statycznego w tym katalogu, np. `python3 -m http.server 8768`, i otwórz `http://localhost:8768`.

## Dane i obliczenia
Dane pacjenta pozostają w pamięci otwartej strony. Odświeżenie zeruje formularz. Odnośniki źródłowe prowadzą do zewnętrznych dokumentów i stron producentów lub rejestrów.

Kalkulator jest narzędziem pomocniczym. Schematy preparatów ludzkich są oznaczone jako podane przez lekarza, poza wskazaniami ChPL. Wyniki określają dawkę na podanie lub na dobę zgodnie z oznaczeniem. Zakres początkowy prednizolonu jest dobowy; kalkulator nie wyznacza redukcji dawki. Źródło i data sprawdzenia znajdują się przy preparacie.

## Publikacja
GitHub Pages: gałąź `main`, katalog główny. Plik `.nojekyll` umożliwia bezpośrednią publikację plików statycznych.


## Źródła informacji o lekach

Preferowane są polskie ChPLW i ulotki z Rejestru Produktów Leczniczych e-Zdrowie. Gdy brak odpowiedniego dokumentu, korzystamy z polskich dokumentów urzędowych UE lub oficjalnego producenta. Dokumenty obcojęzyczne służą jako źródło zapasowe; język jest oznaczony przy odnośniku. Każda dawka musi dotyczyć właściwej postaci, mocy i gatunku.
