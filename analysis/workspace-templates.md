---
title: Starter templates
description: The ready-made workspaces that ship with ALive Analysis, grouped by area, what each one shows, which ones are fast and which read entries, and how to create a workspace from a template.
---

# Starter templates

ALive Analysis includes 29 ready-made workspaces, called templates, that you can create in one step and then adapt.

## Create a workspace from a template

1. Open the **ALive Workspace Studio**.
2. In the **Workspaces** panel, choose **+**, and then choose **From a template…**. You can also choose **File** > **New from a template…**. The **New from a template** dialog opens.
3. To narrow the list, choose a group on the left, such as **Finance** or **Sales**, or type in **Search templates**. The search looks in the title and the description of each template. Choose **All templates** to see every template again.
4. Choose the card of a template.

The Studio creates the workspace, named after the template (with a number, such as **Sales analysis (2)**, when the name is taken), and opens it. Like any new workspace, only administrators can run it until you share it. See [Who can see and run workspaces](workspace-permissions.md).

To close the dialog without creating a workspace, choose **X** or press Esc.

The templates' titles and texts are also available in Spanish. The worksheet labels of the **Financial ratios** and **Sales scorecard** Sheet views are in English for every user.

No template contains a financial report, because financial reports are your company's own. To start from them, choose **From a financial report…** instead. See [Financial report datasets](workspace-financial-report-dataset.md).

## Fast templates and templates that read entries

Each card carries a mark that tells you how the template behaves in a large company:

| Mark | What it means |
| --- | --- |
| **Fast** | The template reads totals Business Central already keeps, such as a customer's sales or an account's net change, or a small set such as the open order lines. Its speed does not depend on how many entries the company has. |
| **Reads entries** | The template reads the entries of the period you run, or a log. It is fine for a month or a year and slower in a large company. |

Point to a mark to read its explanation.

For a template that reads entries:

- Run it for a short period. See [Ask for filters at run](workspace-run-options.md).
- Or schedule it, so it runs in the background and opens at once with that data. You schedule a workspace on the **ALive Workspaces** page, and a scheduled run is personal. See [Schedule a workspace to run in the background](workspace-schedule.md).

Seven templates read entries: **Receivables & payables aging**, **Cash flow forecast**, **G/L activity detail**, **Item sales by customer**, **Payment behaviour**, **Returns** and **System health**. The other 22 are fast.

## The templates

Most templates ask for the period when they run and start from a default period, shown below. See [Ask for filters at run](workspace-run-options.md).

### Finance

| Template | What it shows | Mark | Default period |
| --- | --- | --- | --- |
| **Actual vs budget** | Each income statement account's result month by month against its G/L budget: the variance and the share of the budget reached. Choose the budget in **Budget Filter** when you run it; left blank, every budget is added up. | Fast | This fiscal year |
| **Cash flow forecast** | The cash expected in and out by due date: open customer and vendor entries and the outstanding amounts of open sales and purchase orders, next to the balance of the bank accounts. An overdue item stays in the month it fell due. | Reads entries | None |
| **Cash position** | The bank accounts month by month: each account's balance at the end of every month, next to the month's movement. | Fast | Last 12 months |
| **Financial ratios** | Margins, returns and the balance sheet structure for the period against the same period a year earlier, from each G/L account's **Account Category**: tiles, trends by month, both statements and a [Sheet view](workspace-sheet-view.md) with every formula. The current and quick ratios aren't included, because they depend on how your chart of accounts is set up. | Fast | This fiscal year |
| **Fixed assets** | Each fixed asset in its depreciation books: acquisition cost, accumulated depreciation and book value by class and by asset, and the acquisitions and depreciation month by month. An asset shows once for each depreciation book, so pick the book in the slicer. | Fast | Last 12 months |
| **G/L activity detail** | The general ledger entries of the period, one by one: debit, credit and amount by account, document and source code. A second page shows each account's opening balance, movement and closing balance. A period that ends on a year's last day leaves out the year-end closing entries. | Reads entries | This month |
| **G/L by dimension** | The income statement by the values of the company's two global dimensions, such as department and project, month by month. | Fast | This fiscal year |
| **G/L by period** | The general ledger by account and month: the income statement with its monthly result as a bridge, and the balance sheet as each account's balance at the end of every month. | Fast | This fiscal year |
| **Payment behaviour** | How many days customers take to pay, and how many days you take to pay vendors: the closed invoices of the period, with the days from posting to closing and the days late against the due date. | Reads entries | Last 12 months |
| **Receivables & payables aging** | Open customer and vendor entries in aging buckets at the work date (not due, 1-30, 31-60, 61-90 and over 90 days), with the total and the overdue amount, and the net position by bucket. | Reads entries | None |
| **Return orders not invoiced** | The sales return order lines received and not yet credited, and the purchase return order lines shipped and not yet credited: the credit memos you owe your customers and the ones you expect from your vendors. The amount includes VAT. | Fast | None |
| **Shipped & received not invoiced** | The sales order lines shipped and not invoiced, and the purchase order lines received and not invoiced, with their amount excluding and including VAT: what to accrue at month end. Return orders aren't included. | Fast | None |
| **Working capital** | Receivables, inventory and payables today against the sales, purchases and cost of goods sold of the period, in a [Sheet view](workspace-sheet-view.md): net working capital, DSO, DIO, DPO and the cash conversion cycle. | Fast | Last 12 months |

