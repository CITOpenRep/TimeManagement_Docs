---
title: Dashboard
sidebar_label: Dashboard
description: An overview of the Time Management App Dashboard, featuring the Priority Matrix, time distribution charts, employee and date range filtering, and quick navigation for projects and tasks.
---

# Dashboard

## Introduction
The **Dashboard** is the main screen of the Time Management App. It provides a quick overview of tasks, projects, and time distribution based on priority.

This screen enables users to:
* Identify tasks requiring immediate attention.
* Organize work efficiently.
* Monitor time spent across activities and projects.

---

## Dashboard Overview
The Dashboard consists of the following key sections:
1. Header (Top Bar)
2. Collapsible Navigation Sidebar (Desktop)
3. Unsaved Drafts Alert 
4. Priority Matrix
5. Navigation Tabs (Overview, Projects, Tasks) 
6. Quick Action Button

---

## Header Section
Located at the top of the screen.

### Features:
* **Menu Icon:** Opens the side navigation menu.
* **Account Name / Title:** Displays "Dashboard", the active date range, and the selected employee(s) (e.g., "Current Month • [Employee Name]").
* **Filter Icon (Sliders):** Opens the Date Range filter dropdown to adjust the time period of the displayed data.
* **Filter by Employee Icon (Contact / Person):** Opens the Filter by Employee popup to customize the dashboard view by individual or multiple team members.
* **Add Icon (Clock with +):** Used to quickly create a new timesheet entry.
* **Notification Icon:** Displays alerts and updates.
* **Info Icon:** Provides additional information about the dashboard charts.

---

## Collapsible Navigation Sidebar

For convergent desktop layouts, the application provides an adaptive **Collapsible Navigation Sidebar**:

* **Convergent Desktop Support**: Seamlessly optimizes larger screens, providing persistent navigation across all primary application views (Dashboard, Timesheets, Activities, My Tasks, All Tasks, Projects, Project Updates, About Us, Settings).
* **Compact 8 GU Mode**: The sidebar features a compact **8 GU (Grid Unit)** mode that collapses into an icon-only navigation rail. This preserves valuable screen real estate for split views, task lists, and dashboard analytics while keeping every module a single tap away.
* **Direct Header & Footer Controls**:
  * **Top Toggle (`≡`)**: Quickly expand or collapse the sidebar between full and compact modes.
  * **Account Switching**: The bottom of the compact rail includes a dedicated user icon for quick account switching.
  * **Local Toggle Switch**: Directly toggle Local Account mode on or off from the sidebar footer.
  * **Theme Controls**: A sun/moon icon allows instant toggling between light and dark themes without navigating into Settings.

---

## Date Range Filter
A new filtering feature allows users to control the time period for the data displayed across the entire dashboard. 

* **Default View:** By default, the dashboard displays data for **This Month**.
* **Filter Options:** Clicking the Filter Icon in the header opens a "Date Range" dropdown menu with the following predefined options:
    * No Filter (All Time)
    * Today
    * This Week
    * This Month
    * This Quarter
    * This Year
    * Custom Range...
* **Custom Date Range:** Selecting "Custom Range..." opens a dedicated dialog box. Users can specify an exact time period by selecting a **From:** date and a **To:** date using the date pickers. Clicking **Apply Range** updates the dashboard to reflect this custom period, while clicking **Cancel** dismisses the dialog without making changes.

---

## How to Filter Your Dashboard by Employee

### What is This Feature?
If you manage a team or projects, the **Filter by Employee** feature lets you customize your dashboard view. Instead of only seeing your own hours, you can look at:
* How many hours a specific team member worked.
* The combined work of multiple chosen team members.
* The overall total work done by the whole team.

:::note
If you do not manage a project or team, your dashboard will simply show your own personal work as usual, keeping things clean and clutter-free.
:::

### Step-by-Step: How to Use It

#### 1. What You See When You First Open the Dashboard
Whenever you open your dashboard, it always starts by showing your own personal hours and tasks. Under the "Dashboard" heading at the top, you will see your name and the date range.

#### 2. Opening the Employee Filter
* Look at the top right of your dashboard header.
* Tap the **Filter icon** (looks like a contact/person icon).
* A menu will pop up showing:
  * A **Search bar** at the top.
  * An **"All Users"** option.
  * A list of your team members with their names and email addresses.

#### 3. Choosing What to View
* **To see a single person’s work:** Tap that person’s name or checkbox.
* **To see multiple people together:** Tap each person you want to include. At the bottom of the popup, it will show how many people you have selected (for example: *"2 employees selected"*).
* **To quickly find someone in a long list:** Type their name or email into the search bar. The list will filter instantly as you type.
* **To see the entire team’s combined work:** Tap **"All Users"**. (Selecting this automatically unchecks individual names).

