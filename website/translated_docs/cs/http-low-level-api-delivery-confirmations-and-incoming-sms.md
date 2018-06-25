---
title: Potvrzení o doručení a příchozí SMS
---

## Potvrzení o doručení a příchozí SMS (odpovědi)
Chcete-li dostávat dlr záznamy do aplikace, zašlete nám DELIVERY_URL adresu vašeho skriptu. Potvrzení o doručení jsou zasílány na adresu DELIVERY_URL metodou HTTP GET. Podívejte se na [tabulku parametrů](#potvrzení-o-doručení-parametry) pro tento příkaz. Podívejte se také na "AppID" v [tabulce parametrů pro hromadnou SMS se stejným textem](http-low-level-api-send-bulk-sms-same-text.md#odeslání-hromadné-sms-se-stejným-textem-parametry).

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

### PHP 5.4 procedurální příklad
``` php
<?php
$status_list = [
    1 => 'doručeno',
    2 => 'nedostupné',
    3 => 'nedoručeno',
    6 => 'přijato',
    8 => 'expirováno'
];

$status = filter_input(INPUT_GET, 'status', FILTER_SANITIZE_NUMBER_INT);

if($status && (int) $status === 10)
{
    $from    = filter_input(INPUT_GET, 'from', FILTER_SANITIZE_STRING);
    $message = filter_input(INPUT_GET, 'message', FILTER_SANITIZE_STRING);

    file_put_contents(__DIR__."/inbox.log", '['.date('Y-m-d H-i-s').'] ' .sprintf('Od: [%s] Zpráva: [%s]', $from, $message) . PHP_EOL,FILE_APPEND);
}
elseif($status && in_array((int)$status, array_keys($status_list)))
{
    $price  = filter_input(INPUT_GET, 'price', FILTER_SANITIZE_NUMBER_FLOAT);
    $sms_id = filter_input(INPUT_GET, 'smsID', FILTER_SANITIZE_STRING);

    file_put_contents(__DIR__."/delivery.log", '['.date('Y-m-d H-i-s').'] ' .sprintf('Zpráva s ID [%s] je ve stavu [%s], Cena: [%f]', $sms_id, $status_list[$status], $price) . PHP_EOL,FILE_APPEND);
}
else
{
    echo "neplatný stav";
    exit(1);
}
```

### PHP 7.1 objetkově orientovaný příklad
``` php
<?php declare(strict_types=1);

new class ()
{
    const STATUS_LIST = [
        1 => 'doručeno',
        2 => 'nedostupné',
        3 => 'nedoručeno',
        6 => 'přijato',
        8 => 'expirováno'
    ];

    public function __construct()
    {
        $status = $this->input('status', 'int');

        if($status === 10 /** INBOX */)
        {
            $this->inbox();
        }
        elseif(in_array($status, array_keys(self::STATUS_LIST)))
        {
            $this->delivery(self::STATUS_LIST[$status]);
        }
        else
        {
            $this->log('Neplatný stav: '.(string) $status, 'error');
        }
    }

    public function inbox(): void
    {
        $from    = $this->input('from');
        $message = $this->input('message');

        $this->log(sprintf('Od: [%s] Zpráva: [%s]', $from, $message), 'inbox');

    }

    public function delivery(string $status): void
    {
        $price  = $this->input('price', 'float');
        $sms_id = $this->input('smsID');

        $this->log(sprintf('Zpráva s ID [%s] je ve stavu [%s], Cena: [%f]', $sms_id, $status, $price), 'delivery');
    }

    private function log(string $message, string $type): void
    {
        $message = '['.date('Y-m-d H-i-s').'] ' . $message . PHP_EOL;

        echo $message;
        file_put_contents(__DIR__."/$type.log", $message,FILE_APPEND);

        exit((int) $type === 'error');
    }

    private function input(string $name, string $type = 'string')
    {
        if($type === 'string')
        {
            $value = filter_input(INPUT_GET, $name, FILTER_SANITIZE_STRING);
            return $value ? (string) $value : '';
        }
        else if($type === 'int')
        {
            $value = filter_input(INPUT_GET, $name, FILTER_SANITIZE_NUMBER_INT);
            return $value ? (int) $value : 0;
        }
        else if($type === 'float')
        {
            $value = filter_input(INPUT_GET, $name, FILTER_SANITIZE_NUMBER_FLOAT);
            return $value ? (float) $value : 0.0;
        }

        return null;
    }
};
```
