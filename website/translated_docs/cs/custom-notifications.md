---
title: Custom notifications
---

## Mohu si vytvořit custom notifikaci na míru?
Jako vývojář můžete používat custom hooks, které vám umožňují posílat informační SMS, které si sami nadefinujete. Tuto funkci můžete vyvolat z jiného místa (např. z jiného pluginu).

> Zneužití informační SMS pro propagační/marketingové účely je **přísně zakázáno!** Musí být použito pouze pro [transakční SMS.](difference-promotional-transactional-sms.md#transakČnÍ-sms)

**Příklad custom hook:**

``` xml
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
    'country' => 'gb'   // ISO kód 3166 pro vyplnění předvolby země, pokud je telefonní číslo v národním formátu
    'senderType' => 'gText' // Typ odesílatele (gSystem => Systémové číslo, gShort => Short code, gText => Alfa sender, gOwn => Numerický odesílatel)
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
