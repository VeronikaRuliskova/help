---
title: Low Level API Descritpion
---

## Low level	HTTP API description
Low level HTTP API is available for short messages sending over the bulkgate.com interface via HTTP requests.
API supports HTTP methods GET and POST, where POST is the preferred method because of the limitations of the GET method (max. length of URL address is limited)

## HTTP request
Each HTTP GET/POST request that is sent corresponds with a command of the API. The body of each HTTP request is composed of a list of pairs [name,value], according to the standard application/x-www-form-encoded. Each pair represents a parameter of the command. Each command has a different set of parameters, as it will be described below. All of them share the first parameter, named “action”, referring to the type of command which is being used.

## Request URL address
The URL used to send the HTTP requests:
https://api.bulkgate.com/http/

## Character encoding
The parameters that are sent in the body of the HTTP GET/POST request must be codified with the “UTF-8” charset.
 
## Request response
Each HTTP request is associated with a response from the HTTP server, which varies depending on the sent command (action). In the following sections the response for each command is detailed. At any case, before analyzing the response, it is needed to check that the status code returned by the HTTP server is 200, otherwise, rest of the response will not be adjusted to the expected patterns. As a preventive mechanism, it is recommended to establish a maximum timeout, so if response is not received before expiring it, the HTTP connection is closed, and the request is reattempted again. The response to each HTTP request is encoded in charset “UTF-8.”
