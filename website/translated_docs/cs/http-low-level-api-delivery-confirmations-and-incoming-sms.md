---
title: Potvrzení o doručení a příchozích SMS
---

## Potvrzení o doručení a příchozích SMS (odpovědi)
Chcete-li dostávat dlr záznamy, kontaktujte nás s vaší DELIVERY_URL adresou vašeho skriptu nebo DELIVERY_EMAIL adresou. Záznamy o doručeních jsou odesílány na adresu DELIVERY_URL přes HTTP GET metodou. Podívejte se na [tabulku parametrů](#potvrzení-o-doručení-parametry) pro tento příkaz. Podívejte se také na "AppID" v [tabulce parametrů pro hromadnou SMS se stejným textem](http-low-level-api-send-bulk-sms-same-text.md#odeslání-hromadné-sms-se-stejným-textem-parametry).

## Požadavek adresy URL
Adresa URL používaná k odeslání požadavků HTTP: 
https://api.bulkgate.com/http/

### Potvrzení o doručení: parametry
|NÁZEV PARAMETRU|	HODNOTA|	POVINNÝ|
|:--- |:--- |:--- |
|„status“|	Podívejte se na [tabulku o potvrzení o stavu doručení](#potvrzení-o-doručení-stav)	|Ano|
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
