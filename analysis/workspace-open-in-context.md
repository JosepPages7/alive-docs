---
title: Open a workspace from a card or list
description: How the ALive Analysis action on customer, vendor, item and other cards and lists opens workspaces filtered to the record, and how administrators set it up.
---

# Open a workspace from a card or list

The **ALive Analysis** action on cards and lists opens a workspace already filtered to the record you're looking at, for example the sales of one customer.

## Where the action is

The **ALive Analysis** action is under **Related** on the card and on the list of these records:

- Customers
- Vendors
- Items
- G/L accounts (the G/L account card and the chart of accounts)
- Projects
- Resources
- Fixed assets
- Bank accounts
- Salespeople and purchasers
- Locations

Other extensions can add the same action to their own pages.

The action is shown to users who have the **ALive Workspaces User** or **ALive Workspaces Admin** permission set.

## Open a workspace for a record

1. Open the card, or select the record in the list.
2. Choose **Related** > **ALive Analysis**.

What happens next depends on how many workspaces you can run that open from this kind of record:

- **None**: a message says that no workspace opens from it.
- **One**: the workspace opens at once in the viewer.
- **Several**: the **ALive Analysis** list opens with only those workspaces, titled with the record. Choose one to open it.

The viewer heading names the record, and a chip in the filter bar shows it. If a dataset couldn't be narrowed to the record, the chip lists it under **Not filtered**.

## How the data is narrowed

| Dataset | How it's filtered to the record |
| --- | --- |
| Query | Each table of the query is filtered on the record's own key, or on the first field related to it. For example, sales lines by their customer. A table without such a field isn't filtered. |
| Report | The report's data items that have a field related to the record are filtered to it, in addition to the report's own filters. |
| Code (script) | The script reads the record's filter with `Dataset.Context()` and applies it itself. |
| Financial report | Not filtered: it shows every record. |

For a G/L total account, the filter is the account's totaling range. A heading account has no entries, so no workspace opens for it.

The record filter is never saved, so it doesn't change your remembered filters or other runs.

## Set it up (administrators)

1. In the **ALive Workspace Studio**, open the workspace.
2. Open the workspace menu (**…**) and choose **Settings…**.
3. Under **Open from (card and list)**, select the kinds of records, such as **Customer**.
4. Choose **OK**. This saves the workspace.

Design the datasets so they can be narrowed: include a table or field related to the record. The users still need access to the workspace. See [Who can see and run workspaces](workspace-permissions.md).

## Related information

- [Open workspaces from ALive Analysis](alive-analysis-page.md)
- [Troubleshoot opening and saving workspaces](workspace-troubleshooting-access.md)
