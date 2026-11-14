---
title: Financial report datasets
description: How to create a workspace from your Business Central financial reports or add one as a dataset, what each option does, and the limits of period, dimension and multi-company splits.
---

# Financial report datasets

A financial report dataset calculates a Business Central financial report, such as an income statement, with Business Central's own calculation and shows it as rows you can pivot, chart and drill into.

## Create a workspace from financial reports

Financial reports are your company's own, so no starter template can include them. Instead, create a workspace directly from the financial reports you already have, such as your balance sheet and income statement.

1. Open the **ALive Workspace Studio**.
2. In the **Workspaces** panel, choose **+**, and then choose **From a financial report…**. You can also choose **File** > **From a financial report…**.
3. In the **Pick the financial reports** dialog, turn on **Include** for every financial report you want, and then choose **OK**.
4. If you included one financial report, the **Financial report options** dialog opens. Set the options, and then choose **OK**. If you included several, each one starts with the options of its financial report in Business Central.
5. Choose **Save**.

The Studio creates the workspace with one dataset per financial report and opens it. With one financial report, the workspace takes its name. With several, the workspace is named **Financial reports**. A number is added, such as **Financial reports (2)**, when the name is taken. If you choose **Cancel** or include nothing, no workspace is created.

Each financial report gets these starter views:

| View | What it shows |
| --- | --- |
| **Financial statement** | The statement as a list. When the options split it by period or dimension, a pivot with the periods or dimension values across. |
| **Waterfall** | A waterfall chart of the first amount column, with the total lines as subtotal bars. Only when the statement isn't split. |

With several financial reports, each one has its own page, named after the financial report. The views are ordinary views: change or delete them as you like. See [Views and pages](workspace-views-and-pages.md).

Like any new workspace, only administrators can run it until you share it. See [Who can see and run workspaces](workspace-permissions.md).

## Add a financial report dataset

To add a financial report to a workspace you already have:

1. In the **ALive Workspace Studio**, in the **Datasets** panel, choose **Add** > **Financial report dataset** > **Use a financial report…**.
2. In the **Pick a financial report** list, choose the financial report.
3. The **Financial report options** dialog opens, filled in from the financial report. Set the options, and then choose **OK**.
4. A **Starter views** message asks whether to add the **Financial statement** and **Waterfall** views of the new dataset. Choose **Add views** or **Not now**. The message isn't shown while the workspace has other datasets and no saved views.

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
| **Ask for these options at run** | Shown only in the Studio. On: a user who runs the workspace gets this dialog, filled in with their last options. Off: the workspace always runs with the options set here. |

## Ask for the options at run

A new financial report dataset asks for its options at run, because a statement is usually read for a chosen period. To always run with the options you set, open the dataset's options with the pencil (**Financial report options…**) and turn off **Ask for these options at run**. Users don't see this switch in the dialog they get at run.

When several datasets ask at run, users get one **Run the workspace** dialog with a shared **Period** instead of one dialog per financial report. See [Ask for filters at run](workspace-run-options.md).

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
- [Create a workspace in the Workspace Studio](workspace-studio.md)
- [Starter templates](workspace-templates.md)
- [Troubleshoot report and financial report datasets](workspace-troubleshooting-reports.md)
