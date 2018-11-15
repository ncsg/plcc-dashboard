$(function () {
	Highcharts.setOptions({
     colors: ['#4a1486', '#807dba', '#bcbddc', '#d8daeb', '#b35806', '#f1a340']
    });
    Highcharts.setOptions({
    lang: {
        thousandsSep: ','
    }
});

    $('#container').highcharts({
        title: {
            text: 'Travel pattern by Subarea'
        },
        subtitle: {
            text: 'Snapshot: 2016'
        },
        xAxis: {
            categories: ['Bethesda', 'Silver Spring', 'International Corridor', 'University of Maryland', 'New Carrolton']
        },
        labels: {
            items: [{
                html: 'Neighborhood travel pattern',
                style: {
                    left: '850px',
                    top: '18px',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                }
            }]
        },
        series: [{
            type: 'column',
            name: 'Drivealone',
            data: [5714, 10643, 14229, 2711, 9135]
        }, {
            type: 'column',
            name: 'Carpool',
            data: [744, 1466, 8422, 579, 2849]
        }, {
            type: 'column',
            name: 'Public Train',
            data: [2577, 8044, 7349, 1074, 2754]
        }, {
            type: 'column',
            name: 'Bicycle',
            data: [217, 182, 104, 278, 24]
        },{
            type: 'column',
            name: 'Walk',
            data: [1219, 1193, 969, 2538, 368]
        },{
            type: 'column',
            name: 'Work at Home',
            data: [1027, 1034, 688, 588, 147]
        },{
            type: 'pie',
            name: 'Neighborhood travel pattern',
            data: [{
                name: 'Drivealone',
                y: 55,
                color: Highcharts.getOptions().colors[0] 
            }, {
                name: 'Carpool',
                y: 15,
                color: Highcharts.getOptions().colors[1] 
            }, {
                name: 'Public Train',
                y: 22,
                color: Highcharts.getOptions().colors[2] 
            }, {
                name: 'Bicycle',
                y: 1,
                color: Highcharts.getOptions().colors[3] 
            }, {
                name: 'Walk',
                y: 4,
                color: Highcharts.getOptions().colors[4] 
            }, {
                name: 'Work at Home',
                y: 3,
                color: Highcharts.getOptions().colors[5] 
            }],
            center: [800, 50],
            size: 100,
            showInLegend: false,
            dataLabels: {
                enabled: true
            }
        }]
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
                    headerFormat: '<span style="font-size: 10px">' + $td.parent().find('th').html() + ', D{point.x:.2f}%</span><br/>',
                    pointFormat: '<b>{point.y:.2f}%</b>'
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
    $('#laborByAge').highcharts({
        title: {
            text: 'Statistics of Jobs by the Age Group (29 or younger)',
            x: -20 //center
        },
        subtitle: {
            text: 'Source: lehd.ces.census.gov',
            x: -20
        },
        xAxis: {
            categories: ['2010', '2011', '2012', '2013', '2014']
        },
        yAxis: {
            title: {
                text: 'Total number of Jobs'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        legend: {
            layout: 'horizontal',
            verticalAlign: 'bottom',
            borderWidth: 0
        },
        series: [{
            name: 'Bethesda',
            data: [10281, 9982, 249, 9739, 8896]
        },{
            name: 'International Corridor',
            data: [1783, 1819, 1632, 1619, 1566]
        },{
            name: 'Riverdale - New Carrolton',
            data: [4492, 4334, 3893, 3851, 24257]
        },{
            name: 'Silver Spring',
            data: [7001, 6742, 6134, 6171, 5896]
        },{
            name: 'University of Maryland',
            data: [4601, 4416, 4227, 4336, 4129]
        }]
    });
});

$(function () {
    $('#laborByAge1').highcharts({
        title: {
            text: 'Statistics of Jobs by the Age Group (30 to 54)',
            x: -20 //center
        },
        subtitle: {
            text: 'Source: lehd.ces.census.gov',
            x: -20
        },
        xAxis: {
            categories: ['2010', '2011', '2012', '2013', '2014']
        },
        yAxis: {
            title: {
                text: 'Total number of Jobs'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        legend: {
            layout: 'horizontal',
            verticalAlign: 'bottom',
            borderWidth: 0
        },
        series: [{
            name: 'Bethesda',
            data: [22465, 22409, 730, 23896, 8896]
        },{
            name: 'International Corridor',
            data: [4351, 4151, 4187, 4227, 4180]
        },{
            name: 'Riverdale - New Carrolton',
            data: [14747, 14708, 15731, 14947, 69331]
        },{
            name: 'Silver Spring',
            data: [17619, 17081, 17421, 17448, 16801]
        },{
            name: 'University of Maryland',
            data: [11564, 11721, 13025, 12827, 12104]
        }]
    });
});

$(function () {
    $('#laborByAge2').highcharts({
        title: {
            text: 'Statistics of Jobs by the Age Group (55 or older)',
            x: -20 //center
        },
        subtitle: {
            text: 'Source: lehd.ces.census.gov',
            x: -20
        },
        xAxis: {
            categories: ['2010', '2011', '2012', '2013', '2014']
        },
        yAxis: {
            title: {
                text: 'Total number of Jobs'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        legend: {
            layout: 'horizontal',
            verticalAlign: 'bottom',
            borderWidth: 0
        },
        series: [{
            name: 'Bethesda',
            data: [7274, 7728, 281, 8318, 7761]
        },{
            name: 'International Corridor',
            data: [1591, 1614, 1648, 1706, 1726]
        },{
            name: 'Riverdale - New Carrolton',
            data: [5506, 5765, 5981, 5965, 28083]
        },{
            name: 'Silver Spring',
            data: [5965, 6018, 6283, 6404, 6173]
        },{
            name: 'University of Maryland',
            data: [5631, 5825, 6521, 6687, 6419]
        }]
    });
});

$(function () {
    $('#totJobs').highcharts({
        title: {
            text: 'Total number of jobs',
            x: -20 //center
        },
       
        xAxis: {
            categories: ['2010', '2011', '2012', '2013', '2014']
        },
         exporting: {
			         enabled: false
				},
        legend: {
            layout: 'horizontal',
            verticalAlign: 'bottom',
            borderWidth: 0,
            enabled: false,
        },
        series: [{
            name: 'Bethesda',
            data: [40020, 40119, 1260, 41953, 37987]
        },{
            name: 'International Corridor',
            data: [7725, 7584, 7467, 7552, 7472]
        },{
            name: 'Riverdale - New Carrolton',
            data: [24745, 24807, 25605, 24763, 24690]
        },{
            name: 'Silver Spring',
            data: [30585, 29841, 29838, 30023, 28870]
        },{
            name: 'University of Maryland',
            data: [21796, 21962, 23773, 23850, 22652]
        }]
    });
});




$(function () {
    var categories = ['Less than High School', 'High School', 'Some College', 'Bachelors Degree'];
    $(document).ready(function () {
        $('#compareDiv1').highcharts({
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Job-Housing Balance by Education Level'
            },
            subtitle: {
                text: 'Bethesda <br> (Snapshot 2016)'
            },
            xAxis: [{
                categories: categories,
                reversed: false,
                labels: {
                    step: 1
                }
            }, { // mirror axis on right side
                opposite: true,
                reversed: false,
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
                    return '<b>' + this.series.name + ', '+ this.point.category + ': </b>' + Highcharts.numberFormat(Math.abs(this.point.y), 0);
                }
            },

            series: [{
                name: 'Workers by Workplace',
                data: [-4124,-6136,-8008,-12101]
            }, {
                name: 'Workers by Residence',
                data: [760,1474,1887,4006
]
            }]
        });
    });

});

$(function () {
    var categories = ['Less than High School', 'High School', 'Some College', 'Bachelors Degree'];
    $(document).ready(function () {
        $('#compareDiv3').highcharts({
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Job-Housing Balance by Education Level'
            },
            subtitle: {
                text: 'International Corridor <br> (Snapshot 2016)'
            },
            xAxis: [{
                categories: categories,
                reversed: false,
                labels: {
                    step: 1
                }
            }, { // mirror axis on right side
                opposite: true,
                reversed: false,
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
                    return '<b>' + this.series.name + ', '+ this.point.category + ': </b>' + Highcharts.numberFormat(Math.abs(this.point.y), 0);
                }
            },

            series: [{
                name: 'Workers by Workplace',
                data: [-1114,-1152,-1288,-1360]
            }, {
                name: 'Workers by Residence',
                data: [4029,3865,4348,4996
]
            }]
        });
    });

});

$(function () {
    var categories = ['Less than High School', 'High School', 'Some College', 'Bachelors Degree'];
    $(document).ready(function () {
        $('#compareDiv5').highcharts({
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Job-Housing Balance by Education Level'
            },
            subtitle: {
                text: 'Riverdale - New Carrolton <br> (Snapshot 2016)'
            },
            xAxis: [{
                categories: categories,
                reversed: false,
                labels: {
                    step: 1
                }
            }, { // mirror axis on right side
                opposite: true,
                reversed: false,
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
                    return '<b>' + this.series.name + ', '+ this.point.category + ': </b>' + Highcharts.numberFormat(Math.abs(this.point.y), 0);
                }
            },

            series: [{
                name: 'Workers by Workplace',
                data: [-2156,-5548,-5417,-6084]
            }, {
                name: 'Workers by Residence',
                data: [2421,2807,2961,2596
]
            }]
        });
    });

});

$(function () {
    var categories = ['Less than High School', 'High School', 'Some College', 'Bachelors Degree'];
    $(document).ready(function () {
        $('#compareDiv2').highcharts({
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Job-Housing Balance by Education Level (Snapshot 2016)'
            },
            subtitle: {
                text: 'Silver Spring <br> (Snapshot 2016)'
            },
            xAxis: [{
                categories: categories,
                reversed: false,
                labels: {
                    step: 1
                }
            }, { // mirror axis on right side
                opposite: true,
                reversed: false,
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
                    return '<b>' + this.series.name + ', '+ this.point.category + ': </b>' + Highcharts.numberFormat(Math.abs(this.point.y), 0);
                }
            },

            series: [{
                name: 'Workers by Workplace',
                data: [-3271,-4991,-5926,-9181]
            }, {
                name: 'Workers by Residence',
                data: [1884,3089,3908,6249
]
            }]
        });
    });

});

$(function () {
    var categories = ['Less than High School', 'High School', 'Some College', 'Bachelors Degree'];
    $(document).ready(function () {
        $('#compareDiv4').highcharts({
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Job-Housing Balance by Education Level'
            },
            subtitle: {
                text: 'University of Maryland (Snapshot 2016)'
            },
            xAxis: [{
                categories: categories,
                reversed: false,
                labels: {
                    step: 1
                }
            }, { // mirror axis on right side
                opposite: true,
                reversed: false,
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
                    return '<b>' + this.series.name + ', '+ this.point.category + ': </b>' + Highcharts.numberFormat(Math.abs(this.point.y), 0);
                }
            },

            series: [{
                name: 'Workers by Workplace',
                data: [-1757,-3505,-4773,-8890]
            }, {
                name: 'Workers by Residence',
                data: [623,933,1071,1365
]
            }]
        });
    });

});

$(function () {

    Highcharts.setOptions({
     colors: ['#542788', '#998ec3', '#d8daeb', '#b35806', '#f1a340']
    });
    $('#subareaEducation').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Workers by Education Level'
        },
        subtitle: {
            text: 'Workers by Residence'
        },
        xAxis: {
            categories: ['Bethesda - Chevy Chase', 'Silver Spring', 'International Corridor', 'University of Maryland', 'Riverdale - New Carrollton']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total number of workers'
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
            name: 'Less than High School',
            data: [557, 1835, 3997, 716, 2251]
        }, {
            name: 'High School or Equivalent',
            data: [1073, 2625, 3569, 817, 2659]
        }, {
            name: 'Some College',
            data: [1401, 3368, 3796, 974, 2768]
        }, {
            name: 'Bachelors Degree or Advanced',
            data: [3962, 5326, 4265, 1155, 2083]
        }]
    });
});

