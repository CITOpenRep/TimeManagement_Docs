---
title: Instellingen  
sidebar_label: Instellingen  
description: Een uitgebreide gids voor de Instellingen-module. Ontdek hoe u externe accounts kunt koppelen, pushmeldingen en werktijden kunt beheren, tweerichtings-achtergrondsynchronisatie kunt inschakelen en Spraakmodellen kunt installeren voor tekstdictatie.
---

# Instellingen

De sectie **Instellingen** stelt gebruikers in staat om de applicatie naar hun voorkeuren te configureren en functies op systeemniveau te beheren, zoals gekoppelde accounts, meldingen, synchronisatie en weergave.

Deze sectie is vooral nuttig voor nieuwe gebruikers om hun ervaring te personaliseren en ervoor te zorgen dat de app naadloos samenwerkt met externe systemen.

---

## Toegang tot Instellingen
Om **Instellingen** te openen:
1. Klik op het **Kebab-menu** icoon in de linkerbovenhoek.
2. Selecteer **Instellingen** in de zijbalknavigatie.

Het Instellingenscherm is verdeeld in meerdere configureerbare secties.

---

## Overzicht Instellingen
De Instellingen-module bevat de volgende opties:
1. Gekoppelde Accounts (Connected Accounts)
2. Meldingen (Notifications)
3. Achtergrondsynchronisatie (Background Sync)
4. Thema-instellingen (Theme Settings)
5. Spraakmodel (Bèta) (Voice Model)

Elke optie wordt hieronder in detail uitgelegd.

---

## Gekoppelde Accounts
De sectie **Gekoppelde Accounts** stelt gebruikers in staat om meerdere omgevingen of instanties (zoals lokale, test- of productiesystemen) te koppelen en te beheren.

### Doel:
* Integratie met verschillende servers of omgevingen mogelijk maken.
* Schakelen tussen meerdere accounts toestaan.
* Synchronisatie over systemen beheren.

### Belangrijkste Elementen:
* **Accountlijst**: Toont alle geconfigureerde accounts.
* **Accounttype Indicator**: Toont of het een Lokale of Serverinstantie is.
* **Instantie-URL**: Toont de link naar de verbonden server.
* **Statusindicator**:
    * *In Behandeling (In Progress)*: Synchronisatie of verbinding is bezig.
    * *Succesvol (Successful)*: Verbinding is actief en werkt.
* **Synchronisatie-icoon**: Vernieuw of synchroniseer het account handmatig.
* **Selectievakje**: Activeer of selecteer een specifiek account.
* **Toevoegen-knop**: Voeg een nieuw account toe.

---

## Een Nieuw Account Toevoegen
Klik op het pluspictogram om een nieuw account toe te voegen.

### Secties in het scherm "Account Aanmaken" (Create Account):
1. Accountgegevens (Account Details)
2. Serververbinding (Server Connection)
3. Inloggegevens (Credentials)
4. Synchronisatievoorkeuren (Sync Preferences)

Elke sectie moet zorgvuldig worden ingevuld om een succesvolle verbinding te garanderen.

### Accountgegevens
Deze sectie bepaalt hoe het account wordt weergegeven binnen de applicatie.

**Velden:**
* **Accountnaam**: Voer een herkenbare naam in (bijv. *Werkaccount*, *Testserver*). Deze naam helpt het account te identificeren bij het schakelen tussen meerdere accounts.

### Serververbinding
Deze sectie wordt gebruikt om de app met uw server te verbinden.

**Velden:**
* **URL**: Voer de server-URL in. Voorbeeld: `https://cit-services.in/`.

Na het invoeren van de URL, klikt u op **Databases Ophalen** (Fetch Databases).

### Databases Ophalen
Klikken op **Databases Ophalen** start een proces om beschikbare databases van de opgegeven server op te halen.

**Systeemgedrag:**
* De app maakt verbinding met de server.
* Er opent een nieuw scherm of dialoogvenster.
* Een lijst met beschikbare databases wordt weergegeven.

