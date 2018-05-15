---
title: Send Bulk SMS - different text
---

## “sendsmsall2” action
It allows to send a short text message with different texts to one or more recipients. 

## Request URL address
The URL used to send the HTTP requests:
https://api.bulkgate.com/http/

### Table 1b - Send Bulk SMS with Different Text: Parameters

| Parameter name	| Value |	Mandatory	| Multiple (separated by semicolon) |
|:--- |:--- |:--- |:--- |
|“action”|	“sendsmsall2”|	Yes|	No|
|“username”|	Wallet username (see wallet credentials after login)|	Yes|	No|
|“password”|	Wallet password (see wallet credentials after login)|	Yes|	No|
|“number”	|Recipient number in international format, no leading zeros or a “+” sign, e.g. 447971796595 (For multiple recipients use semicolon as separator)|	Yes	|Yes|
|“data0 - dataN”|	Text of SMS message (max. 612 characters, or 268 characters if Unicode is used), UTF-8 enconding|	Yes|	No|
|“unicode”	|“1” for Unicode SMS|	No|	No|
|“flash”	|“1” for flash SMS	|No|	No|
|“sender”	|Sender of SMS (number in international format, no leading zeros or a “+” sign, e.g. 447971796595 or text max. 11 characters, e.g. “eshop.com”)|	No|	Yes|
|“isms”	|SMS gateway (default 0, value 0 – 4) – login to the BulkGate Portal and see this parameter in the pricelist|	No|	Yes|
|“datelater”	|Scheduled SMS – number of seconds since January 1 1970 00:00:00 GMT	|No	|No|
|“AppID”|	e.g.: 123123, it allows to use one account for more applications, to receive delivery confirmations to different DELIVERY_URL or DELIVERY_EMAIL addresses	|No|	No|
|“show_json”|	“1” for response in json format|	No|	No|
|“campainID”	|Campaing ID for SMS sorting in reports and SMS history|	No|	No|
|“coding”|	If “data” is not in UTF-8, e.g.: ISO-8859-1|	No|	No|
|“sortkey”	|Text key for sorting SMS history and SMS replies	|No	|No|

**Example request:**
`action=sendsmsall2&username=testuser&password=test123&number=420606123456;420607123456&data0=Hello1&data1=Hello2`

Response to this command is the same as in [“sendsmsall” action] for Bulk SMS with same text (send-bulk-sms-same-text.md#sendsmsall-action)

