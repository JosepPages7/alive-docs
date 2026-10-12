---
title: Troubleshoot running workspaces
description: The messages that can appear when a workspace or one of its datasets runs, what causes them and how to fix them.
---

# Troubleshoot running workspaces

This page explains the messages that appear when a workspace runs; in the messages, the parts in angle brackets change.

When one dataset fails, its views show the error and the other datasets still load. Fix the cause, then choose **Refresh** (F5) or **Refresh this dataset** on the view tab.

## The workspace or a dataset isn't ready

### The workspace has no dataset yet: add one in the Workspace Studio.

Also shown as **This workspace has no dataset yet. Add one in the Workspace Studio.** An administrator adds a dataset. See [Add and manage datasets](workspace-datasets.md).

### The dataset "\<name\>" has no data source yet: design a query, write the code or pick a report or a financial report first.

Choose the pencil on the dataset in the Studio and set up its source.

### The report of the dataset "\<name\>" has no columns yet: open its report options (the pencil) to detect them.

### The financial report of the dataset "\<name\>" has no columns yet: open its options (the pencil) to detect them.

The dataset was created without its options, for example by an assistant. Choose the pencil and choose **OK** in the options to detect the columns.

### Cannot run: a column references a missing source column - \<column\>. Delete it or pick another source column.

The source no longer has a column the layout uses. In the Studio, delete the layout column marked **(missing)** or pick another **Source column**.

### The dataset "\<name\>" takes an output of a script the workspace no longer has: pick its script again in the Workspace Studio.

The code dataset whose script fed this dataset was deleted. Delete this dataset, or add it again from another code dataset's **⋯** menu with **Add a dataset from an output…**.

## Permissions and scripts

### You do not have permission to read table \<table\>.

Your Business Central permissions don't allow you to read a table the dataset uses. Ask your administrator for read access.

### SandboxViolation: \<statement\> is not allowed in sandboxed scripts - persisted data cannot be created, modified or deleted at line \<n\>

Workspace scripts can't write to the database. Use temporary records instead. See [Code datasets (scripts)](workspace-script-dataset.md).

## Reports and financial reports

For messages of report and financial report datasets, see [Troubleshoot report and financial report datasets](workspace-troubleshooting-reports.md).

## Run dialog

| Message | Fix |
| --- | --- |
| Enter the first and the last date of the period, the first on or before the last. | Fill in **From** and **To**. |
| Enter the date filter of the period, for example 010125..T. | Fill in **Date filter**. |
| A financial report of this workspace takes the period: enter one range of dates, without \|. | Use one range, such as `010125..311225`. |
| Select the companies, or choose another option. | Fill in **Company filter**, or choose another **Companies** option. |

## In the views

| What you see | Cause and fix |
| --- | --- |
| **#ERROR** in a cell | A calculated column's formula fails on that row. Edit the formula. |
| **Drill-down is not available for multi-company queries.** | Rows from several companies can't open one company's page. |
| **Too many tiles** | A KPI view would show over 500 tiles. Pick a coarser **Tiles by** field. |
| **The workspace could not be started. Please try again, and contact your administrator if it keeps happening.** | Close the viewer and open the workspace again. |

## Related information

- [Ask for filters at run](workspace-run-options.md)
- [Troubleshoot opening and saving workspaces](workspace-troubleshooting-access.md)
- [Troubleshoot report and financial report datasets](workspace-troubleshooting-reports.md)
