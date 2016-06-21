$(function () {

    $('#populationContainer').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ''
        },
        
        exporting: {
            enabled: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: -100,
            max: 100,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto',
                enabled: false
            },
            title: {
                text: '0'
            },
            plotBands: [{
                from: 0,
                to: 100,
                color: '#55BF3B' // green
            },  {
                from: -100,
                to: 0,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Population',
            data: [7],
            datalabels: 'false',
            tooltip: {
                valueSuffix: '%'
            }
        }]

    });

    $('#householdContainer').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ''
        },
        
        exporting: {
            enabled: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: -100,
            max: 100,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto',
                enabled: false
            },
            title: {
                text: '0'
            },
            plotBands: [{
                from: 0,
                to: 100,
                color: '#55BF3B' // green
            },  {
                from: -100,
                to: 0,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Household Income',
            data: [-10],
            datalabels: 'false',
            tooltip: {
                valueSuffix: '%'
            }
        }]

    });

    $('#unemploymentContainer').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ''
        },
        
        exporting: {
            enabled: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: -100,
            max: 100,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto',
                enabled: false
            },
            title: {
                text: '0'
            },
            plotBands: [{
                from: 0,
                to: 100,
                color: '#55BF3B' // green
            },  {
                from: -100,
                to: 0,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Unemployment',
            data: [3],
            datalabels: 'false',
            tooltip: {
                valueSuffix: '%'
            }
        }]

    });

    $('#housingContainer').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ''
        },
        
        exporting: {
            enabled: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: -100,
            max: 100,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto',
                enabled: false
            },
            title: {
                text: '0'
            },
            plotBands: [{
                from: 0,
                to: 100,
                color: '#55BF3B' // green
            },  {
                from: -100,
                to: 0,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Housing Units',
            data: [-3],
            datalabels: 'false',
            tooltip: {
                valueSuffix: '%'
            }
        }]

    });

    $('#housingValueContainer').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ''
        },
        
        exporting: {
            enabled: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: -100,
            max: 100,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto',
                enabled: false
            },
            title: {
                text: '0'
            },
            plotBands: [{
                from: 0,
                to: 100,
                color: '#55BF3B' // green
            },  {
                from: -100,
                to: 0,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Median Housing Value',
            data: [13],
            datalabels: 'false',
            tooltip: {
                valueSuffix: '%'
            }
        }]

    });  

    $('#housingRentContainer').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ''
        },
        
        exporting: {
            enabled: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: -100,
            max: 100,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto',
                enabled: false
            },
            title: {
                text: '0'
            },
            plotBands: [{
                from: 0,
                to: 100,
                color: '#55BF3B' // green
            },  {
                from: -100,
                to: 0,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Median Housing Rent',
            data: [-5],
            datalabels: 'false',
            tooltip: {
                valueSuffix: '%'
            }
        }]

    });  
});

$(function () {
    $('#populationContainerB').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ''
        },
        
        exporting: {
            enabled: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: -100,
            max: 100,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto',
                enabled: false
            },
            title: {
                text: '0'
            },
            plotBands: [{
                from: 0,
                to: 100,
                color: '#55BF3B' // green
            },  {
                from: -100,
                to: 0,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Population',
            data: [10.54],
            datalabels: 'false',
            tooltip: {
                valueSuffix: '%'
            }
        }]

    });

    $('#householdContainerB').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ''
        },
        
        exporting: {
            enabled: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: -100,
            max: 100,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto',
                enabled: false
            },
            title: {
                text: '0'
            },
            plotBands: [{
                from: 0,
                to: 100,
                color: '#55BF3B' // green
            },  {
                from: -100,
                to: 0,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Household Income',
            data: [21.81],
            datalabels: 'false',
            tooltip: {
                valueSuffix: '%'
            }
        }]

    });

    $('#unemploymentContainerB').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ''
        },
        
        exporting: {
            enabled: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: -100,
            max: 100,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto',
                enabled: false
            },
            title: {
                text: '0'
            },
            plotBands: [{
                from: 0,
                to: 100,
                color: '#55BF3B' // green
            },  {
                from: -100,
                to: 0,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Unemployment Rate',
            data: [-26.37],
            datalabels: 'false',
            tooltip: {
                valueSuffix: '%'
            }
        }]

    });

    $('#housingContainerB').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ''
        },
        
        exporting: {
            enabled: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: -100,
            max: 100,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto',
                enabled: false
            },
            title: {
                text: '0'
            },
            plotBands: [{
                from: 0,
                to: 100,
                color: '#55BF3B' // green
            },  {
                from: -100,
                to: 0,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Housing Units',
            data: [5.5],
            datalabels: 'false',
            tooltip: {
                valueSuffix: '%'
            }
        }]

    });

    $('#housingValueContainerB').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ''
        },
        
        exporting: {
            enabled: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: -100,
            max: 100,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto',
                enabled: false
            },
            title: {
                text: '0'
            },
            plotBands: [{
                from: 0,
                to: 100,
                color: '#55BF3B' // green
            },  {
                from: -100,
                to: 0,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Median Housing Value',
            data: [-1.23],
            datalabels: 'false',
            tooltip: {
                valueSuffix: '%'
            }
        }]

    });  

    $('#housingRentContainerB').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ''
        },
        
        exporting: {
            enabled: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: -100,
            max: 100,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto',
                enabled: false
            },
            title: {
                text: '0'
            },
            plotBands: [{
                from: 0,
                to: 100,
                color: '#55BF3B' // green
            },  {
                from: -100,
                to: 0,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Median Housing Rent',
            data: [-6.5],
            datalabels: 'false',
            tooltip: {
                valueSuffix: '%'
            }
        }]

    });  
});

