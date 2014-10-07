var test = require('tape');
var signaltohertz = require('./signaltohertz');

test('calculate hertz', function (t) {
    t.plan(2);

    var array = new Float32Array(1024);
    array[40] = 100;
    var result = Math.round(signaltohertz(array));
    t.equal(result, 861);

    t.equal(typeof result, 'number')
});