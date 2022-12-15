# surface

## RDF Surfaces

We implement [BLOGIC](https://www.slideshare.net/PatHayes/blogic-iswc-2009-invited-talk) in [EYE](https://josd.github.io/eye/)
and test it with [some examples and test cases](https://github.com/josd/surface/blob/master/etc.md).

We currently use a [N3](https://w3c.github.io/N3/spec/) sublanguage to express RDF Surfaces.

### A simple example

```
@prefix log: <http://www.w3.org/2000/10/swap/log#>.
@prefix : <http://example.org/ns#>.

:Ghent a :City.

# Every city is a human community
(_:S) log:onNegativeSurface {
    _:S a :City.
    () log:onNegativeSurface {
        _:S a :HumanCommunity.
    }.
}.

# query
(_:S _:C) log:onQuerySurface {
    _:S a _:C.
}.
```

The `top` surface is an implicit positive surface asserting triples like `:Ghent a :City.`
but it is also "containing" a negative surface saying that it is not possible that
something that is a city is not a human community.

### Specification

Surfaces are written as triples where the `subject` is a list of blank nodes marked on the `object` RDF graph.
The `predicate` specifies the kind of surface and the following ones are currently built-ins:

| built-in | semantics |
| -------- | -------- |
| `log:onPositiveSurface` | Positive surfaces claim that an RDF graph on them is true |
| `log:onNegativeSurface` | Negative surfaces claim that an RDF graph on them is false |
| `log:onNeutralSurface` | Neutral surfaces don't claim that the RDF graph on them is true or false |
| `log:onQuerySurface` | Query surfaces use the RDF graph on them as a query |

A negative surface containing a query surface is treated as a backward rule.
See for instance [complex functions](https://github.com/josd/eye/blob/master/reasoning/blogic/complex.n3).
