Package.describe({
  name: 'grigio:babel',
  summary: 'Write javascript ES6 in your Meteor app',
  version: '0.0.2',
  git: 'https://github.com/grigio/meteor-babel.git'
});


Package.registerBuildPlugin({
  name: 'compile6to5',
  use: [],
  sources: [
    'plugin/compile-6to5.js'
  ],
  npmDependencies: {
                      'babel':'4.0.1',
                      'core-js':'0.5.4'
                   }
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');

  // runtime
  api.addFiles('lib/runtime.js');
});

Package.onTest(function(api) {

});
