---
title: Troubleshoot compile errors
description: Lists the compile error messages ALive Code shows for a program, what causes them, and how to fix them.
---

# Troubleshoot compile errors

This page explains the most common compile errors that ALive Code shows in the **OUTPUT** pane when you compile or run a program.

A compile error appears as *kind message* at line *n*, for example `UnknownVariable Custmer at line 4`, and the line is highlighted in the editor. When there are compile errors, nothing runs. In the messages below, *name*, *X*, *Y*, *n* and *m* stand for the values in your program.

| Message | Cause and fix |
|---|---|
| `UnknownVariable name` | The variable isn't declared, or its name is misspelled. Declare it in the `var` section or correct the name. |
| `UnknownType name` | The table in a Record declaration doesn't exist, the data type isn't supported, or the codeunit isn't one of the [standard codeunits](standard-codeunits.md). Check the spelling and use quotes for names with spaces, such as `Record "Sales Header"`. |
| `Unexpected Got X, was expecting Y` | A syntax error, such as a missing semicolon, `then`, `do` or `end`. Look at the marked line and the line before it. |
| `DuplicateIdentifier Declared twice: name` | Two variables, parameters or request page controls have the same name. Rename one. |
| `UnknownOptionMember name` | The option or enum value doesn't exist for that field or variable. Use IntelliSense after `::` to pick a valid value. |
| `Unknown field name on record variable` | The field doesn't exist on that table. Use quotes for field names with spaces or dots, such as `Customer."No."`. |
| `Unknown function name`, `Unknown method name on Record` | The function or method isn't supported or is misspelled. To learn what's available, go to [Script language reference](language-reference.md). |
| `Function name expects n argument(s) but got m` | A call has too many or too few arguments. |
| `Unknown page name` (or report, codeunit) | An object literal such as `Page::"Customer List"` names an object that doesn't exist. |
| `Invalid permission letter X, valid letters are r, i, m, d` | The Permissions section has a wrong letter. To learn more, go to [Write to protected tables](protected-tables.md). |
| `Codeunit parameters are not supported` | A procedure has a codeunit parameter. Use a global codeunit variable instead. |
| `A requestpage supports at most 10 fields` | Reduce the fields. A request page also allows at most 4 record sections. |

For errors that stop a program while it runs, go to [Troubleshoot runtime errors](troubleshoot-runtime-errors.md).
