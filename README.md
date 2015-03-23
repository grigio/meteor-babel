# Meteor Babel [![Build Status](https://travis-ci.org/grigio/meteor-babel.svg?branch=master)](https://travis-ci.org/grigio/meteor-babel)

*WARNING:* This package may break some normal Meteor usage. See [open issues](https://github.com/grigio/meteor-babel/issues?q=is%3Aopen).

Write javascript ES6 (http://git.io/es6features) in your Meteor app. A port of the [Babel](https://babeljs.io) transpiler (previosly known as 6to5).

It also include the `runtime` and `core-js` (without ES6 Number) in `lib/` to support features like function generators, sets,..
 
## Installation
 
```
meteor add grigio:babel
```

## Tests

Inside this package:

```
meteor test-packages ./ # or spacejam test-packages ./
```

## Usage
 
Accepted file extension `es6.js`, `es6`, `es`.

### License

Copyright (C) 2014 Luigi Maselli - http://grigio.org - MIT Licence
