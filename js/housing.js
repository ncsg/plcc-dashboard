$(function () {

			Highcharts.setOptions({
			     colors: ['#542788', '#998ec3', '#d8daeb', '#b35806', '#f1a340']
			    });
			 Highcharts.setOptions({
			    lang: {
			        thousandsSep: ','
			    }
			 });
		    $('#container').highcharts({
		        chart: {
		            type: 'spline'
		        },
		        title: {
		            text: 'Rate of Rented Housing in the Purple Line Neighborhood'
		        },
		        subtitle: {
		            text: 'Data ranging from 2000 to 2014'
		        },
		        xAxis: {
		            type: 'datetime',
		            title: {
		                text: 'Date'
		            }
		        },
		        yAxis: {
		            title: {
		                text: 'Renting rate'
		            },
		            min: 0
		        },
		        tooltip: {
		            headerFormat: '<b>{series.name}</b><br>',
		            pointFormat: '{point.x:%e. %b}: {point.y:.2f}%'
		        },

		        plotOptions: {
		            spline: {
		                marker: {
		                    enabled: true
		                }
		            }
		        },

		        series: [{
		            name: 'Bethesda',
		            // Define the data points. All series have a dummy year
		            // of 1970/71 in order to be compared on the same x axis. Note
		            // that in JavaScript, months start at 0 for January, 1 for February etc.
		            data: [
		                [Date.UTC(2000, 01, 01), 45.81726491],
		                [Date.UTC(2008, 01, 01), 46.84174779],
		                [Date.UTC(2011, 01, 01), 48.95312998],
		                [Date.UTC(2012, 01, 01), 48.49957735]
		            ]
		        }, {
		            name: 'Silver Spring',
		            data: [
		                [Date.UTC(2000, 01, 01), 72.16191473],
		                [Date.UTC(2008, 01, 01), 68.69269059],
		                [Date.UTC(2011, 01, 01), 68.58548731],
		                [Date.UTC(2012, 01, 01), 69.97496944]
		            ]
		        }, {
		            name: 'International Corridor',
		            data: [
		                [Date.UTC(2000, 01, 01), 59.54483273],
		                [Date.UTC(2008, 01, 01), 57.45645431],
		                [Date.UTC(2011, 01, 01), 60.73429839],
		                [Date.UTC(2012, 01, 01), 60.99159177]
		            ]
		        }, {
		            name: 'University of Maryland',
		            data: [
		                [Date.UTC(2000, 01, 01), 43.79802415],
		                [Date.UTC(2008, 01, 01), 52.65756608],
		                [Date.UTC(2011, 01, 01), 54.29204941],
		                [Date.UTC(2012, 01, 01), 52.20207254]
		            ]
		        }, {
		            name: 'Riverdale-New Carrolton',
		            data: [
		               [Date.UTC(2000, 01, 01), 49.83300932],
		                [Date.UTC(2008, 01, 01), 52.1962761],
		                [Date.UTC(2011, 01, 01), 52.30417143],
		                [Date.UTC(2012, 01, 01), 51.59702587]
		            ]
		        }]
		    });
		});

		$(function () {
    $('#housingByType').highcharts({
        chart: {
            type: 'area'
        },
        title: {
            text: 'Number of Houses by type'
        },
        
        xAxis: {
            categories: ['Bethesda', 'Silver Spring', 'International Corridor', 'University of Maryland', 'Riverdale - New Carrolton'],
            tickmarkPlacement: 'on',
            title: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text: 'Total Number of houses'
            },labels: {
             formatter: function () {
                    return this.value; 
                }
            
            }
        },
        tooltip: {
            shared: true,
            valueSuffix: ' units'
        },
        plotOptions: {
            area: {
                stacking: 'normal',
                lineColor: '#666666',
                lineWidth: 2,
                marker: {
                    lineWidth: 2,
                    lineColor: '#666666'
                }
            }
        },
        series: [{
            name: 'Townhouse',
            data: [517, 544, 1708, 91, 714]
        }, {
            name: 'Family',
            data: [4055, 4078, 5645, 2426, 4880]
        },
        {
            name: 'Single',
            data: [2957, 2604, 1415, 220, 603]
        },
        {
            name: 'Condomimium',
            data: [226, 241, 320, 26, 50]
        }
       ]
    });
});
		$(function () {
    // Create the chart
		    $('#container1').highcharts({
		        chart: {
		            type: 'column',
		        },
		        title: {
		            text: 'Median House Price per Subarea (Year 2014)'
		        },
		        subtitle: {
		            text: 'Click the columns to view data over the years</a>.'
		        },
		        xAxis: {
		            type: 'category'
		        },
            
		        yAxis: {
		            title: {
		                text: 'Median House Price'
		            }

		        },
		        legend: {
		            enabled: false
		        },
		        plotOptions: {
		            series: {
		                borderWidth: 0,
		            }
		        },

		        tooltip: {
		            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
		            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b><br/>'
		        },

		        series: [{
		            name: 'Subarea',
		            colorByPoint: true,
		            data: [{
		                name: 'Bethesda',
		                y: 742941.3529,
		                drilldown: 'Bethesda'
		            }, {
		                name: 'Silver Spring',
		                y: 363924,
		                drilldown: 'Silver Spring'
		            },{
		                name: 'International Corridor',
		                y: 239038.7097,
		                drilldown: 'International Corridor'
		            },{
		                name: 'University of Maryland',
		                y: 276933.3333,
		                drilldown: 'University of Maryland'
		            },{
		                name: 'New Carrolton',
		                y: 210010.5263,
		                drilldown: 'New Carrolton'
		            }]
		        }],
		        drilldown: {
		            series: [{
		                name: 'Bethesda',
		                id: 'Bethesda',
		                data: [
		                    [
		                        '2000',
		                        343300
		                    ],
		                    [
		                        '2006-2010',
		                        752200.1765
		                    ],
		                    [
		                        '2009-2013',
		                        746429.5882
		                    ],
		                    [
		                        '2010-2014',
		                        742941.3529
		                    ]
		                ]
		            }, {
		                name: 'New Carrolton',
		                id: 'New Carrolton',
		                data: [
		                    [
		                        '2000',
		                        116142.1053
		                    ],
		                    [
		                        '2006-2010',
		                        264015.7895
		                    ],
		                    [
		                        '2009-2013',
		                        218652.6316
		                    ],
		                    [
		                        '2010-2014',
		                        210010.5263
		                    ]
		                ]
		            }, {
		                name: 'International Corridor',
		                id: 'International Corridor',
		                data: [
		                    [
		                        '2000',
		                        161029.0323
		                    ],
		                    [
		                        '2006-2010',
		                        321622.5806
		                    ],
		                    [
		                        '2009-2013',
		                        260470.9677
		                    ],
		                    [
		                        '2010-2014',
		                        239038.7097
		                    ]
		                ]
		            }, {
		                name: 'University of Maryland',
		                id: 'University of Maryland',
		                data: [
		                    [
		                        '2000',
		                        171937.5
		                    ],
		                    [
		                        '2006-2010',
		                        370466.6667
		                    ],
		                    [
		                        '2009-2013',
		                        278788.8889
		                    ],
		                    [
		                        '2010-2014',
		                        276933.3333
		                    ]
		                ]
		            }, {
		                name: 'Silver Spring',
		                id: 'Silver Spring',
		                data: [
		                    [
		                        '2000',
		                        177750
		                    ],
		                    [
		                        '2006-2010',
		                        369992
		                    ],
		                    [
		                        '2009-2013',
		                        358600
		                    ],
		                    [
		                        '2010-2014',
		                        363924
		                    ]
		                ]
		            }]
		        }
		    });
  			var chart = $('#container').highcharts();
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
    $('#compareHouseDiv').highcharts({
        chart: {
            type: 'area'
        },
        title: {
            text: 'Renter  occupied Housing units'
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: ['2000','2005-2009','2008-2012','2010-2014'],
            tickmarkPlacement: 'on',
            title: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text: 'Units Occupied'
            },
            labels: {
                formatter: function () {
                    return this.value
                }
            }
        },
        tooltip: {
            shared: true,
            valueSuffix: ' '
        },
        plotOptions: {
            area: {
                stacking: 'normal',
                lineColor: '#666666',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#666666'
                }
            }
        },
        series: [{
            name: 'Bethesda- Chevy Chase Renter Occupied',
            data: [5153, 5242, 5502, 5812]
        }, {
            name: 'Silver Spring',
            data: [10406,9974,11273,12251]
        },
        {
            name: 'International Corridor',
            data: [11909,10653,10478,10884]
        }, {
            name: 'University of Maryland',
            data: [4116,4019,4108,4165]
        }
        ]
    });
});

