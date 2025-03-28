const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'jun'],
    datasets: [{
      label: 'dagen',
      data: [31, 29, 31, 30, 31, 30],
      backgroundColor: ['yellow', 'aqua', 'pink', 'lightgreen', 'gold', 'lightblue'],
      borderColor: ['black'],
      borderWidth: 6
    }]
  },
  options: {
    plugins: {
      legend: {
        labels: {
          font: {
            size: 32 // 2rem (16px * 2)
          }
        }
      }
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 32
          }
        }
      },
      y: {
        ticks: {
          font: {
            size: 32
          }
        }
      }
    }
  }
});

var chrt = document.getElementById("chartId").getContext("2d");
var chartId = new Chart(chrt, {
  type: 'doughnut',
  data: {
    labels: ["HTML", "CSS", "JAVASCRIPT", "CHART.JS", "JQUERY", "BOOTSTRP"],
    datasets: [{
      label: "Doughnut",
      data: [40, 40, 13, 35, 20, 18],
      backgroundColor: ['yellow', 'aqua', 'pink', 'lightgreen', 'gold', 'lightblue'],
      hoverOffset: 10,
      borderColor: ['black'],
      borderWidth: 5
    }],
  },
  options: {
    plugins: {
      legend: {
        labels: {
          font: {
            size: 32
          }
        }
      }
    }
  }
});

var chrt2 = document.getElementById("chartId2").getContext("2d");
var chartId2 = new Chart(chrt2, {
  type: 'radar',
  data: {
    labels: ["HTML", "CSS", "JAVASCRIPT", "CHART.JS", "JQUERY", "BOOTSTRP"],
    datasets: [{
      label: "Radial Axis",
      data: [20, 40, 33, 35, 30, 38],
      pointBackgroundColor: ['yellow', 'aqua', 'pink', 'lightgreen', 'gold', 'lightblue'],
      borderColor: ['black'],
      borderWidth: 5,
      pointRadius: 10,
    }],
  },
  options: {
    plugins: {
      legend: {
        labels: {
          font: {
            size: 32
          }
        }
      }
    },
    scales: {
      r: {
        pointLabels: {
          font: {
            size: 32
          }
        }
      }
    }
  }
});