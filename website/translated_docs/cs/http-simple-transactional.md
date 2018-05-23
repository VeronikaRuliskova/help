---
title: Transakční SMS
---


## API URL
Adresa URL používaná k odeslání požadavků HTTP:
``` url
https://portal.bulkgate.com/api/1.0/simple/transactional
```

### Tabulka s parametry

| NÁZEV PARAMETRU	| HODNOTA|	POVINNÝ| VÝCHOZÍ HODNOTA|
|:--- |:--- |:--- |:--- |
|application_id| Aplikační identifikátor |**Ano**|-| 
|application_token| Aplikační ověřovací token	|**Ano**|-|
|number| Číslo příjemce	|**Ano**|-|
|text| Text SMS zprávy (max. 612 znaků, nebo 268 znaků, jestliže je aktivován Unicode), UTF-8 kódování	|**Ano**|-|
|unicode	|`yes`/`true`/`1` pro Unicode SMS, `no`/`false`/`0` pro 7bit SMS|Ne|`false`|
|flash| `yes`/`true`/`1` pro Flash SMS| Ne |`false`|
|sender_id|ID odesílatele, viz [typ ID odesílatele](#typ-id-odesilatele)| Ne |`gSystem`|
|sender_id_value| Hodnota odesílatele `gOwn` nebo `gText`| Ne |`null`|
|country| Poskytněte čísla příjemců v mezinárodním formátu (s prefixem, např. `420`), nebo přidejte [kód země ve formátu ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) (`775123456` + `CZ` = `420775123456`). Podívejte se na příklad požadavku země. Pokud je hodnota **`null`**, je použita země z vašeho uživatelského profilu. | Ne |`null`|

### Typ ID odesílatele `sender_id`

| NÁZEV PARAMETRU| VÝCHOZÍ HODNOTA
|:--- |:---|
|gSystem |Systémové číslo| 
|gShort |Short Code| 
|gText |Textový odesílatel| 
|gOwn |Vlastní číslo (vyžaduje ověření čísla)| 
| `<int>` |BulkGate Profil ID| 


**Příklad úplného požadavku:**
``` url
https://portal.bulkgate.com/api/1.0/simple/promotional
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
https://portal.bulkgate.com/api/1.0/simple/promotional
    ?application_id=<APPLICATION_ID>
    &application_token=<APPLICATION_TOKEN>
    &number=777777777
    &text=test_sms
    &country=cz
```

Odpověď na tento příkaz může být:


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