$(function () {
    $('#ownerOccupiedHousingUnits').highcharts({
        chart: {
            type: 'area'
        },
        title: {
            text: 'Renter  occupied Housing units'
        },
        subtitle: {
            text: 'Source: Wikipedia.org'
        },
        xAxis: {
            categories: ['2000','2005-2009','2008-2012','2010-2014'],
            tickmarkPlacement: 'on',
            title: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text: 'Units Occupied'
            },
            labels: {
                formatter: function () {
                    return this.value
                }
            }
        },
        tooltip: {
            shared: true,
            valueSuffix: ' '
        },
        plotOptions: {
            area: {
                stacking: 'normal',
                lineColor: '#666666',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#666666'
                }
            }
        },
        series: [{
            name: 'Bethesda- Chevy Chase Renter Occupied',
            data: [5153, 5242, 5502, 5812]
        }, {
            name: 'Silver Spring',
            data: [10406,9974,11273,12251]
        },
        {
            name: 'International Corridor',
            data: [11909,10653,10478,10884]
        }, {
            name: 'University of Maryland',
            data: [4116,4019,4108,4165]
        }
        ]
    });
});


$(function () {    

    // Create the chart
    $('#housingByCategory').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Housing Price by Category'
        },
        subtitle: {
        	text: 'Series: Single Family, Townhouse, Condo <br> Click on a column to see house prices by category'
        },
        xAxis: {
            type: 'category'
        },

        legend: {
            enabled: true
        },

        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                }
            }
        },

        series: [{
            name: 'Single Family',
            colorByPoint: true,
            data: [{
                name: 'Bethesda - Chevy Chase',
                y: 4055,
                drilldown: 'Bethesda - Chevy Chase SF'
            }, {
                name: 'Silver Spring',
                y: 4078,
                drilldown: 'Silver Spring SF'
            }, {
                name: 'International Corridor',
                y: 5645,
                drilldown: 'International Corridor SF'
            }, {
                name: 'University of Maryland',
                y: 2426,
                drilldown: 'University of Maryland SF'
            }, {
                name: 'Riverdale - New Carrollton',
                y: 4880,
                drilldown: 'Riverdale - New Carrollton SF'
            }]
        }, {
            name: 'Townhouse',
            colorByPoint: true,
            data: [{
                name: 'Bethesda - Chevy Chase',
                y: 517,
                drilldown: 'Bethesda - Chevy Chase T'
            }, {
                name: 'Silver Spring',
                y: 544,
                drilldown: 'Silver Spring T'
            }, {
                name: 'International Corridor',
                y: 1708,
                drilldown: 'International Corridor T'
            }, {
                name: 'University of Maryland',
                y: 91,
                drilldown: 'University of Maryland T'
            }, {
                name: 'Riverdale - New Carrollton',
                y: 714,
                drilldown: 'Riverdale - New Carrollton T'
            }]
        }, {
            name: 'Condo',
            colorByPoint: true,
            data: [{
                name: 'Bethesda - Chevy Chase',
                y: 2957,
                drilldown: 'Bethesda - Chevy Chase C'
            }, {
                name: 'Silver Spring',
                y: 2604,
                drilldown: 'Silver Spring C'
            }, {
                name: 'International Corridor',
                y: 1415,
                drilldown: 'International Corridor C'
            }, {
                name: 'University of Maryland',
                y: 220,
                drilldown: 'University of Maryland C'
            }, {
                name: 'Riverdale - New Carrollton',
                y: 603,
                drilldown: 'Riverdale - New Carrollton C'
            }]
        }],
        drilldown: {
            _animation: {
                duration: 2000
            },
            series: [{
                id: 'Bethesda - Chevy Chase SF',
                name: 'Bethesda - Chevy Chase Single Family',
                data: [
                    ['<=$100,000', 1126],
                    ['$100,000 - $300,000', 860],
                    ['$300,000 - $500,000', 1009],
                    ['$500,000 - $1,000,000', 3330],
                    ['>$1,000,000', 1204]
                ]
            }, {
                id: 'Bethesda - Chevy Chase T',
                name: 'Bethesda - Chevy Chase Townhouse',
                data: [
                    ['<=$100,000', 2],
                    ['$100,000 - $300,000', 0],
                    ['$300,000 - $500,000', 226],
                    ['$500,000 - $1,000,000', 238],
                    ['>$1,000,000', 51]
                ]
            }, {
                id: 'Bethesda - Chevy Chase C',
                name: 'Bethesda - Chevy Chase Condos',
                data: [
                    ['<=$100,000', 1045],
                    ['$100,000 - $300,000', 854],
                    ['$300,000 - $500,000', 585],
                    ['$500,000 - $1,000,000', 377],
                    ['>$1,000,000', 96]
                ]
            },{
                id: 'Silver Spring SF',
                name: 'Silver Spring Single Family',
                data: [
                    ['<=$100,000', 138],
                    ['$100,000 - $300,000', 31],
                    ['$300,000 - $500,000', 2653],
                    ['$500,000 - $1,000,000', 1247],
                    ['>$1,000,000', 9]
                ]
            }, {
                id: 'Silver Spring T',
                name: 'Silver Spring Townhouse',
                data: [
                    ['<=$100,000', 0],
                    ['$100,000 - $300,000', 106],
                    ['$300,000 - $500,000', 254],
                    ['$500,000 - $1,000,000', 184],
                    ['>$1,000,000', 0]
                ]
            }, {
                id: 'Silver Spring C',
                name: 'Silver Spring Condos',
                data: [
                    ['<=$100,000', 713],
                    ['$100,000 - $300,000', 1632],
                    ['$300,000 - $500,000', 241],
                    ['$500,000 - $1,000,000', 18],
                    ['>$1,000,000', 0]
                ]
            },{
                id: 'International Corridor SF',
                name: 'International Corridor Single Family',
                data: [
                    ['<=$100,000', 119],
                    ['$100,000 - $300,000', 3085],
                    ['$300,000 - $500,000', 2363],
                    ['$500,000 - $1,000,000', 77],
                    ['>$1,000,000', 1]
                ]
            },{
                id: 'International Corridor T',
                name: 'International Corridor Townhouse',
                data: [
                    ['<=$100,000', 101],
                    ['$100,000 - $300,000', 1490],
                    ['$300,000 - $500,000', 117],
                    ['$500,000 - $1,000,000', 0],
                    ['>$1,000,000', 0]
                ]
            }, {
                id: 'International Corridor C',
                name: 'International Corridor Condos',
                data: [
                    ['<=$100,000', 659],
                    ['$100,000 - $300,000', 752],
                    ['$300,000 - $500,000', 4],
                    ['$500,000 - $1,000,000', 0],
                    ['>$1,000,000', 0]
                ]
            }, {
                id: 'University of Maryland SF',
                name: 'University of Maryland Single Family',
                data: [
                    ['<=$100,000', 159],
                    ['$100,000 - $300,000', 1530],
                    ['$300,000 - $500,000', 644],
                    ['$500,000 - $1,000,000', 91],
                    ['>$1,000,000', 2]
                ]
            }, {
                id: 'University of Maryland T',
                name: 'University of Maryland Townhouse',
                data: [
                    ['<=$100,000', 0],
                    ['$100,000 - $300,000', 36],
                    ['$300,000 - $500,000', 54],
                    ['$500,000 - $1,000,000', 1],
                    ['>$1,000,000', 0]
                ]
            }, {
                id: 'University of Maryland C',
                name: 'University of Maryland Condos',
                data: [
                    ['<=$100,000', 20],
                    ['$100,000 - $300,000', 200],
                    ['$300,000 - $500,000', 0],
                    ['$500,000 - $1,000,000', 0],
                    ['>$1,000,000', 0]
                ]
            }, {
                id: 'Riverdale - New Carrollton SF',
                name: 'Riverdale - New Carrollton Single Family',
                data: [
                    ['<=$100,000', 274],
                    ['$100,000 - $300,000', 4553],
                    ['$300,000 - $500,000', 49],
                    ['$500,000 - $1,000,000', 1],
                    ['>$1,000,000', 3]
                ]
            }, {
                id: 'Riverdale - New Carrollton T',
                name: 'Riverdale - New Carrollton Townhouse',
                data: [
                    ['<=$100,000', 38],
                    ['$100,000 - $300,000', 676],
                    ['$300,000 - $500,000', 0],
                    ['$500,000 - $1,000,000', 0],
                    ['>$1,000,000', 0]
                ]
            }, {
                id: 'Riverdale - New Carrollton C',
                name: 'Riverdale - New Carrollton Condos',
                data: [
                    ['<=$100,000', 603],
                    ['$100,000 - $300,000', 0],
                    ['$300,000 - $500,000', 0],
                    ['$500,000 - $1,000,000', 0],
                    ['>$1,000,000', 0]
                ]
            }]
        }
    })
});

