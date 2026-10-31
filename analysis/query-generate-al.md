---
title: Generate an AL query object from an ALive query
description: How to turn an ALive query into the AL source of a Business Central query object or API query, what the settings mean, and which parts of a query can't be converted.
---

# Generate an AL query object from an ALive query

A developer can turn an ALive query into the AL source code of a Business Central query object, either a normal query or an API query for web services.

## Generate the AL file

1. Open the query on the **ALive Queries** page.
2. In the **…** menu of the open query, under **AL source code**, choose **Generate AL Query…** or **Generate AL API Query (web service)…**.
3. Fill in the dialog, and choose **OK**.
4. A file named after the query, ending in `.Query.al`, downloads.

The file uses the current design, even if it isn't saved yet. Generating reads only the design, never data. It's a one-way conversion: the generated file can't be imported back into ALive.

The **Generate** actions are only on the **ALive Queries** page. The Query Designer in a workspace doesn't offer them.

## Settings

| Setting | What it does |
|---|---|
| **Query ID** | The object ID of the generated query. The default is 50100. |
| **Query name** | The object name, 1 to 30 characters. The default is the ALive query name. |
| **API publisher** | API query only. The first URL segment after /api/, such as `alive`. |
| **API group** | API query only. The second URL segment, such as `queries`. |
| **API version** | API query only. For example `v1.0` or `beta`. |
| **Entity name** | API query only. The singular name of one row, such as `custSale`. |
| **Entity set name** | API query only. The plural name used in the URL, such as `custSales`. |

The API publisher, API group, entity name and entity set name must start with a lowercase letter and contain only letters and digits. The dialog remembers your values until you close the designer.

## What is converted

- Tables become data items, nested by their joins. A join becomes an inner join when the joined table has a filter, like in the designer.
- Shown fields become columns. Filters become table filters. **Ask at run** fields become filter elements, listed in a comment at the top of the file, so you can set them before you open the query.
- The sort and the **Totals** settings (Sum, Average, Min, Max, Count) are kept. In a query object, Min and Max work on numeric fields only.

## What isn't converted

A query object can't express everything a designer query can do. These parts are left out, or changed, and each one is marked with a `// TODO:` comment in the file:

- A period split, a date grouped by period, and dimension columns
- Relative date formulas, which become fixed dates
- Min or Max of a non-numeric field

In the generated query, the columns are grouped per table, so the column order of the field grid isn't kept. A flow filter link is kept, with a TODO comment about the compiler warning it causes. A multicompany query can't be generated at all: turn **Multi-company** off first.

Before you compile the file, check the object ID and name, and read every TODO comment.

## Related pages

- [Manage saved queries](query-saved-queries.md)
- [Run a query in several companies](query-multi-company.md)
- [Troubleshoot the Query Designer](query-troubleshooting.md)
