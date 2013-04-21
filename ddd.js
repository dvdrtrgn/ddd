var data = [32, 57, 112],
    dataEnter = data.concat(293),
    dataExit = data.slice(0, 2),
    w = 360,
    h = 180,
    x = d3.scale.ordinal().domain([57, 32, 112]).rangePoints([0, w], 1),
    y = d3.scale.ordinal().domain(data).rangePoints([0, h], 2);

function ex1() { //
    var svg = d3.select("#chart-2").append("svg") //
    .attr("width", w) //
    .attr("height", h);

    svg.selectAll(".little") //
    .data(data) //
    .enter().append("circle") //
    .attr("class", "little") //
    .attr("cx", x) //
    .attr("cy", y) //
    .attr("r", 12);

    d3.select("#chart-2 button").on("click", function () { //
        svg.selectAll(".select").remove();

        svg.selectAll(".select") //
        .data(data) //
        .enter().append("circle") //
        .attr("class", "select") //
        .attr("cx", x) //
        .attr("cy", y) //
        .attr("r", 60) //
        .style("fill", "none") //
        .style("stroke", "red") //
        .style("stroke-opacity", 1e-6) //
        .style("stroke-width", 3) //
        .transition() //
        .duration(750) //
        .attr("r", 12) //
        .style("stroke-opacity", 1);

    });

}

function ex2() { //
    var svg = d3.select("#chart-3").append("svg") //
    .attr("width", w) //
    .attr("height", h);

    var circle = svg.selectAll(".little") //
    .data(data) //
    .enter().append("circle") //
    .attr("class", "little") //
    .attr("cx", x) //
    .attr("cy", y) //
    .attr("r", 12);

    d3.select("#chart-3 button").on("click", function () { //
        circle.style("fill", "#aaa").attr("r", 12).attr("cy", y);
        circle.transition().duration(500).delay(0).style("fill", "steelblue");
        circle.transition().duration(500).delay(500).attr("cy", 90);
        circle.transition().duration(500).delay(1000).attr("r", 30);

    });

}

function ex3() { //
    var svg = d3.select("#chart-4").append("svg") //
    .attr("width", w) //
    .attr("height", h);

    var circle = svg.selectAll(".little") //
    .data(data) //
    .enter().append("circle") //
    .attr("class", "little") //
    .attr("cx", x) //
    .attr("cy", y) //
    .attr("r", 12);

    d3.select("#chart-4 button").on("click", function () { //
        circle.transition() //
        .duration(750) //
        .attr("cx", function () {
            return Math.random() * w;
        });

    });

} //

function ex4() { //
    var svg = d3.select("#chart-5").append("svg") //
    .attr("width", w) //
    .attr("height", h);

    svg.selectAll(".little") //
    .data(data) //
    .enter().append("circle") //
    .attr("class", "little") //
    .attr("cx", x) //
    .attr("cy", y) //
    .attr("r", 12);

    var g = svg.selectAll(".data") //
    .data(data) //
    .enter().append("g") //
    .attr("class", "data") //
    .attr("transform", function (d, i) {
        return "translate(" + 20 * (i + 1) + ",20)";
    });

    g.append("rect") //
    .attr("x", - 10) //
    .attr("y", - 10) //
    .attr("width", 20) //
    .attr("height", 20);

    g.append("text") //
    .attr("dy", ".35em") //
    .attr("text-anchor", "middle") //
    .text(String);

    d3.select("#chart-5 button").on("click", function () { //
        g //
        .attr("transform", function (d, i) {
            return "translate(" + 20 * (i + 1) + ",20)";
        }) //
        .select("rect") //
        .style("opacity", 1);

        g.transition() //
        .duration(750) //
        .attr("transform", function (d) {
            return "translate(" + x(d) + "," + y(d) + ")";
        }) //
        .select("rect") //
        .style("opacity", 1e-6);

    });

}

