---
title: Work with Excel files in scripts
description: Explains how an ALive Code program exports data to an Excel file and imports data from an Excel file with the ExcelWorkbook codeunit.
---

# Work with Excel files in scripts

ALive Code programs read and write Excel (.xlsx) files through an `ExcelWorkbook` variable, which holds a workbook in memory.

Declare it as `Book: Codeunit ExcelWorkbook;` or `Book: Codeunit "Excel Workbook";`. To try it, load the samples **Export data to Excel** and **Import data from Excel** from the **SAMPLES** list.

## Export data to Excel

```al
var
    Customer: Record Customer;
    Book: Codeunit ExcelWorkbook;
    RowNo: Integer;
begin
    RowNo := 1;
    Book.SetValue(RowNo, 1, 'No.');
    Book.SetValue(RowNo, 2, 'Name');
    Book.SetValue(RowNo, 3, 'Balance');
    if Customer.FindSet() then
        repeat
            RowNo += 1;
            Book.SetValue(RowNo, 1, Customer."No.");
            Book.SetValue(RowNo, 2, Customer.Name);
            Customer.CalcFields(Balance);
            Book.SetValue(RowNo, 3, Customer.Balance);
        until Customer.Next() = 0;
    Book.CreateBook('Customers');
    Book.WriteSheet('Customers');
    Book.Save('CustomerList');
end;
```

1. Fill the cells with `SetValue(Row, Column, Value)`. Writing the same cell again replaces the value.
2. Call `CreateBook(SheetName)` to name the sheet.
3. Call `WriteSheet(Header)` to write the cells to the sheet. The header text is written together with the current company name and user ID. To use another company name or user ID, call `WriteSheet(Header, CompanyName, UserId)`.
4. Call `Save(FileName)`. The browser downloads the file with the .xlsx extension added.

Numbers, dates and times are stored as real Excel values, so you can calculate with them in Excel. Booleans, date-times and other values are stored as text. A text that looks like a date, such as '2026-01-31', also becomes a date cell.

## Import data from Excel

```al
var
    Book: Codeunit ExcelWorkbook;
    SheetName: Text;
    RowNo: Integer;
begin
    if Book.Load() = '' then
        exit;                       // the user cancelled the upload
    SheetName := Book.SelectSheetName();
    if SheetName = '' then
        exit;
    Book.OpenSheet(SheetName);
    for RowNo := 2 to Book.RowCount() do
        console.log('%1 | %2', Book.GetValue(RowNo, 1), Book.GetValue(RowNo, 2));
    Book.Close();
end;
```

1. `Load()` asks the user to upload a file and returns the file name, or an empty text when the user cancels.
2. `SelectSheetName()` lets the user pick a sheet and returns its name, or an empty text when nothing was chosen.
3. `OpenSheet(SheetName)` reads the sheet. `OpenSheet()` without a name reads the first sheet.
4. `GetValue(Row, Column)` returns the cell value as text, or an empty text when the cell is empty.

## All methods

| Method | What it does |
|---|---|
| Load() | Uploads a file and returns its name. |
| SelectSheetName() | Lets the user choose a sheet of the uploaded file. |
| OpenSheet([SheetName]) | Reads a sheet of the uploaded file. |
| CreateBook(SheetName) | Starts a new workbook for export. |
| WriteSheet(Header [, CompanyName, UserId]) | Writes the cells to the sheet. |
| Save(FileName) | Downloads the workbook. |
| SetValue(Row, Column, Value) | Sets a cell. |
| GetValue(Row, Column) | Returns a cell as text. |
| RowCount() | Returns the highest row number, or 0 when there are no cells. |
| FindLast() | Returns true when the workbook has any cell. |
| Close() | Releases the workbook. |

## Limits and rules

- A program can use up to 10 workbooks in one run.
- Each `ExcelWorkbook` variable is its own workbook.
- Like other codeunit variables, a workbook can't be passed to a procedure as a parameter. Declare it as a global variable to use it in procedures.
- In a production environment, a program that uses `ExcelWorkbook` asks for confirmation before it runs. To learn more, go to [Run confirmation in production environments](run-confirmation.md).

For Excel error messages, go to [Troubleshoot runtime errors](troubleshoot-runtime-errors.md).
