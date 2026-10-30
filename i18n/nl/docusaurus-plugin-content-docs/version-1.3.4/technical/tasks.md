---
title: Taken Module Technische Referentie
sidebar_label: Takenmodule
---

# Taken Module Technische Referentie

De Takenmodule beheert werktaken, taakrelaties tussen ouders en kinderen, afstemming van fase/Kanban-status, toegewezen personen, deadlines en planning.

## Codebase-kaart

| Laag | Pad | Doel |
|---|---|---|
| **Frontend-UI** | `qml/features/tasks/` | Takenlijsten, details, bewerken en kanban-weergaven |
| **State & Logica** | `models/task.js` | JS-taakmodel, faseovergangslogica en filters |
| **Backend-service** | `src/sync_to_odoo.py` | Synchronisatiewerker die taakupdates en planningswijzigingen pusht |
| **D-Bus-interface** | `src/backend.py` | D-Bus-methoden voor taakmutaties en ophalen |

## Databaseschema

Taken en toegewezen personen worden lokaal opgeslagen in de volgende SQLite-tabellen:

### `project_task_app`
* `id` (INTEGER, primaire sleutel): unieke taak-ID.
* `name` (TEXT): Taaknaam.
* `project_id` (INTEGER): verwijst naar het bovenliggende project.
* `parent_id` (INTEGER): Verwijst naar bovenliggende taak (voor geneste subtaken).
* `date_deadline` (TEXT): Deadlinedatum van de taak (JJJJ-MM-DD).
* `description` (TEXT): Gedetailleerde taakbeschrijvingen (ondersteunt HTML).
* `stage_id` (INTEGER): Referenties `project_task_type_app`.
* `favorite` (INTEGER): Favoriete statusindicator.
* `planned_hours` (ECHT): geschatte uren.
* `user_ids` (TEXT): JSON-array van toegewezen gebruikers-ID's.

### `project_task_assignee_app`
Wijst taaktoegewezen personen toe aan res_users.
* `task_id` (INTEGER): Referentietaak.
* `user_id` (INTEGER): Verwijzingeninstantiegebruiker.

### `project_task_type_app`
Slaat taakfasen (Kanban-fasen) op.
* `id` (INTEGER, primaire sleutel): Taakfase-ID.
* `name` (TEXT): Fasenaam (bijvoorbeeld To Do, In uitvoering, Klaar).

---

## Synchronisatiemechanisme en netwerkprotocol

### Odoo XML-RPC-modeltoewijzing
* **Extern model**: `project.task` (taakentiteit), `project.task.type` (taakfasen)
* **Synchronisatierichting**: Bidirectioneel.

```mermaid
sequenceDiagram
    participant UI as QML Client
    participant DB as SQLite DB
    participant DN as Python Daemon
    participant OD as Odoo Server

    UI->>DB: Update Task Stage (e.g., drag and drop to Done)
    DN->>DB: Fetch dirty task status
    DN->>OD: XML-RPC write (project.task, stage_id)
    OD-->>DN: Confirm synchronization
    DN->>DB: Clear dirty tag
```

---

De frontend vraagt taken rechtstreeks op en werkt deze bij in de lokale SQLite-database met behulp van functies die zijn gedefinieerd in:

Pad: `models/task.js`

Waar de logica is gedefinieerd:
* `getTasksForAccount(accountId)`: Retourneert taken die zijn gekoppeld aan een bepaald account.
* `getAllTasksForAccount(accountId)`: Haalt alle taken op.
* `getAllTasksForAccountPaginated(accountId, limit, offset, dateFilter)`: Gepagineerde taaklader voor oneindig scrollen.
* `updateTaskStage(taskId, stageOdooRecordId, accountId)`: Zet de reguliere fase van een taak over.
* `updateTaskPersonalStage(taskId, personalStageOdooRecordId, accountId)`: Zet de persoonlijke/gebruikersfase van een taak over.
* `saveOrUpdateTask(data)`: Creëert/slaat een nieuw taakrecord op in SQLite als de eigenschap `record_id` niet is meegegeven in het ingevoerde `data`-object.
* `saveOrUpdateTask(data)` of `edittaskData(data)`: Verwerkt taakwijzigingen, inclusief het opnieuw plannen/bijwerken van de kolom `deadline` van het taakrecord.
