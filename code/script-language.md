---
title: ALive script language overview
description: Describes the structure of an ALive Code program and how the script language compares to compiled AL.
---

# ALive script language overview

ALive Code programs are written in AL, the language of Business Central extensions, and run directly without being compiled into an extension.

## Structure of a program

A program is one script. Its parts come in this order, and all of them except the main `begin`...`end;` block are optional:

1. A `requestpage` section that asks for input before the program runs. To learn more, go to [Request pages and saved values](request-pages.md).
2. A `Permissions` section, needed only to write protected tables. To learn more, go to [Write to protected tables](protected-tables.md).
3. A `var` section with the global variables.
4. Procedures.
5. The main `begin`...`end;` block.

```al
var
    Customer: Record Customer;
    Total: Decimal;

procedure Double(Value: Decimal): Decimal
begin
    exit(Value * 2);
end;

begin
    if Customer.FindSet() then
        repeat
            Customer.CalcFields(Balance);
            Total += Double(Customer.Balance);
        until Customer.Next() = 0;
    console.log('Total: %1', Total);
end;
```

A script without a `begin` keyword runs as written, so `console.log(CompanyName());` is a valid program.

## What works like AL

- Variables of the common data types, records (also `temporary`), arrays, lists, dictionaries, `TextBuilder` and `Dialog`.
- `if`, `case`, `for`, `foreach`, `while`, `repeat`, `break` and `exit`.
- Procedures with parameters, `var` parameters, return values, named return values and recursion.
- Record methods for finding, filtering, totaling and writing records. As in AL, a statement such as `Customer.Get('10000');` raises an error when it fails, while `if Customer.Get('10000') then` returns true or false.
- FlowFields need `CalcFields` or `SetAutoCalcFields`.
- Running pages, reports and codeunits with `Page.Run`, `Report.Run` and `Codeunit.Run`.

For the full list of what's available, go to [Script language reference](language-reference.md).

## What is different from compiled AL

- **A program isn't an object.** You can't define tables, pages, reports, codeunits, triggers, events or interfaces. A program is a single script with variables, procedures and a main block.
- **Fewer data types.** Types that aren't in the [reference](language-reference.md), for example JSON, HTTP, XML and stream types, are reported as `UnknownType` when you compile.
- **Codeunit variables only for a fixed set.** You can declare variables for a [list of standard codeunits](standard-codeunits.md) and for `ExcelWorkbook`. Codeunit variables can't be assigned, cleared, passed as parameters or returned from procedures.
- **Output.** Use `console.log` to write to the **OUTPUT** pane. `Message` shows a dialog.
- **Zero-based text methods.** The text methods `IndexOf`, `LastIndexOf`, `Substring`, `Insert` and `Remove` use zero-based positions, and `IndexOf` returns -1 when the text isn't found. The classic functions such as `StrPos` and `CopyStr` are one-based.
- **Protected tables.** Writing to ledger entries, posted documents and other protected tables requires a Permissions section in the program. To learn more, go to [Write to protected tables](protected-tables.md).
- **Not supported.** Record `Rename` isn't supported.
- **SetCurrentKey** never fails. If no key matches the fields, the records are still sorted by them.

## Objects by number, name or literal

You can name an object to run by its number, by its name as text, or with a literal: `Page.Run(22)`, `Codeunit.Run('Sales-Post', SalesHeader)` or `Report.Run(Report::"Customer - Top 10 List")`. Unknown names in literals are reported when you compile. `Page.RunModal` returns the action you chose, which you can compare with literals such as `Action::LookupOK`.

## Checks before the program runs

Before a program runs, ALive Code checks it against your environment: table and field names, variables, procedures, option values, and the number of arguments in every call. Errors are listed in the **OUTPUT** pane and nothing runs. To learn more, go to [Run and compile programs](run-and-compile.md).
