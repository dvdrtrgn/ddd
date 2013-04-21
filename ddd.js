var test1;

(function (inits) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split(''),
        width = 960,
        height = 200,
        svg;

    function update(data) {
        var text;

        text = svg.selectAll('text') //     DATA JOIN new data with old elements, if any.
        .data(data); //
        text.attr('class', 'update'); //    UPDATE old elements as needed.
        text.enter().append('text') //      ENTER Create new elements as needed.
        .attr('class', 'enter').attr('x', function (d, i) {
            return i * 32;
        }).attr('dy', '.35em');

        text.text(function (d) { //         ENTER + UPDATE
            return d;
        });

        text.exit().remove(); //            EXIT Remove old elements as needed.
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

    test1 = function init() {
        svg = d3.select('body').append('svg') //
        .attr('width', width).attr('height', height) //
        .append('g').attr('transform', 'translate(32,' + (height / 2) + ')');

        // The initial display.
        update(alphabet);
        // Grab a random sample of letters from the alphabet, in alphabetical order.
        setInterval(function () {
            update(shuffle(alphabet).slice(0, random(26)).sort());
        }, 1500);
    }
    shuf = shuffle;
}());
