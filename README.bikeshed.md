# Editing

Requirements are written in [Markdown](https://daringfireball.net/projects/markdown/) and transformed to HTML using the [Bikeshed](https://tabatkins.github.io/bikeshed/) preprocessor.

## Generate HTML

### Using Docker

To view HTML output locally (using a [Docker container](https://github.com/netwerk-digitaal-erfgoed/bikeshed-docker)),
run:

```bash
make spec
```

and open the `index.html` file:

```bash
open index.html
```

Alternatively, to update the HTML every time you make changes to [the source document](index.bs):

```bash
make watch
```

### Without Docker

When Docker is not available on your machine use the `web` target which uses a cloud based
Bikeshed processor

```bash
make web
```

and open the `index.html` file:

```bash
open index.html
```