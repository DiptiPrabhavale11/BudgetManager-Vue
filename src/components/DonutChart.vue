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
    <Doughnut :data="datasets" :options="options" />
</template>
  
<script>
// DataPage.vue
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcProps } from 'chart.js'
import { ArcElement } from "chart.js";

ChartJS.register(ArcElement);
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
export default {
    name: 'DonutChart',
    components: { Doughnut },
    data() {
        return {
            datasets: {
                labels: [
                    'Red',
                    'Blue',
                    'Yellow'
                ],
                datasets: [{
                    label: 'My First Dataset',
                    data: [300, 50, 100],
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)'
                    ],
                    hoverOffset: 4
                }]
            },
            options: {
                circular: true,
                responsive: true,
                maintainAspectRatio: false,
                barThickness: 20,
            },
        }
    }
}
</script>