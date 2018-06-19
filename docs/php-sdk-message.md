---
title: Zpráva
---

Třída `BulkGate\Sms\Message` reprezentuje objekt SMS zprávy, která se skládá z obsahu zprávy a příjemce.

``` php
use BulkGate\Sms\Message;
```

## Příjemce

Třída přijímá jako první agrument telefonní číslo, které může být zadáno řetězcem:

``` php
$message = new Message('420777777777', 'test message');
```

nebo přijímá instanci objektu [`Message\PhoneNumber`](php-sdk-message-phone-number.md):

``` php
$message = new Sms\Message(new Message\PhoneNumber('420777777777'), 'test message');
```

Telefonní číslo můžeme zadat i po vytvoření instance objektu pomocí metody `phoneNumber($phone_number, $iso = null)`:

``` php
$message = new Sms\Message();

$message->phoneNumber('420777777777');  // řetězec
$message->phoneNumber('777777777', BulkGate\Sms\Country::CZECH_REPUBLIC);  // Varianta s doplněním mezinárodní telefonní předvolby
$message->phoneNumber(new Message\PhoneNumber('420777777777')); 
```

Pro získání telefonního čísla lze použít metodu `getPhoneNumber()`, která vrací vždy instanci objektu [`Message\PhoneNumber`](php-sdk-message-phone-number.md).

``` php
/** @var Message\PhoneNumber $phone_number */
$phone_number = $message->getPhoneNumber();
```

## Text zprávy

Druhým parametrem je zadání textu zprávy, jsou také 2 možnosti, kde první je zadání textu pomocí řetězce a druhou variantou je instance třídy [`Message\Text`](php-sdk-message-text.md).

``` php
$message = new Message(
        new Message\PhoneNumber('420777777777'), 
        new Message\Text('test Message')
);
```

Samozřejmě i zde můžeme definovat text i po vytvoření instance objektu pomocí metody `text($text, array $variables = [])`

``` php
$message = new Sms\Message();
$message->phoneNumber('420777777777');  // řetězec

$message->text('test message'); // řetězec

$message->text(new Message\Text('test message')); 

$message->text(
    'Hello <first_name> <last_name>', [
        'first_name' => 'John', 
        'last_name' => 'Doe'
    ]); // doplnění proměnných; výsledný text je "Hello John Doe"
```

Pro získání textu zprávy lze použít metodu `getText()`, která vrací vždy instanci objektu [`Message\Text`](php-sdk-message-text.md).

``` php
/** @var Message\Text $text */
$text = $message->getText();
```

## JSON Podpora

Objekt `BulkGate\Sms\Message` implementuje rozhraní [`\JsonSerializable`](http://php.net/manual/en/class.jsonserializable.php) což dovoluje převést pomocí funkce [`json_encode()`](http://php.net/manual/en/function.json-encode.php) do formátu JSON.

``` php
/** @var BulkGate\Sms\Message $message */
$message = new Message('420777777777', 'test message');

echo json_encode($message);
```

Výstupem je:

``` json
{
  "number": {
    "number": "420777777777",
    "iso": null
  },
  "text": "test message"
}
```

## Převod na řetězec

Objekt `BulkGate\Sms\Message` implementuje magickou metodu [`__string()`](http://php.net/manual/en/language.oop5.magic.php#object.tostring)

``` php
/** @var BulkGate\Sms\Message $message */
$message = (string) $message; // do proměnné
echo $message; // na výstup
```

Výstupem je:

```
420777777777: test message
```

## Převod na pole 

``` php
/** @var BulkGate\Sms\Message $message */
$array = $message->toArray();
```

## Fluentní rozhraní

Fluentní rozhraní (anglicky [fluent interface](https://en.wikipedia.org/wiki/Fluent_interface)) je technika řetězení metod.

``` php
$message = new Sms\Message();

$message->phoneNumber('420777777777')
        ->text('test message');
```
