---
title: Troubleshoot the assistant
description: Why the assistant's actions might not show in the Workspace Studio, the code editor or the viewer, and what the messages before a result mean.
---

# Troubleshoot the assistant

This article explains why the assistant's actions might not show, and what the messages you can get before the assistant gives a result mean.

## The assistant's actions don't show

**Describe a workspace…**, **Improve this workspace…** and **Explain this workspace…** in the Studio, the assistant button of the code editor, and **Suggest views…** in the viewer show only when all of these are true:

- ALive AI is installed and **Enabled** on the **ALive AI Setup** page.
- The **ALive Workspace Assistant** capability is active on the **Copilot & agent capabilities** page.
- You have the **ALV AI User** permission set (or **ALV AI Admin**).

The Studio checks when it opens: after a change to the setup, close the Studio and open it again.

**Suggest views…** also needs a workspace administrator who ran the workspace from the Studio. It doesn't show when a workspace runs from anywhere else.

## A message instead of the dialog

If the provider, model, endpoint, key, notice agreement or a monthly cap is missing, ALive AI shows a message instead of opening the dialog, for example "Enter the key of the Anthropic provider on the ALive AI Setup page." To fix it, see [Troubleshoot ALive AI setup](troubleshoot-setup.md).

## Messages in the dialog

| Message | Cause and fix |
|---|---|
| Only a workspace administrator can design workspaces. | You need the **ALV Workspace Admin** permission set of ALive Analysis. |
| Describe the analysis you need first. | Type a description, or choose a sample, before **Generate**. |
| Describe what the script should show first. | Type what the script should show before **Generate**. |
| The editor has no script yet. | Fix and explain need a script in the editor. Use **Write a script…** instead. |
| Generate a workspace first. | You chose **Keep it** before a result came. Choose **Generate** first. |
| Generate an improvement first. | You chose **Keep it** before a result came. Choose **Generate** first. |
| Generate an answer first. | You chose **Keep it** before a result came. Choose **Generate** first. |
| Generate the views first. | You chose **Keep them** before a result came. Choose **Generate** first. |
| The workspace definition is not valid. | ALive AI couldn't read the workspace on screen. Reopen it in the Studio and try again. |

## Messages in the viewer

| Message | Cause and fix |
|---|---|
| Show the dataset in a view and run it first: the assistant needs its columns. | Show the dataset in a view of the viewer, run it, and choose **Suggest views…** again. |
| The dataset has no columns to suggest views for. Run it first. | Run the workspace so the dataset has columns. |

## When a run fails

When the AI model doesn't finish, the dialog keeps its previous result and shows why. The requests the run sent stay in the request log and count toward the monthly caps. To learn more, see [Troubleshoot unfinished AI answers](troubleshoot-unfinished-answers.md).

## Related information

- [ALive AI permissions](permissions.md)
- [Troubleshoot AI provider errors](troubleshoot-provider-errors.md)
