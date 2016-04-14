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
            type: 'bar'
        },
        title: {
            text: 'Number of houses by type'
        },
        subtitle: {
        		text: 'Snapshot - 2014'
        },
        xAxis: {
            categories: ['Bethesda - Chevy Chase', 'Silver Spring', 'International Corridor', 'University of Maryland','Riverdale - New Carrollton']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total number of houses'
            }
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
            name: 'Condominium',
            data: [226, 241, 320, 26, 50]
        }, {
            name: 'Single',
            data: [2957, 2604, 1415, 220, 603]
        }, {
            name: 'Family',
            data: [4055, 4078, 5645, 2426, 4880]
        }, {
            name: 'Townhouse',
            data: [517, 544, 1708, 91, 714]
        }]
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
    var categories = ['Bethesda', 'Silver Spring', 'International Corridor', 'University of Maryland', 'Riverdale - New Carrolton'];
    $(document).ready(function () {
        $('#compareHouseDiv').highcharts({
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Owner Occupied Housing Units vs. Renter Occupied Housing Units'
            },
            subtitle: {
                text: 'Snaphshot: 2014'
            },
            xAxis: [{
                categories: categories,
                reversed: true,
                labels: {
                    step: 1
                }
            }, { // mirror axis on right side
                opposite: true,
                reversed: true,
                categories: categories,
                linkedTo: 0,
                labels: {
                    step: 1
                }
            }],
            yAxis: {
                title: {
                    text: null
                },
                labels: {
                    formatter: function () {
                        return Math.abs(this.value);
                    }
                }
            },

            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },

            tooltip: {
                formatter: function () {
                    return '<b>' + this.point.category + ':</b> ' + Highcharts.numberFormat(Math.abs(this.point.y), 0);
                }
            },

            series: [{
                name: '% Owner Occupied',
                data: [-51.50042265, -39.00840823, -48.40297413, -30.02503056, -47.79792746]
            }, {
                name: '% Renter Occupied',
                data: [48.49957735, 60.99159177, 51.59702587, 69.97496944, 52.20207254]
            }]
        });
    });

});