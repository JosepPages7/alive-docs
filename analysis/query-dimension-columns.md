---
title: Add dimension columns to a query
description: How to show the dimension values of ledger entries, documents and other records as columns of an ALive query.
---

# Add dimension columns to a query

The Query Designer can show any dimension of a record, such as Department or Project, as a column of its own.

## Where dimension columns come from

Records such as ledger entries, documents, document lines and journal lines store their dimensions in a Dimension Set ID field. In the Query Designer, such a field shows a **dimensions** chip in its table box.

## Add dimension columns

1. In the table box, choose the **dimensions** chip of the Dimension Set ID field. If the field is already in the field grid, you can also right-click its column and choose **Dimensions…**.
2. In the **Dimensions** dialog, pick the dimensions you want. The list shows the dimensions of the company.
3. Optionally select **Add names (a "Department Name" column next to each code)**.
4. Choose **OK**.

Each dimension becomes a column with the dimension value code, captioned like Business Central's own dimension fields, such as **Department Code**. With **Add names**, a second column holds the value name, such as **Department Name**. The columns appear where the Dimension Set ID field sits in the grid.

When you add dimensions from the chip, the Dimension Set ID field itself is added to the grid as a hidden field, because the ID is of no use in the result.

## Good to know

- A record without a value for a dimension gives a blank cell.
- With **Totals** on, the query groups by the dimension columns, so you get totals per dimension value.
- Dimension columns have no **Filter** cell in the field grid.

## Related pages

- [Choose fields, filters and sorting](query-fields-and-filters.md)
- [Group and total rows in a query](query-totals.md)
