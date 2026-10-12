---
title: Troubleshoot AI provider errors
description: The messages ALive AI shows when the AI provider can't be reached or refuses a request, with the cause and the fix for each.
---

# Troubleshoot AI provider errors

This article lists the messages ALive AI shows when a request left Business Central but the AI provider didn't answer as expected, with their cause and fix.

Every request that left is in the request log, whether it succeeded or not. Open the **ALive AI Requests** page and the entry to see the **HTTP Status**, the **Error Message** and the **Text Received**. **Test Connection** on the **ALive AI Setup** page is the quickest way to check a fix.

## Messages

| Message | Cause and fix |
|---|---|
| The AI provider could not be reached: `<reason>` In a sandbox, allow HttpClient requests for ALive AI on the Extension Management page (Configure). | No answer came back. In a sandbox, on the **Extension Management** page, select **ALive AI**, choose **Configure**, and turn on **Allow HttpClient Requests**. Otherwise, check that the endpoint is right and reachable from Business Central online, which can't reach `localhost` or your own network. A request that takes more than three minutes also ends this way. |
| `<provider's message>` (HTTP `<code>`) | The provider refused the request, and its own message says why. See the status codes below. |
| The AI provider returned an answer ALive AI cannot read (HTTP `<code>`). | The endpoint isn't the API's base address, or the service doesn't speak the provider's API. Check **Endpoint** against the provider's page. |
| The model answered without calling the tool, so it cannot design workspaces (the assistant works through tools). Choose a model that supports tool calling. | **Test Connection** reached the model, but it can't call tools. Enter another model. |
| Business Central could not reach the Azure OpenAI resource. Check its endpoint and deployment on the ALive AI Setup page. | For **Azure OpenAI**, the endpoint must be `https://RESOURCE.openai.azure.com` and the model the deployment name. See [Use Azure OpenAI with ALive AI](provider-azure-openai.md). |
| The Azure OpenAI provider can only continue the conversation it started, and this request carries the tool calls of another one. Start again. | Choose **Generate** again to start a new conversation. |

## HTTP status codes

When the provider refuses a request, the message ends with the HTTP status code. The provider's own message is the best guide. Usually:

| Code | Usual cause | What to do |
|---|---|---|
| 401, 403 | The key is wrong, expired, or has no access to the model. | Choose **Set Key** and enter the key again, or check the key's access at the provider. |
| 404 | The endpoint or the model name is wrong. | Check **Endpoint** and **Model** against the provider's page. For Anthropic, enter the endpoint without `/v1`. |
| 429 | A rate limit, or the account's quota or credit is used up. | Wait and try again, or check the account at the provider. |
| 400 | The provider didn't accept the request, for example a model or an output token limit it doesn't support. | Check **Model**, and try **Max Output Tokens** 0. |
| 500 and above | A problem at the provider. | Try again later. |

## Related information

- [Troubleshoot ALive AI setup](troubleshoot-setup.md)
- [AI providers](providers.md)
