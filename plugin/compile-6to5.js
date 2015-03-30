var to5 = Npm.require('babel-core');
var handler = function (compileStep, isLiterate) {
  var source = compileStep.read().toString('utf8');
  var outputFile = compileStep.inputPath + ".js";
  var to5output = "";

  try {
    to5output = to5.transform(source, {
      blacklist: ["useStrict"],
      sourceMap: true,
      experimental: true,
      filename: compileStep.pathForSourceMap
    });
  } catch (e) {
    console.log(e); // Show the nicely styled babel error
    return compileStep.error({
      message: 'Babel transform error',
      sourcePath: compileStep.inputPath,
      line: e.loc.line,
      column: e.loc.column
    });
  }

  compileStep.addJavaScript({
    path: outputFile,
    sourcePath: compileStep.inputPath,
    data: to5output.code,
    sourceMap: JSON.stringify(to5output.map)
  });
};

Plugin.registerSourceHandler('es6.js', handler);
Plugin.registerSourceHandler('es6', handler);
Plugin.registerSourceHandler('es', handler);
// see: use react-tools instead https://github.com/grigio/meteor-babel/issues/10
// Plugin.registerSourceHandler('jsx', handler);
