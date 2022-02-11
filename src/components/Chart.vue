<template>
  <canvas id="mychart" width="550" height="300"></canvas>
</template>

<script>

export default {
  name: 'Chart',

  props: ['date', 'challenge', 'dats'],

  data: () => ({
  }),
  mounted () {
    // eslint-disable-next-line no-unused-vars
    const data2 = this.date.map((date, index) => ({
      x: new Date(date * 1000),
      y: this.challenge[index]
    }))
    const data = this.date.map((date, index) => ({
      x: new Date(date * 1000),
      y: this.dats[index]
    }))
    const ctx = document.getElementById('mychart').getContext('2d')
    // eslint-disable-next-line no-undef,no-unused-vars
    const Chart_2 = new Chart(ctx, {
      type: 'line',
      data: {
        datasets: [
          {
            data,
            label: 'Chart from API ',
            borderColor: '#7367F0'
          },
          {
            data: data2,
            label: 'Data One',
            borderColor: '#F25207',
          }
        ]
      },
      options: {
        scales: {
          xAxes: [
            {
              type: 'time',
              time: {
                unit: 'days',
                displayFormats: {
                  month: 'MMM YYYY'
                }
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                // eslint-disable-next-line no-unused-vars
                callback (value, index, values) {
                  return `${value}%`
                }
              }
            }
          ]
        },
        responsive: true,
        maintainAspectRatio: false
      }
    })
  }
}
</script>