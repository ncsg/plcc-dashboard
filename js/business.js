$(function () {
    Highcharts.setOptions({
     colors: ['#4a1486', '#807dba', '#bcbddc', '#d8daeb', '#b35806', '#f1a340']
    });
    Highcharts.setOptions({
    lang: {
        thousandsSep: ','
    }
});

    $('#jobsBySector').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Total Jobs by Sector'
        },
        subtitle: {
            text: 'Snapshot 2014'
        },
        xAxis: {
            categories: ['Bethesda - Chevy Chase','Silver Spring','International Corridor','University of Maryland', 'Riverdale - New Carrollton']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total number of jobs'
            },

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
            name: 'Office',
            data: [21500,14550,2101,5911,10939]
        }, {
            name: 'Retail',
            data: [3287,2226,1343,469,1383]
        }, {
            name: 'Industrial',
            data: [539,450,78,11,6693]
            
        }, {
            name: 'Other',
            data: [11243,9526,3860,1424,2229]
        },]
    });
});

$(function () {
    /**
     * Create a constructor for sparklines that takes some sensible defaults and merges in the individual
     * chart options. This function is also available from the jQuery plugin as $(element).highcharts('SparkLine').
     */
    Highcharts.SparkLine = function (a, b, c) {
        var hasRenderToArg = typeof a === 'string' || a.nodeName,
            options = arguments[hasRenderToArg ? 1 : 0],
            defaultOptions = {
                chart: {
                    renderTo: (options.chart && options.chart.renderTo) || this,
                    backgroundColor: null,
                    borderWidth: 0,
                    type: 'area',
                    margin: [2, 0, 2, 0],
                    width: 120,
                    height: 20,
                    style: {
                        overflow: 'visible'
                    },
                    skipClone: true
                },
                title: {
                    text: ''
                },
                exporting: {
                     enabled: false
                },
                credits: {
                    enabled: false
                },
                xAxis: {
                    labels: {
                        enabled: false
                    },
                    title: {
                        text: null
                    },
                    startOnTick: false,
                    endOnTick: false,
                    tickPositions: []
                },
                yAxis: {
                    endOnTick: false,
                    startOnTick: false,
                    labels: {
                        enabled: false
                    },
                    title: {
                        text: null
                    },
                    tickPositions: [0]
                },
                legend: {
                    enabled: false
                },
                tooltip: {
                    backgroundColor: null,
                    borderWidth: 0,
                    shadow: false,
                    useHTML: true,
                    hideDelay: 0,
                    shared: true,
                    padding: 0,
                    positioner: function (w, h, point) {
                        return { x: point.plotX - w / 2, y: point.plotY - h };
                    }
                },
                plotOptions: {
                    series: {
                        animation: false,
                        lineWidth: 1,
                        shadow: false,
                        states: {
                            hover: {
                                lineWidth: 1
                            }
                        },
                        marker: {
                            radius: 1,
                            states: {
                                hover: {
                                    radius: 2
                                }
                            }
                        },
                        fillOpacity: 0.25
                    },
                    column: {
                        negativeColor: '#910000',
                        borderColor: 'silver'
                    }
                }
            };

        options = Highcharts.merge(defaultOptions, options);

        return hasRenderToArg ?
            new Highcharts.Chart(a, options, c) :
            new Highcharts.Chart(options, b);
    };

    var start = +new Date(),
        $tds = $('td[data-sparkline]'),
        fullLen = $tds.length,
        n = 0;

    // Creating 153 sparkline charts is quite fast in modern browsers, but IE8 and mobile
    // can take some seconds, so we split the input into chunks and apply them in timeouts
    // in order avoid locking up the browser process and allow interaction.
    function doChunk() {
        var time = +new Date(),
            i,
            len = $tds.length,
            $td,
            stringdata,
            arr,
            data,
            chart;

        for (i = 0; i < len; i += 1) {
            $td = $($tds[i]);
            stringdata = $td.data('sparkline');
            arr = stringdata.split('; ');
            data = $.map(arr[0].split(', '), parseFloat);
            chart = {};

            if (arr[1]) {
                chart.type = arr[1];
            }
            $td.highcharts('SparkLine', {
                series: [{
                    data: data,
                    pointStart: 1
                }],
                tooltip: {
                    headerFormat: '<span style="font-size: 10px">' + $td.parent().find('th').html() + ', D{point.x}:</span><br/>',
                    pointFormat: '<b>{point.y}</b>'
                },
                chart: chart
            });

            n += 1;

            // If the process takes too much time, run a timeout to allow interaction with the browser
            if (new Date() - time > 500) {
                $tds.splice(0, i + 1);
                setTimeout(doChunk, 0);
                break;
            }

            // Print a feedback on the performance
            if (n === fullLen) {
                $('#result').html('Generated ' + fullLen + ' sparklines in ' + (new Date() - start) + ' ms');
            }
        }
    }
    doChunk();

});


