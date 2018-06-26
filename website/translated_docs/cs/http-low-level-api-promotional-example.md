---
title: Promotional SMS examples
---

Níže uvádíme příklady implementace Low Level API pro odeslání [propagační SMS (hromadné)](difference-promotional-transactional-sms.md#promotional-sms) SMS s [textovým odesílatelem](sender-type.md#text-sender-id) v různých programovacích jazycích: 
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
            'action' => 'sendsmsall', 
            'username' => 'bg1805142032xyze',
            'password' => 'secret_password',
            'number' => '447971700001;447971700002',
            'data' => 'Hello, this is marketing campaign example.',
            'isms' => '2;2',
            'unicode' => '1',
            'sender' => 'GuitarShop;GuitarShop'
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
            'action' => 'sendsmsall', 
            'username' => 'bg1805142032xyze',
            'password' => 'secret_password',
            'number' => '447971700001;447971700002',
            'data' => 'Hello, this is marketing campaign example.',
            'isms' => '2;2',
            'unicode' => '1',
            'sender' => 'GuitarShop;GuitarShop'
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

	payload := strings.NewReader("action=sendsmsall&username=bg1805142032xyze&password=secret_password&number=447971700001;447971700002&data=Hello+this+is+marketing+campaign+example&isms=2;2&unicode=1&sender=GuitarShop;GuitarShop")

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

connection.request('POST', '/http/', 'action=sendsmsall&username=bg1805142032xyze&password=secret_password&number=447971700001;447971700002&data=Hello+this+is+marketing+campaign+example&isms=2;2&unicode=1&sender=GuitarShop;GuitarShop', {
    'Content-type': 'application/x-www-form-urlencoded'
})

response = connection.getresponse()

print(response.read().decode())
```

## JavaScript
https://developer.mozilla.org/en-US/docs/Web/JavaScript
``` JavaScript
var data = "action=sendsmsall&username=bg1805142032xyze&password=secret_password&number=447971700001;447971700002&data=Hello+this+is+marketing+campaign+example&isms=2;2&unicode=1&sender=GuitarShop;GuitarShop";

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

RequestBody body = RequestBody.create(mediaType, "action=sendsmsall&username=bg1805142032xyze&password=secret_password&number=447971700001;447971700002&data=Hello+this+is+marketing+campaign+example&isms=2;2&unicode=1&sender=GuitarShop;GuitarShop");

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
  --data 'RequestBody body = RequestBody.create(mediaType, "action=sendsmsall&username=bg1805142032xyze&password=secret_password&number=447971700001;447971700002&data=Hello+this+is+marketing+campaign+example&isms=2;2&unicode=1&sender=GuitarShop;GuitarShop");
'
```
