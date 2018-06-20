---
title: Telefonní číslo
---

Třída `BulkGate\Sms\Message\PhoneNumber` reprezentuje objekt telefonního čísla.

``` php
use BulkGate\Sms\Message\PhoneNumber;
```

Konstruktor přijímá povinný parametr telefonní číslo a volitelný parametr ISO kódu země.

``` php
$phone_number = new PhoneNumber(
    "420777777777", 
    BulkGate\Sms\Country::CZECH_REPUBLIC
);
``` 

Druhý parametr je nutný v případě, že zadáváte telefonní číslo v národním formátu. Pokud zadáte telefonní číslo v národním formátu a nevyplníte [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) kód, pak se BulkGate pokusí doplnit mezinárodní telefonní předvolbu podle země uvedenou ve vašem uživatelském účtu.

Změnit telefonní číslo lze i po vytvoření instance.

``` php
/** @var BulkGate\Sms\Message\PhoneNumber $phone_number */
$phone_number->phoneNumber('420777777777');
``` 

Stejně lze nastavit i ISO kód.

``` php
/** @var BulkGate\Sms\Message\PhoneNumber $phone_number */
$phone_number->iso(BulkGate\Sms\Country::CZECH_REPUBLIC);

// nebo

$phone_number->iso('cz');
``` 
V případě neplatného ISO kódu je vyvolána výjimka `BulkGate\Sms\Message\InvalidPhoneNumberException`


## Převedení na JSON

``` php 
/** @var BulkGate\Sms\Message\PhoneNumber $phone_number */
echo json_encode($phone_number);
``` 

Výstupem je:

``` json 
{
    "number": "420777777777",
    "iso": null
}
``` 

## Ostatní

Získání zformátovaného telefonního čísla v řetězci

``` php
/** @var BulkGate\Sms\Message\PhoneNumber $phone_number */
$phone_number->getPhoneNumber();
$number = (string) $phone_number; 
echo $phone_number;
```

Získání ISO kódu
``` php 
/** @var BulkGate\Sms\Message\PhoneNumber $phone_number */
$phone_number->getIso(); // vrátí řetězec nebo null
``` 

Podporuje také fluentní rozhraní (anglicky [fluent interface](https://en.wikipedia.org/wiki/Fluent_interface))

``` php
/** @var BulkGate\Sms\Message\PhoneNumber $phone_number */
$phone_number
    ->phoneNumber('777777777')
    ->iso(BulkGate\Sms\Country::CZECH_REPUBLIC);
```
