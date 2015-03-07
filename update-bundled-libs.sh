#!/bin/sh
# Build latest core-js without ES6 Number
#  https://github.com/grigio/meteor-babel/issues/5

echo "--> Building latest 'core-js' .."
sh -c "mkdir temp && cd temp && npm install core-js && \
       cd node_modules/core-js && npm install && \
       grunt build:es5,es6,es7,js,web --blacklist=es6.number.constructor --path=core-js-no-number"

mv temp/node_modules/core-js/core-js-no-number.js lib/ && rm -Rf temp

echo "--> Getting latest 'runtime' .."
curl https://raw.githubusercontent.com/facebook/regenerator/master/runtime.js > lib/runtime.js