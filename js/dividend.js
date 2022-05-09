google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(drawSeriesChart);
  
      function drawSeriesChart() {
  
        var data = google.visualization.arrayToDataTable([
          ['Company', 'Current Market Price','1 month return', 'Dividend'],
          ['HGS', 1085.20, -6.85, 10.27],
          ['REC LTD', 128.50, 2.02, 9.89],
          ['IOCL', 134.35, 10.76, 8.93],
          ['ITC', 261.10, 3.88 , 4.11],
          ['BHARTIARTL',738.75,3.01, 0],
          ['ALLSEC', 515.85,-3.90,8.72],
          ['KSOLVES',345.05,0.01,4.71],
          ['ADANI PORTS',874.15,17.03,0.59],
          ['NELCO',742.80,11.88,0.17],
          ['KIMS',1370.20,1.50,0],
          ['TORNTPOWER',541.60,11.66,2.01]
        ]);
  
        var options = {
          title: 'Highest dividend in stocks with their current scenario' +
            ' (Bubble color = Dividend)',
          hAxis: {title: 'Current Market Price'},
          vAxis: {title: 'One month return'},
          bubble: {textStyle: {fontSize: 11}},
          backgroundColor: '#FFAAFF',
          colorAxis: {colors: ['red', 'black']}
        };
  
        var chart = new google.visualization.BubbleChart(document.getElementById('series_chart_div'));
        chart.draw(data, options);
      }