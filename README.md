# NLogo

> A searchable collection of logos for node/npm packages

## PR this please

It's early days and contributions are required to build up a comprehensive list of logos for node/npm packages.

There are three types of PRs that would be super helpful right now:

1. Add logos for existing node/npm modules. [Details how to do this here]()
2. Request that someone creates a logo for one of your open source node/npm modules. [Details how to do this here]()
3. PRs to make the code better and docs clearer are also very much appreciated.

## How to use

There are two libraries that you can use, `nlogo` or [`nlogo-images`](https://github.com/davej/NLogo/tree/master/images).
The differences are:

* `nlogo`: Gives you a remote (on the web) reference to the logos
* `nlogo-image`: Bundles all images and gives you a local (on hard disk) refererence to logos

Be wary of using `nlogo-images` because it bundles **all** of the image files which may add quite a bit of weight to your `node_modules` directory.

### `nlogo`

```
npm install nlogo
```

```js
const nlogo = require('nlogo');
const req = require('request-promise-native');
const lodash = nlogo.get('lodash.partition');
// => {
//      filename: 'lodash.svg',
//      url: 'https://nlogo.github.io/images/lodash.svg',
//      author: 'Dave Jeffery <dave@davejeffery.com>'
//    }
await req(lodash.url);
// => '<svg width="2500" height="2275">…</svg>'
```

### `nlogo-images`

```
npm install nlogo-images
```

```js
const logos = require('nlogo-images');
const { readFile } = require('fs');

const lodash = logos.get('lodash.partition');
// => {
//      filename: 'lodash.svg',
//      path: '/Users/dave/sites/my-site.com/node_modules/nlogo-images/lodash.svg',
//      url: 'https://nlogo.github.io/images/lodash.svg',
//      author: 'Dave Jeffery <dave@davejeffery.com>'
//    }
await readFile(lodash.path, 'utf8');
// => '<svg width="2500" height="2275">…</svg>'
```

## Next Goals

1. Encourage collaboration between logo designers and devs/maintainers to create logos for their open-source projects
2. Make a simple web app frontend that allows you to filter through the logos in this repo
3. Add more structure around image formats and dimensions, expose more logo metadata.

# 5 Reasons why your node module should have a logo

> These are from the top of my head and probably not backed by any science. (PR this to make it more compelling and add citations).

1. Logos are good UX, you can generally scan colors + shapes more quickly than read some text.
2. Logos can often quickly tell you something about the project
3. Logos help you remember a project
4. i18n freindly
5. Having fun, being relatable and expressing personality are awesome
