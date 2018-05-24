---
title: Metoda POST - json
---

## Metoda `POST` - `application/json`

**Příklad úplného požadavku:**
``` http json
POST /api/1.0/simple/transactional HTTP/1.1
Host: portal.bulkgate.com
Content-Type: application/json
Cache-Control: no-cache

{
    "application_id": "<APPLICATION_ID>", 
    "application_token": "<APPLICATION_TOKEN>", 
    "number": "777777777", 
    "text": "test_sms", 
    "unicode": true,
    "flash": false,
    "sender_id": "gText",
    "sender_id_value": "BulkGate",
    "country": "cz"
}

```

**Příklad požadavku s doplněním prefixu země:**
``` http json
POST /api/1.0/simple/transactional HTTP/1.1
Host: portal.bulkgate.com
Content-Type: application/json
Cache-Control: no-cache

{
    "application_id": "<APPLICATION_ID>", 
    "application_token": "<APPLICATION_TOKEN>", 
    "number": "777777777", 
    "text": "test_sms", 
    "country": "cz"
}
```
