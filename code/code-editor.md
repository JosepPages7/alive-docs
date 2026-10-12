---
title: Use the ALive Code editor
description: Describes how to open the ALive Code editor, its layout, IntelliSense, samples and keyboard shortcuts.
---

# Use the ALive Code editor

The **ALive Code** page is a code editor in the Business Central web client where you write, save and run programs.

## Open the editor

1. Choose the search icon, enter **ALive Code**, and then choose the related link.
2. The editor opens on the last program you worked on. If no program exists yet, the editor is empty and the **SAMPLES** list is open.

You need the SUPER permission set to open the page. To learn more, go to [Permissions and access](permissions-and-access.md).

## The editor layout

| Area | What it does |
|---|---|
| Toolbar | The green **Run** button (F5) with an arrow that opens **Compile**, the **...** (**Editor actions**) menu, the program name, and **Toggle full screen**. A dot before the program name means there are unsaved changes. |
| **PROGRAMS** | Your saved programs in alphabetical order. **New program** creates one. The open program has its own **...** menu (**File actions**). To learn more, go to [Manage programs](programs.md). |
| **SAMPLES** | Ready-to-run example programs, grouped by category. Select the header to show or hide the list. |
| Code editor | Your code, with AL syntax colors, IntelliSense and error markers. |
| **OUTPUT** | What the program writes while it runs, and compile messages. **Clear the output** empties the pane. |

Drag the dividers between the areas to resize them. Your browser remembers the sizes.

## Write code

- A new program starts with an empty `var` and `begin`...`end;` template.
- Code without a `begin` keyword runs as it is, so a single line such as `console.log('Hello');` is a complete program.
- IntelliSense suggests table names, field names, record methods, option values after `::`, field names inside methods such as `SetRange`, `Validate` and `SetCurrentKey`, your own variables and procedures, built-in functions, and the methods of the [standard codeunits](standard-codeunits.md). Suggestions appear as you type a period, colon, parenthesis, comma or space. Press Ctrl+Space to show them at any time.
- Suggestions come from the tables and fields of your environment, including those added by installed extensions.
- When you compile or run, lines with errors are highlighted. Hover over a highlighted line to read the message.

## Editor actions

The **...** menu next to the **Run** button holds these actions:

| Action | Shortcut | What it does |
|---|---|---|
| **Find** | Ctrl+F | Searches the code. |
| **Replace** | Ctrl+H | Finds and replaces text. |
| **Toggle Line Comment** | Ctrl+/ | Comments or uncomments the selected lines. |
| **Command Palette** | F1 | Lists all editor commands. |
| **Data Explorer** | | Opens [ALive Data Explorer](data-explorer.md). |

## Use a sample

1. In the **SAMPLES** list, choose a sample.
2. Choose **Replace the current file** or **Create a new file**.

If the open program has unsaved changes, **Create a new file** is preselected, and **Replace the current file** discards those changes. A new file is named after the sample and saved right away. A replaced file stays unsaved until you save it.

| Category | Samples |
|---|---|
| Records | Read records with FindSet; Filter, sort and total records; Insert, Modify and Delete records; Write to a protected table (Permissions); Temporary tables |
| Collections | List of [Text]; Dictionary; Text methods and builtins |
| Language | Procedures and named returns |
| UI | Progress dialog; Request page with filters |
| Run Objects | Run pages (Page.Run / RunModal); Run reports (Report.Run / RunModal); Run codeunits (Codeunit.Run); Codeunit bindings (Base64, Regex, ...) |
| Excel | Export data to Excel; Import data from Excel |

The samples that write records remove the records they create. Run them in a sandbox environment.

## Keyboard shortcuts

| Shortcut | Action |
|---|---|
| F5 | Run the program. It's saved first. |
| Ctrl+Shift+B | Compile without running. |
| Ctrl+S | Save. |
| F2 | Rename the selected program in **PROGRAMS**. |

The browser reload keys Ctrl+F5, Ctrl+R and F9 are blocked on this page, so you don't reload it by accident.

## Close the editor

Close the page as you close any Business Central page. If there are unsaved changes, you're asked "You have unsaved changes. Do you want to save them before closing?". If you close or refresh the browser tab with unsaved changes, the browser warns you first.
