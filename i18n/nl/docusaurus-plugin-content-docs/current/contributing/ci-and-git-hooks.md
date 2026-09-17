---
title: Continue integratie & Git pre-commit hooks
sidebar_label: CI & Git pre-commit hooks
description: Installatiehandleiding en overzicht voor continue integratie (GitHub Actions) en lokale Git pre-commit hooks voor syntaxis-, import- en codevalidatie.
---

# Continue integratie & Git pre-commit hooks

Om een hoge softwarekwaliteit te waarborgen, regressies te voorkomen en mergeconflicten te vermijden, maakt het **TimeManagement**-project gebruik van een verificatiearchitectuur met twee lagen:

1. **Lokale Git pre-commit hook**: Snelle, alleen-lezen controles aan de clientzijde die direct worden uitgevoerd bij `git commit` om syntaxis en imports in staged bestanden te valideren.
2. **Continue integratie (CI) workflow**: Een externe GitHub Actions-pipeline die testsuites en codebase-verificatie uitvoert wanneer wijzigingen worden gepusht naar de `main`- of `release`-takken, evenals bij pull-aanvragen.

```mermaid
flowchart TD
    A[Ontwikkelaar bewerkt code] --> B[git add staged bestanden]
    B --> C[git commit]
    subgraph Lokale omgeving
        C --> D{Git pre-commit hook}
        D -->|Geslaagd| E[Commit lokaal aangemaakt]
        D -->|Mislukt| F[Commit geblokkeerd & lintfouten weergegeven]
        F -->|Code herstellen| B
    end
    E --> G[git push origin branch]
    subgraph GitHub extern (remote)
        G --> H{GitHub Actions CI}
        H -->|push naar main / release of PR| I[Geautomatiseerde tests & codebase linting uitvoeren]
        I -->|Succes| J[Controles geslaagd / Klaar om te mergen]
        I -->|Mislukt| K[CI mislukt / Merge geblokkeerd]
    end
```

---

## 1. Continue integratie (GitHub Actions)

Er is een GitHub Actions Continuous Integration (CI)-workflow geconfigureerd voor de projectrepository. Deze voert automatisch tests uit en verifieert de integriteit van de code onder de volgende voorwaarden:

* **Triggers**:
  * Elk `push`-evenement naar de `main`-branch.
  * Elk `push`-evenement naar de `release`-branch.
  * Pull-aanvragen gericht op `main` of `release`.
* **Geautomatiseerde taken**:
  * **Uitvoering van testsuites**: Voert backend- en moduletestsuites uit om ervoor te zorgen dat bestaande functionaliteit intact blijft.
  * **Syntaxis- en importvalidatie**: Voert lintingcontroles uit op alle QML-, JavaScript- en Python-bestanden om verbroken importpaden, syntaxisfouten of niet-geïmporteerde services op te sporen.
  * **Build-integriteit**: Bevestigt dat pakketten schoon bouwen zonder ontbrekende afhankelijkheden of assets.
* **PR-beleid**: Alle tests en CI-controles moeten slagen voordat pull-aanvragen kunnen worden beoordeeld en gemerged in beveiligde branches.

---

## 2. Git pre-commit hook

Het uitvoeren van CI op GitHub is essentieel, maar wachten op externe controles na het pushen vertraagt het ontwikkelproces. De lokale **Git pre-commit hook** wordt binnen een seconde uitgevoerd en detecteert fouten direct tijdens het committen.

### Belangrijkste kenmerken
* **Alleen staged bestanden**: Controleert uitsluitend bestanden die momenteel zijn klaargezet (`git add`) voor commit (`.qml`, `.js` en `.py`).
* **Alleen-lezen**: De hook inspecteert bestanden zonder ze te formatteren of aan te passen, waardoor onverwachte bestandswijzigingen of mergeconflicten worden voorkomen.
* **Snel & lichtgewicht**: Slaat de controle netjes over als er alleen documentatie, markdown- of configuratiebestanden zijn klaargezet.
* **Noodomzeiling**: In zeldzame noodgevallen waarin een commit toch moet worden vastgelegd ondanks een lintprobleem, gebruikt u:
  ```bash
  git commit --no-verify
  ```

---

## 3. Installatie en configuratie

### Vereisten

Zorg ervoor dat het volgende op uw ontwikkelwerkstation is geïnstalleerd:
* **Git**: `git --version`
* **Python 3**: `python3 --version`
* **qmllint**: Geleverd door Qt-ontwikkelpakketten:
  ```bash
  # Ubuntu / Debian
  sudo apt install qtdeclarative5-dev-tools
  # Of voor Qt6-gebaseerde omgevingen:
  sudo apt install qml-tools
  ```

### Het installatiescript uitvoeren

Voer in de hoofdmap van de projectrepository het hook-installatiescript uit:

