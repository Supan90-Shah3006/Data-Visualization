var donutData = [
  ['Banking Company', 'Percentage'],
  ['HDFC', 24],
  ['ICICI', 17],
  ['AXIS BANK', 12],
  ['Other private banks',13],
  ['SBI',  19],
  ['BOB', 1],
  ['Other public banks',3],
  ['CITIBANK', 4],
  ['Other foreign banks',7]
];

google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable(donutData);

        var options = {
            title: 'Indian Banking Sector',
            pieHole: 0.4,
            backgroundColor: '#DFFF9F',
            slices: {  0: {offset: 0.2},
                    1: {offset: 0.2},
                    4: {offset: 0.2},
            }
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }