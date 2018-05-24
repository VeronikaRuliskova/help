---
title: Metoda POST - formulář
---

## Metoda POST - `application/x-www-form-urlencoded`

**Příklad úplného požadavku:**
``` http
POST /api/1.0/simple/promotional HTTP/1.1
Host: portal.bulkgate.com
Content-Type: application/x-www-form-urlencoded
Cache-Control: no-cache

application_id=<APPLICATION_ID>&application_token=<APPLICATION_TOKEN>&number=420777777777;420775123456;606123456&text=test_sms&unicode=yes&flash=no&sender_id=gText&sender_id_value=BulkGate&country=cz&schedule=2018-05-14T18:30:00-01:00
```

**Příklad požadavku země:**
``` http
POST /api/1.0/simple/promotional HTTP/1.1
Host: portal.bulkgate.com
Content-Type: application/x-www-form-urlencoded
Cache-Control: no-cache

application_id=<APPLICATION_ID>&application_token=<APPLICATION_TOKEN>&number=606123456;420777777777&text=test_sms&country=cz
```

**Příklad požadavku ISO 8601:**
``` http
POST /api/1.0/simple/promotional HTTP/1.1
Host: portal.bulkgate.com
Content-Type: application/x-www-form-urlencoded
Cache-Control: no-cache

application_id=<APPLICATION_ID>&application_token=<APPLICATION_TOKEN>&number=420775123456;420606123456&text=test_sms&schedule=2018-05-14T18:30:00-01:00
```

**Příklad požadavku unix timestamp:**
``` http
POST /api/1.0/simple/promotional HTTP/1.1
Host: portal.bulkgate.com
Content-Type: application/x-www-form-urlencoded
Cache-Control: no-cache

application_id=<APPLICATION_ID>&application_token=<APPLICATION_TOKEN>&number=420775123456;420606123456&text=test_sms&schedule=1526992636
```
