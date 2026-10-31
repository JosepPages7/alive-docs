---
title: Arrange views in panes and pages
description: How to place workspace views side by side in panes, spread them over pages, drill through from a cell to another page, add text views, and save the arrangement as the default views for all users.
---

# Arrange views in panes and pages

You can show several views at once by splitting the viewer into panes, and group views into pages, like the pages of a dashboard.

## Panes

A pane holds one or more views as tabs. To place views side by side:

- Drag a view tab to an edge of a pane. Drag the bar between two panes to resize them.
- Or choose the active tab (or right-click a tab) and choose **Panes**, then **New pane to the right**, **New pane to the left**, **New pane below** or **New pane above**.

The same **Panes** menu has **Move to the pane** to move the view into another pane, and **One pane for all views** to put every view back in a single pane. Drag tabs to reorder them or to move them between panes.

When several panes are open, the active pane has a colored frame. The **View** panel on the right always edits the active view, and its name shows under the panel title.

## Pages

Pages split a workspace into separate screens, each with its own panes. Page tabs show along the bottom of the viewer once there are two pages or more.

| To | Do this |
| --- | --- |
| Add a page | In the **Views** menu, choose **New page**, or choose **+** on the page tabs. The new page starts with a new view. |
| Move a view to another page | In the view tab menu, choose **Pages** > **Move to a new page** or **Move to the page**. You can also drag a view tab onto a page tab. |
| Rename, reorder or delete a page | Choose the active page tab, or right-click any page tab, and choose **Rename**, **Move left**, **Move right** or **Delete page**. Double-click a page tab to rename it. Drag page tabs to reorder them. |

Deleting a page deletes its views. A page whose last view is moved away or deleted disappears.

## Drill through to another page

Right-click a pivot value, a group row of a list, a KPI tile or a chart mark, choose **Drill through**, and then choose a page. That page opens filtered to what you clicked, for example one customer or one month, across its datasets that share the field. The filter bar shows **Back to** *page*: choose it to return, and the drill-through filter goes away.

A drill-through filter is never saved; the next drill-through to the same page replaces it. Your own page filters stay. **Drill through** shows only when the workspace has another page.

## Text views

A **Text** view shows headings, notes and live numbers next to the other views, for example a title for a page. Choose **Text** at the top of the **View** panel and write in the **Text** box:

| Write | To get |
| --- | --- |
| `# Sales` | A heading |
| `## By country` | A smaller heading |
| `- A point` | A list item |
| `**important**` | Bold text |
| `{Amount}` | A column's value for the view's rows: a number's total, or a text column's value when the rows have one to three values |

**Insert a column…** puts a column at the cursor. The numbers follow the view's filters and the page's, so a slicer changes them. The text is applied when you leave the box. A default view's text can be translated in the workspace's translations.

## Sheet view

An administrator can add one **Sheet** view to a workspace: a spreadsheet with formulas that read every dataset. See [The Sheet view](workspace-sheet-view.md).

## Your views and the default views

Every change you make to views, panes and pages is saved for you automatically, per workspace. Other users don't see your changes.

The first time you open a workspace, you start from its default views. If the designer saved none, you get one view per dataset in one pane.

To discard your own changes, open the **Views** menu and choose **Reset my views…**.

## Save the default views for all users

Administrators set what every user starts from:

1. In the **ALive Workspace Studio**, choose **Run** to open the workspace in the viewer.
2. Arrange the views, panes, pages and their filters.
3. In the **Views** menu, choose **Save as default views for all users…** and confirm.

The views and pane layout are saved in the workspace, and every user's own view changes for this workspace are reset, so everyone starts from the new defaults. This action is only offered in a viewer opened with **Run** from the Studio. In the same viewer, **Reset the pane layout** puts every view of the page back in one pane.

## Related information

- [Use the workspace viewer](workspace-viewer.md)
- [Filter views and pages](workspace-filters.md)
- [The Sheet view](workspace-sheet-view.md)
