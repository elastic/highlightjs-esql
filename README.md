# ES|QL syntax grammar for [highlight.js](https://highlightjs.org/)

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
