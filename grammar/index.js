import antlr4 from 'antlr4';

import rdfsurfacesLexer from './rdfsurfacesLexer.js';
import rdfsurfacesParser from './rdfsurfacesParser.js';
import fs from 'fs';

let file = process.argv[2];
let verbose = false;

if (file === '-v') {
    verbose = true;
    file = process.argv[3];
}

if (!file) {
    console.error('usage: index.js [-v] file');
    process.exit(1);
}

class Visitor {
    visitChildren(ctx) {
    if (!ctx) {
        return;
    }

    if (ctx.children) {
        return ctx.children.map(child => {
        if (child.children && child.children.length != 0) {
            return child.accept(this);
        } else {
            return child.getText();
        }
        });
    }
    }
}

try {
    const input = fs.readFileSync(file,'utf8');
    const chars = new antlr4.InputStream(input);
    const lexer = new rdfsurfacesLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new rdfsurfacesParser(tokens);
    parser._errHandler = new antlr4.error.BailErrorStrategy();
    const tree = parser.n3sDoc();

    if (verbose) {
        const r = tree.accept(new Visitor());
        console.log(JSON.stringify(r,null,2));
    }
}
catch (e) {
    console.error(`FAILED`);
    process.exit(1);
}
finally {
    console.log(`OK`);
}
