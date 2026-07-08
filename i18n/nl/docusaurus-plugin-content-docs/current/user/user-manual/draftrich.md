---
title: Conceptbeheerder & Rich Text Editor
sidebar_label: Conceptbeheerder & Rich Text Editor
description: Leer hoe de Conceptbeheerder gegevensverlies voorkomt door middel van functies voor automatisch herstel, en ontdek hoe u de Rich Text Editor kunt gebruiken voor uitgebreide opmaak en spraakdictatie.
---

# Conceptbeheerder & Rich Text Editor

Dit document beschrijft de belangrijkste functies die zijn ontworpen om gegevensinvoer te verbeteren en gegevensverlies binnen de applicatie te voorkomen, met specifieke aandacht voor de Conceptbeheerder (Draft Manager) en de Rich Text Editor.

---

## Melding Niet-opgeslagen Concepten (Conceptbeheerder)
De applicatie beschikt over een robuuste Conceptbeheerder om gegevensverlies bij taken, urenstaten, activiteiten en projectupdates te voorkomen.

### Herstel van Crashes en Niet-opgeslagen Sessies
* Bij het starten van de app kan een pop-up **Niet-opgeslagen Concepten Gevonden** (Unsaved Drafts Found) verschijnen als er niet-ingediend werk is.
* Deze pop-up stelt de gebruiker op de hoogte van niet-ingediend werk uit een vorige sessie (bijv. Urenstaten, Projectupdates).
* Het spoort de gebruiker aan om de betreffende formulieren te openen om hun wijzigingen te herstellen.
* Als de applicatie crasht of het apparaat wordt uitgeschakeld terwijl u actief een taak, projectupdate of activiteit aanmaakt, gaat de inhoud niet verloren. 
* Het opnieuw openen van het betreffende aanmaakformulier (of de specifieke verloren taak) zal automatisch alle eerder ingevoerde gegevens vooraf invullen.

### Wegnavigeren (Niet-opgeslagen Wijzigingen)
* Als u op de terug-navigatiepijl klikt terwijl u actief een item aanmaakt of bewerkt, verschijnt er een waarschuwingspop-up **Niet-opgeslagen Wijzigingen** (Unsaved Changes) om onbedoeld gegevensverlies te voorkomen.
* U krijgt drie opties voorgeschoteld:
    * **Opslaan (Save):** Slaat de huidige voortgang op.
    * **Verwerpen (Discard):** Verwijdert het niet-opgeslagen werk en navigeert weg.
    * **Annuleren (Cancel):** Sluit de pop-up zodat u verder kunt gaan met bewerken.

### Concept Urenstaten
* Niet-opgeslagen urenstaat-invoeren worden veilig opgeslagen in een speciaal **Concept** (Draft) tabblad binnen het Urenstaten-scherm.
* Deze onvolledige invoeren zijn duidelijk gemarkeerd met een oranje **CONCEPT** (DRAFT) label, waardoor u ze gemakkelijk kunt identificeren en hervatten.

---

## Rich Text Editor
Om uitgebreide opmaak voor beschrijvingen te bieden, bevat de applicatie een speciale Rich Text Editor voor Taken, Projectupdates en Activiteiten.

### Toegang tot de Editor
* Terwijl u het veld **Beschrijving** (Description) van een taak, projectupdate of activiteit bekijkt of bewerkt, tikt u op het **Uitbreiden (⤢)** icoon.
* Deze actie opent een "Beschrijving" pagina op volledig scherm, wat een afleidingsvrije omgeving biedt voor het opstellen van gedetailleerde inhoud.

### Opmaakhulpmiddelen
De editor beschikt over een bovenste werkbalk met verschillende opmaakopties om uw tekst op te maken:
* **Vet (B), Cursief (I), Onderstrepen (U), Doorhalen (S):** Standaard hulpmiddelen voor tekstbenadrukking.
* **Lettergrootte (bijv. 11pt):** Pas de grootte van de tekst aan.
* **Tekstkleur (A):** Pas verschillende kleuren toe om specifieke tekst te markeren.
* **Tekstuitlijning/Lijsten:** Maak alinea's op of maak lijsten met opsommingstekens/nummers voor een betere leesbaarheid.

### Spraakinvoer Integratie
* **Microfoon-icoon:** Bevindt zich uiterst links op de opmaakwerkbalk. Tikken op dit icoon activeert het geconfigureerde Spraakmodel, waardoor u tekst rechtstreeks in de rich text editor kunt dicteren zonder te typen.

### Wijzigingen Opslaan
* Zodra u klaar bent met bewerken, tikt u op de **Vinkje (✔)** knop in de rechterbovenhoek om uw wijzigingen op te slaan en ze toe te passen op het beschrijvingsveld.