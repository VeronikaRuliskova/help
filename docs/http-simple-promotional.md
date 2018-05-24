---
title: Info
---

### Supported methods
- [GET](http-simple-promotional-get.md#get-method)
- [POST - application/x-www-form-urlencoded](http-simple-promotional-post-form.md#post-method---applicationx-www-form-urlencoded)
- [POST - application/json](http-simple-promotional-post-json.md#post-method---applicationjson)

## API URL
The URL used to send the HTTP requests:
https://portal.bulkgate.com/api/1.0/simple/promotional

### Parameters table

|PARAMETER NAME	|VALUE|	MANDATORY| DEFAULT VALUE|
|:--- |:--- |:--- |:--- |
|application_id|Application indentificator |**Yes**|-| 
|application_token|Application authentication token	|**Yes**|-|
|number|Recipient number 	|**Yes**|-|
|text|Text of SMS message (max. 612 characters, or 268 characters if Unicode is used), UTF-8 enconding	|**Yes**|-|
|unicode	|Yes/true/1 for Unicode SMS, no/false/0 for 7bit SMS|No|false|
|flash| Yes/true/1 for flash SMS|No|false|
|sender_id|Sender ID, viz [sender ID type](#sender-id-type-sender_id)|No|gSystem|
|sender_id_value|Sender value of gOwn or gText|No|null|
|country|Provide the recipients' numbers in an international format (with prefix, e.g. 44) or add the [country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) (7820125799 + GB = 447820125799). See the country example request. If **`null,`** your set timezone will be used to fill the information|No|null|
|schedule| Schedule the sending date/time in [unix timestamp,](https://en.wikipedia.org/wiki/Unix_time) or [ISO 8601.](https://en.wikipedia.org/wiki/ISO_8601) See examples below |No|Now|

### Sender ID type `sender_id` 

|Parameter name	| Default value|
|:--- |:---|
|gSystem |System number| 
|gShort |Short Code| 
|gText |Text sender| 
|gOwn |Own Number (number verification required)| 
| `<int>` |BulkGate Profile ID| 


## Response to this command may be:

**In case of success:**
``` json
{
  "data": {
    "total": {
      "price": 0.0522,
      "status": {
        "sent": 0,
        "accepted": 0,
        "scheduled": 2,
        "error": 1
      }
    },
    "response": [
      {
        "status": "scheduled",
        "sms_id": "tmpde1f00539c7",
        "price": 0.0261,
        "credit": 215.81380,
        "number": "447700900000"
      },
      {
        "status": "scheduled",
        "sms_id": "tmpde1f0053f0c",
        "price": 0.0261,
        "credit": 215.81380,
        "number": "447811901234"
      },
      {
        "status": "error",
        "code": 9,
        "error": "Bad number",
        "number": "44771447678"
      }
    ]
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
