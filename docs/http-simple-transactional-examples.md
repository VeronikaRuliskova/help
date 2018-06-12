---
title: Transaction SMS examples
---

Below are examples of using the Simple API to send transactional SMS messages with a text sender ID in different programming languages: 
 - [PHP](#php)
 - [PHP cURL](#php-curl)
 - [Go](#go)
 - [Python](#python)
 - [JavaScript](#javascript)
 - [Java OkHttpClient](#java-okhttpclient)
 - [Bash cURL](#bash-curl)

## PHP
http://php.net/
``` php
$connection = fopen('https://portal.bulkgate.com/api/1.0/simple/transactional', 'r', false,
    stream_context_create(['http' => [
        'method' => 'POST',
        'header' => [
            'Content-type: application/json'
        ],
        'content' => json_encode([
            'application_id' => '<APPLICATION_ID>',
            'application_token' => '<APPLICATION_TOKEN>',
            'number' => '420777777777',
            'text' => 'Message text 1',
            'sender_id' => 'gText',
            'sender_id_value' => 'BulkGate'
        ]),
        'ignore_errors' => true
    ]])
);

if($connection)
{
    $response = json_decode(
        stream_get_contents($connection)
    );
    var_dump($response);

    fclose($connection);
}
```

## PHP cURL 
http://php.net/manual/en/book.curl.php
``` php
$curl = curl_init();

curl_setopt_array($curl, [
    CURLOPT_URL => 'https://portal.bulkgate.com/api/1.0/simple/transactional',
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_SSL_VERIFYPEER => false,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => 'POST',
    CURLOPT_POSTFIELDS => json_encode([
        'application_id' => '<APPLICATION_ID>',
        'application_token' => '<APPLICATION_TOKEN>',
        'number' => '420777777777',
        'text' => 'Message text',
        'sender_id' => 'gText',
        'sender_id_value' => 'BulkGate'
    ]),
    CURLOPT_HTTPHEADER => [
        'Content-Type: application/json'
    ],
]);

$response = curl_exec($curl);

if($error = curl_error($curl))
{
    echo $error;
}
else
{
    $response = json_decode($response);

    var_dump($response);
}
curl_close($curl);
```

## Go
https://golang.org/
``` golang
package main

import (
	"fmt"
	"strings"
	"net/http"
	"io/ioutil"
)

func main() {

	url := "https://portal.bulkgate.com/api/1.0/simple/transactional"

	payload := strings.NewReader("{\"application_id\": \"<APPLICATION_ID>\", \"application_token\": \"<APPLICATION_TOKEN>\", \"number\": \"420777777777\", \"text\": \"Message\", \"sender_id\": \"gText\", \"sender_id_value\": \"BulkGate\"}")

	req, _ := http.NewRequest("POST", url, payload)

	req.Header.Add("Content-Type", "application/json")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := ioutil.ReadAll(res.Body)

	fmt.Println(string(body))
}
```

## Python
https://www.python.org/
``` Python
import http.client, json

connection = http.client.HTTPSConnection('portal.bulkgate.com')

connection.request('POST', '/api/1.0/simple/transactional', json.dumps({
    'application_id': '<APPLICATION_ID>',
    'application_token': '<APPLICATION_TOKEN>',
    'number': '420777777777',
    'text': 'Message',
    'sender_id': 'gText',
    'sender_id_value': 'BulkGate'
}
), {
    'Content-type': 'application/json'
})

response = connection.getresponse()

print(response.read().decode())
```

## JavaScript
https://developer.mozilla.org/en-US/docs/Web/JavaScript
``` JavaScript
var data = JSON.stringify({
  "application_id": "<APPLICATION_ID>",
  "application_token": "<APPLICATION_TOKEN>",
  "number": "420777777777",
  "text": "Message",
  "sender_id": "gText",
  "sender_id_value": "BulkGate"
});

var xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://portal.bulkgate.com/api/1.0/simple/transactional");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.send(data);
```

## Java OkHttpClient
http://square.github.io/okhttp/
``` Java
OkHttpClient client = new OkHttpClient();

MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, "{\"application_id\": \"<APPLICATION_ID>\", \"application_token\": \"<APPLICATION_TOKEN>\", \"number\": \"420777777777\", \"text\": \"Message\", \"sender_id\": \"gText\", \"sender_id_value\": \"BulkGate\"}");
Request request = new Request.Builder()
  .url("https://portal.bulkgate.com/api/1.0/simple/transactional")
  .post(body)
  .addHeader("Content-Type", "application/json")
  .build();

Response response = client.newCall(request).execute();
```

## Bash cURL
https://curl.haxx.se/
``` bash
curl --request POST \
  --url https://portal.bulkgate.com/api/1.0/simple/transactional \
  --header 'Content-Type: application/json' \
  --data '{"application_id": "<APPLICATION_ID>", "application_token": "<APPLICATION_TOKEN>", "number": "420777777777", "text": "Message", "sender_id": "gText", "sender_id_value": "BulkGate"}'
```
