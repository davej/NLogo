# `nlogo-images`

> Bundles all images and gives you a local (on hard disk) refererence to logos

Be wary of using `nlogo-images` because it bundles **all** of the image files which
may add quite a bit of weight to your `node_modules` directory.
You may want to use [`nlogo`](https://github.com/davej/nlogo) instead because it
gives you a remote URL reference to the logos doesn't instead of bundlingthem as
part of the module

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
