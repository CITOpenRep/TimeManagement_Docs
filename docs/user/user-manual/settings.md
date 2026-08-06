---
title: Settings  
sidebar_label: Settings  
description: A comprehensive guide to the Settings module. Find out how to link external accounts, manage push notifications and working hours, enable two-way background sync, and install Voice Models for text dictation.
---

# Settings

The **Settings** section allows users to configure the application according to their preferences and manage system-level features such as connected accounts, notifications, synchronization, and appearance.

This section is especially useful for first-time users to personalize their experience and ensure the app works seamlessly with external systems.

---

## Accessing Settings
To open **Settings**:
1. Click on the **Kebab-menu** icon in the top-left corner.
2. Select **Settings** from the sidebar navigation.

The Settings screen is divided into multiple configurable sections.

---

## Settings Overview
The Settings module includes the following options:
1. Connected Accounts
2. Notifications
3. Background Sync
4. Theme Settings
5. Voice Model (Beta) 

Each option is explained in detail below.

---

## Connected Accounts
The **Connected Accounts** section allows users to link and manage multiple environments or instances (such as local, test, or production systems).

### Purpose:
* Enable integration with different servers or environments.
* Allow switching between multiple accounts.
* Manage synchronization across systems.

### Key Elements:
* **Account List**: Displays all configured accounts.
* **Account Type Indicator**: Shows whether it is Local or Server Instance.
* **Instance URL**: Displays the connected server link.
* **Status Indicator**:
    * *In Progress*: Sync or connection is ongoing.
    * *Successful*: Connection is active and working.
* **Sync Icon**: Manually refresh or sync the account.
* **Checkbox Selector**: Activate or select a specific account.
* **Add Button**: Add a new account.

---

## Adding a New Account
Click on the plus icon to add a new account.

### Sections in “Create Account” Screen:
1. Account Details
2. Server Connection
3. Credentials
4. Sync Preferences

Each section must be completed carefully to ensure a successful connection.

### Account Details
This section defines how the account will appear inside the application.

**Fields:**
* **Account Name**: Enter a recognizable name (e.g., *Work Account*, *Test Server*). This name helps identify the account when switching between multiple accounts.

### Server Connection
This section is used to connect the app to your server.

**Fields:**
* **URL**: Enter the server URL. Example: `https://cit-services.in/`.

After entering the URL, click **Fetch Databases**.

### Fetch Databases
Clicking **Fetch Databases** initiates a process to retrieve available databases from the provided server.

**System Behavior:**
* The app connects to the server.
* A new screen or dialog opens.
* A list of available databases is displayed.

**User Actions Required:**
On the database selection screen:
* Review the list of available databases.
* Select the appropriate database.
* If required, manually enter the **Database Name**.

**Notes:**
* If no databases appear: Verify the server URL, check internet connectivity, and ensure the server is accessible.
* If multiple databases are listed: Choose the correct one based on your environment.

Once selected, confirm and return to the account setup screen.

### Database Name
After fetching databases:
* The selected database name will be auto-filled or manually entered.
* Ensure the correct database is selected before proceeding.

### Credentials
This section is used to authenticate your account.

**Fields:**
* **Username**: Enter your login username.
* **Connect With**: Connect With Password or API Key.
* **Password**: Enter your account password. Use the visibility toggle icon to view or hide the password.

### Sync Preferences
This section allows you to control how data synchronization works.

**Options:**
* **Custom Sync Settings (Toggle Switch)**
    * When enabled: You can define custom sync behavior.
    * When disabled: The system uses default settings (Sync Interval: ~15 minutes; Direction: Two-way sync where data is both sent and received).

### Completing Account Setup
After filling all required fields:
1. Click the  Save/Confirm button at the top-right corner.
2. The system will: Validate credentials, establish connection, and add the account to the Connected Accounts list.

### Post-Setup Behavior
Once the account is successfully created:
* It appears under **Connected Accounts**.
* You can activate it using the checkbox and sync it manually using the sync icon.
* Initial synchronization may begin automatically.

---

## Managing and Syncing Accounts

### Switching Between Accounts
* Use the **checkbox** next to an account to activate it.
* Only one account should be active at a time.
* The active account determines where your data is synced and stored.

### Syncing an Account
* Click the Sync icon next to an account.
* The system will fetch the latest data and update tasks, projects, timesheets, etc.
* Status will update automatically (e.g., *In Progress → Successful*).

### Managing Accounts (Swipe Actions)
The **Connected Accounts** list supports quick actions using swipe gestures, allowing users to efficiently manage accounts without opening additional screens.

**Purpose:** Provide faster access to common actions, improve usability (especially on touch devices), and reduce navigation steps.

**Available Actions:**
* **Swipe Right : Edit Account**
    * Swipe an account item to the **right** to reveal the **Edit** option.
    * Use this to update instance URL, modify login credentials, and change account configuration.
