# ES|QL syntax grammar for [highlight.js](https://highlightjs.org/)

This package contains the ES|QL grammar for Highlight.js.

Usage:

```javascript
const hljs = require('highlight.js');
const esql = require('highlightjs-eslq');

hljs.registerLanguage('esql', esql);
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
