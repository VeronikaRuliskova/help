---
title: Send SMS notification
---

## “sendsms” action
It allows to send a text short message to one recipient (one phone number). 

See the [table of parameters](#send-sms-notification-parameters) for this command.

> It is strictly prohibited to exploit  for promotional/marketing uses.

> It is **strictly prohibited** to exploit SMS notification for promotional/marketing uses. It must be used for notification purposes only - as a [transactional SMS.](difference-promotional-transactional-sms.md#transactional-sms)

## API URL
``` url
https://api.bulkgate.com/http/
```

### Send SMS notification: Parameters

| PARAMETER NAME | VALUE | MANDATORY | MULTIPLE (separated by semicolon) |
|:--- |:--- |:--- |:--- |
|action|“sendsms”|	Yes|	No|
|username|	Wallet username (see wallet credentials after login)|	Yes|	No|
|password|Wallet password (see wallet credentials after login)	|Yes|	No|
|number|Recipient number in international format, no leading zeros or a “+” sign, e.g. 447971796595 	|Yes|	No|
|data|Text of SMS message (max. 612 characters, or 268 characters if Unicode is used), UTF-8 enconding	|Yes|	No|
|unicode|“1” for Unicode SMS	|No|	No|
|flash|“1” for flash SMS|	No|	No|
|sender|	Sender of SMS (number in international format, no leading zeros or a “+” sign, e.g. 447971796595 or text max. 11 characters, e.g. “eshop.com”)	|No	|No|
|isms|SMS gateway (default 0, value 0 – 4) – login to the BulkGate Portal and see this parameter in the pricelist	|No	|No|
|AppID|	e.g.: 123123, it allows to use one account for more applications, to receive delivery confirmations to different  DELIVERY_URL or DELIVERY_EMAIL addresses|	No	|No|
|show_json|“1” for response in json format|	No|	No|
|coding|	If “data” is not in UTF-8, e.g.: ISO-8859-1|	No|	No|
|sortkey|	Text key for sorting SMS history and SMS replies|	No|	No|


**Example request:**
``` url
action=sendsms&username=testuser&password=test123&number=420606123456&data=Hello
```

Response to this command may be:

**In case of success:**
``` url
<stat>1</stat><info>2556b1d0-5ced-11e3-8a4f-00000a0a0211</info>
```

 - Where `1` is status (see the [table with response status](http-low-level-api-send-bulk-sms-same-text.md#send-bulk-sms-with-same-text-response-status))
 - **2556b1d0-5ced-11e3-8a4f-00000a0a0211** is unique smsID of message
 
 **In case of error:**
``` url
<stat>3</stat><info>10</info>
```
 - Where `3` is status (see the [table with response status](http-low-level-api-send-bulk-sms-same-text.md#send-bulk-sms-with-same-text-response-status))
 - 10 is error reason (see the table with [error reasons](http-low-level-api-send-bulk-sms-same-text.md#send-bulk-sms-with-same-text-error-reasons))
