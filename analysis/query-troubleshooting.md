---
title: Troubleshoot the Query Designer
description: The messages the ALive Query Designer shows when you open it or design joins, with their causes and fixes.
---

# Troubleshoot the Query Designer

Find the message you see, then follow the fix. Parts in square brackets, such as [name], are replaced by the names from your query. For errors when a query runs, see [Troubleshoot errors when a query runs](query-run-errors.md).

## Opening the designer

| Message | Cause and fix |
|---|---|
| The query designer must be opened from the Workspace Studio. | The Query Designer has no page of its own. Open it from a query dataset in the **ALive Workspace Studio**. |
| [n] data item(s) skipped: table no longer exists. | A table of the query no longer exists, for example because its extension was uninstalled. Its box was dropped. Rebuild that part of the query and save. |
| The saved definition is not valid JSON - starting empty. | The stored query can't be read. Design it again. |

## Designing joins

| Message | Cause and fix |
|---|---|
| This table is not joined yet. Click to pick a related table, or drag one of its fields onto a field of another table. | Every table except the first must be joined. Choose the **!** badge, or drag a field onto a field of another table. |
| Child and parent must be different tables. | In the **Join** dialog, pick two different tables. |
| This join would create a cycle. Swap child and parent. | The chosen child is already, directly or through other tables, a parent of the chosen parent. Swap the two tables in the **Join** dialog. |
| Choose the join fields first. | Fill in at least one **Child field** and **Parent field** pair. |
| Only one side of a join can be a FlowFilter - link it to a field of the table it relates to. | Two FlowFilters can't be joined. Drag the FlowFilter onto a normal field of its related table. |

## Related pages

- [Troubleshoot errors when a query runs](query-run-errors.md)
