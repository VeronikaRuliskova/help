---
title: Get Method
---

## Metoda GET

**Příklad úplného požadavku:**
``` url
https://portal.bulkgate.com/api/1.0/simple/promotional
    ?application_id=<APPLICATION_ID>
    &application_token=<APPLICATION_TOKEN>
    &number=420777777777;420775123456;606123456
    &text=test_sms
    &unicode=yes
    &sender_id=gText
    &sender_id_value=BulkGate
    &country=cz
    &schedule=2018-05-14T18:30:00-01:00
```

**Příklad požadavku země:**
``` url
https://portal.bulkgate.com/api/1.0/simple/promotional
    ?application_id=<APPLICATION_ID>
    &application_token=<APPLICATION_TOKEN>
    &number=606123456;420777777777
    &text=test_sms
    &country=cz
```

**Příklad požadavku ISO 8601:**
``` url
https://portal.bulkgate.com/api/1.0/simple/promotional
    ?application_id=<APPLICATION_ID>
    &application_token=<APPLICATION_TOKEN>
    &number=420775123456;420606123456
    &text=test_sms
    &schedule=2018-05-14T18:30:00-01:00
```

**Příklad požadavku unix timestamp:**
``` url
https://portal.bulkgate.com/api/1.0/simple/promotional
    ?application_id=<APPLICATION_ID>
    &application_token=<APPLICATION_TOKEN>
    &number=420775123456;420606123456
    &text=test_sms
    &schedule=1526992636
```
