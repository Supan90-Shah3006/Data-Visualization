google.charts.load("current", {packages:["corechart"]});
        google.charts.setOnLoadCallback(drawChart);
        function drawChart() {
          var data = google.visualization.arrayToDataTable([
            ["IT Companies", "One year return", { role: "style" } ],
            ["TCS", 16.18, "#5F68C3"],
            ["Infosys", 18.87, "red"],
            ["HCL Tech", 15.32, "gold"],
            ["Wipro", 13.03, "blue"],
            ["Tech Mahindra",37.50,"black"],
            ["L&T infotech",30.58,"Yellow"],
            ["MindTree",91.81,"Pink"],
            ["Mphasis",70.70,"#40DFEF"]
          ]);
    
          var options = {
            title: "One year return of wellknown IT Companies",
            width: 550,
            height: 300,
            bar: {groupWidth: "80%"},
            legend: {position:"none"},
            backgroundColor: '#B4FF9F'
          };
          var chart = new google.visualization.BarChart(document.getElementById("barchart_it_return"));
          chart.draw(data, options);
        }