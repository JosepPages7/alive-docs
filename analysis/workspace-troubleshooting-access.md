---
title: Troubleshoot opening and saving workspaces
description: The messages users and administrators can get when opening, sharing, saving, renaming or importing workspaces, what causes them and how to fix them.
---

# Troubleshoot opening and saving workspaces

This page explains the messages about access, opening from records, saving and importing workspaces; in the messages, the parts in angle brackets change.

For messages while a workspace runs, see [Troubleshoot running workspaces](workspace-troubleshooting-run.md).

## Access

### You do not have permission to use workspace "\<name\>". Contact an administrator to be added to one of its permission sets.

The workspace isn't shared with any permission set you have. An administrator adds one of your permission sets on the workspace's **Permissions…** page, or assigns you a permission set already listed there. See [Who can see and run workspaces](workspace-permissions.md).

### Only workspace administrators can do this (write permission on the workspace table is required).

You tried to open the **ALive Workspace Studio**, share a workspace, or export or import workspaces without the **ALive Workspaces Admin** permission set. Ask an administrator to assign it if you design workspaces.

### Save the default views from the Workspace Studio: run the workspace from there.

Default views can only be saved from a viewer opened with **Run** in the Studio. The same applies to **Add columns to a dataset** and **Ask for suggested views**.

### Several permission sets named "\<permission set\>" exist (in different scopes or extensions). Use the lookup to pick the exact one.

On the **Permissions** page, choose the permission set with the lookup instead of typing it.

### The ALive Analysis page is empty

You have no workspace user permission set, or no workspace is shared with you yet. See [Open workspaces and sheets from ALive Analysis](alive-analysis-page.md).

## Opening from a card or list

### No workspace opens from \<Customer\>. An administrator can add one in the Workspace Studio: Workspace settings, Open from.

No workspace you can run is set to open from this kind of record. An administrator selects the record under **Open from (card and list)** in the workspace settings and shares the workspace with you. See [Open a workspace from a card or list](workspace-open-in-context.md).

### \<G/L Account 40000 · Revenue\> is a heading: no entries are posted to it. Open a posting or a total account instead.

Heading accounts have no amounts. Choose the action on a posting or total account.

### ALive Analysis can open in the context of a record with a one-field key only (\<table\> has \<n\>).

An extension added the action to a page whose records have a key of several fields. Workspaces can open only for records with a one-field key.

## Saving and naming

### The workspace "\<name\>" was changed since you opened it here (in another Studio, or by "Save as default views for all users" in the viewer). Saving replaces those changes with yours. Save anyway?

Someone saved the workspace after you opened it. Choose **No**, then reopen the workspace to get the latest version. Choose **Yes** only if your version should replace theirs.

### The workspace name is not valid. It cannot contain any of the following characters: \ / : * ? " < > |

Remove those characters from the name. The name is also the export file name.

### A workspace named "\<name\>" already exists. Please use a different name.

Names must be unique, whatever the capitalization.

## Importing

### The ALive Workspace: "\<name\>" already exists. Do you want to overwrite it?

Choose **Yes** to replace the workspace with the one in the file. It keeps its permissions, and its users' views reset to the imported default views.

### The file "\<file\>" does not contain an ALive workspace.

The .zip file doesn't come from a workspace export, for example it's a sheets or queries export. Import it on the matching page instead.

## Related information

- [Who can see and run workspaces](workspace-permissions.md)
- [Manage workspaces](workspace-manage.md)
