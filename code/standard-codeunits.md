---
title: Call standard codeunits from a script
description: Lists the standard Business Central codeunits that ALive Code programs can declare as variables, with their available methods, including posting and releasing documents.
---

# Call standard codeunits from a script

An ALive Code program can declare a codeunit variable for a fixed set of standard Business Central codeunits and call their methods, as in AL.

```al
var
    B64: Codeunit "Base64 Convert";
    Rx: Codeunit Regex;
    Encoded: Text;
begin
    Encoded := B64.ToBase64('Hello');
    console.log('Decoded: %1', B64.FromBase64(Encoded));
    console.log('Valid code: %1', Rx.IsMatch('ABC-123', '^[A-Z]+-\d+$'));
end;
```

To try it, load the sample **Codeunit bindings (Base64, Regex, ...)** from the **SAMPLES** list.

## Available codeunits

| Codeunit | Methods |
|---|---|
| Base64 Convert | ToBase64(Text), ToBase64(Text, InsertLineBreaks), FromBase64(Text) |
| Regex | IsMatch(Input, Pattern), Replace(Input, Pattern, Replacement), Split(Input, Pattern) |
| Environment Information | GetEnvironmentName, IsSaaS, IsSandbox, IsProduction, IsOnPrem, IsSaaSInfrastructure |
| Language | GetUserLanguageCode, GetLanguageId, GetLanguageIdOrDefault, GetLanguageCode, GetWindowsLanguageName, GetDefaultApplicationLanguageId, ValidateApplicationLanguageId, ValidateWindowsLanguageId, GetParentLanguageId, GetTwoLetterISOLanguageName, GetLanguageIdFromCultureName, GetCultureName, GetCurrentCultureName, GetFormatRegionOrDefault |
| No. Series | GetNextNo(NoSeriesCode [, UsageDate [, HideErrorsAndWarnings]]) gets and uses the next number. PeekNextNo(NoSeriesCode [, UsageDate]) shows it without using it. |
| Sales-Post, Purch.-Post | SetSuppressCommit(Suppress), Run(Header) to post a sales or purchase document |
| Release Sales Document, Release Purchase Document | Run(Header), PerformManualRelease(Header), PerformManualReopen(Header), Reopen(Header) |
| Gen. Jnl.-Post Batch | Run(GenJournalLine) to post the journal batch the line belongs to |
| ExcelWorkbook | Read and write Excel files. To learn more, go to [Work with Excel files](excel.md). |

Regex `Split` returns a list and can only be used in an assignment to a `List of [Text]` or in a `foreach`. Like Text `Split`, it keeps empty parts.

## Post and release documents

```al
var
    SalesHeader: Record "Sales Header";
    Poster: Codeunit "Sales-Post";
begin
    SalesHeader.SetRange("Document Type", SalesHeader."Document Type"::Order);
    if SalesHeader.FindFirst() then
        if Poster.Run(SalesHeader) then
            console.log('Posted order %1', SalesHeader."No.");
end;
```

- The record you pass is updated after the call. For example, after `Release.Run(SalesHeader)` the `Status` field shows the new status.
- `Poster.Run(SalesHeader);` as a statement stops the program when posting fails. `if Poster.Run(SalesHeader) then` returns false instead.
- Posting really posts the documents, as when you post them from their pages, and the posting routine commits its work unless you call `SetSuppressCommit(true)` first. Test such programs in a sandbox environment first.
- You can pass only one record per call, and it can't be a temporary record.

## Rules for codeunit variables

- Each variable has its own state. For example, `SetSuppressCommit` on one **Sales-Post** variable doesn't affect another one.
- Codeunit variables can't be assigned to each other, cleared, passed as parameters to procedures, or used as return values. To use one in a procedure, declare it as a global variable.
- Methods without arguments can be called with or without parentheses, such as `EnvInfo.IsSandbox()` or `EnvInfo.IsSandbox`.
- Codeunits not in this list are reported as `UnknownType` when you compile. To run other codeunits, use `Codeunit.Run`.
- In a production environment, a program that calls a codeunit variable asks for confirmation before it runs. To learn more, go to [Run confirmation in production environments](run-confirmation.md).
