# Założenia sklepu Megashop

## Ogólne:

Produkt: **soki ekologiczne**

Główny podział:
* owocowe
* warzywane
* mieszane

## Elementy sklepu

### Strona główna

* Sekcja produktów polecanych. Przy każdym przeładowaniu strony wyświetlane w losowej koleności.
* Sekcja produktów ostatnio dodanych do sklepu.
* Sekcja produktów najczęściej kupowanych przez klientów.
* Licznik z łączną liczbą produktów dostępnych w sklepie.
* Baner w formie slidera z grafikami.

### Karta produktu

* Nazwa producenta - tekst
* Nazwa produktu - tekst
* Objętość - w mililitrach
* Rodzaj produktu: owocowy / warzywny / mieszany
* Stopień gęstości soku - w procentach
* Skład: lista ze składnikami soku
* Opis produktu - tekst
* Zdjęcia - galeria
* Rodzaj opakowania - plastik / szkło / karton
* Cena w złotówkach
* Liczba wyświetleń produktu

### Lista produktów

* Miniaturka zdjęcia głownego produktu
* Nazwa producenta
* Nazwa produktu
* Rodzaj produktu
* Stronicowanie listy produktów - tradycyjna paginacja
* Możliwość okeślenia ile produktów ma się wyświetlać na stronie
* Sortowanie: cena, gęstość, alfabetycznie, liczba wyświetleń
* Wyświetlenie liczby znalezionych prduktów według zadanych kryteriów

### Wyszukiwarka

* Producent - lista jednokrotnego wyboru
* Nazwa - pole tekstowe
* Objętosć - lista wielokrotnego wyboru
* Rodzaj - lista wielokrotnego wyboru
* Gęstość - w formie suwaka z możliwością określenia zakresu od do
* Skład - lista wielokrotnego wyboru (checkboxy?)
* Cena - dwa pola numeryczne od do

### Kontakt

* Krótka treść z danymi adresowymi itp
* Mapa (obojętnie jaka) z zaznaczonym pinem
* Krótki formularz kontaktowy

### Artykuły

* O nas
* Regulamin
* Polityka prywatności
* Cennik dostaw

### Porównywarka produktów

* Wyświetlenie tylko zdjęcia głownego produktu
* Wyświetlenie wszystkich atrybutów produktu

### Koszyk produktów

* Wyświetla produkty dodane do koszyka
* Tylko zdjęcie głowne
* Nazwa producenta
* Nazwa produktu
* Objętość
* Cena
* Liczba sztuk - z możliwością zmiany ilości
* Podsumowanie koszyka:
    * Suma ceny
    * Suma sztuk
* Możliwość usuwania produktu z koszyka

## Uwagi techniczne

### Ogólne

* Skład produktu ma być wyświetlany zawsze alfabetycznie.
* Grafiki dostarcza klient.
* Teksty na razie lorem ipsum.
* Listy (producenci, produkty itd.) dostarcza klient.
* RWD do 360px.
* Wsparcie dla przeglądarek Firefox, Chrome, Safari.
* Staramy się pisać kod zgodny z nomenkulaturą danej technologii i z ogólnie przyjetymi założeniami dotyczącymi czystego kodu.

### Frontend

* Angular 7+ (preferowane 8)
* Scss
* Bootstrap 4+

### Backend

* PHP 7.1+ (preferowane 7.3)
