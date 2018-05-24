---
title: Post Method - form
---

## `POST` method - `application/x-www-form-urlencoded`
**Example of full request:**
``` http
POST /api/1.0/simple/transactional HTTP/1.1
Host: portal.bulkgate.com
Content-Type: application/x-www-form-urlencoded
Cache-Control: no-cache

application_id=<APPLICATION_ID>&application_token=<APPLICATION_TOKEN>&number=447700900000&text=test_sms&unicode=yes&flash=no&sender_id=gText&sender_id_value=BulkGate&country=gb
```

**Example of request with country prefix:**
``` http
POST /api/1.0/simple/transactional HTTP/1.1
Host: portal.bulkgate.com
Content-Type: application/x-www-form-urlencoded
Cache-Control: no-cache

application_id=<APPLICATION_ID>&application_token=<APPLICATION_TOKEN>&number=7700900000&text=test_sms&country=gb
```
