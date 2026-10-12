---
title: Financial report datasets
description: How to use a Business Central financial report as a workspace dataset, what each option does, and the limits of period, dimension and multi-company splits.
---

# Financial report datasets

A financial report dataset calculates a Business Central financial report, such as an income statement, with Business Central's own calculation and shows it as rows you can pivot, chart and drill into.

## Add a financial report dataset

1. In the **ALive Workspace Studio**, in the **Datasets** panel, choose **Add** > **Financial report dataset** > **Use a financial report…**.
2. In the **Pick a financial report** list, choose the financial report.
3. The **Financial report options** dialog opens, filled in from the financial report. Set the options, and then choose **OK**.

The columns come from the report's column definition, and the dataset takes the report's title. To change the options later, choose the pencil (**Financial report options…**). The financial report itself can't be changed after you pick it. The options never change the financial report in Business Central.

## Options

| Option | What it does |
| --- | --- |
| **Dates** | The dates of the amounts, from the work date: **Report default (work date)**, a calendar or fiscal period such as **Year to date** or **Fiscal year**, **Fixed dates** (shows **Date Filter**), or **Custom formulas** (shows **Start Date Formula**, **End Date Formula** and **Period Formula**). **Dates used** shows the dates the choice gives today. |
| **Split by period** | Repeats the statement for every **Day**, **Week**, **Month**, **Quarter** or **Year** of the dates, with a period column. The dates must be a closed range. |
| Dimension filters | A filter on each dimension of the financial report. |
| **Split by dimension** | Repeats the statement for every value of one dimension, such as a statement per department. |
| **Business Unit Filter** / **Split by business unit** | Shown where business units exist. Filters, or repeats the statement for, the consolidated subsidiaries. |
| **G/L Budget Filter** | The budget used by the budget columns. |
| **Use Additional Currency** | Shows the amounts in the additional reporting currency. |
| **Companies** | Blank for this company, `*` for every company, or a filter on company names such as `CRONUS*`. |
| **Show All Lines** | Also shows the lines the row definition hides. |

To let users choose the options at run, turn on **Ask for the financial report options at run** in the dataset's **Settings…**. See [Ask for filters at run](workspace-run-options.md).

## How the statement looks

Lines keep their bold, italic, underline and indentation. The amount columns aren't added up, because the statement has its own total lines. A pivot of the dataset starts with the descriptions down and the periods across. Clicking an amount opens Business Central's own drilldown, such as the G/L entries behind it.

## Splits and their limits

- A period split allows at most 120 periods.
- A dimension split lists the dimension's values, then the entries with no value (when the dimension isn't filtered), then a **Total**. Values without any amount are skipped. At most 500 values are allowed; filter the dimension if there are more.
- A split by business unit replaces the split by dimension.

## Several companies

With **Companies**, the statement is repeated per company with a **Company** column. All companies must share this company's chart of accounts. A row definition that uses an analysis view, cost types or cash flow accounts can't run in several companies. Companies where you can't read the general ledger, or that have none of the statement's accounts, are skipped. There's no drilldown and no total across companies.

## Nothing is saved

The calculation runs in a way that rolls back anything written to the database. It uses the general ledger permissions of the user who runs the workspace.

## Related information

- [Add and manage datasets](workspace-datasets.md)
- [Troubleshoot report and financial report datasets](workspace-troubleshooting-reports.md)
