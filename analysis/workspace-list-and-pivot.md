---
title: List and pivot views
description: How to group, sort, total and format a list view, and how to build a pivot with rows, columns, values, calculations and Top N in the workspace viewer.
---

# List and pivot views

A list view shows a dataset's rows as a table you can group and total, and a pivot view summarizes them by rows and columns, like a pivot table in Excel.

Choose **List** or **Pivot** at the top of the **View** panel on the right edge of the viewer.

## List views

In the **View** panel:

- **Group by**: add columns to group the rows. Groups start collapsed; select a group row to expand it. Each group row shows the totals of its rows.
- **Columns**: choose which columns the view shows. **Select all** shows them all; **Reset** goes back to the layout as designed.

Point at a column header and choose its arrow, or right-click the header, for the column menu:

| Item | What it does |
| --- | --- |
| **Sort Ascending** / **Sort Descending** | Sorts by the column. In a grouped list, the groups are sorted by their totals too. |
| **Filter…** | Opens the column's filter. See [Filter views and pages](workspace-filters.md). |
| **Filter the page by** *column*… | Adds a page filter on the column. |
| **Pin Column** | Keeps the column at the left or right edge while you scroll. |
| **Value Aggregation** | Number columns: **Sum**, **Average**, **Min**, **Max**, **Count** or **None** for the totals. |
| **Show As** | Number columns: draws the cells as a **Data Bar** or a **Color Scale**. |
| **Autosize This Column** / **Autosize All Columns** | Fits the column widths to their content. |
| **Group by** / **Ungroup by** *column* | Groups or ungroups by the column. |
| **Choose Columns** | Opens the **Columns** list of the **View** panel. |
| **Reset Columns** | Resets order, visibility, widths, pins and aggregations. |

Drag a column header to move the column, and drag its edge to resize it.

## Pivot views

Add fields to the wells of the **View** panel with each well's **Add**:

| Well | What it does |
| --- | --- |
| **Rows** | The members down the side, for example customers. Several fields nest. |
| **Columns** | The members across the top, for example years. |
| **Values** | The numbers to summarize, each with its aggregation, such as **Sum** or **Count**. |
| **Trend by** | Adds a small trend line next to each value across one field, such as the months. |

Under each value, **Show value as** turns it into a share or a change: **% of grand total**, **% of column total**, **% of row total**, **% of parent row total**, **% of parent column total**, **Difference from previous**, **% difference from previous**, **Running total** or **Rank (largest = 1)**. A **Base** field chooses the field the calculation runs along. You can add the same column twice, for example the amount and its share.

The limit button on a Rows or Columns field keeps only the **Top** or **Bottom** members, ranked by a value. **Group the rest as Others** keeps the remaining rows in an **Others** member, so the totals stay complete.

Click a header's sort icon to sort by it, and drag headers to reorder members or values.

## Table options

| Option | What it does |
| --- | --- |
| **Grand total** | Shows the grand total row at the **Bottom**, at the **Top**, or not at all. |
| **Fit the columns to the width** | Stretches the columns to fill the pane. Resizing a column turns it off. |
| **Tree rows (expand / collapse)** | Pivot: shows nested row fields as an expandable tree. |
| **Color the totals** | Pivot: data bars and color scales also color subtotals and totals. |

## Related information

- [Chart, KPI and slicer views](workspace-charts-kpis-slicers.md)
- [Drill down to source rows and Business Central pages](workspace-drilldown.md)
- [Add calculated columns](workspace-calculated-columns.md)
