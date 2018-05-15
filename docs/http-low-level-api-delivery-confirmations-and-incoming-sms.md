---
title: Delivery confirmations and incoming SMS
---

## Delivery confirmations and incoming SMS (answers)
To receive dlr reports, please contact us with your DELIVERY_URL address of your script or DELIVERY_EMAIL address. Delivery reports are sent to DELIVERY_URL via HTTP method GET. Check the [table of parameters](#delivery-confirmation-parameters) for this command. See also “AppID” in the [table of parameters for bulk SMS with same text.](http-low-level-api-send-bulk-sms-same-text.md#send-bulk-sms-with-same-text-parameters)

## Request URL address
The URL used to send the HTTP requests: https://api.bulkgate.com/http/

### Delivery confirmation: Parameters

| PARAMETER NAME | VALUE | MANDATORY |
|:--- |:--- |:--- |
|“status”	|See the [table with delivery confirmation status](#delivery-confirmation-status)|	Yes|
|“smsID”	|Unique smsID of message	|No|
|“price”|	Price of SMS in credits	|No|
|“from”	|Only if status=10, SenderID of incoming SMS in international format|	No|
|“message”|	Only if status=10, Text of incoming SMS in UTF-8 enconding|	No|


### Delivery confirmation: Status

|STATUS|	DESCRIPTION|
|:--- |:--- |
|1|	SMS successfully delivered|
|2|	SMS buffered on SMSC. SMS will be delivered later. Recipient is unavailable.|
|3	|SMS not delivered. Unknown/unavailable recipient.|
|6	|SMS accepted by provider (this status is not enabled by default, contact us for subscribe)|
|8	|SMS message expired|
|10	|Incoming SMS or SMS answer (contact us for more details)|
