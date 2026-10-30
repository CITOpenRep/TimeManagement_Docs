---
title: Handleiding voor App-vertaling en lokalisatie
sidebar_label: App-vertaling
description: Een stapsgewijze handleiding voor bijdragers om de interface van de Time Management App te vertalen in verschillende talen.
---

# Handleiding voor App-vertaling en lokalisatie

Deze handleiding biedt stapsgewijze instructies voor het vertalen van de interface van de **Time Management App** zelf (de client-applicatie gebouwd met QML en Python) naar uw taal.

Het vertaalsysteem van de app is gebaseerd op **gettext**. Vertalers bewerken `.po` (Portable Object)-bestanden met vertaalparen, die automatisch worden gecompileerd naar binaire `.mo`/`.gmo`-bestanden tijdens het bouwproces.

---

## 1. Mappenstructuur en vertaalbestanden

Alle vertaalgerelateerde bestanden bevinden zich in de map `po/` in de root van de repository:

```text
timemanagement/
├── po/
│   ├── CMakeLists.txt        # Integratie van het bouwsysteem voor vertalingen
│   ├── ubtms.pot             # Vertaalsjabloon (bevat alle onvertaalde strings)
│   └── nl.po                 # Nederlands vertaalbestand (voorbeeld van de huidige vertaling)
```

* **`ubtms.pot`**: Het centrale sjabloonbestand dat rechtstreeks uit de codebase is geëxtraheerd. Het bevat alle originele Engelstalige strings.
* **`<locale_code>.po`**: Taalspecifieke vertaalbestanden (bijv. `nl.po` voor het Nederlands, `es.po` voor het Spaans). Dit is het bestand dat u maakt of aanpast.

---

## 2. Vereisten

Om bij te dragen aan de vertalingen, moeten de volgende hulpprogramma's geïnstalleerd zijn:

1. **Gettext Utilities**: Command-line hulpprogramma's om vertalingen te initialiseren, samen te voegen en te compileren.
   * **Ubuntu/Debian**:
     ```bash
     sudo apt update && sudo apt install gettext
     ```
2. **Teksteditor**: Een standaard teksteditor naar keuze (zoals VS Code, Vim, Gedit, enz.) om de vertaalbestanden te bewerken.
3. **Clickable**: De bouwtool voor de applicatie, gebruikt om uw vertaling lokaal te compileren en te testen. Zie de **Getting Started**-handleiding voor details over de configuratie.

---

## 3. Vertaalworkflow

### Stap 1: Het vertaalsjabloon (`ubtms.pot`) bijwerken
Voordat u met de vertaling begint, compileert u het project eenmalig om er zeker van te zijn dat het vertaalsjabloon `po/ubtms.pot` is bijgewerkt met de nieuwste strings uit de broncode:

```bash
clickable build
```
*Opmerking: Het CMake-bouwsysteem voert automatisch het doel voor de extractie van de vertaling uit en analyseert alle QML- en desktopbestanden om `po/ubtms.pot` bij te werken.*

### Stap 2: Uw vertaalbestand initialiseren of bijwerken

#### Optie A: Een nieuwe taal starten
Bepaal de tweeletterige taalcode (en optionele regio, bijv. `fr` voor Frans, `es` voor Spaans, `pt_BR` voor Braziliaans Portugees).
Navigeer naar de map `po/` en initialiseer het vertaalbestand met `msginit`:

```bash
cd po
msginit --locale=<locale_code> --input=ubtms.pot --output=<locale_code>.po
```
*Voorbeeld voor Spaans:*
```bash
msginit --locale=es --input=ubtms.pot --output=es.po
```

#### Optie B: Een bestaande taal bijwerken
Als u nieuwe strings vertaalt die zijn toegevoegd aan een bestaande vertaling (bijv. het Nederlandse `nl.po`), voeg dan het bijgewerkte sjabloon samen met het vertaalbestand met `msgmerge`:

```bash
cd po
msgmerge --update <locale_code>.po ubtms.pot
```
*Voorbeeld voor Nederlands:*
```bash
msgmerge --update nl.po ubtms.pot
```
Dit voegt eventuele nieuwe strings toe, markeert verwijderde strings als verouderd en markeert gewijzigde strings als `#, fuzzy` voor uw beoordeling.

