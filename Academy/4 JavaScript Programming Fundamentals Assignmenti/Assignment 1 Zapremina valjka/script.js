let numberA = prompt("Unesite poluprečnik valjka (r)");
let numberB = prompt("Unesite visinu valjka (H)");

function zapreminaValjka(a, b) {
  return parseInt(a ** 2) * parseInt(b) * 3.14;
}

let result = zapreminaValjka(numberA, numberB);

alert("Zapremina je: " + result);
