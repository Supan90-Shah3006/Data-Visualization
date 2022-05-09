window.onload = function () {
    var dataPoints = [], currentDate = new Date(), rangeChangedTriggered = false;
    var stockChart = new CanvasJS.StockChart("chartContainer",{
      theme: "light2",
      backgroundColor: "#AAFFFF", //"#F7FF93",
      title:{
        text:"SENSEX"
      },
      rangeChanged: function(e) {
          rangeChangedTriggered = true;
      },
      charts: [{
        axisX: {
           crosshair: {
            enabled: true,
            valueFormatString: "MMM DD, YYYY HH:mm:ss"
          }
        },
        axisY: {
          title: "BSE Index Price",
          stripLines: [{
            showOnTop: true,
            lineDashType: "dash",
            color: "red", //"#ff4949",
            labelFontColor: "#ff4949",
            labelFontSize: 14
          }]
        },
        toolTip: {
          shared: true
        },
        data: [{
          type: "line",
          name: "Price",
          xValueFormatString: "MMM DD, YYYY HH:mm:ss",
          xValueType: "dateTime",
          dataPoints : dataPoints
        }]
      }],
      navigator: {
        slider: {
          minimum: new Date(currentDate.getTime() - (90 * 1000))
        }
      },
      rangeSelector: {
        enabled: false
      }
    });
    var dataCount = 700, ystart = 57197, interval = 1000, xstart = (currentDate.getTime() - (700 * 1000));
    updateChart(xstart, ystart, dataCount, interval);
    function updateChart(xstart, ystart, length, interval) {
      var xVal = xstart, yVal = ystart;
      for(var i = 0; i < length; i++) {
        yVal = yVal + (Math.random() *(2) + Math.random() *(-2));
        yVal = Math.min(Math.max(yVal, 56000), 60500);
        dataPoints.push({x: xVal,y: yVal});
        xVal += interval;
      }
      if(!rangeChangedTriggered) {
          stockChart.options.navigator.slider.minimum = new Date(xVal - (90 * 1000));
      }
      stockChart.options.charts[0].axisY.stripLines[0].value =  dataPoints[dataPoints.length - 1].y;
      stockChart.options.charts[0].axisY.stripLines[0].label = stockChart.options.charts[0].axisY.stripLines[0]["value"];
      xstart = xVal;
      dataCount = 1;
      ystart = yVal;
      stockChart.render();
      setTimeout(function() { updateChart(xstart, ystart, dataCount, interval); }, 1000);
    }
  }