---
title: Troubleshoot the Query Designer
description: The messages the ALive Query Designer shows when you open it, design joins, save, export, import or generate AL, with their causes and fixes.
---

# Troubleshoot the Query Designer

Find the message you see, then follow the fix. Parts in square brackets, such as [name], are replaced by the names from your query. For errors when a query runs, see [Troubleshoot errors when a query runs](query-run-errors.md).

## Opening the designer

| Message | Cause and fix |
|---|---|
| You must have SUPER permissions to access ALive Queries. | The **ALive Queries** page is for users with the SUPER permission set. Ask an administrator. Sheet and workspace administrators design their queries from the sheet or the **ALive Workspace Studio** instead. |
| [n] data item(s) skipped: table no longer exists. | A table of the saved query no longer exists, for example because its extension was uninstalled. Its box was dropped. Rebuild that part of the query and save. |
| The saved definition is not valid JSON - starting empty. | The stored query can't be read. Design it again, or import it from an export. |

## Designing joins

| Message | Cause and fix |
|---|---|
| This table is not joined yet. Click to pick a related table, or drag one of its fields onto a field of another table. | Every table except the first must be joined. Choose the **!** badge, or drag a field onto a field of another table. |
| Child and parent must be different tables. | In the **Join** dialog, pick two different tables. |
| This join would create a cycle. Swap child and parent. | The chosen child is already, directly or through other tables, a parent of the chosen parent. Swap the two tables in the **Join** dialog. |
| Choose the join fields first. | Fill in at least one **Child field** and **Parent field** pair. |
| Only one side of a join can be a FlowFilter - link it to a field of the table it relates to. | Two FlowFilters can't be joined. Drag the FlowFilter onto a normal field of its related table. |

## Saving, exporting and importing

| Message | Cause and fix |
|---|---|
| The query name is not valid. It cannot contain any of the following characters: \ / : * ? " < > \| | Remove those characters from the name. |
| A query named "[name]" already exists. Please use a different name. | Names are unique, ignoring upper and lower case. Pick another name. |
| You have unsaved changes. Do you want to save them before closing? | Not an error. Choose **Yes** to keep your changes. |
| The ALive Query: "[name]" already exists. Do you want to overwrite it? | An imported query has the name of an existing one. Choose **No** to keep the existing query. |
| The file "[file]" does not contain an ALive query. | The zip file is an export of something else, such as sheets or workspaces. |

## Generating AL

| Message | Cause and fix |
|---|---|
| Generating an AL query is not possible for a multicompany query | An AL query always reads the company it runs in. Turn **Multi-company** off, then generate. |
| The query name must be 1 to 30 characters long. | Shorten the **Query name** in the **Generate AL Query** dialog. |
| The API version must look like v1.0 or beta. | Correct the **API version**. |
| The [setting] must start with a lowercase letter and contain only letters and digits | Correct the API publisher, API group, entity name or entity set name, for example `alive`. |

## Related pages

- [Troubleshoot errors when a query runs](query-run-errors.md)
- [Manage saved queries](query-saved-queries.md)
- [Generate an AL query object](query-generate-al.md)
