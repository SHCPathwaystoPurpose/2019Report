$('body').scrollspy({ target: '#content-nav' })

function openNav() {
  document.getElementById("content-nav").style.left = "0px";
}

function closeNav() {
  document.getElementById("content-nav").style.left = "-195px";
}



//Charts

google.charts.load('current', {'packages':['corechart']});

//Chart: engagementParticipation
google.charts.setOnLoadCallback(drawchartEngagementParticipation);


function drawchartEngagementParticipation() {
  var data = google.visualization.arrayToDataTable([
          ['Number of Events', 'SLO1', 'SLO2', 'SLO3'],
          ['0 Events',  2.83,   2.75,  2.38],
          ['1 Event',   2.99,   2.85,  2.52],
          ['2+ Events',  3.44,   3.25,  3.11]
        ]);

        var options = {
          curveType: 'function',
          legend: { position: 'bottom' },
          colors: ['#f9a11b','#039691', '#ef4b24'],
         
        };

        var chart = new google.visualization.LineChart(document.getElementById('chartEngagementParticipation'));

        chart.draw(data, options);
      }


//Chart: SophomoreDinner
google.charts.setOnLoadCallback(drawchartSophomoreDinner);


function drawchartSophomoreDinner() {
  var data = google.visualization.arrayToDataTable([
          ['Learning Outcome', '% Agree or Strongly Agree'],
          ['SLO1',  .84],
          ['SLO2',   .75],
          ['SLO3',  .82],
        ]);

        var options = {
          curveType: 'function',
          legend: { position: 'bottom' },
          colors: ['#039691'],
          hAxis: { format: 'percent',
          viewWindow: {
        min: 0,
        max: 1
    },}
          
        };

        var chart = new google.visualization.BarChart(document.getElementById('chartSophomoreDinner'));

        chart.draw(data, options);
      }

//Chart: CurriculumRatings
google.charts.setOnLoadCallback(drawchartCurriculumRatings);


function drawchartCurriculumRatings() {
 var data = google.visualization.arrayToDataTable([
          ['Number of Courses', '0 Courses', '1 Course', '2+ Courses'],
['SLO 1', 2.88, 3.42, 3.67],
['SLO 2', 2.74, 3.31, 3.52],
['SLO 3', 2.45, 3.00, 3.33]
        ]);

        var options = {
          curveType: 'function',
          legend: { position: 'bottom' },
          colors: ['#f9a11b','#039691', '#ef4b24'],
         
        };

        var chart = new google.visualization.ColumnChart(document.getElementById('chartCurriculumRatings'));

        chart.draw(data, options);
      }


//Chart: Curriculum Division
google.charts.setOnLoadCallback(drawchartCurriculumDivision);


function drawchartCurriculumDivision() {
  var data = google.visualization.arrayToDataTable([
          ['Division', 'Number of Courses'],
          ['Business',  4],
          ['Communication/Visual & Performing Arts',   1],
          ['Languages & Literature',  2],
    ['Nursing', 7],
    ['Philosphy/Theology', 3],
    ['Sciences/Mathematics', 2],
    ['Social Science', 2],
    ['Other', 2]
        ]);

        var options = {
          colors: ['#f9a11b', '#ffc875', '#039691', '#38aaa6', '#ef4b24', '#ef876e', '#3d1951', '#654975'],
          height: 400,
                };

        var chart = new google.visualization.PieChart(document.getElementById('chartCurriculumDivision'));

        chart.draw(data, options);
      }

//Chart: Retreat
google.charts.setOnLoadCallback(drawchartRetreat);


function drawchartRetreat() {
  var data = google.visualization.arrayToDataTable([
          ['Learning Outcome', 'Did Not Attend Retreat', 'Attended Retreat'],
          ['SLO1',  3.05, 3.41],
          ['SLO2',   2.93, 3.07],
          ['SLO3',  2.63, 3.00],
        ]);

        var options = {
          curveType: 'function',
          legend: { position: 'bottom' },
          colors: ['#ef876e', '#ef4b24'],
          vAxis: { 
            viewWindow: {
        min: 1,
        max: 5
    },}
          
        };

        var chart = new google.visualization.ColumnChart(document.getElementById('chartRetreat'));

        chart.draw(data, options);
      }
