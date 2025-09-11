/* Highlight.js LODA ASM custom language definition */
hljs.registerLanguage('asm', function(hljs) {
  return {
    name: 'Assembly',
    case_insensitive: true,
    keywords: {
      keyword: 'mov add sub mul div mod pow gcd lpb lpe trn max min seq log nrt dgs dgr equ neq leq geq ban bor bxo clr dir dif bin fac',
      built_in: '\$\d+|\$\$\d+',
      literal: '-?\d+'
    },
    contains: [
      hljs.COMMENT(';', '$'),
      {
        className: 'number',
        begin: '-?\b\d+\b',
        relevance: 0
      },
      {
        className: 'variable',
        begin: '\$\$?\d+',
        relevance: 0
      },
      {
        className: 'keyword',
        begin: /\b(mov|add|sub|mul|div|mod|pow|gcd|lpb|lpe|trn|max|min|seq|log|nrt|dgs|dgr|equ|neq|leq|geq|ban|bor|bxo|clr|dir|dif|bin|fac)\b/
      }
    ]
  };
});