* **Swipe Left : View & Delete Options**
    * Swipe an account item to the **left** to reveal two action icons:
        1. **View**: Opens account details and displays configuration and connection information.
        2. **Delete**: Removes the account from the app.

---

## Notifications
The **Notifications** section controls how and when the application alerts you, keeping you informed about important updates across your workflow.

### Viewing and Interacting with Notifications
Once enabled, you can stay up-to-date with your work through multiple notification channels:

* **In-App Dashboard:** Tap the Bell icon  located in the top header of the dashboard. This opens a dedicated Notifications panel where you can review recent alerts, see timestamps (e.g., "4m ago"), switch to a "Sync" tab, or use the **Clear All** button to dismiss them.
* **Device Notification Drawer:** Alerts will automatically appear in your phone's standard notification drawer.
* **Lock Screen & Banners:** You will continue to receive notifications even when your phone is locked. When using the device, alerts may also appear as banner notifications above the phone drawer for immediate visibility.
* **Quick Navigation:** Tapping on any notification from your phone's drawer or lock screen will seamlessly open the app and take you directly to the corresponding page to view the details.
* **Notification Types:** The system will alert you to various events, including:
    * **Project updates**
    * **Activity notifications**

### Push Notifications
Allows you to control whether the application can send alerts directly to your device.

**Key Option:**
* **Enable Notifications (Toggle Switch)**
    * **ON**: The app will send real-time notifications for updates such as task changes, project updates, and activity logs.
    * **OFF**: All push notifications will be disabled.

**When to Enable:** If you want to stay informed about updates instantly, or if you rely on reminders for task/project updates and activities.
**When to Disable:** If you prefer fewer interruptions or if you only check updates manually within the app.

### Notification Schedule
Allows you to control *when* notifications are delivered, ensuring they only arrive during your preferred working hours. This is especially useful for maintaining work-life balance and avoiding notifications outside office hours.

**Enable Schedule:**
* **ON**: Notifications will only be sent during configured days and hours.
* **OFF**: Notifications can be sent at any time.

**Timezone:**
* Select your **Timezone** to ensure notifications are aligned with your local time. The default value is usually set to **System Default**.

**Working Days:**
* Options include Monday through Sunday.
* Only selected days will allow notifications, while unselected days will block all notifications.

**Working Hours:**
* **From**: Start time (e.g., 09:00).
* **To**: End time (e.g., 18:00).
* Notifications will only be sent within the selected time range.

**Example Configuration (Standard Work Schedule):**
* Enable Notifications: ON
* Enable Schedule: ON
* Working Days: Monday to Friday
* Working Hours: 09:00 to 18:00
* *Result:* You will only receive notifications during office hours on weekdays.

---

## Background Sync
The **Background Sync** feature ensures your data stays updated automatically.

**Features:**
* Enable automatic synchronization.
* Set sync frequency.
* Sync tasks, timesheets, projects, project updates, etc., in the background.

**Benefits:** Reduces manual effort, keeps data consistent across devices and accounts, and ensures real-time updates.

### Background Sync Settings Overview
This screen allows you to configure how and when your data is synchronized with the server. This feature works in the background without requiring manual intervention.

**Key Configuration Options:**
1. **Enable AutoSync (Toggle Switch)**
    * **ON**: Automatic synchronization is enabled, and the app will sync data at defined intervals.
    * **OFF**: Background sync is disabled, and data must be synced manually.
2. **Sync Interval**
    * Defines how often the application performs automatic synchronization.
    * Example Options: 5 minutes, 15 minutes, 30 minutes or more.
    * Recommendation: Use **5–15 minutes** for active users; use longer intervals to conserve battery and data usage.
3. **Sync Direction**
    * **Both (Up & Down)** *(Default)*: Uploads local changes to the server and downloads updates from the server.
    * **Upload Only (Up)**: Sends local data to the server but does not fetch updates.
    * **Download Only (Down)**: Retrieves updates from the server but does not upload local changes.
4. **Restart Background Daemon**
    * Allows you to restart the background synchronization service. Use this if sync appears stuck, after changing sync settings, or after reconnecting an account.

### How Background Sync Works
When AutoSync is enabled:
1. The app runs a background service.
2. At each interval, it connects to the configured account/server, uploads new or modified data (tasks, timesheets, etc.), and downloads updates from the server.
3. Updates are applied automatically without user action.

**Best Practices:**
* Keep AutoSync enabled for a seamless experience.
* Use a 15-minute interval for balanced performance and battery usage.
* Keep Sync Direction = Both unless you have a specific need.
* Restart the daemon if syncing issues occur.

---

## Theme Settings
The **Theme Settings** section allows users to customize the visual appearance of the application.

**Benefits:** Improves readability, enhances user comfort during extended usage, and supports accessibility preferences.

### Available Theme Options
1. **Light Theme**: Bright and clean interface that uses light backgrounds with dark text. Suitable for well-lit environments and daytime use.
2. **Dark Theme**: Dark background with lighter text. Reduces screen brightness and glare.

