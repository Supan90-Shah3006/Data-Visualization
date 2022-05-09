var barData = [
  ["Company", "Gain", { role: "style" } ],
  ["PARAS", 308.51, "#2A2550"],
  ["NURECA", 244.74, "#8E3200"],
  ["LXCHEM", 229.50, "#46244C"],
  ["MTARTECH", 198.40, "#711A75"],
  ["BARBEQUE", 147.22,"red"],
  ["LATENTVIEW",134.62,"blue"],
  ["SONACOMS",130.79,"yellow"],
  ["TATVA",128.65,"brown"],
  ["CLEAN",120.16,"#313552"],
  ["EASYMYTRIP",113.07,"black"]
];


google.charts.load("current", {packages:['corechart']});
                    
                    google.charts.setOnLoadCallback(drawChart);
                    function drawChart() {
                      var data = google.visualization.arrayToDataTable(barData);
                
                      var view = new google.visualization.DataView(data);
                      view.setColumns([0, 1,
                                       { calc: "stringify",
                                         sourceColumn: 1,
                                         type: "string",
                                         role: "annotation" },
                                       2]);
                
                      var options = {
                        title: "Listing Top 10 of IPO in 2021",
                        width: 600,
                        height: 300,
                        bar: {groupWidth: "80%"},
                        legend: { position: "none" },
                        backgroundColor: '#FFAAFF',
                        animation:{
                          duration: 1000,
                          easing: 'out',
                        }
                      };
                      var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
                      chart.draw(view, options);
                  }