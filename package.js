Package.describe({
  name: 'grigio:babel',
  summary: 'Write javascript ES6 in your Meteor app',
  version: '0.0.5',
  git: 'https://github.com/grigio/meteor-babel.git'
});


Package.registerBuildPlugin({
  name: 'compile6to5',
  use: [],
  sources: [
    'plugin/compile-6to5.js'
  ],
  npmDependencies: {
                      'babel-core':'4.3.0'
                   }
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');

  api.addFiles('lib/core-js.js');
  // runtime
  api.addFiles('lib/runtime.js');
});

Package.onTest(function (api) {
  api.use(['grigio:babel', 'tinytest']);
  api.addFiles([
    'tests/basic_test.es6.js'
  ], ['client', 'server']);
});