$(function () {
    $('#populationContainerIC').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ''
        },
        
        exporting: {
            enabled: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: -100,
            max: 100,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto',
                enabled: false
            },
            title: {
                text: '0'
            },
            plotBands: [{
                from: 0,
                to: 100,
                color: '#55BF3B' // green
            },  {
                from: -100,
                to: 0,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Population',
            data: [7.06],
            datalabels: 'false',
            tooltip: {
                valueSuffix: '%'
            }
        }]

    });

    $('#householdContainerIC').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ''
        },
        
        exporting: {
            enabled: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: -100,
            max: 100,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto',
                enabled: false
            },
            title: {
                text: '0'
            },
            plotBands: [{
                from: 0,
                to: 100,
                color: '#55BF3B' // green
            },  {
                from: -100,
                to: 0,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Household Income',
            data: [1],
            datalabels: 'false',
            tooltip: {
                valueSuffix: '%'
            }
        }]

    });

    $('#unemploymentContainerIC').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ''
        },
        
        exporting: {
            enabled: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: -100,
            max: 100,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto',
                enabled: false
            },
            title: {
                text: '0'
            },
            plotBands: [{
                from: 0,
                to: 100,
                color: '#55BF3B' // green
            },  {
                from: -100,
                to: 0,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Unemployment Rate',
            data: [-14.75],
            datalabels: 'false',
            tooltip: {
                valueSuffix: '%'
            }
        }]

    });

    $('#housingContainerIC').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ''
        },
        
        exporting: {
            enabled: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: -100,
            max: 100,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto',
                enabled: false
            },
            title: {
                text: '0'
            },
            plotBands: [{
                from: 0,
                to: 100,
                color: '#55BF3B' // green
            },  {
                from: -100,
                to: 0,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Housing Units',
            data: [-0.13],
            datalabels: 'false',
            tooltip: {
                valueSuffix: '%'
            }
        }]

    });

    $('#housingValueContainerIC').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ''
        },
        
        exporting: {
            enabled: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: -100,
            max: 100,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto',
                enabled: false
            },
            title: {
                text: '0'
            },
            plotBands: [{
                from: 0,
                to: 100,
                color: '#55BF3B' // green
            },  {
                from: -100,
                to: 0,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Median Housing Value',
            data: [-25.68],
            datalabels: 'false',
            tooltip: {
                valueSuffix: '%'
            }
        }]

    });  

    $('#housingRentContainerIC').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ''
        },
        
        exporting: {
            enabled: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: -100,
            max: 100,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto',
                enabled: false
            },
            title: {
                text: '0'
            },
            plotBands: [{
                from: 0,
                to: 100,
                color: '#55BF3B' // green
            },  {
                from: -100,
                to: 0,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Median Housing Rent',
            data: [9.97],
            datalabels: 'false',
            tooltip: {
                valueSuffix: '%'
            }
        }]

    });  
});