$(function () {
    $('#ownerOccupiedHousingUnits').highcharts({
        chart: {
            type: 'area'
        },
        title: {
            text: 'Owner occupied Housing units'
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: ['2000','2005-2009','2008-2012','2010-2014'],
            tickmarkPlacement: 'on',
            title: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text: 'Units Occupied'
            },
            labels: {
                formatter: function () {
                    return this.value
                }
            }
        },
        tooltip: {
            shared: true,
            valueSuffix: ' '
        },
        plotOptions: {
            area: {
                stacking: 'normal',
                lineColor: '#666666',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#666666'
                }
            }
        },
        series: [{
            name: 'Bethesda- Chevy Chase Renter Occupied',
            data: [6729, 7090, 7142, 7224]
        }, {
            name: 'Silver Spring',
            data: [5558,5714,6615,6519]
        },
        {
            name: 'International Corridor',
            data: [8898,8983,8512,8328]
        }, {
            name: 'University of Maryland',
            data: [3317,3403,2936,3205]
        },{
            name: 'Riverdale - New Carrollton',
            data: [8912,8816,8033,7980]
        },
        
        ]
    });
});
    
$(function () {
    $('#affordableOwner').highcharts({
        chart: {
            type: 'area'
        },
        title: {
            text: 'Affordable Housing for Owners'
        },
        
        xAxis: {
            categories: ['Bethesda', 'Silver Spring', 'International Corridor', 'University of Maryland', 'Riverdale - New Carrolton'],
            tickmarkPlacement: 'on',
            title: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text: 'Total Number of houses'
            },labels: {
             formatter: function () {
                    return this.value; 
                }
            
            }
        },
        tooltip: {
            shared: true,
            valueSuffix: ' '
        },
        plotOptions: {
            area: {
                stacking: 'normal',
                lineColor: '#666666',
                lineWidth: 2,
                marker: {
                    lineWidth: 2,
                    lineColor: '#666666'
                }
            }
        },
        series: [{
            name: 'Affordable to Very Low Income',
            data: [1766, 2229, 3477, 3121, 4158]
        }, {
            name: 'Low Income',
            data: [541, 1261, 3843, 1187, 2493]
        },
        {
            name: 'Middle Income',
            data: [348, 1144, 1383, 427, 151]
        },
        {
            name: 'Not Affordable',
            data: [5827, 4046, 758, 739, 429]
        }
       ]
    });
});
$(function () {
    $('#affordableRenter1B').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Affordable Housing for Renters'
        },
        subtitle: {
        		text: 'One Bedroom Houses'
        },
        xAxis: {
            categories: ['Bethesda - Chevy Chase', 'Silver Spring', 'International Corridor', 'University of Maryland', 'Riverdale - New Carrollton']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total number of houses'
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                }
            }
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
                }
            }
        },
        series: [{
            name: 'Affordable to the Very Low Income',
            data: [0,23, 176, 0, 0]
        }, {
            name: '~Low Income',
            data: [199, 892, 2875, 67, 159]
        }, {
            name: '~Middle Income',
            data: [112, 2496, 0, 0, 213]
        }, {
            name: '~Not Affordable',
            data: [1098, 1437, 0, 0, 0]
        }]
    });
});

