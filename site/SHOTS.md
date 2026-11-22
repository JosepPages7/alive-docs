# Landing page media: screen recordings and screenshots

The page shows short **muted clips** where it explains how ALive Analysis
works, and **still screenshots** for the rest. Until a file exists, the build
shows a placeholder; the page does not go public with one.

Claude's browser captures at most 800 px wide, too blurry for the page
(owner, 2026-11-22: "the quality of image matters"). So the owner records and
screenshots on their own screen, and Claude crops, edits and converts.

## Recording setup (all clips)

- The Docker container `bconprem`: `http://bconprem/BC/?tenant=default`,
  company CRONUS International Ltd., English, light theme.
- Run every workspace with the period **Last 24 months**: the container's
  sales data is thin (67 customer ledger entries, Dec 2027 - Jan 2028).
- Browser maximized, zoom 100 %, bookmarks bar and extensions hidden, nothing
  personal on screen (the user menu stays closed).
- Snipping Tool, **Win + Shift + R**, drag the region over the page area (not
  the browser tabs or address bar). Windows records at the screen's real
  pixels, which is what makes the clip sharp: do not record a smaller window.
- Move the mouse slowly, stay still about 2 seconds at the start, after each
  click and at the end. A wrong click is fine: Claude cuts it.
- Save each take as `<clip>-take.mp4` in `site/footage/` (git-ignored).

Claude then crops it to 16:9, trims, adds slow zooms on the clicks with
HyperFrames, and writes `assets/landing/video/<clip>.mp4` (H.264, 1600 × 900)
plus a `<clip>.webp` poster. No text is burned in: the page's caption under
each clip is translated, so one clip serves every language.

## The four clips

| Clip | Length | Page section | What to do |
|---|---|---|---|
| `slice` | 10-15 s | Features | CEO dashboard, **Sales** page. Click salesperson **JO** in the Salesperson slicer; wait. Click **The Cannon Group PLC** in the By country treemap; wait. Click **Clear** in the slicer. |
| `drill` | 15-20 s | Features | Same page, the **Customers** pivot by Country/Region. Right-click **DE**'s sales, choose **Show source rows**; wait. Click a customer number in the rows; Business Central opens the Customers list; wait. |
| `context` | 10-15 s | Features | Customers list, open **Autohaus Mielberg KG** (49633663, it has sales in the data). Use the **ALive Workspaces** action, open a sales workspace; wait on the result with the customer in the context chip. |
| `design` | 15-20 s | For the administrator | Workspace Studio on the CEO dashboard copy. Select the **Customer sales** dataset, open its query in the Query Designer (joined tables visible), **Run**; wait on the result; close it. |

The hero clip is cut from `slice` and `drill`, so it needs no recording of
its own.

## Still screenshots

Full screen at the screen's real resolution (Win + Shift + S, window mode),
saved as PNG in `site/footage/`; Claude crops to 1600 × 900 and converts to
`assets/landing/<name>-1600.webp` and `<name>-800.webp`.

| File name | Where | What must be visible | Page section |
|---|---|---|---|
| `ceo-dashboard` | CEO dashboard, Overview page, run | The KPI tiles and the charts, no dialog open. Also the hero clip's poster. | Hero |
| `templates` | ALive Workspaces list, with the Get started row | Several templates in different categories. Delete the `ZROLE-*` test workspaces first (Claude can list them). | Templates |
| `ai-request-log` | ALive AI Requests, one request opened | What was sent: table and field definitions, no record values. Hide or crop the provider key setting. | ALive AI |
| `sheet` | Sales scorecard (template, it has a Sheet view), run | The Sheet view with formulas showing figures; a cell selected so its `DATASET.*` formula shows in the formula bar. | Sheet |
| `extension-fields` | Workspace Studio, a query dataset, Query Designer | A table that another extension adds (an AppSource app or your own, not Microsoft's), joined to a standard table, its fields in the grid. Install a small demo extension in Docker if none exists. | Your extensions' tables |
| `script-editor` | Workspace Studio, a template copy with a script dataset (for example ABC analysis) | The script in the editor, with the IntelliSense list open on a record variable. | Scripts |

### Template gallery (8 shots, same rules)

Each template run, a typical view, no dialog: `tpl-ceo-dashboard`,
`tpl-actual-vs-budget`, `tpl-aging`, `tpl-sales-analysis`,
`tpl-sales-scorecard`, `tpl-abc-analysis`, `tpl-purchase-analysis`,
`tpl-projects`. They open full size from the Templates section.

## Later, for each extra language

The same clips and shots in that language's BC (Spanish once the Spanish BC
smoke test is done). The page uses the English ones until then.