$(function () {
    $('#jobsBySize').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Total Number of Jobs by Firm Size'
        },
        subtitle: {
                text: 'Source: QCEW (2013)' 
        },
        xAxis: {
            categories: ['Bethesda - Chevy Chase', 'Silver Spring', 'International Corridor', 'University of Maryland', 'Riverdale - New Carrollton']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total Number of Jobs'
            },
            stackLabels: {
                enabled: false,
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                }
            }
        },
        legend: {
            shadow: false
        },
        tooltip: {
            headerFormat: '<b>{point.x}</b><br/>',
            pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: false,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                    style: {
                        textShadow: '0 0 3px black'
                    }
                }
            }
        },
        series: [{
            name: 'Less than 5',
            data: [1278, 856, 340, 109, 242]
        }, {
            name: '5-9',
            data: [338, 291, 125, 38, 109]
        }, {
            name: '10-19',
            data: [289, 217, 66, 32, 70]
        }, {
            name: '20-49',
            data: [197, 179, 40, 27, 74]
        }, {
            name: '>50',
            data: [160, 110, 28, 17, 46]
        }]
    });
});
$(function () {
    // Create the chart
    $('#wageBySector').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Average Wage per Employee by Sector'
        },
        subtitle: {
            text: 'Click the columns for data by Subarea.'
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: 'Average Wage'
            }

        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: '${point.y}'
                }
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b><br/>'
        },

        series: [{
            name: 'Subareas',
            colorByPoint: true,
            data: [{
                name: 'Office',
                y:  74867,
                drilldown: 'Office'
            }, {
                name: 'Retail',
                y: 43765,
                drilldown: 'Retail'
            }, {
                name: 'Industrial',
                y: 50556,
                drilldown: 'Industrial'
            }, {
                name: 'Other',
                y: 35933,
                drilldown: 'Other'
            }]
        }],
        drilldown: {
            series: [{
                name: 'Office',
                id: 'Office',
                data: [
                    [
                        'Bethesda - Chevy Chase',
                         89157
                    ],
                    [
                        'Silver Spring',
                         67537         

                    ],
                    [
                        'International Corridor',
                        37590
                    ],
                    [
                        'University of Maryland',
                        63817
                    ],
                    [
                        'Riverdale - New Carrolton',
                        59836
                    ]
                ]
            }, {
                name: 'Industrial',
                id: 'Industrial',
                data: [
                    [
                        'Bethesda - Chevy Chase',
                         64728 
                    ],
                    [
                        'Silver Spring',
                        48593         

                    ],
                    [
                        'International Corridor',
                        24000
                    ],
                    [
                        'University of Maryland',
                        50215
                    ],
                    [
                        'Riverdale - New Carrolton',
                        49209
                    ]
                ]
            }, {
                name: 'Retail',
                id: 'Retail',
                data: [
                    [
                        'Bethesda - Chevy Chase',
                         57687
                    ],
                    [
                        'Silver Spring',
                         43740          
                    ],
                    [
                        'International Corridor',
                        26107
                    ],
                    [
                        'University of Maryland',
                        29816
                    ],
                    [
                        'Riverdale - New Carrolton',
                        40526
                    ]
                ]
            },{
                name: 'Other',
                id: 'Other',
                data: [
                    [
                        'Bethesda - Chevy Chase',
                         36117 
                    ],
                    [
                        'Silver Spring',
                        37057         

                    ],
                    [
                        'International Corridor',
                        34271
                    ],
                    [
                        'University of Maryland',
                        30063
                    ],
                    [
                        'Riverdale - New Carrolton',
                        36939
                    ]
                ]
            }]
        }
    });
});
