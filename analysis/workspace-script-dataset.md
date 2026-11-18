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

One script can feed several datasets, for example a summary and the details behind it. Each dataset has its own columns, layout and views, but the data is read in one pass and the user answers one request page.

### Write the outputs

Everything the script adds before its first `Dataset.SetOutput` goes to the default output. `Dataset.SetOutput(Name)` starts another output: the columns and rows that follow belong to it. This script sends one row per customer to the default output and the open entries behind each balance to the output `OpenEntries`:

```al
var
    Customer: Record Customer;
    Entry: Record "Cust. Ledger Entry";
begin
    // the default output: one row per customer
    Dataset.AddColumn('No', 'No.', 'Text');
    Dataset.AddColumn('Name', 'Name', 'Text');
    Dataset.AddColumn('Balance', 'Balance (LCY)', 'Number', 'sum');
    Customer.SetAutoCalcFields("Balance (LCY)");
    if Customer.FindSet() then
        repeat
            Dataset.AddRow(Customer."No.", Customer.Name, Customer."Balance (LCY)");
        until Customer.Next() = 0;

    // the output "OpenEntries": the open entries behind those balances
    Dataset.SetOutput('OpenEntries');
    Dataset.AddColumn('Customer', 'Customer No.', 'Text');
    Dataset.AddColumn('PostingDate', 'Posting Date', 'Date');
    Dataset.AddColumn('DocumentNo', 'Document No.', 'Text');
    Dataset.AddColumn('Remaining', 'Remaining Amt. (LCY)', 'Number', 'sum');
    Entry.SetRange(Open, true);
    Entry.SetAutoCalcFields("Remaining Amt. (LCY)");
    if Entry.FindSet() then
        repeat
            Dataset.AddRow(Entry."Customer No.", Entry."Posting Date", Entry."Document No.", Entry."Remaining Amt. (LCY)");
        until Entry.Next() = 0;
end;
```

The same script is in the code editor under **Samples** > **Several datasets from one script (Dataset.SetOutput)**.

An output name has letters, digits and underscores and doesn't start with a digit. Names are compared without regard to case. `Dataset.SetOutput('')` goes back to the default output, and switching back to an output continues where it stopped.

### Add a dataset for each output

1. Add the code dataset and write the script. This dataset shows the default output.
2. In its **⋯** menu, choose **Add a dataset from an output…**.
3. Pick the output in the list and choose **Add**. The list shows the names the script passes to `Dataset.SetOutput`, the ones no dataset shows yet first. When the script passes the name in a variable, type the name instead.

The new dataset is named after the output and shows a link icon. A second line under its name says which output it takes, for example **↳ output "OpenEntries" of Customers**. To show another output in an existing dataset, change **Output** in its **Settings…**.

### How the datasets work together

- **One script.** A dataset that takes an output has no script of its own. Its pencil, **Edit the script of "\<name\>"…**, opens the script of the dataset that owns it.
- **One run.** The script runs once per run, or per **Refresh**, and feeds every dataset that takes one of its outputs. A script error fails all of them.
- **One request page.** The datasets share the request page and the saved answers.
- **Deleting.** Deleting the script's dataset also deletes the datasets that take its outputs. The confirmation names them.
- **Max rows.** The **Max rows** of the script's dataset caps every output. An output that reaches it keeps its first rows, and the other outputs aren't cut.
- **Discovering the columns.** When the Studio discovers the columns of one output, the script still runs through the outputs before it. Use `Dataset.IsPreview()` to skip slow work while it does.

If the script doesn't write an output a dataset takes, the run fails. See [Troubleshoot running workspaces](workspace-troubleshooting-run.md).

## With the ALive AI app

If the ALive AI app is installed and enabled, the code editor has an **Assistant** menu: **Write a script…**, **Fix this script…** and **Explain this script…**.

## Related information

- [Add and manage datasets](workspace-datasets.md)
- [Troubleshoot running workspaces](workspace-troubleshooting-run.md)
