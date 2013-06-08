jQuery(function ($) {
  function Markleteer() {
    this._settings = {};
    return this;
  }
  Markleteer.prototype.settings = function(settings) {
    this._settings = settings;
    return this;
  }
  // accepts whatever yepnope({load: ARGS}) accepts
  Markleteer.prototype.load = function(arguments) {
    this._load = arguments;
    return this;
  }
  // accepts whatever yepnope(ARGS}) accepts, as well as functions
  Markleteer.prototype.conditionalDependencies = function(arguments) {
    this._conditionalDependencies = arguments;
    return this;
  }

  // TODO allow {allowEdit:true}
  Markleteer.prototype.renderLink = function() {
    var code = JSON.stringify(this, null, 2); // "alert('Hi from Fancy bookmarklet.');"
    var output = $('<textarea class="bookmarklet" title="Fancy"/>').text(code);
    document.write(output.get(0).outerHTML);
  }
});
