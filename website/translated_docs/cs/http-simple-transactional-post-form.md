---
title: Metoda POST - formulář
---

## Metoda `POST` - `application/x-www-form-urlencoded`

> Zneužití [transakční SMS](difference-promotional-transactional-sms.md#transakČnÍ-sms) pro propagační/marketingové účely je **přísně zakázáno!** Musí být použito pouze pro informační účely - jako informační SMS.

**Příklad úplného požadavku:**
``` http
POST /api/1.0/simple/transactional HTTP/1.1
Host: portal.bulkgate.com
Content-Type: application/x-www-form-urlencoded
Cache-Control: no-cache

application_id=<APPLICATION_ID>&application_token=<APPLICATION_TOKEN>&number=420777777777&text=test_sms&unicode=yes&flash=no&sender_id=gText&sender_id_value=BulkGate&country=cz
```

**Příklad požadavku s doplněním prefixu země:**
``` http
POST /api/1.0/simple/transactional HTTP/1.1
Host: portal.bulkgate.com
Content-Type: application/x-www-form-urlencoded
Cache-Control: no-cache

application_id=<APPLICATION_ID>&application_token=<APPLICATION_TOKEN>&number=777777777&text=test_sms&country=cz
```
