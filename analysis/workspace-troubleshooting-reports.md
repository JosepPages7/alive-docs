---
title: Troubleshoot report and financial report datasets
description: The messages that report and financial report datasets can show in a workspace, what causes them and how to fix them.
---

# Troubleshoot report and financial report datasets

This page explains the messages of report and financial report datasets; in the messages, the parts in angle brackets change.

For other messages while a workspace runs, see [Troubleshoot running workspaces](workspace-troubleshooting-run.md).

## Report datasets

### The report \<number\> does not exist (any more).

The report was removed, for example together with its extension. Delete the dataset, or add a new report dataset with another report.

### The report \<number\> stopped without returning its data.

The report ended before it produced its data, for example because of an error in the report or its options. Check the dataset's **Report options…** in the Studio, and print the report on its own to see its error.

### The data of the report \<number\> could not be read.

The report's data couldn't be read after the run. Run the workspace again; if the message stays, contact your administrator.

### A Business Central permission error while the report runs

A report runs with your own permissions. You need permission to run the report and to read its tables, as when you print it. Ask your administrator for those permissions.

## Financial report datasets

### The financial report \<name\> does not exist.

Also shown as **The financial report \<name\> does not exist (any more).** The financial report was deleted or renamed. Add a new financial report dataset.

### The financial report \<name\> is split by period, but its dates are not a closed range. Enter a date filter with a start and an end date, or start and end date formulas.

A period split needs a start and an end date. In the options, choose a period with both dates, such as **Fiscal year**, or enter fixed dates.

### The financial report \<name\> is split into more than \<n\> periods. Choose a shorter date range or a longer period.

For example, split a range of several years by **Month** or **Quarter** instead of **Day**.

### The financial report \<name\> is split by the dimension \<code\> into more than \<n\> values. Filter the dimension.

Enter a filter on that dimension in the options, so fewer values remain.

### The financial report \<name\> is split by the dimension \<code\>, which is not one of its dimensions.

### \<code\> is not a dimension of this financial report.

**Split by dimension** accepts only the dimensions of the financial report: the dimensions of its row definition's analysis view, or the global dimensions. Pick one from the lookup.

### The financial report \<name\> cannot run in several companies: its row definition uses an analysis view, cost types or cash flow accounts. Only G/L entries and G/L budget entries can be read in another company.

Clear **Companies** in the options, or use a row definition based on G/L accounts.

### A financial report calculated for several companies has no drilldown.

Amounts that span companies can't open one company's entries. Run the financial report for one company to drill down.

### The line \<n\> of the financial report \<name\> does not exist anymore: run the workspace again.

Also **The column \<n\> of the financial report \<name\> does not exist anymore: run the workspace again.** The financial report's row or column definition changed after the run. Choose **Refresh**, then drill down again.

## Related information

- [Report datasets](workspace-report-dataset.md)
- [Financial report datasets](workspace-financial-report-dataset.md)
