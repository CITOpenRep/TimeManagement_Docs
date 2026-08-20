---
title: App Translation and Localization Guide
sidebar_label: App Translation
description: A step-by-step guide for contributors to translate the Time Management App interface into different languages.
---

# App Translation and Localization Guide

This guide provides step-by-step instructions for translating the **Time Management App** interface itself (the client application built with QML and Python) into your language. 

The app's translation system is based on **gettext**. Translators edit `.po` (Portable Object) files containing key-value translation pairs, which are automatically compiled into binary `.mo`/`.gmo` files during the build process.

---

## 1. Directory Structure and Translation Files

All translation-related files are located in the `po/` directory at the root of the repository:

```text
timemanagement/
├── po/
│   ├── CMakeLists.txt        # Build system integration for translations
│   ├── ubtms.pot             # Portable Object Template (contains all untranslated strings)
│   └── nl.po                 # Dutch translation source file (example of current translation)
```

* **`ubtms.pot`**: The central template file extracted directly from the codebase. It contains all original English strings.
* **`<locale_code>.po`**: Language-specific translation files (e.g., `nl.po` for Dutch, `es.po` for Spanish). This is the file you will create or modify.

---

## 2. Prerequisites

To contribute to translations, you should have the following tools installed:

1. **Gettext Utilities**: Command-line tools to initialize, merge, and compile translations.
   * **Ubuntu/Debian**:
     ```bash
     sudo apt update && sudo apt install gettext
     ```
2. **Text Editor**: A standard text editor of your choice (such as VS Code, Vim, Gedit, etc.) to edit the translation files.
3. **Clickable**: The build tool for the application, used to compile and test your translation locally. See the **Getting Started** guide for setup details.

---

## 3. Translation Workflow

### Step 1: Update the Translation Template (`ubtms.pot`)
Before starting your translation, compile the project once to ensure the translation template `po/ubtms.pot` is updated with the latest strings from the source code:

```bash
clickable build
```
*Note: The CMake build system automatically runs the translation extraction target, parsing all QML and desktop entry files to update `po/ubtms.pot`.*

### Step 2: Initialize or Update your Translation File

#### Option A: Starting a New Language
Determine your 2-letter language code (and optional region, e.g., `fr` for French, `es` for Spanish, `pt_BR` for Brazilian Portuguese).
Navigate to the `po/` directory and initialize the translation file using `msginit`:

```bash
cd po
msginit --locale=<locale_code> --input=ubtms.pot --output=<locale_code>.po
```
*Example for Spanish:*
```bash
msginit --locale=es --input=ubtms.pot --output=es.po
```

#### Option B: Updating an Existing Language
If you are translating new strings added to an existing translation (e.g., Dutch `nl.po`), merge the updated template into the translation file using `msgmerge`:

```bash
cd po
msgmerge --update <locale_code>.po ubtms.pot
```
*Example for Dutch:*
```bash
msgmerge --update nl.po ubtms.pot
```
This adds any new strings, marks deleted strings as obsolete, and flags altered strings as `#, fuzzy` for your review.

---

### Step 3: Translating the Strings
Open your `<locale_code>.po` file in your text editor.

For each entry, translate the source string (`msgid`) to the translation string (`msgstr`):

```po
msgid "Time Manager - Time Management Dashboard"
msgstr "Tijdbeheer - Dashboard Tijdbeheer"
```

#### Key Rules & Best Practices:
1. **Preserve Placeholders**: Keep parameters like `%1`, `%2`, or `%3` intact. They represent dynamic values substituted at runtime.
   * *Example*: `i18n.dtr("ubtms", "You have %1 new notification(s)")` -> `Je hebt %1 nieuwe melding(en)`
2. **Preserve Escape Sequences**: Characters like `\n` (newlines) or `\t` (tabs) must remain in the translated string.
3. **Remove Fuzzy Flags**: If you update a string marked with `#, fuzzy`, remove the `# fuzzy` comment line after verifying the translation is correct. Otherwise, it won't compile.

---

### Step 4: Testing Your Translation Locally

1. Build the application with Clickable to compile the `.po` translation file to a binary `.mo` catalog:
   ```bash
   clickable build
   ```
2. Run the desktop version of the application with your target language configured in the environment:
   ```bash
   LANG=<locale_code>.UTF-8 clickable desktop
   ```
   *Example for Dutch:*
   ```bash
   LANG=nl_NL.UTF-8 clickable desktop
   ```
3. Verify that all translated elements show up correctly in the UI and that there are no layout or text clipping issues.

---

## 4. Code Guidelines for Developers (Marking Strings)

If you are writing code (QML) and want to ensure your text can be translated, use the following patterns:

### In QML / JavaScript
* **Standard Translations**:
  ```qml
  title: i18n.dtr("ubtms", "Settings")
  ```
* **Translating with Arguments**:
  ```qml
  text: i18n.dtr("ubtms", "Account [%1]").arg(accountName)
  ```
* **Plural Forms**:
  Use `i18n.tr` with plural forms when displaying quantities:
  ```qml
  // Syntax: i18n.tr(singular, plural, count)
  text: i18n.tr("You have %1 task", "You have %1 tasks", count).arg(count)
  ```

### In Desktop Entries (`ubtms.desktop.in`)
For system-level desktop configurations, prefix the translatable keys with an underscore:
```desktop
_Name=Time Management
```
*The build system uses `intltool` to extract these desktop keys into `ubtms.pot`.*

---

## 5. Submitting Your Contribution (Creating the PR)

Once you've tested your translations and verified that the `.po` file is correct, you are ready to submit a Pull Request (PR):

1. **Clean up backup files**: Some editors create temporary backup files (e.g., `nl.po~` or `nl.po.bak`). Delete these before committing.
2. **Create a Git Branch**:
   ```bash
   git checkout -b translation/add-<locale_code>
   ```
3. **Stage and Commit**:
   ```bash
   git add po/<locale_code>.po
   git commit -m "translation: Add <Language_Name> translation"
   ```
4. **Push the Branch**:
   ```bash
   git push origin translation/add-<locale_code>
   ```
5. **Open the Pull Request**:
   * Navigate to the original repository on GitHub.
   * Click **Compare & pull request**.
   * Fill out the PR template, ensuring you describe the language you added or updated, and confirm that you built and tested it locally.
