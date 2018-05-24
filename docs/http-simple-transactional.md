---
title: Transactional SMS
---


## API URL
The URL used to send the HTTP requests:
``` url
https://portal.bulkgate.com/api/1.0/simple/transactional
```

### Supported methods
- [GET](#get-method)
- [POST - application/x-www-form-urlencoded](#post-method---applicationx-www-form-urlencoded)
- [POST - application/json](#post-method---applicationjson)

### Parameters table

| PARAMETER NAME | VALUE | MANDATORY | DEFAULT VALUE |
|:--- |:--- |:--- |:--- |
|application_id|Application indentificator |**Yes**|-| 
|application_token|Application authentication token	|**Yes**|-|
|number|Recipient number 	|**Yes**|-|
|text|Text of SMS message (max. 612 characters, or 268 characters if Unicode is used), UTF-8 enconding	|**Yes**|-|
|unicode	|`Yes`/`true`/`1` for Unicode SMS, `no`/`false`/`0` for 7bit SMS|No|`false`|
|flash| `Yes`/`true`/`1` for flash SMS|No|`false`|
|sender_id|Sender ID, viz [sender ID type](#sender-id-type-sender_id)|No|`gSystem`|
|sender_id_value|Sender value of `gOwn` or `gText`|No|`null`|
|country|Provide the recipients' numbers in an international format (with prefix, e.g. 44) or add the [country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) (`7820125799` + `GB` = `447820125799`). See the country example request. If **`null,`** your set timezone will be used to fill the information|No|`null`|

### Sender ID type `sender_id` 

| PARAMETER NAME 	| DEFAULT VALUE |
|:--- |:---|
|`gSystem` |System number| 
|`gShort` |Short Code| 
|`gText` |Text sender| 
|`gOwn` |Own Number (number verification required)| 
| `<int>` |BulkGate Profile ID| 

## `GET` method

**Example of full request:**
``` url
https://portal.bulkgate.com/api/1.0/simple/transactional
    ?application_id=<APPLICATION_ID>
    &application_token=<APPLICATION_TOKEN>
    &number=447700900000
    &text=test_sms
    &unicode=yes
    &flash=no
    &sender_id=gText
    &sender_id_value=BulkGate
    &country=gb
```

**Example of request with country prefix:**
``` url
https://portal.bulkgate.com/api/1.0/simple/promotional
    ?application_id=<APPLICATION_ID>
    &application_token=<APPLICATION_TOKEN>
    &number=7700900000
    &text=test_sms
    &country=gb
```

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

## Response to this command may be:

**In case of success:**
``` json
{
    "data": {
        "sms_id": "tmpde1bcd4b1d1",
        "price": 0.02,
        "credit": 215.81380,
        "number": "447700900000"
    }
}
```
 
**In case of error:**
``` json 
{
  "error": "authentication_failed",
  "code": 401
}
```