$(function () {
    $('#affordableRenter2B').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Affordable Housing for Renters'
        },
        subtitle: {
        		text: 'Two Bedroom Houses'
        },
        xAxis: {
            categories: ['Bethesda - Chevy Chase', 'Silver Spring', 'International Corridor', 'University of Maryland', 'Riverdale - New Carrollton']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total number of houses'
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                }
            }
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
                }
            }
        },
        series: [{
            name: 'Affordable to the Very Low Income',
            data: [0,0, 0, 0, 0]
        }, {
            name: '~Low Income',
            data: [0, 134, 2032, 0, 0]
        }, {
            name: '~Middle Income',
            data: [124, 1006, 1647, 36, 370]
        }, {
            name: '~Not Affordable',
            data: [841, 2638, 0, 0, 144]
        }]
    });
});

$(function () {
    $('#affordableRenter3B').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Affordable Housing for Renters'
        },
        subtitle: {
        		text: 'Three Bedroom Houses'
        },
        xAxis: {
            categories: ['Bethesda - Chevy Chase', 'Silver Spring', 'International Corridor', 'University of Maryland', 'Riverdale - New Carrollton']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total number of houses'
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                }
            }
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
                }
            }
        },
        series: [{
            name: 'Affordable to the Very Low Income',
            data: [0,0, 0, 0, 0]
        }, {
            name: '~Low Income',
            data: [0, 19, 14, 0, 0]
        }, {
            name: '~Middle Income',
            data: [0, 88, 209, 0, 0]
        }, {
            name: '~Not Affordable',
            data: [156, 515, 108, 0, 102]
        }]
    });
});


