Highcharts.chart('columnBar', {
    chart: {
        type: 'column'
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    title: {
        text: 'Posts Analysis',
        align: 'left',
        x: 0
    },
    credits: {
        enabled: false
      },
    plotOptions: {
        series: {
            pointWidth: 20
        }
    },

    series: [{
        name:'monthly Analysis',
        color:'#b80f55',
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
    }]
});