var tape = require("tape"),
    isFunction = require("..");


tape("isFunction(value: Any) should return true when the value is a Function", function(assert) {
    assert.equal(isFunction(null), false);
    assert.equal(isFunction(undefined), false);
    assert.equal(isFunction(0), false);
    assert.equal(isFunction(""), false);
    assert.equal(isFunction({}), false);
    assert.equal(isFunction([]), false);
    assert.equal(isFunction(/./), false);

    assert.equal(isFunction(function noop() {}), true);

    assert.end();
});
