---
title: Sender
---

``` php
use BulkGate\Sms\Sender;
```

Abychom mohli vytvořenou zprávu typu `BulkGate\Sms\IMesssage`

 - [`BulkGate\Sms\Message`](php-sdk-messsage.md)
 - [`BulkGate\Sms\BulkMessage`](php-sdk-bulk-message.md)

musíme vytvořit sender, což můžeme udělat dvěma způsoby:

 - [Nette framework](php-sdk-nette.md) - pokud používáme [Nette framework](https://nette.org/)
 - [PHP](php-sdk-instalation.md) - v ostaních případech
 
 ``` php
 /** @var BulkGate\Message\Connection $connection */
 $sender = new BulkGate\Sms\Sender($connection);
 ```
 
 
