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


## 3.4 	Check credit command
It allows to check customer credit via HTTP request. See table 4 for parameters.


**TABLE 4 - CHECK CREDIT COMMAND PARAMETERS**

|Parameter name	|Value	|Mandatory|
|:--- |:--- |:--- |
|“action”	| “info” |	Yes|
|“username”	|User login name|	Yes|
|“password”|	User password	|Yes|
|“show_json”|	“1” for response in json format|	No|


Response to this command may be:
- In case of success:
  - `<stat>1</stat><info>5430.620</info>`
  - Where `1` is status OK
  - **5430.620** is customer credit
 

- In case of error:
  - `<stat>3</stat><info>error</info>`
  - Where `3` is error status

## 3.5 	Pricelist command
It allows to check price for each country and operator via HTTP request. See table 5.


**TABLE 5 - PRICELIST COMMAND PARAMETERS**

|Parameter name	|Value|	Mandatory|
|:--- |:--- |:--- |
|“action”|	“dost”|	Yes|
|“username”|	User login name|	Yes|
|“password”|	User password	|Yes|
|“area”	|Prefix of country (e.g. “44” for UK)|	Yes|
|“show_json”|	“1” for response in json format|	No|


Response to this command may be:
- In case of success:
  - `<stat>1</stat><info>0|BT|0.75|3|39;2|BT|0.85|1|39;0|C&W Guernsey|0.75|3|39;2|C&W Guernsey|0.85|1|39;0|Hutchison 3G|0.75|3|39;2|Hutchison 3G|0.85|1|39;0|Jersey Airtel|0.75|3|39;2|Jersey Airtel|0.85|1|39;0|Jersey Telecom|0.75|3|39;2|Jersey Telecom|0.85|1|39;0|Lycamobile|0.75|3|39;2|Lycamobile|0.85|1|39;0|Manx Telecom|0.75|3|39;2|ManxTelecom|0.85|1|39;0|O2|0.75|3|39;2|O2|0.85|1|39;0|Orange|0.75|3|39;2|Orange|0.85|1|39;0|T-mobile|0.75|3|39;2|T-mobile|0.85|1|39;0|Vodafone|0.75|3|39;2|Vodafone|0.85|1|39_5-10:0.04;11-799:0.0372;800-1999:0.0330%1.21</info>`
  - Where _ is the separator of 2 parts. First part defines available SMS gateways, second part defines VAT and credit price in EUR depending on payment amount. Let's explain more first part. If we use semicolon as separator we will get various SMS  gateways and operators. 
  - e.g.:  0|Vodafone|0.75|3|39
  - Where `0` is SMS gateway (see parameter “isms” table 1a)
  - **Vodafone** is name of network
  - **0.75** is credit cost per SMS
  - **3** is sender ID support (see table 6 and parameter “sender” table 1a) 
  - **39** is unicode supported (0 is unicode not supported, see parameter “unicode” table 1a)

- In case of error:
  - `<stat>3</stat><info>error</info>`
  - Where `3` is error status


**TABLE 6 – SENDER ID SUPPORT**

|Value|	Description|
|:--- |:--- |
|1	|Full alphanumeric senderID support (number in international format or text max. 11 characters)|
|3	|SenderID not supported,  parameter “sender” in table 1a will be replaced by system number|
|4	|Alpha senderID supported (text max. 11 characters, e.g. “eshop.com”)|
|5	|Numeric senderID support (number in international format)|

# `4 	Delivery confirmations and incoming SMS (answers)`
To receive dlr reports, please contact us with your DELIVERY_URL address of your script or DELIVERY_EMAIL address. Delivery reports are sent to DELIVERY_URL via HTTP method GET, see table 7. See also “AppID” table 1a.

**TABLE 7 - DELIVERY CONFIRMATION PARAMETERS**

|Parameter name	|Value|	Mandatory|
|:--- |:--- |:--- |
|“status”	|See table 8|	Yes|
|“smsID”	|Unique smsID of message	|No|
|“price”|	Price of SMS in credits	|No|
|“from”	|Only if status=10, SenderID of incoming SMS in international format|	No|
|“message”|	Only if status=10, Text of incoming SMS in UTF-8 enconding|	No|


**TABLE 8 - DELIVERY CONFIRMATION STATUS**

|Status|	Description|
|:--- |:--- |
|1|	SMS successfully delivered|
|2|	SMS buffered on SMSC. SMS will be delivered later. Recipient is unavailable.|
|3	|SMS not delivered. Unknown/unavailable recipient.|
|6	|SMS accepted by provider (this status is not enabled by default, contact us for subscribe)|
|8	|SMS message expired|
|10	|Incoming SMS or SMS answer (contact us for more details)|
