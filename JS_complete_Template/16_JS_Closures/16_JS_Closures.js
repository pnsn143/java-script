var a = 10;
function outer() {
    var b = 20;
    var inner = function () {
        a++;
        b++;
        console.log(a);
        console.log(b);
    };
    return inner();

}
var innerfn1 =outer();
innerfn1();

var innerfn2 = outer();
innerfn2();


// Module pattern

