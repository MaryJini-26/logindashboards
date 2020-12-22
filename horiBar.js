Highcharts.chart('horiBar', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Stacked bar chart'
    },
    xAxis: {
        categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Total fruit consumption'
        }
    },
      
  credits: {
    enabled: false
  },
    legend: {
        reversed: true
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    series: [{
        color:'#b80f55',
        name: 'John',
        data: [54, 33, 48, 72, 92]
    }]
});