function ex5() { //
    var svg = d3.select("#chart-6").append("svg") //
    .attr("width", w) //
    .attr("height", h);

    var g = svg.selectAll("g") //
    .data(data) //
    .enter().append("g") //
    .attr("transform", function (d) {
        return "translate(" + x(d) + "," + y(d) + ")";
    });

    g.append("circle") //
    .attr("class", "little") //
    .attr("r", 12);

    g.append("text") //
    .attr("dy", ".35em") //
    .attr("text-anchor", "middle") //
    .text(String);

    d3.select("#chart-6 button").on("click", function () { //
        g //
        .attr("transform", function (d) {
            return "translate(" + x(d) + "," + y(d) + ")";
        }) //
        .select("circle") //
        .attr("r", 12);

        g.transition() //
        .duration(750) //
        .attr("transform", function (d) {
            return "translate(" + d + "," + y(d) + ")";
        }) //
        .select("circle") //
        .attr("r", Math.sqrt);

    });

} //

function ex6() { //
    var svg = d3.select("#chart-6b").append("svg") //
    .attr("width", w) //
    .attr("height", h);

    var g = svg.selectAll("g") //
    .data(data) //
    .enter().append("g") //
    .attr("transform", function (d) {
        return "translate(" + x(d) + "," + y(d) + ")";
    });

    g.append("circle") //
    .attr("class", "little") //
    .attr("r", 12);

    g.append("text") //
    .attr("dy", ".35em") //
    .attr("text-anchor", "middle") //
    .text(function (d, i) {
        return i;
    });

    d3.select("#chart-6b button").on("click", function () { //
        g //
        .attr("transform", function (d) {
            return "translate(" + x(d) + "," + y(d) + ")";
        }) //
        .transition() //
        .duration(750) //
        .attr("transform", function (d, i) {
            return "translate(" + (i * 100 + 30) + "," + y(d) + ")";
        });

    });

}

function ex7() { //
    var svg = d3.select("#chart-7").append("svg") //
    .attr("width", w) //
    .attr("height", h);

    svg.selectAll(".little") //
    .data(data) //
    .enter().append("circle") //
    .attr("class", "little") //
    .attr("cx", x) //
    .attr("cy", y) //
    .attr("r", 12);

    var g = svg.selectAll(".data") //
    .data(dataEnter) //
    .enter().append("g") //
    .attr("class", "data") //
    .attr("transform", function (d, i) {
        return "translate(" + 20 * (i + 1) + ",20)";
    });

    g.append("rect") //
    .attr("x", - 10) //
    .attr("y", - 10) //
    .attr("width", 20) //
    .attr("height", 20);

    g.append("text") //
    .attr("dy", ".35em") //
    .attr("text-anchor", "middle") //
    .text(String);

    d3.select("#chart-7 button").on("click", function () { //
        g //
        .attr("transform", function (d, i) {
            return "translate(" + 20 * (i + 1) + ",20)";
        }) //
        .select("rect") //
        .style("opacity", 1);

        g.filter(function (d, i) {
            return i != 3;
        }).transition() //
        .duration(750) //
        .attr("transform", function (d) {
            return "translate(" + x(d) + "," + y(d) + ")";
        }) //
        .select("rect") //
        .style("opacity", 1e-6);

        g.select("rect").filter(function (d, i) {
            return i == 3;
        }) //
        .style("fill", "#eee") //
        .style("stroke", "#ccc") //
        .transition() //
        .duration(750) //
        .style("fill", "lightgreen") //
        .style("stroke", "green");

    });

} //

function ex8() { //
    var svg = d3.select("#chart-8").append("svg") //
    .attr("width", w) //
    .attr("height", h);

    var g = svg.selectAll("g") //
    .data(data) //
    .enter().append("g") //
    .attr("transform", function (d) {
        return "translate(" + x(d) + "," + y(d) + ")";
    });

    g.append("circle") //
    .attr("class", "little") //
    .attr("r", 12);

    g.append("text") //
    .attr("dy", ".35em") //
    .attr("text-anchor", "middle") //
    .text(String);

    var g = svg.selectAll(".data") //
    .data(dataEnter) //
    .enter().append("g") //
    .attr("class", "data") //
    .attr("transform", function (d, i) {
        return "translate(" + 20 * (i + 1) + ",20)";
    }) //
    .filter(function (d, i) {
        return i == 3;
    });

    g.append("circle") //
    .attr("class", "little") //
    .attr("r", 1e-6);

    g.append("rect") //
    .attr("x", - 10) //
    .attr("y", - 10) //
    .attr("width", 20) //
    .attr("height", 20) //
    .style("fill", "lightgreen") //
    .style("stroke", "green");

    g.append("text") //
    .attr("dy", ".35em") //
    .attr("text-anchor", "middle") //
    .text(String);

    d3.select("#chart-8 button").on("click", function () { //
        g.attr("transform", "translate(80,20)");

        g.select("circle").attr("r", 1e-6);

        g.select("rect").style("opacity", 1);

        var t = g.transition().duration(750);

        t.attr("transform", "translate(160,100)");

        t.select("circle").attr("r", Math.sqrt);

        t.select("rect").style("opacity", 1e-6);

    });

}

