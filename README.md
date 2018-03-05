# NLogo [![Build Status](https://travis-ci.org/davej/NLogo.svg?branch=master)](https://travis-ci.org/davej/NLogo)

> A searchable collection of logos for node/npm packages

## Reasons why more open source projects should have a logo

> These are from the top of my head and probably not backed by any science. (PR this to make it more compelling and add citations).

1.  Logos are good UX, you can generally scan colors + shapes more quickly than read some text.
2.  Logos can often quickly tell you something about the project
3.  Logos help you remember a project
4.  i18n freindly
5.  Having fun, being relatable and expressing personality are awesome

## PR this please

It's early days and contributions are required to build up a comprehensive list of logos for node/npm packages.

There are two types of contributions that would be super helpful right now:

1.  [Add logos for existing node/npm modules](./CONTRIBUTING.md#1-add-logos-for-existing-nodenpm-modules)
2.  [Request that someone creates a logo for one of your open source node/npm modules](./CONTRIBUTING.md#2-request-that-someone-creates-a-logo-for-one-of-your-open-source-nodenpm-modules)

## How to use

There are two libraries that you can use, `nlogo` or `nlogo-images`.

The differences are:

* `nlogo`: Gives you a remote (on the web) reference to the logos
* `nlogo-images`: Bundles all images and gives you a local (on hard disk) refererence to logos

Be wary of using `nlogo-images` because it bundles **all** of the image files which may add quite a bit of weight to your `node_modules` directory.

### `nlogo`

```
npm install nlogo
```

```js
const nlogo = require('nlogo');
const req = require('request-promise-native');
const redux = nlogo.get('react-redux');
// => {
//      filename: 'redux.svg',
//      url: 'https://nlogo.github.io/images/redux.svg',
//      author: {
//        name: "Matthew Johnston",
//        url: "http://thedeskofmatthew.com/"
//      }
//    }
await req(redux.url);
// => '<svg>…</svg>'
```

### `nlogo-images`

```
npm install nlogo-images
```

```js
const logos = require('nlogo-images');
const { readFile } = require('fs');

const redux = logos.get('react-redux');
// => {
//      filename: 'redux.svg',
//      path: '/Users/dave/my-site.com/node_modules/nlogo-images/redux.svg',
//      url: 'https://nlogo.github.io/images/redux.svg',
//      author: {
//        name: "Matthew Johnston",
//        url: "http://thedeskofmatthew.com/"
//      }
//    }
await readFile(redux.path, 'utf8');
// => '<svg>…</svg>'
```

## Next Goals

1.  Encourage collaboration between logo designers and devs/maintainers to create logos for their open-source projects
2.  Make a simple web app frontend that allows you to filter through the logos in this repo
3.  Add more structure around image formats and dimensions, expose more logo metadata.
