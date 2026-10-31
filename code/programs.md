---
title: Manage programs
description: Explains how to create, open, save, rename, delete, export and import programs in ALive Code.
---

# Manage programs

A program is a saved script in ALive Code. You manage programs in the **PROGRAMS** panel of the **ALive Code** page.

Programs are shared. Every user who can open ALive Code sees the same programs, and the programs are the same in every company of the environment.

## Create a program

Choose **New program** in the **PROGRAMS** header, or choose **New** on the open program's **...** menu or on the right-click menu of the list. The new program is named **New**, then **New 2**, **New 3**, and so on, and opens with an empty template.

If you type code in the empty editor when no program exists and then save or run it, ALive Code creates a program named **New** for it.

## Open, save and switch programs

- To open a program, choose it in the list, or select it with the arrow keys and press Enter.
- To save, press Ctrl+S or choose **Save** on the open program's **...** menu. Running a program also saves it.
- If the open program has unsaved changes when you open another one, you're asked "The file "*name*" has unsaved changes." Choose **Save**, **Don't save**, or cancel to stay where you are.

## Rename a program

Double-click the program, select it and press F2, or choose **Rename** on a menu. Type the new name and press Enter, or press Esc to cancel.

A program name can have up to 100 characters, can't contain any of the characters \ / : * ? " < > |, and must be unique. Names that differ only in upper and lower case count as the same name.

The values a request page saved for the program aren't carried over to the new name. The next run starts with the default values.

## Delete a program

Choose **Delete** on the open program's **...** menu, or right-click a program and choose **Delete**. Confirm the question "Delete program "*name*"?".

Deleting a program also deletes its saved request page values for all users. If you delete the open program, the editor opens another program, or an empty editor when none are left.

## Export programs

1. On the open program's **...** menu, choose **Export...**, or right-click a program and choose **Export...**.
2. In the **Export programs** dialog, select the programs to export. Use the filter box, **Select all** and **Select none** as needed.
3. Choose **Export**.

The browser downloads a zip file with one file per program. A single program is named after the program, several programs are named ALivePrograms, and the file name ends with the date and time. If the open program has unsaved changes, you're asked first. **Don't save** exports the last saved version.

## Import programs

1. On the open program's **...** menu, choose **Import...**.
2. Select a zip file that was exported from ALive Code.
3. If programs with the same names already exist, decide what to do:
    - When several exist, choose **Overwrite all**, **Skip existing (import only new)** or **Ask for each**.
    - When one exists, answer the question whether to overwrite it.
4. A message shows how many programs were inserted, modified and skipped.

Import only replaces the code of a program. Files exported from other ALive apps, such as workspaces from ALive Analysis, can't be imported here. For import errors, go to [Troubleshoot ALive Code](troubleshooting.md).

## Related information

- [Use the ALive Code editor](code-editor.md)
- [Request pages and saved values](request-pages.md)
