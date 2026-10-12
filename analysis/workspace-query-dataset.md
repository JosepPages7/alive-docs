---
title: Query datasets
description: How to add a query dataset to a workspace, how its Ask at run fields, companies and drilldown work, and what to know about large results.
---

# Query datasets

A query dataset reads Business Central tables through a query that you design in the Query Designer, and is the most common kind of workspace dataset.

## Add a query dataset

1. In the **ALive Workspace Studio**, in the **Datasets** panel, choose **Add** > **Query dataset**.
2. Choose one of these:
   - **Design a new query…** opens the Query Designer on an empty query.
   - **Start from an existing query…** opens the **Existing queries** list: the saved ALive Queries and the query datasets of the other workspaces. The query you pick is copied into this workspace.
3. Design the query, then choose **Save** or **Save and close** (F4) in the designer. To learn how, see [Query Designer](query-designer.md).

The Studio then creates one layout column per field of the query. A dataset that still has its default name takes the name of the query's main data item.

The query is stored inside the workspace. Later changes to the saved query or workspace you started from don't change this dataset, and the other way around. To change the query, choose the pencil (**Edit the query…**) on the dataset.

## Filters at run

Fields that you mark **Ask at run** in the Query Designer are asked for when a user runs the workspace, in Business Central's filter dialog. Each user's answers are remembered for that user and company, and **Refresh** reuses them. When several datasets ask for filters, one run dialog asks for the shared **Period**, **Companies** and dimension filters. See [Ask for filters at run](workspace-run-options.md).

## Several companies

A multi-company query runs in several companies and adds a **Company** column. If its company column asks at run, the run dialog's **Companies** field fills it in. A multi-company query has no drilldown to Business Central pages.

## Drilldown

A query dataset can open Business Central pages from its cells without any setup:

- A field of the table's primary key opens its record, for example a customer number opens the customer.
- A field related to another table opens the related record.

FlowFields, totals and generated date columns don't drill down automatically. You can set any column to open a page of your choice. See [Drill down to source rows and Business Central pages](workspace-drilldown.md).

## Large results

A query dataset has no row limit by default, and every row travels to the browser. For very large tables:

- Use totals in the query to group the rows on the server, so fewer rows travel.
- Set **Max rows (0 = all)** in the dataset settings.
- Use **Ask at run** filters so users load only what they need.

## Permissions

A query reads data with the permissions of the user who runs the workspace, including security filters. A user who can't read one of the query's tables gets the message **You do not have permission to read table** followed by the table.

## Related information

- [Add and manage datasets](workspace-datasets.md)
- [Filter views and pages](workspace-filters.md)
