---
title: Permissions and access for ALive Code
description: Explains which permissions a user needs to open ALive Code and ALive Data Explorer, and what the app's permission sets cover.
---

# Permissions and access for ALive Code

To open ALive Code or ALive Data Explorer, a user needs the SUPER permission set.

## The SUPER requirement

Both pages check the user's permissions when they open. A user without SUPER can't open them and sees one of these messages:

- "You must have SUPER permissions to access ALive Code."
- "You must have SUPER permissions to access the ALive Data Explorer."

To give someone access, assign the SUPER permission set to the user on the **User Card** page, or through a security group. Assigning only the app's own permission sets isn't enough to open the pages.

## Permission sets in the app

| Permission set | Shown as | What it covers |
|---|---|---|
| ALV ALive Code | ALive Code | The app's pages and its own data: programs, editor settings, saved request page values and the ALive Data Explorer session. It includes ALV Code Engine. |
| ALV Code Engine | ALive Code Engine | The script engine that compiles and runs programs. It's included in ALV ALive Code, so you don't need to assign it separately. |

Neither permission set grants access to business data. SUPER already covers everything in both sets.

## What a user with access can do

- **Run any program.** A program reads the data the user can read and writes with the user's permissions. For a list of protected tables, such as ledger entries and posted documents, a program can also write records when it declares those tables in a Permissions section. Users normally change these tables only through posting. To learn more, go to [Write to protected tables](protected-tables.md).
- **Run other objects.** A program can run pages, reports and codeunits, including posting routines. Those objects apply their own permission checks, as when you run them from Business Central.
- **Work with every program.** Programs aren't owned by a user. Everyone with access sees the same list of programs and can change, rename, delete, export and import them. The programs are the same in every company of the environment.
- **Browse and export table data** in ALive Data Explorer, and create configuration packages from data edits.

## What is stored per user

| Data | Scope |
|---|---|
| The program the editor opens on | Per user |
| Values saved by a request page with SaveValues | Per user, per program, per company |
| Open tabs, filters, column layouts and row limits in ALive Data Explorer | Per user, per company |

## Recommendations for administrators

- Limit SUPER to the people who need it.
- Let users develop and test programs in a sandbox environment before they run them in production.
- Export important programs regularly as a backup. To learn more, go to [Manage programs](programs.md).
- In production, the [run confirmation](run-confirmation.md) asks the user to acknowledge programs that can change data. It helps prevent mistakes, but it doesn't restrict what a user with access can do.