```bash
chmod +x scripts/setup_hooks.sh
./scripts/setup_hooks.sh
```

Na succesvolle installatie ziet u:
```text
[SUCCESS] Git pre-commit hook successfully installed at: .git/hooks/pre-commit
```

---

## 4. Verificatiescripts in detail

Het verificatiesysteem vertrouwt op drie scripts in de map `scripts/` van het project:

### Script 1: `scripts/setup_hooks.sh`

Dit installatiescript schrijft het hookbestand `.git/hooks/pre-commit` en maakt het uitvoerbaar.

```bash
#!/usr/bin/env bash
# ==============================================================================
# Git Pre-commit Hook Setup Script
# Installs local pre-commit hook to lint only staged files before committing.
# ==============================================================================

set -e

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
HOOK_DEST="$PROJECT_ROOT/.git/hooks/pre-commit"

if [ ! -d "$PROJECT_ROOT/.git" ]; then
    echo "[ERROR] Not a git repository."
    exit 1
fi

cat << 'EOF' > "$HOOK_DEST"
#!/usr/bin/env bash
# ==============================================================================
# Git Pre-commit Hook: Lint Staged Files Only (Read-Only)
# Blocks commit if syntax or import errors are detected in staged files.
# ==============================================================================

PROJECT_ROOT="$(git rev-parse --show-toplevel)"
LINT_SCRIPT="$PROJECT_ROOT/scripts/lint.sh"

if [ ! -x "$LINT_SCRIPT" ]; then
    echo "[WARN] $LINT_SCRIPT not found or not executable. Skipping pre-commit lint."
    exit 0
fi

# Get staged QML, JS, and Python files that were added/copied/modified
STAGED_FILES=$(git diff --cached --name-only --diff-filter=ACM | grep -E '\.(qml|js|py)$' || true)

if [ -z "$STAGED_FILES" ]; then
    # No relevant files staged
    exit 0
fi

echo "[INFO] Running pre-commit syntax and import checks on staged files..."
if ! "$LINT_SCRIPT" $STAGED_FILES; then
    echo ""
    echo "[ERROR] Commit aborted: Linting errors detected in staged files."
    echo "[HINT] Fix the issues above, stage your changes, and commit again."
    echo "[HINT] Emergency bypass if required: git commit --no-verify"
    exit 1
fi
EOF

chmod +x "$HOOK_DEST"
echo "[SUCCESS] Git pre-commit hook successfully installed at: $HOOK_DEST"
```

---

### Script 2: `scripts/check_imports.py`

Dit zelfstandige Python-hulpprogramma voert een diepe validatie uit op QML- en JavaScript-bestanden. Het voert vier essentiële controles uit:

1. **Basisinvoer van modules**: Controleert of `.qml`-bestanden die visuele of logische componenten definiëren de juiste importdeclaraties bevatten (bijv. `QtQuick` of `Lomiri`).
2. **Relatieve padresolutie (QML)**: Bevestigt dat relatieve bestanden waarnaar wordt verwezen in `import "path"` of `import "../path" as Alias` daadwerkelijk op de schijf bestaan.
3. **JavaScript Pragma-imports**: Bevestigt dat `.import "path" as Alias`-instructies in `.pragma library` JavaScript-bestanden verwijzen naar geldige paden.
4. **Gebruik van bekende services**: Detecteert wanneer singleton-services (zoals `TimerService`, `Utils`, `Logger`, `DraftManager`, `MainModel`, `NavigationRoutes`) worden aangeroepen zonder expliciet te zijn geïmporteerd of gedeclareerd.