$(function () {
    $('#compareHouseDivBethesda').highcharts({
        chart: {
            type: 'area'
        },
        title: {
            text: 'Owner vs Renter occupied Housing units - Bethesda Chevy Chase'
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: ['2000','2005-2009','2008-2012','2010-2014', '2011-2015', '2012-2016'],
            tickmarkPlacement: 'on',
            title: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text: 'Units Occupied'
            },
            labels: {
                formatter: function () {
                    return this.value
                }
            }
        },
        tooltip: {
            shared: true,
            valueSuffix: ' '
        },
        plotOptions: {
            area: {
                stacking: 'normal',
                lineColor: '#666666',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#666666'
                }
            }
        },
        series: [{
            name: 'Bethesda Owner Occupied',
            data: [6729, 7090, 7154, 4874, 4929, 4985]
        }, {
            name: 'Bethesda Renter Occupied',
            data: [5153,5242,5502,4590, 4602, 4613]
        }
        ]
    });
});

$(function () {
    $('#compareHouseDivSS').highcharts({
        chart: {
            type: 'area'
        },
        title: {
            text: 'Owner vs Renter occupied Housing units - Silver Springs'
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: ['2000','2005-2009','2008-2012','2010-2014', '2011-2015', '2012-2016'],
            tickmarkPlacement: 'on',
            title: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text: 'Units Occupied'
            },
            labels: {
                formatter: function () {
                    return this.value
                }
            }
        },
        tooltip: {
            shared: true,
            valueSuffix: ' '
        },
        plotOptions: {
            area: {
                stacking: 'normal',
                lineColor: '#666666',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#666666'
                }
            }
        },
        series: [{
            name: 'Silver Spring Owner Occupied',
            data: [5558, 5717, 6615, 5158, 5018, 4861]
        }, {
            name: 'Silver Spring Occupied',
            data: [10406,9964,11273,12021, 12607, 12999]
        }
        ]
    });
});

$(function () {
    $('#compareHouseDivIC').highcharts({
        chart: {
            type: 'area'
        },
        title: {
            text: 'Owner vs Renter occupied Housing units - International Corridor'
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: ['2000','2005-2009','2008-2012','2010-2014', '2011-2015', '2012-2016'],
            tickmarkPlacement: 'on',
            title: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text: 'Units Occupied'
            },
            labels: {
                formatter: function () {
                    return this.value
                }
            }
        },
        tooltip: {
            shared: true,
            valueSuffix: ' '
        },
        plotOptions: {
            area: {
                stacking: 'normal',
                lineColor: '#666666',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#666666'
                }
            }
        },
        series: [{
            name: 'International Corridor Owner Occupied',
            data: [8898, 8983, 8592, 6727, 6669, 6374]
        }, {
            name: 'International Corridor Renter Occupied',
            data: [11909,10653,10478,10518, 10367, 10460]
        }
        ]
    });
});

