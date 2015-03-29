var to5 = Npm.require('babel-core');
var handler = function (compileStep, isLiterate) {
  var source = compileStep.read().toString('utf8');
  var outputFile = compileStep.inputPath + ".js";

  var to5output = to5.transform(source, {
    blacklist: ["useStrict"],
    sourceMap: true,
    experimental: true,
    filename: compileStep.pathForSourceMap
  });

  compileStep.addJavaScript({
    path: outputFile,
    sourcePath: compileStep.inputPath,
    data: to5output.code,
    sourceMap: JSON.stringify(to5output.map)
  });
};

Plugin.registerSourceHandler('rip.js', handler);
Plugin.registerSourceHandler('rip', handler);
Plugin.registerSourceHandler('ri', handler);
// see: use react-tools instead https://github.com/grigio/meteor-babel/issues/10
// Plugin.registerSourceHandler('jsx', handler);
