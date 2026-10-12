---
title: Troubleshoot unfinished AI answers
description: What to do when the AI model of ALive AI answers without a result, is cut off, runs out of requests, or can't correct its design.
---

# Troubleshoot unfinished AI answers

This article explains the messages ALive AI shows when the AI model doesn't finish a workspace, a script, views or an explanation, and what to do.

When a run fails, the dialog keeps its previous result. The requests the run sent stay in the request log and count toward the monthly caps. In the messages, `<n>` is a number of requests or attempts.

## The model answered without a result

| Message | Cause and fix |
|---|---|
| The AI model answered without a workspace. Try again, or describe the analysis in other words. | The model ended without a design. Often the analysis needs tables the assistant can't use, or the description is unclear. Name the tables and fields, or design that part by hand. |
| The AI model answered without a script. Try again, or say it in other words. | Describe the script more precisely and choose **Regenerate**. |
| The AI model answered without views. Try again, or say it in other words. | Choose **Regenerate**, or say what the views should show. |
| The AI model gave no explanation. Try again. | Choose **Regenerate**. |

## The answer was cut off

| Message | Cause and fix |
|---|---|
| The AI model's answer was cut off at its output token limit. Raise Max Output Tokens of the provider on the ALive AI Setup page, or ask for a smaller workspace. | Raise **Max Output Tokens** of the provider in the **Providers** list, or ask for less. The script and views dialogs show the same message without "or ask for a smaller workspace". |

With the Azure OpenAI provider, ALive AI can't tell that an answer was cut off. If its results look incomplete, raise **Max Output Tokens** or set it to 0.

## The model ran out of requests

| Message | Cause and fix |
|---|---|
| The AI model did not finish the workspace in `<n>` requests. Try again, or describe a smaller analysis. | The conversation reached its limit of 20 requests. Ask for fewer datasets, or split the analysis. |
| The AI model did not finish the script in `<n>` requests. Try again. | The limit is 20 requests. Choose **Regenerate**, or describe a simpler script. |
| The AI model did not finish the views in `<n>` requests. Try again. | The limit is 10 requests. Choose **Regenerate**. |

## The model couldn't correct its design

Every proposal is checked before you see it. When a check fails three times, the assistant stops and quotes the last check.

| Message | Cause and fix |
|---|---|
| The AI model could not correct its workspace after `<n>` attempts. The last check said: … | Read the last check, then describe the analysis differently or design that part by hand. |
| The AI model could not make the script compile after `<n>` attempts. The last compile said: … | Read the compile error. Describe the script differently, or fix it by hand. |
| The AI model could not suggest valid views after `<n>` attempts. The last check said: … | Choose **Regenerate**, or say what the views should show. |

## If these messages come often

The model may be too small for the task. Small models often fail or design poorly. Try a stronger model in the **Providers** list of the **ALive AI Setup** page.

## Related information

- [Troubleshoot the assistant](troubleshoot-assistant.md)
- [AI providers](providers.md)
