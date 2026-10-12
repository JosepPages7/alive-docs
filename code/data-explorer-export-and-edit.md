---
title: Export and edit data in ALive Data Explorer
description: Explains how to export a table from ALive Data Explorer to CSV, RapidStart Excel or a RapidStart package, and how to prepare data changes as a configuration package with Draft Edit.
---

# Export and edit data in ALive Data Explorer

ALive Data Explorer exports the records of a tab to a file, and prepares data changes as a configuration package that you apply yourself.

## Export a table

1. Open the table and set the filters you need. To learn more, go to [Browse table data with ALive Data Explorer](data-explorer.md).
2. Choose **Data** > **Export**, or right-click the tab and choose **Export**.
3. Choose the format.

| Format | What you get |
|---|---|
| **To CSV (visible fields)** | A CSV file named after the table, with the visible columns in their current order. Values read like the grid shows them, with option captions and dates and numbers in your format. |
| **To Excel (all fields, RapidStart format)** | An Excel workbook in the RapidStart format with every exportable field of the table. You can import it on the **Configuration Packages** page with **Import from Excel**. |
| **To RapidStart Package (visible fields)** | A .rapidstart file with the visible columns plus the primary key. You can import it on the **Configuration Packages** page with **Import Package**. |

Every export contains all records that match the tab's filters. The row limit of the tab doesn't apply. When more than 5,000 records match, you're asked to confirm, because a large export can take a while and can't be stopped once it starts.

You can't export while a tab is loading or while it's in Draft Edit.

## Change data with Draft Edit

Draft Edit never writes to the table directly. Your changes become a configuration package, and the table changes only when you apply that package.

1. Open the table and load its data.
2. Choose **Data** > **Draft Edit**, or right-click a row and choose **Draft Edit**. The toolbar shows **New Row**, **Create Package** and **Cancel**.
3. Change values in the cells. Use **New Row** to add a row below the current one, and **Copy from Row Above** (F8) to copy the value of the same column from the row above.
4. Choose **Create Package**. ALive Data Explorer creates a configuration package with your changes and opens its card.
5. Review the package on the card, and apply it with the standard configuration package actions when you're ready.

What you can edit:

- Normal fields. FlowFields, system fields and fields of type BLOB, Media, MediaSet, RecordID and TableFilter can't be edited.
- Primary key fields only in new rows. You can't change the key of an existing record.
- **Delete Row** removes only rows you added in this draft. Draft Edit can't delete existing records.

The package code starts with up to 11 letters and digits of the table name, followed by a dash and a day and time stamp. The package contains the primary key and the changed fields of each modified record, and the values you typed in new rows.

## Leave Draft Edit

Choose **Cancel**, or **Leave Draft Edit** on the menu. If there are draft rows, you're asked **Discard draft?** before they're discarded. Nothing was written to the table, and no package was created. Closing a tab with draft rows asks the same question, with **Close and discard**.

While a tab is in Draft Edit, filters, refresh, the row limit and exports are unavailable for that tab.

## Related information

- [Troubleshoot ALive Data Explorer](troubleshoot-data-explorer.md)
- [Browse table data with ALive Data Explorer](data-explorer.md)
