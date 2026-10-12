---
title: ALive Sheets overview
description: What an ALive Sheet is, what it can hold, where to open one, and what its toolbar offers.
---

# ALive Sheets overview

An ALive Sheet is a spreadsheet inside Business Central: cells and formulas you type, results of ALive queries, and an optional script that reads Business Central data into cells.

## What a sheet holds

| Part | What it does |
|---|---|
| Worksheets | Tabs with cells, formulas and formatting, like in any spreadsheet |
| Queries | ALive queries, designed in the Query Designer, whose results are written into cells. You refresh them when you want, or each time the sheet opens. See [Show query results in a sheet](sheet-queries.md). |
| Script | A program that reads Business Central data and writes it into cells, and that can define your own formula functions. A sheet script can never change Business Central data. See [Write and run a sheet script](sheet-scripts.md). |
| Description | A short text that users see next to the sheet's name in the **ALive Analysis** list |

Sheets are shared by all companies of the environment. Queries and scripts read the data of the company you work in.

## Where to open a sheet

| Page | Use it to |
|---|---|
| **ALive Sheets** (search for it with Tell Me) | Open, create and manage sheets. The page opens with the Sheets panel showing the sheets you may use, and your last-opened sheet selected. Press Enter or click a sheet to open it. Nothing is loaded until you pick a sheet. |
| **ALive Analysis** | Open the workspaces and sheets you may use, from one list. Select a sheet and choose **Open**. See [Open workspaces and sheets from ALive Analysis](alive-analysis-page.md). |

## Who can do what

Sheet administrators create, design and share sheets. Other users open the sheets that are shared with them, with **Use** or **Edit** access. See [Use and Edit access to a sheet](sheet-access.md).

## The toolbar

| Button or menu | What it does |
|---|---|
| Sheets panel | Shows or hides the list of sheets. |
| **Save** | Saves the sheet (Ctrl+S). Available to administrators and users with **Edit** access. |
| **Script** | **Run** the script (F5), **Edit** the script (Ctrl+Shift+E, administrators only), and **Recalculate** all formulas (F9) |
| **Queries** | **New Query…**, **Edit Query…** and **Manage…** (administrators only), **Refresh…**, and **Refresh All** (Ctrl+Shift+R) |
| Full screen | Shows the sheet on the whole screen. |

The status area in the toolbar shows the outcome of the last action, such as **Script completed** or the number of rows a query wrote.

## Related pages

- [Create and edit a sheet](sheet-create-and-edit.md)
- [Show query results in a sheet](sheet-queries.md)
- [Refresh query results in a sheet](sheet-query-refresh.md)
- [Write and run a sheet script](sheet-scripts.md)
- [Sheet functions for scripts](sheet-script-functions.md)
- [Use formulas and custom functions](sheet-formulas.md)
- [Export and import sheets](sheet-export-import.md)
- [Use and Edit access to a sheet](sheet-access.md)
- [Troubleshoot ALive Sheets](sheet-troubleshooting.md)
- [Troubleshoot sheet script errors](sheet-script-errors.md)
