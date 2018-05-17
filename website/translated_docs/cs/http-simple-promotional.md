---
title: Promotional SMS
---


## API URL
The URL used to send the HTTP requests:
https://portal.bulkgate.com/api/1.0/simple/promotional

### Parameters table

|Parameter name	|Value|	Mandatory| Default Value
|:--- |:--- |:--- |:--- |
|application_id|application indentificator |**Yes**|-| 
|application_token|application authentication token	|**Yes**|-|
|number|Recipient number 	|**Yes**|-|
|text|Text of SMS message (max. 612 characters, or 268 characters if Unicode is used), UTF-8 enconding	|**Yes**|-|
|unicode	|yes/true/1 for Unicode SMS, no/false/0 for 7bit SMS|No|false|
|flash| yes/true/1 for flash SMS|No|false|
|sender_id|Sender ID viz table|No|gSystem|
|sender_id_value|sender value of gOwn or gText|No|null|
|country|You can specify country for number and country prefix added (777123456 + cz = 420777123456), ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)) In case null, timezone used from user profile.|No|null|
|schedule| send datetime in [unix timestamp](https://en.wikipedia.org/wiki/Unix_time) or [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) |No|Now|

**Sender ID type table `sender_id`** 

|Parameter name	| Default value|
|:--- |:---|
|gSystem |System number| 
|gShort |Short Code| 
|gText |Text sender| 
|gOwn |Own Number (number verification required)| 
| `<int>` |BulkGate Profile ID| 


**Example request:**
``` url
https://portal.bulkgate.com/api/1.0/simple/promotional
    ?application_id=<APPLICATION_ID>
    &application_token=<APPLICATION_TOKEN>
    &number=420777777777;420608123456;4206036
    &text=test_sms
    &unicode=yes
    &sender_id=gText
    &sender_id_value=BulkGate
    &schedule=2018-05-14T18:30:00-01:00
```

Response to this command may be:

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
        "number": "420777777777"
      },
      {
        "status": "scheduled",
        "sms_id": "tmpde1f0053f0c",
        "price": 0.0261,
        "credit": 215.81380,
        "number": "420608123456"
      },
      {
        "status": "error",
        "code": 9,
        "error": "Bad number",
        "number": "4204206036"
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
