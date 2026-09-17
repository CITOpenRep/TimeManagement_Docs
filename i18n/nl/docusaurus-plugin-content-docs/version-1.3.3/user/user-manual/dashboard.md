---
title: Dashboard
sidebar_label: Dashboard
description: Een overzicht van het Time Management App Dashboard, inclusief de Prioriteitenmatrix, tijdverdelingsgrafieken, de inklapbare navigatie-zijbalk en snelle navigatie voor projecten en taken.
---

# Dashboard

## Inleiding
Het **Dashboard** is het hoofdscherm van de Time Management App. Het biedt een snel overzicht van taken, projecten en tijdsverdeling op basis van prioriteit.

Dit scherm stelt gebruikers in staat om:
* Taken te identificeren die onmiddellijke aandacht vereisen.
* Werk efficiënt te organiseren.
* Tijd besteed aan activiteiten en projecten te monitoren.

---

## Dashboardoverzicht
Het dashboard bestaat uit de volgende hoofdonderdelen:
1. Kopsectie (Bovenbalk)
2. Inklapbare navigatie-zijbalk (Desktop)
3. Waarschuwing voor niet-opgeslagen concepten
4. Prioriteitenmatrix
5. Navigatietabbladen (Overzicht, Projecten, Taken)
6. Snelle actieknop

---

## Kopsectie
Bevindt zich bovenaan het scherm.

### Functies:
* **Menu-icoon:** Opent het navigatiemenu.
* **Accountnaam / Titel:** Toont "Dashboard" en het momenteel actieve datumbereikfilter (bijv. "Deze Maand").
* **Filtericoon (Schuifregelaars):** Opent het dropdownmenu voor het datumbereikfilter om de tijdsperiode van de weergegeven gegevens aan te passen.
* **Toevoegen-icoon (Klok met +):** Wordt gebruikt om snel een nieuwe urenstaat-invoer aan te maken.
* **Meldingsicoon:** Toont waarschuwingen en updates.
* **Info-icoon:** Biedt aanvullende informatie over de grafiekgids van het dashboard.

---

## Inklapbare navigatie-zijbalk

Voor convergente desktop- en tabletlay-outs biedt de applicatie een adaptieve **Inklapbare navigatie-zijbalk**:

* **Convergente ondersteuning voor desktop**: Optimaliseert grotere schermen, waardoor persistente navigatie over alle primaire applicatieweergaven gewaarborgd is (Dashboard, Urenstaten, Activiteiten, Mijn Taken, Alle Taken, Projecten, Projectupdates, Over Ons, Instellingen).
* **Compacte 8 GU-modus**: De zijbalk bevat een compacte **8 GU (Grid Unit)**-modus die inklapt tot een slanke pictogrammenbalk. Hierdoor blijft waardevolle schermruimte behouden voor split-views, takenlijsten en dashboardanalyses, terwijl elke module met één tik bereikbaar blijft.
* **Directe bedieningselementen in kop en voettekst**:
  * **Bovenste schakelknop (`≡`)**: Schakel snel tussen de volledige en compacte zijbalkmodus.
  * **Account wisselen**: Onderaan de compacte balk bevindt zich een speciaal gebruikersicoon om snel tussen actieve accounts te schakelen.
  * **Lokale schakelaar (Local Toggle)**: Schakel de lokale accountmodus direct in of uit vanaf de onderzijde van de zijbalk.
  * **Themabediening**: Met een zon/maan-icoon kan direct worden gewisseld tussen lichte en donkere thema's zonder naar Instellingen te hoeven gaan.

---

## Datumbereikfilter
Een filterfunctie waarmee gebruikers de tijdsperiode kunnen bepalen voor de gegevens die op het hele dashboard worden weergegeven.

* **Standaardweergave:** Standaard toont het dashboard gegevens voor **Deze Maand**.
* **Filteropties:** Door op het Filter-icoon in de kopsectie te klikken, wordt een vervolgkeuzemenu "Datumbereik" geopend met de volgende vooraf gedefinieerde opties:
    * Geen Filter (Alle Tijd)
    * Vandaag
    * Deze Week
    * Deze Maand
    * Dit Kwartaal
    * Dit Jaar
    * Aangepast Bereik...
* **Aangepast datumbereik:** Het selecteren van "Aangepast Bereik..." opent een speciaal dialoogvenster. Gebruikers kunnen een exacte tijdsperiode opgeven door een **Van:** datum en een **Tot:** datum te selecteren via de datumkiezers. Klikken op **Bereik Toepassen** werkt het dashboard bij naar deze aangepaste periode, terwijl **Annuleren** het dialoogvenster sluit zonder wijzigingen.

