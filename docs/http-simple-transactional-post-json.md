---
title: Post Method - json
---

## `POST` method - `application/json`

**Example of full request:**
``` http json
POST /api/1.0/simple/transactional HTTP/1.1
Host: portal.bulkgate.com
Content-Type: application/json
Cache-Control: no-cache

{
    "application_id": "<APPLICATION_ID>", 
    "application_token": "<APPLICATION_TOKEN>", 
    "number": "7700900000", 
    "text": "test_sms", 
    "unicode": true,
    "flash": false,
    "sender_id": "gText",
    "sender_id_value": "BulkGate",
    "country": "gb"
}

```

**Example of request with country prefix:**
``` http json
POST /api/1.0/simple/transactional HTTP/1.1
Host: portal.bulkgate.com
Content-Type: application/json
Cache-Control: no-cache

{
    "application_id": "<APPLICATION_ID>", 
    "application_token": "<APPLICATION_TOKEN>", 
    "number": "7700900000", 
    "text": "test_sms", 
    "country": "gb"
}
```
