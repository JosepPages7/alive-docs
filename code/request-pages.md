---
title: Request pages and saved values
description: Explains how a program asks for input and filters before it runs with a requestpage section, and how SaveValues remembers the entered values.
---

# Request pages and saved values

A program can ask for values and record filters before it runs, like the request page of a report, by starting with a `requestpage` section.

## Example

```al
requestpage
{
    SaveValues = true;
    Caption = 'Customer Overview Options';

    layout
    {
        record(Customer; CustFilter)
        {
            filter("No.");
            filter("Country/Region Code");
        }
        field(FromDateCtl; FromDate)
        {
            Caption = 'From Date';
        }
        field(ShowDetailsCtl; ShowDetails)
        {
            Caption = 'Show Details';
        }
    }
}
var
    CustFilter: Record Customer;
    FromDate: Date;
    ShowDetails: Boolean;
begin
    if CustFilter.FindSet() then
        repeat
            if ShowDetails then
                console.log('%1 - %2', CustFilter."No.", CustFilter.Name);
        until CustFilter.Next() = 0;
end;
```

To try it, load the sample **Request page with filters** from the **SAMPLES** list.

## How the section is built

| Element | What it does |
|---|---|
| `SaveValues = true;` | Remembers the values you enter and fills them in on the next run. |
| `Caption = '...';` | The title of the request page. Without it, the title is **Options**. |
| `record(Table; Variable)` | A filter section for a global Record variable of that table. Each `filter(Field);` adds a filter row for that field. |
| `field(Name; Variable)` | An input for a global variable, with an optional `Caption`. |

Rules:

- The `requestpage` section comes first in the program, before `Permissions` and `var`.
- Record sections come before the fields.
- A request page can have up to 10 fields and up to 4 record sections.
- A field can be Text, Code, Date, Time, DateTime, Integer, Decimal, Boolean or Option.
- The variables must be global, and each control name must be unique.

## What the user sees

The request page uses the standard Business Central filter page:

- Each record section shows its filter rows. You can add filters for other fields with **+ Filter**, including FlowFilters, as on a report request page. The program receives the record variable with these filters set.
- Each field is its own section, titled with its caption, with one row named **Value**. Type the value in the row. Dates get a date picker and Boolean fields a Yes/No list. For an Option field, type the option name or its number.
- When two fields have the same caption, the second gets a number, such as "Balance (2)".

Choose **OK** to run the program with the values, or **Cancel** to stop. After a cancel, the **OUTPUT** pane shows `-- Request page cancelled` and the program body doesn't run.

A value must fit the variable's type. For example, a range such as 1000..2000 can't go into an Integer field, and the run stops with an error that starts with "Invalid value".

## Saved values

With `SaveValues = true`, the values and filters are saved when you choose **OK**, and filled in the next time you run the same program.

- Saved values are kept for each user, each program and each company.
- Values that no longer fit the field, for example after you change a variable's type, are ignored.
- Renaming a program starts it with default values again. Deleting a program deletes its saved values for all users.

## Related information

- [Run and compile programs](run-and-compile.md)
- [Troubleshoot compile errors](troubleshoot-compile-errors.md)
- [Troubleshoot runtime errors](troubleshoot-runtime-errors.md)
