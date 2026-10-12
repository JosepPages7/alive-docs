---
title: Improve or explain a workspace
description: How to have ALive AI propose improvements to the workspace open in the Workspace Studio, or explain what it shows.
---

# Improve or explain a workspace

**Improve this workspace** proposes changes to the workspace open in the Workspace Studio, and **Explain this workspace** explains what it shows and how.

Both work on the workspace as it is on screen, unsaved changes included. Before the workspace is sent, its filter values, script values and report options are hidden from the AI model. To learn more, see [What ALive AI sends to the AI provider](what-alive-ai-sends.md).

## Improve a workspace

1. In the **ALive Workspace Studio**, open the workspace.
2. On the **File** menu, choose **Improve this workspace…**.
3. In the **Improve this workspace** dialog, optionally say what should be better: faster datasets, another breakdown, a figure to add. Or choose a sample: **Faster** or **Compare with last year**.
4. Choose **Generate**.
5. Review the result, and then choose **Keep it**, **Regenerate** or **Discard it**.

| Field | What it shows |
|---|---|
| **What Changes** | What the AI model changed in the workspace and why. |
| **Changed Datasets** | Each dataset the AI model changed or added, with its tables. |
| **Query Advisor Tips** | The Query Advisor tips the changed datasets still have. Review them in the Query Designer. |
| **Sent to the AI Provider** | How many requests the improvement took and their tokens. Choose the value to see the exact text of the last request, with the hidden values as placeholders. |

**Keep it** loads the improved workspace in the Studio as unsaved changes. Nothing is saved until you save it. **Discard it** leaves the workspace as it was.

### What an improvement changes

- Only the datasets the assistant changes or adds. The other datasets, with their layouts and views, stay as they are.
- A changed dataset keeps its layout, settings and views. A report or financial report dataset that keeps the same report keeps its options.
- An added dataset runs once a view of the viewer shows it.
- The assistant can also rework the views and pages. A view it keeps stays as it is, and a view it rebuilds keeps its filters, column widths and formats. Review the views before you save: a view the assistant leaves out is removed.
- The assistant doesn't remove datasets.
- Besides its 27 standard tables, the assistant can use the tables the workspace already reads. With **Standard Objects Only** turned on, a dataset that uses a custom table, field or report is sent as its name only and stays as it is.

## Explain a workspace

1. In the **ALive Workspace Studio**, open the workspace.
2. On the **File** menu, choose **Explain this workspace…**. The **Explain this workspace** dialog opens and starts the explanation at once.
3. Read the **Explanation**: what the workspace shows, each dataset, and the views and pages.
4. Optionally, type a question and choose **Regenerate** to ask again.
5. Choose **Close**.

An explanation changes nothing and isn't stored.

> [!IMPORTANT]
> Never type business data in the dialog. Your text is sent to the AI provider with the workspace.

## Related information

- [Describe a workspace](describe-a-workspace.md)
- [What ALive AI sends to the AI provider](what-alive-ai-sends.md)
- [Troubleshoot the assistant](troubleshoot-assistant.md)
