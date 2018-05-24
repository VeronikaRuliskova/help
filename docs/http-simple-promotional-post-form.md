---
title: Post Method - Form
---

## POST method - `application/x-www-form-urlencoded`

**Full Example request:**
``` http
POST /api/1.0/simple/promotional HTTP/1.1
Host: portal.bulkgate.com
Content-Type: application/x-www-form-urlencoded
Cache-Control: no-cache

application_id=<APPLICATION_ID>&application_token=<APPLICATION_TOKEN>&number=447700900000;7811901234;447712345678&text=test_sms&unicode=yes&flash=no&sender_id=gText&sender_id_value=BulkGate&country=gb&schedule=2018-05-14T18:30:00-01:00
```

**Example of country request:**
``` http
POST /api/1.0/simple/promotional HTTP/1.1
Host: portal.bulkgate.com
Content-Type: application/x-www-form-urlencoded
Cache-Control: no-cache

application_id=<APPLICATION_ID>&application_token=<APPLICATION_TOKEN>&number=7811901234;447712345678&text=test_sms&country=gb
```

**Example of ISO 8601 request:**
``` http
POST /api/1.0/simple/promotional HTTP/1.1
Host: portal.bulkgate.com
Content-Type: application/x-www-form-urlencoded
Cache-Control: no-cache

application_id=<APPLICATION_ID>&application_token=<APPLICATION_TOKEN>&number=447700900000;447811901234&text=test_sms&schedule=2018-05-14T18:30:00-01:00
```

**Example of unix timestamp request:**
``` http
POST /api/1.0/simple/promotional HTTP/1.1
Host: portal.bulkgate.com
Content-Type: application/x-www-form-urlencoded
Cache-Control: no-cache

application_id=<APPLICATION_ID>&application_token=<APPLICATION_TOKEN>&number=447700900000;447811901234&text=test_sms&schedule=1526992636
```
