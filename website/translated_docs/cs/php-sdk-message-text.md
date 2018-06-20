---
title: Text zprávy
---

Třída `BulkGate\Sms\Message\Text` reprezentuje objekt textu zprávy.

``` php
use BulkGate\Sms\Message\Text;
```

Konstruktor přijímá dva nepovinné parametry. Prvním je samotná šablona zprávy `$text`. Druhým je pole `$variables`, které předává proměnné pro šablonu zprávy.

``` php
$text = 'Ahoj <name>, přejeme ti vše nejlepší k tvým <age>. narozeninám.';

$variables = [
    'name' => 'Honzo',
    'age' => '29'
];

$message_text = new Text($text, $variables);
``` 

Třída text podporuje dopňování proměnných do textu, jak je vidět na předchozím příkladu. Zástupné symboly `<name>` a `<age>` jsou nahrazeny za příslušné hodnoty (`<name>` na `Honzo` a `<age>` na `29`) z pole `$variables`.

Text lze nastavit i pomocí metody `text($text, array $variables)`, která přijímá stejné parametry jako konstruktor.

``` php
$message_text->text($text, $variables);
``` 

## Získání zprávy

``` php 
/** @var BulkGate\Sms\Message\Text $message_text */

echo json_encode($message_text); // výstup: "Ahoj Honzo, přejeme ti vše nejlepší k tvým 29. narozeninám."

$message_text->getText();  // výstup: Ahoj Honzo, přejeme ti vše nejlepší k tvým 29. narozeninám.

$text = (string) $message_text; 

echo $message_text;
```
