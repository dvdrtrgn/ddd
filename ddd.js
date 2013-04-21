$(function () {
    var data;
    data = [14, 18, 25, 26, 33, 42];

    d3.select("body").style("background-color", "gray");

    d3.selectAll("p").style("color", function () {
        return "hsl(" + Math.random() * 360 + ",100%,50%)";
    });
    d3.selectAll("p").style("background-color", function (d, i) {
        return i % 2 ? "#fff" : "#ccc";
    });
    d3.selectAll("p").data(data).style("font-size", function (d) {
        return d + "px";
    });
    d3.select("body").selectAll("p").data(data).enter().append("p").text(function (d) {
        return "I’m number " + d + "!";
    });
    data = ['099', '99', '9'];
    d3.select("body").selectAll("p").data(data).text(function (d) {
        return "I’m number " + d + "!";
    });
    d3.select("body").transition().duration(1750).style("background-color", "red");

    d3.selectAll("p").transition().duration(750).delay(function (d, i) {
        return i * 1000;
    }).style("font-size", function (d) {
        var t = d / 2 +'px';
        console.log(t);
        return t;
    });

});
