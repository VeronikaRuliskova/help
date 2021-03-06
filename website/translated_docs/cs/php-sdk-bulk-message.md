---
title: Hromadná zpráva (Kampaň)
---

Třída `BulkGate\Sms\BulkMessage` reprezentuje objekt, který spojuje zprávy typu [`BulkGate\Sms\Message`](php-sdk-message.md) do hromadné zprávy (kampaně).

``` php
use BulkGate\Sms\BulkMessage;
```

Konstruktor má jeden volitelný parametr typu [`array`](http://php.net/manual/en/language.types.array.php), který musí obsahovat položky typu [`BulkGate\Sms\Message`](php-sdk-message.md).

``` php
$array = [
    new BulkGate\Sms\Message("420777777777", "test1"),
    new BulkGate\Sms\Message("420777777778", "test2"),
    new BulkGate\Sms\Message("420777777779", "test3"),
    new BulkGate\Sms\Message("420777777780", "test4"),
];

$bulk_message = new BulkMessage($array);
```

Zprávy lze přidávat i po jedné:

``` php 
$message = new BulkGate\Sms\Message(
    new BulkGate\Sms\Message\PhoneNumber("777777781", BulkGate\Sms\Country::CZECH_REPUBLIC),
    new BulkGate\Sms\Message\Text("test<number>", [
        'number' => '5'
    ])
);

/** @var BulkGate\Sms\BulkMessage $bulk_message */
$bulk_message->addMessage(message);
```

## Iterátor

Zprávami lze procházet pomocí cyklu [`foreach`](http://php.net/manual/en/control-structures.foreach.php)

``` php 
/** 
 * @var BulkGate\Sms\BulkMessage $bulk_message 
 * @var BulkGate\Sms\Message $message
 */
foreach($bulk_message as $message)
{
    echo $message;
}
```

Počet zpráv zjistíme metodou `count()`

``` php 
/** @var BulkGate\Sms\BulkMessage $bulk_message */
$bulk_message->count();
```

## JSON Podpora

Objekt `BulkGate\Sms\BulkMessage` implementuje rozhraní [`\JsonSerializable`](http://php.net/manual/en/class.jsonserializable.php), díky kterému ho můžete převést pomocí funkce [`json_encode()`](http://php.net/manual/en/function.json-encode.php) do formátu JSON.

``` php
/** @var BulkGate\Sms\BulkMessage $bulk_message */
echo json_encode($bulk_message);
```

Výstupem je:

``` json
[
  {
    "number": {
      "number": "420777777777",
      "iso": null
    },
    "text": "test1"
  },
  {
    "number": {
      "number": "420777777778",
      "iso": null
    },
    "text": "test2"
  },
  {
    "number": {
      "number": "420777777779",
      "iso": null
    },
    "text": "test3"
  },
  {
    "number": {
      "number": "420777777780",
      "iso": null
    },
    "text": "test4"
  },
  {
    "number": {
      "number": "777777781",
      "iso": "cz"
    },
    "text": "test5"
  }
]
```

## Převod na řetězec

Objekt `BulkGate\Sms\BulkMessage` implementuje magickou metodu [`__string()`](http://php.net/manual/en/language.oop5.magic.php#object.tostring).

``` php
/** @var BulkGate\Sms\BulkMessage $bulk_message */
$message = (string) $bulk_message; // do proměnné
echo $bulk_message; // na výstup
```

Výstupem je:
```
420777777777: test1
420777777778: test2
420777777779: test3
420777777780: test4
777777781: test5
```

## Převod na pole 

``` php
/** @var BulkGate\Sms\BulkMessage $bulk_message */
$array = $message->toArray();
```