$(function () {
    $('#populationContainerRC').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ''
        },
        
        exporting: {
            enabled: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: -100,
            max: 100,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto',
                enabled: false
            },
            title: {
                text: '0'
            },
            plotBands: [{
                from: 0,
                to: 100,
                color: '#55BF3B' // green
            },  {
                from: -100,
                to: 0,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Population',
            data: [5.33],
            datalabels: 'false',
            tooltip: {
                valueSuffix: '%'
            }
        }]

    });

    $('#householdContainerRC').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ''
        },
        
        exporting: {
            enabled: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: -100,
            max: 100,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto',
                enabled: false
            },
            title: {
                text: '0'
            },
            plotBands: [{
                from: 0,
                to: 100,
                color: '#55BF3B' // green
            },  {
                from: -100,
                to: 0,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Household Income',
            data: [1.04],
            datalabels: 'false',
            tooltip: {
                valueSuffix: '%'
            }
        }]

    });

    $('#unemploymentContainerRC').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ''
        },
        
        exporting: {
            enabled: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: -100,
            max: 100,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto',
                enabled: false
            },
            title: {
                text: '0'
            },
            plotBands: [{
                from: 0,
                to: 100,
                color: '#55BF3B' // green
            },  {
                from: -100,
                to: 0,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Unemployment Rate',
            data: [-9.5],
            datalabels: 'false',
            tooltip: {
                valueSuffix: '%'
            }
        }]

    });

    $('#housingContainerRC').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ''
        },
        
        exporting: {
            enabled: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: -100,
            max: 100,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto',
                enabled: false
            },
            title: {
                text: '0'
            },
            plotBands: [{
                from: 0,
                to: 100,
                color: '#55BF3B' // green
            },  {
                from: -100,
                to: 0,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Housing Units',
            data: [-2.43],
            datalabels: 'false',
            tooltip: {
                valueSuffix: '%'
            }
        }]

    });

    $('#housingValueContainerRC').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ''
        },
        
        exporting: {
            enabled: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: -100,
            max: 100,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto',
                enabled: false
            },
            title: {
                text: '0'
            },
            plotBands: [{
                from: 0,
                to: 100,
                color: '#55BF3B' // green
            },  {
                from: -100,
                to: 0,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Median Housing Value',
            data: [-20.5],
            datalabels: 'false',
            tooltip: {
                valueSuffix: '%'
            }
        }]

    });  

    $('#housingRentContainerRC').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ''
        },
        
        exporting: {
            enabled: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: -100,
            max: 100,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto',
                enabled: false
            },
            title: {
                text: '0'
            },
            plotBands: [{
                from: 0,
                to: 100,
                color: '#55BF3B' // green
            },  {
                from: -100,
                to: 0,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Median Housing Rent',
            data: [13.12],
            datalabels: 'false',
            tooltip: {
                valueSuffix: '%'
            }
        }]

    });  
});

$(function () {
    $('#populationContainerSS').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ''
        },
        
        exporting: {
            enabled: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: -100,
            max: 100,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto',
                enabled: false
            },
            title: {
                text: '0'
            },
            plotBands: [{
                from: 0,
                to: 100,
                color: '#55BF3B' // green
            },  {
                from: -100,
                to: 0,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Population',
            data: [10.5],
            datalabels: 'false',
            tooltip: {
                valueSuffix: '%'
            }
        }]

    });

    $('#householdContainerSS').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ''
        },
        
        exporting: {
            enabled: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: -100,
            max: 100,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto',
                enabled: false
            },
            title: {
                text: '0'
            },
            plotBands: [{
                from: 0,
                to: 100,
                color: '#55BF3B' // green
            },  {
                from: -100,
                to: 0,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Household Income',
            data: [13.42],
            datalabels: 'false',
            tooltip: {
                valueSuffix: '%'
            }
        }]

    });

    $('#unemploymentContainerSS').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ''
        },
        
        exporting: {
            enabled: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: -100,
            max: 100,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto',
                enabled: false
            },
            title: {
                text: '0'
            },
            plotBands: [{
                from: 0,
                to: 100,
                color: '#55BF3B' // green
            },  {
                from: -100,
                to: 0,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Unemployment Rate',
            data: [46.57],
            datalabels: 'false',
            tooltip: {
                valueSuffix: '%'
            }
        }]

    });

    $('#housingContainerSS').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ''
        },
        
        exporting: {
            enabled: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: -100,
            max: 100,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto',
                enabled: false
            },
            title: {
                text: '0'
            },
            plotBands: [{
                from: 0,
                to: 100,
                color: '#55BF3B' // green
            },  {
                from: -100,
                to: 0,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Housing Units',
            data: [12.57],
            datalabels: 'false',
            tooltip: {
                valueSuffix: '%'
            }
        }]

    });

    $('#housingValueContainerSS').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ''
        },
        
        exporting: {
            enabled: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: -100,
            max: 100,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto',
                enabled: false
            },
            title: {
                text: '0'
            },
            plotBands: [{
                from: 0,
                to: 100,
                color: '#55BF3B' // green
            },  {
                from: -100,
                to: 0,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Median Housing Value',
            data: [-1.64],
            datalabels: 'false',
            tooltip: {
                valueSuffix: '%'
            }
        }]

    });  

    $('#housingRentContainerSS').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ''
        },
        
        exporting: {
            enabled: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: -100,
            max: 100,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto',
                enabled: false
            },
            title: {
                text: '0'
            },
            plotBands: [{
                from: 0,
                to: 100,
                color: '#55BF3B' // green
            },  {
                from: -100,
                to: 0,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Median Housing Rent',
            data: [6.19],
            datalabels: 'false',
            tooltip: {
                valueSuffix: '%'
            }
        }]

    });  
});

