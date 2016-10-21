var has = require("@nathanfaucett/has");


module.exports = objectReverse;


function objectReverse(object) {
    var localHas = has,
        out = {},
        key;

    for (key in object) {
        if (localHas(object, key)) {
            out[object[key]] = key;
        }
    }

    return out;
}