---

## Waarschuwing voor niet-opgeslagen concepten
Bij het starten van de app kan, indien er nog niet-verzonden werk is, een pop-up **Niet-opgeslagen concepten gevonden** verschijnen.
* Waarschuwt de gebruiker over niet-ingediend werk uit een vorige sessie (bijv. Urenstaten, Projectupdates).
* Vraagt de gebruiker om de betreffende formulieren te openen om de wijzigingen te herstellen.

---

## Prioriteitenmatrix
De Prioriteitenmatrix categoriseert taken op basis van urgentie en belang. Het is visueel georganiseerd met **URGENT** en **NIET URGENT** op de bovenste as, en **BELANGRIJK** en **NIET BELANGRIJK** op de zij-as.

### Categorieën:
* **Eerst Doen (Urgent & Belangrijk):** Taken die onmiddellijke aandacht vereisen (Rode tegel).
* **Vervolgens Doen (Niet Urgent & Belangrijk):** Belangrijke taken die kunnen worden ingepland (Blauwe tegel).
* **Later Doen (Urgent & Niet Belangrijk):** Taken die kunnen worden uitgesteld of gedelegeerd (Groene tegel).
* **Niet Doen (Niet Urgent & Niet Belangrijk):** Onnodige taken (Grijze tegel).

### Tijdweergave:
Elke categorie toont de totale bestede tijd (bijv. `98H`), wat gebruikers helpt de productiviteit en tijdstoewijzing voor het geselecteerde datumbereik te evalueren.

---

## Navigatietabbladen
Onder de Prioriteitenmatrix is het dashboard verdeeld in drie primaire tabbladen: **Overzicht**, **Projecten** en **Taken**.

### 1. Tabblad Overzicht
Toont visuele grafieken voor tijdregistratie.
* **Meest tijdrovende projecten (Ringdiagram):** Visuele weergave van de tijdsverdeling over projecten. Grotere segmenten geven een hoger tijdsverbruik aan.
* **Percentagewaarde:** Het exacte aandeel van de totale geregistreerde tijd dat aan dit specifieke project wordt toegeschreven (bijv. "51.8%").

### 2. Tabblad Projecten
Toont gedetailleerde informatie over projecten, samen met een algemeen totaal van de geregistreerde uren over alle projecten.
* **Projectgewijze bestede tijd (Staafdiagram):** Geeft de bestede tijd per project weer. Met knoppen voor **"Toon volgende 10" en "Toon minder"** onderaan kan de projectenlijst worden uitgebreid of ingekort.

### 3. Tabblad Taken
Een speciaal tabblad voor het beheren en bekijken van individuele taken.

* **Zoekbalk:** Maakt snel opzoeken van projecten mogelijk ("Zoek projecten...").
* **Sorteeropties:**
    * **Meeste Tijd:** Sorteren op hoogste tijd besteed.
    * **Taken:** Sorteren op aantal taken.
    * **A–Z:** Alfabetisch sorteren.
* **Projectenlijst:** Toont afzonderlijke projecten met hun specifieke taakaantallen, totale bestede tijd en een visuele voortgangsindicator.

**Weergave Projectdetails:**
Tikken op een specifiek project in de lijst navigeert naar een gedetailleerde weergave voor dat project, inclusief:
* Een samenvattingskop met `TOTAAL` tijd, `GEMIDDELDE` tijd, totale `TAKEN` en de `TOPTAAK`.
* Een staafdiagram dat de bestede tijd uitsplitst per taak binnen dat project.
* Een lijst van individuele taken met hun percentage van de projecttijd, totale uren en een navigatiepijl voor verdere details.

---

## Dashboard-analyse & Ondersteuning voor Lokale Accounts

De analyse-engine van het dashboard biedt volledige ondersteuning voor **Lokale Accounts**:

* **Lokale gegevensaggregatie**: Alle dashboardgrafieken—inclusief de tijdverdeling in de Prioriteitenmatrix, het ringdiagram (meest tijdrovende projecten), de projectgewijze staafdiagrammen en de taakstatistieken—berekenen en aggregeren meetwaarden direct vanuit de lokale SQLite-opslag.
* **Volledige offline onafhankelijkheid**: Metrieken en analyses voor lokale accounts worden realtime berekend en bijgewerkt zonder dat een actieve serververbinding of achtergrondsfeer vereist is.

---

## Snelle actieknop
Een zwevende actieknop (cyaan cirkel met een menu-icoon) bevindt zich in de rechterbenedenhoek van het scherm.

### Functies:
* Een nieuwe taak toevoegen.
* Een urenstaat-invoer aanmaken.
* Activiteit loggen.
