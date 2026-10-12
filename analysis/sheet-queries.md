---
title: Show query results in a sheet
description: How a sheet administrator adds an ALive query to a sheet, what the Sheet Query settings mean, and how to edit, move or delete a sheet query.
---

# Show query results in a sheet

A sheet can hold ALive queries whose results are written into its cells, starting at a cell you choose.

Designing the queries of a sheet (**New Query…**, **Edit Query…** and **Manage…**) is for sheet administrators. Every user who may open the sheet can refresh them. See [Refresh query results in a sheet](sheet-query-refresh.md).

## Add a query to a sheet

1. Select the cell where the result should start.
2. Choose **Queries** > **New Query…**.
3. In the **Sheet Query** dialog, fill in the settings described below, and choose **OK**.
4. The Query Designer opens. Design the query, and save it with the back arrow (F4) or Ctrl+S. See [Build a query with the Query Designer](query-designer.md).
5. Answer **Yes** to **Refresh the query [name] now?** to write the result into the sheet.

A new query that you close without designing anything isn't kept. The queries of a sheet are saved in the sheet as soon as you change them; you don't need to save the sheet for that.

## Sheet Query settings

| Setting | What it does |
|---|---|
| **Name** | The name of the query inside this sheet. A script uses it with `Sheet.RefreshQuery`. It must be unique in the sheet. |
| **Start from saved query** | Optional, new queries only. A saved query from the **ALive Queries** page whose design is copied into the new query. Later changes to the saved query don't affect the sheet. |
| **Worksheet** | The worksheet the result is written to. Leave it blank to create a new worksheet named after the query on the first refresh. |
| **Anchor cell** | The top-left cell of the result, where the header row starts, in A1 notation, such as B3 |
| **Row limit** | The maximum number of rows written into the sheet, from 1 to 100,000. The default is 5,000. Above 10,000 rows the sheet gets slow, and you're warned. |
| **Refresh on open** | Refreshes the query every time the sheet opens. Ask at run filters reuse the answers of the last manual refresh. |

## Edit a query

Choose **Queries** > **Edit Query…**. If the sheet has several queries, pick one from the list. The Query Designer opens with the query. After you save, you can refresh it right away.

## Manage the queries of a sheet

Choose **Queries** > **Manage…** to open the **Sheet Queries** list. It shows each query with its **Worksheet**, **Anchor Cell**, **Row Limit**, **Refresh on Open**, **Last Refresh**, **Rows** and **Row Limit Reached**.

| Action | What it does |
|---|---|
| **New Query** | Adds a query, as described above. |
| **Edit Query** | Opens the selected query in the Query Designer. |
| **Properties** | Changes the name, worksheet, anchor cell, row limit or **Refresh on open**. When you move the result to another cell or worksheet, the cells of the old result are cleared. |
| **Delete** | Removes the query from the sheet. You choose whether to also clear the cells it wrote, or keep them as ordinary cells. |
| **Refresh** / **Refresh All** | Closes the list and refreshes the selected query, or all of them. |

## Related pages

- [Refresh query results in a sheet](sheet-query-refresh.md)
- [Manage saved queries on the ALive Queries page](query-saved-queries.md)
- [Troubleshoot ALive Sheets](sheet-troubleshooting.md)
