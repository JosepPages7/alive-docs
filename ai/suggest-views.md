---
title: Suggest views
description: How a workspace administrator gets pivot, chart and KPI views of a dataset proposed by ALive AI in the workspace viewer.
---

# Suggest views

**Suggest views** proposes pivot tables, charts and KPIs for one dataset of a workspace, from the dataset's columns, never from its rows.

## Before you start

- You are a workspace administrator, and you run the workspace from the **ALive Workspace Studio** (the run button or F5, which saves and runs the workspace in the viewer). Suggest views isn't offered when a workspace is run from anywhere else.
- The dataset has run and shows in a view: the assistant needs its columns.

## Suggest views of a dataset

1. In the workspace viewer, open the **Views** menu and choose **Suggest views…**.
2. If the workspace has several datasets, choose the dataset.
3. In the **Suggest views of** dialog, optionally say what the users of this dataset want to see: trends, rankings, shares. Or choose a sample: **Over time** or **Rankings**.
4. Choose **Generate**.
5. Review the result, and then choose **Keep them**, **Regenerate** or **Discard them**.

| Field | What it shows |
|---|---|
| **What the Views Show** | What the suggested views show, as the AI model describes them. |
| **Views** | The suggested views and the calculated columns they add. |
| **Sent to the AI Provider** | How many requests the answer took and their tokens. Choose the value to see the exact text of the last request. |

> [!IMPORTANT]
> Never type customer names, amounts or other business data in the dialog. Your text is sent to the AI provider with the column names of the dataset.

## What happens when you keep them

- The views open on a new page of the viewer, **Suggested views** (numbered when that name is taken), each in its own tab.
- The calculated columns the views use are added as your own columns of the dataset.
- Nothing is shared yet: the views are your own until you choose **Save as default views for all users…** on the **Views** menu. Until then you can change or close them.

## What is sent

Only the dataset's column metadata: the column titles, data types, field names, whether a column is a FlowField, the date parts (year, quarter, month), the titles of calculated columns without their formulas, and the names and kinds of the dataset's views. No row, no value, no formula and no filter is sent.

## Limits

- Suggest views proposes pivot, chart and KPI views. Lists and slicers, page layouts and conditional formats aren't part of it. To have the assistant design those, use [Improve or explain a workspace](improve-or-explain-a-workspace.md).
- Up to 6 views per suggestion, and up to 10 requests per **Generate**.
- One dataset at a time.

## Related information

- [Describe a workspace](describe-a-workspace.md)
- [Troubleshoot the assistant](troubleshoot-assistant.md)
