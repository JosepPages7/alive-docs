---
title: Manage saved queries on the ALive Queries page
description: How to open, create, save, rename, delete, export and import saved ALive queries on the ALive Queries page, and the rules for query names.
---

# Manage saved queries on the ALive Queries page

The **ALive Queries** page shows the Query Designer with your saved queries in a **QUERIES** panel on the left.

## Open the page

Search for **ALive Queries** with Tell Me. The page requires the SUPER permission set. It opens the query you had open last time.

Saved queries are shared by all companies of the environment. A query reads the company you work in when it runs.

## Work with the QUERIES panel

| Action | How |
|---|---|
| Open a query | Click it in the panel, or select it and press Enter. |
| Create a query | Choose **New query** in the panel header, or **New** in the **…** menu. A new query is named **New**, **New 2** and so on. |
| Save | Ctrl+S, or **Save** in the **…** menu |
| Rename | Double-click the name, press F2, or choose **Rename**. Press Enter to confirm or Esc to cancel. |
| Delete | Choose **Delete**, and confirm. If you delete the last query, a new empty one is created. |
| Export or import | **Export…** and **Import…** in the **…** menu |

The **…** menu is on the row of the open query. Right-click any query for **New**, **Rename**, **Delete** and **Export…**.

A dot in front of the title in the toolbar means the query has unsaved changes. When you open another query, export, import, or close the page, you're asked whether to save them.

## Query names

- At most 100 characters.
- The characters `\ / : * ? " < > |` aren't allowed, because the name is also used as a file name in exports.
- Names must be unique. Upper and lower case count as the same name.

## Export queries

1. In the **…** menu, choose **Export…**.
2. In the **Export queries** dialog, select the queries. Use the filter box, **Select all** and **Select none** to help.
3. Choose **Export**. A zip file downloads. One query is named after the query, and several queries are named **ALiveQueries** followed by the date and time.

## Import queries

1. In the **…** menu, choose **Import…**, and select an ALive Queries zip file.
2. If a query with the same name exists, you're asked whether to overwrite it. When two or more names exist, choose **Overwrite all**, **Skip existing (import only new)** or **Ask for each**.
3. A message shows how many queries were inserted, modified and skipped.

## Use a saved query elsewhere

- In an ALive Sheet, **New Query…** can start from a saved query. The sheet gets a copy: later changes to the saved query don't affect the sheet.
- To turn a saved query into AL code, see [Generate an AL query object](query-generate-al.md).

## Related pages

- [Build a query with the Query Designer](query-designer.md)
- [Show query results in a sheet](sheet-queries.md)
- [Troubleshoot the Query Designer](query-troubleshooting.md)