$(function () {
    $('#populationContainerUM').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ''
        },
        
        exporting: {
            enabled: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: -100,
            max: 100,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto',
                enabled: false
            },
            title: {
                text: '0'
            },
            plotBands: [{
                from: 0,
                to: 100,
                color: '#55BF3B' // green
            },  {
                from: -100,
                to: 0,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Population',
            data: [3.53],
            datalabels: 'false',
            tooltip: {
                valueSuffix: '%'
            }
        }]

    });

    $('#householdContainerUM').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ''
        },
        
        exporting: {
            enabled: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: -100,
            max: 100,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto',
                enabled: false
            },
            title: {
                text: '0'
            },
            plotBands: [{
                from: 0,
                to: 100,
                color: '#55BF3B' // green
            },  {
                from: -100,
                to: 0,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Household Income',
            data: [15.27],
            datalabels: 'false',
            tooltip: {
                valueSuffix: '%'
            }
        }]

    });

    $('#unemploymentContainerUM').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ''
        },
        
        exporting: {
            enabled: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: -100,
            max: 100,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto',
                enabled: false
            },
            title: {
                text: '0'
            },
            plotBands: [{
                from: 0,
                to: 100,
                color: '#55BF3B' // green
            },  {
                from: -100,
                to: 0,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Unemployment Rate',
            data: [15.16],
            datalabels: 'false',
            tooltip: {
                valueSuffix: '%'
            }
        }]

    });

    $('#housingContainerUM').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ''
        },
        
        exporting: {
            enabled: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: -100,
            max: 100,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto',
                enabled: false
            },
            title: {
                text: '0'
            },
            plotBands: [{
                from: 0,
                to: 100,
                color: '#55BF3B' // green
            },  {
                from: -100,
                to: 0,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Housing Units',
            data: [-10.54],
            datalabels: 'false',
            tooltip: {
                valueSuffix: '%'
            }
        }]

    });

    $('#housingValueContainerUM').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ''
        },
        
        exporting: {
            enabled: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: -100,
            max: 100,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto',
                enabled: false
            },
            title: {
                text: '0'
            },
            plotBands: [{
                from: 0,
                to: 100,
                color: '#55BF3B' // green
            },  {
                from: -100,
                to: 0,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Median Housing Value',
            data: [-25.25],
            datalabels: 'false',
            tooltip: {
                valueSuffix: '%'
            }
        }]

    });  

    $('#housingRentContainerUM').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: ''
        },
        
        exporting: {
            enabled: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: -100,
            max: 100,
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto',
                enabled: false
            },
            title: {
                text: '0'
            },
            plotBands: [{
                from: 0,
                to: 100,
                color: '#55BF3B' // green
            },  {
                from: -100,
                to: 0,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Median Housing Rent',
            data: [7.83],
            datalabels: 'false',
            tooltip: {
                valueSuffix: '%'
            }
        }]

    });  
});

