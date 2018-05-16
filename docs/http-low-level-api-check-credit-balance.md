---
title: Check credit balance
---

## “info” action
It allows to check credit balance via HTTP request. 

See the [table of parameters](#check-credit-balance-parameters) for this command.

## Request URL address
The URL used to send the HTTP requests:
https://api.bulkgate.com/http/

### Check Credit Balance: Parameters

| PARAMETER NAME | VALUE | MANDATORY |
|:--- |:--- |:--- |
|“action”	| “info” |	Yes|
|“username”	|User login name|	Yes|
|“password”|	User password	|Yes|
|“show_json”|	“1” for response in json format|	No|


Response to this command may be:

**In case of success:**
``` url
<stat>1</stat>
<info>5430.620</info>
```
 - Where `1` is status: OK
 - **5430.620** is credit balance
 

**In case of error:**
``` url
<stat>3</stat>
<info>error</info>
```
 - Where `3` is error status