function showDiv(id){
	if(id == 1) {
        document.getElementById('compareDiv1').style.display = "block"; 
        document.getElementById('compareDiv2').style.display = "none"; 
        document.getElementById('compareDiv3').style.display = "none"; 
        document.getElementById('compareDiv4').style.display = "none"; 
        document.getElementById('compareDiv5').style.display = "none";
    }
    if(id == 2) {
        document.getElementById('compareDiv1').style.display = "none"; 
        document.getElementById('compareDiv2').style.display = "block"; 
        document.getElementById('compareDiv3').style.display = "none"; 
        document.getElementById('compareDiv4').style.display = "none"; 
        document.getElementById('compareDiv5').style.display = "none";
    }
    if(id == 3) {
        document.getElementById('compareDiv1').style.display = "none"; 
        document.getElementById('compareDiv2').style.display = "none"; 
        document.getElementById('compareDiv3').style.display = "block"; 
        document.getElementById('compareDiv4').style.display = "none"; 
        document.getElementById('compareDiv5').style.display = "none";
    }
    if(id == 4) {
        document.getElementById('compareDiv1').style.display = "none"; 
        document.getElementById('compareDiv2').style.display = "none"; 
        document.getElementById('compareDiv3').style.display = "none"; 
        document.getElementById('compareDiv4').style.display = "block"; 
        document.getElementById('compareDiv5').style.display = "none";
    }
    if(id == 5) {
        document.getElementById('compareDiv1').style.display = "none"; 
        document.getElementById('compareDiv2').style.display = "none"; 
        document.getElementById('compareDiv3').style.display = "none"; 
        document.getElementById('compareDiv4').style.display = "none"; 
        document.getElementById('compareDiv5').style.display = "block";
    }
}

function setViewFunction() {
	document.getElementById('compareDiv1').style.display = "block"; 
    document.getElementById('compareDiv2').style.display = "none"; 
    document.getElementById('compareDiv3').style.display = "none"; 
    document.getElementById('compareDiv4').style.display = "none"; 
    document.getElementById('compareDiv5').style.display = "none";
}
