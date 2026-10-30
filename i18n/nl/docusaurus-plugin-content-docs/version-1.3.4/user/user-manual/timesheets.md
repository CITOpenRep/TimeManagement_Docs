---
title: Urenstaat 
sidebar_label: Urenstaat  
description: Leer hoe u de Urenstaat-module kunt gebruiken om dagelijkse werkuren te registreren, inspanningen over projecten bij te houden en handmatige of geautomatiseerde timers te beheren.
---

# Urenstaat

De module **Urenstaat** (Timesheet) wordt gebruikt voor het registreren, beheren en monitoren van de bestede tijd aan projecten, taken en dagelijkse werkactiviteiten binnen de Time Management-applicatie.

Deze module helpt gebruikers om:
* Dagelijkse werkuren bij te houden.
* Inspanningen besteed aan taken en projecten te registreren.
* Nauwkeurige werklogboeken bij te houden om de productiviteitsregistratie te verbeteren.
* Rapportage- en factureringsprocessen te ondersteunen.
* Tijdsbesteding over teams en projecten heen te monitoren.

---

## Toegang tot de Urenstaat-module
Om de sectie **Urenstaat** te openen:
1. Klik op het **Kebab Menu** icoon in de linkerbovenhoek.
2. Selecteer **Urenstaat** in de zijbalknavigatie.

---

## Overzicht van het Urenstaat-scherm
Het scherm is verdeeld in de volgende secties:
1. Kopsectie (Toevoegen-icoon, Terugnavigatie, Zoekicoon).
2. Urenstaatfilter Tabbladen.
3. Paneel Urenstaatoverzicht.
4. Paneel Urenstaatdetails.
5. Globale Zwevende Timer-widget.
6. Veegacties (Swipe Actions).
7. Zwevende Actieknop (FAB).

### Urenstaatfilter Tabbladen & DaySelector
* **Alles**: Toont alle urenstaat-invoeren.
* **Actief**: Toont momenteel actieve of lopende urenstaten.
* **Concept (Draft)**: Toont opgeslagen concepturenstaten die wachten op voltooiing.
* **DaySelector Snelfilter**: De DaySelector behoudt een specifiek snelfilter **Gisteren** (toepasbaar voor zowel lokale als instantie-accounts), waarmee gebruikers eenvoudig tijdsinvoeren van de vorige dag kunnen bekijken, vastleggen of afronden.

### Paneel Urenstaatoverzicht
Toont gegevens in een lijstformaat, met een samenvatting van: Urenstaattitel, Projectnaam, Taakinformatie, Gelogde Uren, Invoerdatum, Toegewezen Gebruiker en Prioriteit.

* **Schone Tekst & Leesbaarheid**: Voorzien van verbeterde beschrijvingsopmaak en intelligente tekstafkapping over meerdere regels met beletseltekens (`...`), waardoor tekst niet buiten kaartgrenzen overloopt en overzichtelijk blijft.

---

## Volledige levenscyclus van urenstaten voor lokale accounts

Lokale accounts ondersteunen nu de complete levenscyclus van urenstaten zonder dat een externe serververbinding nodig is:

* **Volledig lokaal timerbeheer**: Gebruikers kunnen urenstaten lokaal **starten**, **pauzeren**, **opslaan**, **als concept bewaren** en **automatisch voltooien**.
* **Geen synchronisatiefouten**: Lokale urenstaatbewerkingen worden zuiver uitgevoerd zonder pogingen tot synchronisatie met een externe server of onverwachte netwerkfouten.
* **Vloeiende statusovergangen**: Net als bij externe accounts doorlopen lokale urenstaten de volledige statuscyclus: van actieve tijdregistratie tot opslaan als concept en definitieve afronding.

---

## Globale Zwevende Timer-widget
Wanneer een timer wordt gestart, verschijnt er een herontworpen zwevende timer-widget onderaan het scherm voor persistente, snelle toegang tot afspeelbediening.

* **Schoner Tweeregelig Ontwerp**:
    * **Bovenste Regel**: Toont de actieve urenstaat- of taaktitel naast de afspeelactieknoppen.
    * **Onderste Regel**: Toont de statusindicatorstip, de realtime verstreken timertijd (`UU:MM:SS`) en de huidige registratiestatus (bijv. `• Gepauzeerd` of actief).
* **Native Donkere Vormgeving**: Vormgegeven in een moderne, native donkere kaart met afgeronde hoeken die zichtbaar blijft op verschillende pagina's.
* **Opgewaardeerde Afspeelactieknoppen**: Bevat scherpere vectoriconen voor afspeelbediening:
    * **Afspelen / Hervatten**: Scherp vector-afspeelicoon in een opvallende groene ronde knop.
    * **Pauzeren**: Scherp vector-pauze-icoon om registratie tijdelijk te onderbreken.
    * **Stoppen**: Duidelijk vector-vierkant-icoon in een opvallende rode ronde knop om de timer te beëindigen en het opslaan-als-concept dialoogvenster te openen.

