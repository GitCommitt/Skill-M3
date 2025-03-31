document.addEventListener('DOMContentLoaded', function() {
  const ctx1 = document.getElementById('myChart').getContext('2d');
  const pokemonChart = new Chart(ctx1, {
      type: 'bar',
      data: {
          labels: ['HP', 'Attack', 'Defense', 'Sp. Attack', 'Sp. Defense', 'Speed'],
          datasets: [{
              label: 'Pokémon Stats',
              data: [0, 0, 0, 0, 0, 0],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.7)',
                  'rgba(54, 162, 235, 0.7)',
                  'rgba(255, 206, 86, 0.7)',
                  'rgba(75, 192, 192, 0.7)',
                  'rgba(153, 102, 255, 0.7)',
                  'rgba(255, 159, 64, 0.7)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          responsive: true,
          plugins: {
              title: {
                  display: true,
                  text: 'Random Pokémon Stats',
                  font: {
                      size: 16
                  }
              },
              legend: {
                  display: false
              }
          },
          scales: {
              y: {
                  beginAtZero: true,
                  max: 150
              }
          }
      }
  });

  async function fetchRandomPokemon() {
      const randomNumber = Math.floor(Math.random() * 898) + 1;
      try {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`);
          const data = await response.json();
          
          const stats = data.stats.map(stat => stat.base_stat);
          const pokemonName = data.name.charAt(0).toUpperCase() + data.name.slice(1);

          pokemonChart.data.datasets[0].data = [
              stats[0],
              stats[1],
              stats[2],
              stats[3],
              stats[4],
              stats[5]
          ];
          pokemonChart.options.plugins.title.text = `${pokemonName} Stats`;
          pokemonChart.update();
          
      } catch (error) {
          console.error('Error fetching Pokémon data:', error);
      }
  }

  fetchRandomPokemon();
  setInterval(fetchRandomPokemon, 5000);
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

