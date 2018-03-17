var plotMgr = {

  funcPlotWithFixedPoint(target, w, h, xDomain, expr, additionalOptions) {
    var options = {
      target: target,
      disableZoom: true,
      width: w,
      height: h,
      xAxis: {
        domain: xDomain
      },
      yAxis: {
        domain: [0, 1]
      },
      tip: {
        xLine: true
      },
      data: [{
        fn: "x",
        color: "gray",
        sampler: 'builtIn',  // this will make function-plot use the evaluator of math.js
        nSamples: 100,
        graphType: 'polyline'
      },{
        fn: expr,
        sampler: 'builtIn',  // this will make function-plot use the evaluator of math.js
        graphType: 'polyline'
      }]
    };
    if (additionalOptions)
      $.extend(options, additionalOptions);
    plotMgr._draw(options);
  },

  pointPlot(target, w, h, xDomain, xLabel, points, additionalOptions) {
    var options = {
      target: target,
      disableZoom: true,
      width: w,
      height: h,
      xAxis: {
        domain: xDomain,
        label: xLabel
      },
      yAxis: {
        domain: [0, 1]
      },
      data: [{
        fnType: "points",
        points: points,
        graphType: "scatter"
      }]
    };
    if (additionalOptions)
      $.extend(options, additionalOptions);
    plotMgr._draw(options);
  },

  _draw: function(options) {
    try {
      functionPlot(options);
    }
    catch (err) {
      console.log(err);
      alert(err);
    }
  }
}
