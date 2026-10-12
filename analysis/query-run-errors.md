---
title: Troubleshoot errors when a query runs
description: The error messages an ALive query shows when you run it, what causes each one, and how to fix it.
---

# Troubleshoot errors when a query runs

Find the message you see, then follow the fix. Parts in square brackets, such as [table], are replaced by the names from your query. When a sheet refreshes a query, these messages appear after **Query [name] could not be refreshed:**.

## Missing tables, fields or joins

| Message | Cause and fix |
|---|---|
| Add at least one table before running. / The query is empty. Add at least one table before running it. | Add a table with **Add Table**. |
| Add at least one visible field to the QBE grid before running. / The query has no visible fields. Show at least one field in the QBE grid. | Select **Show** on at least one field. |
| Join all tables before running: [tables] / Data item [name] has no join. Every table except the first must be joined to a table before it. | Join the listed tables to a table that was added before them. See [Add tables and joins](query-tables-and-joins.md). |
| Table [number] of data item [name] does not exist (anymore) or is not a normal table. / Field [number] of data item [name] no longer exists in table [table]. | The table or field was removed from Business Central. Remove it from the query. |
| You do not have permission to read table [table]. | Your permissions don't allow reading that table. Remove it from the query, or ask an administrator for read access. |

## Totals and sorting

| Message | Cause and fix |
|---|---|
| Field [name] of data item [name] is not numeric and cannot be summed or averaged. | **Sum** and **Avg** need a numeric field. Use **Count**, **Min**, **Max** or **Group By**. |
| The result column [column] is a date shown by period, which needs Totals on and Group By in its Total cell. | Turn **Totals** on and set the column's **Total** to **Group By**, or remove the period. |
| Field [name] of data item [name] is not a normal table field (FlowField or FlowFilter) and cannot be used for server-side sorting. | Clear **Sort** on that field, and sort the Results view instead. |

## Period splits and FlowFilters

| Message | Cause and fix |
|---|---|
| Field [name] of data item [name] is split by [period], but its date filter is empty or has no start or end. | Enter a closed date range in its **Filter** cell, such as `<-CY-1Y>..<CY>` or `01.01.25..31.12.25`, or answer it in the filter dialog. |
| Field [name] of data item [name] is split by [period] and its date filter ([filter]) spans more than [n] periods, the maximum. | Narrow the date range or pick a longer period. |
| Field [name] of data item [name] is both split by period and the field of a join. | A FlowFilter can be split by period or linked to its table, not both. Remove the period, or join on another field. |
| Field [number] ([name]) of data item [name] is a FlowFilter and cannot be shown in a query. | Clear **Show** on the FlowFilter. A Date FlowFilter can be split by period instead. See [Use FlowFields and FlowFilters](query-flowfilters.md). |

## Results that look wrong

| What you see | Cause and fix |
|---|---|
| First [n] rows (row limit reached) | Not an error: there are more rows. Narrow the filters, or raise **Rows to load** in the **Run** menu. |
| The query returned no rows. | No row matches the filters. A filter on a joined table also removes the parent rows without matching child rows. |
| Parent rows are missing | A **Filter** or **Ask at run** on a joined table turns its join into an INNER JOIN. Move the filter, or remove it. |
| Totals are too low | A decimal column is still on **Group By**. Set its **Total** to **Sum**. See [Group and total rows](query-totals.md). |
| FlowFields add up every date | The query doesn't set the Date FlowFilter. Add it with a filter or **Ask at run**. See [Query Advisor tips](query-advisor.md). |

If you cancel the **Ask at run** filter dialog, the query doesn't run. That's expected.

## Related pages

- [Troubleshoot the Query Designer](query-troubleshooting.md)
- [Run a query and work with the results](query-run-and-results.md)
