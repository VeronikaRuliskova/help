---
title: Get Method
---

## Metoda `GET`

**Příklad úplného požadavku:**
``` url
https://portal.bulkgate.com/api/1.0/simple/transactional
    ?application_id=<APPLICATION_ID>
    &application_token=<APPLICATION_TOKEN>
    &number=420777777777
    &text=test_sms
    &unicode=yes
    &flash=no
    &sender_id=gText
    &sender_id_value=BulkGate
    &country=cz
```

**Příklad požadavku s doplněním prefixu země:**
``` url
https://portal.bulkgate.com/api/1.0/simple/transactional
    ?application_id=<APPLICATION_ID>
    &application_token=<APPLICATION_TOKEN>
    &number=7700900000
    &text=test_sms
    &country=cz
```
