---
title: Info o HTTP požadavku
---

## Požadavek HTTP
Každý HTTP GET/POST požadavek, který je odeslán, odpovídá příkazu rozhraní API. Tělo každého http požadavku se skládá ze seznamu dvojic [name,value], podle standardní aplikace/x-www-form-encoded. Každá dvojice představuje parametr příkazu. Každý příkaz má jinou sadu parametrů, což bude popsáno níže. Všechny sdílejí první parametr, nazvaný "akce", odkazující na typ příkazu, který se používá.  

## API URL
https://api.bulkgate.com/http/

## Kódování znaků
Parametry odeslané v těle požadavku HTTP GET/POST musí být kodifikovány znakovou sadou "UTF-8".

## Požadavek na odpověď
Každý HTTP požadavek je přidružen k odpovědi ze serveru HTTP, který se liší v závislosti na odeslaném příkazu (akci). V následujících částech je podrobná odpověď pro každý příkaz. V každém případě před analýzou odpovědi je třeba zkontrolovat, zda stavový kód vrácený serverem HTTP je 200, jinak zbytek odezvy nebude přizpůsobený očekávaným vzorům. Jako preventivní mechanismus se doporučuje stanovit maximální časový limit. Pokud tedy není odpověď přijata před uplynutím doby platnosti, HTTP připojení je uzavřeno a požadavek je opětován. Odpověď na každý HTTP požadavek je zakódována v sadě znaků "UTF-8."