**Vereiste Gebruikersacties:**
Op het databaseselectiescherm:
* Bekijk de lijst met beschikbare databases.
* Selecteer de juiste database.
* Indien vereist, voer handmatig de **Databasenaam** in.

**Opmerkingen:**
* Als er geen databases verschijnen: Controleer de server-URL, controleer de internetverbinding en zorg ervoor dat de server toegankelijk is.
* Als er meerdere databases in de lijst staan: Kies de juiste database op basis van uw omgeving.

Zodra geselecteerd, bevestig en keer terug naar het scherm voor accountinstellingen.

### Databasenaam
Na het ophalen van databases:
* De geselecteerde databasenaam wordt automatisch ingevuld of moet handmatig worden ingevoerd.
* Zorg ervoor dat de juiste database is geselecteerd voordat u doorgaat.

### Inloggegevens
Deze sectie wordt gebruikt om uw account te verifiëren.

**Velden:**
* **Gebruikersnaam**: Voer uw inlog-gebruikersnaam in.
* **Verbinden Met**: Verbind Met Wachtwoord of API-sleutel (Connect With Password or API Key).
* **Wachtwoord**: Voer uw accountwachtwoord in. Gebruik de zichtbaarheidsschakelaar om het wachtwoord te bekijken of te verbergen.

### Synchronisatievoorkeuren
Met deze sectie kunt u bepalen hoe gegevenssynchronisatie werkt.

**Opties:**
* **Aangepaste Synchronisatie-instellingen (Schakelaar)**
    * Indien ingeschakeld: U kunt aangepast synchronisatiegedrag definiëren.
    * Indien uitgeschakeld: Het systeem gebruikt standaardinstellingen (Synchronisatie-interval: ~15 minuten; Richting: Tweerichtingssynchronisatie waarbij gegevens zowel worden verzonden als ontvangen).

### Accountinstelling Voltooien
Na het invullen van alle vereiste velden:
1. Klik op de Opslaan/Bevestigen knop in de rechterbovenhoek.
2. Het systeem zal: Inloggegevens valideren, verbinding maken en het account toevoegen aan de lijst met Gekoppelde Accounts.

### Gedrag Na Instelling
Zodra het account succesvol is aangemaakt:
* Verschijnt het onder **Gekoppelde Accounts**.
* Kunt u het activeren via het selectievakje en het handmatig synchroniseren via het icoon.
* Kan de initiële synchronisatie automatisch beginnen.

---

## Accounts Beheren en Synchroniseren

### Schakelen Tussen Accounts
* Gebruik het **selectievakje** naast een account om deze te activeren.
* Er mag slechts één account tegelijk actief zijn.
* Het actieve account bepaalt waar uw gegevens worden gesynchroniseerd en opgeslagen.

### Een Account Synchroniseren
* Klik op het Synchronisatie  icoon naast een account.
* Het systeem haalt de nieuwste gegevens op en werkt taken, projecten, urenstaten, enz. bij.
* De status wordt automatisch bijgewerkt (bijv. *In Behandeling → Succesvol*).

### Zwevende Synchronisatiewidget & Live Voortgangsindicator
Tijdens actieve synchronisatie (handmatig of op de achtergrond) verschijnt er een herontworpen zwevende synchronisatiewidget onderaan het scherm:
* **Native Donkere Vormgeving**: Wordt weergegeven als een strakke, native donkere zwevende kaart met afgeronde hoeken.
* **Live Voortgangspercentage**: Biedt een realtime numerieke voortgangsweergave (bijv. `30%`), zodat u de overdrachtstatus in één oogopslag kunt volgen.
* **Vloeiendere Animaties**: Uitgerust met een geanimeerd synchronisatie-icoon en een soepele voortgangsbalk onderaan die dynamisch meeloopt naarmate items worden gesynchroniseerd.
* **Gedetailleerde Procesdetails**: Toont de specifieke synchronisatiefase of het entiteitstype dat momenteel wordt verwerkt (bijv. `Syncing CIT` - `Syncing from Server project.task`).

