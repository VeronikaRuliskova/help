---
title: Poslat hromadnou SMS - rozdílný text
---

## “sendsmsall2” action
Umožňuje poslat krátkou textovou zprávu s rozdílným textem jednomu nebo více příjemcům. 

Podívejte se na [tabulku parametrů](#odeslání-hromadné-sms-s-rozdílným-textem-parametry) pro tento příkaz.

## Požadavek adresy URL
Adresa URL používaná k odeslání požadavků HTTP: 
https://api.bulkgate.com/http/

### Odeslání hromadné SMS s rozdílným textem: parametry
|NÁZEV PARAMETRU|	HODNOTA|	POVINNÝ|	HROMADNÉ POUŽITÍ (oddělení středníkem)|
|:--- |:--- |:--- |:--- |
|“action”|	“sendsmsall2”|	Ano|	Ne|
|“username”	|Uživatelské jméno peněženky (po přihlášení si zkontrolujte přihlašovací údaje vaší peněženky)	|Ano|	Ne|
|“password”|	Heslo peněženky (po přihlášení si zkontrolujte přihlašovací údaje vaší peněženky)	|Ano	|Ne|
|“number”	|Číslo příjemce v mezinárodním formátu, žádná nula v popředí nebo znaménko “+”, například 420772423914 (Pro hromadné použití použijte středník jako separátor)|	Ano|	Ano|
|“data0 - dataN”|	Text SMS zprávy (max. 612 znaků, nebo 268 znaků, jestliže je aktivován Unicode), UTF-8 kódování|	Ano|	Ne|
|“unicode”|	“1” pro SMS Unicode|	Ne	|Ne|
|“flash”|	“1” pro Flash SMS|	Ne|	Ne|
|“sender”|	Odesílatel SMS (číslo v mezinárodním formátu, žádná nula v popředí nebo znaménko “+”, například 420772423914, nebo text s max. počtem 11 znaků, například “eshop.cz”)|	Ne|	Ano|
|“isms”	|SMS brána (výchozí 0, hodnota 0 – 4) – přihlaste se na BulkGate Portál a podívejte se na tento parametr v ceníku |	Ne	|Ano|
|“datelater”	|Plánovaná SMS – počet sekund od 1. ledna 1970 00:00:00 GMT|	Ne	|Ne|
|“AppID”|	například: 123123, umožňuje použít více účtů pro více aplikací, přijímat potvrzení o doručení na různé adresy DELIVERY_URL nebo DELIVERY_EMAIL|	Ne	|Ne|
|“show_json”|	“1” pro odpověď ve formátu json|	Ne|	Ne|
|“campainID”|	ID kampaně pro třídění SMS v záznamech a SMS historii	|Ne|	Ne|
|“coding”|	Jestli “data” není v UTF-8, například.: ISO-8859-1|	Ne|	Ne|
|“sortkey”	|Textové tlačítko pro třídění historie SMS a SMS odpovědí|	Ne|	Ne|

**Příklad požadavku:**
``` xml
action=sendsmsall2&username=testuser&password=test123&number=420606123456;420607123456&data0=Ahoj1&data1=Ahoj2
```

Odpověď na tento příkaz je stejná jako na [odeslání hromadné SMS se stejným textem.](http-low-level-api-send-bulk-sms-same-text.md)
