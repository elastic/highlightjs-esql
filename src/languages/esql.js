/*
Language: ES|QL
Description: language definition for Elastic ES|QL language
Website: https://www.elastic.co/guide/en/elasticsearch/reference/current/esql.html
Category: enterprise
*/

function source(re) {
  if (!re) return null;
  if (typeof re === "string") return re;

  return re.source;
}

function concat(...args) {
  const joined = args.map((x) => source(x)).join("");
  return joined;
}

function either(...args) {
  const joined = '(' + args.map((x) => source(x)).join("|") + ")";
  return joined;
}

export default function(hljs) {
  const LITERALS = [
    "true",
    "false"
  ];

  const commands = [
    'DISSECT',
    'DROP',
    'ENRICH',
    'EVAL',
    'EXPLAIN',
    'FROM',
    'FULL JOIN',
    'GROK',
    'INLINESTATS',
    'JOIN',
    'KEEP',
    'LEFT JOIN',
    'LEFT',
    'LIMIT',
    'LOOKUP JOIN',
    'LOOKUP',
    'METRICS',
    'MV_EXPAND',
    'RENAME',
    'RIGHT JOIN',
    'RIGHT',
    'ROW',
    'SHOW INFO',
    'SHOW',
    'SORT',
    'STATS',
    'WHERE',
  ];

  const BUILT_IN = [
    "avg",
  ];

  const OPERATOR = {
    className: "operator",
    match: /\|/
  };

  const QUOTE_STRING = {
    className: 'string',
    begin: /"/,
    end: /"/,
    contains: [ hljs.BACKSLASH_ESCAPE ]
  };

  const FUNCTIONS = [
    "abs",
    "acos",
    "acosh",
    "asin",
    "asinh",
    "atan",
    "atan2",
    "atanh",
    "case",
  ];

  const FUNCTION_CALL = {
    className: 'function',
    begin: concat(/\b/, either(...FUNCTIONS), /\s*\(/),
    keywords: {
      keyword: FUNCTIONS
    }
  };

  return {
    name: 'esql',
    aliases: [
      'es|ql',
    ],
    case_insensitive: true,
    keywords: {
      $pattern: /\b[\w\.]+\b/,
      keyword: [
        ...commands,
      ],
      built_in: BUILT_IN,
      literal: LITERALS
    },
    contains: [
      hljs.NUMBER_MODE,
      OPERATOR,
      FUNCTION_CALL,
      QUOTE_STRING
    ],
    illegal: /[{}]|<\//
  };
}
