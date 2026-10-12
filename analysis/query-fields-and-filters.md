---
title: Choose fields, filters and sorting in a query
description: How to add fields to an ALive query, what each row of the field grid does, how to write filters and relative date ranges, and how sorting works.
---

# Choose fields, filters and sorting in a query

The field grid under the tables decides which columns the query returns, which rows it reads, and in which order.

## Add and arrange fields

- To add a field, double-click it in its table box, or right-click it and choose **Add to query**.
- To remove a field, choose the **×** on its column, or right-click the column and choose **Remove Column**.
- To move a column, drag its **Field** cell. The order of the columns in the grid is the order of the columns in the result.

## The rows of the field grid

| Row | What it does |
|---|---|
| **Field** | The field, shown by its caption |
| **Table** | The table the field comes from |
| **Total** | Shown only when **Totals** is on. See [Group and total rows in a query](query-totals.md). |
| **Sort** | **Ascending** or **Descending** |
| **Show** | Selected: the field is a column of the result. Cleared: the field is still read and its filter still applies, but it's not shown. |
| **Filter** | A Business Central filter, such as `A*\|B*`, `>1000` or `100..200` |
| **Ask at run** | The Business Central filter dialog asks for a filter on this field every time the query runs. A field has either a **Filter** or **Ask at run**, not both. |

## Write filters

- A filter on a joined (child) table also removes the parent rows that have no matching child rows. See [Add tables and joins](query-tables-and-joins.md).
- On an Option, Enum or Boolean field, the picker in the **Filter** cell lists the values. Options add up (`Open|Released` means either one); Yes and No replace each other. You can still edit the text.
- Filters are saved in a language-neutral form, so a query saved by a user who works in one language gives the same result for a user who works in another.

## Use relative date ranges

On a Date or DateTime field, the date picker in the **Filter** cell writes a Business Central date formula, so the query follows the calendar instead of keeping fixed dates. Any date formula in angle brackets works.

| Picker entry | Filter |
|---|---|
| Current year | `<-CY>..<CY>` |
| Prior year | `<-CY-1Y>..<CY-1Y>` |
| Current + prior year | `<-CY-1Y>..<CY>` |
| Last 3 years | `<-CY-2Y>..<CY>` |
| Current month | `<-CM>..<CM>` |
| Prior month | `<-CM-1M>..<CM-1M>` |
| Year to date | `<-CY>..<0D>` |

The formulas are calculated from the work date. When the company's accounting periods aren't plain calendar months, the picker also has a **Fiscal (Accounting Periods)** group: **Current fiscal year** `<-FY>..<FY>`, **Prior fiscal year**, **Fiscal year to date**, **Current accounting period** `<-FP>..<FP>` and **Prior accounting period**. FY and FP work only in ALive queries, not in Business Central's own filters.

## Sort the rows

- Business Central sorts each table in one direction: the direction of the first sort field of the table wins. A **Mixed sort directions** note appears when the directions differ.
- FlowFields and totalled columns can't be sorted in the query.
- The sort applies per table: the rows of a joined table are sorted within each row of the table they're joined to.

For any other order, sort the Results view: click a column header, and Shift+click more headers to add sort levels.

## Related pages

- [Group and total rows in a query](query-totals.md)
- [Use FlowFields and FlowFilters in a query](query-flowfilters.md)
- [Add dimension columns](query-dimension-columns.md)
- [Run a query and work with the results](query-run-and-results.md)
