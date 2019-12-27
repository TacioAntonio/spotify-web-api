# Spotify web API

[![Build Status](https://travis-ci.org/willianjusten/spotify-wrapper.svg?branch=master)](https://travis-ci.org/willianjusten/spotify-wrapper)  [![Coverage Status](https://coveralls.io/repos/github/TacioAntonio/Spotify/badge.svg?branch=master)](https://coveralls.io/github/TacioAntonio/Spotify?branch=master)

> Um wrapper para trabalhar com o [Spotify Web API](https://developer.spotify.com/web-api/).

## Suporte

Esta biblioteca conta com [Fetch API](https://fetch.spec.whatwg.org/). E essa API é suportada nos seguintes navegadores.

### Pré-requisitos

![Chrome](https://cloud.githubusercontent.com/assets/398893/3528328/23bc7bc4-078e-11e4-8752-ba2809bf5cce.png) | ![Firefox](https://cloud.githubusercontent.com/assets/398893/3528329/26283ab0-078e-11e4-84d4-db2cf1009953.png) | ![Opera](https://cloud.githubusercontent.com/assets/398893/3528330/27ec9fa8-078e-11e4-95cb-709fd11dac16.png) | ![Safari](https://cloud.githubusercontent.com/assets/398893/3528331/29df8618-078e-11e4-8e3e-ed8ac738693f.png) | ![IE](https://cloud.githubusercontent.com/assets/398893/3528325/20373e76-078e-11e4-8e3a-1cb86cf506f0.png) |
--- | --- | --- | --- | --- |
39+ ✔ | 42+ ✔ | 29+ ✔ | 10.1+ ✔ | Nope ✘ |

## Dependências

Essa biblioteca depende de [Fetch](https://fetch.spec.whatwg.org/) para fazer solicitações à API da Web do Spotify. Para ambientes que não oferecem suporte à busca, é necessário fornecer um [polyfill](https://github.com/github/fetch) ao navegador ou [polyfill](https://github.com/bitinn/node-fetch) para Node.

### Instalação

```sh
$ npm i @tacioantonio/spotify-web-api
```

## Como utilizar

### ES6

```js
// to import a specific method
import { method } from '@tacioantonio/spotify-web-api';
// to import everything
import * as spotifyWrapper from '@tacioantonio/spotify-web-api';
```

### CommonJS

```js
var spotifyWrapper = require('@tacioantonio/spotify-web-api');
```

### UMD no navegador

```html
<!-- to import non-minified version -->
<script src="spotify-web-api.umd.js"></script>

<!-- to import minified version -->
<script src="spotify-web-api.umd.min.js"></script>
```

## Métodos
> Siga os métodos que a biblioteca fornece.

### Search
#### search.albums(query)
> Procure informações sobre os álbuns com a consulta fornecida. Teste no [Spotify Web Console](https://developer.spotify.com/console/get-search-item/) com o tipo definido como álbum.

**Argumentos**

| Argument | Type              | Options                                 |
|----------|-------------------|-----------------------------------------|
|`query`   |*string*           | 'Any search query'                      |

**Exemplo**

```js
spotify.search.albums('Incubus')
  .then(data => {
    // do what you want with the data
  })
```

#### search.artists(query)
> Procure informações sobre artistas com a consulta fornecida. Teste no [Spotify Web Console](https://developer.spotify.com/console/get-search-item/) com o tipo definido como álbum.

**Argumentos**

| Argument | Type              | Options                                 |
|----------|-------------------|-----------------------------------------|
|`query`   |*string*           | 'Any search query'                      |

**Exemplo**

```js
spotify.search.artists('Incubus')
  .then(data => {
    // do what you want with the data
  })
```

#### search.tracks(query)
> Procure informações sobre artistas com a consulta fornecida. Teste no [Spotify Web Console](https://developer.spotify.com/console/get-search-item/) com o tipo definido como álbum.

**Argumentos**

| Argument | Type              | Options                                 |
|----------|-------------------|-----------------------------------------|
|`query`   |*string*           | 'Any search query'                      |

**Exemplo**

```js
spotify.search.tracks('Incubus')
  .then(data => {
    // do what you want with the data
  })
```

#### search.playlists(query)
> Pesquise informações sobre a Playlist com a consulta fornecida. Teste no [Spotify Web Console](https://developer.spotify.com/console/get-search-item/) com o tipo definido como álbum.

**Argumentos**

| Argument | Type              | Options                                 |
|----------|-------------------|-----------------------------------------|
|`query`   |*string*           | 'Any search query'                      |

**Exemplo**

```js
spotify.search.playlists('Incubus')
  .then(data => {
    // do what you want with the data
  })
```

### Album
#### album.getAlbum(id)
> Obter faixas de um álbum. Teste no [Spotify Web Console - Get an Album](https://developer.spotify.com/console/get-album/).

**Argumentos**

| Argument | Type              | Options                                 |
|----------|-------------------|-----------------------------------------|
|`id`   |*string*           | 'Specific id'                      |

**Exemplo**

```js
spotify.album.getAlbum('4aawyAB9vmqN3uQ7FjRGTy')
  .then(data => {
    // do what you want with the data
  })
```

#### album.getAlbums(ids)
> Obter vários álbuns. Teste no [Spotify Web Console - Get Several Albums](https://developer.spotify.com/console/get-several-albums/).

**Argumentos**

| Argument | Type              | Options                                 |
|----------|-------------------|-----------------------------------------|
|`ids`   |Array of strings           | ['id1', 'id2']                      |

**Exemplo**

```js
spotify.album.getAlbums(['4aawyAB9vmqN3uQ7FjRGTy','4aawyAB9vmqN3uQ7FjRGTy'])
  .then(data => {
    // do what you want with the data
  })
```

#### album.getTracks(id)
> Obter faixas de um álbum. Teste no [Spotify Web Console - Get an Album's Tracks](https://developer.spotify.com/console/get-album-tracks/).

**Argumentos**

| Argument | Type              | Options                                 |
|----------|-------------------|-----------------------------------------|
|`id`   |*string*           | 'Specific id'                      |

**Exemplo**

```js
spotify.album.getTracks('4aawyAB9vmqN3uQ7FjRGTy')
  .then(data => {
    // do what you want with the data
  })
```

### Artista
#### artist.getArtist(id)
> Obter um Artista.  Teste no [Spotify Web Console - Get an Artist](https://developer.spotify.com/console/get-artist/).

**Argumentos**

| Argument | Type              | Options                                 |
|----------|-------------------|-----------------------------------------|
|`id`   |*string*           | 'Specific id'                      |

**Exemplo**

```js
spotify.album.getArtist('4aawyAB9vmqN3uQ7FjRGTy')
  .then(data => {
    // do what you want with the data
  })
```

#### artist.getArtists(ids)
> Obter vários artistas. Teste no [Spotify Web Console - Get Several Artists](https://developer.spotify.com/console/get-several-artists/).

**Argumentos**

| Argument | Type              | Options                                 |
|----------|-------------------|-----------------------------------------|
|`ids`   |Array of strings           | ['id1', 'id2']                      |

**Exemplo**

```js
spotify.artist.getArtists(['4aawyAB9vmqN3uQ7FjRGTy', '4aawyAB9vmqN3uQ7FjRGTy'])
  .then(data => {
    // do what you want with the data
  })
```

#### artist.getArtistAlbums(id)
> Obter álbuns de um artista. Teste no [Spotify Web Console - Get an Artist's Albums](https://developer.spotify.com/console/get-artist-albums/).

**Argumentos**

| Argument | Type              | Options                                 |
|----------|-------------------|-----------------------------------------|
|`id`   | *string*          | 'Specific id'                      |

**Exemplo**

```js
spotify.artist.getArtistAlbums('4aawyAB9vmqN3uQ7FjRGTy')
  .then(data => {
    // do what you want with the data
  })
```

#### artist.getRelatedArtists(id)
> Obter artistas relacionados a um artista. Teste no [Spotify Web Console - Get an Artist's Related Artists](https://developer.spotify.com/console/get-artist-related-artists/).

**Argumentos**

| Argument | Type              | Options                                 |
|----------|-------------------|-----------------------------------------|
|`id`   | *string*          | 'Specific id'                      |

**Exemplo**

```js
spotify.artist.getRelatedArtists('4aawyAB9vmqN3uQ7FjRGTy')
  .then(data => {
    // do what you want with the data
  })
```

#### artist.getArtistTopTracks(id)
> Obter as principais faixas de um artista.  Teste no [Spotify Web Console - Get an Artist's Top Tracks Artists](https://developer.spotify.com/console/get-artist-top-tracks/).

**Argumentos**

| Argument | Type              | Options                                 |
|----------|-------------------|-----------------------------------------|
|`id`   | *string*          | 'Specific id'                      |

**Exemplo**

```js
spotify.artist.getArtistTopTracks('4aawyAB9vmqN3uQ7FjRGTy')
  .then(data => {
    // do what you want with the data
  })
```

### Faixas
#### track.getTrack(id)
Obter uma faixa. Teste no [Spotify Web Console - Get a Track](https://developer.spotify.com/console/get-track/).

**Argumentos**

| Argument | Type              | Options                                 |
|----------|-------------------|-----------------------------------------|
|`id`   | *string*          | 'Specific id'                      |

**Exemplo**

```js
spotify.track.getTrack('4aawyAB9vmqN3uQ7FjRGTy')
  .then(data => {
    // do what you want with the data
  })
```

#### track.getTracks(ids)
> Obter várias faixas. Teste no [Spotify Web Console - Get Several Tracks](https://developer.spotify.com/console/get-several-tracks/).

**Argumentos**

| Argument | Type              | Options                                 |
|----------|-------------------|-----------------------------------------|
|`ids`   |Array of strings           | ['id1', 'id2']                      |

**Exemplo**

```js
spotify.track.getTracks(['4aawyAB9vmqN3uQ7FjRGTy', '4aawyAB9vmqN3uQ7FjRGTy'])
  .then(data => {
    // do what you want with the data
  })
```

#### track.getAudioFeature(id)
> Obter recursos de áudio para uma faixa. Teste no [Spotify Web Console - 	Get Audio Features for a Track](https://developer.spotify.com/console/get-audio-features-track/).

**Argumentos**

| Argument | Type              | Options                                 |
|----------|-------------------|-----------------------------------------|
|`id`   | *string*          | 'Specific id'                      |

**Exemplo**

```js
spotify.track.getAudioFeature('4aawyAB9vmqN3uQ7FjRGTy')
  .then(data => {
    // do what you want with the data
  })
```

#### track.getAudioFeatures(ids)
> Obter recursos de áudio para várias faixas.  Teste no [Spotify Web Console - 	Get Audio Features for Several Tracks](https://developer.spotify.com/console/get-audio-features-several-tracks/).

**Argumentos**

| Argument | Type              | Options                                 |
|----------|-------------------|-----------------------------------------|
|`ids`   |Array of strings           | ['id1', 'id2']                      |

**Exemplo**

```js
spotify.track.getAudioFeatures(['4aawyAB9vmqN3uQ7FjRGTy', '4aawyAB9vmqN3uQ7FjRGTy'])
  .then(data => {
    // do what you want with the data
  })
```

#### track.getAudioAnalysis(id)
> Obter análise de áudio para uma faixa. Teste no [Spotify Web Console - Get Audio Analysis for a Track](https://developer.spotify.com/console/get-audio-analysis-track/).

**Argumentos**

| Argument | Type              | Options                                 |
|----------|-------------------|-----------------------------------------|
|`id`   | *string*          | 'Specific id'                      |

**Exemplo**

```js
spotify.track.getAudioAnalysis('4aawyAB9vmqN3uQ7FjRGTy')
  .then(data => {
    // do what you want with the data
  })
```

### Lista de reprodução
#### playlist.getPlaylists()
> Obter uma lista de listas de reprodução do usuário atual.  Teste no [Spotify Web Console - 	Get a List of Current User's Playlists](https://developer.spotify.com/console/get-current-user-playlists/).

**Argumentos**

| Argument | Type              | Options                                 |
|----------|-------------------|-----------------------------------------|
| ---      | ---               | ---                      |

**Exemplo**

```js
spotify.playlist.getPlaylists()
  .then(data => {
    // do what you want with the data
  })
```

#### playlist.getPlaylistsTracks(playlistId)
> Obter faixas de uma lista de reprodução. Teste em [Spotify Web Console - Get a Playlist's Tracks](https://developer.spotify.com/console/get-playlist-tracks/).

**Argumentos**

| Argument | Type              | Options                                 |
|----------|-------------------|-----------------------------------------|
|`playlistId`   | *string*          | 'Specific id'                      |

**Exemplo**

```js
spotify.playlist.getPlaylistsTracks('4aawyAB9vmqN3uQ7FjRGTy')
  .then(data => {
    // do what you want with the data
  })
```

#### playlist.getPlaylist(playlistId)
> Obter uma lista de reprodução. Teste em [Spotify Web Console - Get a Playlist](https://developer.spotify.com/console/get-playlist/).

**Argumentos**

| Argument | Type              | Options                                 |
|----------|-------------------|-----------------------------------------|
|`playlistId`   | *string*          | 'Specific id'                      |

**Exemplo**

```js
spotify.playlist.getPlaylist('4aawyAB9vmqN3uQ7FjRGTy')
  .then(data => {
    // do what you want with the data
  })
```

#### playlist.getUsers(userId)
> Obter uma lista de listas de reprodução de um usuário. Teste em [Spotify Web Console - Get a List of a User's Playlists](https://developer.spotify.com/console/get-playlists/).

**Argumentos**

| Argument | Type              | Options                                 |
|----------|-------------------|-----------------------------------------|
|`userId`   | *string*          | 'Specific id'                      |

**Exemplo**

```js
spotify.playlist.getUsers('4aawyAB9vmqN3uQ7FjRGTy')
  .then(data => {
    // do what you want with the data
  })
```

#### playlist.postPlaylists(name, description, isPublic)
> Crie uma lista de reprodução. Teste em [Spotify Web Console - Create a Playlist](https://developer.spotify.com/console/post-playlists/).

**Argumentos**

| Argument | Type              | Options                                 |
|----------|-------------------|-----------------------------------------|
|`name`   | *string*          | 'Any query'                      |
|`description`   | *string*          | 'Any query'                      |
|`isPublic`   | *boolean*          | 'Any query'                      |

**Exemplo**

```js
spotify.playlist.postPlaylists('Muse', 'My music', false)
  .then(data => {
    // do what you want with the data
  })
```

#### playlist.postPlaylistsTracks(playlistId, uris)
> Adicionar faixas a uma lista de reprodução. Teste em [Spotify Web Console - Add Tracks to a Playlist](https://developer.spotify.com/console/post-playlist-tracks/).

**Argumentos**

| Argument | Type              | Options                                 |
|----------|-------------------|-----------------------------------------|
|`playlistId`   | *string*          | 'Specific id'                      |
|`uris`   | *string*          | 'Any track query'                      |

**Exemplo**

```js
spotify.playlist.postPlaylistsTracks('3cEYpjA9oz9GiPac4AsH4n', 'spotify%3Atrack%3A4iV5W9uYEdYUVa79Axb7Rh%2Cspotify%3Atrack%3A1301WleyT98MSxVHPZCA6M')
  .then(data => {
    // do what you want with the data
  })
```

#### playlist.putPlaylistsTracks(playlistId, rangeStart, rangeLength, insertBefore)
> Reordenar ou substituir as faixas de uma lista de reprodução. Teste em [Spotify Web Console - 	Reorder or replace a Playlist's Tracks](https://developer.spotify.com/console/put-playlist-tracks/).

**Argumentos**

| Argument | Type              | Options                                 |
|----------|-------------------|-----------------------------------------|
|`playlistId`   | *string*          | 'Specific id'                      |
|`rangeStart`   | *number*          | 'Any query'                      |
|`rangeLength`   | *number*          | 'Any query'                      |
|`insertBefore`   | *number*          | 'Any query'                      |

**Exemplo**

```js
spotify.playlist.postPlaylists('3cEYpjA9oz9GiPac4AsH4n', 1, 2, 3)
  .then(data => {
    // do what you want with the data
  })
```

#### playlist.putPlaylists(playlistId, name, description, isPublic)
> Alterar os detalhes de uma lista de reprodução. Teste em [Spotify Web Console - 	Change a Playlist's Details](https://developer.spotify.com/console/put-playlist/).

**Argumentos**

| Argument | Type              | Options                                 |
|----------|-------------------|-----------------------------------------|
|`playlistId`   | *string*          | 'Specific id'                      |
|`name`   | *string*          | 'Any query'                      |
|`description`   | *string*          | 'Any query'                      |
|`isPublic`   | *boolean*          | 'Any query'                      |

**Exemplo**

```js
spotify.playlist.putPlaylists('3cEYpjA9oz9GiPac4AsH4n', 'Muse', 'My music', false);
  .then(data => {
    // do what you want with the data
  })
```

#### playlist.deletePlaylists(playlistId, uri, positions)
> Remover faixas de uma lista de reprodução. Teste em [Spotify Web Console - Remove Tracks from a Playlist](https://developer.spotify.com/console/delete-playlist-tracks/).

**Argumentos**

| Argument | Type              | Options                                 |
|----------|-------------------|-----------------------------------------|
|`playlistId`   | *string*          | 'Specific id'                      |
|`uri`   | *string*          | 'Any track query'                      |
|`positions`   | *number*          | 'Any query'                      |

**Exemplo**

```js
spotify.playlist.deletePlaylists('3cEYpjA9oz9GiPac4AsH4n', 'spotify:track:2DB2zVP1LVu6jjyrvqD44z', [0]);
  .then(data => {
    // do what you want with the data
  })
```

## Executando os testes

Executando testes:
```sh
$ npm run test
```

Assistindo os testes:
```sh
$ npm run test:tdd
```

Cobrir os testes:
```sh
$ npm run test:coverage
```

## Contribuição

Por favor [CONTRIBUTING.md](https://github.com/TacioAntonio/spotify-web-api/blob/master/CONTRIBUTING.md) para obter detalhes sobre nosso código de conduta e o processo de envio de solicitações pull para nós.

## Versionamento

Nós usamos [SemVer](http://semver.org/) para controle de versão. Para as versões disponíveis, consulte o [tags on this repository](https://github.com/TacioAntonio/spotify-web-api/tags).

## Autor

| ![Tácio Antônio](https://avatars2.githubusercontent.com/u/44682965?s=150&=4)
| -
| [Tácio Antônio](https://github.com/TacioAntonio/)

Veja também a lista de [contributors](https://github.com/TacioAntonio/spotify-web-api/graphs/contributors) que participaram deste projeto.

## Licença

Este projeto está licenciado sob a licença MIT - consulte o [LICENSE.md](https://github.com/TacioAntonio/spotify-web-api/blob/master/LICENSE.md) para detalhes.
