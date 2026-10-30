---
title: All Tasks
sidebar_label: All Tasks
description: A comprehensive guide to the Tasks module. Find out how to create and edit tasks, manage task stages, use swipe actions, and filter by assignees for efficient workload tracking.
---

# Tasks

The **Tasks** module helps users create, organize, assign, and track individual or all work items within the Time Management App.

Tasks are the core working units of the application and can be linked to projects, assignees, stages, priorities, and planned schedules.

This module enables users to:
* Create and manage daily work items.
* Assign responsibilities to team members.
* Track deadlines and overdue tasks.
* Organize tasks by stage and priority.
* Monitor workload efficiently and improve productivity.

---

## Accessing the Tasks Module
To open the **Tasks** section:
1. Click the **Kebab Menu** icon from the top-left corner.
2. Select **All Tasks** from the sidebar navigation.

The Tasks screen will open and display all available tasks.

---

## Tasks Screen Overview
The Tasks screen is divided into two main sections:
1. Tasks Overview Panel
2. Task Details Panel or create new task page

---

### Tasks Overview Panel (Updated Task Card UI)
The Tasks overview screen displays work items in a clean, high-density two-column card layout designed for fast scanning and subtask navigation:

* **Period Filter Tabs**: Quick filtering by date categories: **Today**, **This Week**, **This Month**, and **Later**.
* **Task Card Layout**:
  * **Left Side**:
    * **Task Title**: Prominently displayed title of the work item.
    * **Related Project Name**: Clear attribution to the parent project or subproject.
    * **Priority Star Rating**: A 3-star visual rating reflecting task urgency and importance.
    * **Workflow Stage Pill**: Color-coded rounded badge displaying the current stage (e.g., `Analysis`, `Done`, `Review`).
    * **Subtasks Drill-down Button**: For tasks containing subtasks, an interactive button (`Subtasks (N) >`) shows the subtask count and provides one-tap navigation directly to child items.
  * **Right Side**:
    * **Planned Hours**: Estimated effort (`Planned (H): N/A` or allocated time).
    * **Start Date & End Date**: Scheduled timeframe (`Start Date: YYYY-MM-DD`, `End Date: YYYY-MM-DD`).
    * **Overdue Indicator**: Prominent red text displaying exact overdue duration (e.g., `312 days overdue`, `55 days overdue`) when past the planned deadline.

---

### Task Details Panel
To create a new task, click on the `+` icon to open the new task entry form. 
In order to view the task details of an already created task, click on the corresponding task to display detailed information.

Users can create new tasks, edit existing tasks, assign users, set priorities, define stages, add descriptions, configure dates, and upload attachments.

---

## Creating a New Task
To create a task:
1. Open the **All Tasks** module.
2. Click the **Add Icon** from the top-right corner.
3. Fill in the required task details.
4. Click the **Save Button**.

### Task Creation Fields
* **Account**: Defines the connected account/environment (Remote Instance or Local).
* **Project & Subproject**: Associates the task with specific operational projects.
* **Parent Task**: Used to create child tasks under a larger task to improve workflow.
* **Assignees**: Defines the users responsible. You can select multiple users from the list and use the cross icon to unselect.
* **Task Name**: The primary, descriptive title of the work item.
* **Priority**: Importance level represented by a 3-star rating system.
* **Initial Stage**: Current workflow stage (Analysis, Design, Development, Testing, Review, Done).
* **Description**: Detailed information, objectives, and scope of work. Supports speech dictation.
* **Planned Hours**: Estimated time required (e.g., `01:00` = 1 Hour).

### Configured Default Global Task Stages
For **Local Accounts**, default global task stages (including *Analysis*, *Design*, *Development*, *Testing*, *Review*, and *Done*) are preconfigured and mapped automatically. When creating tasks under a Local Account, stages persist immediately and display accurately on task cards without needing server synchronization.

### Planned Dates Section
* **Date Range**: Quick scheduling presets (Today, This Week, Custom Range).
* **Start & End Date**: Selected using the date picker for scheduling and deadline tracking.
* **Deadline Section**: Define a final expected completion date to prioritize urgent work.

### Attachments Section
Upload files to centralize task-related resources and improve collaboration.

---

## Viewing and Editing Task Details
Selecting a task from the overview displays complete information (status, assignees, planned hours, priority, attachments).

To edit an existing task:
1. Select the task from the task list and click the edit icon (or swipe the task to the left and click the edit icon).
2. Update the required fields.
3. Click the **Save Button**.

---

## Task Stage Management
Tasks move through stages (Analysis, Design, Development, Testing, Completed) to improve workflow tracking and progress monitoring.

---

## Searching and Filtering Tasks
* **Searching**: Click the **Search Icon** and enter the Task Name to find tasks instantly.
* **Filtering by Assignee**: Helps managers review team workloads.
    1. Click the **Assignee Filter Icon** from the top bar.
    2. The "Filter by Assignees" popup appears (by default, the logged-in user is selected).
    3. Select available users using the checkbox (multiple can be selected) and click **Apply Filter**.

---

## Task Status Indicators
Visual indicators include:
* **Red Overdue Text**: Task deadline exceeded.
* **Star Rating**: Task priority level.
* **Stage Label**: Current workflow stage.
* **Planned Hours**: Estimated effort.

---

## Floating Action Button (FAB)
Located at the bottom-right corner of the Tasks Overview screen, it provides quick access to create tasks. Click the FAB, select **Task**, fill in the information, and click **Save**.

---

## Task Swipe Actions
Swipe gestures allow quick management directly from the list.

### Swipe Right Actions (Reschedule & Delete)
* **Reschedule Icon**: Quickly change planned dates using shortcuts (Tomorrow, Next Week, Next Month) or define a Custom Date Range.
* **Delete Icon**: Removes the selected task from the system.

### Swipe Left Actions (View, Edit, Start & Pause)
* **View**: Opens detailed task information.
* **Edit**: Opens the task editing screen.
* **Start**: Starts the task timer automatically, displaying the redesigned global floating timer widget and potentially creating a timesheet entry. Any previously active timesheet is automatically set to **Draft** status to prevent overlapping active timers.
* **Pause**: Stops or pauses the running task timer to prevent incorrect logging.