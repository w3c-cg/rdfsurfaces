# RDF Surfaces

The RDF Surfaces sets out to create a sublanguage of [Notation3](https://w3c.github.io/N3/spec/)
in order to implement classical first-order logic with negation in RDF as envisioned by Pat Hayes
in his 2009 ISWC Invited Talk: [BLOGIC](https://www.slideshare.net/PatHayes/blogic-iswc-2009-invited-talk).

See the living document [RDF Surfaces Primer](https://w3c-cg.github.io/rdfsurfaces/).

### Examples and Test Cases

- https://github.com/eyereasoner/Notation3-By-Example/tree/main/blogic
- https://github.com/eyereasoner/eye/tree/b81e05163e21e93e9fc0ab27c369af7f98a16658/reasoning/blogic

### Example using alternative RDF TriG syntax

```trig
# ------------------
# Socrates inference
# ------------------
#
# Infer that Socrates is mortal.

@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>.
@prefix blogic: <http://www.w3.org/2000/10/swap/blogic#>.
@prefix : <http://example.org/ns#>.

:Socrates a :Man.
:Man rdfs:subClassOf :Human.
:Human rdfs:subClassOf :Mortal.

(_:A _:B _:S) blogic:onNegativeSurface _:subclass_surface1.

_:subclass_surface1 {
    _:A rdfs:subClassOf _:B.
    _:S a _:A.
    () blogic:onNegativeSurface _:subclass_surface2.
}

_:subclass_surface2 {
    _:S a _:B.
}

# query
(_:S _:C) blogic:onQuerySurface _:query_surface.

_:query_surface {
    _:S a _:C.
}
```
