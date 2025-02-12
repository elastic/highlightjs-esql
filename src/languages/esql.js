/*
Language: ES|QL
Description: language definition for Elastic ES|QL language
Category: enterprise
*/

export default function(hljs) {
  const LITERALS = [
    "true",
    "false"
  ];

  const KEYWORDS = [
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

  return {
    name: 'esql',
    aliases: [
      'es|ql',
    ],
    case_insensitive: true,
    keywords: {
      $pattern: /\b[\w\.]+\b/,
      keyword: KEYWORDS,
      built_in: BUILT_IN,
      literal: LITERALS
    },
    contains: [
      HASH_COMMENT_MODE,
      hljs.NUMBER_MODE,
      OPERATOR,
      FUNCTION_CALL,
      QUOTE_STRING
    ],
    illegal: /[{}]|<\//
  };
}
