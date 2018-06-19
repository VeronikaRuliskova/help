---
title: Instalace do Nette framework
---

Nejsnadnější cestou nainstalovat [bulkgate/sms](https://packagist.org/packages/bulkgate/sms) do projektu je pomocí nástroje [Composer](https://getcomposer.org/) přes příkazovou řádku.

```
composer require bulkgate/sms
```
Balíček obsahuje rozšíření pro [Nette framework](https://nette.org) [DI kontejner](https://doc.nette.org/cs/2.4/dependency-injection).

## DI Extension

Rozšíření stačí zaregistrovat do DI kontejneru přes NEON
``` neon
extensions:
	bulkgate: BulkGate\Message\Bridges\MessageDI\MessageExtension

bulkgate:
	application_id: <APPLICATION_ID>
	application_token: <APPLICATION_TOKEN>
```

čímž získáme třídu [`BulkGate\Sms\Sender`](php-sdk-sender.md) jako službu, kterou si můžeme vyžádat.

``` php
<?php declare(strict_types=1);

namespace BulkGate\Presenters;

use BulkGate, Nette;

class SdkPresenter extends ReactAdminPresenter
{
    /** @var BulkGate\Sms\ISender @inject */
    public $sender;

    public function actionDefault()
    {
        $this->sender->send(new BulkGate\Sms\Message('420777777777', 'test message'));
    }
}
```

## Tracy

Současně s tím získáme rozšíření pro [Tracy](https://tracy.nette.org) panel

![bulkgate-sdk-tracy](https://github.com/BulkGate/help/raw/master/website/static/img/sdk-tracy.png)

Manuálně rozšíření připojíme následovně.

``` php
/** @var BulkGate\Message\Connection $connection */
Tracy\Debugger::getBar()->addPanel(new BulkGate\Message\Bridges\MessageTracy\MessagePanel($connection));
```
