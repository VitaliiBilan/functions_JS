function min(a, b) {
    return a > b ? a : b;
}
var res = min(1, 2);

document.write(res + "<br>");

var res = min(23, 3);

document.write(res + "<br>");

function pow(x, n) {
    return n != 1 ? x * pow(x, n - 1) : x;
}

alert( pow(2, 2) );
alert( pow(2, 5) );