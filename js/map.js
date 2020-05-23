google.charts.load('current', {
    'packages':['geochart'],
    'mapsApiKey': 'AIzaSyCGmJUGC3lzzTVn6VFyZ_D94Ewzbz553xQ'
  });
  google.charts.setOnLoadCallback(drawRegionsMap);

  function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable(countryList);

    var options = {
        colorAxis: {colors: ['green', 'blue']}
      };

    var chart = new google.visualization.GeoChart(document.getElementById('world-map'));

    chart.draw(data, options);

    google.visualization.events.addListener(chart, "select", function () {
      const selection = chart.getSelection();
      // console.log(selection);
      if (selection.length) {
        const label = data.getValue(selection[0].row, 0);
        const counts = countryList.find((count) => count[0] === label);
        selected = counts;
        openModal("info");
        if(counts){
          ReactDOM.render(<InfoWindow country={counts.toString()} data ={counts}/>,document.querySelector('.infoWindow'));
        }
      } else {
        selected = 'none';
      }
      // console.log(selected);
    });
  }