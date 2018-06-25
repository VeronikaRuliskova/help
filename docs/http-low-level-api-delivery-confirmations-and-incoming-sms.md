---
title: Delivery confirmations and incoming SMS
---

## Delivery confirmations and incoming SMS (answers)
To receive dlr reports, please contact us with your DELIVERY_URL address of your script. Delivery reports are sent to DELIVERY_URL via HTTP method GET. See the [table of parameters](#delivery-confirmation-parameters) for this command. See also “AppID” in the [table of parameters.](http-low-level-api-send-bulk-sms-same-text.md#send-bulk-sms-with-same-text-parameters)


### Delivery confirmation: Parameters

| PARAMETER NAME | VALUE | MANDATORY |
|:--- |:--- |:--- |
|status|See the [table with delivery confirmation status](#delivery-confirmation-status)|	Yes|
|smsID|Unique smsID of message	|No|
|price|	Price of SMS in credits	|No|
|from|Only if status=10, SenderID of incoming SMS in international format|	No|
|message|	Only if status=10, Text of incoming SMS in UTF-8 enconding|	No|


### Delivery confirmation: Status

|STATUS|	DESCRIPTION|
|:--- |:--- |
|1|	SMS successfully delivered|
|2|	SMS buffered on SMSC. SMS will be delivered later. Recipient is unavailable.|
|3	|SMS not delivered. Unknown/unavailable recipient.|
|6	|SMS accepted by provider (this status is not enabled by default, contact us for subscribe)|
|8	|SMS message expired|
|10	|Incoming SMS or SMS answer|

### PHP 5.4 procedural
``` php
<?php
$status_list = [
    1 => 'delivered',
    2 => 'unavailable',
    3 => 'not_delivered',
    6 => 'accepted',
    8 => 'expired'
];

$status = filter_input(INPUT_GET, 'status', FILTER_SANITIZE_NUMBER_INT);

if($status && (int) $status === 10)
{
    $from    = filter_input(INPUT_GET, 'from', FILTER_SANITIZE_STRING);
    $message = filter_input(INPUT_GET, 'message', FILTER_SANITIZE_STRING);

    file_put_contents(__DIR__."/inbox.log", '['.date('Y-m-d H-i-s').'] ' .sprintf('From: [%s] Message: [%s]', $from, $message) . PHP_EOL,FILE_APPEND);
    exit(0);
}
elseif($status && in_array((int)$status, array_keys($status_list)))
{
    $price  = filter_input(INPUT_GET, 'price', FILTER_SANITIZE_NUMBER_FLOAT);
    $sms_id = filter_input(INPUT_GET, 'smsID', FILTER_SANITIZE_STRING);

    file_put_contents(__DIR__."/delivery.log", '['.date('Y-m-d H-i-s').'] ' .sprintf('Message ID [%s] is in the status [%s], Price: [%f]', $sms_id, $status_list[$status], $price) . PHP_EOL,FILE_APPEND);
    exit(0);
}
else
{
    echo "invalid status";
    exit(1);
}
```

### PHP 7.1 object-oriented
``` php
<?php declare(strict_types=1);

new class ()
{
    const STATUS_LIST = [
        1 => 'delivered',
        2 => 'unavailable',
        3 => 'not_delivered',
        6 => 'accepted',
        8 => 'expired'
    ];

    public function __construct()
    {
        $status = $this->input('status', 'int');

        if($status === 10 /** INBOX */)
        {
            $this->inbox();
        }
        elseif(in_array($status, array_keys(self::STATUS_LIST)))
        {
            $this->delivery(self::STATUS_LIST[$status]);
        }
        else
        {
            $this->log('Unknown status: '.(string) $status, 'error');
        }
    }

    public function inbox(): void
    {
        $from    = $this->input('from');
        $message = $this->input('message');

        $this->log(sprintf('From: [%s] Message: [%s]', $from, $message), 'inbox');
    }

    public function delivery(string $status): void
    {
        $price  = $this->input('price', 'float');
        $sms_id = $this->input('smsID');

        $this->log(sprintf('Message ID [%s] is in the status [%s], Price: [%f]', $sms_id, $status, $price), 'delivery');
    }

    private function log(string $message, string $type): void
    {
        $message = '['.date('Y-m-d H-i-s').'] ' . $message . PHP_EOL;

        echo $message;
        file_put_contents(__DIR__."/$type.log", $message,FILE_APPEND);

        exit((int) $type === 'error');
    }

    private function input(string $name, string $type = 'string')
    {
        if($type === 'string')
        {
            $value = filter_input(INPUT_GET, $name, FILTER_SANITIZE_STRING);
            return $value ? (string) $value : '';
        }
        else if($type === 'int')
        {
            $value = filter_input(INPUT_GET, $name, FILTER_SANITIZE_NUMBER_INT);
            return $value ? (int) $value : 0;
        }
        else if($type === 'float')
        {
            $value = filter_input(INPUT_GET, $name, FILTER_SANITIZE_NUMBER_FLOAT);
            return $value ? (float) $value : 0.0;
        }

        return null;
    }
};
```
