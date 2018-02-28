import test from 'ava';
import { join } from 'path';
import { readFile } from 'fs-extra';
import sortJson from 'sort-json';
import { get } from './';
import logosJson from './logos.json';

const imagesDir = join(__dirname, 'images');

test('simple lookup', t => {
  t.deepEqual(get('react-redux'), {
    filename: 'redux.svg',
    author: {
      name: 'Matthew Johnston',
      url: 'http://thedeskofmatthew.com/'
    }
  });
});

test('failed lookup', t => {
  t.is(get('does-not-exist'), null);
});

test('advanced lookup', t => {
  t.deepEqual(get('@angular/core'), { filename: 'angular.svg' });
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
