var Plugin = require('broccoli-plugin');
var chalk = require('chalk');
var elmCss = require('elm-css');
var log = console.log;


ElmCssPlugin.prototype = Object.create(Plugin.prototype);
ElmCssPlugin.constructor = ElmCssPlugin;


function ElmCssPlugin(inputNodes, _options) {
  var options = _options || {};

  if (!(this instanceof ElmCssPlugin)) {
    return new ElmCssPlugin(options);
  }

  Plugin.call(this, [inputNodes]);
}


ElmCssPlugin.prototype.build = function() {
  return elmCss(
    process.cwd(),
    "elm/Stylesheets.elm",
    this.outputPath,
    "Stylesheets",
    "files",
    undefined
  ).then(function(results) {
    var filesCreated = results.map(function(result) {
      return chalk.blue(result.filename);
    });
    log('broccoli-elm-css created', filesCreated.join(', '));
  });
};


module.exports = ElmCssPlugin;