$(function () {
    $('#compareHouseDivUMD').highcharts({
        chart: {
            type: 'area'
        },
        title: {
            text: 'Owner vs Renter occupied Housing units - University of Maryland'
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: ['2000','2005-2009','2008-2012','2010-2014', '2011-2015', '2012-2016'],
            tickmarkPlacement: 'on',
            title: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text: 'Units Occupied'
            },
            labels: {
                formatter: function () {
                    return this.value
                }
            }
        },
        tooltip: {
            shared: true,
            valueSuffix: ' '
        },
        plotOptions: {
            area: {
                stacking: 'normal',
                lineColor: '#666666',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#666666'
                }
            }
        },
        series: [{
            name: 'UMD Owner Occupied',
            data: [3317, 3403, 2946, 1476, 1532, 1510]
        }, {
            name: 'UMD Renter Occupied',
            data: [4116,4019,4108,1612, 1657, 1512]
        }
        ]
    });
});

$(function () {
    $('#compareHouseDivNC').highcharts({
        chart: {
            type: 'area'
        },
        title: {
            text: 'Owner vs Renter occupied Housing units - Riverdale New Carrollton'
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: ['2000','2005-2009','2008-2012','2010-2014', '2011-2015', '2012-2016'],
            tickmarkPlacement: 'on',
            title: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text: 'Units Occupied'
            },
            labels: {
                formatter: function () {
                    return this.value
                }
            }
        },
        tooltip: {
            shared: true,
            valueSuffix: ' '
        },
        plotOptions: {
            area: {
                stacking: 'normal',
                lineColor: '#666666',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#666666'
                }
            }
        },
        series: [{
            name: 'International Corridor Owner Occupied',
            data: [8912, 8816, 8033, 6727, 6669, 6374]
        }, {
            name: 'International Corridor Renter Occupied',
            data: [6418,6527,6270,10518, 10367, 10460]
        }
        ]
    });
});

<!--Owner Affordable charts-->

$(function () {
    $('#OwnerAffordabilityBethesda').highcharts({
        chart: {
            type: 'area'
        },
        title: {
            text: 'Affordable Housing for Owners - Bethesda Chevy Chase'
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: ['2000','2005-2009','2008-2012'],
            tickmarkPlacement: 'on',
            title: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text: 'Units Occupied'
            },
            labels: {
                formatter: function () {
                    return this.value
                }
            }
        },
        tooltip: {
            shared: true,
            valueSuffix: ' '
        },
        plotOptions: {
            area: {
                stacking: 'normal',
                lineColor: '#666666',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#666666'
                }
            }
        },
        series: [{
            name: 'Affordable to the Very Low Income',
            data: [209, 68, 136]
        }, {
            name: 'Low Income',
            data: [149,10,44]
        },
        {
        name: 'Not Affordable',
            data: [6494,7094,7029]
        }
        ]
    });
});

$(function () {
    $('#OwnerAffordabilitySS').highcharts({
        chart: {
            type: 'area'
        },
        title: {
            text: 'Affordable Housing for Owners - Silver Springs'
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: ['2000','2005-2009','2008-2012'],
            tickmarkPlacement: 'on',
            title: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text: 'Units Occupied'
            },
            labels: {
                formatter: function () {
                    return this.value
                }
            }
        },
        tooltip: {
            shared: true,
            valueSuffix: ' '
        },
        plotOptions: {
            area: {
                stacking: 'normal',
                lineColor: '#666666',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#666666'
                }
            }
        },
        series: [{
            name: 'Affordable to the Very Low Income',
            data: [479, 105, 140]
        }, {
            name: 'Low Income',
            data: [426,30,210]
        },
        {
        name: 'Not Affordable',
            data: [4617,5076,6267]
        }
        ]
    });
});

$(function () {
    $('#OwnerAffordabilityIC').highcharts({
        chart: {
            type: 'area'
        },
        title: {
            text: 'Affordable Housing for Owners - International Corridor'
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: ['2000','2005-2009','2008-2012'],
            tickmarkPlacement: 'on',
            title: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text: 'Units Occupied'
            },
            labels: {
                formatter: function () {
                    return this.value
                }
            }
        },
        tooltip: {
            shared: true,
            valueSuffix: ' '
        },
        plotOptions: {
            area: {
                stacking: 'normal',
                lineColor: '#666666',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#666666'
                }
            }
        },
        series: [{
            name: 'Affordable to the Very Low Income',
            data: [1203, 681, 1465]
        }, {
            name: 'Low Income',
            data: [3262,594,1326]
        },
        {
        name: 'Not Affordable',
            data: [4294,7946,5932]
        }
        ]
    });
});

$(function () {
    $('#OwnerAffordabilityUMD').highcharts({
        chart: {
            type: 'area'
        },
        title: {
            text: 'Affordable Housing for Owners - University of Maryland'
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: ['2000','2005-2009','2008-2012'],
            tickmarkPlacement: 'on',
            title: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text: 'Units Occupied'
            },
            labels: {
                formatter: function () {
                    return this.value
                }
            }
        },
        tooltip: {
            shared: true,
            valueSuffix: ' '
        },
        plotOptions: {
            area: {
                stacking: 'normal',
                lineColor: '#666666',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#666666'
                }
            }
        },
        series: [{
            name: 'Affordable to the Very Low Income',
            data: [342, 166, 309]
        }, {
            name: 'Low Income',
            data: [1134,94,541]
        },
        {
        name: 'Not Affordable',
            data: [1825,3181,2099]
        }
        ]
    });
});


