---
title: Promotional SMS
---


## API URL
The URL used to send the HTTP requests:
https://portal.bulkgate.com/api/1.0/simple/promotional

### Parameters table

|Parameter name	|Value|	Mandatory| Default Value
|:--- |:--- |:--- |:--- |
|application_id|Application indentificator |**Yes**|-| 
|application_token|Application authentication token	|**Yes**|-|
|number|Recipient number 	|**Yes**|-|
|text|Text of SMS message (max. 612 characters, or 268 characters if Unicode is used), UTF-8 enconding	|**Yes**|-|
|unicode	|Yes/true/1 for Unicode SMS, no/false/0 for 7bit SMS|No|false|
|flash| Yes/true/1 for flash SMS|No|false|
|sender_id|Sender ID viz [sender ID type table]()|No|gSystem|
|sender_id_value|Sender value of gOwn or gText|No|null|
|country|Provide the recipitients' numbers in an international format (with prefix, e.g. 44) or add the [country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) (7820125799 + uk = 447820125799). See the country example request. If not provided, your set timezone will be used to fill the information|No|null|
|schedule| Schedule the sending date/time in [unix timestamp,](https://en.wikipedia.org/wiki/Unix_time) or [ISO 8601.] See examples below (https://en.wikipedia.org/wiki/ISO_8601) |No|Now|

### Sender ID type `sender_id`** 

|Parameter name	| Default value|
|:--- |:---|
|gSystem |System number| 
|gShort |Short Code| 
|gText |Text sender| 
|gOwn |Own Number (number verification required)| 
| `<int>` |BulkGate Profile ID| 


**Full Example request:**
``` url
https://portal.bulkgate.com/api/1.0/simple/promotional
    ?application_id=<APPLICATION_ID>
    &application_token=<APPLICATION_TOKEN>
    &number=420777777777;608123456;4206036
    &text=test_sms
    &unicode=yes
    &sender_id=gText
    &sender_id_value=BulkGate
    &country=cz
    &schedule=2018-05-14T18:30:00-01:00
```

**Country Example request:**
``` url
https://portal.bulkgate.com/api/1.0/simple/promotional
    ?application_id=<APPLICATION_ID>
    &application_token=<APPLICATION_TOKEN>
    &number=777777777;608123456
    &text=test_sms
    &country=cz
```

**Schedule ISO 8601 Example request:**
``` url
https://portal.bulkgate.com/api/1.0/simple/promotional
    ?application_id=<APPLICATION_ID>
    &application_token=<APPLICATION_TOKEN>
    &number=420777777777;420608123456
    &text=test_sms
    &schedule=2018-05-14T18:30:00-01:00
```

**Unix timestamp Example request:**
``` url
https://portal.bulkgate.com/api/1.0/simple/promotional
    ?application_id=<APPLICATION_ID>
    &application_token=<APPLICATION_TOKEN>
    &number=420777777777;420608123456
    &text=test_sms
    &schedule=1526992636
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
