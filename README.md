# BKN cheerio

Alt of [bkn-scapper](https://github.com/KodeKreatif/bkn-scrapper)

```js
var profileOf = require ('bkn-cheerio');
profileOf ('196805071987121001', function(err, obj) {
  if (err) return done(err);
  console.log (JSON.stringify(obj, null, 2));
});
```

