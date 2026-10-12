---
title: Ask for filters at run
description: How workspace datasets ask users for filters and options when the workspace runs, how the Run the workspace dialog works, and how answers are remembered.
---

# Ask for filters at run

A workspace can ask users for filters and options each time it runs, such as the period, the companies or a customer range, so one workspace serves many questions.

## Which datasets ask

| Dataset | Asks when | What the user sees |
| --- | --- | --- |
| Query | Its query has fields marked **Ask at run** in the Query Designer | Business Central's filter dialog |
| Code (script) | Its script has a request page | The script's request page |
| Report | **Ask for the report options at run** is on in its dataset settings | The report's request page |
| Financial report | **Ask for the financial report options at run** is on in its dataset settings | The **Financial report options** dialog |

A dataset that doesn't ask always runs with the filters and options its designer set.

## The Run the workspace dialog

When only one dataset asks, its own dialog opens. When two or more datasets ask, one **Run the workspace** dialog opens instead:

| Field | What it does |
| --- | --- |
| **Period** | The dates every asking dataset runs with, from the work date: **Each dataset's own dates**, a calendar choice such as **Year to date** or **Last 12 months**, a fiscal choice such as **Fiscal year** (from your accounting periods), **Fixed dates** (**From** and **To**) or **Date filter**. A date filter such as `010125..T` is worked out again at every run. |
| **Companies** | **Each dataset's own companies**, **This company**, **All companies** or **Selected companies** (with a **Company filter**). Applies to multi-company queries and financial reports. |
| Dimension filters | One filter per global or shortcut dimension that some dataset takes, such as **Department Filter**. Blank means each dataset's own filter. |
| **Datasets** | Each dataset with the filters it will run with. Choose **Edit…** on a line to open that dataset's own dialog, filled in with the period and companies. |

The period reaches a query's first **Ask at run** date field, a report's first date filter field, a financial report's dates, and a script's `DateFilter`, `StartDate` and `EndDate` variables. A dataset that doesn't ask at run is never changed by the dialog.

## Default period at run

An administrator can set **Default period at run** in the **Workspace settings** of the Studio. The run dialog then starts with that period, and it opens even when only one dataset asks for dates. Each user's own last choice still wins.

## Remembered answers

- Your answers are remembered for you, so the next run starts from them. Each dataset's own answers are remembered per company; the choices in the **Run the workspace** dialog apply in every company.
- **Refresh** (F5), at the bottom of the viewer's right edge, runs again with the same answers and doesn't ask.
- In the **Views** menu, **Run options…** asks again.
- A view tab's menu has **Refresh this dataset** when the workspace has several datasets: it runs only that view's dataset again.

Choosing **Cancel** in a dialog stops the run; datasets that already loaded keep their rows.

## Related information

- [Query datasets](workspace-query-dataset.md)
- [Code datasets (scripts)](workspace-script-dataset.md)
- [Troubleshoot running workspaces](workspace-troubleshooting-run.md)
