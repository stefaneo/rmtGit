var aNotPars = prompt("Unesite prvi broj:");
var b = prompt("Unesite jednu od operacija: + - * /");
var cNotPars = prompt("Unesite drugi broj:");

var a = parseInt(aNotPars);
var c = parseInt(cNotPars);

function decide() {
  if (b == "+") {
    var z = a + c;
  } else if (b == "-") {
    var z = a - c;
  } else if (b == "*") {
    var z = a * c;
  } else if (b == "/") {
    var z = a / c;
  } else {
    alert("Unesite dva broja i jednu od operacija: + - * /");
  }
  return z;
}

var result = decide();

function checkResult() {
  if (result == undefined) {
    alert("Ponovo unesite parametre.");
  } else {
    alert("Rezultat je: " + result);
  }
}

checkResult();

/* var a = prompt("Unesite prvi broj");
var b = prompt("Unesite operaciju");
var c = prompt("Unesite drugi broj");

var a1 = parseInt(a);
var c1 = parseInt(c);

if (b == "+") {
  alert("Rezultat je: " + (c1 + a1));
} else if (b == "-") {
  alert("Rezultat je: " + (a1 - c1));
} else if (b == "*") {
  alert("Rezultat je: " + a1 * c1);
} else if (b == "/") {
  alert("Rezultat je: " + a1 / c1);
} else {
  alert("Unesite jednu od operacija: + - * /");
} */
