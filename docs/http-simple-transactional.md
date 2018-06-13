---
title: Specification
---


## API URL
The URL used to send the HTTP requests:
``` url
https://portal.bulkgate.com/api/1.0/simple/transactional
```

### Supported methods
- [GET](http-simple-transactional-get.md#get-method)
- [POST - application/x-www-form-urlencoded](http-simple-transactional-post-form.md#post-method---applicationx-www-form-urlencoded)
- [POST - application/json](http-simple-transactional-post-json.md#post-method---applicationjson)

> It is **strictly prohibited** to exploit [transactional SMS](difference-promotional-transactional-sms.md#transactional-sms) for promotional/marketing uses. It must be used for notification purposes only - as an SMS notification.

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
|country|Provide the recipients' numbers in an international format (with prefix, e.g. `44`) or add the [country code in ISO 3166-1 alpha-2 format](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) (`7820125799` + `GB` = `447820125799`). See the country example request. If **`null,`** your set timezone will be used to fill the information|No|`null`|

### Sender ID type `sender_id` 

| PARAMETER NAME 	| DEFAULT VALUE |
|:--- |:---|
|`gSystem` |System number| 
|`gShort` |Short Code| 
|`gText` |Text sender| 
|`gOwn` |Own Number (number verification required)| 
| `<int>` |BulkGate Profile ID| 

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
