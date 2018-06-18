---
title: Podpora Nette framework
---

Balíček [bulkgate/sms](https://packagist.org/packages/bulkgate/sms) obsahuje rozšíření pro [Nette framework](https://nette.org) DI kontejner.

## DI Extension

Rozšíření stačí zaregistrovat do DI kontejneru přes NEON
``` neon
extensions:
	bulkgate: BulkGate\Message\Bridges\MessageDI\MessageExtension

bulkgate:
	application_id: <APPLICATION_ID>
	application_token: <APPLICATION_TOKEN>
```

čímž získáme třídu `BulkGate\Sms\Sender` jako službu, kterou si můžeme vyžádat.

``` php
<?php declare(strict_types=1);

namespace BulkGate\Presenters;

use BulkGate, Nette;

class FooPresenter extends ReactAdminPresenter
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

Součástí toho získáme rozšíření pro [Tracy](https://tracy.nette.org) panel

