---
title: Profiles & Account Isolation Technical Reference
sidebar_label: Profiles & Account Isolation
---

# Profiles & Account Isolation Technical Reference

The Profiles module handles user profile setups and provides local data isolation across multiple Odoo instances.

## Codebase Map

| Layer | Path | Purpose |
|---|---|---|
| **Active Instance / Account Switcher (UI)** | `qml/components/dialogs/AccountSelectorDialog.qml` | Provides the pop-up/dialog overlay used globally across pages to switch the current active Odoo account. It is instantiated globally as `accountPicker` in `qml/app/GlobalWidgets.qml`. |
| **Accounts List and Settings Management (UI)** | `qml/features/settings/pages/Settings_Accounts.qml` | Handles the creation, deletion, configuration list, and sync trigger actions for the different Odoo accounts. |
| **Logic & State** | `models/accounts.js` | Session validation and active instance token switching |

## Database Multi-Instance Isolation

The SQLite schema isolation uses a relational key `user_id` mapping to the active row in the `users` (accounts) table. 

### SQL Filter Strategy
Every data retrieval query executed by JavaScript models checks the current active user context from the global settings:

```sql
SELECT * FROM project_task_app 
WHERE user_id = (SELECT value FROM app_settings WHERE key = 'active_user_id');
```

This structure ensures that data from separate accounts/instances (e.g., Work vs Personal) is segregated, avoiding data leaks between environments.
