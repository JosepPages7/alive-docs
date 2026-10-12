---
title: Use an OpenAI-compatible service or your own model
description: How to connect ALive AI to another AI service or to your own model server through the OpenAI-compatible provider rows.
---

# Use an OpenAI-compatible service or your own model

The **OpenAI-compatible** and **OpenAI-compatible 2** providers connect ALive AI to any service that speaks the OpenAI Chat Completions API, including a model server you run yourself.

Two rows let you keep two such services set up next to the others, and switch between them with the **Provider** field.

## What you need

- The service's base address (https only), the name of a model that supports tool calling, and a key.
- The **ALV AI Admin** permission set in Business Central.

## Set up an OpenAI-compatible provider

1. Open the **ALive AI Setup** page.
2. In the **Providers** list, on the **OpenAI-compatible** (or **OpenAI-compatible 2**) row, fill in the values. There are no defaults.

   | Column | What to enter |
   |---|---|
   | **Endpoint** | The service's base address. ALive AI sends to the endpoint followed by `/chat/completions`. |
   | **Model** | The service's model name. |
   | **Max Output Tokens** | 0 leaves the limit to the service. |

3. Choose **Set Key** and enter the service's key. ALive AI sends it as a bearer token (for an Azure OpenAI address, in the `api-key` header).
4. In the **Provider** field, choose the row you filled in.
5. Turn on **Enabled**, read the provider notice, and choose **Agree**. The notice says that the requests go to the server at this endpoint, under the terms of whoever runs it. Check those terms before you agree.
6. Choose **Test Connection**.

## Example endpoints

| Service | Endpoint |
|---|---|
| DeepSeek | `https://api.deepseek.com/v1` |
| xAI | `https://api.x.ai/v1` |
| Groq | `https://api.groq.com/openai/v1` |
| OpenRouter (one key, many models) | `https://openrouter.ai/api/v1` |
| Your Azure OpenAI resource, directly | `https://RESOURCE.openai.azure.com/openai/v1` (model = the deployment name) |

A service with its own, different API can't be connected this way.

## Your own model

Model servers such as Ollama, LM Studio or vLLM speak the same API.

- Business Central online runs in Microsoft's cloud, so it can't reach `localhost` or a computer on your network. Run the server in your cloud subscription, or publish it through a reverse proxy or tunnel with a certificate, and protect it with a key.
- ALive AI accepts https:// endpoints only, also with Business Central on-premises.
- ALive AI requires a key. If your server checks none, enter any value.

## Choose a capable model

Whatever the service, the model must call tools: the assistant works only through them. **Test Connection** checks it and says so when a model can't. Small models often fail or design poorly, and quality, speed and cost differ widely between models.

## Related information

- [AI providers](providers.md)
- [Use OpenAI with ALive AI](provider-openai.md)
- [Troubleshoot AI provider errors](troubleshoot-provider-errors.md)
