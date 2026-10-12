---
title: Set up ALive AI
description: Step-by-step setup of ALive AI on the ALive AI Setup page, from the Copilot capability to a successful connection test.
---

# Set up ALive AI

An ALive AI administrator sets up ALive AI once per environment on the **ALive AI Setup** page.

## Before you start

- ALive Analysis and ALive AI are installed.
- You have the **ALV AI Admin** permission set (or SUPER). To learn more, see [ALive AI permissions](permissions.md).
- You have an account and a key with an AI provider. To choose one, see [AI providers](providers.md).

## Set up ALive AI

1. Choose the search icon, enter **ALive AI Setup**, and then choose the related link.
2. Check that the **Copilot Capability** field shows **Active**. If it shows **Not active**, choose the field (or the **Copilot and Agent Capabilities** action), and activate **ALive Workspace Assistant** on the **Copilot & agent capabilities** page.
3. In the **Providers** list, find the row of your provider and fill in **Endpoint** and **Model**. Some providers come with a default endpoint or model. The provider pages say what to enter.
4. On the same row, choose **Set Key**, enter the key in the **Provider Key** dialog, and then choose **OK**. The **Key** column changes to **Set**.
5. In the **General** section, choose the provider in the **Provider** field.
6. Turn on **Enabled**. The **Before ALive AI Sends Anything** page opens with the provider's notice. Read it and choose **Agree**. To learn more, see [The provider notice](provider-notice.md).
7. Optionally, set the caps, **Standard Objects Only** and **Log Retention (Days)**. To learn more, see [Usage caps and the request log](caps-and-request-log.md).
8. Choose **Test Connection**. ALive AI sends two short, fixed requests. When they succeed, a message names the model, the number of requests and the tokens.
9. Check that the **Status** field shows: "Ready: requests are sent to the chosen provider."
10. Give the users who design workspaces the **ALV AI User** permission set. They also need **ALV Workspace Admin** from ALive Analysis.

Users who have the Workspace Studio open must close and reopen it to see the assistant's actions.

## Fields in the General section

| Field | What it does |
|---|---|
| **Enabled** | Turns ALive AI on or off for everyone. When it's off, the assistant's actions don't show and nothing is sent. |
| **Provider** | The AI provider every request goes to. Its endpoint, model and key are set in the **Providers** list. |
| **Copilot Capability** | Shows whether **ALive Workspace Assistant** is active. When it isn't, nothing is sent. Choose the value to open the **Copilot & agent capabilities** page. |
| **Status** | Shows whether a request would be sent now, or what is missing. |

The caps, **Standard Objects Only**, **Log Retention (Days)**, **Requests This Month** and **Tokens This Month** are described in [Usage caps and the request log](caps-and-request-log.md) and [What ALive AI sends to the AI provider](what-alive-ai-sends.md).

## Actions

| Action | What it does |
|---|---|
| **Test Connection** | Sends two short, fixed requests to check the endpoint, the model, the key and that the model calls tools. Both show in the request log. |
| **Provider Notice** | Opens the chosen provider's notice, to agree or withdraw. |
| **Requests** | Opens the **ALive AI Requests** page. |
| **AI Instructions** | Shows the instructions ALive AI gives the AI model, the tools it offers and the tables it may use. |
| **Copilot and Agent Capabilities** | Opens the **Copilot & agent capabilities** page. |

## Sandbox environments

- A sandbox blocks outbound calls from extensions until they are allowed. On the **Extension Management** page, select **ALive AI**, choose **Configure**, and turn on **Allow HttpClient Requests**.
- In an environment copied into a sandbox, ALive AI is off, the keys are deleted and the notice agreements withdrawn. Endpoints, models, caps and the request log stay.

The setup applies to all companies in the environment.

## Related information

- [AI providers](providers.md)
- [Troubleshoot ALive AI setup](troubleshoot-setup.md)
