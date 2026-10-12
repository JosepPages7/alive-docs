---
title: Export and import sheets
description: How a sheet administrator exports ALive Sheets to a zip file and imports them again, what the file contains, and what happens to sheets that already exist.
---

# Export and import sheets

Sheet administrators can export sheets to a zip file and import them into the same or another Business Central environment, for example to move or back up sheets.

## What an export contains

For each sheet, the zip file holds:

- The workbook: worksheets, cells, formulas and formatting
- The script
- The queries, with their settings
- The description

Permissions aren't exported. An imported sheet that is new can be used only by sheet administrators until one of them adds permission sets with **Permissions…**. See [Use and Edit access to a sheet](sheet-access.md).

## Export sheets

1. On the **ALive Sheets** page, open the **…** menu of the open sheet and choose **Export…**. You can also right-click a sheet in the Sheets panel and choose **Export…**.
2. In the **Export sheets** dialog, select the sheets. Use the filter box, **Select all** and **Select none** to help.
3. Choose **Export**. If the open sheet has unsaved changes, you're asked whether to save them first.

A zip file downloads. One sheet is named after the sheet, and several sheets are named **ALiveSheets** followed by the date and time.

## Import sheets

1. On the **ALive Sheets** page, choose **Import…** in the **…** menu, or right-click in the Sheets panel and choose **Import…**.
2. Select an ALive Sheets zip file.
3. If a sheet with the same name exists (upper and lower case count as the same), you're asked whether to overwrite it. When two or more names exist, choose **Overwrite all**, **Skip existing (import only new)** or **Ask for each**.
4. A message shows how many sheets were inserted, modified and skipped.

An overwritten sheet is replaced as a whole: workbook, script, queries and description. Its permissions stay as they were.

## Import errors

| Message | Cause |
|---|---|
| Invalid file name "[file]". The file name must end with ".json". | The zip file holds a file that isn't a sheet export. |
| The file "[file]" does not contain an ALive sheet. | The file is an export of something else, such as ALive queries or workspaces. |
| Invalid file "[file]": the content is not valid JSON. | The file is damaged or was edited. Export the sheet again. |
| Invalid version in file "[file]". | The file comes from an unsupported version. |

## Related pages

- [Create and edit a sheet](sheet-create-and-edit.md)
- [Use and Edit access to a sheet](sheet-access.md)
- [Manage saved queries on the ALive Queries page](query-saved-queries.md)
