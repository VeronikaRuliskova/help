---
title: Bulk SMS (Kampaň)
---

The class `BulkGate\Sms\BulkMessage` represents the object, which connects [`BulkGate\Sms\Message`](php-sdk-message.md) type of messages to a bulk message (campaign).

``` php
use BulkGate\Sms\BulkMessage;
```

The constructor has one optional [`array`](http://php.net/manual/en/language.types.array.php) type parameter that must contain [`BulkGate\Sms\Message`](php-sdk-message.md) items.

``` php
$array = [
    new BulkGate\Sms\Message("447971700001", "test1"),
    new BulkGate\Sms\Message("447971700002", "test2"),
    new BulkGate\Sms\Message("447971700003", "test3"),
    new BulkGate\Sms\Message("447971700004", "test4"),
];

$bulk_message = new BulkMessage($array);
```

Messages can be added one at a time:

``` php 
/** @var BulkGate\Sms\BulkMessage $bulk_message */
$bulk_message->addMessage(
    new BulkGate\Sms\Message(
        new BulkGate\Sms\Message\PhoneNumber("7971700001", BulkGate\Sms\Country::UNITED_KINGDOM),
        new BulkGate\Sms\Message\Text("test<number>", [
            'number' => '5'
        ])
    )
);
```

## Iterator

You can browse through messages using the [`foreach`](http://php.net/manual/en/control-structures.foreach.php) cycle 

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

You can find out the number of messages using `count()`

``` php 
/** @var BulkGate\Sms\BulkMessage $bulk_message */
$bulk_message->count();
```

## JSON Support

The `BulkGate\Sms\BulkMessage` object implements the [`\JsonSerializable`](http://php.net/manual/en/class.jsonserializable.php) interface that lets you convert it via the [`json_encode()`](http://php.net/manual/en/function.json-encode.php) function to JSON format.

``` php
/** @var BulkGate\Sms\BulkMessage $bulk_message */
echo json_encode($bulk_message);
```

The output is:

``` json
[
  {
    "number": {
      "number": "447971700001",
      "iso": null
    },
    "text": "test1"
  },
  {
    "number": {
      "number": "447971700002",
      "iso": null
    },
    "text": "test2"
  },
  {
    "number": {
      "number": "447971700003",
      "iso": null
    },
    "text": "test3"
  },
  {
    "number": {
      "number": "447971700004",
      "iso": null
    },
    "text": "test4"
  },
  {
    "number": {
      "number": "7971700005",
      "iso": "gb"
    },
    "text": "test5"
  }
]
```

## Convert to string

The `BulkGate\Sms\BulkMessage` object implements the magic method [`__string()`](http://php.net/manual/en/language.oop5.magic.php#object.tostring).

``` php
/** @var BulkGate\Sms\BulkMessage $bulk_message */
$message = (string) $bulk_message; // into the variable
echo $bulk_message; // to the output
```

Výstupem je:
```
447971700001: test1
447971700002: test2
447971700003: test3
447971700004: test4
797170000ř: test5
```

## Transfer array

``` php
/** @var BulkGate\Sms\BulkMessage $bulk_message */
$array = $message->toArray();
```
