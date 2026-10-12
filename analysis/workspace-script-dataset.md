---
title: Code datasets (scripts)
description: How to write the script of a code dataset, the Dataset functions it uses, what a sandboxed script can't do, and how it takes filters at run.
---

# Code datasets (scripts)

A code dataset gets its rows from a script written in the ALive script language, which follows AL syntax: the script reads data and adds the rows the dataset shows.

## Add a code dataset

1. In the **ALive Workspace Studio**, in the **Datasets** panel, choose **Add** > **Code dataset** > **Write a script…**.
2. Write the script in the code editor. Use **Samples** for ready-made examples; the **Workspaces** samples show the basics.
3. Choose **Compile** (Ctrl+Shift+B) to check the script, then **Compile, save and close** (F4).

The editor doesn't run the script. The Studio runs it with a small row limit to discover its columns (**Rows read to discover the columns** in the dataset settings), and the viewer runs it in full.

## Dataset functions

The script declares its columns and adds rows with these functions:

| Function | What it does |
| --- | --- |
| `Dataset.AddColumn(Name, Caption, Type [, Aggregation])` | Declares a column before the first row. Type is Text, Number, Boolean, Date, DateTime or Time. Aggregation is sum, avg, min, max, count or blank. |
| `Dataset.AddRow(Value1, …)` | Adds a row with one value per declared column. |
| `Dataset.SetValue(Column, Value)` and `Dataset.NextRow()` | Fill a row column by column, then add it. |
| `Dataset.RowCount()` | The rows added so far. |
| `Dataset.IsPreview()` | True while the Studio discovers the columns, so the script can skip slow work. |
| `Dataset.SetOutput(Name)` | Sends the next columns and rows to another output. See below. |
| `Dataset.Context()` / `Dataset.ContextTable()` | The record filter and table number when the workspace opens from a card or list. See [Open a workspace from a card or list](workspace-open-in-context.md). |

## What a workspace script can't do

Workspace scripts run in a sandbox, with the permissions of the user who runs the workspace. A script can read any table the user can read and use temporary records freely, but it can't:

- Insert, modify or delete database records.
- Use `Commit`, `Validate` or `LockTable`.
- Run codeunits or reports, or use codeunit variables.

A script that tries gets an error that starts with **SandboxViolation:** or says the statement **is not allowed in sandboxed scripts**. Opening a page with `Page.Run` is allowed.

## Filters at run

A script can declare a `requestpage`. Users fill it in when they run the workspace, and their answers are saved for them. **Refresh** reuses the last answers.

When the run dialog asks for a **Period**, it reaches the request page fields bound to these variables: `DateFilter` (Text or Code) gets the date filter, and `StartDate` and `EndDate` (Date) get the first and last date. Dimension filters reach `GlobalDim1Filter`, `GlobalDim2Filter` and `ShortcutDim3Filter` to `ShortcutDim8Filter`. See [Ask for filters at run](workspace-run-options.md).

## Several datasets from one script

One script can feed several datasets, for example a summary and its details:

1. In the script, call `Dataset.SetOutput('Monthly')` before the columns and rows of that output.
2. In the dataset's **⋯** menu, choose **Add a dataset from an output…** and enter the output name.

The script runs once per run and feeds every dataset that takes one of its outputs. They share one request page.

## With the ALive AI app

If the ALive AI app is installed and enabled, the code editor has an **Assistant** menu: **Write a script…**, **Fix this script…** and **Explain this script…**.

## Related information

- [Add and manage datasets](workspace-datasets.md)
- [Troubleshoot running workspaces](workspace-troubleshooting-run.md)
