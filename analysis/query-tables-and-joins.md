---
title: Add tables and joins in a query
description: How to add tables to an ALive query, join them, edit or delete a join, and how joined tables decide which rows the result contains.
---

# Add tables and joins in a query

In the Query Designer, each table is a box in the table area, and each join is a line that links a field of one box to a field of another.

## Add a table

1. Choose **Add Table** (Ctrl+P).
2. Search for the table by its number, caption or name, and select it.

The box heading shows the table caption, with the table name dimmed next to it when the two are different. The box lists the fields in up to three sections that you can fold by choosing their heading:

| Section | What it holds |
|---|---|
| **Fields** | The stored fields of the table. Primary key fields come first. |
| **FlowFields** (ƒ) | Calculated fields, such as a balance or an amount |
| **Filter totals by** (∇) | The FlowFilters of the table, such as **Date Filter**. They decide what the FlowFields add up. |

Use **Find a field…** in the box to search its fields. To resize a box, drag its right edge, bottom edge or corner. Double-click the handle to reset the size.

To remove a table, choose the **×** in its header. If the table still has fields in the field grid, you're asked to confirm.

## Join two tables

Every table except the first one must be joined to a table that was added before it. A table that isn't joined yet shows a **!** badge in its header. Choose the badge to pick a related table.

There are three ways to create a join:

- Choose **Related** in the header of a table box. The list shows **Scope by** (flow filter links), **Lookups** (tables that this table points to) and **Details** (tables that point to this table). Pick a table, and the designer adds it with the join.
- Drag a field from one box onto the matching field of another box.
- Open the **Join** dialog of an existing join and change it.

The suggested relations come from single-field table relations. For a join on several fields, open the **Join** dialog and choose **Add field pair**.

## How a join affects the rows

| Situation | Result |
|---|---|
| The joined (child) table has matching rows | One result row per combination of a parent row and its matching child rows |
| The child table has no matching rows, and no filter | The parent row stays in the result, with blank child columns (a LEFT JOIN) |
| The child table has no matching rows, and has a **Filter** or **Ask at run** filter | The parent row is left out of the result (an INNER JOIN) |

A joined table is read once for every row of the table it's joined to. On large tables, filter the outer table first.

## Edit or delete a join

Point to the join line to show its edit and delete buttons. You can also double-click the line to edit it, or select it and press Delete.

The **Join** dialog has these settings:

| Setting | What it does |
|---|---|
| **Parent (one side)** | The table whose rows the child rows belong to |
| **Child (many side, LEFT JOIN)** | The table that is joined to the parent |
| **Child field** / **Parent field** | A pair of fields whose values must be equal. Use **Add field pair** to join on more fields. |
| **Delete Join** | Removes the join |

A FlowFilter can be the child field of a join. That creates a flow filter link: see [Use FlowFields and FlowFilters in a query](query-flowfilters.md).

## Related pages

- [Build a query with the Query Designer](query-designer.md)
- [Choose fields, filters and sorting](query-fields-and-filters.md)
- [Troubleshoot the Query Designer](query-troubleshooting.md)
