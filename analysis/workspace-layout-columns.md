---
title: Design the layout columns of a dataset
description: How to add, order, format and total the layout columns of a workspace dataset in the Workspace Studio, and what each column property does.
---

# Design the layout columns of a dataset

The layout columns decide which columns a dataset offers to its views, with what titles, formats and totals.

When a dataset's source first delivers its columns, the Studio creates one layout column for each of them. You then refine the layout in the middle of the **ALive Workspace Studio**: select a dataset in the **Datasets** panel to see its layout columns.

## Work with the layout columns

| Action | How |
| --- | --- |
| Add source columns | Choose **Add column**, select one or more source columns, and choose **Add**. Double-click a source column to add just that one. Columns already in the layout are ticked. |
| Add a formula | Choose **Add calculated**. See [Add calculated columns](workspace-calculated-columns.md). |
| Duplicate or remove | Select a column and choose the duplicate or remove button. |
| Reorder | Drag a row to its new place. |
| Start over | Choose the reset button, and then **Add all missing source columns** or **Reset layout to the source defaults**. |

You can edit **Title**, **Type**, **Format** and **Totals** directly in the table. A blank title shows the source's own caption, in each user's language.

How a view starts (which columns are visible, grouped, pinned or sorted) isn't set here: you set it in the viewer and save it as the default views. See [Arrange views in panes and pages](workspace-views-and-pages.md).

## Column properties

Select a column to edit it in the **Properties** panel.

| Property | What it does |
| --- | --- |
| **Title** | The column heading. |
| **Kind** | **Dataset column** shows a source column. **Calculated column** shows the result of a formula. |
| **Source column** / **Formula** | The source column it shows, or its formula. |
| **Data type** | **Text**, **Number**, **Boolean**, **Date**, **Date/Time**, **Time** or **Enum**. |
| **Totals** | How the column totals in group rows and the grand total, and the starting aggregation in a pivot: **Sum**, **Average**, **Min**, **Max**, **Count**, **First**, **Last** or none. A calculated column can also use **Formula on totals**. |
| **Format** | **Text**, **Decimal** or **Date/Time**. |
| **Decimals** | Number columns: 0 to 6, or **All**. |
| **Blank zero** | Number columns: shows zero as an empty cell. |
| **Currency symbol** | Number columns: a symbol shown with the value. |
| **Negative** | Number columns: a minus sign or parentheses. |
| **Date/time format** | Date columns: a pattern such as `dd/MM/yyyy`. Empty means the user's locale format. |
| **Add Year / Quarter / Month columns** | Date columns: adds extra Year, Quarter, Month and Year-Month columns that users can show, group, filter or pivot. When your accounting periods aren't calendar months, Fiscal Year, Fiscal Period and Fiscal Year-Period columns are added too. They stay hidden until a user picks them. |
| **Alignment** | **Default**, **Left**, **Center** or **Right**. |
| **Opens** (**Drill-down**) | What a click on a cell opens in Business Central. See [Drill down to source rows and Business Central pages](workspace-drilldown.md). |

## Missing source columns

If a source column disappears, for example after you change a query, the layout column shows **(missing)** and the toolbar shows a warning. **Run** refuses to start until you delete the column or pick another source column.

## Related information

- [Add and manage datasets](workspace-datasets.md)
- [Create a workspace in the Workspace Studio](workspace-studio.md)
