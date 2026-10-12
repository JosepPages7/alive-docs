---
title: The provider notice
description: What the provider notice of ALive AI says, when it appears, and how an administrator agrees to it or withdraws the agreement.
---

# The provider notice

ALive AI sends nothing to an AI provider until an ALive AI administrator agrees to that provider's notice for its endpoint, on behalf of the organization.

## What the notice shows

The notice opens on the **Before ALive AI Sends Anything** page. It has three sections:

| Section | What it says |
|---|---|
| **Where the requests go** | The provider and the host of its endpoint, outside Business Central, with your organization's key and under your organization's agreement with the provider. A note about the provider when one matters, and a link to the provider's terms on the data it receives. |
| **What a request holds** | What a request can contain and what it never contains, whether the names of custom tables, fields and reports are sent (as **Standard Objects Only** decides), and a link to learn more about ALive AI. |
| **Your agreement** | That you agree on behalf of your organization and can withdraw at any time, and whether, by whom and when the notice was agreed. |

The provider notes:

- **Gemini**: use a key of a paid Google Cloud project. Under the Gemini API terms, Google may use what its unpaid tier receives to improve its products, and people may review it.
- **Mistral**: use a key of a paid (Scale) plan. On the free Experiment plan, Mistral may use the requests to train its models unless you opt out.
- **Azure OpenAI**: the requests go to your own Azure OpenAI resource, through Business Central's Azure OpenAI module.
- **OpenAI**, **OpenAI-compatible** and **OpenAI-compatible 2** with an endpoint other than `api.openai.com`: the requests go to the server at this endpoint, under the terms of whoever runs it. Check those terms before you agree.

ALive AI has its own notice because Business Central's standard privacy notice says that data goes to Microsoft services, which isn't true of most providers.

## When the notice appears

The notice opens by itself when the chosen provider has an endpoint and no agreement for it, and you:

- turn on **Enabled** on the **ALive AI Setup** page,
- choose another provider in **Provider** while ALive AI is enabled, or
- choose **Test Connection**.

You can open it at any time with the **Provider Notice** action, or by choosing the value in the **Notice** column of the **Providers** list.

## Agree or withdraw

1. Read the notice.
2. Choose **Agree** to let ALive AI send requests to this provider at this endpoint. The **Notice** column of the provider shows **Agreed**.
3. Choose **Disagree** to not agree, or to withdraw an earlier agreement. Nothing is sent to the provider, and the **Status** field on the setup page says why.

**Agree** is available only when the provider has an endpoint.

## Things to know

- The agreement is for one endpoint. When you change a provider's endpoint, the notice asks again, and nothing is sent until an administrator agrees for the new endpoint.
- Only an ALive AI administrator (the **ALV AI Admin** permission set) can agree or withdraw.
- An upgrade of ALive AI never agrees for you.
- When an environment is copied into a sandbox, every agreement is withdrawn in the copy.

## Related information

- [Set up ALive AI](set-up-alive-ai.md)
- [What ALive AI sends to the AI provider](what-alive-ai-sends.md)
