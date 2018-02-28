import test from 'ava';
import { join } from 'path';
import { readFile } from 'fs-extra';
import sortJson from 'sort-json';
import nlogo from '.';
import nlogoImages from './images';
import logosJson from './logos.json';

const imagesDir = join(__dirname, 'images');

test('simple lookup', t => {
  t.deepEqual(nlogo.get('react-redux'), {
    filename: 'redux.svg',
    url: 'https://davej.github.io/NLogo/images/redux.svg',
    author: {
      name: 'Matthew Johnston',
      url: 'http://thedeskofmatthew.com/'
    }
  });
});

test('failed lookup', t => {
  t.is(nlogo.get('does-not-exist'), null);
});

test('advanced lookup', t => {
  t.deepEqual(nlogo.get('@angular/core'), {
    filename: 'angular.svg',
    url: 'https://davej.github.io/NLogo/images/angular.svg'
  });
});

test('advanced local lookup', t => {
  t.deepEqual(nlogoImages.get('@angular/core'), {
    filename: 'angular.svg',
    url: 'https://davej.github.io/NLogo/images/angular.svg',
    path: join(imagesDir, 'angular.svg')
  });
});

test('failed local lookup', t => {
  t.deepEqual(nlogoImages.get('does-not-exist'), null);
});

test('verify all referenced images exist', async t => {
  const imageSrcs = Object.values(logosJson);
  const existingFiles = (await Promise.all(
    imageSrcs.map(val => readFile(join(imagesDir, val.filename)))
  )).filter(x => !!x);
  t.is(existingFiles.length, imageSrcs.length);
});

test('verify `logos.json` is sorted alphabetically', t => {
  const currentLogosJson = logosJson;
  const sortedLogosJson = sortJson(logosJson);
  t.deepEqual(Object.keys(currentLogosJson), Object.keys(sortedLogosJson));
});
