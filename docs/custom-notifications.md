---
title: Custom notifications
---

## Can I create my own custom notificiation?
As a developer, you can use custom hooks that enable you to send SMS notification that you define yourself. You can request this function from a different place (e.g. different plugin).

> It is **strictly prohibited** to exploit SMS notification for promotional/marketing uses. It must be used for [transactional sms](difference-promotional-transactional-sms.md#transactional-sms) only.

**Example of custom hook:**

``` xml
<?php

// Wordpress + WooCommerce + WooSMS

do_action(
  'woosms_send_sms',  // Action name
  '7971796595',        // Phone number
  'Hello <name> <age>',      // Message text with variables - <var>
  array(              // Variables to fill
    'name' => 'John',
    'age'  => '29'
  ), 
  array(                // Optional additional settings
    'unicode' => true,  // Unicode SMS
    'flash' => false,   // Flash SMS
    'country' => 'gb'   // ISO Code 3166 to fill the country prefix if the phone number is in national format (UNITED KINGDOM in this case)
    'senderType' => 'gText' // Sender type (gSystem => System number, gShort => Short code, gText => Alfa sender, gOwn => Numeric sender)
    'senderValue' => 'BulkGate' // Sender value
  )
);

/** 
    RESULT:
    ---------------------------
    SMS
    FROM: BulkGate
    TO: 447971796595
    TEXT: Hello John 29
*/
```
