---
title: Urenstaten Module Technische Referentie
sidebar_label: Module urenstaten
---

# Urenstaten Module Technische Referentie

De urenstatenmodule regelt de werkurenregistratie, het uitvoeren van taaktimers, de persistentie van de achtergrondtimer en de synchronisatie van Odoo-urenstateninvoer.

## Codebase-kaart

| Laag | Pad | Doel |
|---|---|---|
| **Frontend-UI** | `qml/features/timesheets/` | Loglijst, handmatige invoerformulieren en timer-overlays |
| **State & Logica** | `models/timesheet.js` | JS-urenregistratiedatabasebindingen en logica voor handmatige logboekregistratie |
| **Timerservice** | `models/timer_service.js` | JS-timerwerker die de status, meldingen en tikken coördineert |
| **Backend-service** | `src/sync_to_odoo.py` | Synchroniseer werknemer die urenstaatgegevens pusht |
| **D-Bus-interface** | `src/backend.py` | D-Bus-methoden die urenstaatregistratie en actieve timerstatus blootleggen |

## Databaseschema

Urenstaatgegevens worden lokaal opgeslagen in de volgende SQLite-tabel:

### `account_analytic_line_app`
* `id` (INTEGER, primaire sleutel): unieke analytische regel-ID.
* `name` (TEKST): Beschrijving/Notities vastgelegd door de gebruiker.
* `date` (TEXT): Datum van werkregistratie (JJJJ-MM-DD).
* `unit_amount` (REAL): bestede uren (weergegeven als decimaal, bijvoorbeeld 1,5 uur = 1u 30m).
* `project_id` (INTEGER): verwijst naar het bovenliggende project.
* `task_id` (INTEGER): verwijst naar de bovenliggende taak.
* `user_id` (INTEGER): Verwijst naar de gebruiker die de urenstaat invoert.
* `eisenhower_priority` (TEXT): Prioriteitsschaal (matrix Dringend/Belangrijk).
* `sync_dirty` (INTEGER): Vlag voor lopende externe synchronisatie (0 = Schoon, 1 = Vuil).

---

## Synchronisatiemechanisme en netwerkprotocol

### Odoo XML-RPC-modeltoewijzing
* **Model op afstand**: `account.analytic.line` (Odoo-urenstaten)
* **Synchronisatierichting**: Bidirectioneel.

```mermaid
sequenceDiagram
    participant UI as QML Client
    participant DB as SQLite DB
    participant DN as Python Daemon
    participant OD as Odoo Server

    UI->>DB: Log hours manually or via stopped Timer
    DN->>DB: Scan for sync_dirty = 1 records
    DN->>OD: XML-RPC create (account.analytic.line)
    OD-->>DN: Return remote database ID
    DN->>DB: Update local record ID and set sync_dirty = 0
```

---

## Timerservice en doorzettingsvermogen

De actieve timerstatus wordt bepaald door `models/timer_service.js` en blijft bestaan ​​na het sluiten van apps.
* Wanneer een timer start, wordt de tijdstempel `start_time` naar de lokale opslag geschreven.
* Zelfs als de gebruikersinterface crasht of sluit, controleert de Python-daemon de lopende timerstatus bij het opstarten en berekent de verstreken tijd met behulp van systeemklokverschillen.

---

Urenstaat-operaties: `models/timesheet.js`

Timer-operaties: `models/timer_service.js`

Waar de logica is gedefinieerd:
* `saveTimesheet(data)`: Slaat een nieuw urenstaatrecord op / voegt dit toe in SQLite.
* `createTimesheet(instance_id, userid)`: Instantieert een nieuw leeg urenstaatrecord.
* `isRunning()`: Controleert of de timer actief is.
* `getActiveTimesheetId()`: Haalt de ID van de actieve urenstaat op.
* `getStartTime()`: Haalt het starttijdstip (timestamp) van de timer op.
* `getElapsedTime(format)`: Berekent en formatteert de huidige verstreken trackingduur.
* `stop()`: Stopt de actieve timer, berekent de verstreken trackingtijd, werkt de SQLite-urenstateninvoer bij met behulp van `Model.updateTimesheetWithDuration(...)` en wijzigt de status hiervan.
