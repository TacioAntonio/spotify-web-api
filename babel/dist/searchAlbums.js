'use strict';

var _main = require('../src/main');

global.fetch = require('node-fetch'); /* eslint-disable import/no-extraneous-dependencies */


var albums = (0, _main.searchAlbums)('Incubus');

albums.then(function (data) {
  return data.albums.items.map(function (item) {
    return console.log(item.name);
  });
});