### Accounts Beheren (Veegacties & Opschoning)
De lijst met **Gekoppelde Accounts** ondersteunt snelle acties met behulp van veegbewegingen om accounts efficiënt te beheren.

> [!NOTE]
> **Opschoning van acties voor lokale accounts**: Veegacties zijn niet beschikbaar voor het ingebouwde **Lokale Account**. Zowel voorwaartse (naar rechts vegen) als achterwaartse (naar links vegen) acties zijn uitsluitend beschikbaar voor **externe of instantie-accounts**, waardoor de lokale kernomgeving beschermd blijft tegen per ongeluk wijzigen of verwijderen.

**Beschikbare Acties (Alleen Externe & Instantie-accounts):**
* **Veeg naar Rechts (Voorwaartse Actie): Account Bewerken**
    * Veeg een account-item naar **rechts** om de optie **Bewerken** te onthullen.
    * Gebruik dit om de instantie-URL bij te werken, inloggegevens te wijzigen en accountconfiguratie aan te passen.
* **Veeg naar Links (Achterwaartse Acties): Opties voor Bekijken & Verwijderen**
    * Veeg een account-item naar **links** om twee actie-iconen te onthullen:
        1. **Bekijken**: Opent accountgegevens en toont configuratie- en verbindingsinformatie.
        2. **Verwijderen**: Verwijdert het externe account uit de app.

---

## Meldingen
De sectie **Meldingen** regelt hoe en wanneer de applicatie u waarschuwt, zodat u op de hoogte blijft van belangrijke updates in uw workflow.

### Meldingen Bekijken en Ermee Interageren
Eenmaal ingeschakeld, kunt u via meerdere meldingskanalen op de hoogte blijven van uw werk:

* **In-App Dashboard:** Tik op het Bel-icoon  in de bovenste koptekst van het dashboard. Dit opent een speciaal Meldingenpaneel waar u recente waarschuwingen kunt bekijken, tijdstempels kunt zien (bijv. "4m geleden"), kunt overschakelen naar een "Synchronisatie" (Sync) tabblad, of de knop **Alles Wissen** (Clear All) kunt gebruiken om ze te negeren.
* **Apparaat Meldingenlade:** Waarschuwingen verschijnen automatisch in de standaard meldingenlade van uw telefoon.
* **Vergrendelscherm & Banners:** U blijft meldingen ontvangen, zelfs als uw telefoon is vergrendeld. Bij gebruik van het apparaat kunnen waarschuwingen ook verschijnen als bannermeldingen boven de telefoonlade voor onmiddellijke zichtbaarheid.
* **Snelle Navigatie:** Door op een melding uit de lade van uw telefoon of het vergrendelscherm te tikken, wordt de app naadloos geopend en wordt u direct naar de bijbehorende pagina geleid om de details te bekijken.
* **Meldingstypes:** Het systeem waarschuwt u voor verschillende gebeurtenissen, waaronder:
    * **Projectupdates**
    * **Activiteitenmeldingen**

### Pushmeldingen
Stelt u in staat te bepalen of de applicatie rechtstreeks waarschuwingen naar uw apparaat kan sturen.

**Belangrijkste Optie:**
* **Meldingen Inschakelen (Schakelaar)**
    * **AAN**: De app stuurt realtime meldingen voor updates zoals taakwijzigingen, projectupdates en activiteitenlogboeken.
    * **UIT**: Alle pushmeldingen worden uitgeschakeld.

**Wanneer Inschakelen:** Als u direct op de hoogte wilt blijven van updates, of als u afhankelijk bent van herinneringen voor taak-/projectupdates en activiteiten.
**Wanneer Uitschakelen:** Als u de voorkeur geeft aan minder onderbrekingen of als u updates alleen handmatig in de app controleert.

### Meldingenschema
Stelt u in staat om te bepalen *wanneer* meldingen worden afgeleverd, zodat deze alleen aankomen tijdens uw voorkeurswerktijden. Dit is vooral handig voor het behouden van een goede balans tussen werk en privé en het vermijden van meldingen buiten kantooruren.

