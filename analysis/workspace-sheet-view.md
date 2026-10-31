---
title: The Sheet view
description: What the Sheet view of a workspace is, how an administrator designs it, the DATASET and Business Central date functions its formulas use, and what its errors mean.
---

# The Sheet view

The Sheet view is a spreadsheet inside a workspace. Its worksheets hold formulas and notes that read the rows of every dataset of the workspace, for example a summary of key figures or a scorecard with a row per month.

The formulas read the rows the viewer already has. The workbook holds no copy of the data, and no formula result is stored: every result is calculated again each time the workspace runs.

## Who designs it

Only administrators design a Sheet view, in a viewer opened with **Run** from the **ALive Workspace Studio**:

1. Open the view you want to turn into the Sheet view.
2. At the top of the **View** panel, choose **Sheet**. The view becomes an empty workbook.
3. Add worksheets, notes and formulas. Administrators get the full ribbon of the spreadsheet.
4. In the **Views** menu, choose **Save as default views for all users…** to publish the worksheets.

Until you publish, your design is kept in your own views, so nothing is lost when you close the viewer. A workspace has at most one Sheet view, across all its pages. To turn it back into a list or another view, choose that mode in the **View** panel and confirm: the worksheets and formulas are discarded.

## What users can do

Users see the published Sheet view and can type in its cells, but nothing they type is kept: the next time they open the workspace, they see the published worksheets again. Users get the formula bar only, not the ribbon. They can also use **Insert dataset formula…** to try a formula.

## Dataset functions

| Function | Returns |
| --- | --- |
| `DATASET.SUM(dataset, column, [column, criterion]...)` | The sum of the numbers in a column, in the rows that match. |
| `DATASET.AVERAGE(dataset, column, [column, criterion]...)` | The average of the numbers in a column, in the rows that match. |
| `DATASET.MIN(dataset, column, [column, criterion]...)` | The smallest number in a column, in the rows that match. |
| `DATASET.MAX(dataset, column, [column, criterion]...)` | The largest number in a column, in the rows that match. |
| `DATASET.COUNT(dataset, [column, criterion]...)` | The number of rows that match. |
| `DATASET.LOOKUP(dataset, result column, column, value, [column, value]...)` | The value of the result column in the first row that matches. |
| `DATASET.ROWS(dataset, columns, [column, criterion]...)` | The rows that match, spilled into the cells below and to the right. Write the columns as a list, such as `"No., Name"`, or leave it empty for all columns. |
| `DATASET.HEADERS(dataset, columns)` | The column titles, spilled in one row. |

Name a dataset and a column as they show in the workspace or as the designer wrote them. Case doesn't matter. Text and blank values are skipped in sums, averages and the smallest and largest numbers.

To sort the rows of `DATASET.ROWS`, wrap it in `SORT`, for example `=SORT(DATASET.ROWS("Sales", "Customer, Amount"), 2, -1)`. The **Data** menu's sort can't reorder a spilled result.

### Criteria

Criteria follow the rules of Excel's SUMIFS:

- A number, or TRUE or FALSE, matches that value.
- A text can start with `=`, `<>`, `>`, `>=`, `<` or `<=`, such as `">1000"` or `"<>0"`.
- In a text, `*` and `?` are wildcards, such as `"A*"`.
- `""` matches a blank value and `"<>"` a value that isn't blank.
- A cell reference, such as `B1`, works like any other criterion.

Every criterion must match. Dates compare as dates, and an option field compares by its caption.

## Business Central date functions

| Function | Returns |
| --- | --- |
| `WORKDATE()` | The Business Central work date. |
| `CALCDATE(formula, [date])` | A Business Central date formula, such as `<-CM>` or `<CM+1D>`, applied to the date, or to today when you leave the date out. |
| `FISCALYEARSTART(date)` | The first day of the date's fiscal year, from the accounting periods. |
| `FISCALYEAREND(date)` | The last day of the date's fiscal year, from the accounting periods. |

Date formulas use the letters D, WD, W, M, Q, Y and C, so a formula means the same in every language. You can combine them with the dataset functions, for example `">="&CALCDATE("<-CM>",WORKDATE())` as the criterion for this month. The spreadsheet's own date functions, such as `TODAY`, `EDATE` and `EOMONTH`, also work.

## Build a formula

The formula builder writes a dataset formula for you:

- In the **View** panel, under **Formulas**, choose **Dataset formula…**.
- Or right-click a cell and choose **Insert dataset formula…**.

Choose the function, the dataset, the columns and the criteria. The builder shows the formula and its result on the current rows. For a date column, you can pick a period, such as this month or this fiscal year: the builder writes it with the date functions, so the sheet follows the work date. **Insert** writes the formula into the selected cell, with the number and date formats of its columns. To change a formula later, edit it in the formula bar.

## Errors

| Error | Cause |
| --- | --- |
| `#REF!` | The dataset or a column doesn't exist. Check the names. |
| `#N/A` | The dataset hasn't run yet, is still running or failed. Also: `DATASET.LOOKUP` or `DATASET.ROWS` found no matching row, or a date is outside the accounting periods. |
| `#VALUE!` | A column has no criterion after it, a date formula isn't valid, or a date argument isn't a date. |
| `#NUM!` | `DATASET.ROWS` returns more than 10,000 rows. Show a list that long in a List view instead. |
| `#DIV/0!` | `DATASET.AVERAGE` found no matching rows. `DATASET.MIN` and `DATASET.MAX` return 0 in that case. |

The causes of `#REF!`, `#VALUE!` and `#NUM!` are also listed in a note over the cells.

## Good to know

- **The sheet shows its datasets as they ran: page filters and calculated columns do not apply to it.** Slicers don't change its figures either. When you open a workspace from a card or list, its datasets run for that record, and the Sheet view follows.
- A workspace with a Sheet view runs all its datasets, because its formulas can read any of them.
- The Sheet view needs a larger add-in, so a workspace with one takes longer to open than one without. If you see **This sheet opens in the sheet viewer: close the workspace and open it again.**, close the workspace and open it again.
- On a phone, or in any narrow window, the Sheet view shows **Open this workspace on a wider screen to use its sheet.** instead of the spreadsheet.
- The tab menu of a Sheet view offers **Rename**, **Panes**, **Pages** and **Delete**. It has no export.
- A cell's text isn't translated. The labels you write show as written for every user.

## Related information

- [Starter templates](workspace-templates.md): **Financial ratios** and **Sales scorecard** include a Sheet view.
- [Arrange views in panes and pages](workspace-views-and-pages.md)
- [Use the workspace viewer](workspace-viewer.md)
