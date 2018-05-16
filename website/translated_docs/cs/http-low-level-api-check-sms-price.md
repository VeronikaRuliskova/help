---
title: Zjištění ceny SMS
---

## “dost” action
Umožňuje zjistit cenu SMS pro každou zemi a operátora pomocí požadavku HTTP.

Podívejte se na [tabulku parametrů](#odeslání-hromadné-sms-s-rozdílným-textem-parametry) pro tento příkaz.

## URL adresa pro odesílání HTTP požadavků
https://api.bulkgate.com/http/

### Zjištění ceny SMS: parametry
|NÁZEV PARAMETRU|	HODNOTA|	POVINNÝ|
|:--- |:--- |:--- |
|“action”|	“dost”|Ano|
|“username”|	Přihlašovací jméno uživatele|	Ano|
|“password”|	Heslo uživatele|	Ano|
|“area”|	Předčíslí země (např. “420” pro Českou republiku)|	Ano|
|“show_json”|	“1” pro odpověď ve formátu json	|Ne|

Reakce na tento příkaz může být:

**V případě úspěchu:**
``` xml
<stat>1</stat>
<info>
 0|BT|0.75|3|39;
 2|BT|0.85|1|39;
 0|C&W Guernsey|0.75|3|39;
 2|C&W Guernsey|0.85|1|39;
 0|Hutchison 3G|0.75|3|39;
 2|Hutchison 3G|0.85|1|39;
 0|Jersey Airtel|0.75|3|39;
 2|Jersey Airtel|0.85|1|39;
 0|Jersey Telecom|0.75|3|39;
 2|Jersey Telecom|0.85|1|39;
 0|Lycamobile|0.75|3|39;
 2|Lycamobile|0.85|1|39;
 0|Manx Telecom|0.75|3|39;
 2|ManxTelecom|0.85|1|39;
 0|O2|0.75|3|39;
 2|O2|0.85|1|39;
 0|Orange|0.75|3|39;
 2|Orange|0.85|1|39;
 0|T-mobile|0.75|3|39;
 2|T-mobile|0.85|1|39;
 0|Vodafone|0.75|3|39;
 2|Vodafone|0.85|1|39
 _
 5-10:0.04;
 11-799:0.0372;
 800-1999:0.0330
 %1.21
</info>
```

- Kde _ je separátor dvou částí. První část definuje dostupné SMS brány, druhá část definuje DPH a cenu kreditu v Eurech v závislosti na výši platby. Pro podrobnější vysvětlení první části: použijeme-li jako oddělovač středník, získáme různé SMS brány a operátory
- Např.:  0|Vodafone|0.75|3|39
- Kde `0` je SMS brána (podívejte se na parameter “isms”, viz [tabulka parametrů pro hromadnou SMS se stejným textem](http-low-level-api-send-bulk-sms-same-text.md#odeslání-hromadné-sms-se-stejným-textem-parametry))
- **Vodafone** je název sítě
- **0.75** je cena v kreditech za SMS
- **3** je podpora ID odesílatele (podívejte se na tabulku [podpory ID odesílatele,](#podpora-id-odesílatele)  a parameter “sender”  v [tabulce parametrů pro hromadnou SMS se stejným textem](http-low-level-api-send-bulk-sms-same-text.md#odeslání-hromadné-sms-se-stejným-textem-parametry))
- **39** znamená, že Unicode je podporován (0 znamená, že Unicode není podporován, podívejte se na parameter “unicode” v [tabulce parametrů pro hromadnou SMS se stejným textem](http-low-level-api-send-bulk-sms-same-text.md#odeslání-hromadné-sms-se-stejným-textem-parametry))

**V případě chyby:**
``` xml
<stat>3</stat>
<info>error</info>
```
- Kde `3` je stav chyby

### Podpora ID odesílatele
|	HODNOTA|	POPISEK|
|:--- |:--- |
|1	|Plná alfanumerická podpora ID odesílatele (číslo v mezinárodním format, nebo text o max. 11 znacích)|
|3	|ID odesílatel není podporován,  parameter “sender” v tabulce 1a bude nahrazen systémovým číslem|
|4	|Alpha ID odesílatel podporován (text max. 11 znaků, např. “eshop.cz”)|
|5	|Numerická podpora ID odesílatele (číslo v mezinárodním formátu)|

