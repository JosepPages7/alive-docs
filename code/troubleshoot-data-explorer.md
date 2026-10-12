---
title: Troubleshoot ALive Data Explorer
description: Lists common ALive Data Explorer messages when browsing, exporting and editing table data, with their causes and fixes.
---

# Troubleshoot ALive Data Explorer

This page explains common messages that ALive Data Explorer shows when you browse, export or edit table data. In the messages below, *name*, *code*, *row*, *field*, *value* and *n* stand for the values shown on your screen.

| Message | Cause and fix |
|---|---|
| "You do not have permission to read table *name*." | Your permissions don't allow reading the table. |
| "The record no longer exists. Refresh the tab to update the data." | Another user or process deleted the record. Press F5 to refresh. |
| "The field is empty, there is nothing to drill into." | The cell has no value to follow. |
| "There are no records to export." | No record matches the tab's filters. Change the filters. |
| "There are no records to export. A RapidStart Excel file needs at least one data row." | The RapidStart Excel format needs at least one record. |
| "None of the columns can be exported to CSV." | None of the visible columns can be written to a CSV file. Show other columns and export again. |
| "Configuration package *code* already exists. Rename or delete it first, then export again." | The RapidStart package export uses a temporary configuration package named after the table, and a package with that code already exists. Rename or delete that package on the **Configuration Packages** page. |
| "The filter on field *name* is too long for a RapidStart package (maximum 250 characters)." | Shorten the filter before you export a RapidStart package. |
| "The filter matches *n* records. Exporting them can take a while and cannot be stopped once it starts." | A confirmation for exports of more than 5,000 records. Choose **Yes** to continue. |
| "No changes to save." | You chose **Create Package** in Draft Edit without changing anything. |
| "Primary key field *name* cannot be changed on an existing record." | In Draft Edit, key fields can be set only in new rows. |
| "Field *name* cannot be edited." | The field can't be part of a configuration package, such as a FlowField or a system field. |
| "*row*, *field*: "*value*" is not a valid value." | A value typed in Draft Edit doesn't fit the field's type. Correct it and choose **Create Package** again. |
| "*row*, *field*: the value is too long for a configuration package (maximum 2048 characters)." | Shorten the value. |
| "The record *row* no longer exists. Refresh the tab and edit again." | A record you edited was deleted meanwhile. Leave Draft Edit, refresh, and redo the change. |
| "Configuration package *code* already exists. Save again to get a new code." | A package with the same code exists, usually because a package for the same table was created a moment ago. Choose **Create Package** again. |

To learn more, go to [Browse table data with ALive Data Explorer](data-explorer.md) and [Export and edit data in ALive Data Explorer](data-explorer-export-and-edit.md).
