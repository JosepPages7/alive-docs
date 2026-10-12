---
title: Describe a workspace
description: How to have ALive AI design a new workspace from a description in the Workspace Studio, and what to check before you save it.
---

# Describe a workspace

**Describe a workspace** designs a new ALive Workspace, with its datasets, views and pages, from the analysis you describe in your own words.

## Describe a new workspace

1. Choose the search icon, enter **ALive Workspace Studio**, and then choose the related link.
2. On the **File** menu, choose **Describe a workspace…**. You can also choose it on the **+** menu of the Workspaces panel.
3. In the **Describe a workspace** dialog, describe the analysis: what to see, by what and over which period. Or choose one of the samples: **Sales per customer**, **Inventory per location**, **G/L accounts by month** or **Purchases per vendor**.
4. Choose **Generate**. The assistant works for a while: it looks up table and field definitions, designs the datasets, checks them, and then designs the views and pages.
5. Review the result, and then choose **Keep it**, **Regenerate** or **Discard it**.

> [!IMPORTANT]
> Name tables and fields, but never type customer names, amounts or other business data. The description is sent to the AI provider.

## What the result shows

| Field | What it shows |
|---|---|
| **Plan** | What the AI model built and why: the datasets, the tables and FlowFields they read, and what you enter when the workspace runs. |
| **Datasets** | Each dataset with its tables, fields, what is asked at run, fixed filters and period splits, and the views and pages. |
| **Query Advisor Tips** | The Query Advisor tips the workspace still has. The model saw them and kept its design. Review them in the Query Designer. |
| **Sent to the AI Provider** | How many requests the workspace took and their tokens. Choose the value to see the exact text of the last request. |

**Keep it** opens the workspace in the Workspace Studio as a new, unsaved workspace. Nothing is saved until you save it there.

## How the assistant designs

- It prefers queries over the FlowFields of master tables, which Business Central calculates efficiently. It writes a script dataset only when a query can't express what you ask, and uses a report or financial report only when you ask for one.
- Every proposal goes through the same checks as a workspace you design by hand. When a check fails, the model gets the errors and tries again, up to three times.
- It designs views (lists, pivots, charts, KPIs and slicers) and arranges them on pages.

## Before you save

- **Report and financial report datasets**: the assistant doesn't set their options. The dataset line says to choose them with **Report options…** or **Financial report options…** before the first run.
- **Script, report and financial report datasets** have no columns until they run, so the assistant designs no view for them. Run the workspace and add their views.
- Run the workspace and check the figures. The assistant never sees data, so it can't notice that a result looks wrong.

## Tables the assistant can use

The assistant designs over 27 standard tables: Customer, Vendor, Item, G/L Account, Project, Resource, Fixed Asset, Bank Account, Salesperson/Purchaser and Location; their ledger entries (G/L, customer, vendor, item, value, project, resource, fixed asset and bank account ledger entries); the sales and purchase headers and lines; G/L budget names and entries, dimension values and item categories. If what you ask needs another table, the assistant usually ends with "The AI model answered without a workspace. Try again, or describe the analysis in other words."

## Limits

- Up to 20 requests per **Generate**.
- Up to 5 datasets per workspace, and up to 8 data items per query.
- Up to 12 views on up to 6 pages.

## Related information

- [Improve or explain a workspace](improve-or-explain-a-workspace.md)
- [Suggest views](suggest-views.md)
- [Troubleshoot unfinished AI answers](troubleshoot-unfinished-answers.md)
