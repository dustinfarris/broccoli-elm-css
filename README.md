# broccoli-elm-css

[![Greenkeeper badge](https://badges.greenkeeper.io/dustinfarris/broccoli-elm-css.svg)](https://greenkeeper.io/)

Compile your elm-css stylesheets for broccoli.

## Installation

```
yarn add -D brocccoli-elm-css
```


## Usage

```js
// Brocfile.js

const ElmCss = require('broccoli-elm-css');

const cssTree = new ElmCss();
```


The plugin will look for elm/Stylesheets.elm and run that through elm-css.  Future versions will make this configurable.


## LICENSE

MIT
