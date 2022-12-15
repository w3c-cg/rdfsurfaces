help:
	@echo "Generate HTML from a Bikeshed source document:"
	@echo "  make spec    Generate HTML (with docker)"
	@echo "  make watch   Generate HTML (with docker)"
	@echo "  make web     Generate HTML (without docker)"

spec:
	docker run --rm -v "`pwd`:/spec" -w /spec netwerkdigitaalerfgoed/bikeshed:1.7.0

watch:
	docker run --rm -v "`pwd`:/spec" -w /spec netwerkdigitaalerfgoed/bikeshed:1.7.0 sh -c "bikeshed watch"

web:
	curl -s https://api.csswg.org/bikeshed/ -F file=@index.bs -F force=1 > index.html