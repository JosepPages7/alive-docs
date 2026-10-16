---
title: ALive Analysis overview
description: What the ALive Analysis app contains, which page each kind of user starts from, and which permission sets to assign.
---

# ALive Analysis overview

ALive Analysis adds interactive workspaces, spreadsheet-style sheets and a visual query designer to Business Central, so users can analyze business data without leaving it.

## What the app contains

| Feature | What it does |
| --- | --- |
| ALive Workspaces | Analysis dashboards built from one or more datasets. A dataset gets its rows from a query, a script, a Business Central report or a financial report. Users explore the rows as lists, pivots, charts, KPI tiles and slicers arranged in panes and pages. |
| ALive Sheets | Spreadsheet workbooks inside Business Central, filled by queries and by a script that the sheet administrator writes. See [ALive Sheets overview](sheet-overview.md). |
| Query Designer | A visual designer for the queries that feed workspaces and sheets. See [Query Designer](query-designer.md). |

ALive Analysis is a separate extension: you can use it only when it's installed in your environment. It works on its own and doesn't need ALive Code. ALive AI, another separate extension, adds an assistant to the Workspace Studio when it's installed too. To learn more, see [Three separate extensions](../index.md#three-separate-extensions).

## Where to start

Search for these pages with **Tell me**.

| Page | Who uses it | What it's for |
| --- | --- | --- |
| **ALive Analysis** | Everyone who runs workspaces or sheets | Lists the workspaces and sheets you're allowed to run and opens them. See [Open workspaces and sheets from ALive Analysis](alive-analysis-page.md). |
| **ALive Workspace Studio** | Workspace administrators | Create, design, share, export and import workspaces. See [Create a workspace in the Workspace Studio](workspace-studio.md). |
| **ALive Sheets** | Sheet administrators | Create and design sheets. |
| **ALive Queries** | Users with the SUPER permission set | Design and run standalone queries. |

Users can also open workspaces from customer, vendor, item and other cards and lists with the **ALive Analysis** action. See [Open a workspace from a card or list](workspace-open-in-context.md).

## Permission sets

| Permission set | Assign it to |
| --- | --- |
| ALive Workspaces Admin | People who design workspaces and decide who can run them. They can run every workspace. |
| ALive Workspaces User | People who run workspaces. They also need access to each workspace they run. |
| ALive Workspaces Scheduler | Workspace users who may schedule workspaces to run in the background, in addition to ALive Workspaces User. See [Schedule a workspace to run in the background](workspace-schedule.md). |
| ALive Sheets Admin | People who create and design sheets. |
| ALive Sheets User | People who use sheets that an administrator shares with them. |

A user who only has a user permission set sees nothing until an administrator shares a workspace or sheet with one of the user's permission sets. See [Who can see and run workspaces](workspace-permissions.md).

## Your data stays protected

ALive Analysis reads business data with each user's own Business Central permissions. Running a workspace doesn't change business data: scripts can't write to the database, and anything a report or financial report writes while it runs is rolled back.

## Next steps

- [ALive Workspaces overview](workspaces-overview.md)
- [Starter templates](workspace-templates.md)
