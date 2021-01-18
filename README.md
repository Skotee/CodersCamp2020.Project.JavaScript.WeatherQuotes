## ![](RackMultipart20210118-4-euuf9o_html_5142fe91682defd7.png)

# **WeatherQuotes**

Deadline: 19.01.2020

Role w projekcie:

- TechLead- Radek
- Product Owner - Tomek
- Development Manager - Maciej
- Klient - Arek

# Opis projektu

Strona Weather Quotes informuje użytkownika o stanie pogody w wybranym przez niego miejscu oraz stara się go zainspirować cytatem generowanym losowo w zależności od pogody. Wstępny podgląd projektu można znaleźć [tutaj](https://www.figma.com/file/aiMZLAK36HkWFWEzRHEPPS/Weather-Quotes---Javascript-WeatherQuotes--?node-id=0%3A1).

# Cele

##### W projekcie każdy z uczestników powinien zaprezentować praktyczną znajomość poniższych zagadnień związanych z JavaScript:

1. zmienne
2. operatory porównania
3. pętle
4. obiekty, atrybuty
5. warunki
6. funkcje
7. operatory logiczne
8. tablice
9. iteracja i/lub rekurencja
10. console
11. return
12. &quot;===&quot; vs &quot;==&quot;
13. integracja z zewnętrznym REST API
14. interakcja z domem
15. odwoływanie się do elementów DOM z JavaScript
16. zmiana stylów z poziomu JSa
17. zmiana zawartości HTML z poziomu JSa
18. animacje
19. zewnętrzne biblioteki
20. async await i/lub Promise
21. funkcje callback
22. metody HTTP
23. pisanie testów jednostkowych

# Użyte biblioteki:

snap

gsap

# Użyte narzędzia:

- [Colormind - the AI powered color palette generator](http://colormind.io/)
- [https://apilist.fun/collection/free-apis](https://apilist.fun/collection/free-apis)
- [https://trello.com/home](https://trello.com/home)
- [https://www.figma.com](https://www.figma.com/)

# Użyte API (linki):

1. pogoda: [Current weather data](https://openweathermap.org/current)

**60 calls** /minute

**1,000,000 calls** /month
 api key:

| a53136f1a7cfa62997f97997cfb14cde
2. cytaty: [Ron Swanson Quotes](https://github.com/jamesseanwright/ron-swanson-quotes)[Breaking Bad Quotes](https://github.com/shevabam/breaking-bad-quotes)
 |
| --- |

# API pogodowe:

1. dane:
  1. nazwa miasta!
  2. temperatura!
  3. dczuwalna temperatura!
  4. pis pogody
  5. widoczność
  6. szybkość wiatru!
  7. wschód/zachód słońca

### **Flow Git&#39;a**

1. działanie na trzech branchach: develop, main oraz własny z wybraną funkcjonalnością/ nowym ficzerem
2. Jedna funkcjonalność - jeden branch
3. gdy funkcjonalność jest gotowa, wystawiamy pull request z mergowaniem go do brancha develop.
4. co najmniej 2 osoby robią code review danego kodu
5. jeśli pozytywnie przejdzie on przez dwie osoby, wtedy osoba która wystawiła pull request może zmergować brancha, lub TechLead

#

# Etapy

1.
## Zrobienie mockupu

Stworzenie wstępnego projektu Weather Quotes z użyciem Figmy oraz rozpisanie zadań do wykonania z użyciem Trello.

1.
## Zrobienie funkcjonalności

- Napisanie kodu, który pobiera dane z API i wyświetla je na stronie.
- Wykonanie animacji w zależności od prognozy pogody.
- Zmiana tła w zależności od prognozy pogody.

### **Kod startowy projektu**

Nad aplikacją pracę wcześniej zaczęli też inni programiści, po których otrzymujecie mały kawałek kodu. Oto co zostało już przygotowane (możecie oczywiście dowolnie to zmieniać i konfigurować zgodnie z potrzebami zespołu):

1. Zostały skonfigurowane GitHub Actions. W podobny sposób jak w pierwszym projekcie. Po wykonaniu kroków opisanych poprzednio Wasza aplikacja powinna zostać wdrożona na GitHub Pages.
2. Aplikacja jest budowana przy pomocy narzędzia Parcel, z którym mieliście okazję się zapoznać w materiałach.
3. Został dodany framework do testów — Jest w sposób opisany [TUTAJ](https://ryankubik.com/blog/parcel-and-jest/).
  - Testy powinny zostać umieszczone w katalogu test. Kod produkcyjny (testowany) w katalogu src.
4. SWApi, z którego będziecie korzystać, ma ograniczenie do 1000 zapytań z jednego adresu IP na dzień. Dlatego, jeśli przekroczycie tę liczbę w trakcie developmentu, przydatne możecie się okazać użycie JSON SERVER z katalogu swapi-json-server.
5. SWApi nie zwraca wam obrazków dla poszczególnych zasobów, dlatego w katalogu static/assets/img znajdziecie obrazy odpowiadające konkretnym zasobom.
6. W katalogu static/images/ui znajdziecie wszystkie grafiki, jakie będą Wam potrzebne do wykonania interfejsu użytkownika wg projektu. Jednakże jeśli jesteście w stanie zaproponować lepszy Interfejs Użytkownika, może zaproponować i wykonać alternatywny widok oraz zrezygnować z wcześniej przygotowanego.
