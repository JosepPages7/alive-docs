---
title: Write, fix or explain a script
description: How to use ALive AI in the code editor of a code dataset to write a script, fix one, or explain it, and how the script's values are hidden.
---

# Write, fix or explain a script

The script assistant writes the script of a code dataset from a description, fixes a script that doesn't compile or failed, or explains what a script does.

## Open the script assistant

1. In the **ALive Workspace Studio**, in the **Datasets** panel, choose **Edit the code…** on a code dataset. To start a new one, choose **Add**, and then **Write a script…** under **Code dataset**.
2. In the **Workspace Code** editor, choose the assistant button (the spark icon, "Write, fix or explain this script with the assistant").
3. On the **Assistant** menu, choose **Write a script…**, **Fix this script…** or **Explain this script…**. Fix and explain need a script in the editor.

## Write a script

1. In the **Write a script** dialog, describe what the dataset should show: the figures, by what and over which period. Or choose a sample: **Running balance** or **Top 10 and the rest**.
2. Choose **Generate**.
3. Review **What It Does** and the **Script**. The script compiles.
4. Choose **Keep it** to put the script in the editor, or **Discard it**.

## Fix a script

1. If the last run of the script in this session failed, ALive AI first shows the error and asks: "Send this error to the AI provider with the script? It may quote values of your records." The default answer is no.
2. In the **Fix this script** dialog, optionally say what is wrong or what the script should do instead.
3. Choose the **Values** option (see below), and then choose **Generate**.
4. Review **What It Does** (what the fix changed) and the **Script**, and then choose **Keep it** or **Discard it**.

The assistant also gets what compiling the script says, so it can fix compile errors.

## Explain a script

The **Explain this script** dialog starts the explanation as soon as it opens. Optionally, ask a question and choose **Regenerate**. **Keep it** puts the **Explanation** in the editor's output pane.

## The Values option

To fix or explain a script, the **Values** option decides how the script is sent:

| Option | What happens |
|---|---|
| **Hide values** (default) | The script's texts and numbers are replaced by placeholders and put back in the answer, in case they hold customer numbers, names or amounts. |
| **Send as written** | The script goes as it is, so the AI model can reason about its values. |

## After you keep a script

- The new script replaces the editor's script as one unsaved change. Press Ctrl+Z to bring the old one back.
- Run the script in the editor to check its result. Nothing is saved until you save the workspace.

## Things to know

- The assistant compiles scripts but never runs them. Workspace scripts run in a sandbox that can't change data, so a script that writes data doesn't compile.
- A script may read the database tables the assistant can use (see [Describe a workspace](describe-a-workspace.md)). It may use temporary records of other standard tables.
- Up to 20 requests per **Generate**. If the model can't make the script compile after three attempts, it stops and shows what the last compile said.
- Never type business data in the dialog. Your text is sent to the AI provider.

## Related information

- [What ALive AI sends to the AI provider](what-alive-ai-sends.md)
- [Troubleshoot the assistant](troubleshoot-assistant.md)
