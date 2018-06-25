---
title: Specifikace
---


## API URL
Adresa URL používaná k odeslání požadavků HTTP:
``` url
https://portal.bulkgate.com/api/1.0/simple/transactional
```

### Podporované HTTP metody
- [GET](http-simple-transactional-get.md#metoda-get)
- [POST - application/x-www-form-urlencoded](http-simple-transactional-post-form.md#metoda-post---applicationx-www-form-urlencoded)
- [POST - application/json](http-simple-transactional-post-json.md#metoda-post---applicationjson)

> Zneužití [transakční SMS](difference-promotional-transactional-sms.md#transakČnÍ-sms) pro propagační/marketingové účely je **přísně zakázáno!** Musí být použito pouze pro informační účely - jako informační SMS.

## Tabulka s parametry

| NÁZEV PARAMETRU	| HODNOTA|	POVINNÝ| VÝCHOZÍ HODNOTA|
|:--- |:--- |:--- |:--- |
|application_id| [Aplikační identifikátor](api-administration.md#co-je-application-id) |**Ano**|-| 
|application_token| [Aplikační ověřovací token](api-tokens.md#co-je-api-token)	|**Ano**|-|
|number| Číslo příjemce	|**Ano**|-|
|text| Text SMS zprávy (max. 612 znaků, nebo 268 znaků, jestliže je aktivován Unicode), UTF-8 kódování	|**Ano**|-|
|unicode	|`Yes`/`true`/`1` pro Unicode SMS, `no`/`false`/`0` pro 7bit SMS|Ne|`false`|
|flash| `Yes`/`true`/`1` pro Flash SMS| Ne |`false`|
|sender_id|ID odesílatele, viz [typ ID odesílatele](#typ-id-odesílatele-sender_id)| Ne |`gSystem`|
|sender_id_value| Hodnota odesílatele `gOwn` nebo `gText`| Ne |`null`|
|country| Poskytněte čísla příjemců v mezinárodním formátu (s prefixem, např. `420`), nebo přidejte [kód země ve formátu ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) (`775123456` + `CZ` = `420775123456`). Podívejte se na příklad požadavku země. Pokud je hodnota **`null`**, je použita země z vašeho uživatelského profilu. | Ne |`null`|

### Typ ID odesílatele `sender_id`

| HODNOTA| VÝZNAM|
|:--- |:---|
|`gSystem` |Systémové číslo| 
|`gShort` |Short Code| 
|`gText` |Textový odesílatel| 
|`gOwn` |Vlastní číslo (vyžaduje ověření čísla)| 
| `<int>` |BulkGate Profil ID| 

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
