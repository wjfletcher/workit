google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  // Define the chart to be drawn.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Element');
  data.addColumn('number', 'Percentage');
  data.addRows([
    ['1', 0.78],
    ['2', 0.21],
    ['3', 0.01]
  ]);

  // Instantiate and draw the chart.
  var chart = new google.visualization.LineChart(document.getElementById('myPieChart'));
  chart.draw(data, null);
}
