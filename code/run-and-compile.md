---
title: Run and compile programs
description: Explains what happens when you run or compile a program in ALive Code, how to read the OUTPUT pane, and what happens to data when a run fails.
---

# Run and compile programs

Run a program with F5 to execute it against your company data, or compile it to check the code without running anything.

## Run a program

Press F5, or choose the green **Run** button. ALive Code then:

1. Saves the program if it has unsaved changes.
2. Compiles the code. If there are errors, they're listed in the **OUTPUT** pane, the lines are highlighted, and nothing runs.
3. In a production environment, asks you to confirm a program that can change data. To learn more, go to [Run confirmation in production environments](run-confirmation.md).
4. Shows the program's request page, if it has one. To learn more, go to [Request pages and saved values](request-pages.md).
5. Runs the program in the current company and shows its output.

## Compile without running

Choose the arrow next to the **Run** button, and then choose **Compile**, or press Ctrl+Shift+B. Compiling checks the syntax and checks the code against your environment: table and field names, variables, procedures, option values, and the number of arguments in each call. When everything is correct, the **OUTPUT** pane shows "Compilation completed successfully." Compiling doesn't save the program.

## Read the OUTPUT pane

Each run replaces the content of the pane. A run starts with a "▸ Started" line with the date and time, and ends with a "✓ Ended" line with the date, time and elapsed time. The lines in between come from the program:

| Statement | Output |
|---|---|
| `console.log(...)`, `console.info(...)` | A normal line. |
| `console.warn(...)` | A line in amber. The program continues. |
| `console.error(...)` | A line in red. The program continues. |

All `console` methods accept placeholders like `Message`: `console.log('Customer %1: %2', Cust."No.", Cust.Name);`.

`Message`, `Confirm` and `StrMenu` show normal Business Central dialogs and don't write to the **OUTPUT** pane. `Error` stops the program.

To empty the pane, choose **Clear the output**.

## Compile errors

Each compile error is one line in the form *kind message* at line *number*, for example:

- `UnknownVariable Custmer at line 4`
- `Unexpected Got Semicolon, was expecting Identifier at line 5`

The line is also highlighted in the editor. For the most common messages, go to [Troubleshoot compile errors](troubleshoot-compile-errors.md).

## Runtime errors

When a program fails while it runs, the **OUTPUT** pane ends with `Runtime Error` followed by the message and the line, and the line is highlighted. The output written before the error stays in the pane. For the most common messages, go to [Troubleshoot runtime errors](troubleshoot-runtime-errors.md).

## What happens to data when a run fails

When a run stops with an error, the database changes the program made in that run are rolled back. Changes that were already committed stay. A change is committed when the program calls `Commit()`, or when it runs a routine that commits on its own, such as posting a document.

## Cancelled runs

| Output line | Meaning |
|---|---|
| `-- Run cancelled` | You cancelled the run confirmation in a production environment. Nothing ran. |
| `-- Request page cancelled` | You cancelled the program's request page. The program body didn't run. |

Neither is an error, and nothing is changed.