**Schema Inschakelen:**
* **AAN**: Meldingen worden alleen verzonden tijdens de geconfigureerde dagen en uren.
* **UIT**: Meldingen kunnen op elk moment worden verzonden.

**Tijdzone:**
* Selecteer uw **Tijdzone** om ervoor te zorgen dat meldingen zijn afgestemd op uw lokale tijd. De standaardwaarde is meestal ingesteld op **Systeemstandaard** (System Default).

**Werkdagen:**
* Opties omvatten Maandag tot en met Zondag.
* Alleen geselecteerde dagen staan meldingen toe, terwijl niet-geselecteerde dagen alle meldingen blokkeren.

**Werktijden:**
* **Van**: Starttijd (bijv. 09:00).
* **Tot**: Eindtijd (bijv. 18:00).
* Meldingen worden alleen verzonden binnen het geselecteerde tijdsbestek.

**Voorbeeldconfiguratie (Standaard Werkschema):**
* Meldingen Inschakelen: AAN
* Schema Inschakelen: AAN
* Werkdagen: Maandag tot Vrijdag
* Werktijden: 09:00 tot 18:00
* *Resultaat:* U ontvangt alleen meldingen tijdens kantooruren op doordeweekse dagen.

---

## Achtergrondsynchronisatie
De functie **Achtergrondsynchronisatie** zorgt ervoor dat uw gegevens automatisch up-to-date blijven.

**Kenmerken:**
* Schakel automatische synchronisatie in.
* Stel de synchronisatiefrequentie in.
* Synchroniseer taken, urenstaten, projecten, projectupdates, enz. op de achtergrond.

**Voordelen:** Vermindert handmatige inspanning, houdt gegevens consistent over apparaten en accounts, en zorgt voor realtime updates.

### Overzicht Instellingen Achtergrondsynchronisatie
Dit scherm stelt u in staat om te configureren hoe en wanneer uw gegevens met de server worden gesynchroniseerd. Deze functie werkt op de achtergrond zonder dat handmatige tussenkomst vereist is.

**Belangrijkste Configuratie-opties:**
1. **AutoSync Inschakelen (Schakelaar)**
    * **AAN**: Automatische synchronisatie is ingeschakeld, en de app synchroniseert gegevens met vastgestelde intervallen.
    * **UIT**: Achtergrondsynchronisatie is uitgeschakeld, en gegevens moeten handmatig worden gesynchroniseerd.
2. **Synchronisatie-interval**
    * Bepaalt hoe vaak de applicatie automatische synchronisatie uitvoert.
    * Voorbeeldopties: 5 minuten, 15 minuten, 30 minuten of meer.
    * Aanbeveling: Gebruik **5–15 minuten** voor actieve gebruikers; gebruik langere intervallen om batterij en datagebruik te besparen.
3. **Synchronisatierichting**
    * **Beide (Op & Neer)** *(Standaard)*: Uploadt lokale wijzigingen naar de server en downloadt updates van de server.
    * **Alleen Uploaden (Op)**: Stuurt lokale gegevens naar de server, maar haalt geen updates op.
    * **Alleen Downloaden (Neer)**: Haalt updates van de server op, maar uploadt geen lokale wijzigingen.
4. **Achtergrond-daemon Herstarten**
    * Stelt u in staat om de achtergrondsynchronisatie-service te herstarten. Gebruik dit als synchronisatie lijkt vast te lopen, na het wijzigen van synchronisatie-instellingen, of na het opnieuw verbinden van een account.

### Hoe Achtergrondsynchronisatie Werkt
Wanneer AutoSync is ingeschakeld:
1. De app draait een achtergrondservice.
2. Bij elk interval maakt het verbinding met het geconfigureerde account/server, uploadt het nieuwe of gewijzigde gegevens (taken, urenstaten, enz.), en downloadt het updates van de server.
3. Updates worden automatisch toegepast zonder gebruikersactie.

**Best Practices:**
* Houd AutoSync ingeschakeld voor een naadloze ervaring.
* Gebruik een interval van 15 minuten voor uitgebalanceerde prestaties en batterijgebruik.
* Houd Synchronisatierichting = Beide tenzij u een specifieke behoefte heeft.
* Herstart de daemon als er synchronisatieproblemen optreden.