$(function () {
    $('#trendBethesda').highcharts({
        chart: {
            type: 'line'
        },
        title: {
            text: 'Trend (2006-10 to 2010-14)'
        },
        subtitle: {
            text: 'Median Household Income'
        },
        xAxis: {
            categories: ['2006-2010', '2010-2014']
        },
        yAxis: {
            title: {
                text: 'Value'
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        series: [{
            name: 'Bethesda',
            data: [138219,155056.23]
        },
        {
            name: 'Silver Spring',
            data: [85416, 89217.44]
        },
        {
            name: 'International Corridor',
             data: [68077,63307.96]
        },
        {
            name: 'University of Maryland',
            data: [61947, 65762.5]
        },
        {
            name: 'Riverdale',
             data: [66195, 61594.73]
        }
        ]
        
    });
});


$(function () {
    $('#trendIC').highcharts({
        chart: {
            type: 'line'
        },
        title: {
            text: 'Trend (2006-10 to 2010-14)'
        },
        subtitle: {
            text: 'Household Units'
        },
        xAxis: {
            categories: ['2006-2010', '2010-2014']
        },
        yAxis: {
            title: {
                text: 'Value'
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        series: [{
            name: 'Bethesda',
            data: [9643,10175]
        },
        {
            name: 'Silver Spring',
            data: [16252, 18295]
        },
        {
            name: 'International Corridor',
             data: [18168, 18145]
        },
        {
            name: 'University of Maryland',
            data: [3756, 3360]
        },
        {
            name: 'Riverdale',
             data: [10467, 10213]
        }
        ]
        
    });
});

$(function () {
    $('#trendRiverdale').highcharts({
        chart: {
            type: 'line'
        },
        title: {
            text: 'Trend (2006-10 to 2010-14)'
        },
        subtitle: {
            text: 'Median Household Rent'
        },
        xAxis: {
            categories: ['2006-2010', '2010-2014']
        },
        yAxis: {
            title: {
                text: 'Value'
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        series: [{
            name: 'Bethesda',
            data: [1887,1842.2]
        },
        {
            name: 'Silver Spring',
            data: [1451, 1480.54]
        },
        {
            name: 'International Corridor',
             data: [1105,1119.6]
        },
        {
            name: 'University of Maryland',
            data: [1368, 1358.12]
        },
        {
            name: 'Riverdale',
             data: [1134, 1115.66]
        }
        ]
        
    });
});

$(function () {
    $('#trendSS').highcharts({
        chart: {
            type: 'line'
        },
        title: {
            text: 'Trend (2006-10 to 2010-14)'
        },
        subtitle: {
            text: 'Unemployment'
        },
        xAxis: {
            categories: ['2006-2010', '2010-2014']
        },
        yAxis: {
            title: {
                text: 'Value'
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        series: [{
            name: 'Bethesda',
            data: [474,349]
        },
        {
            name: 'Silver Spring',
            data: [1065, 1561]
        },
        {
            name: 'International Corridor',
             data: [3940,3359]
        },
        {
            name: 'University of Maryland',
            data: [950, 1094]
        },
        {
            name: 'Riverdale',
             data: [1960, 1774]
        }
        ]
        
    });
});

$(function () {
    $('#trendUM').highcharts({
        chart: {
            type: 'line'
        },
        title: {
            text: 'Trend (2006-10 to 2010-14)'
        },
        subtitle: {
            text: 'Median Housing Value'
        },
        xAxis: {
            categories: ['2006-2010', '2010-2014']
        },
        yAxis: {
            title: {
                text: 'Value'
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        series: [{
            name: 'Bethesda',
            data: [816782,742941.35]
        },
        {
            name: 'Silver Spring',
            data: [557998, 505450]
        },
        {
            name: 'International Corridor',
             data: [400975,285007]
        },
        {
            name: 'University of Maryland',
            data: [452558, 356057]
        },
        {
            name: 'Riverdale',
             data: [302610, 221677]
        }
        ]
        
    });
});

$(function () {
    $('#trendCorridor').highcharts({
        chart: {
            type: 'line'
        },
        title: {
            text: 'Trend (2006-10 to 2010-14)'
        },
        subtitle: {
            text: 'Total Population'
        },
        xAxis: {
            categories: ['2006-2010', '2010-2014']
        },
        yAxis: {
            title: {
                text: 'Value'
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        series: [{
            name: 'Bethesda',
            data: [18703,20675]
        },
        {
            name: 'Silver Spring',
            data: [31493, 34795]
        },
        {
            name: 'International Corridor',
             data: [55257,59160]
        },
        {
            name: 'University of Maryland',
            data: [21277, 22029]
        },
        {
            name: 'Riverdale',
             data: [29108, 30659]
        }
        ]
        
    });
});

function showDiv(id){
    if(id == 1) {
        document.getElementById('trendBethesda').style.display = "block"; 
        document.getElementById('trendSS').style.display = "none";
        document.getElementById('trendIC').style.display = "none";
        document.getElementById('trendUM').style.display = "none";
        document.getElementById('trendRiverdale').style.display = "none";
        document.getElementById('trendCorridor').style.display = "none";
        document.getElementById('corridorData').style.display = "none";
        document.getElementById('corridorData').style.display = "none";
        document.getElementById('BData').style.display = "block";
        document.getElementById('SSData').style.display = "none";
        document.getElementById('ICData').style.display = "none";
        document.getElementById('UMData').style.display = "none";
        document.getElementById('RCData').style.display = "none";
    }
    if(id == 2) {
        document.getElementById('trendBethesda').style.display = "none"; 
        document.getElementById('trendSS').style.display = "block";
        document.getElementById('trendIC').style.display = "none";
        document.getElementById('trendUM').style.display = "none";
        document.getElementById('trendRiverdale').style.display = "none";
        document.getElementById('trendCorridor').style.display = "none";
        document.getElementById('corridorData').style.display = "none";
        document.getElementById('BData').style.display = "none";
        document.getElementById('SSData').style.display = "block";
        document.getElementById('ICData').style.display = "none";
        document.getElementById('UMData').style.display = "none";
        document.getElementById('RCData').style.display = "none";
    }
    if(id == 3) {
        document.getElementById('trendBethesda').style.display = "none"; 
        document.getElementById('trendSS').style.display = "none";
        document.getElementById('trendIC').style.display = "block";
        document.getElementById('trendUM').style.display = "none";
        document.getElementById('trendRiverdale').style.display = "none";
        document.getElementById('trendCorridor').style.display = "none";
        document.getElementById('corridorData').style.display = "none";
        document.getElementById('BData').style.display = "none";
        document.getElementById('SSData').style.display = "none";
        document.getElementById('ICData').style.display = "block";
        document.getElementById('UMData').style.display = "none";
        document.getElementById('RCData').style.display = "none";
    }
    if(id == 4) {
        document.getElementById('trendBethesda').style.display = "none"; 
        document.getElementById('trendSS').style.display = "none";
        document.getElementById('trendIC').style.display = "none";
        document.getElementById('trendUM').style.display = "block";
        document.getElementById('trendRiverdale').style.display = "none";
        document.getElementById('trendCorridor').style.display = "none";
        document.getElementById('corridorData').style.display = "none";
        document.getElementById('BData').style.display = "none";
        document.getElementById('SSData').style.display = "none";
        document.getElementById('ICData').style.display = "none";
        document.getElementById('UMData').style.display = "block";
        document.getElementById('RCData').style.display = "none";
    }
    if(id == 5) {
        document.getElementById('trendBethesda').style.display = "none"; 
        document.getElementById('trendSS').style.display = "none";
        document.getElementById('trendIC').style.display = "none";
        document.getElementById('trendUM').style.display = "none";
        document.getElementById('trendRiverdale').style.display = "block";
        document.getElementById('trendCorridor').style.display = "none";
        document.getElementById('corridorData').style.display = "none";
        document.getElementById('BData').style.display = "none";
        document.getElementById('SSData').style.display = "none";
        document.getElementById('ICData').style.display = "none";
        document.getElementById('UMData').style.display = "none";
        document.getElementById('RCData').style.display = "block";
    }
    if(id == 6) {
        document.getElementById('trendBethesda').style.display = "none"; 
        document.getElementById('trendSS').style.display = "none";
        document.getElementById('trendIC').style.display = "none";
        document.getElementById('trendUM').style.display = "none";
        document.getElementById('trendRiverdale').style.display = "none";
        document.getElementById('trendCorridor').style.display = "block";
        document.getElementById('corridorData').style.display = "block";
        document.getElementById('BData').style.display = "none";
        document.getElementById('SSData').style.display = "none";
        document.getElementById('ICData').style.display = "none";
        document.getElementById('UMData').style.display = "none";
        document.getElementById('RCData').style.display = "none";
    }
}

function setViewFunction() {
    document.getElementById('trendBethesda').style.display = "none"; 
    document.getElementById('trendSS').style.display = "none";
    document.getElementById('trendIC').style.display = "none";
    document.getElementById('trendUM').style.display = "none";
    document.getElementById('trendRiverdale').style.display = "none";
    document.getElementById('trendCorridor').style.display = "block";
    document.getElementById('corridorData').style.display = "block";
    document.getElementById('BData').style.display = "none";
    document.getElementById('SSData').style.display = "none";
    document.getElementById('ICData').style.display = "none";
    document.getElementById('UMData').style.display = "none";
    document.getElementById('RCData').style.display = "none";
}