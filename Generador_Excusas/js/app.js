var cul = [
  "Mi perro", "El caballo Horse Luis", "El niño de la esquina",
  "Mi gato", "Poseidón", "Mi Hermano", "La vecina", "El vecino", "Mi tio Paco",
  "Mi primito Julio", "El compañero de al lado", "La amiga de mi primo",
  "El portero", "El granjero"
];

var acc = [
  "se ha comido", "ha volado por los aires", "ha incendiado", "ha vomitado",
  "ha estropeado", "le ha pegado un cañonazo a",
  "le ha dado a una paloma mensajera del lejano oeste", "ha enviado al Polo Norte",
  "ha cambiado", "ha escupido", "ha perdido"
];

var res = [
  "mi disco duro", "el ordenador", "mis apuntes",
  "los deberes", "la documentación", "a mi pez", "mi mochila", "a mi primo Pedro",
  "mi casa", "mi monitor", "el programa", "a mi canario", "mi habitación", "la PS5", 
  "la lampara", "mi calculadora", "mi libreta", "mi estuche"
];

var btnGen = document.getElementById("gen");
var msgCul = document.getElementById("cul");
var msgAcc = document.getElementById("acc");
var msgRes = document.getElementById("res");

function random(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}

var generarCul = function () {
  return cul[random(0, cul.length - 1)];
};

var generarAcc = function () {
  return acc[random(0, acc.length - 1)];
};

var generarRes = function () {
  return res[random(0, res.length - 1)];
};

document.addEventListener("DOMContentLoaded", () => {
  btnGen.addEventListener("click", () => {
    msgCul.innerText = generarCul();
    msgAcc.innerText = generarAcc();
    msgRes.innerText = generarRes();

  });

});