```python
#!/usr/bin/env python3
"""
QML and JavaScript Import & Symbol Validator.
Validates:
1. Required module imports in .qml files (ensures file is not missing QtQuick/Lomiri).
2. Existence of relative imported files and folders (e.g. import "../../models/foo.js").
3. Usage of common namespace aliases (TimerService, Utils, Logger, etc.) without import.
"""

import sys
import os
import re

KNOWN_SERVICES = [
    "TimerService",
    "Utils",
    "Logger",
    "DraftManager",
    "MainModel",
    "NavigationRoutes"
]

def validate_file(filepath):
    errors = []
    if not os.path.isfile(filepath):
        return [f"File not found: {filepath}"]

    try:
        with open(filepath, "r", encoding="utf-8", errors="ignore") as f:
            content = f.read()
    except Exception as e:
        return [f"Could not read file: {e}"]

    file_dir = os.path.dirname(os.path.abspath(filepath))

    # Check 1: Missing base imports in .qml files
    if filepath.endswith(".qml"):
        import_lines = re.findall(r"^\s*import\s+.+$", content, re.MULTILINE)
        has_root_object = re.search(r"^\s*(?:[A-Z]\w+|Item|Rectangle|Page|Component|QtObject|Column|Row)\s*\{", content, re.MULTILINE)
        if not import_lines and has_root_object:
            errors.append("File contains QML objects but has NO import statements (missing QtQuick/Lomiri imports).")

    # Check 2: Relative file/folder imports in QML
    # Matches: import "path" or import "path" as Alias or import "../path"
    qml_imports = re.findall(r"^\s*import\s+[\"']([^\"']+)[\"'](?:\s+as\s+(\w+))?", content, re.MULTILINE)
    for rel_path, alias in qml_imports:
        target_path = os.path.normpath(os.path.join(file_dir, rel_path))
        if not os.path.exists(target_path):
            errors.append(f"Import path not found: \"{rel_path}\" (resolved to: {target_path})")

    # Check 3: Relative .import in JavaScript files (.pragma library)
    # Matches: .import "path" as Alias
    js_imports = re.findall(r"^\s*\.import\s+[\"']([^\"']+)[\"']\s+as\s+(\w+)", content, re.MULTILINE)
    for rel_path, alias in js_imports:
        target_path = os.path.normpath(os.path.join(file_dir, rel_path))
        if not os.path.exists(target_path):
            errors.append(f"JS pragma import not found: \"{rel_path}\" (resolved to: {target_path})")

    # Check 4: Unimported service aliases
    for service in KNOWN_SERVICES:
        # Check if service is called (e.g. TimerService.start())
        if re.search(r"\b" + service + r"\.", content):
            # Check if imported in QML or JS
            qml_alias = re.search(r"import\s+.*?as\s+" + service + r"\b", content)
            js_alias = re.search(r"\.import\s+.*?as\s+" + service + r"\b", content)
            # Or defined in the file itself (e.g. var TimerService = ...)
            local_decl = re.search(r"\b(?:var|let|const|function|property\s+var)\s+" + service + r"\b", content)
            if not qml_alias and not js_alias and not local_decl:
                # Exclude file if it's the actual implementation file of that service
                base_name = os.path.splitext(os.path.basename(filepath))[0]
                if base_name.lower() not in service.lower():
                    errors.append(f"Identifier \"{service}\" is used, but missing \"import ... as {service}\"")

    return errors

def main():
    if len(sys.argv) < 2:
        print("Usage: check_imports.py <file1> [file2...]")
        sys.exit(1)

    has_errors = False
    for filepath in sys.argv[1:]:
        if not filepath.endswith((".qml", ".js")):
            continue
        errs = validate_file(filepath)
        if errs:
            has_errors = True
            print(f"[FAIL] Import check failed in {filepath}:")
            for err in errs:
                print(f"  - {err}")

    if has_errors:
        sys.exit(1)
    sys.exit(0)

if __name__ == "__main__":
    main()
```

---

### Script 3: `scripts/lint.sh`

De primaire testuitvoerder die wordt aangeroepen door de pre-commit hook en CI-pipelines. Het script voert de volgende stappen uit:
* `qmllint` met de juiste import-includevlaggen (`-I qml -I models -I qml/components/system`).
* `scripts/check_imports.py` op QML- en JavaScript-bestanden.
* `python3 -m py_compile` voor validatie van de Python-syntaxis.

