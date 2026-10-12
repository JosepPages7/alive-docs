---
title: Use Azure OpenAI with ALive AI
description: How to set up the Azure OpenAI provider in ALive AI with your own Azure OpenAI resource, and what differs from the other providers.
---

# Use Azure OpenAI with ALive AI

The **Azure OpenAI** provider sends ALive AI's requests to your own Azure OpenAI resource, through Business Central's Azure OpenAI module.

## What you need

- An Azure OpenAI resource, a deployment of a model that supports tool calling, and the resource's key.
- The **ALV AI Admin** permission set in Business Central.

## Set up the Azure OpenAI provider

1. Open the **ALive AI Setup** page.
2. In the **Providers** list, on the **Azure OpenAI** row, fill in the values. There are no defaults.

   | Column | What to enter |
   |---|---|
   | **Endpoint** | The address of your resource, `https://RESOURCE.openai.azure.com`. Don't enter its `/openai/v1` address here. |
   | **Model** | The name of your deployment, as you named it in Azure. |
   | **Max Output Tokens** | Keep 0 for a reasoning model deployment: Business Central's module sends the limit in a form that reasoning models refuse. |

3. Choose **Set Key** and enter the key of your Azure OpenAI resource.
4. In the **Provider** field, choose **Azure OpenAI**.
5. Turn on **Enabled**, read the provider notice, and choose **Agree**.
6. Choose **Test Connection**.

## What differs from the other providers

- Business Central itself sends the request, through its Azure OpenAI module, under the **ALive Workspace Assistant** capability. If the module refuses the request, its message is shown as the error.
- Azure OpenAI doesn't return token counts to the module, so the tokens in the request log, **Tokens This Month** and the token cap are estimates.
- ALive AI can't tell when an answer was cut off at the output token limit. If answers look incomplete, set **Max Output Tokens** to 0 or raise it.
- The notice links to Microsoft's page on data, privacy and security for Azure OpenAI (`https://learn.microsoft.com/legal/cognitive-services/openai/data-privacy`).

## Use the resource's v1 address instead

You can also reach your resource through its OpenAI-compatible address, `https://RESOURCE.openai.azure.com/openai/v1`, with an **OpenAI-compatible** row. Then the request doesn't go through Business Central's module: enter the v1 address as the endpoint, the deployment name as the model, and the resource's key. To learn more, see [Use an OpenAI-compatible service or your own model](provider-openai-compatible.md).

## Related information

- [AI providers](providers.md)
- [Troubleshoot AI provider errors](troubleshoot-provider-errors.md)
