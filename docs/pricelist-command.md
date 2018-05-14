---
title: Pricelist command
---

## Pricelist command
It allows to check price for each country and operator via HTTP request. See table 5.


### TABLE 5 - PRICELIST COMMAND PARAMETERS

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
  - Where `0` is SMS gateway (see parameter “isms” in [table 1a](send-sms-command-1.md#table-1a---send-sms-command-parameters))
  - **Vodafone** is name of network
  - **0.75** is credit cost per SMS
  - **3** is sender ID support (see table 6 and parameter “sender” in [table 1a](send-sms-command-1.md#table-1a---send-sms-command-parameters)) 
  - **39** is Unicode supported (0 is Unicode not supported, see parameter “unicode” in [table 1a](send-sms-command-1.md#table-1a---send-sms-command-parameters))

- In case of error:
  - `<stat>3</stat><info>error</info>`
  - Where `3` is error status


### TABLE 6 – SENDER ID SUPPORT

|Value|	Description|
|:--- |:--- |
|1	|Full alphanumeric senderID support (number in international format or text max. 11 characters)|
|3	|SenderID not supported,  parameter “sender” in [table 1a](send-sms-command-1.md#table-1a---send-sms-command-parameters) will be replaced by system number|
|4	|Alpha senderID supported (text max. 11 characters, e.g. “eshop.com”)|
|5	|Numeric senderID support (number in international format)|
