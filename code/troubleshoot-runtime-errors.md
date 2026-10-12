---
title: Troubleshoot runtime errors
description: Lists the runtime error messages that stop an ALive Code program, what causes them, and how to fix them.
---

# Troubleshoot runtime errors

This page explains the most common errors that stop an ALive Code program while it runs.

A runtime error appears at the end of the **OUTPUT** pane as `Runtime Error` followed by the message and the line, and the line is highlighted in the editor. The changes the program made in that run are rolled back unless they were already committed. In the messages below, *name*, *v* and *n* stand for the values in your program.

| Message | Cause and fix |
|---|---|
| `MissingPermission Insert on protected table name requires a Permissions declaration (tabledata "name" = i)` | The program writes a protected table without declaring it. Add the table with the letter shown to the Permissions section. |
| `The name does not exist. Identification fields and values: ...` | A statement such as `Customer.Get('X');` didn't find the record. Use `if Customer.Get('X') then` when the record may be missing. The statement forms of `FindFirst`, `FindSet`, `Insert`, `Modify` and `Delete` also stop the program when they fail, as in AL. |
| `Division by zero` | Check the divisor before dividing. |
| `Cannot convert 'value' to a date` (or number, time, GUID) | A text couldn't be converted. Check the value, or use `Evaluate` in an `if` to test it. |
| `The length of the string is n, but it must be less than or equal to m characters.` | A value is too long for the field or variable. Shorten it with `CopyStr`. |
| `Get: the dictionary does not contain the key name` | Check with `ContainsKey` first. `Add` fails with "already contains the key" when the key exists; use `Set` to add or update. |
| `index n is out of range` | A list, array or text position is outside its size. List positions start at 1, text positions at 0. |
| `Split can only be used in a list assignment or foreach loop` | Assign the result to a `List of [Text]` or loop over it with `foreach`. |
| `NotImplemented rename is not implemented in ALive (yet)` | Record `Rename` isn't supported in scripts. |
| `Clear is not supported for Codeunit variables` | Codeunit variables can't be cleared. |
| `Invalid value v for request page field name` | A value entered on the request page doesn't fit the variable's type. Run again and enter a valid value. |
| `The filters for section name are too long` | Shorten the filters on the request page. |
| `Load must be called before OpenSheet` | Call `Load()` on the workbook before `OpenSheet`. |
| `The file contains no worksheets` | The uploaded file has no sheets. Check the file. |
| `Too many ExcelWorkbook variables` | A run can use up to 10 workbooks. |
| `WriteSheet expects 1 or 3 argument(s) but got 2` | Use `WriteSheet(Header)` or `WriteSheet(Header, CompanyName, UserId)`. |
| `name is not supported on temporary records` | Posting and release codeunits need a real record, not a temporary one. |

## A program runs but shows nothing

- `Message` shows a dialog and doesn't write to the **OUTPUT** pane. Use `console.log`.
- `-- Run cancelled` means the run confirmation was cancelled. To learn more, go to [Run confirmation in production environments](run-confirmation.md).
- `-- Request page cancelled` means the request page was cancelled.

For errors reported before a program runs, go to [Troubleshoot compile errors](troubleshoot-compile-errors.md).
