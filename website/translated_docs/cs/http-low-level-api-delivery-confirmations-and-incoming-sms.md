---
title: Potvrzení o doručení a příchozích SMS
---

## Potvrzení o doručení a příchozích SMS (odpovědi)
Chcete-li dostávat dlr záznamy, kontaktujte nás s vaší DELIVERY_URL adresou vašeho skriptu nebo DELIVERY_EMAIL adresou. Záznamy o doručeních jsou odesílány na adresu DELIVERY_URL přes HTTP GET metodou. Podívejte se na tabulku 7. Viz také "AppID" v tabulce 1a.

## Požadavek adresy URL
Adresa URL používaná k odeslání požadavků HTTP: 
https://api.bulkgate.com/http/

### Potvrzení o doručení: parametry
|NÁZEV PARAMETRU|	HODNOTA|	POVINNÝ|
|:--- |:--- |:--- |
|„status“|	Podívejte se na tabulku 8	|Ano|
|„smsID“|	Unikátní smsID zprávy|	Ne|
|„price“|	Cena SMS v kreditech	|Ne|
|„from“	|Pouze pokud je status=10, ID odesílatele v příchozí SMS v mezinárodním formátu|	Ne|
|„message“|	Pouze pokud je status=10, Text příchozí SMS v kódování UTF-8 |	Ne|

### Potvrzení o doručení: stav
|STAV|	POPIS|
|:--- |:--- |
|1	|SMS úspěšně doručena|
|2	|SMS ve vyrovnávací paměti na SMSC. SMS bude doručena později. Příjemce není k dispozici|
|3	|SMS nebyla doručena. Neznámý/nedostupný příjemce|
|6	|SMS přijatá poskytovatelem (tento stav není ve výchozím nastavení povolen, kontaktujte nás pro odběr)|
|8	|Platnost SMS zprávy vypršela|
|10|	Příchozí SMS nebo SMS odpověď (kontaktujte nás pro více informací)|