---

## Een Nieuwe Urenstaat-invoer Aanmaken
Klik op het **Toevoegen-icoon** of tik op de **Zwevende Actieknop (FAB)** en selecteer **Aanmaken** (Create). Vul de informatie in en klik op de **Opslaan-knop**.

### Velden voor het Aanmaken van een Urenstaat
* **Account, Project, Subproject, Taak, Subtaak**: Koppel de invoer aan specifieke organisatorische en werkitems om nauwkeurige rapportage te ondersteunen.
* **Prioriteit**: Belangrijkheidsniveau (Belangrijk/Dringend (1), Belangrijk/Niet Dringend (2), Dringend/Niet Belangrijk (3), Niet Dringend/Niet Belangrijk (4)).
* **Tijdregistratiemodus**:
    * **Handmatig (Manual)**: Gebruikers voeren werkuren handmatig in.
    * **Geautomatiseerd (Automated)**: De systeemtimer houdt de tijd automatisch bij.
* **Timer**: Bevat Start-, Pauze- en Stop-knoppen met opgewaardeerde scherpe vectoriconen. Wordt automatisch bijgewerkt tijdens het draaien en voegt de duur toe aan de invoer.
* **Datum**: Werkdatum voor chronologische registratie.
* **Beschrijving**: Gedetailleerde info over voltooid werk, updates, opgeloste problemen en bijgewoonde vergaderingen.

---

## Urenstaten Bekijken en Bewerken
Selecteer een urenstaat uit de overzichtslijst om de volledige informatie weer te geven in het Paneel Urenstaatdetails. Om te bewerken, opent u de invoer in de bewerkingsmodus, werkt u de velden bij en klikt u op Opslaan.

---

## Beheer van Urenstaatstatus
De applicatie bevat verbeterde logica voor de urenstaatstatus, zodat de interface strikt en nauwkeurig actieve timers en workflowfasen weerspiegelt:

* **Actief**: Vertegenwoordigt de enkele momenteel actieve timer. Om overlappende actieve timers te voorkomen, zet het starten van een nieuwe timer een eventueel eerder actieve urenstaat automatisch op de status **Concept (Draft)**.
* **Concept (Draft)**: Tijdelijk opgeslagen voorafgaand aan definitieve indiening. Onvolledige timers of actieve registraties die worden onderbroken door een nieuwe timer worden hier geplaatst voor latere afronding.
* **Voltooid (Completed)**: Afgeronde en definitieve invoeren die klaar zijn voor synchronisatie.

---

## Proces Geautomatiseerde Timer Opslaan als Concept
Bij gebruik van **Geautomatiseerde** registratie, opent een klik op de **Stop-knop** automatisch het dialoogvenster **Beschrijving toevoegen aan urenstaat** (Add Description to Timesheet).

**Dialoogvenster Acties:**
* Toont de totale geregistreerde tijd en stelt gebruikers in staat om werkdetails in te voeren.
* **Opslaan als Concept-knop (Save as Draft)**: Slaat de geregistreerde duur en beschrijving op in de status **Concept**. Het is niet definitief, maar wordt zichtbaar onder het Concept-tabblad voor toekomstige bewerking.
* **Annuleren-knop (Cancel)**: Sluit het dialoogvenster zonder op te slaan en verwijdert de timergegevens.

### Een Concepturenstaat Voltooien
Conceptinvoeren kunnen direct vanaf het overzichtsscherm worden afgerond:
1. Open het **Concept**-tabblad.
2. Veeg de gewenste invoer naar links.
3. Tik op het **✔ Markeren als Voltooid** icoon.

Er verschijnt een succesmelding: *"Urenstaat is nu klaar om gesynchroniseerd te worden met Odoo."* De invoer verplaatst zich van het Concept-tabblad naar het Alles-tabblad, verandert naar de status **Voltooid**, en komt beschikbaar voor Odoo-synchronisatie.

---

## Urenstaat Veegacties (Swipe Actions)

**Veeg naar Rechts Actie (Verwijderen):**
* Toont de optie **Verwijderen** (Delete) om ongewenste of onjuiste invoeren snel te verwijderen.

**Veeg naar Links Acties (Snelle Bediening):**
* **Bewerken**: Opent de urenstaat in bewerkingsmodus.
* **Timer Starten**: Begint direct vanuit de lijst met geautomatiseerde tijdregistratie. Als er al een andere timer elders loopt, wordt die eerdere urenstaat automatisch op de status **Concept** gezet om conflicterende timers te elimineren.
* **Markeren als Voltooid (Mark as Done)**: Rondt een concepturenstaat af voor synchronisatie.
