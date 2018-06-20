---
title: Setting sender type
---

``` php
use BulkGate\Sms\SenderSettings
```

If you want to send SMS you can choose from several sender types that are described [here](sender-type.md).

## Option 1: Sender Type

The simpler option is to set up with `BulkGate\Sms\SenderSettings\StaticSenderSettings` what type of sender type you want to use , and if it is supported in the given country, the SMS is sent with the sender type.

``` php
$type = SenderSettings\Gate::GATE_TEXT_SENDER;
$value = 'BulkGate';

$settings = new SenderSettings\StaticSenderSettings($type, $value); 
```
The `$type`  variable can gain the following values.

| HODNOTA| MEANING|
|:--- |:---|
|`SenderSettings\Gate::GATE_SYSTEM_SENDER` |System number| 
|`SenderSettings\Gate::GATE_SHORT_SENDER`|Short Code| 
|`SenderSettings\Gate::GATE_TEXT_SENDER` |Text sender ID| 
|`SenderSettings\Gate::GATE_OWN_SENDER` |Own Number (requires number verification)| 

The `$value`variable is filled when `$type` is set to a text sender ID or a own number.

> The maximal length of `$value` in case of the text sender ID is **11 characters of the English alphabet.**

> If you choose own number sender type it is **necessary to verify on BulkGate Portal** the number first.

Alternatively, you can set the sender type for an already created object.

``` php
/** @var SenderSettings\StaticSenderSettings $settings */
$settings->systemNumber();
$settings->shortCode();
$settings->textSender('BulkGate');
$settings->ownNumber('447971700001');
```

## Option 2: Setting According to a Country

This option is a bit more complicated to set up, but it allows you to create the exact settings for each country you want to send messages to.

This is done by the `SenderSettings\CountrySenderSettings`.

``` php
$settings = SenderSettings\CountrySenderSettings();

$settings->add(BulkGate\Sms\Country::CZECH_REPUBLIC, SenderSettings\Gate::GATE2)
         ->add(BulkGate\Sms\Country::SLOVAKIA, SenderSettings\Gate::GATE5, '421906123456')
         ->add(BulkGate\Sms\Country::GERMANY, SenderSettings\Gate::GATE3, 'BulkGate');
```

Where the second parameter is the selection of a particular gateway in a particular country. You find the appropriate settings in [price list](https://portal.bulkgate.com/sms-price/list) on the Portal.

![bulkgate-sdk-gate](https://github.com/BulkGate/help/raw/master/website/static/img/sdk-gate.png)

## Forwarding Settings of Sender Type

To make it works, there is a need to forward everything to `BulkGate\Sms\Sender`.

``` php
/** 
  * @var BulkGate\Sms\Sender $sender
  * @var SenderSettings\CountrySenderSettings|SenderSettings\StaticSenderSettings $settings
  */
$sender->setSenderSettings($settings);
```
