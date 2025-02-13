# ES|QL syntax grammar for [highlight.js](https://highlightjs.org/)

This package contains the ES|QL grammar for Highlight.js.

![ES|QL sample highlighted query](https://github.com/user-attachments/assets/1331f854-2615-45e3-9a92-f90a230d95b7)

Usage:

```javascript
const hljs = require('highlight.js');
const esql = require('highlightjs-eslq');

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
```

Run build script:

```
npm i
node ./tools/build.js -t node
```

Run CDN build:

```
node ./tools/build.js -t cdn
```

Run tests:

```
npm run test
```

Run only ES|QL language tests:

```
ONLY_EXTRA=true npm run test-markup
```


## Releasing

Run test and build steps:

```
yarn test
yarn format
yarn lint
yarn build
```

Publish with `release-it` tool:

```
npx release-it
```


## License

MIT
