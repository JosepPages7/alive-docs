---
title: Chart, KPI and slicer views
description: How to build charts (Graphics mode), KPI tiles and slicers in the workspace viewer, and how clicking them filters the other views.
---

# Chart, KPI and slicer views

Graphics views draw a dataset as a chart, KPI views show headline numbers as tiles, and slicer views let users filter the other views of a page by picking values.

Choose **Graphics**, **KPI** or **Slicer** at the top of the **View** panel on the right edge of the viewer.

## Graphics (charts)

Pick a chart type, then add fields to the wells:

| Well | What it does |
| --- | --- |
| **Category** | The bars, points or slices, for example months or customers. |
| **Series** | Splits each category into series, for example one per year. |
| **Values** | The numbers to draw, each with its aggregation. Without a value, the chart counts rows. |
| **Split by** | Bar, line, area and pie charts: one small chart per member of this field. |

| Chart type | Notes |
| --- | --- |
| **Bar**, **Line**, **Area** | The general charts. **Stacked** and **Horizontal** are chart options. |
| **Pie** | Uses the first category and the first value. **Donut** is a chart option. |
| **Scatter** | Needs two values (X and Y); a third sets the point size. |
| **Waterfall** | A bridge of the first value along the categories. Over a financial report, its total lines show as subtotal bars. |
| **Bar + line** | Each value drawn as bars or as a line, set on the value. Needs two values. |
| **Heatmap** | Needs a **Category** field (down) and a **Series** field (across); the first value sets the color. |
| **Treemap** | One nesting level per **Category** field, sized by the first value; positive values only. |
| **Funnel** | The stages of the first **Category** field; positive values only. |

**Chart options** depend on the type and include **Legend**, **Value labels**, **Sort**, **Colors**, **Average line**, **Target**, **Max / min**, **Trend line**, **Zoom slider**, **Independent scales** and **Big numbers**. **Show value as** and the Top / Bottom limit work as in a pivot. See [List and pivot views](workspace-list-and-pivot.md).

## KPI tiles

| Setting | What it does |
| --- | --- |
| **Tiles by** | One tile per member, for example per country. Empty means one tile per value over all rows. |
| **Compare by** | Usually a period field. Each tile shows the last member's value and its change from the previous one. |
| **Values** | The measures, each with its aggregation. |
| **Target** | Per value: **No target**, another column aggregated like the value, or **Fixed value…**. The tile shows progress toward it. |
| **Lower is better** | Per value: for costs or overdue amounts, a fall shows as good news. |
| **KPI options** | **Sparkline** (a small trend over the Compare by members) and **Big numbers**. |

More than 500 tiles shows **Too many tiles** instead; pick a coarser **Tiles by** field.

## Slicers

Add one field to the slicer's **Field** well. The slicer lists the field's values with their row counts; tick values to filter the other views on the page, or choose **Clear** to show everything. A date field shows period choices such as **This year** instead of single days. In **Slicer options**, **Filter every page** applies the selection to every page.

## Click to filter the page

Clicking a chart mark, a pivot cell or a KPI tile (with a **Tiles by** field) filters the other views of the page to that member, across datasets that share the field. Click the same mark again, or an empty area, to clear it. The filtered views show a chip in their pane header; choose its **✕** to remove the filter. These click filters are temporary and aren't saved. See [Filter views and pages](workspace-filters.md).

To see the rows behind a chart mark or tile, double-click it. See [Drill down to source rows and Business Central pages](workspace-drilldown.md).

## Related information

- [Use the workspace viewer](workspace-viewer.md)
- [Arrange views in panes and pages](workspace-views-and-pages.md)