function ex9() { //
    var svg = d3.select("#chart-9").append("svg") //
    .attr("width", w) //
    .attr("height", h);

    var g = svg.selectAll(".data") //
    .data(dataEnter) //
    .enter().append("g") //
    .attr("class", "data") //
    .attr("transform", function (d, i) {
        return "translate(" + 20 * (i + 1) + ",20)";
    });

    g.append("circle") //
    .attr("class", "little") //
    .attr("r", 1e-6);

    g.append("rect") //
    .attr("x", - 10) //
    .attr("y", - 10) //
    .attr("width", 20) //
    .attr("height", 20) //
    .style("fill", "lightgreen") //
    .style("stroke", "green");

    g.append("text") //
    .attr("dy", ".35em") //
    .attr("text-anchor", "middle") //
    .text(String);

    d3.select("#chart-9 button").on("click", function () { //
        g.attr("transform", function (d, i) {
            return "translate(" + 20 * (i + 1) + ",20)";
        });

        g.select("rect").style("opacity", 1);

        g.select("circle").attr("r", 1e-6);

        var t = g.transition().duration(750);

        t.attr("transform", function (d, i) {
            return "translate(" + d + ",90)";
        });

        t.select("circle").attr("r", Math.sqrt);

        t.select("rect").style("opacity", 1e-6);

    });

} //

function ex10() { //
    var svg = d3.select("#chart-10").append("svg") //
    .attr("width", w) //
    .attr("height", h);

    var g = svg.selectAll(".data") //
    .data(dataEnter) //
    .enter().append("g") //
    .attr("class", "data") //
    .attr("transform", function (d, i) {
        return "translate(" + 20 * (i + 1) + ",20)";
    });

    g.append("circle") //
    .attr("class", "little") //
    .attr("r", 1e-6);

    g.append("rect") //
    .attr("x", - 10) //
    .attr("y", - 10) //
    .attr("width", 20) //
    .attr("height", 20) //
    .style("fill", "lightgreen") //
    .style("stroke", "green");

    g.append("text") //
    .attr("dy", ".35em") //
    .attr("text-anchor", "middle") //
    .text(String);

    d3.select("#chart-10 button").on("click", function () { //
        g.attr("transform", function (d, i) {
            return "translate(" + 20 * (i + 1) + ",20)";
        });

        g.select("rect").style("opacity", 1);

        g.select("circle").attr("r", 1e-6);

        var t = g.transition().duration(750);

        t.attr("transform", function (d, i) {
            return "translate(" + d + ",90)";
        });

        t.select("circle").attr("r", Math.sqrt);

        t.select("rect").style("opacity", 1e-6);

    });

} //

function ex11() { //
    var svg = d3.select("#chart-11").append("svg") //
    .attr("width", w) //
    .attr("height", h);

    var circle = svg.selectAll(".little") //
    .data(data) //
    .enter().append("circle") //
    .attr("class", "little") //
    .attr("cx", x) //
    .attr("cy", y) //
    .attr("r", 12) //
    .filter(function (d, i) {
        return i == 2;
    });

    var g = svg.selectAll(".data") //
    .data(dataExit) //
    .enter().append("g") //
    .attr("class", "data") //
    .attr("transform", function (d, i) {
        return "translate(" + 20 * (i + 1) + ",20)";
    });

    g.append("rect") //
    .attr("x", - 10) //
    .attr("y", - 10) //
    .attr("width", 20) //
    .attr("height", 20);

    g.append("text") //
    .attr("dy", ".35em") //
    .attr("text-anchor", "middle") //
    .text(String);

    d3.select("#chart-11 button").on("click", function () { //
        g //
        .attr("transform", function (d, i) {
            return "translate(" + 20 * (i + 1) + ",20)";
        }) //
        .select("rect") //
        .style("opacity", 1);

        g.transition() //
        .duration(750) //
        .attr("transform", function (d) {
            return "translate(" + x(d) + "," + y(d) + ")";
        }) //
        .select("rect") //
        .style("opacity", 1e-6);

        circle //
        .style("fill", "#aaa") //
        .style("stroke", "#666") //
        .transition() //
        .duration(750) //
        .style("fill", "lightcoral") //
        .style("stroke", "red");

    });

} //

