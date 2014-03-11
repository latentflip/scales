module.exports = function () {
    return linear();
};

var linearMapValue = function (value, inMap, outMap) {
    var fraction = (value - inMap[0]) / (inMap[1] - inMap[0]);
    return outMap[0] + fraction * (outMap[1] - outMap[0]);
};

function linear () {
    var domain = [0,1];
    var range = [0,1];

    var scale = function (value) {
        return linearMapValue(value, domain, range);
    };

    scale.invert = function (value) {
        return linearMapValue(value, range, domain);
    };
    
    scale.range = function (newRange) {
        range[0] = newRange[0];
        range[1] = newRange[1];
        return scale;
    };

    scale.domain = function (newDomain) {
        domain[0] = newDomain[0];
        domain[1] = newDomain[1];
        return scale;
    };

    return scale;
}

