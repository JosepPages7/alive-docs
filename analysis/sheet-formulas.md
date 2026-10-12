---
title: Use formulas and custom functions in a sheet
description: How formulas work in an ALive Sheet, how to write custom formula functions with the [Formula] attribute in the sheet script, and what the error values in a cell mean.
---

# Use formulas and custom functions in a sheet

Cells of an ALive Sheet can hold spreadsheet formulas, including functions you write yourself in the sheet script.

## Spreadsheet formulas

Type a formula that starts with `=`, for example `=SUM(B2:B10)` or `=AVERAGE(B2:B10)`. Formulas recalculate when the cells they use change. To recalculate all formulas, choose **Script** > **Recalculate**, or press F9.

- The `IMAGE` function isn't available, and shows `#NAME?`.
- Before a link to a page outside Business Central opens, a confirmation shows the full address. Choose **Open Link** to continue.

## Write a custom function

A procedure of the sheet script that has the `[Formula]` attribute becomes a formula function of the sheet. Writing the script is for sheet administrators.

1. Choose **Script** > **Edit**.
2. Add a procedure with `[Formula]` on the line before it:

   ```al
   [Formula]
   procedure Discount(Amount: Decimal; Pct: Decimal): Decimal
   begin
       exit(Amount * Pct / 100);
   end;
   ```

3. Compile, save and close the editor.
4. In a cell, type `=DISCOUNT(A2, B2)`.

The **Samples** list of the script editor has a complete example: **Custom functions ([Formula] procedures)**.

## Rules for custom functions

- Only procedures with `[Formula]` become functions. Other procedures stay private helpers of the script.
- The function name is the procedure name in upper case. A name that matches a built-in function, such as `Sum`, replaces that built-in function in this sheet, so choose other names.
- The number of arguments must match the procedure. Procedures have no optional parameters.
- Arguments are single values: numbers, text or Boolean values. A reference to one cell, such as `A1`, passes its value. A range, such as `A1:A5`, gives `#VALUE!`.
- Each calculation is a round trip to the server. A function must be self-contained: the main `begin … end` block of the script doesn't run when a function is calculated.
- A function reads Business Central data like the rest of the script, and can't change it.

## Error values

| The cell shows | Cause | Fix |
|---|---|---|
| `#NAME?` | The script doesn't compile, so no function is registered. The status shows the compile error. | Fix the script with **Script** > **Edit**. |
| `#VALUE!` | The procedure stopped with an error, the function no longer exists in the script, or an argument is a range. The status shows the error. | Fix the procedure or the arguments. |
| `#N/A` | The server didn't answer within 30 seconds. | Make the procedure faster, for example by reading fewer records. |
| Empty | The procedure returns no value. | Give the procedure a return value. |

## Related pages

- [Write and run a sheet script](sheet-scripts.md)
- [Sheet functions for scripts](sheet-script-functions.md)
- [Troubleshoot sheet script errors](sheet-script-errors.md)
