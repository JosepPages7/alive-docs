---
title: AI providers
description: The AI providers ALive AI can use, what each needs, and what the columns and actions of the Providers list do.
---

# AI providers

ALive AI sends its requests to the one AI provider your administrator chooses in the **Provider** field of the **ALive AI Setup** page, with your organization's own key.

## Supported providers

| Provider | Default endpoint | Default model | Provider page |
|---|---|---|---|
| **Anthropic** | `https://api.anthropic.com` | `claude-opus-5-5` | [Use Anthropic](provider-anthropic.md) |
| **OpenAI** | `https://api.openai.com/v1` | None, enter one | [Use OpenAI](provider-openai.md) |
| **Azure OpenAI** | None, your resource's address | None, your deployment name | [Use Azure OpenAI](provider-azure-openai.md) |
| **Gemini** | `https://generativelanguage.googleapis.com/v1beta/openai` | None, enter one | [Use Google Gemini](provider-gemini.md) |
| **Mistral** | `https://api.mistral.ai/v1` | `mistral-large-latest` | [Use Mistral](provider-mistral.md) |
| **OpenAI-compatible**, **OpenAI-compatible 2** | None | None | [Use an OpenAI-compatible service](provider-openai-compatible.md) |

Each provider has its own row with its own endpoint, model and key, so you can switch between providers without retyping them.

## The model must call tools

The assistant works only through tools: the model asks for table definitions, compiles scripts and submits its design by calling tools. Choose a model that supports tool calling. **Test Connection** checks it and tells you when a model can't. Small models often fail or design poorly. Quality, speed and cost differ widely between models.

## The Providers list

The **Providers** list on the **ALive AI Setup** page has one row per provider.

| Column | What it does |
|---|---|
| **Provider** | The AI provider. |
| **Endpoint** | The https:// base address of the provider, for example `https://api.anthropic.com` or `https://api.openai.com/v1`. Only https:// addresses are accepted. A trailing slash is removed. |
| **Model** | The model or deployment name the requests ask for. The model must support tool calling. |
| **Max Output Tokens** | The longest answer the provider may return, in tokens. 0 leaves it to the provider (for Anthropic, 0 means 16000). |
| **Key** | Shows **Set** or **Not set**. The key is kept in isolated storage and never shown again. |
| **Notice** | Shows **Agreed** or **Not agreed**: whether an administrator agreed to the provider's notice for its endpoint. Choose the value to open the notice. |

| Action | What it does |
|---|---|
| **Set Key** | Opens the **Provider Key** dialog to enter the key of the selected provider. Entering an empty key deletes it. |
| **Delete Key** | Deletes the key of the selected provider. Nothing is sent to it until a new key is set. |

Only an ALive AI administrator can set or delete a key.

## Cost

Requests are billed by the provider to the account of the key. A single conversation with the assistant can take several requests (up to 20). To limit use, set the monthly caps. To learn more, see [Usage caps and the request log](caps-and-request-log.md).

## Related information

- [The provider notice](provider-notice.md)
- [Set up ALive AI](set-up-alive-ai.md)
