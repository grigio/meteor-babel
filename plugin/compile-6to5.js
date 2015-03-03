var to5 = Npm.require('babel-core');
var handler = function (compileStep, isLiterate) {
  var source = compileStep.read().toString('utf8');
  var outputFile = compileStep.inputPath + ".js";

  var to5output = to5.transform(source, {
    blacklist: ["useStrict"],
    sourceMap: true,
    filename: compileStep.pathForSourceMap
  });

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
Plugin.registerSourceHandler('jsx', handler);
