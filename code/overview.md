---
title: ALive Code overview
description: Explains what ALive Code is, what you can do with it, and who should have access to it.
---

# ALive Code overview

ALive Code lets administrators write and run AL code directly in the Business Central web client, without Visual Studio Code and without publishing an extension.

## What you can do with ALive Code

- Write a script on the **ALive Code** page and run it with F5. The result appears in the **OUTPUT** pane next to the code.
- Save scripts as programs, keep them in the **PROGRAMS** panel, and export or import them as a zip file.
- Start from ready-to-run samples: reading and filtering records, writing records, collections, request pages, running pages, reports and codeunits, and Excel.
- Ask for input before a program runs with a request page, and remember the values for the next run.
- Read and write Excel files from a script.
- Browse the data of any table on the **ALive Data Explorer** page, export it to CSV or RapidStart files, and prepare data changes as a configuration package.

## Programs run with full trust

ALive Code is a full-trust tool. A program can do what an AL developer can do in code:

- Read the tables you can read.
- Insert, modify and delete records.
- Write to protected tables, such as ledger entries, registers and posted documents, when the program declares them in a Permissions section.
- Run pages, reports and codeunits, including posting routines such as **Sales-Post**, **Purch.-Post** and **Gen. Jnl.-Post Batch**.
- Commit its changes to the database.

Changes that a program has committed can't be undone by ALive Code. Treat running a program like running any other code against your company data.

## Who should have access

Only users with the SUPER permission set can open **ALive Code** and **ALive Data Explorer**. Give that access only to trusted administrators and developers who understand AL and the data they work with. Programs are shared: every user who can open ALive Code can see, change, run and delete every program.

Good practice:

- Develop and test programs in a sandbox environment first.
- Read a program before you run it, especially one you imported or copied from someone else.
- In a production environment, ALive Code asks you to confirm before it runs a program that can change data. This confirmation is a safeguard, not a permission. To learn more, go to [Run confirmation in production environments](run-confirmation.md).

## Where to find it

Search for **ALive Code** or **ALive Data Explorer** with Tell Me. You can also open ALive Data Explorer from the code editor.

## ALive Code and ALive Analysis

ALive Analysis is a separate app for sheets and workspaces, where scripts can only read data. ALive Code doesn't need ALive Analysis, and you can install either app on its own.

## Next steps

- [Permissions and access](permissions-and-access.md)
- [Use the ALive Code editor](code-editor.md)
- [Run and compile programs](run-and-compile.md)
- [ALive script language overview](script-language.md)
