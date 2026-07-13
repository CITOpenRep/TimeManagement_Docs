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
1. Klik op het **Menu (☰)** icoon in de linkerbovenhoek.
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
* **Synchronisatie-icoon (🔄)**: Vernieuw of synchroniseer het account handmatig.
* **Selectievakje**: Activeer of selecteer een specifiek account.
* **Toevoegen-knop (➕)**: Voeg een nieuw account toe.

---

## Een Nieuw Account Toevoegen
Klik op het **(➕)** icoon om een nieuw account toe te voegen.

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
* **URL**: Voer de server-URL in. Voorbeeld: `https://tma.onestein.eu/`.

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
* **Wachtwoord**: Voer uw accountwachtwoord in. Gebruik de zichtbaarheidsschakelaar (👁) om het wachtwoord te bekijken of te verbergen.

### Synchronisatievoorkeuren
Met deze sectie kunt u bepalen hoe gegevenssynchronisatie werkt.

**Opties:**
* **Aangepaste Synchronisatie-instellingen (Schakelaar)**
    * Indien ingeschakeld: U kunt aangepast synchronisatiegedrag definiëren.
    * Indien uitgeschakeld: Het systeem gebruikt standaardinstellingen (Synchronisatie-interval: ~15 minuten; Richting: Tweerichtingssynchronisatie waarbij gegevens zowel worden verzonden als ontvangen).

### Accountinstelling Voltooien
Na het invullen van alle vereiste velden:
1. Klik op de **✔ (Opslaan/Bevestigen)** knop in de rechterbovenhoek.
2. Het systeem zal: Inloggegevens valideren, verbinding maken en het account toevoegen aan de lijst met Gekoppelde Accounts.

### Gedrag Na Instelling
Zodra het account succesvol is aangemaakt:
* Verschijnt het onder **Gekoppelde Accounts**.
* Kunt u het activeren via het selectievakje en het handmatig synchroniseren via het 🔄 icoon.
* Kan de initiële synchronisatie automatisch beginnen.

---

## Accounts Beheren en Synchroniseren

### Schakelen Tussen Accounts
* Gebruik het **selectievakje** naast een account om deze te activeren.
* Er mag slechts één account tegelijk actief zijn.
* Het actieve account bepaalt waar uw gegevens worden gesynchroniseerd en opgeslagen.

### Een Account Synchroniseren
* Klik op het **Synchronisatie (🔄)** icoon naast een account.
* Het systeem haalt de nieuwste gegevens op en werkt taken, projecten, urenstaten, enz. bij.
* De status wordt automatisch bijgewerkt (bijv. *In Behandeling → Succesvol*).

### Accounts Beheren (Veegacties)
De lijst met **Gekoppelde Accounts** ondersteunt snelle acties met behulp van veegbewegingen, waardoor gebruikers accounts efficiënt kunnen beheren zonder extra schermen te openen.

**Doel:** Snellere toegang bieden tot veelvoorkomende acties, de bruikbaarheid verbeteren (vooral op touch-apparaten) en het aantal navigatiestappen verminderen.

**Beschikbare Acties:**
* **Veeg naar Rechts (→): Account Bewerken**
    * Veeg een account-item naar **rechts** om de optie **Bewerken** te onthullen.
    * Gebruik dit om de instantie-URL bij te werken, inloggegevens te wijzigen en accountconfiguratie aan te passen.
* **Veeg naar Links (←): Opties voor Bekijken & Verwijderen**
    * Veeg een account-item naar **links** om twee actie-iconen te onthullen:
        1. **Bekijken**: Opent accountgegevens en toont configuratie- en verbindingsinformatie.
        2. **Verwijderen**: Verwijdert het account uit de app.

---

## Meldingen
De sectie **Meldingen** regelt hoe en wanneer de applicatie u waarschuwt, zodat u op de hoogte blijft van belangrijke updates in uw workflow.

### Meldingen Bekijken en Ermee Interageren
Eenmaal ingeschakeld, kunt u via meerdere meldingskanalen op de hoogte blijven van uw werk:

* **In-App Dashboard:** Tik op het **Bel-icoon (🔔)** in de bovenste koptekst van het dashboard. Dit opent een speciaal Meldingenpaneel waar u recente waarschuwingen kunt bekijken, tijdstempels kunt zien (bijv. "4m geleden"), kunt overschakelen naar een "Synchronisatie" (Sync) tabblad, of de knop **Alles Wissen** (Clear All) kunt gebruiken om ze te negeren.
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
Met de instellingen voor het **Spraakmodel (Bèta)** kunt u rechtstreeks tekst dicteren in de app met behulp van de microfoon van uw apparaat. Omdat de verwerking lokaal op uw apparaat plaatsvindt, blijven uw spraakgegevens volledig privé en is er geen internetverbinding vereist na de initiële download van het model.

Eenmaal geconfigureerd, is het spraakinvoer-icoon beschikbaar in de beschrijvingsvelden van taken, urenstaten, activiteiten en projectupdates. 

### Aan de Slag
* Zorg ervoor dat u de schakelaar **"Spraakinvoer Inschakelen"** (Enable Voice Input) hebt ingeschakeld onder het instellingenscherm Spraakmodel (Bèta).

### Fasen van Spraakfunctie
Bij het dicteren in een beschrijvingsveld:
* Wanneer u op het spraak-icoon klikt, toont het **Starten** (Starting), vervolgens **Voorbereiden** (Preparing). 
* Begin pas te spreken zodra het **Luisteren** (Listening) toont. 
* Wanneer gestopt, toont het **Verwerken** (Processing) met een gele balk.

### Automatische Stop & Limieten
* Als u gedurende 7 seconden niet spreekt, stopt het spraak-icoon automatisch. 
* De maximale duur voor een enkele opname is 5 minuten.

### Downloads Beheren
* Controleer uw internetverbinding voordat u een bestand downloadt. 
* Onder **Beschikbaar voor Download** (Available For Download) vindt u verschillende spraakmodellen. Grotere modellen bieden een hogere nauwkeurigheid, maar vereisen meer apparaatgeheugen en ruimte. Kleinere modellen zijn sneller en gebruiken minder bronnen, maar zijn mogelijk minder nauwkeurig.
* Tijdens het downloaden ziet u de knoppen **Laden** (Loading, aan het downloaden), **Pauze** en **Annuleren**. Door te pauzeren of de internetverbinding te verliezen, blijft uw voortgang behouden, zodat u later vanaf deze pagina kunt hervatten. Annuleren verwijdert de gedeeltelijke download.
* Zodra het spraakmodel is gedownload, selecteert u het gewenste model uit de lijst met **Geïnstalleerde Modellen** (Installed Models). 
* **Belangrijk:** Zelfs als er slechts één model is geïnstalleerd, is het selecteren van het model verplicht. Het geselecteerde model wordt weergegeven in **vetgedrukte** tekst, met een vinkje aan de rechterkant.

### Compatibiliteit & Fouten
* Een rood waarschuwingsicoon geeft aan dat het model onverenigbaar is met uw apparaat (meestal vanwege RAM-limieten), maar u kunt nog steeds proberen het te downloaden. Erop klikken toont een waarschuwing waarbij u kunt kiezen tussen "Annuleren" of "Toch Downloaden" (Download Anyway).

### Modellen Verwijderen
* Om een geïnstalleerd model te verwijderen, veegt u de naam ervan naar links en klikt u op het verwijder-icoon.