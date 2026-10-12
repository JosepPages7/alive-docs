---
title: Use OpenAI with ALive AI
description: How to set up the OpenAI provider in ALive AI, with its endpoint, model and key.
---

# Use OpenAI with ALive AI

The **OpenAI** provider sends ALive AI's requests to OpenAI's models through the OpenAI Chat Completions API.

## What you need

- An OpenAI API account and an API key.
- The **ALV AI Admin** permission set in Business Central.

## Set up the OpenAI provider

1. Open the **ALive AI Setup** page.
2. In the **Providers** list, on the **OpenAI** row, fill in the values:

   | Column | What to enter |
   |---|---|
   | **Endpoint** | `https://api.openai.com/v1` (the default). |
   | **Model** | The name of an OpenAI model that supports tool calling. There's no default: OpenAI offers many models, so you choose one. |
   | **Max Output Tokens** | 0 leaves the limit to OpenAI. Enter a number to cap the length of each answer. |

3. Choose **Set Key** and enter your OpenAI API key.
4. In the **Provider** field, choose **OpenAI**.
5. Turn on **Enabled**, read the provider notice, and choose **Agree**.
6. Choose **Test Connection**. It fails with a clear message if the model doesn't call tools.

## Things to know

- With the endpoint `https://api.openai.com/v1`, the notice links to OpenAI's enterprise privacy page (`https://openai.com/enterprise-privacy/`). Your organization's agreement with OpenAI governs what OpenAI does with the requests.
- The **OpenAI** row works with any endpoint that speaks the same API. With another endpoint, the notice says that the requests go to the server at that endpoint, under the terms of whoever runs it. To keep OpenAI set up next to another service, use one of the **OpenAI-compatible** rows for the other service instead. To learn more, see [Use an OpenAI-compatible service or your own model](provider-openai-compatible.md).
- If an answer is cut off at the output token limit, the assistant stops with a message that asks you to raise **Max Output Tokens**.

## Related information

- [AI providers](providers.md)
- [Use Azure OpenAI with ALive AI](provider-azure-openai.md)
- [Troubleshoot AI provider errors](troubleshoot-provider-errors.md)
