---
title: Low Level API
---

# 1 	`HTTP API Specification scope`
The aim of this document is to describe the API that is available for short messages sending over the bulkgate.com interface via HTTP requests.

# 2 	`HTTP API Description`
API supports HTTP methods GET and POST, where POST is the preferred method because of the limitations of the GET method (max. length of URL address is limited)

## 2.1 	HTTP request
Each HTTP GET/POST request that is sent corresponds with a command of the API. The body of each HTTP request is composed of a list of pairs [name,value], according to the standard application/x-www-form-encoded. Each pair represents a parameter of the command. Each command has a different set of parameters, as it will be described below. All of them share the first parameter, named “action”, referring to the type of command which is being used.

## 2.2 	Request URL address
The URL used to send the HTTP requests:
https://api.bulkgate.com/http/

## 2.3 	Character encoding
The parameters that are sent in the body of the HTTP GET/POST request must be codified with the “UTF-8” charset.
 
## 2.4 	Request response
Each HTTP request is associated with a response from the HTTP server, which varies depending on the sent command (action). In the following sections the response for each command is detailed. At any case, before analyzing the response, it is needed to check that the status code returned by the HTTP server is 200, otherwise, rest of the response will not be adjusted to the expected patterns. As a preventive mechanism, it is recommended to establish a maximum timeout, so if response is not received before expiring it, the HTTP connection is closed, and the request is reattempted again. The response to each HTTP request is encoded in charset “UTF-8.”

# `3 	Request API commands`
Commands available in the HTTP API are detailed in the following sections. For every command (action), a table is presented with parameters that compose the command. Each parameter can be mandatory or optional, and in some cases can be assigned with multiple values separated by semicolon.

## 3.1 	Send SMS command – promotional/marketing SMS
It allows to send a short text message with the same text to one or more telephone number recipients. This command has the list of parameters shown in table 1a. To send the message to several recipients, assign the value of parameter ”number” with telephone numbers separated with semicolon. The maximum number of recipients of each request is unlimited, however, in order to minimize the effects of a potential error in the HTTP protocol, limiting the value around 100 recipients is recommended.


**TABLE 1a - SEND SMS COMMAND PARAMETERS**

| Parameter name | Value | Mandatory | Multiple (separated by semicolon) |
|:--- |:--- |:--- |:--- |
| "action" | "sendsmsall" |	Yes |	No |
| “username” |	Wallet username (see wallet credentials after login) |	Yes	| No |
| “password” | Wallet password (see wallet credentials after login) |	Yes	| No |
| “number” |	Recipient number in international format, no leading zeros or a “+” sign, e.g. 447971796595 (For multiple recipients use semicolon as separator) |	Yes |	Yes |
| “data”	| Text of SMS message (max. 612 characters, or 268 characters if unicode is used), UTF-8 enconding | Yes |	No |
| “Unicode” |	“1” for unicode SMS |	No | No |
| “flash”	| “1” for flash SMS	| No |	No |
| “sender”	| Sender of SMS (number in international format, no leading zeros or a “+” sign, e.g. 447971796595 or text max. 11 characters, e.g. “eshop.com”) |	No |	Yes |
| “isms”	| SMS gateway (default 0, value 0 – 4) – login to the BulkGate Portal and see this parameter in the pricelist |	No |	Yes |
| “datelater”	| Scheduled SMS – number of seconds since January 1 1970 00:00:00 GMT |	No |	No |
| “AppID” |	e.g.: 123123, it allows to use one account for more applications, to receive delivery confirmations to different  DELIVERY_URL or DELIVERY_EMAIL addresses	| No |	No |
| “show_json” |	“1” for response in json format |	No |	No |
| “campainID” |	Campain ID for sms sorting in reports and sms history |	No |	No |
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


**TABLE 2 - SEND SMS COMMAND RESPONSE STATUS**

| Status	| Description |
|:--- |:--- |
| 1 |	SMS was sent |
| 11 |	SMS saved to SMS server outbox, possible connection problems between SMS server and SMS operator, the message will be sent again in one minute |
| 111	| SMS was saved, SMS will be sent in scheduled time of delivery, set by parameter “datelater” |
| 3	| Error, see table 3 for error reasons |
| 4	| Login error |


**TABLE 3 - SEND SMS COMMAND ERROR REASONS**

| Error	| Description |
|:--- |:--- |
| “9”	| Wrong number or unavailable network |
| “10” |	Low customer credit |
| “15”	| Unauthorized numeric sender ID |
| “22”	| Unicode is not supported |
| “23”	| Message duplicity |
| “error”	| Other error – username, password, SMS text or recipient number is not present |