function ex12() { //
    var svg = d3.select("#chart-12").append("svg") //
    .attr("width", w) //
    .attr("height", h);

    var g = svg.selectAll(".data") //
    .data(data) //
    .enter().append("g") //
    .attr("class", "data") //
    .attr("transform", function (d) {
        return "translate(" + x(d) + "," + y(d) + ")";
    });

    g.append("circle") //
    .attr("class", "little") //
    .attr("r", 12);

    g.append("text") //
    .attr("dy", ".35em") //
    .attr("text-anchor", "middle") //
    .text(String);

    g = g.filter(function (d, i) {
        return i == 2;
    });

    g.select("circle") //
    .style("fill", "lightcoral") //
    .style("stroke", "red");

    d3.select("#chart-12 button").on("click", function () { //
        g.select("circle").attr("r", 12);

        g.select("text").style("opacity", 1);

        var t = g.transition().duration(750);

        t.select("circle").attr("r", 1e-6);

        t.select("text").style("opacity", 1e-6);

    });

} //

function ex13() { //
    var svg = d3.select("#chart-13").append("svg") //
    .attr("width", w) //
    .attr("height", h);

    var gd = svg.selectAll(".data") //
    .data([32, 57, 293]) //
    .enter().append("g") //
    .attr("class", "data") //
    .attr("transform", function (d, i) {
        return "translate(" + 20 * (i + 1) + ",20)";
    });

    var ed = gd.filter(function (d, i) {
        return i == 2;
    }),

    ud = gd.filter(function (d, i) {
        return i != 2;
    });

    ed.append("circle") //
    .attr("class", "little") //
    .attr("r", 1e-6);

    gd.append("rect") //
    .attr("x", - 10) //
    .attr("y", - 10) //
    .attr("width", 20) //
    .attr("height", 20);

    gd.append("text") //
    .attr("dy", ".35em") //
    .attr("text-anchor", "middle") //
    .text(String);

    var ge = svg.selectAll(".element") //
    .data(data) //
    .enter().append("g") //
    .attr("class", "element") //
    .attr("transform", function (d) {
        return "translate(" + d + ",90)";
    });

    ge.append("circle") //
    .attr("class", "little") //
    .attr("r", Math.sqrt);

    ge.append("text") //
    .attr("dy", ".35em") //
    .attr("text-anchor", "middle") //
    .text(String);

    ed.select("rect") //
    .style("fill", "lightgreen") //
    .style("stroke", "green");

    var xe = ge.filter(function (d, i) {
        return i == 2;
    });

    xe.select("circle") //
    .style("fill", "lightcoral") //
    .style("stroke", "red");

    d3.select("#chart-13 button").on("click", function () { //
        gd //
        .attr("transform", function (d, i) {
            return "translate(" + 20 * (i + 1) + ",20)";
        }) //
        .transition() //
        .duration(750) //
        .attr("transform", function (d) {
            return "translate(" + d + ",90)";
        });

        gd.select("rect") //
        .style("opacity", 1) //
        .transition() //
        .duration(750) //
        .style("opacity", 1e-6);

        ed.select("circle") //
        .attr("r", 1e-6) //
        .transition() //
        .duration(750) //
        .attr("r", Math.sqrt);

        xe.select("circle") //
        .attr("r", Math.sqrt) //
        .transition() //
        .duration(750) //
        .attr("r", 1e-6);

        xe.select("text") //
        .style("opacity", 1) //
        .transition() //
        .duration(750) //
        .style("opacity", 1e-6);

    });

}
