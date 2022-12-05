// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

function number_format(number, decimals, dec_point, thousands_sep) {
  // *     example: number_format(1234.56, 2, ',', ' ');
  // *     return: '1 234,56'
  number = (number + '').replace(',', '').replace(' ', '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function(n, prec) {
      var k = Math.pow(10, prec);
      return '' + Math.round(n * k) / k;
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}

// Bar Chart Dataset Distribution
var ctx1 = document.getElementById("BarChartDataset");
var BarChartDataset = new Chart(ctx1, {
  type: 'bar',
  data: {
    labels: ["Automobile", "Brexit", "Celebrity", "Climate Change", "Covid", "Crime", "Education", "Elections", "Environment", "Global Warming", "Healthcare", "Immigration", "Politics", "Racism", "Space", "Sports", "Travel", "Vaccines", "Wildlife"], 
    datasets: [{
      label: "PERCENTAGE",
      backgroundColor: "#4e73df",
      hoverBackgroundColor: "#2e59d9",
      borderColor: "#4e73df",
      data: [2.4, 2.7, 10.7, 5.7, 7.0, 5.3, 6.6, 14.8, 7.5, 4.6, 1.1, 1.7, 4.2, 7.6, 4.2, 6.3, 3.0, 0.6, 4.1],
    }],
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        time: {
          unit: 'Categories'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          fontSize: 15,
          maxTicksLimit: 20
        },
        maxBarThickness: 35,
      }],
      yAxes: [{
        ticks: {
          fontSize: 15,
          min: 0,
          max: 16,
          maxTicksLimit: 4,
          padding: 10,
          // Include a dollar sign in the ticks
          callback: function(value, index, values) {
            return number_format(value,1) + '%';
          }
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }],
    },
    legend: {
      display: false
    },
    tooltips: {
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
      callbacks: {
        label: function(tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return ' ' + number_format(tooltipItem.yLabel, 1) + '%';
        }
      }
    },
  }
});


// Bar Chart Dataset Distribution
var ctx2 = document.getElementById("BarChartResults");
var BarChartResults = new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: ["EANN", "EmbraceNet", "Jin et al", "S-Bert", "Ours"], 
    datasets: [{
      label: "PERCENTAGE",
      backgroundColor: "#4e73df",
      hoverBackgroundColor: "#2e59d9",
      borderColor: "#4e73df",
      data: [0.63, 0.68, 0.71, 0.77, 0.85],
    }],
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
    },
    scales: {

      xAxes: [{

        scaleLabel: {
          fontSize: 17,
        display: true,
        labelString: 'Baselines'
      },

        time: {
          unit: 'Categories'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          fontSize: 15,
          maxTicksLimit: 20
        },
        maxBarThickness: 35,
      }],
      yAxes: [{
        scaleLabel: {
          fontSize: 17,
        display: true,
        labelString: 'Accuracy'
      },
        ticks: {
          fontSize: 15,
          min: 0.5,
          max: 0.87,
          maxTicksLimit: 4,
          padding: 10,
          // Include a dollar sign in the ticks
          callback: function(value, index, values) {
            return number_format(value,1);
          }
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }],
    },
    legend: {
      display: false
    },
    tooltips: {
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
      callbacks: {
        label: function(tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return ' ' + number_format(tooltipItem.yLabel*100, 1) + '%';
        }
      }
    },
  }
});
