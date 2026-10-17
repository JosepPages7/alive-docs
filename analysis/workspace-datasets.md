---
title: Add and manage datasets
description: The kinds of workspace datasets, how to add, rename, reorder and delete them, and what the Dataset settings do.
---

# Add and manage datasets

A dataset is one set of rows in a workspace; each dataset gets its rows from exactly one source, and a workspace can combine several datasets.

## Kinds of datasets

In the **ALive Workspace Studio**, choose **Add** in the **Datasets** panel and pick one of these:

| Menu | Starts with | Gets its rows from |
| --- | --- | --- |
| **Query dataset** | **Design a new query…** or **Start from an existing query…** | A query over Business Central tables. See [Query datasets](workspace-query-dataset.md). |
| **Code dataset** | **Write a script…** | A script that reads data and adds rows. See [Code datasets (scripts)](workspace-script-dataset.md). |
| **Report dataset** | **Use a report…** | The data of a Business Central report. See [Report datasets](workspace-report-dataset.md). |
| **Financial report dataset** | **Use a financial report…** | A financial report statement calculated by Business Central. See [Financial report datasets](workspace-financial-report-dataset.md). |
| **Combined dataset** | **Append datasets…** | The rows of two or more other datasets of the workspace, one after the other. See [Append datasets](workspace-append-dataset.md). |

The kind of a dataset can't be changed after you add it. To use another source, add a new dataset.

## Edit a dataset's source

Choose the pencil on the dataset, or double-click it. Depending on the kind, the pencil is **Edit the query…**, **Edit the code…**, **Report options…**, **Financial report options…** or **Pick the datasets…**.

When a source change brings new fields, the Studio offers to add them to the layout: choose **Add columns** or **Not now**. Columns you removed earlier aren't offered again.

## Dataset actions

Open the dataset's **⋯** menu (Dataset actions), or right-click the dataset:

| Action | What it does |
| --- | --- |
| **Add a dataset from an output…** | Code datasets only. Adds a dataset that shows another output of the same script. |
| **Rename…** | Renames the dataset. Dataset names must be unique in the workspace. |
| **Settings…** | Opens the dataset settings described below. |
| **Move up** / **Move down** | Changes the order of the datasets. |
| **Delete** | Deletes the dataset and the default views that show it. Deleting a script's dataset also deletes the datasets that take its outputs. An append dataset stops appending a deleted dataset. |

## Dataset settings

| Setting | What it does |
| --- | --- |
| **Ask for the report options at run** | Report datasets. Shows the report's request page when a user runs the workspace, filled in with their last options. Off means the options set in the Studio always apply. |
| **Ask for the financial report options at run** | Financial report datasets. Shows the options (dates, dimensions, budget and so on) when a user runs the workspace, filled in with their last options. |
| **Output** | Code datasets. The script output this dataset shows. Blank means the rows the script adds before it chooses any output. |
| **Let users add calculated columns** | Lets users of the viewer add their own calculated columns to the views of this dataset. |
| **Rows in the first message** | How many rows reach the viewer in the first batch. Each next batch doubles, up to 20,000 rows. |
| **Rows read to discover the columns** | Query and code datasets. How many rows the Studio reads when it discovers the dataset's columns. |
| **Max rows (0 = all)** | The most rows a run reads. 0 means no limit. |

Query and code datasets ask for filters at run on their own: a query asks when it has **Ask at run** fields, a script asks when it has a request page. See [Ask for filters at run](workspace-run-options.md).

## Related information

- [Design the layout columns of a dataset](workspace-layout-columns.md)
- [ALive Workspaces overview](workspaces-overview.md)
