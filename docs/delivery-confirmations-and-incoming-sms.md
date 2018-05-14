---
title: Delivery confirmations and incoming SMS
---

## 4 	Delivery confirmations and incoming SMS (answers)
To receive dlr reports, please contact us with your DELIVERY_URL address of your script or DELIVERY_EMAIL address. Delivery reports are sent to DELIVERY_URL via HTTP method GET, see table 7. See also “AppID” table 1a.

### TABLE 7 - DELIVERY CONFIRMATION PARAMETERS

|Parameter name	|Value|	Mandatory|
|:--- |:--- |:--- |
|“status”	|See table 8|	Yes|
|“smsID”	|Unique smsID of message	|No|
|“price”|	Price of SMS in credits	|No|
|“from”	|Only if status=10, SenderID of incoming SMS in international format|	No|
|“message”|	Only if status=10, Text of incoming SMS in UTF-8 enconding|	No|


### TABLE 8 - DELIVERY CONFIRMATION STATUS

|Status|	Description|
|:--- |:--- |
|1|	SMS successfully delivered|
|2|	SMS buffered on SMSC. SMS will be delivered later. Recipient is unavailable.|
|3	|SMS not delivered. Unknown/unavailable recipient.|
|6	|SMS accepted by provider (this status is not enabled by default, contact us for subscribe)|
|8	|SMS message expired|
|10	|Incoming SMS or SMS answer (contact us for more details)|
