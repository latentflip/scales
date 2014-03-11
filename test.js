global.debug = function () {
    console.log.apply(console, arguments); 
    var args = Array.prototype.slice.call(arguments);
    return args[args.length - 1];
};

var test = require('tape');
var scales = require('./scales');
var d3 = require('d3');

var closeTo = function (a, b) {
    return Math.abs(b - a) < 0.000001;
};

test('identity linear', function (t) {
    var scale = scales.linear();

    var testScale = d3.scale.linear();

    var values = testScale.ticks();

    t.plan(values.length);

    values.forEach(function (v) {
        t.ok(closeTo(scale(v), testScale(v)));
    });
});

test('linear with simple input domain', function (t) {
    var scale = scales.linear()
                      .domain([0, 100]);

    var testScale = d3.scale.linear()
                          .domain([0, 100]);

    var values = testScale.ticks();

    t.plan(values.length);

    values.forEach(function (v) {
        t.ok(closeTo(scale(v), testScale(v)));
    });
});

test('linear with negative input domain', function (t) {
    var scale = scales.linear()
                      .domain([-100, 100]);
    var testScale = d3.scale.linear()
                          .domain([-100, 100]);

    var values = testScale.ticks();

    t.plan(values.length);

    values.forEach(function (v) {
        t.ok(closeTo(scale(v), testScale(v)));
    });
});

test('linear with flipped input domain', function (t) {
    var scale = scales.linear()
                      .domain([-100, -200]);
    var testScale = d3.scale.linear()
                          .domain([-100, -200]);

    var values = testScale.ticks();

    t.plan(values.length);

    values.forEach(function (v) {
        t.ok(closeTo(scale(v), testScale(v)));
    });
});

test('linear with simple output range', function (t) {
    var scale = scales.linear()
                      .range([0, 100]);

    var testScale = d3.scale.linear()
                            .range([0, 100]);

    var values = testScale.ticks();

    t.plan(values.length);

    values.forEach(function (v) {
        t.ok(closeTo(scale(v), testScale(v)));
    });
});


test('power basic', function (t) {
    var scale = scales.pow()
                      .exponent(0.5);

    var testScale = d3.scale.pow()
                            .exponent(0.5);

    var values = testScale.ticks();

    t.plan(values.length);

    values.forEach(function (v) {
        t.ok(closeTo(scale(v), testScale(v)));
    });
});

test('power with offset', function (t) {
    var scale = scales.pow()
                      .domain([5,10])
                      .range([-5,-10])
                      .exponent(0.5);

    var testScale = d3.scale.pow()
                            .domain([5,10])
                            .range([-5,-10])
                            .exponent(0.5);

    var values = testScale.ticks();

    t.plan(values.length);

    values.forEach(function (v) {
        t.ok(closeTo(scale(v), testScale(v)));
    });
});
