var Object_toString = Object.prototype.toString,
    reFunction, isFunction;


if (Object_toString.call(function() {}) === "[object Object]") {
    reFunction = /\bfunction\b/;
    isFunction = function isFunction(value) {
        return reFunction.test(Object_toString.call(value));
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
