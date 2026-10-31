---
title: Build a query with the Query Designer
description: What the ALive Query Designer builds, where it opens, who can use it, and how to build and run a first query.
---

# Build a query with the Query Designer

The Query Designer lets you combine Business Central tables, pick their fields, and filter, sort and total them without writing code.

## What an ALive query is

An ALive query reads data from one table, or from several tables that are joined to each other. A query only reads data: it never creates, changes or deletes anything in Business Central. You design it visually, like the query design view of Microsoft Access: each table is a box, each join is a line between two boxes, and the fields you want in the result go into a grid under the boxes. A query reads the company you work in, unless you turn on **Multi-company**.

## Where the Query Designer opens

The Query Designer opens from the **ALive Workspace Studio**, on a workspace dataset that is a query. Only workspace administrators can use it, and the query is stored in that workspace dataset. See [Query datasets](workspace-query-dataset.md).

The designer opens in its own window. The back arrow in its toolbar saves the query and closes the designer (F4). Ctrl+S saves without closing.

## The parts of the designer

| Part | What it does |
|---|---|
| Toolbar | **Run** (F5) and its menu, the **Design** / **Results** switch, **Add Table** (Ctrl+P), **Totals** (Σ), **Multi-company**, and **Skip rows without values** |
| Table area | One box per table, with its fields. The lines between the boxes are the joins. |
| Field grid (QBE grid) | One column per query field, with the rows **Field**, **Table**, **Total** (only when Totals is on), **Sort**, **Show**, **Filter** and **Ask at run** |
| Notes bar | Short notes under the grid: warnings, how the query runs, and Query Advisor tips. Choose a note to read the details. |
| Results view | The rows of the last run |

## Build your first query

1. Choose **Add Table** (Ctrl+P), search for a table by number, caption or name, and select it.
2. In the table box, double-click each field you want in the result. The field is added to the field grid.
3. To add a related table, choose **Related** in the header of the table box, and then pick a table. The designer adds the table and creates the join for you.
4. In the field grid, enter a filter in the **Filter** row, or select **Ask at run** to be asked for the filter every time the query runs.
5. Choose **Run** (F5). The rows open in the Results view.
6. Save the query with Ctrl+S.

## Next steps

- [Add tables and joins](query-tables-and-joins.md)
- [Choose fields, filters and sorting](query-fields-and-filters.md)
- [Group and total rows](query-totals.md)
- [Use FlowFields and FlowFilters](query-flowfilters.md)
- [Add dimension columns](query-dimension-columns.md)
- [Run a query in several companies](query-multi-company.md)
- [Run a query and work with the results](query-run-and-results.md)
- [Query Advisor tips](query-advisor.md)
- [Troubleshoot the Query Designer](query-troubleshooting.md)
- [Troubleshoot errors when a query runs](query-run-errors.md)
