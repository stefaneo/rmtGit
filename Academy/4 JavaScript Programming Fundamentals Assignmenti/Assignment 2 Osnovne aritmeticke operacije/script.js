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
    location.reload();
  } else {
    alert("Rezultat je: " + result);
  }
}

checkResult();
