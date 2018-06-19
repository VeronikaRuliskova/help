---
title: Nastavení typu odesilatele
---

``` php
use BulkGate\Sms\SenderSettings
```

Pokud chceme odeslat SMS můžeme si vybrat z několika typů odesilatele, kteří jsou popsáni [zde](sender-type.md).

## Varianta 1: Typ odesilatele

Jednoduší variantou je pomocí `BulkGate\Sms\SenderSettings\StaticSenderSettings`, kde si nastavíme jaký typ odesilatele chceme a pokud je podporován v dané zemi, je s tímto senderem SMS odeslána.

``` php
$type = SenderSettings\Gate::GATE_TEXT_SENDER;
$value = 'BulkGate';

$settings = new SenderSettings\StaticSenderSettings($type, $value); 
```
Proměnná `$type` může nabývat následujících hodnot.

| HODNOTA| VÝZNAM|
|:--- |:---|
|`SenderSettings\Gate::GATE_SYSTEM_SENDER` |Systémové číslo| 
|`SenderSettings\Gate::GATE_SHORT_SENDER`|Short Code| 
|`SenderSettings\Gate::GATE_TEXT_SENDER` |Textový odesílatel| 
|`SenderSettings\Gate::GATE_OWN_SENDER` |Vlastní číslo (vyžaduje ověření čísla)| 

Proměnná `$value` se vyplňuje pokud je `$type` nastaveni na textový odesilatel nebo vlastní číslo.

> Maximální délka `$value` v případě textového odesilatele je **11 znaků anglické abecedy**.

> Pokud je vybrán typ vlastního čísla, je **nutné** zadané číslo mít **ověřené na portále BulkGate**.

Alternativně lze nastavit typ u již vytvořeného objektu.

``` php
/** @var SenderSettings\StaticSenderSettings $settings */
$settings->systemNumber();
$settings->shortCode();
$settings->textSender('BulkGate');
$settings->ownNumber('420777777777');
```

## Varianta 2: Nastavení podle země

Tato varianta je trochu složitější na nastavení, ale dovoluje vytvořit přesné nastavení pro jednotlivé země, do kterých chcete posílat.

K tomu slouží třída `SenderSettings\CountrySenderSettings`.

``` php
$settings = SenderSettings\CountrySenderSettings();

$settings->add(BulkGate\Sms\Country::CZECH_REPUBLIC, SenderSettings\Gate::GATE2)
         ->add(BulkGate\Sms\Country::SLOVAKIA, SenderSettings\Gate::GATE5, '421906123456')
         ->add(BulkGate\Sms\Country::GERMANY, SenderSettings\Gate::GATE3, 'BulkGate');
```

Kde druhý parametr výběr konkrétní brány v konkrétní zemi. Příslušné nastavení nalezneme v [ceníku](https://portal.bulkgate.com/sms-price/list) na portále.

![bulkgate-sdk-gate](https://github.com/BulkGate/help/raw/master/website/static/img/sdk-gate.png)

## Předání nastavení senderu

Aby vše fungovalo, je potřeba takto nastavený objekt předat do `BulkGate\Sms\Sender`.

``` php
/** 
  * @var BulkGate\Sms\Sender $sender
  * @var SenderSettings\CountrySenderSettings|SenderSettings\StaticSenderSettings $settings
  */
$sender->setSenderSettings($settings);
```
