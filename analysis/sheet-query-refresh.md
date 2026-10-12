---
title: Refresh query results in a sheet
description: How to refresh the ALive queries of a sheet, how Ask at run filters are remembered, what a refresh writes into the cells, and what the row limit and large-result warnings mean.
---

# Refresh query results in a sheet

A refresh runs a query of the sheet and writes its current result into the cells, replacing the previous result.

## Ways to refresh

| Way | Ask at run filters |
|---|---|
| **Queries** > **Refresh…** | Refreshes one query. If the sheet has several, pick one from the list. The filter dialog opens with your last answers, and remembers the new ones. |
| **Queries** > **Refresh All** (Ctrl+Shift+R) | Refreshes every query of the sheet, one after the other, with the remembered answers and no dialog. |
| **Refresh on open** (a query setting) | Refreshes the query each time the sheet opens, with the remembered answers. |
| `Sheet.RefreshQuery` in the sheet script | Refreshes the named query while the script runs, with the remembered answers. |

If no answer was remembered yet, the Ask at run fields don't filter. Cancel the filter dialog to not refresh.

Every user who may open the sheet can refresh its queries. With **Use** access, the answers and the results are kept only until you close the sheet.

## What a refresh writes

- The cells of the previous result are cleared, including their formatting.
- A bold header row with the column captions starts at the anchor cell, followed by the rows.
- Numbers stay numbers, and decimal fields get the format `#,##0.00`. Dates and times use the date format of your region. Boolean fields become TRUE or FALSE. Codes stay text, so leading zeros are kept. Empty values leave the cell empty.
- Column widths don't change.
- If the worksheet doesn't exist, it's created. If the result doesn't fit, the worksheet grows, up to 100,000 rows and 1,000 columns.
- Formulas recalculate, and the status shows the result, for example **Cust Sales: 1,241 rows**. The sheet is marked as changed, so save it to keep the result.

## Row limit and large results

- When a result has more rows than the query's **Row limit**, only the first rows are written. The status reads **first N rows (row limit reached)**, and a notification appears over the grid. Narrow the query filters, use **Totals**, or raise the row limit in **Properties**.
- When a result has more than 10,000 rows, you're asked to confirm before it's written. Large sheets slow down the browser, saving and opening, and formulas over the result. Consider a filter, **Totals**, or the Query Designer's own Results view for large data.
- Two queries on the same worksheet can't overlap. If a result would cover the cells of another query, the refresh stops. Move one of the queries with **Queries** > **Manage…** > **Properties**.

## Related pages

- [Show query results in a sheet](sheet-queries.md)
- [Sheet functions for scripts](sheet-script-functions.md)
- [Troubleshoot ALive Sheets](sheet-troubleshooting.md)
