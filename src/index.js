var isNullOrUndefined = require("is_null_or_undefined");


var Object_toString = Object.prototype.toString,
    isFunction;


if (Object_toString.call(function() {}) === "[object Object]") {
    isFunction = function isFunction(value) {
        return !isNullOrUndefined(value) && value.constructor === Function;
    };
} else if (typeof(/./) === "function" || (typeof(Uint8Array) !== "undefined" && typeof(Uint8Array) !== "function")) {
    isFunction = function isFunction(value) {
        return Object_toString.call(value) === "[object Function]";
    };
} else {
    isFunction = function isFunction(value) {
        return typeof(value) === "function" || false;
    };
}


module.exports = isFunction;
