# ES|QL syntax grammar for [highlight.js](https://highlightjs.org/)

> [!IMPORTANT]
> This repository has moved. Development now happens in the
> [`elastic/esql-js`](https://github.com/elastic/esql-js) monorepo, under
> [`packages/highlightjs-esql`](https://github.com/elastic/esql-js/tree/main/packages/highlightjs-esql).
> Please open issues and pull requests there instead of here. This repository
> is kept for historical reference only and is no longer maintained.

This package contains the ES|QL grammar for Highlight.js.

![ES|QL sample highlighted query](https://github.com/user-attachments/assets/1331f854-2615-45e3-9a92-f90a230d95b7)

Usage:

```javascript
const hljs = require('highlight.js');
const esql = require('@elastic/highlightjs-esql');

hljs.registerLanguage('esql', esql);
```

## License

MIT
