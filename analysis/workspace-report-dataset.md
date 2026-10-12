---
title: Report datasets
description: How to use a Business Central report as a workspace dataset, how its columns and options work, and its limits.
---

# Report datasets

A report dataset takes its rows from the data of a Business Central report, whatever the report's layout, so you can analyze any report that returns data in a workspace.

## Add a report dataset

1. In the **ALive Workspace Studio**, in the **Datasets** panel, choose **Add** > **Report dataset** > **Use a report…**.
2. In the **Pick a report** list, choose the report. Only reports that return data are listed; processing-only reports aren't.
3. The report's own request page opens. Set its options and filters, and then choose **OK**.
4. The Studio runs the report once to detect its columns and creates the layout columns. The dataset takes the report's name.

To change the options later, choose the pencil (**Report options…**) on the dataset. The request page opens with the stored options, and the columns are detected again. The report itself can't be changed after you pick it; add a new dataset to use another report.

## Ask for the options at run

By default, the options you set in the Studio always apply. To let users choose them, open the dataset's **⋯** menu, choose **Settings…**, and turn on **Ask for the report options at run**. Users then see the report's request page when they run the workspace, filled in with their last options. **Cancel** cancels the run, and **Refresh** reuses the last options. See [Ask for filters at run](workspace-run-options.md).

## Rows and columns

- Each row is one record of the report's innermost data item, with the columns of the data items above it.
- Columns that hold the same value on every row, such as labels and report headers, are left out of the first layout. To add them, choose the reset button above the layout columns, and then choose **Add all missing source columns**.
- If the report gains a column after you set it up, the column arrives as text. Open **Report options…** again to detect the columns, and then choose the reset button > **Reset layout to the source defaults**.

## Nothing is saved

The report runs in a way that rolls back anything it writes to the database, such as print counters. Effects outside the database can't be undone, for example an email or a web service call that the report makes. Pick reports that only read data.

## Permissions

The report runs with the permissions of the user who runs the workspace. The user must be allowed to run the report and read its tables, exactly as when they print it.

## Limits

- A report dataset runs in the current company only.
- It has no automatic drilldown. You can set a column to open a page of your choice. See [Drill down to source rows and Business Central pages](workspace-drilldown.md).
- The whole report result is held in memory, so it suits report-sized data.

## Related information

- [Add and manage datasets](workspace-datasets.md)
- [Troubleshoot report and financial report datasets](workspace-troubleshooting-reports.md)
