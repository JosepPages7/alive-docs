---
title: Schedule a workspace to run in the background
description: How to schedule a workspace so it runs in the background through the job queue and opens at once with that data, who can schedule, the snapshot size limit and the errors a scheduled run can show.
---

# Schedule a workspace to run in the background

A workspace that takes a while to run can run in the background on a schedule, for example every working day at 6:00. When you open it, it shows the result of that run at once, with a **Data as of** chip that says when the data was read.

A scheduled run is personal: it reads the data with your own permissions, and only you see its result. Other users who schedule the same workspace get their own runs.

## Schedule a workspace

1. Choose the search icon, enter **ALive Analysis**, and then choose the related link.
2. Select the workspace and choose **Schedule...**.
3. If the workspace's datasets ask for filters or options, the run dialog opens first. The values you choose there are the ones every scheduled run uses. Choose **Cancel** to schedule nothing.
4. In the **Schedule** dialog, make sure **Scheduled** is on, then choose the **Time** and the days, from **Monday** to **Sunday**. A new schedule starts as Monday to Friday at 06:00.
5. Choose **OK**.

The workspace runs at that time on the chosen days, at most once a day. The first run is at the next chosen day and time.

The **Schedule** column of the **ALive Analysis** page shows your schedule of each workspace, for example **Mon-Fri 06:00**, **Every day 06:00** or **Mon, Wed 06:00**. When the job isn't waiting for its next run, its status follows, for example **(Error)** or **(On Hold)**.

The schedule is a job queue entry named **ALive workspace snapshot: \<workspace\>**. It also shows on the **Job Queue Entries** page, where you can see its log or run it once now.

## Change or remove a schedule

1. On the **ALive Analysis** page, select the workspace and choose **Schedule...**.
2. Change the time or the days, or turn **Scheduled** off to remove the schedule.
3. Choose **OK**.

Removing the schedule keeps the last result until the workspace changes.

## Open the scheduled result

Open the workspace as usual. When your last scheduled run in this company is there, the workspace opens with that data at once, without asking for filters, and the filter bar shows **Data as of \<date and time\>**. Point to the chip to see the filters each dataset ran with.

- **Refresh** (F5) runs the workspace again with the current data. The chip goes away and the scheduled result stays for the next time you open the workspace.
- Drilling down to Business Central pages shows the current data, which can differ from the scheduled result.
- The workspace runs as usual, without the scheduled result, when:
  - an administrator has changed its datasets since the run,
  - you open it from a card or list (it's then filtered to the record), or
  - you have no scheduled run of it in this company.

## Which values a scheduled run uses

Each run uses your saved choices at the time it runs, the same as a run you start yourself:

- the run dialog's last **Period**, **Companies** and dimension filters,
- each dataset's last filters and report or financial report options.

A relative period such as **This month** is worked out on the day of the run. To change the values, open the workspace, choose **Run options…** in the **Views** menu, and run it with the new values, or choose **Schedule...** again.

A schedule runs in the company where you created it. To get results for another company, schedule the workspace in that company too.

## Who can schedule

You can schedule a workspace when:

- you can run it (see [Who can see and run workspaces](workspace-permissions.md)), and
- you have the **ALive Workspaces Scheduler** permission set, or you're a workspace administrator (**ALive Workspaces Admin**).

You also need the usual Business Central permissions to create job queue entries. The **Schedule...** action and the **Schedule** column are shown only to users who can schedule.

## The snapshot size limit (administrators)

Each user's scheduled result of a workspace is stored compressed, up to a limit of 50 MB. To change the limit:

1. In the **ALive Workspace Studio**, open the workspace.
2. Open the workspace menu (**…**) and choose **Settings…**.
3. Under **Scheduled runs**, fill in **Snapshot size limit (MB)**. Leave it blank for 50 MB.
4. Choose **OK**.

Deleting or renaming a workspace removes its scheduled results and its schedules. After a rename, users schedule it again.

## Troubleshoot scheduled runs

A failed run keeps the previous result. Open the job queue entry on the **Job Queue Entries** page to see the error.

### You do not have permission to schedule workspace runs. Ask your administrator for the "ALV WS SCHEDULER" permission set.

You don't have the **ALive Workspaces Scheduler** permission set, or it was removed after you scheduled the workspace. Ask your administrator to assign it.

### You do not have permission to run the workspace "\<name\>".

The workspace is no longer shared with a permission set you have. See [Who can see and run workspaces](workspace-permissions.md).

### Workspace \<name\> does not exist.

The workspace was deleted or renamed after you scheduled it. Remove the job queue entry, or schedule the workspace again under its new name.

### The workspace \<name\> has no dataset to run.

The workspace has no dataset. Ask the workspace administrator to add one.

### The dataset "\<dataset\>" failed: \<error\>

One dataset couldn't run, so the whole run failed. The error after the colon is the same one the dataset shows when you run the workspace yourself. See [Troubleshoot running workspaces](workspace-troubleshooting-run.md).

### The snapshot of workspace \<name\> is \<n\> MB, more than its limit of \<limit\> MB. The previous snapshot stays. An administrator can raise the limit in the Workspace Studio (Workspace settings).

The result is larger than the workspace's size limit. Narrow the filters you run it with, or ask the administrator to raise **Snapshot size limit (MB)**.

### Only a workspace can be scheduled.

You chose **Schedule...** on a sheet. Sheets can't be scheduled.

### Choose at least one day. / Choose the time of day.

The **Schedule** dialog needs at least one day and a time when **Scheduled** is on.

## Related information

- [Open workspaces and sheets from ALive Analysis](alive-analysis-page.md)
- [Ask for filters at run](workspace-run-options.md)
- [Use the workspace viewer](workspace-viewer.md)
