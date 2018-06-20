---
title: Message of the Text
---

The `BulkGate\Sms\Message\Text` class represents the object of the message text.

``` php
use BulkGate\Sms\Message\Text;
```

The constructor accepts two optional parameters. The first is the `$text` message template itself. The second is the field `$variables`  that passes variables for the message template.

``` php
$text = 'Hi <name>, we wish you all the best to your <age> birthday!';

$variables = [
    'name' => 'John',
    'age' => '29'
];

$message_text = new Text($text, $variables);
``` 

The text class supports adding of variables to the text, as seen in the previous example. The symbols `<name>` and `<age>` are replaced by appropriate values (`<name>` by `John` and `<age>` by `29`) from the `$variables` field.

You can also set up the text using the `text($text, array $variables)` method, which accepts the same parameters as constructor.

``` php
$message_text->text($text, $variables);
``` 

## Obtaining message

``` php 
/** @var BulkGate\Sms\Message\Text $message_text */

echo json_encode($message_text); // output: "Hi Johne, we wish you all the best to your 29 birthday!"

$message_text->getText();  // output: Hi Johne, we wish you all the best to your 29 birthday!

$text = (string) $message_text; 

echo $message_text;
```