$(function () {
    $('#OwnerAffordabilityNC').highcharts({
        chart: {
            type: 'area'
        },
        title: {
            text: 'Affordable Housing for Owners - Riverdale New Carrollton'
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: ['2000','2005-2009','2008-2012'],
            tickmarkPlacement: 'on',
            title: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text: 'Units Occupied'
            },
            labels: {
                formatter: function () {
                    return this.value
                }
            }
        },
        tooltip: {
            shared: true,
            valueSuffix: ' '
        },
        plotOptions: {
            area: {
                stacking: 'normal',
                lineColor: '#666666',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#666666'
                }
            }
        },
        series: [{
            name: 'Affordable to the Very Low Income',
            data: [2478, 1098, 2366]
        }, {
            name: 'Low Income',
            data: [4674,821,2073]
        },
        {
        name: 'Not Affordable',
            data: [1763,6952,3625]
        }
        ]
    });
});

<!--Renter Affordability-->
$(function () {
    $('#RenterAffordabilityBethesda').highcharts({
        chart: {
            type: 'area'
        },
        title: {
            text: 'Affordable Housing for Renters - Bethesda Chevy Chase' 
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: ['2000','2005-2009','2008-2012'],
            tickmarkPlacement: 'on',
            title: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text: 'Units Occupied'
            },
            labels: {
                formatter: function () {
                    return this.value
                }
            }
        },
        tooltip: {
            shared: true,
            valueSuffix: ' '
        },
        plotOptions: {
            area: {
                stacking: 'normal',
                lineColor: '#666666',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#666666'
                }
            }
        },
        series: [{
            name: 'Affordable to the Very Low Income',
            data: [801, 964, 587]
        }, {
            name: 'Low Income',
            data: [1778,1060,957]
        },
        {
        name: 'Not Affordable',
            data: [5232,5537,4268]
        }
        ]
    });
});


$(function () {
    $('#RenterAffordabilitySS').highcharts({
        chart: {
            type: 'area'
        },
        title: {
            text: 'Affordable Housing for Renters - Silver Spring' 
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: ['2000','2005-2009','2008-2012'],
            tickmarkPlacement: 'on',
            title: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text: 'Units Occupied'
            },
            labels: {
                formatter: function () {
                    return this.value
                }
            }
        },
        tooltip: {
            shared: true,
            valueSuffix: ' '
        },
        plotOptions: {
            area: {
                stacking: 'normal',
                lineColor: '#666666',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#666666'
                }
            }
        },
        series: [{
            name: 'Affordable to the Very Low Income',
            data: [2790,1712,1593]
        }, {
            name: 'Low Income',
            data: [5893,3164,3181]
        },
        {
        name: 'Not Affordable',
            data: [1879,5484,6982]
        }
        ]
    });
});


$(function () {
    $('#RenterAffordabilityIC').highcharts({
        chart: {
            type: 'area'
        },
        title: {
            text: 'Affordable Housing for Renters - International Corridor' 
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: ['2000','2005-2009','2008-2012'],
            tickmarkPlacement: 'on',
            title: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text: 'Units Occupied'
            },
            labels: {
                formatter: function () {
                    return this.value
                }
            }
        },
        tooltip: {
            shared: true,
            valueSuffix: ' '
        },
        plotOptions: {
            area: {
                stacking: 'normal',
                lineColor: '#666666',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#666666'
                }
            }
        },
        series: [{
            name: 'Affordable to the Very Low Income',
            data: [8623,6675,4059]
        }, {
            name: 'Low Income',
            data: [3051,3441,5863]
        },
        {
        name: 'Not Affordable',
            data: [419,1084,911]
        }
        ]
    });
});

$(function () {
    $('#RenterAffordabilityUMD').highcharts({
        chart: {
            type: 'area'
        },
        title: {
            text: 'Affordable Housing for Renters - Univeristy of Maryland' 
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: ['2000','2005-2009','2008-2012'],
            tickmarkPlacement: 'on',
            title: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text: 'Units Occupied'
            },
            labels: {
                formatter: function () {
                    return this.value
                }
            }
        },
        tooltip: {
            shared: true,
            valueSuffix: ' '
        },
        plotOptions: {
            area: {
                stacking: 'normal',
                lineColor: '#666666',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#666666'
                }
            }
        },
        series: [{
            name: 'Affordable to the Very Low Income',
            data: [2457,2233,1434]
        }, {
            name: 'Low Income',
            data: [1240,1098,1719]
        },
        {
        name: 'Not Affordable',
            data: [444,726,947]
        }
        ]
    });
});

