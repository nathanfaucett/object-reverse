var tape = require("tape"),
    objectReverse = require("..");


tape("objectReverse(object) should return a reverse of object", function(assert) {
    var a = {
            "key": "value"
        },
        b = objectReverse(a);

    assert.deepEquals(a, {
        "key": "value"
    });
    assert.deepEquals(b, {
        "value": "key"
    });

    assert.end();
});
