var linear = require('./linear');

module.exports = function () {
    return power(linear(), 1, [0, 1]);
};

function power (linear, exponent, domain) {
    var powp = makePow(exponent);
    var powb = makePow(1 / exponent);

    var scale = function (value) {
        return linear(powp(value));
    };

    scale.invert = function (value) {
        return powb(linear.invert(x));
    };

    scale.domain = function (newDomain) {
        domain = newDomain.map(powp);
        linear.domain(domain);
        return scale;
    };

    scale.range = function (newRange) {
        linear.range(newRange);
        return scale;
    };

    scale.exponent = function (newExponent) {
        exponent = newExponent;
        powp = makePow(exponent);
        powb = makePow(1 / exponent);
        domain = domain.map(powp);
        linear.domain(domain);
        return scale;
    };

    return scale;
}

function makePow (e) {
    return function (x) {
        return x < 0 ? -Math.pow(-x, e) : Math.pow(x, e);
    };
}


