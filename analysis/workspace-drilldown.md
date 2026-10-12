---
title: Drill down to source rows and Business Central pages
description: How to see the rows behind a total in the Details pane, how cells open Business Central pages, and how designers set what a column opens.
---

# Drill down to source rows and Business Central pages

From any total in a workspace you can see the rows it adds up, and from a cell you can open the Business Central record behind it.

## See the source rows

The **Details pane** shows the dataset rows behind a number. Open it in any of these ways:

| Where | How |
| --- | --- |
| Pivot value cell | Double-click it, choose the small icon that appears when you point at it, or right-click and choose **Show source rows**. |
| Grouped list | Double-click a group row, or right-click it and choose **Show source rows**. |
| Chart | Double-click or right-click a bar, slice or point. |
| KPI tile | Double-click the tile, or right-click it. |

The pane opens below the page and names the view and the cell it came from, with a summary such as the total and the row count. It has its own **Export** to Excel or CSV. Choose **Dock on the right** or **Dock at the bottom** to move it, **Maximize** to give it the whole page, and close it when you're done. A new run of the dataset closes it.

## Open Business Central pages from a cell

In a list, a cell that opens a page is shown as a link. Select it to open the page, filtered to the data behind the cell. Pages open with your own permissions. In a pivot, right-click a row or column header and choose **Open** followed by the member name; in a grouped list, right-click a group row for the same action.

What a cell opens depends on its column:

| Opens | When |
| --- | --- |
| **Its record** | Automatic for a query column that is part of its table's primary key, such as a customer number. |
| **The related record** | Automatic for a query column related to another table. |
| **The entries behind the amount** | Automatic for an amount of a financial report dataset: Business Central's own drilldown. |
| **A page…** | A page the designer chose, with filters built from the row. Works for any dataset. |
| **Nothing** | The designer turned the drilldown off. |

FlowFields, totals, generated date columns, scripts and reports have no automatic drilldown. A multi-company query or financial report has no drilldown, because the rows span companies.

## Set what a column opens (designers)

1. In the **ALive Workspace Studio**, select the layout column.
2. In the **Properties** panel, under **Drill-down**, set **Opens**.
3. To open a page of your choice, choose **A page…**. In the dialog:
   - In **Page**, type to search for the page, such as **Posted Sales Invoice**. **Table** shows the page's own table.
   - Under **Filters**, choose **Add filter**, then pick a field and its value. Pick a dataset column from the suggestions, such as `{{data.<column>}}`, or a filter the dataset ran with, such as `{{filters.<key>}}`. Business Central filter syntax around them, such as `..` or `|`, works too.
   - Under each value, the dialog shows what it becomes on a sample row.
4. Choose **OK**.

**Edit…** reopens the dialog later. The **Drill-down** column of the layout table shows what each column opens.

## Related information

- [List and pivot views](workspace-list-and-pivot.md)
- [Design the layout columns of a dataset](workspace-layout-columns.md)
