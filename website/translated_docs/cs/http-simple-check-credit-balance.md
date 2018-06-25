---
title: Check credit balance
---


## API URL
Adresa URL používaná k odeslání požadavků HTTP:
``` url
https://portal.bulkgate.com/api/1.0/simple/info
```

### Tabulka s parametry

| NÁZEV PARAMETRU	| HODNOTA|	POVINNÝ| VÝCHOZÍ HODNOTA|
|:--- |:--- |:--- |:--- |
|application_id|[Aplikační identifikátor](api-administration.md#co-je-application-id) |**Ano**|-| 
|application_token|[Aplikační ověřovací token](api-tokens.md#co-je-api-token)	|**Ano**|-|

## Odpověď na tento příkaz může být:

**V případě úspěchu:**
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
 
**V případě chyby:**
``` json 
{
  "error": "authentication_failed",
  "code": 401
}
```
