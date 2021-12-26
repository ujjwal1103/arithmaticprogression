console.log("Arithmatic Progression");
var n = parseInt(prompt("Nth term which we have to find"));
var a = parseInt(prompt("first term of the series"));
var d = parseInt(prompt("diffrence between two terms"));

var nth_term;
nth_term = a + (n - 1)*d;

alert(nth_term);
