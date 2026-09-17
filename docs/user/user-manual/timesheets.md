---
title: Timesheet 
sidebar_label: Timesheet  
description: Learn how to use the Timesheet module to record daily working hours, track effort across projects, and manage manual or automated timers.
---

# Timesheet

The **Timesheet** module is used to record, manage, and monitor the time spent on projects, tasks, and daily work activities within the Time Management App.

This module helps users:
* Track daily working hours.
* Record effort spent on tasks and projects.
* Maintain accurate work logs to improve productivity tracking.
* Support reporting and billing processes.
* Monitor time utilization across teams and projects.

---

## Accessing the Timesheet Module
To open the **Timesheet** section:
1. Click the **Kebab Menu** icon from the top-left corner.
2. Select **Timesheet** from the sidebar navigation.

---

## Timesheet Screen Overview
The screen is divided into the following sections:
1. Header Section (Add Icon, Back Navigation, Search Icon).
2. Timesheet Filter Tabs.
3. Timesheet Overview Panel.
4. Timesheet Details Panel.
5. Global Floating Timer Widget.
6. Swipe Actions.
7. Floating Action Button (FAB).

### Timesheet Filter Tabs & DaySelector
* **All**: Displays all timesheet entries.
* **Active**: Displays currently active or ongoing timesheets.
* **Draft**: Displays saved draft timesheets awaiting completion.
* **DaySelector Quick Filter**: The DaySelector retains a dedicated **Yesterday** quick filter (applicable to both Local and instance accounts), allowing users to conveniently review, log, or complete time entries from the previous day.

### Timesheet Overview Panel
Displays records in a list format, summarizing: Timesheet Title, Project Name, Task Info, Logged Hours, Entry Date, Assigned User, and Priority.

* **Cleaner Text & Readability**: Features polished description formatting and intelligent multi-line text truncation with ellipses (`...`), preventing text overflow and ensuring clean card presentation.

---

## Complete Timesheet Lifecycle for Local Accounts

Local Accounts support the complete, end-to-end timesheet lifecycle without requiring any remote server connection:

* **Full Local Timer Handling**: Users can **start**, **pause**, **save**, **draft**, and **auto-finalize** timesheets locally.
* **Zero Sync Errors**: Local timesheet actions execute cleanly without triggering remote server synchronization attempts or unexpected sync errors.
* **Seamless Status Transitions**: Like remote accounts, local timesheets flow smoothly through the full status lifecycle—from active timer tracking to draft saving and final completion.

## Global Floating Timer Widget
When a timer is initiated, a redesigned floating timer widget appears at the bottom of the screen to provide persistent, quick-access playback controls.

* **Cleaner Two-Line Layout**:
    * **Top Line**: Displays the active timesheet or task title alongside playback action buttons.
    * **Bottom Line**: Shows the status indicator dot, real-time elapsed timer (`HH:MM:SS`), and current tracking state (e.g., `• Paused` or running).
* **Native Dark Styling**: Styled in a modern, native dark card with rounded corners that remains visible across application views.
* **Upgraded Playback Action Buttons**: Features sharper vector icons for playback controls:
    * **Play / Resume**: Crisp vector play icon inside a prominent green circular button.
    * **Pause**: Sharp vector pause icon to pause tracking.
    * **Stop**: Bold vector square icon inside a prominent red circular button to end the timer and open the draft save dialog.

---

## Creating a New Timesheet Entry
Click the **Add Icon** or tap the **Floating Action Button (FAB)** and select **Create**. Fill in the information and click the **✔ Save Button**.

### Timesheet Creation Fields
* **Account, Project, Subproject, Task, Subtask**: Link the entry to specific organizational and work items to support accurate reporting.
* **Priority**: Importance level (Important/Urgent (1), Important/Not Urgent (2), Urgent/Not Important (3), Not Urgent/Not Important (4)).
* **Time Tracking Mode**:
    * **Manual**: Users manually enter working hours.
    * **Automated**: The system timer automatically tracks time.
* **Timer**: Features Start, Pause, and Stop buttons with upgraded sharp vector icons. Updates automatically while running and adds duration to the entry.
* **Date**: Working date for chronological tracking.
* **Description**: Detailed info about work completed, updates, resolved issues, and meetings attended.

---

## Viewing and Editing Timesheets
Select a timesheet from the overview list to display complete information in the Details Panel. To edit, open the entry in edit mode, update fields, and click Save.

---

## Timesheet Status Management
The application features improved timesheet status logic to ensure the interface strictly and accurately reflects running timers and workflow states:

* **Active**: Represents the single currently running timer. To prevent overlapping active timers, starting any new timer automatically switches any previously active timesheet to **Draft** status.
* **Draft**: Saved temporarily before final submission. Incomplete timers or previously running timers interrupted by a new timer are placed here for review and later completion.
* **Completed**: Finished and finalized entries ready for synchronization.

---

## Automated Timer Save as Draft Process
When using **Automated** tracking, clicking the **Stop Button** automatically opens the **Add Description to Timesheet** dialog box.

**Dialog Box Actions:**
* Displays total tracked time and allows users to enter work details.
* **Save as Draft Button**: Saves the tracked duration and description in **Draft** status. It is not finalized, but becomes visible under the Draft tab for future editing.
* **Cancel Button**: Closes the dialog without saving and discards the timer data.

### Completing a Draft Timesheet
Draft entries can be finalized directly from the overview screen:
1. Open the **Draft** tab.
2. Swipe the required entry toward the left.
3. Tap the **Mark as Done** icon.

A success message appears: *"Timesheet is now ready to be synced to Odoo."* The entry moves from the Draft tab to the All tab, changes to **Completed** status, and becomes available for Odoo synchronization.

---

## Timesheet Swipe Actions

**Right Swipe Action (Delete):**
* Reveals the **Delete** option to quickly remove unwanted or incorrect entries.

**Left Swipe Actions (Quick Controls):**
* **Edit**: Opens the timesheet in edit mode.
* **Start Timer**: Begins automated time tracking directly from the list. If another timer is already running elsewhere, that previous timesheet is automatically set to **Draft** status to eliminate conflicting overlapping timers.
* **Mark as Done**: Finalizes a draft timesheet for synchronization.