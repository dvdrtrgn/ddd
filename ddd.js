/*jslint es5:true */
/*globals d3 */
var data = [32, 57, 112],
    dataEnter = data.concat(293),
    dataExit = data.slice(0, 2),
    w = 360,
    h = 180,
    x = d3.scale.ordinal().domain([57, 32, 112]).rangePoints([0, w], 1),
    y = d3.scale.ordinal().domain(data).rangePoints([0, h], 2);

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

function svgid(sel) {
    d3.select(sel).append('p').text(sel).style({
        color: 'red',
        position: 'relative',
        top: '-10px'
    });
    return d3.select(sel).append('svg').attr({
        width: w,
        height: h,
    });
}

function svgdot(svg) {
    return svg.selectAll('.little').data(data).enter().append('circle').attr({
        class: 'little',
        cx: x,
        cy: y,
        r: 12,
    });
}

function circleG(g) {
    g.append('circle').attr({
        class: 'little',
        r: 12,
    });
}

function anchorG(g) {
    g.append('text').attr({
        dy: '.35em',
        'text-anchor': 'middle',
    }).text(String);
}

function appendG(g) {
    g.append('rect').attr({
        x: - 10,
        y: - 10,
        width: 20,
        height: 20,
    });
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

function ex1() {
    var svg = svgid('#chart-2');
    svgdot(svg);

    d3.select('#chart-2 button').on('click', function () {
        svg.selectAll('.select').remove();

        svg.selectAll('.select').data(data).enter().append('circle').attr({
            class: 'select',
            cx: x,
            cy: y,
            r: 60,
        }).style({
            fill: 'none',
            stroke: 'red',
            'stroke-opacity': 1e-6,
            'stroke-width': 3,
        }).transition().duration(750).attr({
            r: 12,
        }).style({
            'stroke-opacity': 1,
        });
    });
}

function ex2() {
    var svg = svgid('#chart-3');
    var circle = svgdot(svg);

    d3.select('#chart-3 button').on('click', function () {
        circle.style({
            fill: '#aaa',
        }).attr({
            r: 12,
            cy: y,
        });
        circle.transition().duration(500).delay(0).style({
            fill: 'steelblue',
        });
        circle.transition().duration(500).delay(500).attr('cy', 90);
        circle.transition().duration(500).delay(1000).attr('r', 30);
    });
}

function ex3() {
    var svg = svgid('#chart-4');
    var circle = svgdot(svg);

    d3.select('#chart-4 button').on('click', function () {
        circle.transition().duration(750).attr({
            cx: function () {
                return Math.random() * w;
            },
        });
    });
}

function ex4() {
    var svg = svgid('#chart-5');
    svgdot(svg);

    var g = svg.selectAll('.data').data(data).enter().append('g').attr({
        class: 'data',
        transform: function (d, i) {
            return 'translate(' + 20 * (i + 1) + ',20)';
        },
    });

    appendG(g);
    anchorG(g);

    d3.select('#chart-5 button').on('click', function () {
        g.attr({
            transform: function (d, i) {
                return 'translate(' + 20 * (i + 1) + ',20)';
            },
        }).select('rect').style({
            opacity: 1,
        });

        g.transition().duration(750).attr({
            transform: function (d) {
                return 'translate(' + x(d) + ',' + y(d) + ')';
            }
        }).select('rect').style({
            opacity: 1e-6,
        });
    });
}

function ex5() {
    var svg = svgid('#chart-6');

    var g = svg.selectAll('g').data(data).enter().append('g').attr({
        transform: function (d) {
            return 'translate(' + x(d) + ',' + y(d) + ')';
        },
    });

    circleG(g);

    g.append('text').attr({
        dy: '.35em',
        'text-anchor': 'middle',
    }).text(String);

    d3.select('#chart-6 button').on('click', function () {
        g.attr({
            transform: function (d) {
                return 'translate(' + x(d) + ',' + y(d) + ')';
            },
        }).select('circle').attr({
            r: 12,
        });

        g.transition().duration(750).attr({
            transform: function (d) {
                return 'translate(' + d + ',' + y(d) + ')';
            },
        }).select('circle').attr({
            r: Math.sqrt,
        });
    });
}

function ex6() {
    var svg = svgid('#chart-6b');

    var g = svg.selectAll('g').data(data).enter().append('g').attr({
        transform: function (d) {
            return 'translate(' + x(d) + ',' + y(d) + ')';
        },
    });

    circleG(g);

    g.append('text').attr({
        dy: '.35em',
        'text-anchor': 'middle',
    }).text(function (d, i) {
        return i;
    });

    d3.select('#chart-6b button').on('click', function () {
        g.attr({
            transform: function (d) {
                return 'translate(' + x(d) + ',' + y(d) + ')';
            },
        }).transition().duration(750).attr({
            transform: function (d, i) {
                return 'translate(' + (i * 100 + 30) + ',' + y(d) + ')';
            },
        });
    });
}

function ex7() {
    var svg = svgid('#chart-7');
    svgdot(svg);

    var g = svg.selectAll('.data').data(dataEnter).enter().append('g').attr({
        class: 'data',
        transform: function (d, i) {
            return 'translate(' + 20 * (i + 1) + ',20)';
        },
    });

    appendG(g);
    anchorG(g);

    d3.select('#chart-7 button').on('click', function () {
        g.attr({
            transform: function (d, i) {
                return 'translate(' + 20 * (i + 1) + ',20)';
            },
        }).select('rect').style({
            opacity: 1,
        });

        g.filter(function (d, i) {
            return i !== 3;
        }).transition().duration(750).attr({
            transform: function (d) {
                return 'translate(' + x(d) + ',' + y(d) + ')';
            },
        }).select('rect').style({
            opacity: 1e-6,
        });

        g.select('rect').filter(function (d, i) {
            return i === 3;
        }).style({
            fill: '#eee',
            stroke: '#ccc',
        }).transition().duration(750).style({
            fill: 'lightgreen',
            stroke: 'green',
        });
    });
}

function ex8() {
    var svg = svgid('#chart-8');

    var g = svg.selectAll('g').data(data).enter().append('g').attr({
        transform: function (d) {
            return 'translate(' + x(d) + ',' + y(d) + ')';
        },
    });

    circleG(g);

    g.append('text').attr({
        dy: '.35em',
        'text-anchor': 'middle',
    }).text(String);

    g = svg.selectAll('.data').data(dataEnter).enter().append('g').attr({
        class: 'data',
        transform: function (d, i) {
            return 'translate(' + 20 * (i + 1) + ',20)';
        },
    }).filter(function (d, i) {
        return i === 3;
    });

    g.append('circle').attr({
        class: 'little',
        r: 1e-6,
    });

    g.append('rect').attr({
        x: - 10,
        y: - 10,
        width: 20,
        height: 20,
    }).style({
        fill: 'lightgreen',
        stroke: 'green',
    });

    anchorG(g);

    d3.select('#chart-8 button').on('click', function () {
        g.attr({
            transform: 'translate(80,20)',
        });
        g.select('circle').attr('r', 1e-6);
        g.select('rect').style({
            opacity: 1,
        });
        var t = g.transition().duration(750);
        t.attr({
            transform: 'translate(160,100)',
        });
        t.select('circle').attr('r', Math.sqrt);
        t.select('rect').style({
            opacity: 1e-6,
        });
    });
}

function ex9() {
    var svg = svgid('#chart-9');

    var g = svg.selectAll('.data').data(dataEnter).enter().append('g').attr({
        class: 'data',
        transform: function (d, i) {
            return 'translate(' + 20 * (i + 1) + ',20)';
        },
    });

    g.append('circle').attr({
        class: 'little',
        r: 1e-6,
    });

    g.append('rect').attr({
        x: - 10,
        y: - 10,
        width: 20,
        height: 20,
    }).style({
        fill: 'lightgreen',
        stroke: 'green',
    });

    anchorG(g);

    d3.select('#chart-9 button').on('click', function () {
        g.attr({
            transform: function (d, i) {
                return 'translate(' + 20 * (i + 1) + ',20)';
            },
        });
        g.select('rect').style({
            opacity: 1,
        });
        g.select('circle').attr('r', 1e-6);

        var t = g.transition().duration(750);
        t.attr({
            transform: function (d, i) {
                return 'translate(' + d + ',90)';
            },
        });
        t.select('circle').attr('r', Math.sqrt);
        t.select('rect').style({
            opacity: 1e-6,
        });
    });
}

function ex10() {
    var svg = svgid('#chart-10');

    var g = svg.selectAll('.data').data(dataEnter).enter().append('g').attr({
        class: 'data',
        transform: function (d, i) {
            return 'translate(' + 20 * (i + 1) + ',20)';
        },
    });

    g.append('circle').attr({
        class: 'little',
        r: 1e-6,
    });

    g.append('rect').attr({
        x: - 10,
        y: - 10,
        width: 20,
        height: 20,
    }).style({
        fill: 'lightgreen',
        stroke: 'green',
    });

    anchorG(g);

    d3.select('#chart-10 button').on('click', function () {
        g.attr({
            transform: function (d, i) {
                return 'translate(' + 20 * (i + 1) + ',20)';
            },
        });
        g.select('rect').style({
            opacity: 1,
        });
        g.select('circle').attr('r', 1e-6);
        var t = g.transition().duration(750);
        t.attr({
            transform: function (d, i) {
                return 'translate(' + d + ',90)';
            },
        });
        t.select('circle').attr('r', Math.sqrt);
        t.select('rect').style({
            opacity: 1e-6,
        });
    });
}

function ex11() {
    var svg = svgid('#chart-11');

    var circle = svg.selectAll('.little').data(data).enter().append('circle').attr({
        class: 'little',
        cx: x,
        cy: y,
        r: 12,
    }).filter(function (d, i) {
        return i === 2;
    });

    var g = svg.selectAll('.data').data(dataExit).enter().append('g').attr({
        class: 'data',
        transform: function (d, i) {
            return 'translate(' + 20 * (i + 1) + ',20)';
        },
    });

    appendG(g);
    anchorG(g);

    d3.select('#chart-11 button').on('click', function () {
        g.attr({
            transform: function (d, i) {
                return 'translate(' + 20 * (i + 1) + ',20)';
            },
        }).select('rect').style({
            opacity: 1,
        });

        g.transition().duration(750).attr({
            transform: function (d) {
                return 'translate(' + x(d) + ',' + y(d) + ')';
            },
        }).select('rect').style({
            opacity: 1e-6,
        });

        circle.style({
            fill: '#aaa',
            stroke: '#666',
        }).transition().duration(750).style({
            fill: 'lightcoral',
            stroke: 'red',
        });
    });
}

function ex12() {
    var svg = svgid('#chart-12');

    var g = svg.selectAll('.data').data(data).enter().append('g').attr({
        class: 'data',
        transform: function (d) {
            return 'translate(' + x(d) + ',' + y(d) + ')';
        },
    });

    circleG(g);
    anchorG(g);

    g = g.filter(function (d, i) {
        return i === 2;
    });

    g.select('circle').style({
        fill: 'lightcoral',
        stroke: 'red',
    });

    d3.select('#chart-12 button').on('click', function () {
        g.select('circle').attr({
            r: 12,
        });
        g.select('text').style({
            opacity: 1,
        });
        var t = g.transition().duration(750);
        t.select('circle').attr({
            r: 1e-6,
        });
        t.select('text').style({
            opacity: 1e-6,
        });
    });
}

function ex13() {
    var svg, gd, ed, ge, xe;

    svg = svgid('#chart-13');

    gd = svg.selectAll('.data').data([32, 57, 293]).enter().append('g').attr({
        class: 'data',
        transform: function (d, i) {
            return 'translate(' + 20 * (i + 1) + ',20)';
        },
    });

    ed = gd.filter(function (d, i) {
        return i === 2;
    });

    ed.append('circle').attr({
        class: 'little',
        r: 1e-6,
    });

    gd.append('rect').attr({
        x: - 10,
        y: - 10,
        width: 20,
        height: 20,
    });

    gd.append('text').attr({
        dy: '.35em',
        'text-anchor': 'middle',
    }).text(String);

    ge = svg.selectAll('.element').data(data).enter().append('g').attr({
        class: 'element',
        transform: function (d) {
            return 'translate(' + d + ',90)';
        },
    });

    ge.append('circle').attr({
        class: 'little',
        r: Math.sqrt,
    });

    ge.append('text').attr({
        dy: '.35em',
        'text-anchor': 'middle',
    }).text(String);

    ed.select('rect').style({
        fill: 'lightgreen',
        stroke: 'green',
    });

    xe = ge.filter(function (d, i) {
        return i === 2;
    });

    xe.select('circle').style({
        fill: 'lightcoral',
        stroke: 'red',
    });

    d3.select('#chart-13 button').on('click', function () {
        gd.attr({
            transform: function (d, i) {
                return 'translate(' + 20 * (i + 1) + ',20)';
            },
        }).transition().duration(750).attr({
            transform: function (d) {
                return 'translate(' + d + ',90)';
            },
        });

        gd.select('rect').style({
            opacity: 1,
        }).transition().duration(750).style({
            opacity: 1e-6,
        });

        ed.select('circle').attr({
            r: 1e-6,
        }).transition().duration(750).attr({
            r: Math.sqrt,
        });

        xe.select('circle').attr({
            r: Math.sqrt,
        }).transition().duration(750).attr({
            r: 1e-6,
        });

        xe.select('text').style({
            opacity: 1,
        }).transition().duration(750).style({
            opacity: 1e-6,
        });

    });
}
