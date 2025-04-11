/*
Language: ES|QL
Description: language definition for Elastic ES|QL language
Website: https://www.elastic.co/guide/en/elasticsearch/reference/current/esql.html
Category: enterprise
*/

const source = (re) => {
  if (!re) return null;
  if (typeof re === "string") return re;
  return re.source;
};

const concat = (...args) => {
  const joined = args.map((x) => source(x)).join("");
  return joined;
};

const either = (...args) => {
  const joined = '(' + args.map((x) => source(x)).join("|") + ")";
  return joined;
};

export default function(hljs) {
  const literals = ['TRUE', 'FALSE', 'NULL'];
  const binaryNamedOperators = ['AND', 'OR', 'IS', 'IN', 'AS', 'LIKE', 'RLIKE'];
  const otherNamedOperators = ['ASC', 'DESC', 'FIRST', 'LAST', 'NULLS', 'NOT'];
  
  const keywords = ['BY', 'ON', 'WITH', 'METADATA'];
  const commands = [
    'DISSECT',
    'DROP',
    'ENRICH',
    'EVAL',
    'EXPLAIN',
    'FORK',
    'FROM',
    'FULL JOIN',
    'GROK',
    'INFO',
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

  const OPERATOR = {
    className: "operator",
    match: /\|\+\-%\*\//
  };

  const STRING = {
    className: 'string',
    begin: /"/,
    end: /"/,
    contains: [ hljs.BACKSLASH_ESCAPE ]
  };

  const functions = [
    'ABS',
    'ACOS',
    'ASIN',
    'ATAN',
    'ATAN2',
    'AVG',
    'BIT_LENGTH',
    'BUCKET',
    'BYTE_LENGTH',
    'CASE',
    'CATEGORIZE',
    'CBRT',
    'CEIL',
    'CIDR_MATCH',
    'COALESCE',
    'CONCAT',
    'COS',
    'COSH',
    'COUNT_DISTINCT',
    'COUNT',
    'DATE_DIFF',
    'DATE_EXTRACT',
    'DATE_FORMAT',
    'DATE_PARSE',
    'DATE_TRUNC',
    'E',
    'ENDS_WITH',
    'EXP',
    'FLOOR',
    'FROM_BASE64',
    'GREATEST',
    'HASH',
    'HYPOT',
    'IP_PREFIX',
    'LEAST',
    'LEFT',
    'LENGTH',
    'LOCATE',
    'LOG',
    'LOG10',
    'LTRIM',
    'MATCH',
    'MAX',
    'MEDIAN_ABSOLUTE_DEVIATION',
    'MEDIAN',
    'MIN',
    'MV_APPEND',
    'MV_AVG',
    'MV_CONCAT',
    'MV_COUNT',
    'MV_DEDUPE',
    'MV_FIRST',
    'MV_LAST',
    'MV_MAX',
    'MV_MEDIAN_ABSOLUTE_DEVIATION',
    'MV_MEDIAN',
    'MV_MIN',
    'MV_PERCENTILE',
    'MV_PSERIES_WEIGHTED_SUM',
    'MV_SLICE',
    'MV_SORT',
    'MV_SUM',
    'MV_ZIP',
    'NOW',
    'PERCENTILE',
    'PI',
    'POW',
    'QSTR',
    'REPEAT',
    'REPLACE',
    'REVERSE',
    'RIGHT',
    'ROUND',
    'RTRIM',
    'SIGNUM',
    'SIN',
    'SINH',
    'SPACE',
    'SPLIT',
    'SQRT',
    'ST_CENTROID_AGG',
    'ST_CONTAINS',
    'ST_DISJOINT',
    'ST_DISTANCE',
    'ST_ENVELOPE',
    'ST_EXTENT_AGG',
    'ST_INTERSECTS',
    'ST_WITHIN',
    'ST_X',
    'ST_XMAX',
    'ST_XMIN',
    'ST_Y',
    'ST_YMAX',
    'ST_YMIN',
    'STARTS_WITH',
    'STD_DEV',
    'SUBSTRING',
    'SUM',
    'TAN',
    'TANH',
    'TAU',
    'TO_BASE64',
    'TO_BOOLEAN',
    'TO_CARTESIANPOINT',
    'TO_CARTESIANSHAPE',
    'TO_DATE_NANOS',
    'TO_DATEPERIOD',
    'TO_DATETIME',
    'TO_DEGREES',
    'TO_DOUBLE',
    'TO_GEOPOINT',
    'TO_GEOSHAPE',
    'TO_INTEGER',
    'TO_IP',
    'TO_LONG',
    'TO_LOWER',
    'TO_RADIANS',
    'TO_STRING',
    'TO_TIMEDURATION',
    'TO_UNSIGNED_LONG',
    'TO_UPPER',
    'TO_VERSION',
    'TOP',
    'TRIM',
    'VALUES',
    'WEIGHTED_AVG',
  ];

  const FUNCTION_CALL = {
    className: 'function',
    begin: concat(/\b/, either(...functions), /\s*\(/),
    keywords: {
      keyword: functions
    }
  };

  const DOCTAGS = hljs.COMMENT(
    '/\\*', // begin
    '\\*/', // end
    {
      contains: [
        {
          scope: 'doctag', begin: '@\\w+'
        }
      ]
    }
  );

  const PARAM = {
    className: 'variable',
    begin: '\\?(\\w+)?',
  };

  const CAST = {
    className: 'type',
    begin: '::\\w+',
  };

  const PUNCTUATION = {
    scope: "punctuation",
    match: /[,;{}\[\]\(\)]/
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
        ...keywords,
        ...commands,
      ],
      built_in: [
        ...binaryNamedOperators,
        ...otherNamedOperators,
      ],
      literal: literals
    },
    contains: [
      DOCTAGS,
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.C_LINE_COMMENT_MODE,
      hljs.QUOTE_STRING_MODE,
      hljs.C_NUMBER_MODE,
      OPERATOR,
      FUNCTION_CALL,
      STRING,
      PARAM,
      CAST,
      PUNCTUATION,
    ],
    illegal: /[{}]|<\//
  };
}