```bash
#!/usr/bin/env bash
# ==============================================================================
# Local Linting & Syntax Verification Script
# Read-only verification for QML, JavaScript, and Python files.
# Never modifies files or causes merge conflicts.
# ==============================================================================

set -o pipefail

# Text formatting
if [ -t 1 ]; then
    BOLD="\033[1m"
    GREEN="\033[32m"
    RED="\033[31m"
    YELLOW="\033[33m"
    BLUE="\033[34m"
    RESET="\033[0m"
else
    BOLD=""
    GREEN=""
    RED=""
    YELLOW=""
    BLUE=""
    RESET=""
fi

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$PROJECT_ROOT"

ERRORS=0
CHECKED=0
FAILED_FILES=()

# Check for qmllint
if ! command -v qmllint &> /dev/null; then
    echo -e "${RED}[ERROR] 'qmllint' is not installed or not in PATH.${RESET}"
    echo "Install it via your Qt/Ubuntu development packages (e.g. qtdeclarative5-dev-tools or qml-tools)."
    exit 1
fi

IMPORT_CHECKER="$PROJECT_ROOT/scripts/check_imports.py"

lint_qml_js() {
    local file="$1"
    ((CHECKED++))
    local file_failed=0

    # 1. Grammar & Bracket Syntax check via qmllint
    local qml_out
    qml_out=$(qmllint -I qml -I models -I qml/components/system "$file" 2>&1)
    local qml_status=$?
    if [ $qml_status -ne 0 ] || [ -n "$qml_out" ]; then
        echo -e "${RED}[FAIL] Syntax Error:${RESET} $file"
        if [ -n "$qml_out" ]; then
            echo "$qml_out" | sed 's/^/  /'
        fi
        file_failed=1
    fi

    # 2. Deep Import & Symbol validation via check_imports.py
    if [ -x "$IMPORT_CHECKER" ]; then
        local imp_out
        imp_out=$("$IMPORT_CHECKER" "$file" 2>&1)
        local imp_status=$?
        if [ $imp_status -ne 0 ]; then
            echo -e "${RED}[FAIL] Import Error:${RESET} $file"
            if [ -n "$imp_out" ]; then
                echo "$imp_out" | sed 's/^/  /'
            fi
            file_failed=1
        fi
    fi

    if [ $file_failed -eq 1 ]; then
        ((ERRORS++))
        FAILED_FILES+=("$file")
    fi
}

lint_python() {
    local file="$1"
    ((CHECKED++))
    local output
    output=$(python3 -m py_compile "$file" 2>&1)
    local status=$?
    if [ $status -ne 0 ]; then
        echo -e "${RED}[FAIL] Python Syntax Error:${RESET} $file"
        if [ -n "$output" ]; then
            echo "$output" | sed 's/^/  /'
        fi
        ((ERRORS++))
        FAILED_FILES+=("$file")
    fi
}

echo -e "${BOLD}${BLUE}[INFO] Starting codebase linting...${RESET}\n"

# If specific files were passed as arguments, check only those
if [ "$#" -gt 0 ]; then
    for file in "$@"; do
        if [ ! -f "$file" ]; then
            echo -e "${YELLOW}[WARN] Skipping non-existent file: $file${RESET}"
            continue
        fi

        case "$file" in
            *.qml|*.js)
                lint_qml_js "$file"
                ;;
            *.py)
                lint_python "$file"
                ;;
            *)
                # Non-lintable file, skip silently
                ;;
        esac
    done
else
    # Full codebase scan (excluding build, .git, .clickable, .agent)
    while IFS= read -r -d '' file; do
        lint_qml_js "$file"
    done < <(find qml models -type f \( -name "*.qml" -o -name "*.js" \) -not -path "*/build/*" -print0)

    while IFS= read -r -d '' file; do
        lint_python "$file"
    done < <(find . -maxdepth 2 -type f -name "*.py" -not -path "*/build/*" -not -path "*/.git/*" -not -path "*/.clickable/*" -not -path "*/.agent/*" -print0)
    
    if [ -d "src" ]; then
        while IFS= read -r -d '' file; do
            lint_python "$file"
        done < <(find src -type f -name "*.py" -not -path "*/__pycache__/*" -print0)
    fi
fi

echo ""
echo "------------------------------------------------------------"
if [ $ERRORS -eq 0 ]; then
    echo -e "${GREEN}${BOLD}[SUCCESS] All $CHECKED files passed syntax and import validation.${RESET}"
    exit 0
else
    echo -e "${RED}${BOLD}[ERROR] Linting failed: $ERRORS error(s) found across $CHECKED checked files.${RESET}"
    echo -e "${RED}Failed files:${RESET}"
    for failed in "${FAILED_FILES[@]}"; do
        echo -e "  - $failed"
    done
    exit 1
fi
```

---

## 5. Handmatige uitvoering

U kunt lintingcontroles op elk gewenst moment lokaal uitvoeren zonder een commit te activeren:

### Specifieke bestanden controleren
```bash
./scripts/lint.sh qml/Main.qml src/backend.py
```

### De volledige codebase controleren
```bash
./scripts/lint.sh
```

### Imports direct valideren
```bash
python3 scripts/check_imports.py qml/Main.qml models/TaskModel.js
```

---

## 6. Probleemoplossing

> [!WARNING]
> Als `qmllint` ontbreekt, wordt `scripts/lint.sh` afgebroken met een foutmelding. Zorg ervoor dat u `qtdeclarative5-dev-tools` (of een vergelijkbaar Qt-ontwikkelpakket) op uw Linux-systeem installeert.

* **Hook wordt niet uitgevoerd bij `git commit`**:
  Controleer of `.git/hooks/pre-commit` bestaat en uitvoeringsrechten heeft:
  ```bash
  chmod +x .git/hooks/pre-commit
  ```
* **Linting mislukt op staged bestanden**:
  Lees de foutmelding zorgvuldig. Corrigeer de syntaxis of de ontbrekende import, zet de gecorrigeerde bestanden klaar met `git add` en herhaal `git commit`.
* **Noodomzeiling**:
  Als u toch moet committen terwijl een probleem offline wordt opgelost, voegt u `--no-verify` toe:
  ```bash
  git commit -m "WIP: noodherstel" --no-verify
  ```
  Houd er rekening mee dat externe CI nog steeds wordt uitgevoerd en het mergen naar `main`- en `release`-branches blokkeert totdat alle controles slagen.
