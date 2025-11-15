/* Highlight.js LODA ASM custom language definition */
hljs.registerLanguage('asm', function(hljs) {
  return {
    name: 'Assembly',
    case_insensitive: true,
    keywords: {
      keyword: 'mov add sub mul div mod pow gcd lpb lpe trn max min seq log nrt dgs dgr equ neq leq geq ban bor bxo clr fil rol ror dir dif bin fac',
    },
    contains: [
      hljs.COMMENT(';', '$'),
      {
        className: 'string',
        // Highlight directives like #offset, #foo, etc.
        begin: /#[a-zA-Z_][\w-]*/,
        relevance: 10
      },
      {
        className: 'number',
        begin: /-?\b\d+\b/,
        relevance: 0
      },
      {
        className: 'title function',
        // Match $1, $$2, $123, etc.
        begin: /\${1,2}\d+/, 
        relevance: 0
      }
    ]
  };
});
