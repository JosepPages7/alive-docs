---
title: Run confirmation in production environments
description: Explains when ALive Code asks you to confirm a run in a production environment, what the Run in Production Environment page shows, and what counts as an operation that can change data.
---

# Run confirmation in production environments

In a production environment, ALive Code asks you to confirm before it runs a program that can change data or run other objects.

## When you're asked

The **Run in Production Environment** page opens when all of these are true:

- The environment is a Business Central online production environment. Sandbox environments and on-premises installations don't ask.
- The program contains at least one operation that can change data or run other objects.

You're asked every time you run such a program. ALive Code doesn't remember your answer. Programs that only read data run without the question. The confirmation comes before the program's request page.

## What counts as an operation

| Kind | Operations |
|---|---|
| Change data | `Insert`, `Modify`, `Delete`, `DeleteAll`, `ModifyAll` and `Validate` on a record that isn't temporary, and `Commit`. On a temporary record, only the forms that run table triggers, such as `Insert(true)`. |
| Run objects | `Codeunit.Run`, `Report.Run` and `Report.RunModal`, and calls on codeunit variables, including the [standard codeunits](standard-codeunits.md) and [ExcelWorkbook](excel.md). |

`Page.Run` and `Page.RunModal` don't count, because the page runs with your own permissions and you make any changes on it yourself.

When the trigger argument of a temporary-record write is a variable or an expression rather than the literal `false`, it counts as a change.

## Fields on the page

At the top, the page explains that programs run with your full permissions, that this program contains operations that can change data or run other objects, and that you'll be asked every time you run it.

| Field | What it shows |
|---|---|
| **Program** | The name of the program that is about to run. |
| **Summary** | The kinds of operations found: changing persisted data, and running codeunits, reports or bindings that may change data. |
| **Detected operations** | Each operation with its line number, for example "Customer.Modify (line 12)". Up to 20 are listed, followed by "... and *n* more". |
| **I understand that this program can change production data** | Switch this on to enable **Run**. |

Choose **Run** to run the program, or **Cancel** to stop. Closing the page also cancels. After a cancel, the **OUTPUT** pane shows `-- Run cancelled`, and nothing runs.

If the page says "The program could not be analysed; treat it as able to change data.", ALive Code couldn't list the operations. Read the program before you run it.

## It's a safeguard, not a permission

The confirmation helps prevent mistakes, such as running a test program in production by accident. It isn't a security control: the operations are found by reading the code, and a user who can open ALive Code can always confirm. Control who can run programs through permissions. To learn more, go to [Permissions and access](permissions-and-access.md).
