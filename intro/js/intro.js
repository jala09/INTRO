/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var cursor = document.getElementById("cursor");
var canvas = document.getElementById("canvas");

canvas.addEventListener("mousemove", function (e) {
    cursor.style.left = e.pageX + 120 + "px";
    cursor.style.top = e.pageY + "px";

    var node = this;
    setTimeout(function () {
        node.parentNode.parentNode.style.outline = node.parentNode.parentNode.dataset.ans_outline;
    }, 1000);



    console.log("test");
});
