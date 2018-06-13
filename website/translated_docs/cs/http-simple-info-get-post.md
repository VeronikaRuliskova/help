---
title: Requests
---

Metody:
- [Metoda GET]()
- [Metoda Post - form]()
- [Metoda Post - json]()

## Metoda GET

``` url
https://portal.bulkgate.com/api/1.0/simple/info?application_id=<APPLICATION_ID>&application_token=<APPLICATION_TOKEN>
```

## Metoda POST - `application/x-www-form-urlencoded`

``` http
POST /api/1.0/simple/info HTTP/1.1
Host: portal.bulkgate.com
Content-Type: application/x-www-form-urlencoded
Cache-Control: no-cache

application_id=<APPLICATION_ID>&application_token=<APPLICATION_TOKEN>
```

## Metoda POST - `application/json`

``` http json
POST /api/1.0/simple/info HTTP/1.1
Host: portal.bulkgate.com
Content-Type: application/json
Cache-Control: no-cache

{
    "application_id": "<APPLICATION_ID>", 
    "application_token": "<APPLICATION_TOKEN>", 
}

```
