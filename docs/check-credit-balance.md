---
title: Check credit balance
---

## Check credit command
It allows to check credit balance via HTTP request. See table 4 for parameters.

## Request URL address
The URL used to send the HTTP requests:
https://api.bulkgate.com/http/

### TABLE 4 - CHECK CREDIT COMMAND PARAMETERS

|Parameter name	|Value	|Mandatory|
|:--- |:--- |:--- |
|“action”	| “info” |	Yes|
|“username”	|User login name|	Yes|
|“password”|	User password	|Yes|
|“show_json”|	“1” for response in json format|	No|


Response to this command may be:
- In case of success:
  - `<stat>1</stat><info>5430.620</info>`
  - Where `1` is status: OK
  - **5430.620** is credit balance
 

- In case of error:
  - `<stat>3</stat><info>error</info>`
  - Where `3` is error status
