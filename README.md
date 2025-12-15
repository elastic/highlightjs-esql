# ES|QL syntax grammar for [highlight.js](https://highlightjs.org/)

This package contains the ES|QL grammar for Highlight.js.

![ES|QL sample highlighted query](https://github.com/user-attachments/assets/1331f854-2615-45e3-9a92-f90a230d95b7)

Usage:

```javascript
const hljs = require('highlight.js');
const esql = require('@elastic/highlightjs-esql');

hljs.registerLanguage('esql', esql);
```


## Contributing

First clone the main Highlight.js repository:

```
git clone https://github.com/highlightjs/highlight.js.git
```

Then clone this repo into the `extra/` directory:

```
cd extra
git clone https://github.com/elastic/highlightjs-esql.git
cd ..
npm i
```

To test changes visually using "developer tool", build ES|QL grammar only:

```
node tools/build.js -n esql
```

Open `tools/developer.html` to see your changes in action.

Run only ES|QL language tests:

```
ONLY_EXTRA=true npm run build-browser
```

Run all tests:

```
npm run test
```




## Releasing

To release a new version add a publish label to the PR.


## License

MIT