#### 4. Applying Your Selection
* Tap the **"Apply Filter"** button at the bottom of the popup.
* The popup will close, and your entire dashboard will automatically refresh:
  * The priority boxes (Eisenhower Matrix) will update with the hours logged by the selected person/people.
  * The project charts and breakdown lists will show only their work.
  * The header subtitle will update to reflect your choice (e.g., `Current Month • 2 Employees`).

#### 5. Resetting Back to Team Overview
* Open the filter menu and tap **"Clear Filter"** (or select **"All Users"** and tap **Apply Filter**).
* Your dashboard will update to show the combined hours logged by everyone on the team.

### Quick Summary of Options

| What you want to do | How to do it | What the header shows |
|---|---|---|
| **Check your own work** | Switch back to your personal name in the list. | `Current Month • [Your Name]` |
| **Check one colleague's work** | Select their name &rarr; Tap **Apply Filter**. | `Current Month • [Colleague's Name]` |
| **Check a small sub-team** | Select 2 or more names &rarr; Tap **Apply Filter**. | `Current Month • 3 Employees` |
| **Check entire team totals** | Tap **Clear Filter** (or select **All Users**). | `Current Month • All Users` |
| **Close without changing anything** | Tap anywhere outside the popup box. | Unchanged |

---

## Unsaved Drafts Alert
Upon launching the app, if there is unsubmitted work, an **Unsaved Drafts Found** popup may appear.
* Notifies the user of unsubmitted work from a previous session (e.g., Timesheets, Project Updates).
* Prompts the user to open the respective forms to restore their changes.

---

## Priority Matrix
The Priority Matrix categorizes tasks based on urgency and importance. It is organized visually with **URGENT** and **NOT URGENT** on the top axis, and **IMPORTANT** and **NOT IMPORTANT** on the side axis.

### Categories:
* **Do First (Urgent & Important):** Tasks that require immediate attention (Red tile).
* **Do Next (Not Urgent & Important):** Important tasks that can be scheduled (Blue tile).
* **Do Later (Urgent & Not Important):** Tasks that can be postponed or delegated (Green tile).
* **Don’t Do (Not Urgent & Not Important):** Tasks that are unnecessary (Grey tile).

### Time Display:
Each category displays total time spent (e.g., `98H`), helping users evaluate productivity and time allocation for the selected date range.

---

## Navigation Tabs
Below the Priority Matrix, the dashboard is divided into three primary tabs: **Overview**, **Projects**, and **Tasks**.

### 1. Overview Tab
Displays visual charts for time tracking.
* **Most Time-Consuming Projects (Donut Chart):** Visual representation of time distribution across projects. Larger segments indicate higher time usage.
* **Percentage Value:** The exact proportion of total logged time attributed to this specific project (e.g., "51.8%").

### 2. Projects Tab
Displays detailed information about user projects, along with a master total of hours logged across all projects.
* **Project-wise Time Spent (Bar Chart):** Displays time spent per project. The axes allow visual comparison of effort across projects. Includes **"Show next 10" and "Show fewer"** buttons are available at the bottom to expand the projects list.


### 3. Tasks Tab
A dedicated tab for managing and viewing individual tasks.  


* **Search Bar:** Enables quick project lookup ("Search projects…").
* **Sorting Options:**
    * **Most Time:** Sort by highest time spent.
    * **Tasks:** Sort by number of tasks.
    * **A–Z:** Alphabetical sorting.
* **Project List:** Displays individual projects with their specific task counts, total time spent, and a visual progress indicator.

**Project Details View:**
Tapping on a specific project in the list navigates to a detailed view for that project, which includes:
* A summary header displaying the `TOTAL` time, `AVERAGE` time, total `TASKS`, and the `TOP TASK`.
* A specific bar chart breaking down time spent by individual tasks within that project.
* A list of individual tasks showing their percentage of project time, total hours, and a navigation arrow for further details.

---

## Dashboard Analytics & Local Account Support

The dashboard analytics engine provides native support for **Local Accounts**:

* **Local Data Aggregation**: All dashboard charts—including the Priority Matrix time allocations, the Donut Chart (most time-consuming projects), project-wise bar charts, and task breakdown statistics—accurately aggregate and compute metrics directly from local SQLite storage.
* **Offline Independence**: Metrics and analytics for Local Accounts update in real time without requiring an active remote server connection or background sync pass.

---

## Quick Action Button
A floating action button (cyan circle with a menu icon) located at the bottom-right corner of the screen.

### Functions:
* Add a new task.
* Create a timesheet entry.
* Log activity.