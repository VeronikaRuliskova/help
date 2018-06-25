---
title: Installation
---

## Composer

The easiest way to install [bulkgate/sms](https://packagist.org/packages/bulkgate/sms) into a project is by using [Composer](https://getcomposer.org/) via the command line.

```
composer require bulkgate/sms
```

If you have the package installed just plug in the autoloader.

``` php
require_once __DIR__ . '/vendor/autoload.php';
```

In order to send messages, you need an instance of the `BulkGate\Sms\Sender` class that requires instance dependency on the `BulkGate\Message\Connection` class. See [how to get API accesss data.](api-administration.md#how-do-i-get-api-access-data)

``` php
$connection = new BulkGate\Message\Connection('APPLICATION_ID', 'APPLICATION_TOKEN');

$sender = new BulkGate\Sms\Sender($connection);
```

At this point, you are ready to send a message.

``` php
$message = new BulkGate\Sms\Message('447971700001', 'test message');

$sender->send($message);
```

The `send()` method will send a message `$message`.
