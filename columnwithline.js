Highcharts.chart('columnwithline', {
            chart: {
                renderTo: 'container',
                zoomType: 'xy'
            },
            title: {
                text: 'Matial Based Analysis',
                align: 'left',
                x: 0
            },
         
           
  credits: {
    enabled: false
  },
            xAxis: [{
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            }],
            yAxis: [{ // Primary yAxis
                opposite: true,
                showEmpty: false, 
                labels: {
                    enabled: false
                },
                title: {
                    text: null
                }
    
            }, { // Secondary yAxis
                gridLineWidth: 0,
                title: {
                    text: '',
                   
                   
                },
           
           
                showEmpty: false
    
            }, { // Tertiary yAxis
                gridLineWidth: 0,
                title: {
                    text: 'Rate',
                    
                    
                },
              
              
                opposite: true,
                showEmpty: false
            }],
            
            
         
         
         legend: {
                    floating: false,
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom',
                    x: 0,
                    y: 0
                },
            series: [{
                name: 'Diamont',
                color: '#0eb196',
                type: 'column',
                yAxis: 1,
                data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
    
            }, {
                name: 'Silver',
                type: 'line',
                color: 'orangered',
                yAxis: 2,
                data: [1016, 1016, 1015.9, 1015.5, 1012.3, 1009.5, 1009.6, 1010.2, 1013.1, 1016.9, 1018.2, 1016.7],
                marker: {
                    enabled: false
                }
                
    
            }, {
                name: 'Gold',
                color: '#03241e',
                type: 'column',
                data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
            }]
        });
        
   
        
  
        