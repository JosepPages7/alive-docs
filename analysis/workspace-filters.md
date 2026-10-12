---
title: Filter views and pages
description: How to filter one workspace view, a whole page or every page, which operators are available, and how filters from slicers and clicks combine.
---

# Filter views and pages

Workspace filters narrow the rows a view shows without running the workspace again, either for one view, for every view on a page, or for every page.

Filters at run, which decide what data is loaded, are different. See [Ask for filters at run](workspace-run-options.md).

## Open the Filters panel

Choose **Filters** on the right edge of the viewer. You can also choose **Filter…** or **Filter the page by** *column*… in a list column's menu, or select a chip in the filter bar. The panel has these sections:

| Section | What its filters do |
| --- | --- |
| **This view** | Filter only the active view, in every mode: list, pivot, chart, KPI and slicer. |
| **From other views** | Read-only: the filters that slicers and clicks in other views apply to this view. |
| **This page** | Filter every view on the page, across datasets. |
| **All pages** | Filter every view on every page. Shown once a filter is pinned to all pages. |

## Add a filter

1. In **This view** or **This page**, choose **Add** and pick a column.
2. Pick an operator and enter a value. All filters must match (they combine with AND).

| Column type | Operators |
| --- | --- |
| Number | is any of, is not, =, ≠, >, ≥, <, ≤, is blank, is not blank |
| Date | A period first (**This year**, **Last year**, **Year to date**, **Last 12 months**, **Last 24 months**, **This month**, **Last month**, and with fiscal periods **This fiscal year**, **Fiscal year to date**, **Last fiscal year**, **This accounting period**), then the number operators |
| Text and others | is any of, is not, =, ≠, contains, is blank, is not blank |

**is any of** and **is not** open a list of the column's values with their row counts. Periods are worked out from the Business Central work date each time the view is built.

Add the same column twice to filter a range, for example amount ≥ 1000 and amount < 5000.

## Page filters across datasets

A page filter belongs to one dataset's column. For each other dataset on the page, **Applies to** chooses which of its columns the filter uses:

- **Automatic**: a column that means the same thing, found from Business Central metadata (the same record, such as a customer number) or the same title and data type. **no match** means the dataset isn't filtered.
- **Not filtered**: the dataset ignores the filter.
- A column of the same data type that you pick.

Matching by record works for query columns only, once the dataset has run. A financial report's columns are never matched automatically, except its **Company** column.

Use the pin button on a page filter to switch between this page and every page.

## See what's filtered

- A filtered view shows a funnel on its tab; point at it to see the filters and how many rows remain.
- The filter bar above the page shows one chip per page filter. Select a chip to edit it, or choose **✕** to remove it. A dimmed chip filters no view on the page.
- Slicers and click filters from other views show as chips in the pane header.

## Saving filters

View filters and page filters are saved with your views. When an administrator saves the default views for all users, their filters are included. Click filters on charts, pivots and KPI tiles are temporary.

## Related information

- [Chart, KPI and slicer views](workspace-charts-kpis-slicers.md)
- [Arrange views in panes and pages](workspace-views-and-pages.md)
