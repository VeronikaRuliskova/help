---
title: Transakční SMS
---


## API URL
Adresa URL používaná k odeslání požadavků HTTP:
``` url
https://portal.bulkgate.com/api/1.0/simple/transactional
```

### Podporované HTTP metody
- [GET](#metoda-get)
- [POST - application/x-www-form-urlencoded](#metoda-post---applicationx-www-form-urlencoded)
- [POST - application/json](#metoda-post---applicationjson)

## Tabulka s parametry

| NÁZEV PARAMETRU	| HODNOTA|	POVINNÝ| VÝCHOZÍ HODNOTA|
|:--- |:--- |:--- |:--- |
|application_id| Aplikační identifikátor |**Ano**|-| 
|application_token| Aplikační ověřovací token	|**Ano**|-|
|number| Číslo příjemce	|**Ano**|-|
|text| Text SMS zprávy (max. 612 znaků, nebo 268 znaků, jestliže je aktivován Unicode), UTF-8 kódování	|**Ano**|-|
|unicode	|`yes`/`true`/`1` pro Unicode SMS, `no`/`false`/`0` pro 7bit SMS|Ne|`false`|
|flash| `yes`/`true`/`1` pro Flash SMS| Ne |`false`|
|sender_id|ID odesílatele, viz [typ ID odesílatele](#typ-id-odesílatele-sender_id)| Ne |`gSystem`|
|sender_id_value| Hodnota odesílatele `gOwn` nebo `gText`| Ne |`null`|
|country| Poskytněte čísla příjemců v mezinárodním formátu (s prefixem, např. `420`), nebo přidejte [kód země ve formátu ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) (`775123456` + `CZ` = `420775123456`). Podívejte se na příklad požadavku země. Pokud je hodnota **`null`**, je použita země z vašeho uživatelského profilu. | Ne |`null`|

### Typ ID odesílatele `sender_id`

| NÁZEV PARAMETRU| VÝCHOZÍ HODNOTA
|:--- |:---|
|`gSystem` |Systémové číslo| 
|`gShort` |Short Code| 
|`gText` |Textový odesílatel| 
|`gOwn` |Vlastní číslo (vyžaduje ověření čísla)| 
| `<int>` |BulkGate Profil ID| 

## Metoda `GET`

**Příklad úplného požadavku:**
``` url
https://portal.bulkgate.com/api/1.0/simple/transactional
    ?application_id=<APPLICATION_ID>
    &application_token=<APPLICATION_TOKEN>
    &number=420777777777
    &text=test_sms
    &unicode=yes
    &flash=no
    &sender_id=gText
    &sender_id_value=BulkGate
    &country=cz
```

**Příklad požadavku s doplněním prefixu země:**
``` url
https://portal.bulkgate.com/api/1.0/simple/transactional
    ?application_id=<APPLICATION_ID>
    &application_token=<APPLICATION_TOKEN>
    &number=7700900000
    &text=test_sms
    &country=cz
```

## Metoda `POST` - `application/x-www-form-urlencoded`

**Příklad úplného požadavku:**
``` http
POST /api/1.0/simple/transactional HTTP/1.1
Host: portal.bulkgate.com
Content-Type: application/x-www-form-urlencoded
Cache-Control: no-cache

application_id=<APPLICATION_ID>&application_token=<APPLICATION_TOKEN>&number=420777777777&text=test_sms&unicode=yes&flash=no&sender_id=gText&sender_id_value=BulkGate&country=cz
```

**Příklad požadavku s doplněním prefixu země:**
``` http
POST /api/1.0/simple/transactional HTTP/1.1
Host: portal.bulkgate.com
Content-Type: application/x-www-form-urlencoded
Cache-Control: no-cache

application_id=<APPLICATION_ID>&application_token=<APPLICATION_TOKEN>&number=777777777&text=test_sms&country=cz
```

## Metoda `POST` - `application/json`

**Příklad úplného požadavku:**
``` http json
POST /api/1.0/simple/transactional HTTP/1.1
Host: portal.bulkgate.com
Content-Type: application/json
Cache-Control: no-cache

{
    "application_id": "<APPLICATION_ID>", 
    "application_token": "<APPLICATION_TOKEN>", 
    "number": "777777777", 
    "text": "test_sms", 
    "unicode": true,
    "flash": false,
    "sender_id": "gText",
    "sender_id_value": "BulkGate",
    "country": "cz"
}

```

**Příklad požadavku s doplněním prefixu země:**
``` http json
POST /api/1.0/simple/transactional HTTP/1.1
Host: portal.bulkgate.com
Content-Type: application/json
Cache-Control: no-cache

{
    "application_id": "<APPLICATION_ID>", 
    "application_token": "<APPLICATION_TOKEN>", 
    "number": "777777777", 
    "text": "test_sms", 
    "country": "cz"
}
```

## Odpověď na tento příkaz může být:


**V případě úspěchu:**
``` json
{
    "data": {
        "sms_id": "tmpde1bcd4b1d1",
        "price": 0.02,
        "credit": 215.81380,
        "number": "420777777777"
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
