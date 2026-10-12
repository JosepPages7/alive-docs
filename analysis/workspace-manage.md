---
title: Manage workspaces
description: How to rename, copy, delete, export, import and translate workspaces in the ALive Workspace Studio.
---

# Manage workspaces

Workspace administrators rename, copy, delete, export, import and translate workspaces from the **Workspaces** panel of the **ALive Workspace Studio**.

The actions are on the workspace menu: the **…** button of the open workspace. Right-click any other workspace for **Rename**, **Delete**, **Permissions…** and **Export…**.

## Rename a workspace

Double-click the name, or select it and press F2, then type the new name and press Enter. You can also choose **Rename** in the workspace menu.

A name can't contain any of these characters: `\ / : * ? " < > |`, and no two workspaces can have the same name, whatever the capitalization. The workspace keeps its permissions and every user's saved views when you rename it.

## Copy a workspace

Choose **Save as…** (Ctrl+Shift+S) in the workspace menu and enter a name. The Studio saves what's on screen, including unsaved changes, as a new workspace and opens it. The original keeps its last saved version.

The copy has no permissions, so only administrators can run it until you share it. Its title is cleared, so it shows its own name. Users' saved views stay with the original.

## Delete a workspace

Choose **Delete** and confirm. The workspace's permissions and every user's saved views of it are deleted too.

## Export workspaces

1. Choose **Export…**.
2. In the **Export workspaces** dialog, select the workspaces. Use the filter box, **Select all** and **Select none** to pick them.
3. Choose **Export**.

You get a .zip file named after the workspace, or **ALiveWorkspaces** followed by the date and time for several workspaces. The file contains each workspace's design, including its default views and translations. Permissions and users' own views aren't exported.

## Import workspaces

1. Choose **Import…** in the workspace menu, or choose **+** > **Import…**.
2. Select the .zip file.
3. If a workspace with the same name exists, you're asked whether to overwrite it. With several existing names, choose **Overwrite all**, **Skip existing (import only new)** or **Ask for each**.

A message reports how many workspaces were inserted, modified and skipped. A newly imported workspace has no permissions, so share it before users can run it. An overwritten workspace keeps its permissions, and its users start again from the imported default views.

## Translate a workspace

The texts you write in a workspace can be shown in each user's Business Central language.

1. Choose **Translations…** in the workspace menu.
2. Choose **Add language** and enter a language code such as **es**, **de** or **fr-CA**. The code **es** also covers regional variants such as es-MX.
3. Enter the translations of the title, description, dataset names, column titles, and the names of the default views and pages. A blank cell shows the text as written.
4. Choose **OK**, and then save the workspace.

The workspace name, Business Central's own captions, and users' own views aren't translated.

## Related information

- [Create a workspace in the Workspace Studio](workspace-studio.md)
- [Who can see and run workspaces](workspace-permissions.md)
