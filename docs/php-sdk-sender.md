---
title: Sender
---

``` php
use BulkGate\Sms\Sender;
```

Abychom mohli vytvořenou zprávu typu `BulkGate\Sms\IMesssage`

 - [`BulkGate\Sms\Message`](php-sdk-message.md)
 - [`BulkGate\Sms\BulkMessage`](php-sdk-bulk-message.md)

musíme vytvořit sender, což můžeme udělat dvěma způsoby:

 - [Nette framework](php-sdk-nette.md) - pokud používáme [Nette framework](https://nette.org/)
 - [PHP](php-sdk-instalation.md) - v ostaních případech
 
``` php
/** @var BulkGate\Message\Connection $connection */
$sender = new BulkGate\Sms\Sender($connection);
```
 
## Odeslání zprávy
 
Pro odeslání zprávy se používá metoda `send()`, která přijímá zprávy typu `BulkGate\Sms\IMesssage`.
 
``` php
/** 
  * @var BulkGate\Sms\Sender $sender 
  * @var BulkGate\Sms\IMesssage|BulkGate\Sms\Message|BulkGate\Sms\BulkMessage $message
  */
$response = $sender->send($message);
```

### Odpověď na `BulkGate\Sms\Messsage`
``` php
BulkGate\Message\Response Object
(
    [data:BulkGate\Message\Response:private] => Array
    (
        [sms_id] => tmpde8f0dca011
        [price] => 0.033
        [credit] => 215.8138
        [number] => 420777777777
    )
)
```

### Odpověď na `BulkGate\Sms\BulkMesssage`
``` php
BulkGate\Message\Response Object
(
    [data:BulkGate\Message\Response:private] => Array
    (
        [total] => Array
        (
            [price] => 0.033
            [status] => Array
            (
                [sent] => 0
                [accepted] => 1
                [scheduled] => 0
                [error] => 0
            )
        )
        [response] => Array
        (
            [0] => Array
            (
                [status] => accepted
                [sms_id] => tmpde8f0b47b12
                [price] => 0.033
                [credit] => 215.8138
                [number] => 420777777777
            )
        )
    )
)
```

## Unicode

Pro nastavení [Unicode](unicode.md) zavoláme metodu `unicode()`.

``` php
/** @var BulkGate\Sms\Sender $sender */
$sender->unicode(); // Zapnout
$sender->unicode(true); // Zapnout
$sender->unicode(false); // Vypnout
```
 
 ## Flash SMS
 
 Pro nastavení [Flash SMS](flash-sms.md) zavoláme metodu `flash()`.
 
 ``` php
 /** @var BulkGate\Sms\Sender $sender */
 $sender->flash(); // Zapnout
 $sender->flash(true); // Zapnout
 $sender->flash(false); // Vypnout
 ``` 
 
 ## Nastavení odesilatele
 
 Nastavení typu odesilatele je popsáno v příslušné [kapitole](php-sdk-sender-settings.md).
 
 ``` php
/** 
  * @var BulkGate\Sms\Sender $sender
  * @var SenderSettings\CountrySenderSettings|SenderSettings\StaticSenderSettings $settings
  */
$sender->setSenderSettings($settings);
```

## Výchozí země

Pokud zadáváme telefonní čísla v národním formátu, systém neví kam na světě má zprávu poslat. Proto pokud není explicitně vyplněna mezinározdní předvolba, je možno senderu zadefinovat výchozí zemi, kam má zprávy směrovat.

 ``` php
 /** @var BulkGate\Sms\Sender $sender */
 $sender->setDefaultCountry(BulkGate\Sms\Country::CZECH_REPUBLIC); // pomocí BulkGate\Sms\Country
 $sender->setDefaultCountry('cz'); // ISO 3166-1 alpha-2 
 ``` 
 
 ## Ověření platnosti čísel
 
 Pokud potřebujeme ověřit zda telefonní číslo odpovídá formátu příslušné země, používáme metodu `checkPhoneNumbers()`.
 
 ``` php
 /** @var BulkGate\Sms\Sender $sender */
 $sender->checkPhoneNumbers($numbers, $iso);
 ``` 
 
Kde `$numbers` může být:
- telefonní číslo v řetězci `"420777777777"`
- telefonní číslo typu `BulkGate\Sms\Message\PhoneNumber`
- pole telefonních čísel `['420777777777','420777777778','420777777779']`
- pole telefonních čísel typu `BulkGate\Sms\Message\PhoneNumber`

`$iso` má stejný význam jako [Výchozí země](#výchozi-země)

Výsledkem je potom `BulkGate\Message\Response`

``` php
BulkGate\Message\Response Object
(
    [data:BulkGate\Message\Response:private] => Array
    (
        [420777777777] => Array
        (
            [number] => 420777777777
            [iso] => cz
            [prefix] => 420
            [area] => 420
            [length] => 12
            [area_found] => true
        )
        [77777777] => Array
        (
            [number] => 42177777777 
            [iso] => sk
            [prefix] => 421
            [area] => 421
            [length] => 8
            [area_found] => false
        )
    )
)
```

Hodnota `area_found` udává platnost formátu čísla pro konkrétní zemi.
