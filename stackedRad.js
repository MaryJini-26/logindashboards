Highcharts.chart('stackedRad', {

    chart: {
        type: 'bar'
    },
    title: {
        text: 'Stacked bar chart',
        align: 'left',
        x: 0
    },
    xAxis: {
        categories: ['US', 'APAC', 'EU', 'Africa', 'EMEA', 'LATAM']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'category'
        }
    },
    legend: {
        reversed: true
    },
    credits: {
        enabled: false
      },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    series: [{
        color:  '#00ff80',
         type: 'bar',
            name: 'Week1',
            data: [18.09, 20.75, 26.97, 10.2]
        }, {
           color:'#bfff00', 
         type: 'bar',
            name: 'week2',
            data: [18.84, 24.56, 14.61, 12]
        },{
            color:  '#ffbf00',
    
         type: 'bar',
            name: 'week3',
            data: [13.09, 26.39, 33.2, 18.33]
        }, {
        color:  '#ff8000',
    
         type: 'bar',
            name: 'week4',
            data: [19.85, 16.68, 16.79, 18.68]
        }]
});


