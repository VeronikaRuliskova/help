---
title: Poslat hromadnou SMS - stejný text
---

## akce “sendsmsall”
Umožňuje poslat SMS zprávu se stejným textem jednomu nebo více příjemcům. 

Podívejte se na [tabulku parametrů](#odeslání-hromadné-sms-se-stejným-textem-parametry) pro tento příkaz. Pro odeslání zprávy několika příjemcům, zadejte hodnotu parametru “number” s telefonními čísly oddělenými středníkem. Maximální počet příjemců pro každou žádost je neomezený.

## API URL
``` url
https://api.bulkgate.com/http/
```

### Odeslání hromadné SMS se stejným textem: parametry
|NÁZEV PARAMETRU|	HODNOTA|	POVINNÝ|	HROMADNÉ POUŽITÍ (oddělení středníkem)|
|:--- |:--- |:--- |:--- |
|action|“sendsmsall”|	Ano|	Ne|
|username|	Uživatelské jméno peněženky (po přihlášení si zkontrolujte přihlašovací údaje vaší peněženky)	|Ano	|Ne|
|password|	Heslo peněženky (po přihlášení si zkontrolujte přihlašovací údaje vaší peněženky)	|Ano|	Ne|
|number|	Číslo příjemce v mezinárodním formátu, žádná nula v popředí nebo znaménko “+”, například `420772423914` (Pro hromadné použití použijte středník jako separátor)|	Ano|	Ano|
|data|	Text SMS zprávy (max. 612 znaků, nebo 268 znaků, jestliže je aktivován Unicode), UTF-8 kódování	|Ano|	Ne|
|unicode|	“1” pro SMS Unicode	|Ne	|Ne|
|flash|	“1” pro Flash SMS|	Ne|	Ne|
|sender|	Odesílatel SMS (číslo v mezinárodním formátu, žádná nula v popředí nebo znaménko “+”, například `420772423914`, nebo text s max. počtem 11 znaků, například “`eshop.cz`”). **`"isms" parametr`** je povinný pro používání textového odesílatele. Pro vybrání správného "isms" parametru se přihlašte do Portálu a zobrazte si ceník. Hodnota "isms" parametr se zobrazí, když najedete na ikonku klíče pro vývojaře	|Ne|	Ano|
|isms|SMS brána (výchozí 0, hodnota 0 – 4) – přihlaste se na BulkGate Portál a podívejte se na tento parametr v ceníku 	|Ne	|Ano|
|datelater|	Plánovaná SMS – počet sekund od 1. ledna 1970 00:00:00 GMT|	Ne	|Ne|
|AppID|například: 123123, umožňuje použít více účtů pro více aplikací, přijímat potvrzení o doručení na různé adresy DELIVERY_URL nebo DELIVERY_EMAIL|	Ne	|Ne|
|show_json|	“1” pro odpověď ve formátu json|	Ne	|Ne|
|campainID|	ID kampaně pro třídění SMS v záznamech a SMS historii	|Ne	|Ne|
|coding|Jestli “data” není v UTF-8, například.: ISO-8859-1|	Ne	|Ne|
|sortkey|	Textové tlačítko pro třídění historie SMS a SMS odpovědí	|Ne	|Ne|

**Příklad požadavku pro odesílání SMS s [textovým odesílatelem](sender-type.md):**
``` xml
action=sendsmsall&username=testuser&password=test123&number=420606123456;420607123456&data=Ahoj&sender=testSender&isms=2
```

Reakce na tento příkaz může být:

**V případě úspěchu:**
``` xml
<stat>1</stat><info>2556b1d0-5ced-11e3-8a4f-00000a0a0211</info>
```
- Kde `1` je stav (viz [tabulka se stavem odpovědi](#odeslat-hromadnou-sms-se-stejným-textem-stav-odpovědi))
-	**2556b1d0-5ced-11e3-8a4f-00000a0a0211** je unikátní smsID zprávy

**V případě chyby:**
``` xml
<stat>3</stat><info>10</info>
```
- Kde `3` je stav (viz [tabulka se stavem odpovědi](#odeslat-hromadnou-sms-se-stejným-textem-stav-odpovědi))
- Kde `10` je důvod chyby (viz [tabulka s chybami](#odeslat-hromadnou-sms-se-stejným-textem-důvody-chyby))

Pokud byla zpráva odeslána několika příjemcům, každá odpověď na zprávu je oddělena: 
 - **QQQ___QQQ**
 
**Například:**
``` xml
<stat>1</stat><info>6b1d01231231231</info>QQQ___QQQ<stat>3</stat><info>9</info>
```

### Odeslat hromadnou SMS se stejným textem: stav odpovědi
|STAV|	POPIS|
|:--- |:--- |
|1	|SMS byla odeslána|
|11	|SMS byla uložena do schránky SMS serveru, možné problémy s připojením mezi SMS serverem a SMS operátorem, zpráva bude odeslána znovu za minutu|
|111|	SMS byla uložena, SMS bude odeslána v plánovaném čase dodání nastaveném parametrem "datelater"|
|3	|Chyba, viz [tabulka s chybami](#odeslat-hromadnou-sms-se-stejným-textem-důvody-chyby)|
|4	|Chyba přihlášení|


### Odeslat hromadnou SMS se stejným textem: důvody chyby
|CHYBA|	POPIS|
|:--- |:--- |
|9|Špatné číslo, nebo nedostupná síť|
|10|Nízký kreditní zůstatek|
|15|Neautorizované ID číselného odesílatele|
|22|Unicode není podporován|
|23|Duplicita zprávy|
|error|	Jiná chyba - uživatelské jméno, heslo, text SMS nebo číslo není přitomno|
