---
title: Group and total rows in a query
description: How to turn on Totals in the ALive Query Designer, what each Total option does, how to group dates by period, and what the Totals notes mean.
---

# Group and total rows in a query

With **Totals** on, a query groups its rows and calculates a sum, average, minimum, maximum or count for each group.

## Turn on Totals

Choose **Totals** (Σ) in the toolbar, or open the menu next to **Run** and select **Totals**. The field grid gets a **Total** row. Turn **Totals** off to make the query plain again.

## Total options

| Total | What it does |
|---|---|
| **Group By** | The default. Rows with the same values in all Group By columns become one row. |
| **Sum** | Adds up the values of the group. Numeric fields only. |
| **Avg** | The average of the group. Numeric fields only. |
| **Min** / **Max** | The smallest or largest value of the group. An option field compares by the order of its options, not alphabetically. |
| **Count** | The number of rows in the group where this table had a matching row. The blank columns of a parent row without child rows aren't counted. |
| **Where** | Shown when **Show** is cleared. The column only filters the rows that are read; it's not grouped or totalled. |

The column header in the results reads, for example, **Sum of Amount**.

- With no **Group By** column, the query returns one row with the grand totals.
- With only **Group By** columns, the query returns each distinct combination once.
- **Filter** and **Ask at run** filter the rows before they're totalled. You can't filter on the totals themselves.
- Groups come in the order they're first found. Sort the Results view, or sort a Group By column ascending.

## Group a date by period

A date column with **Group By** can be grouped by period instead of by day:

1. In the **Show** cell of the date column, pick **Day**, **Week**, **Month**, **Quarter**, **Semester** or **Year**. You can also right-click the column and choose **Group by Month**, for example.
2. Sort the column **Ascending** to get the groups in date order.

The column shows the first day of each period. Weeks start on Monday, and semesters start on 1 January and 1 July. Grouping by period doesn't need a date range, and every total stays exact.

## Notes about totals

| Note | What it means |
|---|---|
| **Totals grouped in memory** | A Totals run reads every row that passes the filters, so it can take a long time on big tables. Filter first. The row limit caps the number of groups shown, not the rows read, so the totals shown are always exact. |
| **Amounts on Group By** | A decimal column is still set to **Group By**. Every distinct amount becomes its own group, and rows with the same amount collapse into one, so anything that sums the result later (a pivot or a Sheet view formula) comes out too low. Set its **Total** to **Sum**, or group by the whole primary key of its table. |

When the row limit cuts a Totals run short, the status reads **First N groups (row limit reached; the shown totals are exact)**.

## Related pages

- [Choose fields, filters and sorting](query-fields-and-filters.md)
- [Use FlowFields and FlowFilters in a query](query-flowfilters.md)
- [Query Advisor tips](query-advisor.md)
