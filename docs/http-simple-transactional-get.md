---
title: GET Method
---

## `GET` method

> It is **strictly prohibited** to exploit [transactional SMS](difference-promotional-transactional-sms.md#transactional-sms) for promotional/marketing uses. It must be used for notification purposes only - as an SMS notification.

**Example of full request:**
``` url
https://portal.bulkgate.com/api/1.0/simple/transactional
    ?application_id=<APPLICATION_ID>
    &application_token=<APPLICATION_TOKEN>
    &number=447700900000
    &text=test_sms
    &unicode=yes
    &flash=no
    &sender_id=gText
    &sender_id_value=BulkGate
    &country=gb
```

**Example of request with country prefix:**
``` url
https://portal.bulkgate.com/api/1.0/simple/promotional
    ?application_id=<APPLICATION_ID>
    &application_token=<APPLICATION_TOKEN>
    &number=7700900000
    &text=test_sms
    &country=gb
```
