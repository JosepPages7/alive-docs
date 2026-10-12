---
title: Create a workspace in the Workspace Studio
description: How workspace administrators create, save, set up and run a workspace in the ALive Workspace Studio.
---

# Create a workspace in the Workspace Studio

The **ALive Workspace Studio** is where workspace administrators create workspaces, add their datasets and design their layout columns.

You need the **ALive Workspaces Admin** permission set (or SUPER) to open the Studio.

## The parts of the Studio

| Part | What it's for |
| --- | --- |
| **Workspaces** panel (left) | Lists every workspace. Select one to open it. The open workspace has a **…** button with all its actions (the workspace menu). Right-click another workspace for its actions. |
| Toolbar | The green **Run** button, the workspace name (a dot means unsaved changes), problem warnings, and full screen. |
| **Datasets** panel | The datasets of the open workspace. |
| Layout columns | The columns of the selected dataset. |
| **Properties** panel (right) | The properties of the selected layout column. |

## Create a workspace

1. Choose the search icon, enter **ALive Workspace Studio**, and then choose the related link.
2. In the **Workspaces** panel, choose **+**, and then choose **Blank workspace**. To start from a ready-made workspace, choose one of the templates listed under **From a template** instead. See [Starter templates](workspace-templates.md).
3. The new workspace is named **New** (or **New 2**, and so on). To rename it, double-click its name, or select it and press F2.
4. In the **Datasets** panel, choose **Add** and pick the kind of dataset. See [Add and manage datasets](workspace-datasets.md).
5. Adjust the layout columns of each dataset. See [Design the layout columns of a dataset](workspace-layout-columns.md).
6. Open the workspace menu (**…**), choose **Settings…**, and fill in the workspace settings described below.
7. Press Ctrl+S, or choose **Save** in the workspace menu.
8. Choose **Run** (F5). Run always saves the workspace first and then opens it in the viewer.
9. In the viewer, arrange the views. Then open the **Views** menu at the bottom of the right edge and choose **Save as default views for all users…**. See [Arrange views in panes and pages](workspace-views-and-pages.md).
10. Share the workspace: in the workspace menu, choose **Permissions…**. See [Who can see and run workspaces](workspace-permissions.md).

A new workspace can only be run by administrators until you share it.

## Workspace settings

Open the workspace menu (**…**) and choose **Settings…**. Choosing **OK** saves the workspace.

| Setting | What it does |
| --- | --- |
| **Title** | Shown as the viewer heading and in the **ALive Analysis** list. Blank means the workspace name is used. |
| **Description** | Shown next to the title in the **ALive Analysis** list. |
| **Default period at run** | The **Period** the run dialog starts with, such as **This fiscal year**. When set, the dialog opens even when only one dataset asks for dates. Each user's last choice wins. See [Ask for filters at run](workspace-run-options.md). |
| **Show the status bar (rows, time, statistics)** | Shows a status bar in the viewer with the row counts, the run time and other statistics. Off by default. |
| **Open from (card and list)** | One check box per kind of record, such as Customer or Item. When checked, the **ALive Analysis** action on that card and list opens this workspace filtered to the record. See [Open a workspace from a card or list](workspace-open-in-context.md). |

## Unsaved changes

If you switch to another workspace with unsaved changes, you're asked to **Save** or **Don't save**. If you close the Studio with unsaved changes, you're asked whether to save them first.

If another administrator, or **Save as default views for all users** in the viewer, changed the workspace after you opened it, saving asks for confirmation before it replaces those changes.

## With the ALive AI app

If the ALive AI app is installed and enabled, the **+** menu and the workspace menu also offer **Describe a workspace…**, and the workspace menu offers **Improve this workspace…** and **Explain this workspace…**.

## Related information

- [Manage workspaces](workspace-manage.md)
- [Troubleshoot opening and saving workspaces](workspace-troubleshooting-access.md)
