
<script>
  import { Line, mixins } from 'vue-chartjs' // We specify what type of chart we want from vue-chartjs and the mixins module
  export default {
    extends: Line,
    mixins: [mixins.reactiveProp],
    // props: ['data',],
    data () {
      return {
        options: { //Chart.js options
          elements: {
            line: {
              tension: 0, // disables bezier curves
            }
          },
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true
              }
            }],
            xAxes: [ {
              type: 'time',
              time: {
                unit: 'second'
              },
              gridLines: {
                display: false
              }
            }]
          },
          legend: {
            display: true
          },
          responsive: true,
          // responsive: false,
          maintainAspectRatio: true,
          tooltips: {
            enabled: false
          }
        }
      }
    },
    mounted () {
      // this.chartData is created in the mixin
      this.renderChart(this.chartData, this.options)
    }
  }
</script>