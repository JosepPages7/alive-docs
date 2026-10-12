---
title: Add calculated columns
description: How designers and users add formula columns to a workspace dataset, which functions formulas can use, and how calculated columns total.
---

# Add calculated columns

A calculated column computes its value from other columns of the same row with a formula, for example a margin or an aging bucket.

## Where you add them

| Where | Who | Who sees the column |
| --- | --- | --- |
| Workspace Studio: **Add calculated** above the layout columns | Administrators | Every user of the workspace. |
| Viewer: the **Calculated** panel on the right edge, then **Add** | Every user, when the dataset's setting **Let users add calculated columns** is on | Only you. The column is shared by all your views of that dataset. |

In the viewer, a new calculated column appears in the view where you added it and stays hidden in your other views of the dataset until you pick it. Use **Edit** and **Remove** in the **Calculated** panel to change or delete it. If removing it affects some of your views, you're told which ones.

An administrator who runs the workspace from the Studio can also choose **Add to dataset (every user)** on a calculated column in the viewer. The column then becomes a layout column of the dataset for everyone.

## Write a formula

- Refer to a cell of the row as `data.<column>`, for example `data.Amount`.
- Press Ctrl+Space for completion, or use the reference list to insert columns and functions.
- The dialog checks the formula against a sample row and shows the result.
- In the viewer you also choose the column's type and, for numbers, its decimals.

Useful functions:

| Function | Example |
| --- | --- |
| `iif` | `iif(data.Amount > 1000, "High", "Low")` |
| `coalesce` | `coalesce(data.Name2, data.Name, "-")` |
| `isBlank` | `isBlank(data.Email)` |
| `roundTo` | `roundTo(data.Amount * 1.21, 2)` |
| `text`, `left`, `right`, `len` | `left(data.No, 3)` |
| `year`, `quarter`, `month`, `day`, `weekday` | `year(data.PostingDate)` |
| `dateDiff` | `dateDiff(data.DueDate, data.PostingDate, "days")` |
| `workDate` | `dateDiff(workDate(), data.DueDate, "days")` uses the Business Central work date. |
| `formatDate` | `formatDate(data.PostingDate, "dd/MM/yyyy")` |

The usual operators work too: `+ - * / % ^`, comparisons such as `==` and `!=`, and `condition ? a : b`.

In a query or report dataset, a formula can also read the filters the dataset ran with: `filters.<key>` gives the filter text, and `ranges.<key>.from` and `ranges.<key>.to` give the start and end of a filter that is one range. For example, the end of the run's posting date range lets you calculate days overdue at the end of the period instead of today.

A row where the formula fails shows **#ERROR**.

## Totals of a calculated column

Summing a ratio, such as a margin percentage, gives a wrong total. Choose **Formula on totals** as the column's totals (Studio) or as the value's aggregation (pivot). The formula is then calculated again on each subtotal and total from the totals of the columns it uses. A new formula that divides starts with **Formula on totals**; others start with **Sum**.

## Related information

- [Design the layout columns of a dataset](workspace-layout-columns.md)
- [List and pivot views](workspace-list-and-pivot.md)
