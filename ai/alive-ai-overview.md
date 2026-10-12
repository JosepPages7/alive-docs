---
title: ALive AI overview
description: What ALive AI is, what it does for workspace administrators, what it needs, and what it is not for.
---

# ALive AI overview

ALive AI is an add-on for ALive Analysis in Business Central that helps workspace administrators design ALive Workspaces with an AI model, without sending any business data to the model.

ALive AI is a separate extension: you can use it only when it's installed in your environment, together with ALive Analysis. Without ALive AI, ALive Analysis works as usual, without the assistant. To learn more, see [Three separate extensions](../index.md#three-separate-extensions).

## What ALive AI does

ALive AI adds an assistant to the ALive Workspace Studio. You describe what you need in your own words, and an AI model proposes the design. The model is told how your tables are defined (names, fields, relations, FlowField formulas), never what they contain. It can't read, count or sample a record, and it can't run a query, a report or a script.

| Feature | Where you find it | What it does |
|---|---|---|
| [Describe a workspace](describe-a-workspace.md) | Workspace Studio, **File** menu and the **+** menu of the Workspaces panel | Designs a new workspace (datasets, views and pages) from your description. |
| [Improve or explain a workspace](improve-or-explain-a-workspace.md) | Workspace Studio, **File** menu | Proposes changes to the open workspace, or explains what it shows. |
| [Write, fix or explain a script](script-assistant.md) | The code editor of a code dataset, **Assistant** menu | Writes a dataset script, fixes one that doesn't compile or failed, or explains it. |
| [Suggest views](suggest-views.md) | The workspace viewer, **Views** menu, when an administrator runs a workspace from the Studio | Proposes pivot, chart and KPI views of one dataset from its columns. |

## What you need

- ALive Analysis, with ALive Workspaces. ALive AI depends on it.
- An account with an AI provider and its key. Your administrator chooses the provider: Anthropic, OpenAI, Azure OpenAI, Google Gemini, Mistral, or another OpenAI-compatible service. Requests are billed by that provider to your organization. To learn more, see [AI providers](providers.md).
- The Copilot capability **ALive Workspace Assistant** active on the **Copilot & agent capabilities** page.
- An ALive AI administrator who sets it up and agrees to the provider's notice. To learn more, see [Set up ALive AI](set-up-alive-ai.md).
- The right permission sets. To learn more, see [ALive AI permissions](permissions.md).

## You stay in control

- Each feature starts only when you ask, and opens a Copilot dialog where you see the result first. You keep it or discard it.
- A result you keep opens unsaved: a workspace in the Studio, a script in the editor (one undo brings the old one back), views on a new page of the viewer. Nothing is saved or shared until an administrator saves it.
- The assistant compiles scripts but never runs them. Workspace scripts run in a sandbox that can't change data.
- Each dialog shows **Sent to the AI Provider**, which opens the exact text of the last request. Administrators see every request in the request log.

## What ALive AI is not for, and its limits

- It doesn't answer questions about your figures. It never sees them, so it can't tell you a total or a trend, or notice that a result looks wrong.
- It doesn't post documents or change data, and users who only run workspaces never see it.
- A proposal can be wrong: a table that doesn't answer your question, a filter that is too broad, a period you didn't mean. Review the datasets and run the workspace before you save and share it.
- It works within 27 standard tables, plus the tables a workspace already uses when you ask to improve it.
- Results, speed and cost depend on the provider and model your administrator chose.

## Related information

- [What ALive AI sends to the AI provider](what-alive-ai-sends.md)
- [Set up ALive AI](set-up-alive-ai.md)
