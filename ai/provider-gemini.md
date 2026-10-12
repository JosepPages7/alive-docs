---
title: Use Google Gemini with ALive AI
description: How to set up the Gemini provider in ALive AI, and why to use a key of a paid Google Cloud project.
---

# Use Google Gemini with ALive AI

The **Gemini** provider sends ALive AI's requests to Google's Gemini models through the Gemini API.

## What you need

- A Gemini API key of a paid Google Cloud project.
- The **ALV AI Admin** permission set in Business Central.

> [!IMPORTANT]
> Use a key of a paid project. Under the Gemini API terms, Google may use what its unpaid tier receives to improve its products, and people may review it. The provider notice says so too.

## Set up the Gemini provider

1. Open the **ALive AI Setup** page.
2. In the **Providers** list, on the **Gemini** row, fill in the values:

   | Column | What to enter |
   |---|---|
   | **Endpoint** | `https://generativelanguage.googleapis.com/v1beta/openai` (the default). |
   | **Model** | The name of a current Gemini model that supports tool calling. There's no default, because Google renames its models often. |
   | **Max Output Tokens** | 0 leaves the limit to Google. Enter a number to cap the length of each answer. |

3. Choose **Set Key** and enter your Gemini API key.
4. In the **Provider** field, choose **Gemini**.
5. Turn on **Enabled**, read the provider notice, and choose **Agree**.
6. Choose **Test Connection**.

## Things to know

- The notice links to the Gemini API Additional Terms of Service (`https://ai.google.dev/gemini-api/terms`).
- Gemini has its own row, so its endpoint, model and key stay set up next to the other providers.

## Related information

- [AI providers](providers.md)
- [The provider notice](provider-notice.md)
- [Troubleshoot AI provider errors](troubleshoot-provider-errors.md)
