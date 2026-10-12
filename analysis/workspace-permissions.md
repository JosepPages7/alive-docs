---
title: Who can see and run workspaces
description: The difference between workspace administrators and users, which permission sets to assign, and how to share a workspace with a permission set.
---

# Who can see and run workspaces

Access to ALive Workspaces has two levels: administrators design and share workspaces, and users run only the workspaces shared with them.

## Administrators and users

| | Administrator | User |
| --- | --- | --- |
| Permission set | **ALive Workspaces Admin** (or SUPER) | **ALive Workspaces User** |
| Open the **ALive Workspace Studio** | Yes | No |
| Create, change, delete, export and import workspaces | Yes | No |
| Run workspaces | All of them | Only those shared with one of the user's permission sets |
| Share workspaces (**Permissions…**) | Yes | No |
| Save default views for all users | Yes, from a viewer opened in the Studio | No |
| Change their own views, filters and calculated columns | Yes | Yes |
| Export a view to Excel or CSV | Yes | Yes |

Both permission sets include what ALive Analysis itself needs to run all four kinds of datasets, including scripts. Access to the business data comes from the user's other permission sets.

## Share a workspace

A workspace is shared with permission sets, not with individual users. A user can run it when they have the **ALive Workspaces User** permission set and at least one of the permission sets listed for the workspace. The user can hold that permission set directly or through a security group, in the current company or in all companies.

1. In the **ALive Workspace Studio**, open the workspace menu (**…**) of the workspace, or right-click any workspace, and choose **Permissions…**.
2. On the **Workspace Permissions** page, add a line and choose the permission set in **Permission Set**. Use the lookup to pick the exact set when several have the same name.
3. Close the page. The change applies the next time users open or run the workspace.

| Field | What it shows |
| --- | --- |
| **Permission Set** | The permission set whose members may run the workspace. |
| **Name** | The name of the permission set. |
| **Scope** | **System** for a set defined by an extension, **Tenant** for a set created by users. |
| **Extension** | The extension that defines the permission set. |

To stop sharing, delete the line. A workspace without lines can be run only by administrators. New workspaces, copies made with **Save as…**, imported workspaces and workspaces created from templates start without lines.

Tip: create one permission set per audience, such as a sales team set, assign it to the users or their security group, and share the relevant workspaces with it.

## What users see

Users find their workspaces on the **ALive Analysis** page, which lists only what they may run. The **ALive Analysis** action on cards and lists also opens only workspaces they may run. These checks also apply when the workspace runs, not only in the lists.

## Data permissions still apply

Sharing a workspace doesn't give access to data. Each user sees only what their own Business Central permissions allow: queries respect read permissions and security filters, scripts run with the user's permissions, and a report or financial report runs with the user's own rights to it and its tables.

Sharing controls which workspaces a user can see and run. It doesn't hide workspace designs at the database level: the **ALive Workspaces User** permission set can read every workspace definition.

## ALive Sheets

ALive Sheets use the same permissions page with an extra **Access Level** column, and their own permission sets, **ALive Sheets Admin** and **ALive Sheets User**. A workspace administrator can't share sheets, and a sheet administrator can't share workspaces. See [Use and Edit access to a sheet](sheet-access.md).

## Related information

- [Open workspaces and sheets from ALive Analysis](alive-analysis-page.md)
- [Troubleshoot opening and saving workspaces](workspace-troubleshooting-access.md)
