---
title: Project  
sidebar_label: Project  
description: Discover how to organize your team's work with the Projects module. Create projects, track deadlines, use quick swipe actions, and filter work by project stage.
---


# Projects

The **Projects** module is used to create, organize, monitor, and manage all project-related activities within the Time Management App.

Projects help users:
* Group related tasks and activities.
* Track project timelines and allocated effort.
* Monitor progress and status.
* Manage assignments and ownership.
* Organize work efficiently across teams or departments.

The Projects section acts as a centralized workspace for all ongoing and completed projects.

---

## Accessing the Projects Module
To open the **Projects** section:
1. Click the **Kebab Menu** icon from the top-left corner.
2. Select **Projects** from the sidebar navigation.

---

## Projects Screen Overview
The Projects screen contains the following components:
1. Header Section
2. Projects List
3. Project Information Panel
4. Search and Filter Options
5. Quick Action Buttons

---

### Header Section
Located at the top of the Projects screen.

**Features:**
* **Search Icon**: Used to search projects quickly.
* **Grid/List View Icon**: Switch between available project display layouts, which on switching can see parents projects followed by sub projects or only parent projects depending upon the access rights.
* **Add Icon**: Create a new project.
* **Save Icon**: Save newly created or edited project details.

---

### Projects List Panel (Updated Overview UI)
The Projects overview panel displays all available projects in an updated, modern card layout.

Each project card displays:
* **Star Icon**: Tap to mark projects as favorites for faster access.
* **Project Name**: The primary project title.
* **Instance / Account Badge**: Identifies the associated account (e.g., `CIT` or `Local`).
* **Overdue Duration Indicator**: Highlights overdue projects with a red indicator and exact day count
* **Aggregated Task Count**: Displays the total count of associated tasks (e.g., `10 tasks`, `120 tasks`).
* **Subproject Count & Indicator**: For parent projects, indicates nested subprojects (e.g., `1 subproject >`).
* **Description Preview**: Short preview snippet of the project description.
* **Stage Pill**: Rounded badge indicating the current workflow status (e.g., `To Do`, `In Progress`, `Completed`).

---

### Project Hierarchy & Breadcrumb Navigation
The application provides full support for project hierarchy mapping and nested subprojects:

* **Breadcrumb Trail**: When drilling down into a parent project, a dedicated navigation bar appears showing:
  * **[< Back] Button**: Quickly return to the parent project level or top-level overview.
  * **Breadcrumb Path**: Clear path indication (e.g., `Projects / Test Project 2 [Parent] (1)`), including a count badge showing the number of child subprojects.
* **Hierarchical Task Count Calculations**: Task counts are dynamically calculated and aggregated for both top-level parent projects and nested subprojects in both remote and Local accounts.

---

### Project Information Panel
Clicking on any project from the project overview list will display detailed information about the selected project.

---

## Creating a New Project
To create a project:
1. Open the **Projects** module.
2. Click the **Add Icon**.
3. Fill in the required project information.
4. Click the **Save Button**.

The project will then appear in the Projects List.

### Project Creation Fields
* **Account**: Defines which connected account or environment the project belongs to (Remote Instance or Local).
* **Parent Project**: Select a parent project to structure work into subprojects and establish clear hierarchy.
* **Assignee (Local Account Filtering)**: Defines the user responsible for the project. When **Local** account is selected, the Assignee dropdown strictly filters and lists only **Local User** (along with the default "Select Assignee"), preventing invalid remote user assignments in local mode.
* **Project Name**: The primary title of the project (e.g., Mobile App Development, Website Redesign).
* **Description**: Detailed information including objectives, scope of work, and expected outcomes. Supports voice input dictation and text expansion.
* **Allocated Hours**: Estimated time planned for the project (e.g., `01:00` = 1 Hour) to help with workload planning.
* **Color Indicator**: Allows assigning a color to make projects easier to identify.

### Configured Default Project Stages
For **Local Accounts**, default project stages (e.g., *To Do*, *In Progress*, *Done*, *Cancelled*) are automatically configured and mapped. Newly created local projects immediately persist and display their valid stage badges without requiring manual setup or remote synchronization.

### Planned Dates Section
Defines the expected project timeline.
* **Date Range**: Provides quick date selection presets (Today, This Week, This Month, Custom Range).
* **Start Date**: Defines when the project is expected to begin.
* **End Date**: Defines the planned completion date. *Note: If the current date exceeds the End Date and the project is incomplete, the system may display an **Overdue** indicator.*

### Attachments Section
Allows users to upload and manage project-related files.

**How to Upload:** Click the **Upload Icon**, select a file, and wait for completion.
**Benefits:** Keeps files centralized, improves collaboration, and syncs automatically with the server and vice versa.

---

## Viewing and Editing Project Details
Selecting a project from the Projects List displays its details in the right-side panel. Users can review project status, timeline, allocated hours, description, assigned user, and attachments.

To edit an existing project:
1. Select the project from the list.
2. Click on the edit icon from the top right.
3. Update the required fields.
4. Click the **Save Button**.

---

## Project Status Management
Projects move through different statuses during their lifecycle.

| Status | Description |
| --- | --- |
| To Do | Project has not started |
| In Progress | Work is currently ongoing |
| Completed | Project work is finished |
| On Hold | Temporarily paused |

---

## Searching and Favoriting Projects
* **Searching**: Click the **Search Icon** and enter the Project Name. Matching projects are displayed instantly.
* **Favorites**: Projects can be marked as favorites using the **Star Icon** for faster access and easier navigation.

---

## Project Overview Swipe Actions
From the Projects List overview, swipe any project item to the **left** to reveal three action icons:
1. **View**: Opens the detailed page of the selected project.
2. **Start**: Starts the project timer, displays the redesigned global floating timer widget, records time automatically, and creates a timesheet entry. Any previously running timesheet is automatically transitioned to **Draft** status to avoid overlapping active timers.
3. **Pause**: Stops the active timer and pauses time tracking.

---

## Filter Projects by Stage
The **Filter by Stage** feature allows users to quickly view projects based on their current status.

**Accessing the Filter:**
1. Navigate to the **Projects** module.
2. Click the **Floating Action Button (FAB)** at the bottom-right corner.
3. A filter panel titled **“Filter by Stage”** will appear displaying available options (Open Projects, All Stages, To Do, In Progress, Done, Cancelled).

**How it Works:**
When a stage is selected, the Projects List refreshes automatically to display only matching projects (e.g., selecting **In Progress** will display only projects currently under active development). By default, all stages will be displayed when opening a project list overview. Users can change or clear the filter by opening the panel again and selecting **All Stages**.