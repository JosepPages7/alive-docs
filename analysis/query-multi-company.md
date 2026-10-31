---
title: Run a query in several companies
description: How to use the Multi-company option of the ALive Query Designer to run one query in several companies, choose the companies, and read the Company column.
---

# Run a query in several companies

With **Multi-company** on, a query runs in every company you choose, and each result row starts with the company it comes from.

## Turn on Multi-company

Choose **Multi-company** in the toolbar, or open the menu next to **Run** and select **Multi-company**. A **Company** column appears at the start of the field grid.

To turn the option off, choose **Multi-company** again, or choose the **×** on the **Company** column.

## Choose the companies

The **Company** column has two choices:

| Setting | What it does |
|---|---|
| **Ask at run** | The default. When the query runs, the filter dialog starts with a **Company** section. Leave it blank to run in every company. |
| **Filter** | A filter on the company name, such as `CRONUS*\|Contoso`. Leave it blank to run in every company that you can read. |

The **Sort**, **Show** and **Total** cells of the Company column can't be changed: companies always come in name order, the column is always shown, and it's always a Group By.

## Read the result

- Every row starts with a **Company** column.
- The status shows the number of companies, for example **3 companies**.
- A company where you can't read one of the query's tables is skipped, and the status says so, for example **(1 skipped: no permission)**.
- Tables whose data is shared by all companies repeat their rows once per company.
- With **Totals** on, the company is always part of the grouping, so totals are per company. The query can't add up several companies into one total.
- The row limit counts the rows of all companies together.
- Fiscal date formulas, such as `<-FY>..<FY>`, use the accounting periods of the company you work in for every company.

## Related pages

- [Run a query and work with the results](query-run-and-results.md)
- [Group and total rows in a query](query-totals.md)
