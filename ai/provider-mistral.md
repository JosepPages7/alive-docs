---
title: Use Mistral with ALive AI
description: How to set up the Mistral provider in ALive AI, and why to use a key of a paid plan.
---

# Use Mistral with ALive AI

The **Mistral** provider sends ALive AI's requests to Mistral AI's models through the Mistral API.

## What you need

- A Mistral API key of a paid (Scale) plan.
- The **ALV AI Admin** permission set in Business Central.

> [!IMPORTANT]
> Use a key of a paid (Scale) plan. On the free Experiment plan, Mistral may use the requests to train its models unless you opt out. The provider notice says so too.

## Set up the Mistral provider

1. Open the **ALive AI Setup** page.
2. In the **Providers** list, on the **Mistral** row, check the values:

   | Column | What to enter |
   |---|---|
   | **Endpoint** | `https://api.mistral.ai/v1` (the default). |
   | **Model** | The default is `mistral-large-latest`, which Mistral keeps pointing at its current large model. You can enter another Mistral model that supports tool calling. |
   | **Max Output Tokens** | 0 leaves the limit to Mistral. Enter a number to cap the length of each answer. |

3. Choose **Set Key** and enter your Mistral API key.
4. In the **Provider** field, choose **Mistral**.
5. Turn on **Enabled**, read the provider notice, and choose **Agree**.
6. Choose **Test Connection**.

## Things to know

- The notice links to Mistral AI's terms of service (`https://mistral.ai/terms`).
- Mistral has its own row, so its endpoint, model and key stay set up next to the other providers.

## Related information

- [AI providers](providers.md)
- [The provider notice](provider-notice.md)
- [Troubleshoot AI provider errors](troubleshoot-provider-errors.md)
