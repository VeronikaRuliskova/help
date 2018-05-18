---
title: Poslat informační SMS
---

## akce “sendsms”
Umožňuje odeslat SMS zprávu jednomu příjemci (na jedno telefonní číslo).

Podívejte se na [tabulku parametrů](#odeslání-informační-sms-parametry) pro tento příkaz.

> Zneužití informační SMS pro propagační účely je přísně zakázáno!

## API URL
https://api.bulkgate.com/http/

### Odeslání informační SMS: parametry
|NÁZEV PARAMETRU|	HODNOTA|	POVINNÝ|	HROMADNÉ POUŽITÍ (oddělení středníkem)|
|:--- |:--- |:--- |:--- |
|action|	“sendsms”|	Ano	|Ne|
|username|	Uživatelské jméno peněženky (po přihlášení si zkontrolujte přihlašovací údaje vaší peněženky)	|Ano	|Ne|
|password|	Heslo peněženky (po přihlášení si zkontrolujte přihlašovací údaje vaší peněženky)|	Ano	|Ne|
|number|Číslo příjemce v mezinárodním formátu, žádná nula v popředí nebo znaménko “+”, například 420772423914	|Ano	|Ne|
|data|	Text SMS zprávy (max. 612 znaků, nebo 268 znaků, jestliže je aktivován Unicode), UTF-8 kódování	|Ano	|Ne|
|unicode|	“1” pro SMS Unicode|	Ne|	Ne|
|flash|	“1” pro Flash SMS|	Ne|	Ne|
|sender|	Odesílatel SMS (číslo v mezinárodním formátu, žádná nula v popředí nebo znaménko “+”, například 420772423914, nebo text s max. počtem 11 znaků, například “eshop.cz”)|	Ne	|Ne|
|isms|SMS brána (výchozí 0, hodnota 0 – 4) – přihlaste se na BulkGate Portál a podívejte se na tento parametr v ceníku |	Ne|	Ne|
|AppID|například: 123123, umožňuje použít více účtů pro více aplikací, přijímat potvrzení o doručení na různé adresy DELIVERY_URL nebo DELIVERY_EMAIL|	Ne|	Ne|
|show_json|	“1” pro odpověď ve formátu json	|Ne	|Ne|
|coding|Jestli “data” není v UTF-8, například.: ISO-8859-1	|Ne	|Ne|
|sortkey|	Textové tlačítko pro třídění historie SMS a SMS odpovědí	|Ne	|Ne|

**Příklad požadavku:**
``` url
action=sendsms&username=testuser&password=test123&number=420606123456&data=Ahoj
```

Reakce na tento příkaz může být:

**V případě úspěchu:**
``` url
<stat>1</stat><info>2556b1d0-5ced-11e3-8a4f-00000a0a0211</info>
```
-	Kde `1` je stav (viz [tabulka se stavem odpovědi](http-low-level-api-send-bulk-sms-same-text.md#odeslat-hromadnou-sms-se-stejným-textem-stav-odpovědi))
-	2556b1d0-5ced-11e3-8a4f-00000a0a0211 je unikátní smsID zprávy

**V případě chyby:**
``` url
<stat>3</stat><info>10</info>
```
-	Kde `3` je stav chyby (viz [tabulka se stavem odpovědi](http-low-level-api-send-bulk-sms-same-text.md#odeslat-hromadnou-sms-se-stejným-textem-stav-odpovědi))
- Kde `10` je důvod chyby (viz [tabulka s chybami](http-low-level-api-send-bulk-sms-same-text.md#odeslat-hromadnou-sms-se-stejným-textem-důvody-chyby))
