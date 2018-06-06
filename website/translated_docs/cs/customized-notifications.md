---
title: Customized notifications
---

## Mohu si vytvořit vlastní informační SMS na míru?
Jako vývojář můžete používat vlastní háčky, které vám umožňují posílat informační SMS, které si sami nadefinujete. Tuto funkci můžete vyvolat z jiného místa (např. z jiného SMS modulu).

> Zneužití informační SMS pro propagační/marketingové účely je **přísně zakázáno!** Musí být použito pouze pro [transakční SMS.](difference-promotional-transactional-sms.md#transakČnÍ-sms)

**Příklad přizpůsobeného háčku:**

``` url
<?php

// Wordpress + WooCommerce + WooSMS

do_action(
  'woosms_send_sms',  // Název akce
  '775123123',        // Telefonní číslo
  'Hello <name> <age>',      // Text zprávy s proměnnými - <var>
  array(              // Proměnné k vyplnění
    'name' => 'Honza',
    'age'  => '29'
  ), 
  array(                // Další volitelné nastavení
    'unicode' => true,  // Unicode SMS
    'flash' => false,   // Flash SMS
    'country' => 'gb'   // <a href="https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements" target="_blank">ISO kód 3166</a> pro vyplnění předvolby země, pokud je telefonní číslo v národním formátu
    'senderType' => 'gText' // Sender type (gSystem => System number, gShort => Short code, gText => Alfa sender, gOwn => Numeric sender)
    'senderValue' => 'BulkGate' // Sender value
  )
);

/** 
    RESULT:
    ---------------------------
    SMS
    FROM: BulkGate
    TO: 420775123123
    TEXT: Ahoj Honza 29
*/
```
