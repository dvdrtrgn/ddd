var test;

(function () {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split(''),
        width = 960,
        height = 200,
        delay = 6666,
        svg1, svg2, svg3, text;

    svg1 = makeSvg();
    svg2 = makeSvg();
    svg3 = makeSvg();

    function makeSvg() {
        return d3.select('body').append('svg') //
        .attr({
            width: width,
            height: height,
        }).append('g').attr({
            transform: 'translate(32,' + (height / 2) + ')',
        });
    }

    function random(num) {
        return Math.floor(Math.random() * num);
    }

    function shuffle(arr) {
        var m = arr.length,
            t1, t2, i;
        while (m) {
            i = random(m--);
            t1 = arr[i],
            t2 = arr[m];
            arr[m] = t1,
            arr[i] = t2;
        }
        return arr;
    }

    function update1(data) {
        // DATA JOIN new data with old elements, if any.
        text = svg1.selectAll('text').data(data);

        // UPDATE old elements as needed.
        text.attr({
            class: 'update',
        });
        // ENTER Create new elements as needed.
        text.enter().append('text').attr({
            class: 'enter',
            dy: '.35em',
            x: function (d, i) {
                return i * 32;
            },
        }).text(function (d) { // ENTER + UPDATE
            return d;
        });
        // EXIT Remove old elements as needed.
        text.exit().remove();
    }

    function update2(data) {
        // DATA JOIN new data with old elements, if any.
        text = svg2.selectAll("text").data(data, function (d) {
            return d;
        });
        // UPDATE old elements as needed.
        text.attr({
            class: "update",
        });
        // ENTER Create new elements as needed.
        text.enter().append("text").attr({
            class: "enter",
            dy: ".35em",
        }).text(function (d) {
            return d;
        });
        // ENTER + UPDATE
        text.attr("x", function (d, i) {
            return i * 32;
        });
        // EXIT Remove old elements as needed.
        text.exit().remove();
    }

    function update3(data) {
        // DATA JOIN new data with old elements, if any.
        var text = svg3.selectAll("text").data(data, function (d) {
            return d;
        });
        // UPDATE old elements as needed.
        text.attr("class", "update").transition().duration(750).attr({
            x: function (d, i) {
                return i * 32;
            },
        });
        // ENTER Create new elements as needed.
        text.enter().append("text").attr({
            class: "enter",
            dy: ".35em",
            y: - 60,
            x: function (d, i) {
                return i * 32;
            },
        }).style({
            "fill-opacity": 1e-6,
        }).text(function (d) {
            return d;
        }).transition().duration(750).attr({
            y: 0,
        }).style({
            "fill-opacity": 1,
        });
        // EXIT Remove old elements as needed.
        text.exit().attr({
            class: "exit",
        }).transition().duration(750).attr({
            y: 60,
        }).style({
            "fill-opacity": 1e-6,
        }).remove();
    }

    test = function (n) {
        var fn = eval('update' + n);
        n = 3;
        // Grab a random sample of letters from the alphabet, in alphabetical order.
        setInterval(function () {
            fn(shuffle(alphabet).slice(0, random(26)).sort());
        }, delay);
    };
    test(1);
    test(2);
    test(3);
}());
