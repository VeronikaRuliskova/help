---
title: Transactional SMS examples
---

Below are examples of Simple API implementations for sending [transactional SMS (notification)](difference-promotional-transactional-sms.md#transactional-sms) messages with a [text sender ID](sender-type.md#text-sender-id) in different programming languages: 
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
$connection = fopen('https://api.bulkgate.com/http/', 'r', false,
    stream_context_create(['http' => [
        'method' => 'POST',
        'header' => [
            'Content-type: application/x-www-form-urlencoded'
        ],
        'content' => http_build_query([
            'action' => 'sendsms', 
            'username' => 'bg1805142032xyze',
            'password' => 'secret_password',
            'number' => '447971700001',
            'data' => 'Your verification code for GuitarShop is 071118',
            'isms' => '2',
            'unicode' => '1',
            'sender' => 'GuitarShop'
        ]),
        'ignore_errors' => true
    ]])
);

if($connection)
{
    $response = stream_get_contents($connection);

    var_dump($response);
    
    fclose($connection);
}
```

## PHP cURL 
http://php.net/manual/en/book.curl.php
``` php
$curl = curl_init();

curl_setopt_array($curl, [
    CURLOPT_URL => 'https://api.bulkgate.com/http/',
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_SSL_VERIFYPEER => false,
    CURLOPT_CONNECTTIMEOUT => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => 'POST',
    CURLOPT_POSTFIELDS => http_build_query([
            'action' => 'sendsms', 
            'username' => 'bg1805142032xyze',
            'password' => 'secret_password',
            'number' => '447971700001',
            'data' => 'Your verification code for GuitarShop is 071118',
            'isms' => '2',
            'unicode' => '1',
            'sender' => 'GuitarShop'
    ]),
    CURLOPT_HTTPHEADER => [
        'Content-Type: application/x-www-form-urlencoded'
    ],
]);

$response = curl_exec($curl);

if($error = curl_error($curl))
{
    echo $error;
}
else
{
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

	url := "https://api.bulkgate.com/http/"

	payload := strings.NewReader("action=sendsms&username=bg1805142032xyze&password=secret_password&number=447971700001&data=Your+verification+code+for+GuitarShop+is+071118&isms=2&unicode=1&sender=GuitarShop")

	req, _ := http.NewRequest("POST", url, payload)

	req.Header.Add("Content-Type", "application/x-www-form-urlencoded")

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

connection = http.client.HTTPSConnection('api.bulkgate.com')

connection.request('POST', '/http/', 'action=sendsms&username=bg1805142032xyze&password=secret_password&number=447971700001&data=Your+verification+code+for+GuitarShop+is+071118&isms=2&unicode=1&sender=GuitarShop', {
    'Content-type': 'application/x-www-form-urlencoded'
})

response = connection.getresponse()

print(response.read().decode())
```

## JavaScript
https://developer.mozilla.org/en-US/docs/Web/JavaScript
``` JavaScript
var data = "action=sendsms&username=bg1805142032xyze&password=secret_password&number=447971700001&data=Your+verification+code+for+GuitarShop+is+071118&isms=2&unicode=1&sender=GuitarShop";

var xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://api.bulkgate.com/http/");
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

xhr.send(data);
```

## Java OkHttpClient
http://square.github.io/okhttp/
``` Java
OkHttpClient client = new OkHttpClient();

RequestBody body = RequestBody.create(mediaType, "action=sendsms&username=bg1805142032xyze&password=secret_password&number=447971700001&data=Your+verification+code+for+GuitarShop+is+071118&isms=2&unicode=1&sender=GuitarShop");

MediaType mediaType = MediaType.parse("application/x-www-form-urlencoded");
Request request = new Request.Builder()
  .url("https://api.bulkgate.com/http/")
  .post(body)
  .addHeader("Content-Type", "application/x-www-form-urlencoded")
  .build();

Response response = client.newCall(request).execute();
```

## Bash cURL
https://curl.haxx.se/
``` bash
curl --request POST \
  --url https://api.bulkgate.com/http/ \
  --header 'Content-Type: application/x-www-form-urlencoded' \
  --data 'RequestBody body = RequestBody.create(mediaType, "action=sendsms&username=bg1805142032xyze&password=secret_password&number=447971700001&data=Your+verification+code+for+GuitarShop+is+071118&isms=2&unicode=1&sender=GuitarShop");
'
```
