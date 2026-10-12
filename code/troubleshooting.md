---
title: Troubleshoot ALive Code
description: Lists common messages about access to ALive Code, program names, and exporting and importing programs, with their causes and fixes.
---

# Troubleshoot ALive Code

This page explains common messages about access, programs, and exporting and importing programs. For errors from your own code, go to [Troubleshoot compile errors](troubleshoot-compile-errors.md) and [Troubleshoot runtime errors](troubleshoot-runtime-errors.md). For ALive Data Explorer, go to [Troubleshoot ALive Data Explorer](troubleshoot-data-explorer.md).

## Access

| Message | Cause and fix |
|---|---|
| "You must have SUPER permissions to access ALive Code." | Only users with the SUPER permission set can open the editor. An administrator must assign SUPER. To learn more, go to [Permissions and access](permissions-and-access.md). |
| "You must have SUPER permissions to access the ALive Data Explorer." | The same requirement applies to ALive Data Explorer. |

## Programs

| Message | Cause and fix |
|---|---|
| "The program name is not valid. It cannot contain any of the following characters: ..." | The name contains one of \ / : * ? " < > \|. Choose another name. |
| "A program named "*name*" already exists. Please use a different name." | Program names must be unique, and upper and lower case count as the same name. |
| "The file "*name*" has unsaved changes." | You're about to open another program, export or import while the open program has unsaved changes. Choose **Save** or **Don't save**, or cancel. |
| "You have unsaved changes. Do you want to save them before closing?" | You're closing the editor with unsaved changes. Choose **Yes** to save them. |
| "Delete program "*name*"?" | Confirms a delete. The program and its saved request page values are deleted for all users. |

Programs are shared, so another user may have renamed or deleted a program while you had the editor open. Close and reopen the page to see the current list.

## Export and import

| Message | Cause and fix |
|---|---|
| "The ALive Program "*name*" no longer exists." | The program was deleted after the list was shown. Reopen the page and export again. |
| "Invalid file name "*name*". The file name must end with ".json"." | The zip file contains other files than programs. Import only zip files exported from ALive Code. |
| "Invalid file "*name*": the content is not valid JSON." | A file in the zip was changed or damaged. Export the program again. |
| "Invalid version in file "*name*"." | The file has a format version that ALive Code doesn't recognize. Export the program again from ALive Code. |
| "The file "*name*" does not contain an ALive program." | The zip comes from another ALive app, such as sheets exported from ALive Analysis. Import it in that app instead. |
| "Invalid file name: *name*" | A file in the zip has a name that isn't a valid program name. Rename it to a name without \ / : * ? " < > \|. |