### Sales

| Template | What it shows | Mark | Default period |
| --- | --- | --- | --- |
| **Customers by quintile** | The customers with sales in the period, ranked by their sales and split into five groups with the same number of customers: how much of the sales each fifth brings, the average sales per customer and the margin. | Fast | Last 12 months |
| **Item sales & margin** | Sales, cost and margin by item and month, with the item category: sales against margin % for each item, the Pareto of sales, best sellers and the monthly pattern. | Fast | This fiscal year |
| **Item sales by category** | A code dataset (script) with sales, cost and margin by item and month and the whole item category tree, at any depth: a drill from the top category down to the item. | Fast | This fiscal year |
| **Item sales by customer** | What each customer bought of each item: quantity, sales, cost and margin by customer, item and month. | Reads entries | This fiscal year |
| **Returns** | What was returned and credited in the period: the items on posted sales and purchase credit memos, by customer or vendor, item, return reason and month. | Reads entries | Last 12 months |
| **Sales analysis** | Sales and profit by customer and month: the last 12 months against the 12 before them, the growing and declining customers, top customers, countries and the monthly trend. | Fast | Last 24 months |
| **Sales pipeline** | The opportunities in progress in Relationship Management: the pipeline by sales cycle stage as a funnel, and the weighted value by salesperson and by expected closing month. | Fast | None |
| **Sales scorecard** | The last fiscal year of the run month by month against the same month a year earlier, in a [Sheet view](workspace-sheet-view.md): sales, the change %, profit, margin % and sales year to date. | Fast | Last 2 fiscal years |

### Purchasing

| Template | What it shows | Mark | Default period |
| --- | --- | --- | --- |
| **Purchase analysis** | Purchases by vendor and month, with the discounts received: top vendors, countries, the monthly trend and today's open orders, plus purchases by item category and each item's average unit cost. | Fast | This fiscal year |
| **Rising and falling vendors** | Each vendor's purchases in the period beside the same period a year earlier: the change, the vendors rising and falling most, and the new and the lost ones. A change of more than 10 % counts as rising or falling. | Fast | Last 12 months |

### Inventory

| Template | What it shows | Mark | Default period |
| --- | --- | --- | --- |
| **Inventory by location** | Each item's stock in each location: the quantity on hand and its value at unit cost by location and by category, the items worth most, and the net change month by month. | Fast | Last 12 months |
| **Supply and demand** | Each inventory item's demand against its supply month by month, and what is available after them, with the open sales and purchase order lines behind the figures on a second page. | Fast | This fiscal year |

### Production & projects

| Template | What it shows | Mark | Default period |
| --- | --- | --- | --- |
| **Production orders** | The open production orders (planned, firm planned and released): remaining quantity, expected cost and progress by status and due date, the components still to consume, and the load of the work centers against their capacity. | Fast | This year |
| **Projects** | Each project and its tasks: budget cost against actual cost, billable against invoiced and what is left to invoice, and the actual cost and invoicing month by month. | Fast | Last 12 months |

### Management

| Template | What it shows | Mark | Default period |
| --- | --- | --- | --- |
| **CEO dashboard** | Five pages: an overview with KPI tiles, sales, profit and loss against the G/L budget, cash and working capital, and the order backlog. | Fast | Fiscal year to date |

### System

| Template | What it shows | Mark | Default period |
| --- | --- | --- | --- |
| **System health** | The job queue entries and their state, the job runs of the last 30 days with their errors and durations, and the changes of the last 30 days by table and user. The changes page is empty while the Change Log is off. | Reads entries | None |

## How to read each workspace

Most templates include a **How to read** panel that explains their figures, for example what counts as overdue or how a percentage is calculated on the totals. The **CEO dashboard** has none, and **Sales scorecard** and **Working capital** explain their figures in the worksheet itself.

## Open a template's workspace from a record

Some templates open from a card or a list, already filtered to that record: for example **Sales analysis** from a customer, **Purchase analysis** from a vendor, **Actual vs budget**, **G/L by period** and **G/L activity detail** from a G/L account, **Cash position** from a bank account, **Projects** from a project and **Fixed assets** from a fixed asset. See [Open a workspace from a card or list](workspace-open-in-context.md).

## Adapt a template

A workspace created from a template is an ordinary workspace: change its datasets, layout columns, views and settings as you like. Changes don't affect the template, and you can create a fresh copy at any time.

## Related information

- [Create a workspace in the Workspace Studio](workspace-studio.md)
- [ALive Workspaces overview](workspaces-overview.md)
- [Schedule a workspace to run in the background](workspace-schedule.md)
- [The Sheet view](workspace-sheet-view.md)
