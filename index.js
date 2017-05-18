var Plugin = require('broccoli-plugin');
var elmCss = require('elm-css');


ElmCssPlugin.prototype = Object.create(Plugin.prototype);
ElmCssPlugin.constructor = ElmCssPlugin;


function ElmCssPlugin(_options) {
  var options = _options || {};

  if (!(this instanceof ElmCssPlugin)) {
    return new ElmCssPlugin(options);
  }

  Plugin.call(this, []);
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
    console.log('broccoli-elm-css: The following CSS files were created: ');
    results.forEach(function(result) {
      console.log("\t- " + result.filename);
    });
  });
};


module.exports = ElmCssPlugin;