---

## Thema-instellingen
De sectie **Thema-instellingen** stelt gebruikers in staat om de visuele weergave van de applicatie aan te passen.

**Voordelen:** Verbetert de leesbaarheid, verhoogt het gebruikerscomfort bij langdurig gebruik en ondersteunt toegankelijkheidsvoorkeuren.

### Beschikbare Thema-opties
1. **Licht Thema (Light Theme)**: Heldere en strakke interface die lichte achtergronden met donkere tekst gebruikt. Geschikt voor goed verlichte omgevingen en gebruik overdag.
2. **Donker Thema (Dark Theme)**: Donkere achtergrond met lichtere tekst. Vermindert schermhelderheid en schittering.

### Hoe het Thema te Wijzigen
1. Selecteer **Thema-instellingen**.
2. Kies een van de beschikbare opties: Licht Thema of Donker Thema.
3. Het geselecteerde thema wordt direct toegepast.

**Systeemgedrag:**
* Het momenteel geselecteerde thema is gemarkeerd met een **vinkje-indicator (✔)**.
* Er kan slechts één thema tegelijk actief zijn.
* Themawijzigingen worden **direct** toegepast op alle schermen (herstarten of vernieuwen is niet nodig).
* Het geselecteerde thema wordt **automatisch opgeslagen** en blijft behouden in volgende sessies.

---

## Spraakmodel (Bèta)
De functie **Spraakmodel (Bèta)** stelt gebruikers in staat om tekst direct te dicteren in beschrijvingsvelden met meerdere regels in de applicatie, met behulp van de microfoon van hun apparaat. Ontworpen voor offline gebruik, waarbij alle spraak-naar-tekst verwerking lokaal op het apparaat van de gebruiker plaatsvindt zodra het benodigde spraakmodel is gedownload.

### Belangrijkste doelen
* **Handsfree invoer:** Biedt directe spraak-naar-tekst invoer in de belangrijkste workflowmodules.
* **Offline werking:** Functioneert na installatie van het model naadloos zonder actieve internetverbinding.
* **Beheer van systeembronnen:** Biedt configureerbare modelselecties die zijn afgestemd op de uiteenlopende geheugen- (RAM) en opslagcapaciteiten van apparaten.

---

## 2. Ondersteunde UI-velden

Zodra ingeschakeld en geconfigureerd, verschijnt het microfoonpictogram voor spraakinvoer automatisch in de beschrijvingsvelden van de volgende modules:
* **Taken-module** 
* **Urenstaten-module** 
* **Activiteiten-module** 
* **Projectupdates-module** 

---

## 3. Schermindeling & Navigatie

**Navigatiepad:** `Instellingen` > `Spraakmodel (Bèta)`

### 3.1 Knoppen in de koptekst
* **Info-pictogram :** Activeert de pop-up **"Over spraakmodellen"**. Deze pop-up bevat details over het privacybeleid (lokale verwerking), vergelijkingen van modelgroottes, dicteerfasen, automatische stoplimieten, regels voor modelselectie en richtlijnen voor verwijdering.
* **Zoek-pictogram :** Schakelt de zoekbalk in om de lijst met modellen onder *Beschikbaar om te downloaden* te filteren op taal of variant (bijv. "Engels (Indiaas)", "Engels (VS)").

### 3.2 Algemene schakelaars
* **Spraakinvoer inschakelen:** Hoofdschakelaar. Moet op **AAN** staan om microfoonpictogrammen weer te geven in ondersteunde beschrijvingsvelden van de applicatie.
* **Lage geheugenmodus:** Optimalisatieschakelaar voor apparaten met lagere specificaties om het geheugengebruik tijdens lokale verwerking te minimaliseren.

---

## 4. Levenscyclus van modelbeheer

