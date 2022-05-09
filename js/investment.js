var pieData = [
  ['Company', 'Rupees'],
  ['TATA MOTORS', 10150],
  ['EXIDE', 4250],
  ['HAPPIEST MINDS', 14000],
  ['HDFC BANK', 15500],
  ['MOTHERSON SUMI', 5000],
  ['TATA POWER',6350],
  ['CDSL',25775],
  ['TECH MAHINDRA',14000],
  ['ITC',5000]
];

google.charts.load('current', {'packages':['corechart']});
                    google.charts.setOnLoadCallback(drawChart);
              
                    function drawChart() {
              
                      var data = google.visualization.arrayToDataTable(pieData);
              
                      var options = {
                        title: 'Long term Investment of 1 lac',
                        backgroundColor: '#DFFF9F',
                        slices: {  0: {offset: 0.2},
                          2: {offset: 0.2},
                          3: {offset: 0.2},
                          6: {offset: 0.2},
                          7: {offset: 0.2}
                      }
                      };
              
                      var chart = new google.visualization.PieChart(document.getElementById('piechart'));
                      chart.draw(data, options);
                    }