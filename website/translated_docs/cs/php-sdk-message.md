---
title: Zpráva
---

Třída `BulkGate\Sms\Message` reprezentuje objekt SMS zprávy, která se skládá z obsahu zprávy a příjemce.

``` php
use BulkGate\Sms\Message;
```

## Příjemce

Třída přijímá jako první argument telefonní číslo, které může být zadáno řetězcem:

``` php
$message = new Message('420777777777', 'test zprávy');
```

nebo přijímá instanci objektu [`Message\PhoneNumber`](php-sdk-message-phone-number.md):

``` php
$message = new Sms\Message(new Message\PhoneNumber('420777777777'), 'test zprávy');
```

Telefonní číslo můžete zadat i po vytvoření instance objektu pomocí metody `phoneNumber($phone_number, $iso = null)`:

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

Druhým parametrem je zadání textu zprávy. Jsou zde také 2 možnosti, kde první je zadání textu pomocí řetězce a druhou možností je instance třídy [`Message\Text`](php-sdk-message-text.md).

``` php
$message = new Message(
        new Message\PhoneNumber('420777777777'), 
        new Message\Text('test zprávy')
);
```

Samozřejmě i zde můžete definovat text i po vytvoření instance objektu pomocí metody `text($text, array $variables = [])`

``` php
$message = new Sms\Message();
$message->phoneNumber('420777777777');  // řetězec

$message->text('test zprávy'); // řetězec

$message->text(new Message\Text('test zprávy')); 

$message->text(
    'Ahoj <first_name> <last_name>', [
        'first_name' => 'Jan', 
        'last_name' => 'Novak'
    ]); // doplnění proměnných; výsledný text je "Ahoj Jan Novak"
```

Pro získání textu zprávy lze použít metodu `getText()`, která vrací vždy instanci objektu [`Message\Text`](php-sdk-message-text.md).

``` php
/** @var Message\Text $text */
$text = $message->getText();
```

## JSON Podpora

Objekt `BulkGate\Sms\Message` implementuje rozhraní [`\JsonSerializable`](http://php.net/manual/en/class.jsonserializable.php)  díky kterému ho můžete převést pomocí funkce [`json_encode()`](http://php.net/manual/en/function.json-encode.php) do formátu JSON.

``` php
/** @var BulkGate\Sms\Message $message */
$message = new Message('420777777777', 'test zprávy');

echo json_encode($message);
```

Výstupem je:

``` json
{
  "number": {
    "number": "420777777777",
    "iso": null
  },
  "text": "test zprávy"
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
420777777777: test zprávy
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
        ->text('test zprávy');
```
