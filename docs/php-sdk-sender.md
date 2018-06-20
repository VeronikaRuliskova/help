---
title: Sender Service
---

``` php
use BulkGate\Sms\Sender;
```

In order to send a message like `BulkGate\Sms\IMesssage`

 - [`BulkGate\Sms\Message`](php-sdk-messsage.md)
 - [`BulkGate\Sms\BulkMessage`](php-sdk-bulk-message.md)

you need to create a sender, which can be done in two ways:

 - [Nette framework](php-sdk-nette.md) - if you use [Nette framework](https://nette.org/)
 - [PHP](php-sdk-instalation.md) - in other cases
 
``` php
/** @var BulkGate\Message\Connection $connection */
$sender = new BulkGate\Sms\Sender($connection);
```
 
## Sending messages
 
To send the message, use the `send()` method, which receives messages of the `BulkGate\Sms\IMesssage` type.
 
``` php
/** 
  * @var BulkGate\Sms\Sender $sender 
  * @var BulkGate\Sms\IMesssage|BulkGate\Sms\Message|BulkGate\Sms\BulkMessage $message
  */
$response = $sender->send($message);
```

### Response to `BulkGate\Sms\Messsage`
``` php
BulkGate\Message\Response Object
(
    [data:BulkGate\Message\Response:private] => Array
    (
        [sms_id] => tmpde8f0dca011
        [price] => 0.033
        [credit] => 215.8138
        [number] => 447971700001
    )
)
```

### Response to `BulkGate\Sms\BulkMesssage`
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
                [number] => 447971700001
            )
        )
    )
)
```

## Unicode

To set up [Unicode,](unicode.md) call the method `unicode()`.

``` php
/** @var BulkGate\Sms\Sender $sender */
$sender->unicode(); // Turn on
$sender->unicode(true); // Turn on
$sender->unicode(false); // Turn off
```
 
 ## Flash SMS
 
 To set up [Flash SMS,](flash-sms.md) call the method `flash()`.
 
 ``` php
 /** @var BulkGate\Sms\Sender $sender */
 $sender->flash(); // Turn on
 $sender->flash(true); // Turn on
 $sender->flash(false); // Turn off
 ``` 
 
 ## Setting of the Sender
 
Setting of the sender type is described in the [chapter](php-sdk-sender-settings.md).
 
 ``` php
/** 
  * @var BulkGate\Sms\Sender $sender
  * @var SenderSettings\CountrySenderSettings|SenderSettings\StaticSenderSettings $settings
  */
$sender->setSenderSettings($settings);
```

## Default country

If you enter phone numbers in a national format, the system does not know where to send the messages. Hence, unless the international prefix is explicitly filled in, you can defined the default country for the sender type to which the messages will be routed.

 ``` php
 /** @var BulkGate\Sms\Sender $sender */
 $sender->setDefaultCountry(BulkGate\Sms\Country::UNITED_KINGDOM); // via BulkGate\Sms\Country
 $sender->setDefaultCountry('gb'); // ISO 3166-1 alpha-2 
 ``` 
 
 ## Validation of Numbers
 
 If you need to verify whether a phone number matches the country format, use the method `checkPhoneNumbers()`.
 
 ``` php
 /** @var BulkGate\Sms\Sender $sender */
 $sender->checkPhoneNumbers($numbers, $iso);
 ``` 
 
Where `$numbers` can be:
- phone number in a string `"447971700001"`
- phone number of the `BulkGate\Sms\Message\PhoneNumber` type
- arrays of phone numbers `['447971700001','447971700002','447971700003']`
- arrays of phone numbers of the `BulkGate\Sms\Message\PhoneNumber` type

`$iso` has the same meaning as [default country](#default-country)

The output is then `BulkGate\Message\Response`

``` php
BulkGate\Message\Response Object
(
    [data:BulkGate\Message\Response:private] => Array
    (
        [447971700001] => Array
        (
            [number] => 447971700001
            [iso] => gb
            [prefix] => 44
            [area] => 44
            [length] => 12
            [area_found] => true
        )
        [77777777] => Array
        (
            [number] => 420777777777 
            [iso] => sk
            [prefix] => 420
            [area] => 420
            [length] => 8
            [area_found] => false
        )
    )
)
```

The `area_found` value indicates the validity of the country-specific number format.
