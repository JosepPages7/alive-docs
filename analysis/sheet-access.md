---
title: Use and Edit access to a sheet
description: What sheet administrators, users with Edit access and users with Use access can do in an ALive Sheet, and how a sheet is shared.
---

# Use and Edit access to a sheet

Each ALive Sheet is shared separately: a sheet administrator decides which permission sets may use it, and with which access level.

## Who can do what

| Who | How | Can |
|---|---|---|
| Sheet administrator | The **ALive Sheets Admin** permission set, or SUPER | Everything: create, rename, delete, edit the script and the queries, export, import, and share sheets with **Permissions…** |
| **Edit** access | The **ALive Sheets User** permission set, and a permission set that the sheet is shared with at the **Edit** level | Open the sheet, run its script, refresh its queries, change cells, and save the sheet |
| **Use** access | The **ALive Sheets User** permission set, and a permission set that the sheet is shared with at the **Use** level | Open the sheet, run its script, refresh its queries and type into cells. Nothing is saved back. |

The script and the queries of a sheet can be changed only by sheet administrators, at every access level. A sheet that isn't shared with any permission set, such as a newly imported one, can be used only by sheet administrators.

## How Use access works

With **Use** access, the sheet is a working copy for you:

- The toolbar has no **Save** button, and you aren't asked to save when you leave.
- What a script run, a refresh or your typing changes stays on screen until you close the sheet.
- The next time you open the sheet, you see the version the administrator saved.

## Share a sheet

A sheet administrator opens the **…** menu of the sheet in the Sheets panel, or right-clicks the sheet, and chooses **Permissions…**. There they add the permission sets that may use the sheet, choose the **Access Level** (**Use** or **Edit**) for each one, and can write the sheet's **Description**, which users see in the **ALive Analysis** list.

How the permission sets are matched to users, including through security groups, is explained in [Access and permissions](workspace-permissions.md).

## Related messages

| Message | What to do |
|---|---|
| You do not have permission to use sheet "[name]". Contact an administrator to be added to one of its permission sets. | Ask a sheet administrator to share the sheet with one of your permission sets. |
| You do not have permission to save changes to sheet "[name]". Contact an administrator to get the Edit access level. | You have **Use** access. Ask for **Edit** access. |
| Only sheet administrators can do this (write permission on the sheet table is required). | The action is for sheet administrators. |
| No sheet has been shared with you yet. Ask an ALive Sheets administrator to add one of your permission sets to a sheet. | Shown on the **ALive Sheets** page when no sheet is shared with you. |

## Related pages

- [Access and permissions](workspace-permissions.md)
- [ALive Sheets overview](sheet-overview.md)
- [Troubleshoot ALive Sheets](sheet-troubleshooting.md)