### How to Change the Theme
1. Select **Theme Settings**.
2. Choose one of the available options: Light Theme or Dark Theme.
3. The selected theme will be applied immediately.

**System Behavior:**
* The currently selected theme is marked with a **check indicator (✔)**.
* Only one theme can be active at a time[cite: 2].
* Theme changes are applied **instantly** across all screens (no restart or refresh is required)[cite: 2].
* The selected theme is **saved automatically** and persists across sessions[cite: 2].

---

## Voice Model (Beta)
The **Voice Model (Beta)** feature enables users to dictate text directly into multi-line description fields across the application using their device's microphone. Designed for offline capability and  all speech-to-text processing occurs locally on the user's device once the necessary voice model is downloaded.

### Key Objectives
* **Hands-Free Input:** Provide direct speech-to-text input across key workflow modules.
* **Offline Operation:** Function seamlessly without an active internet connection after model installation.
* **Resource Management:** Offer configurable model selections tailored to varying device memory (RAM) and storage capabilities.

---

## 2. Supported UI Fields

Once enabled and configured, the voice input microphone icon will automatically appear in description fields across the following modules:
* **Tasks Module** 
* **Timesheets Module** 
* **Activities Module** 
* **Project Updates Module** 

---

## 3. Screen Layout & Navigation

**Navigation Path:** `Settings` > `Voice Model (Beta)`

### 3.1 Header Bar Controls
* **Info Icon :** Triggers the **"About Voice Models"** popup. This modal details privacy policies (local processing), model size comparisons, dictation stages, auto-stop limits, model selection rules, and deletion guidelines.
* **Search Icon :** Toggles the search input bar to filter the list of models under *Available For Download* by language or variant (e.g., "English (Indian)", "English (US)").

### 3.2 Global Toggles
* **Enable Voice Input:** Master toggle switch. Must be turned **ON** to expose microphone icons in supported application description fields.
* **Low Memory Mode:** Optimization toggle for low-spec devices to minimize memory allocation during local inference.

---

## 4. Model Management Lifecycle




### 4.1 Available Models & Downloading
1. **Search & Filter:** Users can search models by locale or language name.
2. **Model Trade-Offs:**
   * **Larger Models (> 2.5 GB):** Provide higher accuracy but consume significant device RAM and storage.
   * **Smaller Models:** Offer faster processing and lower memory usage with slightly lower accuracy.
3. **Download Controls:**
   * **Initiating:** Clicking the download icon next to a model triggers a brief *"Download Started"* toast and displays a real-time progress bar (e.g., `Downloading... 17%`).
   * **Pause / Resume:** Losing internet connection or manually pressing **Pause** retains partial download progress, allowing the user to resume later from the same screen.
   * **Cancel:** Pressing the Cancel  button triggers a *"Download Cancelled"* popup, halts the download, and purges all partial data files from local storage.

### 4.2 Hardware Compatibility & Warnings
* **RAM Restriction Checks:** Models exceeding recommended hardware specifications display a red **Warning Icon**.
* **Download Warning Prompt:** Attempting to download an incompatible/large model prompts a warning modal stating potential RAM limits. The user can choose **Cancel** or **Download Anyway**.
* **Selection Warning Prompt:** Attempting to activate an installed model that exceeds hardware limits displays a comparative modal showing *Model Size vs Device RAM*, offering **Cancel** or **Select Anyway**.

### 4.3 Installed Models & Active Selection
* **Mandatory Activation:** Simply downloading a model is insufficient; explicit activation is required even if only one model is installed.
* **Visual Indicator:** The currently active model is highlighted in **bold text** with a **checkmark / tick mark** displayed on its right side.
* **Model Deletion:** Users can swipe an installed model row to the left and tap the revealed **Trash / Delete** icon to remove the model file and reclaim storage space.

---

## 5. Dictation Execution & Workflow




### 5.1 Speech-to-Text States

| Stage | Visual Indicator | System Behavior | User Action Required |
| :--- | :--- | :--- | :--- |
| **Initialization** | `Starting` | Allocates local memory and loads model. | Wait |
| **Preparation** | `Preparing` | Initializes audio capture buffer. | Wait |
| **Active Listening** | `Listening` | Microphone actively captures voice input. | **Speak clearly** |
| **Processing** | `Processing` (Yellow Bar) | Local inference engine converts audio to text. | Wait |
| **Completion** | Transcribed Text Inserted | Appends output into the focused description field. | Review / Edit text |

### 5.2 System Constraints & Automation Rules
* **Silence Auto-Stop Threshold:** If no speech is detected for **7 consecutive seconds**, the microphone automatically stops listening and transitions to `Processing`.
* **Maximum Session Duration:** A single dictation session is capped at **5 continuous minutes**. Upon hitting the 5-minute limit, recording automatically stops and converts the captured audio to text.
* **Offline Functionality:** Text transcription functions fully without an active cell or Wi-Fi connection once an active model is loaded locally.



