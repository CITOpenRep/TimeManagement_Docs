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
1. Klik op het **Menu (☰)** icoon in de linkerbovenhoek.
2. Selecteer **Urenstaat** in de zijbalknavigatie.

---

## Overzicht van het Urenstaat-scherm
Het scherm is verdeeld in de volgende secties:
1. Kopsectie (Toevoegen-icoon, Terugnavigatie, Zoekicoon).
2. Urenstaatfilter Tabbladen.
3. Paneel Urenstaatoverzicht.
4. Paneel Urenstaatdetails.
5. Veegacties (Swipe Actions).
6. Zwevende Actieknop (FAB).

### Urenstaatfilter Tabbladen
* **Alles**: Toont alle urenstaat-invoeren.
* **Actief**: Toont momenteel actieve of lopende urenstaten.
* **Concept (Draft)**: Toont opgeslagen concepturenstaten die wachten op voltooiing.

### Paneel Urenstaatoverzicht
Toont gegevens in een lijstformaat, met een samenvatting van: Urenstaattitel, Projectnaam, Taakinformatie, Gelogde Uren, Invoerdatum, Toegewezen Gebruiker en Prioriteit.

---

## Een Nieuwe Urenstaat-invoer Aanmaken
Klik op het **➕ Toevoegen-icoon** of tik op de **Zwevende Actieknop (FAB)** en selecteer **Aanmaken** (Create). Vul de informatie in en klik op de **✔ Opslaan-knop**.

### Velden voor het Aanmaken van een Urenstaat
* **Account, Project, Subproject, Taak, Subtaak**: Koppel de invoer aan specifieke organisatorische en werkitems om nauwkeurige rapportage te ondersteunen.
* **Prioriteit**: Belangrijkheidsniveau (Belangrijk/Dringend (1), Belangrijk/Niet Dringend (2), Dringend/Niet Belangrijk (3), Niet Dringend/Niet Belangrijk (4)).
* **Tijdregistratiemodus**:
    * **Handmatig (Manual)**: Gebruikers voeren werkuren handmatig in.
    * **Geautomatiseerd (Automated)**: De systeemtimer houdt de tijd automatisch bij.
* **Timer**: Bevat Start-, Pauze- en Stop-knoppen. Wordt automatisch bijgewerkt tijdens het draaien en voegt de duur toe aan de invoer.
* **Datum**: Werkdatum voor chronologische registratie.
* **Beschrijving**: Gedetailleerde info over voltooid werk, updates, opgeloste problemen en bijgewoonde vergaderingen.

---

## Urenstaten Bekijken en Bewerken
Selecteer een urenstaat uit de overzichtslijst om de volledige informatie weer te geven in het Paneel Urenstaatdetails. Om te bewerken, opent u de invoer in de bewerkingsmodus, werkt u de velden bij en klikt u op Opslaan.

---

## Beheer van Urenstaatstatus
* **Actief**: Momenteel lopend of onlangs bijgewerkt.
* **Concept (Draft)**: Tijdelijk opgeslagen voorafgaand aan definitieve indiening.
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
* **Timer Starten**: Begint direct vanuit de lijst met geautomatiseerde tijdregistratie; de invoer kan onder het Actief-tabblad verschijnen terwijl deze draait.
* **Markeren als Voltooid (Mark as Done)**: Rondt een concepturenstaat af voor synchronisatie.
