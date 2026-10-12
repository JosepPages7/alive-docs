---
title: Usage caps and the request log
description: How to limit ALive AI's monthly requests and tokens, and how to read the ALive AI Requests log and set how long it keeps entries.
---

# Usage caps and the request log

ALive AI counts every request it sends, lets an administrator cap the monthly use, and logs each request with the exact text sent and received.

## Monthly caps

Set the caps on the **ALive AI Setup** page. Before each request, ALive AI checks them. When a cap is reached, nothing is sent and the user gets a message that names the cap.

| Field | What it does |
|---|---|
| **Monthly Request Cap** | How many requests ALive AI may send per calendar month, for all users together. 0 means no cap. |
| **Monthly Request Cap per User** | How many requests each user may send per calendar month. 0 means no cap. |
| **Monthly Token Cap** | How many tokens (sent and received) ALive AI may use per calendar month, for all users together. Once this month's requests reach it, nothing more is sent. The request that reaches it may go past it. 0 means no cap. |
| **Requests This Month** | How many requests ALive AI has sent this calendar month, for all users together. Choose the value to open the request log. |
| **Tokens This Month** | How many tokens ALive AI has used this calendar month, for all users together. For the Azure OpenAI provider, they are estimates. |

Things to know:

- The caps count the entries of the request log in the current calendar month. If **Log Retention (Days)** is shorter than a month, older entries of the month are deleted and the caps count fewer requests.
- A conversation with the assistant can take several requests: up to 20 to describe or improve a workspace or to write, fix or explain a script, and up to 10 to suggest views. **Test Connection** takes two.
- A request that a cap or any other check stops is not logged, and the provider isn't called.

## The request log

Every request that left Business Central is logged, whether it succeeded or not. To open the log, choose the search icon, enter **ALive AI Requests**, and then choose the related link, or choose **Requests** on the **ALive AI Setup** page. The newest requests come first.

| Field | What it shows |
|---|---|
| **Created At** | When the request was sent. |
| **User ID** | The user whose action sent the request. |
| **Feature** | What the request was for (see below). |
| **Provider** | The AI provider the request went to. |
| **Model** | The model that answered. |
| **Status** | **Success** or **Failed**: whether the provider answered successfully. |
| **HTTP Status** | The HTTP status code of the answer, empty when none came back. |
| **Input Tokens**, **Output Tokens** | The tokens of the request and of the answer, as the provider counted them. |
| **Duration** | How long the request took. |
| **Tools Offered**, **Tools Called** | The tools the request offered the model (on the card only), and the ones the model called. |
| **Error Message** | Why the request failed. |

Open an entry to see the **ALive AI Request** card, with the exact **Text Sent** and **Text Received**. The key is never part of the text: it only travels in an HTTP header.

The **Feature** values are:

| Feature | Sent by |
|---|---|
| `connectionTest` | **Test Connection** |
| `describeWorkspace` | **Describe a workspace** |
| `improveWorkspace`, `explainWorkspace` | **Improve this workspace**, **Explain this workspace** |
| `writeScript`, `fixScript`, `explainScript` | **Write a script**, **Fix this script**, **Explain this script** |
| `suggestViews` | **Suggest views** |

## Log retention

**Log Retention (Days)** sets how many days the log keeps an entry. The default is 90. 0 keeps every entry. Older entries are deleted when the next request is logged.

Only ALive AI administrators can read the log. Users see the last request of their own conversation with **Sent to the AI Provider** in each assistant dialog.

## Related information

- [Set up ALive AI](set-up-alive-ai.md)
- [ALive AI permissions](permissions.md)
