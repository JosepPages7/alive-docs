---
title: ALive AI permissions
description: Which permission sets ALive AI administrators and workspace designers need, and what each one allows.
---

# ALive AI permissions

ALive AI has two permission sets: one for the administrator who sets it up, and one for the workspace administrators who use the assistant.

## Permission sets

| Permission set | Name | What it allows |
|---|---|---|
| **ALV AI Admin** | ALive AI Admin | Everything in **ALV AI User**, plus: change the **ALive AI Setup** page and the **Providers** list, set and delete provider keys, agree to a provider notice or withdraw the agreement, run **Test Connection**, read the **ALive AI Requests** log, and open **AI Instructions**. |
| **ALV AI User** | ALive AI User | Use the assistant through the setup an administrator made: describe, improve and explain workspaces, write, fix and explain scripts, and suggest views. The setup is read-only, and the request log is written by ALive AI only. |

Having write permission on the ALive AI setup is what makes a user an ALive AI administrator. **ALV AI Admin** gives it, and so does SUPER.

## The assistant is for workspace administrators

Every feature of the assistant designs workspaces, so its users also need the workspace administrator role of ALive Analysis:

- **Describe a workspace**, **Improve this workspace** and **Explain this workspace** are in the Workspace Studio.
- **Write a script**, **Fix this script** and **Explain this script** are in the code editor, which opens from the Studio.
- **Suggest views** is offered in the viewer only when a workspace administrator runs a workspace from the Studio.

A user who isn't a workspace administrator gets the message "Only a workspace administrator can design workspaces."

## Who needs what

| Role | Permission sets |
|---|---|
| Sets up ALive AI | **ALV AI Admin** |
| Designs workspaces with the assistant | **ALV AI User** and **ALV Workspace Admin** (ALive Workspaces Admin) |
| Sets up ALive AI and designs workspaces | **ALV AI Admin** and **ALV Workspace Admin** |
| Only runs workspaces | Nothing from ALive AI. These users never see the assistant. |

## The Copilot capability

Turning the **ALive Workspace Assistant** capability on or off on the **Copilot & agent capabilities** page is a Business Central administration task, separate from ALive AI's permission sets. When the capability is off, ALive AI sends nothing, whatever the user's permissions.

## Messages you might see

| Message | What to do |
|---|---|
| Only an ALive AI administrator can change the key of an AI provider. | Ask a user with **ALV AI Admin** to set or delete the key. |
| Only an ALive AI administrator can agree to the notice of an AI provider or withdraw the agreement. | Ask a user with **ALV AI Admin** to open the notice and agree. |
| Only a workspace administrator can design workspaces. | Get the **ALV Workspace Admin** permission set from ALive Analysis. |

## Related information

- [Set up ALive AI](set-up-alive-ai.md)
- [Usage caps and the request log](caps-and-request-log.md)
