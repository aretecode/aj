
var ParamsBuilder = function() {
    this.data = "";
};
ParamsBuilder.prototype.option = function(param) {
    this.data += Params.option(param) + "&";
    return this;
};
ParamsBuilder.prototype.checkbox = function(param) {
    this.data += Params.checkbox(param) + "&";
    return this;
};
ParamsBuilder.prototype.options = function(params) {
    this.data += Params.options(params);
    return this;
};
ParamsBuilder.prototype.inputs = function(params) {
    this.data += Params.inputs(params) + "&";
    return this;
};
ParamsBuilder.prototype.input = function(param) {
    this.data += Params.input(param) + "&";
    return this;
};
ParamsBuilder.prototype.elements = function(params) {
    this.data += Params.elements(params) + "&";
    return this;
};
ParamsBuilder.prototype.ez = function(params) {
    this.data += Params.ez(params) + "&";
    return this;
};
ParamsBuilder.prototype.get = function() {
    /**
     * taking off trailing "&"
     * better than checking it in the loop every time
     */
    return this.data.substring(0, this.data.length - 1);
};
ParamsBuilder.prototype.route = function() {
    /**
     * turn the & into /
     */
    var d = this.data; // this.data.replace("/([A-Za-z]*?)(?=\=)/g", "/"); // .replace("&", "/")
    d = d.replace(/([A-Za-z_-]*?)(?=\=)/g, "");
    d = d.replace(/&/g, "");
    d = d.replace(/=/g, "/");
    return d;
};
ParamsBuilder.prototype.reset = function() {
    this.data = "";
};

function replaceAll(string, find, replace) {
  return string.replace(new RegExp(escapeRegExp(find), "g"), replace);
}