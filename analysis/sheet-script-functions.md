---
title: Sheet functions for scripts
description: Reference of the Sheet functions that an ALive Sheet script uses to read and write cells, manage worksheets, format cells and refresh queries, and the rules they follow.
---

# Sheet functions for scripts

A sheet script reads and writes the sheet through the `Sheet` functions. They work only when the script runs from an ALive Sheet.

## Cells

| Function | What it does |
|---|---|
| `Sheet.SetValue(Row, Column, Value)` | Writes a value into a cell. A text that starts with `=` is written as text, not as a formula. |
| `Sheet.GetValue(Row, Column)` | Reads a cell. An empty cell reads as `''`. |
| `Sheet.SetFormula(Row, Column, FormulaText)` | Writes a formula, such as `'SUM(A2:A5)'`. The leading `=` is optional. |
| `Sheet.Clear()` | Clears the contents of the selected worksheet and keeps the formatting. |
| `Sheet.ClearAll()` | Clears the contents and the formatting of the selected worksheet. |
| `Sheet.ClearRange(FromRow, FromCol, ToRow, ToCol)` | Clears the contents of a range and keeps the formatting. |

## Worksheets

| Function | What it does |
|---|---|
| `Sheet.Add(Name)` | Creates a worksheet and selects it. If it exists, it's only selected, so the script can run again safely. |
| `Sheet.Select(Name)` | Selects an existing worksheet. Upper and lower case don't matter. |
| `Sheet.Delete(Name)` | Deletes a worksheet that isn't selected and isn't the last one. |
| `Sheet.Rename(OldName, NewName)` | Renames a worksheet. |
| `Sheet.Exists(Name)` | Returns whether a worksheet exists. |
| `Sheet.SetDimensions(Rows, Cols)` | Resizes the selected worksheet, up to 100,000 rows and 1,000 columns. |
| `Sheet.GetRowCount()` / `Sheet.GetColumnCount()` | Returns the size of the selected worksheet. |

## Formatting and layout

| Function | What it does |
|---|---|
| `Sheet.SetStyle(Row, Column, CssText)` | Formats one cell. |
| `Sheet.SetRangeStyle(FromRow, FromCol, ToRow, ToCol, CssText)` | Formats a range. |
| `Sheet.SetNumberFormat(Row, Column, Pattern)` | Sets a number format, such as `'#,##0.00'`, `'0%'` or `'yyyy-mm-dd'`. |
| `Sheet.SetColumnWidth(Col, Width)` / `Sheet.SetRowHeight(Row, Height)` | Sets a width or height in pixels. |
| `Sheet.MergeCells(FromRow, FromCol, ToRow, ToCol)` | Merges a range. |
| `Sheet.Freeze(Rows, Cols)` | Keeps rows and columns visible while scrolling. `Sheet.Freeze(0, 0)` unfreezes. |

A style text is a list of CSS declarations, such as `'background-color:#E0F2F1; font-weight:bold; text-align:center'`. These properties are supported: `background-color`, `color`, `font-weight`, `font-style`, `font-size`, `font-family`, `text-decoration`, `text-align` and `vertical-align`. Other properties are ignored.

## Queries

| Function | What it does |
|---|---|
| `Sheet.RefreshQuery(Name)` | Refreshes the sheet query with that name, with its remembered Ask at run answers and its row limit. See [Refresh query results in a sheet](sheet-query-refresh.md). |

## Rules

- Rows and columns start at 1: `Sheet.SetValue(1, 1, …)` writes cell A1.
- Coordinates must be inside the worksheet. A worksheet created with `Sheet.Add` has 1,000 rows and 26 columns. Use `Sheet.GetRowCount()` and `Sheet.GetColumnCount()` to check the size.
- The functions work on the selected worksheet. At the start, that's the worksheet that was active when you chose **Run**.
- `Sheet.GetValue` sees the cells as they were when the script started, plus what the script itself wrote before.
- The changes are applied to the grid when the script ends. A formula is calculated only then, so `Sheet.GetValue` reads `''` for a formula written in the same run.
- If the script stops with an error, the changes made before the error are still applied.

## Related pages

- [Write and run a sheet script](sheet-scripts.md)
- [Use formulas and custom functions](sheet-formulas.md)
- [Troubleshoot sheet script errors](sheet-script-errors.md)
