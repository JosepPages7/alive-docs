---
title: Query Advisor tips
description: What the Query Advisor in the ALive Query Designer checks, what each of its tips means, and what to do about it.
---

# Query Advisor tips

The Query Advisor reads the query you design and suggests how to get the same result faster, or explains what a FlowField really adds up.

## How it works

- Its tips appear in the notes bar under the field grid, marked with a light bulb. Choose a tip to read the details.
- The tips update while you edit the query. A tip shows as long as it applies, and it can't be hidden.
- It works wherever the Query Designer opens: the **ALive Queries** page, a sheet query and a workspace query.
- It only reads the query design, Business Central's table and field definitions and, for one tip, the approximate number of rows of a table. It never changes your query, and nothing leaves Business Central. You decide whether to follow a tip.

## The tips

| Tip | When it appears | What to do |
|---|---|---|
| **Use a FlowField** | **Totals** is on, and the totals you calculate are already a standard FlowField of Business Central. For example, you total Cust. Ledger Entry amounts per Customer No., or you join a table only to total its rows per parent record. | Start from the master table (for example Customer) and show the FlowField instead. The tip says where each filter goes, for example to move a Posting Date filter to the **Date Filter** FlowFilter, and to show the FlowFilter split by period instead of grouping a date by period. Business Central then calculates the total in SQL. Records without entries come out with 0. |
| **FlowFields over all dates** | A shown FlowField adds up every date, because nothing in the query sets the Date FlowFilter of its formula. | Add the Date FlowFilter with a **Filter** (a date formula like `<-CY>..<CY>` keeps it current), select **Ask at run**, or show it split by period. |
| **FlowFilter without a filter** | A FlowFilter is in the grid with no **Filter** and no **Ask at run**, so it scopes nothing. | Give it a filter, select **Ask at run**, or remove it from the grid. |
| **Fixed dates** | A date filter uses fixed dates, so the query shows the same period on every run. | Use a date formula, such as `<-CY>..<CY>` for this year or `<-CM>..<CM>` for this month, or select **Ask at run**. |
| **Large outer table** | The first table of the query has no filter and more than about 10,000 rows, and another table is joined to it. The joined table is read once for every row of the first table. | Filter the first table, or select **Ask at run** on one of its fields. With **Totals** on, a query that starts from the joined table and groups by its link field reads it only once. |

The **Large outer table** tip counts the rows only of tables that you're allowed to read.

## Related pages

- [Use FlowFields and FlowFilters in a query](query-flowfilters.md)
- [Group and total rows in a query](query-totals.md)
- [Choose fields, filters and sorting](query-fields-and-filters.md)