### 4.1 Beschikbare modellen & Downloaden
1. **Zoeken & Filteren:** Gebruikers kunnen naar modellen zoeken op regio of taalnaam.
2. **Afwegingen per model:**
   * **Grotere modellen (> 2,5 GB):** Bieden een hogere nauwkeurigheid, maar verbruiken aanzienlijk meer RAM en opslagruimte op het apparaat.
   * **Kleinere modellen:** Bieden een snellere verwerking en een lager geheugengebruik met een iets lagere nauwkeurigheid.
3. **Downloadknoppen:**
   * **Starten:** Klikken op het downloadpictogram naast een model activeert een korte *"Download gestart"*-melding en toont een real-time voortgangsbalk (bijv. `Downloaden... 17%`).
   * **Pauzeren / Hervatten:** Bij verlies van de internetverbinding of het handmatig indrukken van **Pauze** blijft de gedeeltelijke downloadvoortgang behouden, zodat de gebruiker later vanaf hetzelfde scherm kan hervatten.
   * **Annuleren:** Drukken op de knop Annuleren activeert de pop-up *"Download geannuleerd"*, stopt de download en verwijdert alle gedeeltelijke gegevensbestanden van de lokale opslag.

### 4.2 Hardwarecompatibiliteit & Waarschuwingen
* **Controles van RAM-beperkingen:** Modellen die de aanbevolen hardwarespecificaties overschrijden, geven een rood **Waarschuwingspictogram** weer.
* **Waarschuwing bij downloaden:** Een poging om een incompatibel/groot model te downloaden, toont een waarschuwingsscherm dat wijst op mogelijke RAM-limieten. De gebruiker kan kiezen voor **Annuleren** of **Toch downloaden**.
* **Waarschuwing bij selectie:** Een poging om een geïnstalleerd model te activeren dat de hardwarelimieten overschrijdt, toont een vergelijkend scherm met *Modelgrootte vs. Apparaat RAM*, met de opties **Annuleren** of **Toch selecteren**.

### 4.3 Geïnstalleerde modellen & Actieve selectie
* **Verplichte activering:** Alleen het downloaden van een model is onvoldoende; expliciete activering is vereist, zelfs als er slechts één model is geïnstalleerd.
* **Visuele indicator:** Het momenteel actieve model wordt gemarkeerd met **vetgedrukte tekst** met een **vinkje** aan de rechterkant.
* **Model verwijderen:** Gebruikers kunnen een rij van een geïnstalleerd model naar links vegen en op het onthulde **Prullenbak / Verwijderen**-pictogram tikken om het modelbestand te verwijderen en opslagruimte vrij te maken.

---

## 5. Uitvoering dicteren & Workflow

### 5.1 Spraak-naar-tekst statussen

| Fase | Visuele indicator | Systeemgedrag | Vereiste gebruikersactie |
| :--- | :--- | :--- | :--- |
| **Initialisatie** | `Starten` | Wijst lokaal geheugen toe en laadt het model. | Wachten |
| **Voorbereiding** | `Voorbereiden` | Initialiseert de audio-opnamebuffer. | Wachten |
| **Actief luisteren** | `Luisteren` | Microfoon registreert actief spraakinvoer. | **Duidelijk spreken** |
| **Verwerken** | `Verwerken` (Gele balk) | Lokale verwerkingsengine zet audio om naar tekst. | Wachten |
| **Voltooiing** | Getranscribeerde tekst ingevoegd | Plakt de uitvoer in het geselecteerde beschrijvingsveld. | Tekst controleren / bewerken |

### 5.2 Systeembeperkingen & Automatiseringsregels
* **Automatische stop bij stilte:** Als er gedurende **7 opeenvolgende seconden** geen spraak wordt gedetecteerd, stopt de microfoon automatisch met luisteren en gaat over naar `Verwerken`.
* **Maximale sessieduur:** Een enkele dicteersessie is beperkt tot maximaal **5 aaneengesloten minuten**. Bij het bereiken van de limiet van 5 minuten stopt de opname automatisch en wordt de vastgelegde audio omgezet naar tekst.
* **Offline functionaliteit:** Teksttranscriptie functioneert volledig zonder actieve mobiele of wifi-verbinding zodra een actief model lokaal is geladen.