# N3S - RDF Surfaces Grammar

This work is based on the grammars defined by [Łukasz Szeremeta work on an initial N3 grammar](https://github.com/lszeremeta/n3) and 
[William Van Woensel and Dominik Tomaszuk work on the current N3 grammar](https://github.com/w3c/N3).

The Turtle grammar is used as basis and extended with the N3 construct for a graph term. Changes between Turtle and N3S include:

- Support for an RDF Surface as a combination of a collection term, a predicate and an N3 graph term.
- Support for the N3 graph term construct.
- Support for comments in files.

The grammar is available in the `rdfsurfaces.g4` and `rdfsurfaces.ebnf` files.

## Building JavaScript demo parser

```
npm install
npm run make:grammar
```

## Test the parser

```
node index.js valid_example2.n3s
```

## Generate EBNF grammar

Install the `ebnf-convert.war` from https://github.com/GuntherRademacher/ebnf-convert.

Run `npm run make:ebnf`