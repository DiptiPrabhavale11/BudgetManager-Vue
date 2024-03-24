<!-- <script>
import VueCharts from 'vue-chartjs'
import { Bar, mixins } from 'vue-chartjs'
export default {
  extends: Bar,
  // mixins: [ VueCharts.mixins.reactiveData ],
  props: ["chartData", /*'options', */ "title", "legendDisplay"],
  mounted() {
    const labels = Utils.months({ count: 7 });
    const config = {
      type: 'bar',
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      },
    };
    const data = {
      labels: labels,
      datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1
      }]
    };
    options = {
    scales: {
        x: {
            grid: {
              offset: true
            }
        }
    }
};
    // Overwriting base render method with actual data.
    this.renderChart({
      options,
      datasets: [{
        barPercentage: 0.5,
        barThickness: 6,
        maxBarThickness: 8,
        minBarLength: 2,
        data
      }]

    })
  }
}
</script> -->

<template>
  <Bar class="ma-4" :data="datasets" :options="options" />
</template>

<script>
// DataPage.vue
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      datasets: {
        labels: [
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
        ],
        barThickness: 10,
        datasets: [
          {
            label: 'Utilities',
            data: [55, 35, 42, 57, 49, 32],
            backgroundColor: "#009EDF",
            stack: 'Stack 0',
          },
          {
            label: 'Housing',
            data: [12, 17, 11, 9, 15, 11],
            backgroundColor: "#FF373C",
            stack: 'Stack 0',
          },
          {
            label: 'Entertainment',
            data: [9, 7, 13, 14, 6, 9],
            backgroundColor: '#FF8301',
            stack: 'Stack 0',
          },
          {
            label: 'Transportation',
            data: [9, 7, 5, 8, 6, 9],
            backgroundColor: '#FFB900',
            stack: 'Stack 0',
          },
          {
            label: 'Food',
            data: [7, 9, 4, 8, 6, 3],
            backgroundColor: '#213B80',
            stack: 'Stack 0',
          },
          {
            label: 'Other',
            data: [14, 17, 15, 18, 16, 19, 5],
            backgroundColor: '#984F88',
            stack: 'Stack 0',
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: true,
            position: "bottom",
            align: "center",
            labels: {
              usePointStyle: true,
              pointStyle: "circle",
              // pointStyleWidth: 7,
              // pointStyleHeight: 7,
              boxHeight: 5,
              boxWidth: 5
            }
          }
        },
        scales: {
            x: {
              gridlines: {
                color: '#00000',
                display: true
              }
            },
            y: {
              gridlines: {
                display: false
              }
            }
          },
        responsive: true,
        maintainAspectRatio: false,
        barThickness: 20,
      },
    }
  }
}
</script>