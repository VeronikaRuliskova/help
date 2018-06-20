---
title: Phone Number
---

The `BulkGate\Sms\Message\PhoneNumber` class represents the phone number object.

``` php
use BulkGate\Sms\Message\PhoneNumber;
```

The constructor accepts the required parameter phone number and optional country ISO code.

``` php
$phone_number = new PhoneNumber(
    "420777777777", 
    BulkGate\Sms\Country::UNITED_KINGDOM
);
``` 

The second parameter is required if you enter a number in the national format. If you enter a phone number in the national format and don't enter the [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code, BulkGate will fill the international prefix according to the country listed in your user account.

You can also change the phone number after creating an instance.

``` php
/** @var BulkGate\Sms\Message\PhoneNumber $phone_number */
$phone_number->phoneNumber('447971700001');
``` 

You can also set the ISO code.

``` php
/** @var BulkGate\Sms\Message\PhoneNumber $phone_number */
$phone_number->iso(BulkGate\Sms\Country::UNITED_KINGDOM);

// nebo

$phone_number->iso('gb');
``` 
In case of invalid ISO code, an exception `BulkGate\Sms\Message\InvalidPhoneNumberException` is called 


## Convert to JSON

``` php 
/** @var BulkGate\Sms\Message\PhoneNumber $phone_number */
echo json_encode($phone_number);
``` 

The output is:

``` json 
{
    "number": "447971700001",
    "iso": null
}
``` 

## Other

Obtain a formatted phone number in a string

``` php
/** @var BulkGate\Sms\Message\PhoneNumber $phone_number */
$phone_number->getPhoneNumber();
$number = (string) $phone_number; 
echo $phone_number;
```

Obtaining an ISO code
``` php 
/** @var BulkGate\Sms\Message\PhoneNumber $phone_number */
$phone_number->getIso(); // returns a string or null
``` 

It also supports [fluent interface](https://en.wikipedia.org/wiki/Fluent_interface)

``` php
/** @var BulkGate\Sms\Message\PhoneNumber $phone_number */
$phone_number
    ->phoneNumber('7971700001')
    ->iso(BulkGate\Sms\Country::UNITED_KINGDOM);
```
