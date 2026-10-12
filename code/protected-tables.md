---
title: Write to protected tables
description: Explains the Permissions section a program needs to insert, modify or delete records in protected tables such as ledger entries and posted documents, and lists the protected tables.
---

# Write to protected tables

A program must declare a Permissions section before it can insert, modify or delete records in a protected table, such as a ledger entry or posted document table.

## When you need a Permissions section

- **Reading** a protected table never needs a declaration.
- **Writing** needs one: `Insert` needs `i`, `Modify` and `ModifyAll` need `m`, and `Delete` and `DeleteAll` need `d`.
- **Temporary records** never need one, because they don't touch the database.
- **Other tables** don't need one. The program writes them with your own permissions.

The Permissions section covers only the records the program writes itself. Codeunits, reports and posting routines that the program runs apply their own permission checks.

## Declare permissions

Put the section at the top of the program, before `var`:

```al
Permissions =
    tabledata "Vendor Ledger Entry" = rimd,
    tabledata "G/L Entry" = rm,
    tabledata "VAT Entry" = rim;

var
    VendLedgEntry: Record "Vendor Ledger Entry";
begin
    ...
end;
```

Rules:

- Separate the entries with commas and end the section with a semicolon.
- Use the letters `r` (read), `i` (insert), `m` (modify) and `d` (delete), in upper or lower case.
- Write the table name in double quotes when it contains spaces or special characters.
- An unknown table name or a letter other than r, i, m and d is a compile error.

If a program writes a protected table without the right letter, the run stops with an error such as:

`MissingPermission Insert on protected table Vendor Ledger Entry requires a Permissions declaration (tabledata "Vendor Ledger Entry" = i) at line 12`

## Use with care

Business Central normally changes these tables only through posting. Writing them directly skips the checks that posting does, and wrong data in ledgers and posted documents is hard to correct. Test such programs in a sandbox environment first. In a production environment, ALive Code asks you to confirm before it runs a program that writes data. To learn more, go to [Run confirmation in production environments](run-confirmation.md).

## Protected tables

| Group | Tables |
|---|---|
| Customer, vendor and employee entries | Cust. Ledger Entry, Detailed Cust. Ledg. Entry, Vendor Ledger Entry, Detailed Vendor Ledg. Entry, Payable Vendor Ledger Entry, Employee Ledger Entry, Detailed Employee Ledger Entry, Payable Employee Ledger Entry |
| Finance entries | G/L Entry, VAT Entry, G/L Entry - VAT Entry Link, Bank Account Ledger Entry, Check Ledger Entry, Bank Account Statement Line, Dimension Set Entry |
| Inventory and resource entries | Item Ledger Entry, Value Entry, Post Value Entry to G/L, Item Application Entry, Item Application Entry History, Phys. Inventory Ledger Entry, Capacity Ledger Entry, Warehouse Entry, Job Ledger Entry, Res. Ledger Entry |
| Fixed asset and service entries | FA Ledger Entry, Maintenance Ledger Entry, Ins. Coverage Ledger Entry, Service Ledger Entry, Warranty Ledger Entry |
| Registers | G/L Register, Item Register, FA Register, Job Register |
| Posted sales and service documents | Sales Invoice Header, Sales Invoice Line, Sales Shipment Header, Sales Shipment Line, Sales Cr.Memo Header, Sales Cr.Memo Line, Return Receipt Header, Return Receipt Line, Issued Reminder Header, Issued Fin. Charge Memo Header, Service Invoice Header, Service Cr.Memo Header |
| Posted purchase documents | Purch. Inv. Header, Purch. Inv. Line, Purch. Rcpt. Header, Purch. Rcpt. Line, Purch. Cr. Memo Hdr., Purch. Cr. Memo Line, Return Shipment Header, Return Shipment Line |
| Posted inventory documents | Invt. Receipt Header, Invt. Receipt Line, Invt. Shipment Header, Invt. Shipment Line, Pstd. Phys. Invt. Record Hdr, Pstd. Phys. Invt. Record Line, Pstd. Phys. Invt. Order Hdr, Pstd. Phys. Invt. Order Line |
| Archives | Sales Header Archive, Sales Line Archive, Sales Comment Line Archive, Purchase Header Archive, Purchase Line Archive, Purch. Comment Line Archive, Workflow Step Argument Archive, Workflow Record Change Archive, Workflow Step Instance Archive |
| Other | Approval Entry, Posted Approval Entry, Change Log Entry, Cancelled Document |

The app's own table of saved request page values is protected too. Programs shouldn't write it; ALive Code manages it. To learn more, go to [Request pages and saved values](request-pages.md).
