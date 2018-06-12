---
title: Ověření zůstatku kreditu
---

## akce “info”
Umožňuje ověřit zůstatek kreditu prostřednictvím HTTP požadavku. 

Podívejte se na [tabulku parametrů](#ověření-zůstatku-kreditu-parametry) pro tento příkaz.

## API URL
``` url
https://api.bulkgate.com/http/
```

### Ověření zůstatku kreditu: parametry
|NÁZEV PARAMETRU|	HODNOTA|	POVINNÝ|
|:--- |:--- |:--- |
|action|“info”|	Ano|
|username|	Přihlašovací jméno uživatele|	Ano|
|password|	Heslo uživatele	|Ano|
|show_json|	“1” pro odpověď ve formátu json	|Ne|

Reakce na tento příkaz může být:

**V případě úspěchu:**
``` xml
<stat>1</stat><info>5430.620</info>
```
- Kde `1` je stav: OK
- **5430.620** je kreditní zůstatek

**V případě chyby:**
``` xml
<stat>3</stat><info>error</info>
```
-	Kde `3` is stav 
