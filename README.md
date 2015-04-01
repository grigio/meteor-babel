# Meteor Babel [![Build Status](https://travis-ci.org/grigio/meteor-babel.svg?branch=master)](https://travis-ci.org/grigio/meteor-babel)

*WARNING:* This package may break some normal Meteor usage. See [open issues](https://github.com/grigio/meteor-babel/issues?q=is%3Aopen).

Write javascript ES6 (http://git.io/es6features) in your Meteor app. A port of the [Babel](https://babeljs.io) transpiler (previosly known as 6to5).

It also include the `runtime` and `core-js` (without ES6 Number) in `lib/` to support features like function generators, sets,..
 
## Installation
 
```
meteor add grigio:babel
```

## Configuration (optional)

You can override the default config, just create a `babel.json` file in your project and override the default behavior. Then restart `meteor` to apply.

```
{
  "debug": false,                         // print loaded config
  "verbose": true,                        // print active file extensions
  "extensions": ['es6.js', 'es6', 'jsx'], // babel managed extensions
  "experimental": true                    // experimental ES7 support
}

```
*NOTE*: If you use `reactjs:react` you must create `babel.json` and remove `jsx` from your `extensions`, to avoid `JSX` compilation conflict.

```
{
...
  "extensions": ['es6.js', 'es6'], // .jsx is compiled via react-tools in this case
...
}
```

## Tests

Inside this package:

```
meteor test-packages ./ # or spacejam test-packages ./
```


### License

Copyright (C) 2014 Luigi Maselli - http://grigio.org - MIT Licence
