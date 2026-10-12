---
title: Troubleshoot sheet script errors
description: The error messages of an ALive Sheet script when it compiles or runs, what causes each one, and how to fix it.
---

# Troubleshoot sheet script errors

Find the message you see, then follow the fix. Parts in square brackets, such as [name], are replaced by the names from your script. Fixing a script is for sheet administrators: choose **Script** > **Edit**.

## The script doesn't run

| Message | Cause and fix |
|---|---|
| This sheet has no script yet. Use Script > Edit to write one. | **Run** needs a script. A sheet administrator writes one. |
| The sheet script cannot run because it does not compile. Use Script > Edit to fix it: | The script has errors, listed after the message. Fix them in the script editor, where they're marked in the code. |
| Compile error in the sheet script: [errors] | Shown in the status when a sheet opens with a script that doesn't compile. Its formula functions show `#NAME?` until the script is fixed. |
| You do not have permission to run the sheet "[name]". | The sheet isn't shared with you, or no longer is. Ask a sheet administrator. |

## The script tries to change data

A sheet script can never change Business Central data. See [Write and run a sheet script](sheet-scripts.md).

| Message | Cause and fix |
|---|---|
| SandboxViolation: [operation] is not allowed in sandboxed scripts - persisted data cannot be created, modified or deleted at line [n] | The script tried to insert, modify or delete a database record. Use a temporary record, or write the values into cells. |
| [operation] on a non-temporary record is not allowed in sandboxed scripts - persisted data cannot be created, modified or deleted | The same, found when the script compiles. |
| [operation] with RunTrigger=true is not allowed in sandboxed scripts (table triggers can write persisted data) | On a temporary record, call `Insert`, `Modify` or `Delete` without running the table trigger. |
| [statement] is not allowed in sandboxed scripts | The script uses a statement that a sheet script can't use, such as `Commit`, `Validate` or `Codeunit.Run`. Remove it. |

## Errors from Sheet functions

| Message | Cause and fix |
|---|---|
| The script stopped with an error: [error] | A runtime error, explained after the message. The changes made before the error are still in the grid. |
| Sheet.SetValue: row [n] is out of range 1..[max] for worksheet [name] | The cell is outside the worksheet. Make the worksheet bigger with `Sheet.SetDimensions`, or check its size with `Sheet.GetRowCount()`. The same applies to columns and to the other cell functions. |
| Sheet.SetValue: row [n] must be 1 or greater | Rows and columns start at 1. |
| Unknown worksheet [name] - use Sheet.Add to create it | `Sheet.Select` needs an existing worksheet. Use `Sheet.Add`, which creates it or selects it. |
| Cannot delete the selected worksheet - select another worksheet first / Cannot delete the last worksheet | `Sheet.Delete` can't delete the selected worksheet or the only one. |
| Worksheet [name] already exists | `Sheet.Rename` can't use the name of another worksheet. Check it first with `Sheet.Exists`. |
| Sheet functions are only available when the script is run from an ALive Sheet page | `Sheet` functions work only in a sheet script that runs from an ALive Sheet. |
| Sheet.RefreshQuery: this sheet has no queries (use Queries > New Query in the sheet) / The sheet has no query named [name]. | The script refreshes a query that doesn't exist. Check the name in **Queries** > **Manage…**. |

For a formula function that shows `#NAME?`, `#VALUE!` or `#N/A`, see [Use formulas and custom functions](sheet-formulas.md).

## Related pages

- [Write and run a sheet script](sheet-scripts.md)
- [Sheet functions for scripts](sheet-script-functions.md)
- [Troubleshoot ALive Sheets](sheet-troubleshooting.md)
