---
title: What ALive AI sends to the AI provider
description: What a request from ALive AI contains, what it never contains, how values in existing workspaces and scripts are hidden, and where data is stored.
---

# What ALive AI sends to the AI provider

ALive AI sends the AI provider definitions of your data and the text you type, never record values.

## What a request can contain

- Definitions of tables and fields: names, captions, types, keys, relations and FlowField formulas.
- Report names and the columns their definition declares (the report doesn't run), and the names and descriptions of your financial reports.
- The workspaces and scripts the assistant designs, or that you ask it to improve, fix or explain.
- For **Suggest views**, the column list of one dataset.
- What compiling a script reports.
- ALive AI's own instructions. Administrators can read them with **AI Instructions** on the **ALive AI Setup** page.
- The text you type, and the model's earlier answers in the same conversation.

## What a request never contains

- A record value: no field value, and no row that a query, report or script returns.
- Your user name or the company name. ALive AI doesn't add them.
- The provider key. It travels only in an HTTP header and is never part of the text sent.

Each dialog tells you not to type business data. If you type a customer name or an amount, that text is sent.

## Values in existing workspaces and scripts are hidden

A workspace or script can hold values someone typed in, such as a customer number in a filter. When you ask to improve or explain a workspace, or to fix or explain a script, ALive AI replaces each such value with a placeholder (`«v1»`, `«v2»`, …) before it sends the request, and puts the values back in the answer inside Business Central.

- Hidden: filter values, the texts and numbers in a script, the values in a calculated column's formula, and dimension codes.
- Not hidden: date formulas such as `<-CY>..<CY>`, date words such as `WORKDATE`, option and Boolean values, whole numbers from 0 to 100 in scripts and formulas, and the names you gave things (workspace title, dataset, view and page names, column titles).
- Never sent: report and financial report options (only whether they are set), page filters, drill-downs, view widths and formats.

For a script, you can choose **Send as written** in the **Values** option of the dialog. The default is **Hide values**. To learn more, see [Write, fix or explain a script](script-assistant.md).

## Run errors go only when you agree

When the last run of a script failed, its error message can quote a value. When you ask the assistant to fix that script, ALive AI shows the error and asks whether to send it. The default answer is no.

## Names of custom objects

The names of custom tables, fields and reports (IDs 50000 to 99999 and from 1,000,000) are sent by default. An administrator can turn on **Standard Objects Only** on the **ALive AI Setup** page. The assistant then leaves custom tables, fields and reports out. When you improve or explain a workspace, a dataset that uses a custom object is sent as its name only, and the assistant doesn't change it.

## Where data goes and is stored

- Requests go over HTTPS only to the provider your administrator chose, under your organization's agreement with it. They may be processed outside your environment's geography.
- The setup and the request log stay in your Business Central environment, and provider keys in its isolated storage. ALive AI sends no data and no telemetry to its publisher.
- To see exactly what was sent, choose the value of **Sent to the AI Provider** in an assistant dialog. Administrators see every request on the **ALive AI Requests** page. To learn more, see [Usage caps and the request log](caps-and-request-log.md).

## Related information

- [The provider notice](provider-notice.md)
- [ALive AI overview](alive-ai-overview.md)
