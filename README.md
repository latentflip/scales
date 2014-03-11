# Scales

Quantitative scales, [as found in d3](https://github.com/mbostock/d3/wiki/Quantitative-Scales).

Currently implemented the basics of linear and power scales, as per [the d3 docs](https://github.com/mbostock/d3/wiki/Quantitative-Scales).

```javascript
var scales = require('scales');

var scale = scales.linear()
                  .domain([-100, 100]) //input domain
                  .range([0, 10]);      //output range

scale(-100) // -> 0
scale(0)    // -> 5
scale(100)    // -> 10
```
