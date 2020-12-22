Highcharts.chart('pieContainer', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            title: {
                text: 'Branchwise Stock ',
                align: 'left',
                x: 35
            },
              
  credits: {
    enabled: false
  },
            tooltip: {
        	    pointFormat: '{series.name}: <b>{point.percentage}%</b>',
            	percentageDecimals: 1
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    colors: [

                        "#f05214","#07a32e","#0772a3","#a32c2c","#205c23"
                    ],
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false,
                    }
                }
            },
            series: [{
                type: 'pie',
                name: 'Stock',
                data: [
                    ['Chennai',   45.0],
                    ['Mumbai',       26.8],
                    {
                        name: 'Delhi',
                        y: 12.8,
                        sliced: true,
                        selected: true
                    },
                    ['Hydrabad',    8.5],
                    ['Bangalore',     6.2],
                    ['Mysore',   0.7]
                ],
                 showInLegend: true
            }]
        });
   
    
