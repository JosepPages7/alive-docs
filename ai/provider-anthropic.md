---
title: Use Anthropic with ALive AI
description: How to set up the Anthropic provider (Claude models) in ALive AI, with its endpoint, model, key and output token limit.
---

# Use Anthropic with ALive AI

The **Anthropic** provider sends ALive AI's requests to Anthropic's Claude models through the Anthropic API.

## What you need

- An Anthropic API account and an API key.
- The **ALV AI Admin** permission set in Business Central.

## Set up the Anthropic provider

1. Open the **ALive AI Setup** page.
2. In the **Providers** list, on the **Anthropic** row, check the values:

   | Column | What to enter |
   |---|---|
   | **Endpoint** | `https://api.anthropic.com` (the default). Enter the base address only, without `/v1`. |
   | **Model** | The default is `claude-opus-5-5`. You can enter another Claude model that supports tool calling. |
   | **Max Output Tokens** | The default is 16000. Anthropic requires a limit, so 0 also means 16000. |

3. Choose **Set Key** and enter your Anthropic API key.
4. In the **Provider** field, choose **Anthropic**.
5. Turn on **Enabled**, read the provider notice, and choose **Agree**.
6. Choose **Test Connection**.

## Things to know

- The notice links to Anthropic's commercial terms (`https://www.anthropic.com/legal/commercial-terms`). Your organization's agreement with Anthropic governs what Anthropic does with the requests.
- ALive AI asks Anthropic to cache the conversation between the requests of one conversation, so each request reads what came before from the cache. The input tokens that ALive AI counts, in the request log and for the token cap, include the cached tokens.
- If an answer is cut off at the output token limit, the assistant stops with a message that asks you to raise **Max Output Tokens**.

## Related information

- [AI providers](providers.md)
- [Set up ALive AI](set-up-alive-ai.md)
- [Troubleshoot AI provider errors](troubleshoot-provider-errors.md)