## 3.2 	Send SMS 2 command – promotional/marketing SMS
It allows to send a short text message with different texts to one or more telephone number recipients. 


**TABLE 1b - SEND SMS 2 COMMAND PARAMETERS**

| Parameter name	| Value |	Mandatory	| Multiple (separated by semicolon) |
|:--- |:--- |:--- |:--- |
|“action”|	“sendsmsall2”|	Yes|	No|
|“username”|	Wallet username (see wallet credentials after login)|	Yes|	No|
|“password”|	Wallet password (see wallet credentials after login)|	Yes|	No|
|“number”	|Recipient number in international format, no leading zeros or a “+” sign, e.g. 447971796595 (For multiple recipients use semicolon as separator)|	Yes	|Yes|
|“data0 - dataN”|	Text of SMS message (max. 612 characters, or 268 characters if unicode is used), UTF-8 enconding|	Yes|	No|
|“unicode”	|“1” for unicode SMS|	No|	No|
|“flash”	|“1” for flash SMS	|No|	No|
|“sender”	|Sender of SMS (number in international format, no leading zeros or a “+” sign, e.g. 447971796595 or text max. 11 characters, e.g. “eshop.com”)|	No|	Yes|
|“isms”	|SMS gateway (default 0, value 0 – 4) – login to the BulkGate Portal and see this parameter in the pricelist|	No|	Yes|
|“datelater”	|Scheduled SMS – number of seconds since January 1 1970 00:00:00 GMT	|No	|No|
|“AppID”|	e.g.: 123123, it allows to use one account for more applications, to receive delivery confirmations to different DELIVERY_URL or DELIVERY_EMAIL addresses	|No|	No|
|“show_json”|	“1” for response in json format|	No|	No|
|“campainID”	|Campain ID for SMS sorting in reports and SMS history|	No|	No|
|“coding”|	If “data” is not in UTF-8, e.g.: ISO-8859-1|	No|	No|
|“sortkey”	|Text key for sorting SMS history and SMS replies	|No	|No|

**Example request:**
`action=sendsmsall2&username=testuser&password=test123&number=420606123456;420607123456&data0=Hello1&data1=Hello2`

Response to this command is same as 3.1.


## 3.3 	Send SMS 3 command – transactional SMS
It allows to send a text short message to one telephone number recipients. This command has the list of parameters shown in table 1c. 


**TABLE 1c - SEND SMS COMMAND PARAMETERS**

|Parameter name	|Value|	Mandatory|	Multiple (separated by semicolon)|
|:--- |:--- |:--- |:--- |
|“action”	|“sendsms”|	Yes|	No|
|“username”|	Wallet username (see wallet credentials after login)|	Yes|	No|
|“password”	|Wallet password (see wallet credentials after login)	|Yes|	No|
|“number”	|Recipient number in international format, no leading zeros or a “+” sign, e.g. 447971796595 	|Yes|	No|
|“data”	|Text of SMS message (max. 612 characters, or 268 characters if unicode is used), UTF-8 enconding	|Yes|	No|
|“unicode”	|“1” for unicode SMS	|No|	No|
|“flash”	|“1” for flash SMS|	No|	No|
|“sender”|	Sender of SMS (number in international format, no leading zeros or a “+” sign, e.g. 447971796595 or text max. 11 characters, e.g. “eshop.com”)	|No	|No|
|“isms”	|SMS gateway (default 0, value 0 – 4) – login to the BulkGate Portal and see this parameter in the pricelist	No	No
|“AppID”|	e.g.: 123123, it allows to use one account for more applications, to receive delivery confirmations to different  DELIVERY_URL or DELIVERY_EMAIL addresses|	No	|No|
|“show_json”	|“1” |for response in json format|	No|	No|
|“coding”|	If “data” is not in UTF-8, e.g.: ISO-8859-1|	No|	No|
|“sortkey”|	Text key for sorting SMS history and SMS replies|	No|	No|


**Example request:**
`action=sendsms&username=testuser&password=test123&number=420606123456&data=Hello`

Response to this command may be:
- In case of success:
  - `<stat>1</stat><info>2556b1d0-5ced-11e3-8a4f-00000a0a0211</info`
  - Where `1` is status (see table 2)
  - **2556b1d0-5ced-11e3-8a4f-00000a0a0211** is unique smsID of message
 
- In case of error:
  - `<stat>3</stat><info>10</info>`
  - Where `3` is status (see table 2)
  - 10 is error reason (see table 3)

