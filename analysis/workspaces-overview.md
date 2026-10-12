---
title: ALive Workspaces overview
description: What a workspace is made of (datasets, layout columns, views, panes and pages) and how designing and running a workspace work.
---

# ALive Workspaces overview

A workspace is a saved analysis that collects data from one or more sources and shows it as interactive lists, pivots, charts, KPI tiles and slicers.

## The parts of a workspace

| Part | What it is |
| --- | --- |
| **Dataset** | One set of rows. Each dataset has exactly one source, chosen when you add it: a query, a script (code), a Business Central report or a Business Central financial report. A workspace can have several datasets. See [Add and manage datasets](workspace-datasets.md). |
| **Layout columns** | The columns a dataset offers to its views: their titles, formats, totals, calculated columns and what a click on a cell opens. See [Design the layout columns of a dataset](workspace-layout-columns.md). |
| **View** | A tab that shows one dataset in one of five modes: **List**, **Pivot**, **Graphics**, **KPI** or **Slicer**. A workspace can have many views of the same dataset. |
| **Pane** | An area of the screen that holds one or more views as tabs. Views can sit side by side or one above the other. |
| **Page** | A set of panes. A workspace with several pages shows page tabs along the bottom of the viewer. |

## Who does what

- **Administrators** (the **ALive Workspaces Admin** permission set) design workspaces in the **ALive Workspace Studio**, arrange the default views, and decide who can run each workspace.
- **Users** (the **ALive Workspaces User** permission set) run the workspaces shared with them from the **ALive Analysis** page or from the **ALive Analysis** action on cards and lists.

## How a workspace runs

1. When the viewer opens, it runs the workspace at once. Datasets that ask for filters or options at run show their dialogs first. See [Ask for filters at run](workspace-run-options.md).
2. The datasets run one after the other. Rows appear in the views as they arrive. If one dataset fails, its views show the error and the other datasets still load.
3. **Refresh** (F5) runs the workspace again with the same filters. In the **Views** menu, **Run options…** asks for the filters again.

Only datasets that at least one view shows are run.

## Default views and your own views

The administrator saves a set of default views, panes and pages for everyone. Each user can then change the views freely: add views, change modes, filter and rearrange. Your changes are saved for you automatically and don't affect other users. In the **Views** menu, **Reset my views…** returns you to the default views. See [Arrange views in panes and pages](workspace-views-and-pages.md).

## Workspaces don't change your data

Running a workspace never saves changes to business data. Queries and scripts only read data, and anything a report or financial report writes while it runs is rolled back. Every user sees only the data their own Business Central permissions allow.

## Related information

- [Create a workspace in the Workspace Studio](workspace-studio.md)
- [Use the workspace viewer](workspace-viewer.md)
- [Starter templates](workspace-templates.md)
