---
title: Script language reference
description: Lists the data types, statements, built-in functions and methods that ALive Code programs can use.
---

# Script language reference

This page lists what the ALive Code script language supports. Code that uses something not listed here is normally reported as an error when you compile.

## Data types

| Type | Notes |
|---|---|
| Integer, Decimal, Boolean, Char | |
| Text, Code | With or without a length, such as `Text[50]` or `Code[20]`. |
| Date, Time, DateTime, Duration, DateFormula, Guid | |
| Option | With members, such as `Option Open,Released`. |
| Record | `Record Customer` or `Record "Sales Header"`. Add `temporary` for an in-memory record. |
| array | `array[10] of Decimal`. |
| List | `List of [Text]`. |
| Dictionary | `Dictionary of [Text, Decimal]`. |
| TextBuilder | `Append`, `AppendLine`, `Clear`, `Length`, `ToText`. |
| Dialog | `Open`, `Update`, `Close`. Dialogs still open when a run ends are closed. |
| Codeunit | Only the [standard codeunits](standard-codeunits.md) and [ExcelWorkbook](excel.md). |

## Statements and operators

- `if ... then ... else`, `case ... of` (also `case true of`), `for ... to` and `for ... downto`, `foreach ... in`, `while ... do`, `repeat ... until`, `break`, `exit`.
- Procedures with parameters, `var` parameters, return values, named return values, local variables and recursion.
- Arithmetic `+ - * /`, `div`, `mod`, and the assignments `:=`, `+=`, `-=`, `*=`, `/=`.
- Comparison `= <> < > <= >=`, logic `and`, `or`, `not`, `xor`, and `in`.
- Date and time literals, such as `20260131D` and `120000T`.
- Comments with `//` and `/* ... */`.

## Built-in functions

| Area | Functions |
|---|---|
| Dialogs | Message, Error, Confirm, StrMenu |
| Text | Format, Evaluate, StrLen, StrPos, CopyStr, DelStr, DelChr, StrSubstNo, SelectStr, PadStr, ConvertStr, IncStr, MaxStrLen, UpperCase, LowerCase |
| Date and time | Today, WorkDate, Time, CurrentDateTime, CreateDateTime, CalcDate, DMY2Date, Date2DMY, Date2DWY |
| Numbers | Abs, Power, Round, Random, Randomize |
| Arrays and variables | ArrayLen, CompressArray, Clear |
| System | Commit, Sleep, CreateGuid, UserId, CompanyName, GuiAllowed |

## The console

`console.log`, `console.info`, `console.warn` and `console.error` write a line to the **OUTPUT** pane. They take a text with `%1`...`%n` placeholders followed by the values. `warn` lines are amber and `error` lines are red. None of them stops the program.

## Record methods

| Purpose | Methods |
|---|---|
| Find | Get, Find, FindFirst, FindLast, FindSet, Next, Count, CountApprox, IsEmpty |
| Filter and sort | SetRange, SetFilter, GetFilter, GetRangeMin, GetRangeMax, CopyFilters, FilterGroup, SetRecFilter, Reset, SetCurrentKey, Ascending |
| Write | Init, Insert, Modify, Delete, DeleteAll, ModifyAll, Validate, TestField, TransferFields, Copy, LockTable |
| Calculate | CalcFields, CalcSums, SetLoadFields, SetAutoCalcFields |
| Other | FieldNo, FieldName, IsTemporary, ChangeCompany |

System fields such as `SystemId`, `SystemCreatedAt` and `SystemModifiedBy` can be read and filtered by name. Option and enum values use `::`, for example `SalesHeader."Document Type"::Order`.

## Text methods

Contains, StartsWith, EndsWith, IndexOf, LastIndexOf, Substring, Insert, Remove, Replace, Split, ToUpper, ToLower, Trim, TrimStart, TrimEnd, PadLeft, PadRight.

Positions start at 1, as in AL. `IndexOf` and `LastIndexOf` return 0 when the text isn't found. `Split` returns a `List of [Text]` and can only be used in an assignment to a list or in a `foreach`.

## List and Dictionary methods

| Type | Methods |
|---|---|
| List | Add, AddRange, Insert, Set, Get, GetRange, Contains, IndexOf, LastIndexOf, Remove, RemoveAt, RemoveRange, Reverse, Count |
| Dictionary | Add, Set, Get, ContainsKey, Remove, Count, Keys, Values |

List positions start at 1. `Add` on a dictionary fails when the key exists; `Set` adds or updates.

## Run objects

| Call | Notes |
|---|---|
| `Page.Run`, `Page.RunModal` | Optional record and field arguments. `RunModal` returns the action, compare it with `Action::LookupOK` and similar. |
| `Report.Run`, `Report.RunModal` | Optional request page, system printer and record arguments. |
| `Codeunit.Run` | Optional record argument. `Codeunit.Run(...);` stops on an error, `Ok := Codeunit.Run(...)` returns false instead. |

Objects can be given by number, by name as text, or with a literal such as `Page::"Customer List"`.

## Related information

- [ALive script language overview](script-language.md)
- [Request pages and saved values](request-pages.md)
- [Write to protected tables](protected-tables.md)
