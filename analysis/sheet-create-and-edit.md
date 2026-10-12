---
title: Create and edit a sheet
description: How to create, rename, delete, edit and save an ALive Sheet, the rules for sheet names, and the keyboard shortcuts of the sheet editor.
---

# Create and edit a sheet

You manage sheets in the Sheets panel of the **ALive Sheets** page, and edit them like any spreadsheet.

## Manage sheets in the Sheets panel

Choose the Sheets panel button at the start of the toolbar to show or hide the panel. Press Esc or click the grid to hide it.

| Action | How | Who |
|---|---|---|
| Open a sheet | Click it, or select it and press Enter. | Everyone who may use the sheet |
| Create a sheet | Choose **New sheet** in the panel header, or **New** in the **…** menu or the right-click menu. A new sheet is named **New**, **New 2** and so on. | Sheet administrators |
| Rename | Double-click the name, press F2, or choose **Rename**. Press Enter to confirm or Esc to cancel. | Sheet administrators |
| Delete | Choose **Delete**, and confirm. If you delete the last sheet, a new empty one is created. | Sheet administrators |
| Share | Choose **Permissions…** | Sheet administrators |

The **…** menu is on the row of the open sheet. A user with **Edit** access sees only **Save** there, and a user with **Use** access has no **…** menu.

## Sheet names

- At most 100 characters.
- The characters `\ / : * ? " < > |` aren't allowed, because the name is also used as a file name in exports.
- Names must be unique. Upper and lower case count as the same name.

## Edit cells

Type values and formulas into cells as in any spreadsheet. Each worksheet is a tab at the bottom of the grid. To use Business Central data, add a query or a script:

- [Show query results in a sheet](sheet-queries.md)
- [Write and run a sheet script](sheet-scripts.md)

## Save a sheet

Choose **Save** in the toolbar, or press Ctrl+S. A dot in front of the sheet name means there are unsaved changes.

- When you open another sheet with unsaved changes, you choose **Save** or **Don't save**, or cancel.
- When you close the page with unsaved changes, you're asked whether to save them.
- The queries of a sheet, and its script, are saved separately as soon as you change them.
- With **Use** access, nothing you change is saved. See [Use and Edit access to a sheet](sheet-access.md).

## Keyboard shortcuts

| Key | Action |
|---|---|
| F5 | Run the sheet script |
| F9 | Recalculate all formulas |
| Ctrl+S | Save |
| Ctrl+Shift+E | Edit the sheet script |
| Ctrl+Shift+R | Refresh all queries of the sheet |
| PageDown / PageUp | Move one screen down or up |
| Home / Ctrl+Home | Go to column A of the row / go to cell A1 |
| Ctrl+End | Go to the last cell with data |
| Shift with PageDown, PageUp, Home, Ctrl+Home or Ctrl+End | Extend the selection |
| Ctrl+PageDown / Ctrl+PageUp | Go to the next or previous worksheet |
| Ctrl+F / Ctrl+H | Find / replace |

## Related pages

- [ALive Sheets overview](sheet-overview.md)
- [Export and import sheets](sheet-export-import.md)
- [Troubleshoot ALive Sheets](sheet-troubleshooting.md)
