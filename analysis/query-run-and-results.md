---
title: Run a query and work with the results
description: How to run an ALive query, answer the Ask at run filters, set the row limit, read the status, and sort and arrange the Results view.
---

# Run a query and work with the results

Run a query from the Query Designer to see its rows in the Results view, then switch back to the Design view to change it.

## Run the query

1. Choose **Run** in the toolbar, or press F5.
2. If any field has **Ask at run** selected, the Business Central filter dialog opens with a section for each table. Enter the filters and choose **OK**. Choose **Cancel** to not run the query.
3. The rows load into the Results view.

## Set the row limit

Open the menu next to **Run** and pick a value under **Rows to load**: 1,000, 5,000 (the default), 20,000 or 100,000. The limit is the maximum number of rows a run loads. With **Totals** on, it's the maximum number of groups.

## Read the status

The status in the toolbar shows the progress and the outcome of the run:

| Status | Meaning |
|---|---|
| **Running… N rows** | The query is still running. |
| **N rows** | The run is complete. |
| **First N rows (row limit reached)** | There are more rows than the row limit. Narrow the filters or raise **Rows to load**. |
| **N groups** / **First N groups (row limit reached; the shown totals are exact)** | The same for a query with **Totals** on |
| **The query returned no rows.** | No row matched the filters. |

A multicompany run adds the number of companies, and how many were skipped.

## Work with the Results view

- Use **Design** and **Results** in the toolbar to switch views.
- While the Results view is open, **Add Table**, **Totals** and **Multi-company** are unavailable, because they change the design. **Run**, Save and the row limit still work, so you can run again from the results.
- Click a column header to sort by it. Shift+click more headers to add sort levels.
- Right-click a column header for **Autosize All**, **Sort Column** and **Reset Columns**.
- The column layout (widths, order, sorting) is remembered for each query in your browser. **Reset Columns** returns to the default layout.
- Option values show their captions. A joined table without matching rows gives blank cells.

## Notes under the field grid

The notes bar under the field grid tells you about the query before you run it. Choose a note to read the details. Notes can't be hidden: each one shows while it applies.

| Note | Kind |
|---|---|
| **No columns** | Warning: no field has **Show** selected, so the query can't run. |
| **Amounts on Group By** | Warning: see [Group and total rows](query-totals.md). |
| **Mixed sort directions** | Warning: see [Choose fields, filters and sorting](query-fields-and-filters.md). |
| **Totals grouped in memory** | Information: a Totals run reads every row that passes the filters. |
| **Runs once per …** | Information: the query has a period split or a flow filter link. See [Use FlowFields and FlowFilters](query-flowfilters.md). |
| Tips | Suggestions of the [Query Advisor](query-advisor.md) |

## Keep runs fast

- Filter the first table of the query. Each joined table is read once per row of the table it's joined to.
- With **Totals** on, every row that passes the filters is read, whatever the row limit.

## Related pages

- [Run a query in several companies](query-multi-company.md)
- [Show query results in a sheet](sheet-queries.md)
- [Troubleshoot errors when a query runs](query-run-errors.md)
