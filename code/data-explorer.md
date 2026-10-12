---
title: Browse table data with ALive Data Explorer
description: Explains how to open tables, filter, sort, inspect records and follow table relations on the ALive Data Explorer page.
---

# Browse table data with ALive Data Explorer

The **ALive Data Explorer** page shows the records of any Business Central table in a grid, with one tab per table.

## Open ALive Data Explorer

Choose the search icon, enter **ALive Data Explorer**, and then choose the related link. You can also open it from the code editor: choose the **...** menu next to the **Run** button, and then choose **Data Explorer**. You need the SUPER permission set.

The page reopens with the tabs, filters, column layouts and row limits you had last time in the same company.

## Open a table

1. Press Ctrl+P, choose the **+** next to the tabs, or choose **Data** > **Open Table**.
2. Search for the table by number, name or caption, and then choose it.

The table opens in a new tab and loads its first rows. The status in the toolbar shows how many rows are loaded and how many match. The list contains the normal tables of your environment, including tables from extensions. System and virtual tables aren't listed.

## Filter the data

- **Filters** opens the standard Business Central filter dialog for the active tab. The filters decide which records are loaded, and the tab reloads when you change them.
- **Filter...** on the right-click menu of a column header filters only the rows that are already loaded in the grid.
- **Sort** on a column header, or a click on the header, sorts the loaded rows.

## Row limit

A tab loads up to 5,000 rows by default. To change the limit for the active tab, choose **View** > **Rows to load**, or right-click the tab and choose a **Row limit**: 1,000, 5,000 or 20,000 rows, or all rows. A limit chosen in the **View** menu applies at the next refresh; a limit chosen on the tab reloads the data right away. When the limit cuts the load short, the status reads "Loaded first *n* of *m* matching rows" and the tab shows a limit icon.

To reload the data, press F5 or choose **Data** > **Refresh**.

## Inspect records

| Action | How | What it does |
|---|---|---|
| Open a record | Choose a value in a primary key column | Opens the record on its Business Central page. |
| Drill down | Choose a value in a field that relates to another table | Shows the related record. From there, **Open in BC** opens its page and **Open in Tab** opens the related table filtered to that value. |
| **Zoom** | Ctrl+F8, or right-click a row | Shows every field of the selected row. Search by field name, caption or value. |
| **Related Tables...** | Right-click a row | Lists the tables that refer to this table. Choose one to open it in a new tab, filtered to the selected record. |
| **Copy Cell** | **Data** menu or right-click | Copies the value of the selected cell. |
| **Copy Rows** | Ctrl+C, **Data** menu or right-click | Copies the selected rows, visible columns only, separated by tabs. |

FlowFields are calculated and marked as FlowField in the column header.

## Arrange columns

- Choose **View** > **Columns...**, or right-click a column header and choose **Columns Selector...**. Move columns between **Available** and **Visible**, drag them into order, and choose **OK**. **Reset Layout** restores the default columns, and **Autosize** fits the column widths.
- Right-click a column header and choose **Hide** to hide one column, or **Autosize All** to fit all widths.

## Manage tabs

Right-click a tab to use **Filters...**, **Refresh**, **Row limit**, **Close**, **Close Others**, **Close To Right** and **Export**.

## Data Explorer doesn't change data

Browsing, filtering and exporting never write to the table. To change data, use Draft Edit, which creates a configuration package that you review and apply yourself. To learn more, go to [Export and edit data in ALive Data Explorer](data-explorer-export-and-edit.md).
