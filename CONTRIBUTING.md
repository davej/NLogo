# Contributing to NLogo

:+1::tada: **First off, thanks for taking the time to contribute!** :tada::+1:

There are three ways that you can contribute that would be super helpful right now:

1.  Add logos for existing node/npm modules
2.  Request that someone creates a logo for one of your open source node/npm modules
3.  Make the code better or docs clearer

## 1. Add logos for existing node/npm modules

Right now there are ton of modules which have logos but are not in this repo. A good way to get the most bang for the buck is to go through [npm's most depended-upon packages](https://www.npmjs.com/browse/depended) and find packages that have a logo but have not been added to [NLogo's `logos.json` file](./logos.json).

Here is a checklist when adding a logo:

* [ ] Logo background is transparent
* [ ] Logo filesize < 100KB
* [ ] SVG is preffered, PNG is ok if SVG is not available
* [ ] The logo is added to the `images` folder
* [ ] The logo and matching package name is listed in `logos.json`
  * [ ] The package name key should match with the npm package name
  * [ ] it should contain a `filename` field
  * [ ] **(Optional)** it may contain a logo `author` field (or fields)

## 2. Request that someone creates a logo for one of your open source node/npm modules

If you have an open-source npm module and you would like to request a logo design then comment on issue #1. The aim is to hook people up with logo designers who would like to contribute to open source projects.

This is pro-bono and supply of people designing logos might not meet demand from open-source devs. Please be kind, patient and courteous.

Priority may be given to more popular packages (based on github stars).

## 3. Make the code better or docs clearer

This was all knocked together in a day or two so I'm sure there are lots of ways that this can be made much better and explained more cleanly.