---

### Stap 3: De strings vertalen
Open uw `<locale_code>.po`-bestand in uw teksteditor.

Vertaal voor elk item de bronstring (`msgid`) naar de vertaalde string (`msgstr`):

```po
msgid "Time Manager - Time Management Dashboard"
msgstr "Tijdbeheer - Dashboard Tijdbeheer"
```

#### Belangrijke regels & best practices:
1. **Behoud placeholders**: Laat parameters zoals `%1`, `%2` of `%3` intact. Ze vertegenwoordigen dynamische waarden die tijdens runtime worden ingevoegd.
   * *Voorbeeld*: `i18n.dtr("ubtms", "You have %1 new notification(s)")` -> `Je hebt %1 nieuwe melding(en)`
2. **Behoud escape sequences**: Tekens zoals `\n` (nieuwe regels) of `\t` (tabs) moeten in de vertaalde string behouden blijven.
3. **Verwijder fuzzy-vlaggen**: Als u een string bijwerkt die is gemarkeerd met `#, fuzzy`, verwijder dan de commentaarregel met `#, fuzzy` nadat u hebt gecontroleerd of de vertaling correct is. Anders compileert het niet.

---

### Stap 4: Uw vertaling lokaal testen

1. Bouw de applicatie met Clickable om het `.po`-vertaalbestand te compileren naar een binair `.mo`-bestand:
   ```bash
   clickable build
   ```
2. Voer de desktopversie van de applicatie uit met de gewenste taal geconfigureerd in de omgeving:
   ```bash
   LANG=<locale_code>.UTF-8 clickable desktop
   ```
   *Voorbeeld voor Nederlands:*
   ```bash
   LANG=nl_NL.UTF-8 clickable desktop
   ```
3. Controleer of alle vertaalde elementen correct in de interface verschijnen en of er geen lay-out- of tekstafkappingsproblemen zijn.

---

## 4. Richtlijnen voor ontwikkelaars (Strings markeren)

Als u code (QML) schrijft en wilt zorgen dat de tekst vertaald kan worden, gebruik dan de volgende patronen:

### In QML / JavaScript
* **Standaardvertalingen**:
  ```qml
  title: i18n.dtr("ubtms", "Settings")
  ```
* **Vertalen met argumenten**:
  ```qml
  text: i18n.dtr("ubtms", "Account [%1]").arg(accountName)
  ```
* **Meervoudsvormen**:
  Gebruik `i18n.tr` met meervoudsvormen bij het weergeven van hoeveelheden:
  ```qml
  // Syntaxis: i18n.tr(singular, plural, count)
  text: i18n.tr("You have %1 task", "You have %1 tasks", count).arg(count)
  ```

### In Desktop Entry bestanden (`ubtms.desktop.in`)
Voor desktopconfiguraties op systeemniveau geeft u de vertaalbare sleutels een prefix met een liggend streepje (underscore):
```desktop
_Name=Time Management
```
*Het bouwsysteem gebruikt `intltool` om deze desktop-sleutels te extraheren naar `ubtms.pot`.*

---

## 5. Uw bijdrage indienen (de PR maken)

Zodra u de vertalingen hebt getest en hebt gecontroleerd of het `.po`-bestand correct is, bent u klaar om een Pull Request (PR) in te dienen:

1. **Tijdelijke back-upbestanden opschonen**: Sommige editors maken tijdelijke back-upbestanden aan (bijv. `nl.po~` of `nl.po.bak`). Verwijder deze voordat u gaat committen.
2. **Een Git-branch maken**:
   ```bash
   git checkout -b translation/add-<locale_code>
   ```
3. **Stagen en committen**:
   ```bash
   git add po/<locale_code>.po
   git commit -m "translation: Add <Language_Name> translation"
   ```
4. **De branch pushen**:
   ```bash
   git push origin translation/add-<locale_code>
   ```
5. **De Pull Request openen**:
   * Navigeer naar de originele repository op GitHub.
   * Klik op **Compare & pull request**.
   * Vul het PR-sjabloon in. Zorg ervoor dat u de toegevoegde of bijgewerkte taal beschrijft en bevestig dat u de app lokaal hebt gebouwd en getest.
