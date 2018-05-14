---
title: HTTP API
---

>## 1 	HTTP API Specification scope
The aim of this document is to describe the API that is available for short messages sending over the bulkgate.com interface via HTTP requests.

>## 2 	HTTP API Description
API supports HTTP methods GET and POST, where POST is the preferred method because of the limitations of the GET method (max. length of URL address is limited)

## 2.1 	HTTP request
Each HTTP GET/POST request that is sent corresponds with a command of the API. The body of each HTTP request is composed of a list of pairs [name,value], according to the standard application/x-www-form-encoded. Each pair represents a parameter of the command. Each command has a different set of parameters, as it will be described below. All of them share the first parameter, named “action”, referring to the type of command which is being used.

## 2.2 	Request URL address
The URL used to send the HTTP requests:
https://api.bulkgate.com/http/
