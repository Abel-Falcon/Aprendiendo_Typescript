"use strict";
/*let vañar: boolean = true;

if (vañar) {
  console.log("Tienes que descanzar");
} else {
  console.log("Primero tienes que bañarte");
}*/
let barcelona = 11;
let madrid = 10;
let messi = 1;
let juegaMessi = false;
function jugar(equipo1, equipo2, juegaMessi) {
    let motivo = "";
    if (juegaMessi) {
        equipo1 += messi;
        motivo = "Porque juega messi";
    }
    if (equipo1 > equipo2) {
        console.log("Gano el Barcelona", motivo);
    }
    if (equipo1 === equipo2) {
        console.log("Empate");
    }
    if (equipo1 < equipo2) {
        console.log("Gano el Madrid");
    }
}
jugar(barcelona, madrid, juegaMessi);
