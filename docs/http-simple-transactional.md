---
title: Transactional SMS
---


## Request URL address
The URL used to send the HTTP requests:
https://portal.bulkgate.com/api/1.0/simple/transactional

### Paramterers table

|Parameter name	|Value|	Mandatory| Default Value
|:--- |:--- |:--- |:--- |
|application_id|application indentificator |	Yes|-| 
|application_token|application authentication token	|Yes|-|
|number|Recipient number 	|Yes|-|
|text|Text of SMS message (max. 612 characters, or 268 characters if Unicode is used), UTF-8 enconding	|Yes|-|
|unicode	|yes/true/1 for Unicode SMS, no/false/0 for 7bit SMS|No|false|
|flash| yes/true/1 for flash SMS|No|false|
|sender_id|Sender ID viz table|No|gSystem|
|sender_id_value|sender value of gOwn or gText|No|null|
|country|You can specify country for number and country prefix added (777123456 + cz = 420777123456), ([ISO_3166-1_alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)) In case null, timezone used from user profile.|No|null|

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
https://portal.bulkgate.com/api/1.0/simple/transactional
    ?application_id=<APPLICATION_ID>
    &application_token=<APPLICATION_TOKEN>
    &number=420777777777
    &text=test_sms
    &unicode=yes
    &sender_id=gText
    &sender_value=BulkGate
```

Response to this command may be:

**In case of success:**
``` json
{
    "data": {
        "sms_id": "tmpde1bcd4b1d1",
        "price": 0.02,
        "credit": "215.81380",
        "number": "420777777777"
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
