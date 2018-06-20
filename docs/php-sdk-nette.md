---
title: Installation to Nette framework
---

The easiest way to install [bulkgate/sms](https://packagist.org/packages/bulkgate/sms) into a project is by using [Composer](https://getcomposer.org/) via the command line.

```
composer require bulkgate/sms
```

The package includes extensions for [Nette framework](https://nette.org) [DI kontejner](https://doc.nette.org/cs/2.4/dependency-injection).

## DI Extension

Register the extension to the DI container via NEON

``` neon
extensions:
	bulkgate: BulkGate\Message\Bridges\MessageDI\MessageExtension

bulkgate:
	application_id: <APPLICATION_ID>
	application_token: <APPLICATION_TOKEN>
```

which gives you the class [`BulkGate\Sms\Sender`](php-sdk-sender.md) as a service you can request.

``` php
<?php declare(strict_types=1);

namespace BulkGate\Presenters;

use BulkGate, Nette;

class SdkPresenter extends Nette\Application\UI\Presenter
{
    /** @var BulkGate\Sms\ISender @inject */
    public $sender;

    public function actionDefault()
    {
        $this->sender->send(new BulkGate\Sms\Message('447971700001', 'test message'));
    }
}
```

## Tracy

At the same time, you'll get the extension for [Tracy](https://tracy.nette.org) panel

![bulkgate-sdk-tracy](https://github.com/BulkGate/help/raw/master/website/static/img/sdk-tracy.png)

To manually add the extension, follow these steps.

``` php
/** @var BulkGate\Message\Connection $connection */
Tracy\Debugger::getBar()->addPanel(new BulkGate\Message\Bridges\MessageTracy\MessagePanel($connection));
```
