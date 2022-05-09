var lineData = [
  [10,  5238.45, 9265.55, 3439.10, 3693.95],
  [11,  6178.55, 11912.15, 4494.70, 4815.85],
  [12,  4645.95, 9969.25, 3357.75, 4426.20],
  [13,  5963.90, 12960.65, 3860.15, 6164.30],
  [14,  6358.30, 11578.90, 2644.30, 5759.55],
  [15,  8996.60, 20907.55,  4453.90, 10773.45],
  [16,  7972.55 , 17067.45,  2919.40, 9406.75],
  [17,  8672.70, 19794.95, 3268.65, 10970.80],
  [18,  11171.55, 27652.05, 4009.75, 15515.35],
  [19, 10987.45, 27754.45, 3214.50, 15687.30],
  [20,  12430.50,  32465.45,  2582.70, 17925.80],
  [21,  14753.55,  32842.30,  2003.70, 18004.45],
  [22,  18350.95,  38855.55,  3000.70, 19674.25],
];

google.charts.load('current', {'packages':['line']});
      google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

      var data = new google.visualization.DataTable();
      data.addColumn('number', 'Year');
      data.addColumn('number', 'NIFTY50');
      data.addColumn('number', 'BANKNIFTY');
      data.addColumn('number', 'CNXPSUBANK');
      data.addColumn('number', 'NIFTYPVTBANK')
      data.addRows(lineData);

      var options = {
        chart: {
          title: 'NIFTY Index 2010 onwards {in rupees(RS)}'
        },
        width: 550,
        height: 300,
        backgroundColor: '#FFAAFF'
      };

      var chart = new google.charts.Line(document.getElementById('linechart_index'));

      chart.draw(data, google.charts.Line.convertOptions(options));
    }