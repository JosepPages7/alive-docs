---
title: Starter templates
description: The ready-made workspaces that ship with ALive Analysis, what each one shows, and how to create a workspace from a template.
---

# Starter templates

ALive Analysis includes ready-made workspaces, called templates, that you can create in one step and then adapt.

## Create a workspace from a template

1. Open the **ALive Workspace Studio**.
2. In the **Workspaces** panel, choose **+**, and then choose **From a template**. A submenu lists the templates, each with a short description. You can also choose **File** > **New from template**, which lists the same templates.
3. Choose a template.

The Studio creates the workspace, named after the template (with a number, such as **Sales analysis (2)**, when the name is taken), and opens it. Like any new workspace, only administrators can run it until you share it. See [Who can see and run workspaces](workspace-permissions.md).

The templates' titles and texts are also available in Spanish. The worksheet labels of the **Financial ratios** and **Sales scorecard** Sheet views are in English for every user.

## The templates

| Template | What it shows |
| --- | --- |
| **Sales analysis** | Sales and profit by customer and month: top customers, countries, the monthly trend and headline KPIs. |
| **Purchase analysis** | Purchases by vendor and month: top vendors, countries, the monthly trend and the headline figure. It also opens from the vendor card and list. |
| **Receivables & payables aging** | Open customer and vendor entries in aging buckets at the work date (not due, 1-30, 31-60, 61-90 and over 90 days). |
| **G/L by period** | The general ledger by account and month: the income statement with its monthly result as a bridge, and the balance sheet movements. |
| **Item sales & margin** | Sales, cost and margin by item and month, with the item category: margin % by category, best sellers and the monthly pattern. |
| **Item sales by category** | A code dataset (script) with sales, cost and margin by item and month and the whole item category tree, at any depth. |
| **Financial ratios** | Margins, returns and the balance sheet structure for the period you choose at run against the same period a year earlier, calculated in a [Sheet view](workspace-sheet-view.md) from each G/L account's **Account Category**: revenue, cost of goods sold, gross profit, operating expenses, net income, assets, liabilities and equity, and ratios such as gross and net margin, return on assets and equity, and debt to equity. The current and quick ratios aren't included, because they depend on how your chart of accounts is set up. |
| **Sales scorecard** | The last fiscal year of the run month by month against the same month a year earlier, in a [Sheet view](workspace-sheet-view.md): sales, the change %, profit, margin % and sales year to date. |
| **CEO dashboard** | Five pages: an overview with KPI tiles, sales, profit and loss against the G/L budget, cash and working capital, and the order backlog. |

## How the templates get their data

Most templates read the totals that customers, vendors, items and G/L accounts already calculate (their FlowFields), month by month, rather than scanning every ledger entry. This keeps them fast in large companies. The aging template reads the open ledger entries, because it needs each entry's due date.

Most templates ask for the period when they run and start from a default period, such as **This fiscal year** or **Fiscal year to date** for the CEO dashboard. The aging template takes no period. See [Ask for filters at run](workspace-run-options.md).

## Adapt a template

A workspace created from a template is an ordinary workspace: change its datasets, layout columns, views and settings as you like. Changes don't affect the template, and you can create a fresh copy at any time.

## Related information

- [Create a workspace in the Workspace Studio](workspace-studio.md)
- [ALive Workspaces overview](workspaces-overview.md)
- [The Sheet view](workspace-sheet-view.md)
