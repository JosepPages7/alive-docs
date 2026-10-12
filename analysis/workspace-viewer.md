---
title: Use the workspace viewer
description: How the workspace viewer is laid out, how to work with view tabs, the side panel, Refresh, the Views menu, export and the status bar.
---

# Use the workspace viewer

The workspace viewer runs a workspace and shows its datasets in views that you can switch, change, filter and export.

The viewer opens when you open a workspace from the **ALive Analysis** page, from the **ALive Analysis** action on a card or list, or with **Run** in the Workspace Studio. Its heading reads **ALive Workspace ·** followed by the workspace title.

## The parts of the viewer

| Part | What it's for |
| --- | --- |
| Panes and view tabs | Each tab is a view of one dataset. Choose **+** after the tabs to add a view; with several datasets, you pick which one. |
| Side panel (right edge) | Three panels: **View** (the mode and its fields), **Filters** and **Calculated**. Choose a button to open its panel and again to close it. Drag the panel's edge to resize it. |
| Buttons at the bottom of the right edge | The **Views** menu, **Refresh** (F5) and **Full screen**. |
| Page tabs (bottom) | Shown when the workspace has two or more pages. |
| Filter bar (top) | Shown when page filters exist. See [Filter views and pages](workspace-filters.md). |
| Details pane | Shows the source rows behind a cell. See [Drill down to source rows and Business Central pages](workspace-drilldown.md). |

A pane shows **Not run yet**, **Running…** or the dataset's error while it has no rows.

## View modes

Choose the mode at the top of the **View** panel:

- **List** and **Pivot**: see [List and pivot views](workspace-list-and-pivot.md).
- **Graphics**, **KPI** and **Slicer**: see [Chart, KPI and slicer views](workspace-charts-kpis-slicers.md).

## The view tab menu

Choose the active tab, or right-click any tab:

| Item | What it does |
| --- | --- |
| **Refresh this dataset** | Runs only this view's dataset again. Shown when the workspace has several datasets. |
| **Rename** / **Duplicate** | Renames or copies the view. You can also double-click the active tab to rename it. |
| **Panes** / **Pages** | Moves the view to another pane or page. See [Arrange views in panes and pages](workspace-views-and-pages.md). |
| **Expand all groups** / **Collapse all groups** | For a grouped list. |
| **Reset this view** | Clears the view's settings: it becomes a plain list of the dataset's layout columns, as designed. |
| **Export** | **To Excel** or **To CSV**. |
| **Delete** | Deletes the view. The last view can't be deleted. |

## The Views menu

| Item | Who | What it does |
| --- | --- | --- |
| **Run options…** | Everyone | Runs the workspace again and asks for its filters first. See [Ask for filters at run](workspace-run-options.md). |
| **Save as default views for all users…** | Administrators, in a viewer opened from the Studio | Saves the current views, panes and pages as everyone's starting point. |
| **New page** | Everyone | Adds a page with a new view. |
| **Reset the pane layout** | Administrators, in a viewer opened from the Studio | Puts every view of the page back in one pane. |
| **Reset my views…** | Everyone | Discards your own view changes and returns to the default views. |

Your changes to views, panes and pages are saved for you automatically.

## Export

**To Excel** exports the view's values with their number formats, so Excel can calculate with them. **To CSV** exports the text as shown. Export works for **List** and **Pivot** views, not for **Graphics**, **KPI** or **Slicer** views. The Details pane has its own **Export**.

## Status bar

When the designer turned on **Show the status bar** in the workspace settings, a status bar shows the datasets, rows, failed datasets, run time and companies. When the active view is filtered, it shows how many of the rows the view shows. For code datasets, **Script output** shows what the script wrote to its console.

## Keyboard

| Key | Action |
| --- | --- |
| F5 | Refresh. |
| Esc | Closes the viewer, unless a field, a dialog or a menu has the focus. |

## Related information

- [ALive Workspaces overview](workspaces-overview.md)
- [Filter views and pages](workspace-filters.md)
