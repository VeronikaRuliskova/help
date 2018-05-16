---
title: Ověření zůstatku kreditu
---

## “info” action
Umožňuje ověřit zůstatek kreditu prostřednictvím požadavku HTTP. 

Podívejte se na [tabulku parametrů](#odeslání-hromadné-sms-s-rozdílným-textem-parametry) pro tento příkaz.

## Požadavek adresy URL
Adresa URL používaná k odeslání požadavků HTTP: 
https://api.bulkgate.com/http/

### Ověření zůstatku kreditu: parametry
|NÁZEV PARAMETRU|	HODNOTA|	POVINNÝ|
|:--- |:--- |:--- |
|“action”	|“info”|	Ano|
|“username”|	Přihlašovací jméno uživatele|	Ano|
|“password”|	Heslo uživatele	|Ano|
|“show_json”|	“1” pro odpověď ve formátu json	|Ne|

**Příklad požadavku:**
``` xml
action=sendsms&username=testuser&password=test123&number=420606123456&data=Ahoj
```

Reakce na tento příkaz může být:

**V případě úspěchu:**
``` xml
<stat>1</stat>
<info>5430.620</info>
```
- Kde `1` je stav: OK
- **5430.620** je kreditní zůstatek

**V případě chyby:**
``` xml
<stat>3</stat>
<info>error</info>
```
-	Kde `3` is stav 
