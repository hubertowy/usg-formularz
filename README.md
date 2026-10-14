# Gałąź robocza: wybór badania USG

Ta wersja rozwija formularz na gałęzi `codex/wybor-badania-usg`. Publiczna strona GitHub Pages nadal korzysta z `main`.

Ekran startowy pozwala wybrać:
- USG jamy brzusznej: dotychczasowe 17 struktur (z układem rozrodczym dobranym do płci).
- USG układu moczowego: pęcherz moczowy oraz nerki lewa i prawa.
- USG układu pokarmowego: wątroba, pęcherzyk żółciowy i drogi żółciowe, śledziona, trzustka, żołądek, dwunastnica, jelito czcze, jelito biodrowe, okrężnica, węzły chłonne, jama otrzewnej.

Zmiana zakresu przez „Wybór badania” zachowuje wpisane dane w ramach tej samej sesji. „Nowe badanie” usuwa dane po potwierdzeniu i wraca do ekranu wyboru. Kopiowany raport obejmuje tylko wybrany zakres.

W tej gałęzi są także oznaczenia stanu narządów i przycisk „Opróżniony · ocena ograniczona” przy pęcherzu.

---

# Formularz opisów USG weterynaryjnego

[Otwórz formularz USG](https://hubertowy.github.io/usg-formularz/)

Strona statyczna, bez instalacji zależności i bez serwera aplikacji. Ciemnozielony interfejs, tryb skupienia oraz widok wszystkich narządów. Pomiary wpisuje się bezpośrednio w zdaniach. Formularz sprawdza wybrane sprzeczne cechy oraz dodane zmiany przed skopiowaniem opisu; nie interpretuje automatycznie dowolnego tekstu własnego.

## Otwieranie lokalne
Pobierz pliki i otwórz index.html w przeglądarce. Wszystkie cztery pliki muszą pozostać w tym samym katalogu.
Jeżeli przeglądarka ogranicza schowek dla lokalnych plików, przycisk zaznaczy opis: skopiuj go Ctrl+C (na Macu Command+C).

## Publikacja na GitHub Pages
Umieść index.html, style.css, schema.js, app.js i .nojekyll w głównym katalogu repozytorium.
W Settings → Pages wybierz Deploy from a branch, gałąź main oraz folder / (root).
GitHub pokaże adres opublikowanej strony.
W GitHub Free ta konfiguracja wymaga publicznego repozytorium. Adres projektu ma postać https://LOGIN.github.io/NAZWA-REPOZYTORIUM/.

## Dane formularza
Wpisane dane pozostają w pamięci otwartej strony. Nie są wysyłane do serwera, przechowywane w repozytorium ani zapisywane w historii. Odświeżenie zeruje formularz.
Wszystkie narządy zaczynają od opisu prawidłowego. Pomiń w opisie wyklucza strukturę z kopiowanego tekstu; Przywróć odtwarza dane w obrębie tego samego badania.

## Klawiatura
Tab / Shift+Tab: następne / poprzednie pole.
Strzałki: wybór cechy w liście.
Ctrl (lub Command)+strzałka w górę / dół: poprzedni / następny narząd.
Ctrl (lub Command)+Shift+D: zmiana trybu narządu.
Ctrl (lub Command)+Enter: kopiowanie opisu.
