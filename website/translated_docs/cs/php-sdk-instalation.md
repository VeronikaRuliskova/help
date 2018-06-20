---
title: Instalace
---

## Composer

Nejsnadnější cestou, jak nainstalovat [bulkgate/sms](https://packagist.org/packages/bulkgate/sms) do projektu, je pomocí nástroje [Composer](https://getcomposer.org/) přes příkazovou řádku.

```
composer require bulkgate/sms
```

Pokud máte balíček nainstalovaný stačí jen připojit autoloader.

``` php
require_once __DIR__ . '/vendor/autoload.php';
```

Abyste mohli odesílat zprávy, potřebujete instanci třídy `BulkGate\Sms\Sender`, která vyžaduje zavislost na instanci třídy `BulkGate\Message\Connection`.

``` php
$connection = new BulkGate\Message\Connection('APPLICATION_ID', 'APPLICATION_TOKEN');

$sender = new BulkGate\Sms\Sender($connection);
```

V tuto chvíli máte již vše připraveno na odeslání zprávy.

``` php
$message = new BulkGate\Sms\Message('420777777777', 'test zprávy');

$sender->send($message);
```

Metoda `send()` odešle zprávu `$message`.
