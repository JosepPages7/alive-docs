---
title: Use FlowFields and FlowFilters in a query
description: How FlowFields and FlowFilters work in an ALive query, how to split FlowFields by period, how to get one row per related record with a flow filter link, and what Skip rows without values does.
---

# Use FlowFields and FlowFilters in a query

FlowFields are calculated values, such as a customer's **Balance (LCY)**. FlowFilters, such as **Date Filter**, decide what those FlowFields add up.

## FlowFields

A FlowField (marked **ƒ**) is listed under **FlowFields** in its table box. You can show, filter and total it like any other field. FlowFields can't be sorted in the query: sort the Results view instead.

## Scope FlowFields with a FlowFilter

A FlowFilter (marked **∇**) is listed under **Filter totals by**. It holds no value of its own, so it can't be shown, sorted or totalled. It only narrows what the FlowFields of its table add up.

1. Double-click the FlowFilter to add it to the field grid. It's added with **Ask at run** selected.
2. Keep **Ask at run**, or clear it and enter a **Filter**, such as the date formula `<-CY>..<CY>` for this year.

A FlowFilter doesn't remove any rows, so it never turns a join into an INNER JOIN.

## Split FlowFields by period

You can show the FlowFields once per period of a date range, for example sales per month.

1. Add a Date FlowFilter, such as **Date Filter**. You can also use the **by period** chip in the table box.
2. In its **Show** cell, pick **Day**, **Week**, **Month**, **Quarter**, **Semester** or **Year**.
3. Give it a closed date range in its **Filter** cell (for example `<-CY-1Y>..<CY>`, or `01.01.25..31.12.25`), or keep **Ask at run** and enter the range when the query runs.

The query runs once per period, and the column shows the first day of each calendar period. Rows come period by period. A range can hold at most 1,000 periods.

## Get one row per related record (flow filter link)

A FlowFilter that relates to another table, such as **Location Filter** on Item, can be linked to that table. The query then returns one row per record of the related table, with the FlowFields calculated for that record (for example, the inventory of each item per location).

To create the link, do one of the following:

- Choose the **⇢** chip of the FlowFilter in its table box.
- Choose **Related** and pick a table under **Scope by**.
- Drag the FlowFilter onto the matching field of the other table.

The link line is dashed. The fields of the related table are ordinary columns that you can show and filter.

Entries with a blank code belong to no related record, so they're missing from the result. To add them, select **+ blank** in the **Show** cell of the linked FlowFilter (Code and Text FlowFilters only). They come last, under blank columns of the related table.

## Skip rows without values

**Skip rows without values** is on by default and has a button in the toolbar and an entry in the **Run** menu. It matters only for a query with a period split or a flow filter link: a row whose shown FlowFields are all zero or blank in that period, or for that related record, is left out. Turn it off to get every combination, zeros included.

## Row order

With a period split or a flow filter link, the result comes one period or one related record at a time. The **Sort** row orders the rows within each of them, and the designer shows a **within each** tag next to the sort. Sort the Results view for any other order.

## Related pages

- [Choose fields, filters and sorting](query-fields-and-filters.md)
- [Query Advisor tips](query-advisor.md)
- [Troubleshoot errors when a query runs](query-run-errors.md)
