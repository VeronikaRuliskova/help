---
title: Potvrzení o doručení a příchozí SMS
---

## Potvrzení o doručení a příchozí SMS (odpovědi)
Chcete-li dostávat dlr záznamy do aplikace, zašlete nám DELIVERY_URL adresu vašeho skriptu nebo DELIVERY_EMAIL pro zasílání potvrzení o doručení na email. Potvrzení o doručení jsou zasílány na adresu DELIVERY_URL metodou HTTP GET. Podívejte se na [tabulku parametrů](#potvrzení-o-doručení-parametry) pro tento příkaz. Podívejte se také na "AppID" v [tabulce parametrů pro hromadnou SMS se stejným textem](http-low-level-api-send-bulk-sms-same-text.md#odeslání-hromadné-sms-se-stejným-textem-parametry).

## API URL
https://api.bulkgate.com/http/

### Potvrzení o doručení: parametry
|NÁZEV PARAMETRU|	HODNOTA|	POVINNÝ|
|:--- |:--- |:--- |
|status|	Podívejte se na [tabulku o potvrzení o stavu doručení](#potvrzení-o-doručení-stav)	|Ano|
|smsID|	Unikátní smsID zprávy|	Ne|
|price|	Cena SMS v kreditech	|Ne|
|from|Pouze pokud je status=10, ID odesílatele v příchozí SMS v mezinárodním formátu|	Ne|
|message|	Pouze pokud je status=10, Text příchozí SMS v kódování UTF-8 |	Ne|

### Potvrzení o doručení: stav
|STAV|	POPIS|
|:--- |:--- |
|1	|SMS úspěšně doručena|
|2	|SMS ve vyrovnávací paměti na SMSC. SMS bude doručena později. Příjemce není k dispozici|
|3	|SMS nebyla doručena. Neznámý/nedostupný příjemce|
|6	|SMS přijatá poskytovatelem (tento stav není ve výchozím nastavení povolen, kontaktujte nás pro odběr)|
|8	|Platnost SMS zprávy vypršela|
|10|	Příchozí SMS nebo SMS odpověď (kontaktujte nás pro více informací)|