$(function () {
    $('#RenterAffordabilityNC').highcharts({
        chart: {
            type: 'area'
        },
        title: {
            text: 'Affordable Housing for Renters - Riverdale New Carrollton' 
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: ['2000','2005-2009','2008-2012'],
            tickmarkPlacement: 'on',
            title: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text: 'Units Occupied'
            },
            labels: {
                formatter: function () {
                    return this.value
                }
            }
        },
        tooltip: {
            shared: true,
            valueSuffix: ' '
        },
        plotOptions: {
            area: {
                stacking: 'normal',
                lineColor: '#666666',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#666666'
                }
            }
        },
        series: [{
            name: 'Affordable to the Very Low Income',
            data: [4476,3383,2900]
        }, {
            name: 'Low Income',
            data: [2063,2175,3149]
        },
        {
        name: 'Not Affordable',
            data: [241,836,474]
            }
        ]
    });
});


$(function () {
    $('#HousesBethesda').highcharts({
        chart: {
            type: 'area'
        },
        title: {
            text: 'Number of Houses by type - Bethesda Chevy Chase' 
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: ['2000','2005-2009','2008-2012', '2011-2016'],
            tickmarkPlacement: 'on',
            title: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text: 'Units Occupied'
            },
            labels: {
                formatter: function () {
                    return this.value
                }
            }
        },
        tooltip: {
            shared: true,
            valueSuffix: ' '
        },
        plotOptions: {
            area: {
                stacking: 'normal',
                lineColor: '#666666',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#666666'
                }
            }
        },
        series: [{
            name: 'Single Family detached',
            data: [6245,6225,6022, 3917]
        }, {
            name: 'Single Family attached',
            data: [547,681,727, 727]
        },
        {
        name: 'Multifamily',
            data: [5114,5560,5953, 5689]
            }
        ]
    });
});


$(function () {
    $('#HousesSS').highcharts({
        chart: {
            type: 'area'
        },
        title: {
            text: 'Number of Houses by type - Silver Springs' 
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: ['2000','2005-2009','2008-2012', '2011-2016'],
            tickmarkPlacement: 'on',
            title: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text: 'Units Occupied'
            },
            labels: {
                formatter: function () {
                    return this.value
                }
            }
        },
        tooltip: {
            shared: true,
            valueSuffix: ' '
        },
        plotOptions: {
            area: {
                stacking: 'normal',
                lineColor: '#666666',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#666666'
                }
            }
        },
        series: [{
            name: 'Single Family detached',
            data: [5079,5507,5536, 4029]
        }, {
            name: 'Single Family attached',
            data: [570,616,730, 645]
        },
        {
        name: 'Multifamily',
            data: [10281,9996,11651, 14362]
            }
        ]
    });
});

$(function () {
    $('#HousesIC').highcharts({
        chart: {
            type: 'area'
        },
        title: {
            text: 'Number of Houses by type - International Corridor' 
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: ['2000','2005-2009','2008-2012','2010-2014', '2011-2016'],
            tickmarkPlacement: 'on',
            title: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text: 'Units Occupied'
            },
            labels: {
                formatter: function () {
                    return this.value
                }
            }
        },
        tooltip: {
            shared: true,
            valueSuffix: ' '
        },
        plotOptions: {
            area: {
                stacking: 'normal',
                lineColor: '#666666',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#666666'
                }
            }
        },
        series: [{
            name: 'Single Family detached',
            data: [7649,7354,7247,7252, 5480]
        }, {
            name: 'Single Family attached',
            data: [1618,1715,1575,1543, 1707]
        },
        {
        name: 'Multifamily',
            data: [11540,10567,10168,10417, 10384]
            }
        ]
    });
});

$(function () {
    $('#HousesUMD').highcharts({
        chart: {
            type: 'area'
        },
        title: {
            text: 'Number of Houses by type - University of Maryland' 
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: ['2000','2005-2009','2008-2012','2010-2014', '2011-2016'],
            tickmarkPlacement: 'on',
            title: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text: 'Units Occupied'
            },
            labels: {
                formatter: function () {
                    return this.value
                }
            }
        },
        tooltip: {
            shared: true,
            valueSuffix: ' '
        },
        plotOptions: {
            area: {
                stacking: 'normal',
                lineColor: '#666666',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#666666'
                }
            }
        },
        series: [{
            name: 'Single Family detached',
            data: [3712,3720,3768,3776, 2111]
        }, {
            name: 'Single Family attached',
            data: [205,160,258,276, 44]
        },
        {
        name: 'Multifamily',
            data: [3516,3542,3028,3138, 1159]
            }
        ]
    });
});



function showDiv(id){
	if(id == 1) {
        document.getElementById('affordableRenter1B').style.display = "block"; 
        document.getElementById('affordableRenter2B').style.display = "none"; 
        document.getElementById('affordableRenter3B').style.display = "none"; 
    }
    if(id == 2) {
        document.getElementById('affordableRenter1B').style.display = "none"; 
        document.getElementById('affordableRenter2B').style.display = "block"; 
        document.getElementById('affordableRenter3B').style.display = "none"; 
    }
    if(id == 3) {
        document.getElementById('affordableRenter1B').style.display = "none"; 
        document.getElementById('affordableRenter2B').style.display = "none"; 
        document.getElementById('affordableRenter3B').style.display = "block";
    }
}

function setViewFunction() {
 	document.getElementById('affordableRenter1B').style.display = "block"; 
    document.getElementById('affordableRenter2B').style.display = "none"; 
    document.getElementById('affordableRenter3B').style.display = "none";
}
