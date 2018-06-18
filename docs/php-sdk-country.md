---
title: Země
---

Třída `BulkGate\Sms\Country` je statická třída, která obsahuje konstanty s [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) kódy.

``` php
use BulkGate\Sms\Country;
```

Použití:

``` php
echo Country::CZECH_REPUBLIC; // 'CZ'

echo Country::UNITED_KINGDOM; // 'GB'

echo Country::UNITED_STATES; // 'US'

echo Country::FRANCE; // 'FR'

echo Country::AUSTRALIA; // 'AU'

// ... etc

```
