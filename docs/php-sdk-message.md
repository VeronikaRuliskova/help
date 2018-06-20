---
title: Message
---

The `BulkGate\Sms\Message` class represents the object of the SMS message, which consists of the content of the message and the recipient.

``` php
use BulkGate\Sms\Message;
```

## Recipient

The class accepts as the first argument a phone number that can be entered by a string:

``` php
$message = new Message('447971700001', 'test message');
```

or accepts an instance of the object [`Message\PhoneNumber`](php-sdk-message-phone-number.md):

``` php
$message = new Sms\Message(new Message\PhoneNumber('447971700001'), 'test message');
```

You can also enter the phone number after creating an instance of the object using the method `phoneNumber($phone_number, $iso = null)`:

``` php
$message = new Sms\Message();

$message->phoneNumber('447971700001');  // řetězec
$message->phoneNumber('7971700001', BulkGate\Sms\Country::UNITED_KINGDOM);  // The option with filling international prefix
$message->phoneNumber(new Message\PhoneNumber('447971700001')); 
```

To obtain a phone number, you can use the method `getPhoneNumber()`, which always returns an instance of the [`Message\PhoneNumber`](php-sdk-message-phone-number.md) object.

``` php
/** @var Message\PhoneNumber $phone_number */
$phone_number = $message->getPhoneNumber();
```

## Text of the message 

The second parameter is the input of the text of the message. There are also 2 options where the first is to enter text using a string, and the other is an instance of the class [`Message\Text`](php-sdk-message-text.md).

``` php
$message = new Message(
        new Message\PhoneNumber('447971700001'), 
        new Message\Text('test message')
);
```

Of course, you can define text even after creating an instance of an object using the method `text($text, array $variables = [])`

``` php
$message = new Sms\Message();
$message->phoneNumber('447971700001');  // string

$message->text('test message'); // string

$message->text(new Message\Text('test message')); 

$message->text(
    'Hello <first_name> <last_name>', [
        'first_name' => 'John', 
        'last_name' => 'Doe'
    ]); // filling variables; the output is "Hello John Doe"
```

You can use the `getText()` method, to retrieve the message text, which always returns an instance of the [`Message\Text`](php-sdk-message-text.md) object.

``` php
/** @var Message\Text $text */
$text = $message->getText();
```

## JSON Support

The `BulkGate\Sms\Message` object implements the [`\JsonSerializable`](http://php.net/manual/en/class.jsonserializable.php) interface that lets you convert it via the [`json_encode()`](http://php.net/manual/en/function.json-encode.php) to JSON format.

``` php
/** @var BulkGate\Sms\Message $message */
$message = new Message('447971700001', 'test message');

echo json_encode($message);
```

The output is:

``` json
{
  "number": {
    "number": "447971700001",
    "iso": null
  },
  "text": "test message"
}
```

## Convert to string

The `BulkGate\Sms\Message` object implements the magic method [`__string()`](http://php.net/manual/en/language.oop5.magic.php#object.tostring)

``` php
/** @var BulkGate\Sms\Message $message */
$message = (string) $message; // into the variable
echo $message; // to the output
```

The output is:

```
447971700001: test message
```

## Convert to array

``` php
/** @var BulkGate\Sms\Message $message */
$array = $message->toArray();
```

## Fluent interface

[Fluent interface](https://en.wikipedia.org/wiki/Fluent_interface)) is the technique of chaining methods.

``` php
$message = new Sms\Message();

$message->phoneNumber('447971700001')
        ->text('test message');
```
