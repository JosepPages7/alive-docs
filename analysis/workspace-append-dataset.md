---
title: Append datasets
description: How to stack the rows of two or more workspace datasets in one dataset, such as actual next to budget, and how its columns are matched.
---

# Append datasets

An append dataset stacks the rows of two or more other datasets of the workspace, one after the other, so one view can show them together, for example actual sales next to the budget in one chart.

## Add an append dataset

1. In the **ALive Workspace Studio**, add the datasets you want to combine first, for example a **Sales** query and a **Budget** query.
2. In the **Datasets** panel, choose **Add** > **Combined dataset** > **Append datasets…**.
3. Choose the pencil (**Pick the datasets…**) on the new dataset. Select at least two datasets, and then choose **OK**. An append dataset can't append another append dataset.
4. The layout columns of the append dataset appear. Design its views like any other dataset.

To change which datasets it appends, choose the pencil again.

## How the columns are matched

- Columns with the same title in the appended datasets become one column. The match ignores capitals and spaces at the start and end.
- A column only one dataset has stays blank in the rows of the others.
- The first column, **Source**, names the dataset each row came from. Use it to filter, group or split a chart.

So give the columns you want to compare the same title in each dataset's layout, such as **Month** and **Item**. Give the amounts different titles, such as **Sales Amount** and **Budget Amount**, to show them side by side, or the same title to add them up. When you rename a column in one of the datasets, the append dataset follows the next time the Studio checks its columns.

## How it runs

Nothing runs for the append dataset itself. When a view shows it, the workspace runs the datasets it appends, and then builds the append dataset from their rows. Each appended dataset runs once, even if other views show it too. The run options, filters and permissions are the appended datasets' own.

If one of the appended datasets fails, the append dataset shows the rows of the others. If none of them has rows, the views show **Its datasets have not run.**

## Related information

- [Add and manage datasets](workspace-datasets.md)
- [Chart, KPI and slicer views](workspace-charts-kpis-slicers.md)
- [Troubleshoot running workspaces](workspace-troubleshooting-run.md)
