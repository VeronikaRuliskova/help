---
title: Check credit balance
---


## API URL
The URL used to send the HTTP requests:
``` url
https://portal.bulkgate.com/api/1.0/simple/info
```

### Parameters table

| PARAMETER NAME | VALUE | MANDATORY | DEFAULT VALUE |
|:--- |:--- |:--- |:--- |
|application_id|[Application indentificator](api-administration.md#what-is-application-id) |**Yes**|-| 
|application_token|[Application authentication token](api-tokens.md#what-is-an-api-token)	|**Yes**|-|

## Response to this command may be:

**In case of success:**
``` json
{
    "data": {
        "wallet": "bg1805151838000001",
        "credit": 215.8138,
        "currency": "credits",
        "free_messages": 51,
        "datetime": "2018-06-13T09:57:21+02:00"
    }
}
```
 
**In case of error:**
``` json 
{
  "error": "authentication_failed",
  "code": 401
}
```
