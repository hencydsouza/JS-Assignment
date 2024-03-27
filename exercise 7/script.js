var a = 12;
(function () {
    console.log(a);
})();
// output 12

a = 5;
(function () {
    var a = 12;
    console.log(a)
})();
// output 12

a = 10;
var x = (function () {
    var a = 12;
    return (function () {
        console.log(a);
    })
})();
x();
// output 12

a = 10;
x = (function () {
    var y = function () {
        var a = 12;
    }

    return function () {
        console.log(a)
    }
})();
x();
// output 10

a = 10;
var x = (function () {
    (function () {
        a = 12;
    })();
    return (function () {
        console.log(a)
    })
})();
x();
// output 12

a = 10;
(function () {
    var a = 15;
    window.x = function () {
        console.log(a)
    }
})();
x();
// output 15