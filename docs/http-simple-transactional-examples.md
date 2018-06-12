PHP
==========
``` php
$connection = fopen('https://portal.bulkgate.com/api/1.0/simple/transactional', 'r', false,
    stream_context_create(['http' => [
        'method' => 'POST',
        'header' => [
            'Content-type: application/json',
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

PHP cURL
======== 

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
        'Cache-Control: no-cache',
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

Go
===

``` go
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
	req.Header.Add("Cache-Control", "no-cache")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := ioutil.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))
}
```

Python
======

``` python
import http.client

conn = http.client.HTTPConnection("portal,bulkgate,com")

payload = "{\"application_id\": \"<APPLICATION_ID>\", \"application_token\": \"<APPLICATION_TOKEN>\", \"number\": \"420777777777\", \"text\": \"Message\", \"sender_id\": \"gText\", \"sender_id_value\": \"BulkGate\"}"

headers = {
    'Content-Type': "application/json",
    'Cache-Control': "no-cache",
    'Postman-Token': "68d3a2b9-eaf3-8562-88fd-f473a6309b46"
    }

conn.request("POST", "api,1.0,simple,transactional", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```
