---
title: Troubleshoot ALive AI setup
description: The messages ALive AI shows when its setup stops a request or a setup change is refused, with the cause and the fix for each.
---

# Troubleshoot ALive AI setup

This article lists the messages ALive AI shows when its setup stops a request, or when a change on the setup page is refused, with their cause and fix.

To see what is missing, open the **ALive AI Setup** page and read the **Status** field. It shows the first problem that stops a request, or "Ready: requests are sent to the chosen provider."

## Nothing is sent

ALive AI checks these in this order before every request. A request they stop isn't sent or logged. In the messages, `<provider>` is the provider's name and `<n>` a number.

| Message | Cause and fix |
|---|---|
| ALive AI is not enabled. An administrator turns it on on the ALive AI Setup page. | Turn on **Enabled** on the **ALive AI Setup** page. |
| The ALive Workspace Assistant capability is not active. An administrator activates it on the Copilot and agent capabilities page. | Activate **ALive Workspace Assistant** on the **Copilot & agent capabilities** page. |
| Choose an AI provider on the ALive AI Setup page first. | Choose a provider in the **Provider** field. |
| Enter the model of the `<provider>` provider on the ALive AI Setup page. | Fill in **Model** on the provider's row in the **Providers** list. |
| Enter an https:// endpoint for the `<provider>` provider on the ALive AI Setup page. | Fill in **Endpoint** with an https:// address. |
| Enter the key of the `<provider>` provider on the ALive AI Setup page. | Choose **Set Key** on the provider's row. |
| Nothing is sent to the `<provider>` provider until an administrator agrees to its notice for its endpoint: Provider Notice on the ALive AI Setup page. | Choose **Provider Notice** and then **Agree**. The notice asks again after the endpoint changes. See [The provider notice](provider-notice.md). |
| ALive AI has sent `<n>` requests this month, the monthly cap set on the ALive AI Setup page. | Raise **Monthly Request Cap**, or wait for next month. |
| You have sent `<n>` requests to the AI provider this month, the monthly cap per user set on the ALive AI Setup page. | Ask an administrator to raise **Monthly Request Cap per User**, or wait for next month. |
| ALive AI has used `<n>` tokens this month, and the monthly token cap set on the ALive AI Setup page is `<n>`. | Raise **Monthly Token Cap**, or wait for next month. |

## After an environment copy

When an environment is copied into a sandbox, ALive AI is turned off in the copy, every provider key is deleted and every notice agreement is withdrawn. Turn on **Enabled**, set the key and agree to the notice again in the copy.

## While you set up

| Message | Cause and fix |
|---|---|
| The endpoint must be an https:// address. | ALive AI accepts only https:// endpoints. Enter the address with `https://`. |
| Choose an AI provider first. | You chose **Provider Notice** with no provider. Choose one in **Provider**. |
| Enter the endpoint of the `<provider>` provider before you agree to its notice. | An agreement is for one endpoint. Fill in **Endpoint** first. |
| `<user>` agreed for another endpoint (`<host>`). Agree again for this one. | The endpoint changed after the agreement. Read the notice and choose **Agree**. |
| Only an ALive AI administrator can change the key of an AI provider. | You need the **ALV AI Admin** permission set. |
| Only an ALive AI administrator can agree to the notice of an AI provider or withdraw the agreement. | You need the **ALV AI Admin** permission set. |

## Related information

- [Troubleshoot AI provider errors](troubleshoot-provider-errors.md)
- [Set up ALive AI](set-up-alive-ai.md)
- [Troubleshoot the assistant](troubleshoot-assistant.md)
