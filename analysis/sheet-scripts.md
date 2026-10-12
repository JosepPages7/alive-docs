---
title: Write and run a sheet script
description: What an ALive Sheet script can and can't do, how a sheet administrator writes one in the script editor, and how users run it.
---

# Write and run a sheet script

A sheet script is a program, written in the ALive script language (AL syntax), that is stored in the sheet and fills its cells with Business Central data.

## What a script can do

- Read any Business Central table that you're allowed to read, with record variables, filters, `FindSet`, `CalcFields` and so on.
- Write values, formulas and formatting into cells and worksheets with the `Sheet` functions. See [Sheet functions for scripts](sheet-script-functions.md).
- Work freely with temporary records, which live only in memory.
- Ask for values and filters before it runs, with a `requestpage` section. With `SaveValues = true`, your answers are remembered for you.
- Define your own formula functions with the `[Formula]` attribute. See [Use formulas and custom functions](sheet-formulas.md).
- Open Business Central pages with `Page.Run`, where you work with your own permissions.

## What a script can't do

A sheet script runs in a sandbox: it can never change Business Central data. These are rejected when the script compiles, or they stop the run with an error that starts with `SandboxViolation:`:

- `Insert`, `Modify`, `Delete`, `ModifyAll` and `DeleteAll` on database records
- `Validate`, `LockTable` and `Commit`
- `Codeunit.Run` and `Report.Run`, and codeunit variables
- Writes to temporary records that run table triggers

## Write or change the script

Editing the script is for sheet administrators.

1. Choose **Script** > **Edit** (Ctrl+Shift+E). The **Sheet Script** editor opens.
2. Write the script, or choose **Samples** and pick an example, such as **Load BC records into the sheet**. A sample replaces the code in the editor.
3. To check the script, open the menu next to the Run button and choose **Compile**, or press Ctrl+Shift+B. Errors are marked in the code. The script itself runs from the sheet, not from the editor.
4. Choose the back arrow to compile, save and close (F4). The script is saved only if it compiles. Ctrl+S saves without closing.

When the editor closes, the sheet compiles the script and registers its formula functions. The status shows **Script compiled**.

## Run the script

Choose **Script** > **Run**, or press F5. Everyone who may open the sheet can run its script.

- The script starts in the worksheet that is active.
- The changes appear in the grid when the script ends, and all formulas recalculate.
- The status shows the last line the script wrote to its output, or **Script completed**.
- If the script stops with an error, the message **The script stopped with an error:** shows the reason. The changes made before the error are still applied.
- With **Use** access, the results stay on screen but aren't saved.

## Example

This script lists the customers on the active worksheet:

```al
var
    Customer: Record Customer;
    RowNo: Integer;
begin
    Sheet.ClearAll();
    Sheet.SetValue(1, 1, 'No.');
    Sheet.SetValue(1, 2, 'Name');
    RowNo := 1;
    if Customer.FindSet() then
        repeat
            RowNo += 1;
            Sheet.SetValue(RowNo, 1, Customer."No.");
            Sheet.SetValue(RowNo, 2, Customer.Name);
        until Customer.Next() = 0;
end;
```

Start a script with `Sheet.ClearAll()` so that a new run never mixes with the output of the last one.

## Related pages

- [Sheet functions for scripts](sheet-script-functions.md)
- [Use formulas and custom functions](sheet-formulas.md)
- [Troubleshoot sheet script errors](sheet-script-errors.md)
