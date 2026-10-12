---
title: Troubleshoot ALive Sheets
description: The error messages of ALive Sheets about access, saving, sheet names and sheet queries, what causes each one, and how to fix it.
---

# Troubleshoot ALive Sheets

Find the message you see, then follow the fix. Parts in square brackets, such as [name], are replaced by the names from your sheet.

## Opening, saving and naming sheets

| Message | Cause and fix |
|---|---|
| You do not have permission to use sheet "[name]". Contact an administrator to be added to one of its permission sets. | The sheet isn't shared with you. See [Use and Edit access to a sheet](sheet-access.md). |
| You do not have permission to run the sheet "[name]". | The sheet isn't shared with you, or no longer is. Ask a sheet administrator. |
| You do not have permission to save changes to sheet "[name]". Contact an administrator to get the Edit access level. | You have **Use** access, so your changes aren't saved. |
| Only sheet administrators can do this (write permission on the sheet table is required). | Creating, renaming, deleting, exporting and importing sheets, and editing scripts and queries, are for sheet administrators. |
| The sheet name is not valid. It cannot contain any of the following characters: \ / : * ? " < > \| | Remove those characters from the name. |
| A sheet named "[name]" already exists. Please use a different name. | Names are unique, ignoring upper and lower case. |
| This sheet is too large to send to Business Central ([n] MB). Remove rows or split it across sheets. | The sheet can't be saved. Remove rows, lower the row limits of its queries, or split the data across sheets. |

For script errors, see [Troubleshoot sheet script errors](sheet-script-errors.md). For formula errors such as `#NAME?` and `#VALUE!`, see [Use formulas and custom functions](sheet-formulas.md).

## Queries

| Message | Cause and fix |
|---|---|
| This sheet has no queries yet. Use Queries > New Query to design one. | A sheet administrator adds a query first. |
| The query [name] has no definition yet. Use Edit Query to design it. | The query was never designed. Open it with **Edit Query…**. |
| Query [name] could not be refreshed: [error] | The query failed. The error after the message comes from the query; see [Troubleshoot errors when a query runs](query-run-errors.md). |
| The query [name] returned [n] rows - more than 10,000. … Do you want to write the [n] rows anyway? | A large result slows down the sheet. Choose **No**, then filter the query or use **Totals**. See [Refresh query results in a sheet](sheet-query-refresh.md). |
| The result of query [name] does not fit into the worksheet (maximum 100000 rows x 1000 columns) | The result plus the anchor cell exceeds the worksheet limits. Move the anchor cell up or left, or lower the row limit. |
| The result of query [name] ([rows] rows x [columns] columns from [cell]) would overlap the cells of query [name]. Move one of the two queries (Queries > Manage > Properties). | Two query results can't overlap. Move one of them to another anchor cell or worksheet. |
| [name] reached its row limit: only the first [n] rows were written to the sheet. | Narrow the query filters, use **Totals**, or raise the **Row limit** in **Properties**. |
| The anchor cell must be inside the worksheet (row and column 1 or greater, at most row [n] and column [n]). / [text] is not a valid cell address (use the A1 form, e.g. B3). | Enter an anchor cell such as B3. |
| The row limit must be between 1 and [n]. | Enter a row limit from 1 to 100,000. |
| This sheet already has a query named "[name]". / The query needs a name. | Give each query of the sheet its own name. |

## Related pages

- [ALive Sheets overview](sheet-overview.md)
- [Troubleshoot sheet script errors](sheet-script-errors.md)
- [Refresh query results in a sheet](sheet-query-refresh.md)
