---
title: Get Method
---

## GET method

**Example of full request:**
``` url
https://portal.bulkgate.com/api/1.0/simple/promotional
    ?application_id=<APPLICATION_ID>
    &application_token=<APPLICATION_TOKEN>
    &number=447700900000;7811901234;447712345678
    &text=test_sms
    &unicode=yes
    &sender_id=gText
    &sender_id_value=BulkGate
    &country=gb
    &schedule=2018-05-14T18:30:00-01:00
```

**Example of country request:**
``` url
https://portal.bulkgate.com/api/1.0/simple/promotional
    ?application_id=<APPLICATION_ID>
    &application_token=<APPLICATION_TOKEN>
    &number=7811901234;447712345678
    &text=test_sms
    &country=gb
```

**Example of ISO 8601 request:**
``` url
https://portal.bulkgate.com/api/1.0/simple/promotional
    ?application_id=<APPLICATION_ID>
    &application_token=<APPLICATION_TOKEN>
    &number=447700900000;447811901234
    &text=test_sms
    &schedule=2018-05-14T18:30:00-01:00
```

**Example of unix timestamp request:**
``` url
https://portal.bulkgate.com/api/1.0/simple/promotional
    ?application_id=<APPLICATION_ID>
    &application_token=<APPLICATION_TOKEN>
    &number=447700900000;447811901234
    &text=test_sms
    &schedule=1526992636
```
