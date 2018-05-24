---
title: Info
---


## API URL
Adresa URL používaná k odeslání požadavků HTTP: https://portal.bulkgate.com/api/1.0/simple/promotional

### Podporované HTTP metody
- [GET](http-simple-promotional-get.md#metoda-get)
- [POST - application/x-www-form-urlencoded](http-simple-promotional-post-form.md#metoda-post---applicationx-www-form-urlencoded)
- [POST - application/json](http-simple-promotional-post-json.md#method-post---applicationjson)

### Tabulka s parametry

| NÁZEV PARAMETRU	| HODNOTA|	POVINNÝ| VÝCHOZÍ HODNOTA|
|:--- |:--- |:--- |:--- |
|application_id| Aplikační identifikátor |**Ano**|-| 
|application_token| Aplikační ověřovací token	|**Ano**|-|
|number| Číslo příjemce	|**Ano**|-|
|text| Text SMS zprávy (max. 612 znaků, nebo 268 znaků, jestliže je aktivován Unicode), UTF-8 kódování	|**Ano**|-|
|unicode	|Yes/true/1 pro Unicode SMS, no/false/0 pro 7bit SMS|Ne|false|
|flash| Yes/true/1 pro Flash SMS| Ne |false|
|sender_id|ID odesílatele, viz [typ ID odesílatele](#typ-id-odesilatele-sender_id)| Ne |gSystem|
|sender_id_value| Hodnota odesílatele Own nebo gText| Ne |null|
|country| Poskytněte čísla příjemců v mezinárodním formátu (s prefixem, např. 420), nebo přidejte [kód země](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) (775123456 + CZ = 420775123456). Podívejte se na příklad požadavku země. Pokud je hodnota **`null,`** poté se použije vaše nastavená časová zóna pro doplnění informace | Ne |null|
|schedule| Naplánujte čas a datum odesílání v [unix timestamp,](https://en.wikipedia.org/wiki/Unix_time) nebo [ISO 8601.](https://en.wikipedia.org/wiki/ISO_8601) Podívejte se na níže uvedené příklady | Ne |Nyní|

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
    &number=420777777777;420775123456;606123456
    &text=test_sms
    &unicode=yes
    &sender_id=gText
    &sender_id_value=BulkGate
    &country=cz
    &schedule=2018-05-14T18:30:00-01:00
```

**Příklad požadavku země:**
``` url
https://portal.bulkgate.com/api/1.0/simple/promotional
    ?application_id=<APPLICATION_ID>
    &application_token=<APPLICATION_TOKEN>
    &number=606123456;420777777777
    &text=test_sms
    &country=gb
```

**Příklad požadavku ISO 8601:**
``` url
https://portal.bulkgate.com/api/1.0/simple/promotional
    ?application_id=<APPLICATION_ID>
    &application_token=<APPLICATION_TOKEN>
    &number=420775123456;420606123456
    &text=test_sms
    &schedule=2018-05-14T18:30:00-01:00
```

**Příklad požadavku unix timestamp:**
``` url
https://portal.bulkgate.com/api/1.0/simple/promotional
    ?application_id=<APPLICATION_ID>
    &application_token=<APPLICATION_TOKEN>
    &number=420775123456;420606123456
    &text=test_sms
    &schedule=1526992636
```

Reakce na tento příkaz může být:

**V případě úspěchu:**
``` json
{
  "data": {
    "total": {
      "price": 0.0522,
      "status": {
        "sent": 0,
        "accepted": 0,
        "scheduled": 2,
        "error": 1
      }
    },
    "response": [
      {
        "status": "scheduled",
        "sms_id": "tmpde1f00539c7",
        "price": 0.0261,
        "credit": 215.81380,
        "number": "420775123456"
      },
      {
        "status": "scheduled",
        "sms_id": "tmpde1f0053f0c",
        "price": 0.0261,
        "credit": 215.81380,
        "number": "420606123456"
      },
      {
        "status": "error",
        "code": 9,
        "error": "Bad number",
        "number": "44771447678"
      }
    ]
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
