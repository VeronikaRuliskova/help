---
title: Send SMS command 1 - same text
---

## Send SMS command 1 – same text to one or more numbers
It allows to send a short text message with the same text to one or more recipients. The list of parameters for this command is shown in table 1a. To send the message to several recipients, assign the value of parameter ”number” with telephone numbers separated with semicolon. The maximum number of recipients of each request is unlimited, however, in order to minimize the potential error in the HTTP protocol, limiting the value around 100 recipients is recommended.

## Request URL address
The URL used to send the HTTP requests:
https://api.bulkgate.com/http/

### TABLE 1a - SEND SMS COMMAND PARAMETERS

| Parameter name | Value | Mandatory | Multiple (separated by semicolon) |
|:--- |:--- |:--- |:--- |
| "action" | "sendsmsall" |	Yes |	No |
| “username” |	Wallet username (see wallet credentials after login) |	Yes	| No |
| “password” | Wallet password (see wallet credentials after login) |	Yes	| No |
| “number” |	Recipient number in international format, no leading zeros or a “+” sign, e.g. 447971796595 (For multiple recipients use semicolon as separator) |	Yes |	Yes |
| “data”	| Text of SMS message (max. 612 characters, or 268 characters if Unicode is used), UTF-8 enconding | Yes |	No |
| “unicode” |	“1” for Unicode SMS |	No | No |
| “flash”	| “1” for flash SMS	| No |	No |
| “sender”	| Sender of SMS (number in international format, no leading zeros or a “+” sign, e.g. 447971796595 or text max. 11 characters, e.g. “eshop.com”) |	No |	Yes |
| “isms”	| SMS gateway (default 0, value 0 – 4) – login to the BulkGate Portal and see this parameter in the pricelist |	No |	Yes |
| “datelater”	| Scheduled SMS – number of seconds since January 1 1970 00:00:00 GMT |	No |	No |
| “AppID” |	e.g.: 123123, it allows to use one account for more applications, to receive delivery confirmations to different  DELIVERY_URL or DELIVERY_EMAIL addresses	| No |	No |
| “show_json” |	“1” for response in json format |	No |	No |
| “campainID” |	Campaign  ID for sms sorting in reports and sms history |	No |	No |
| “coding”	| If “data” is not in UTF-8, e.g.: ISO-8859-1	| No |	No |
| “sortkey”	| Text key for sorting SMS history and SMS replies	| No |	No |


**Example request:**
`action=sendsmsall&username=testuser&password=test123&number=420606123456;420607123456&data=Hello`

Response to this command may be:
- In case of success:
  - `<stat>1</stat><info>2556b1d0-5ced-11e3-8a4f-00000a0a0211</info>`
  - Where `1` is status (see table 2)
  - **2556b1d0-5ced-11e3-8a4f-00000a0a0211** is unique smsID of message
 
- In case of error:
  - `<stat>3</stat><info>10</info>`
  - Where `3` is status (see table 2)
  - 10 is error reason (see table 3)

- If a message was sent to several recipients, each message response is separated by:
  - **QQQ___QQQ**

e.g.: `<stat>1</stat><info>6b1d01231231231</info>QQQ___QQQ<stat>3</stat><info>9</info>QQQ___QQQ<stat>1</stat><info>36b1d01231231231eSAa</info>`


### TABLE 2 - SEND SMS COMMAND RESPONSE STATUS

| Status	| Description |
|:--- |:--- |
| 1 |	SMS was sent |
| 11 |	SMS saved to SMS server outbox, possible connection problems between SMS server and SMS operator, the message will be sent again in one minute |
| 111	| SMS was saved, SMS will be sent in scheduled time of delivery, set by parameter “datelater” |
| 3	| Error, see table 3 for error reasons |
| 4	| Login error |


### TABLE 3 - SEND SMS COMMAND ERROR REASONS

| Error	| Description |
|:--- |:--- |
| “9”	| Wrong number or unavailable network |
| “10” |	Low credit balance |
| “15”	| Unauthorized numeric sender ID |
| “22”	| Unicode is not supported |
| “23”	| Message duplicity |
| “error”	| Other error – username, password, SMS text or recipient number is not present |
