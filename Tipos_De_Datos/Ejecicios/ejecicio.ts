/*let vañar: boolean = true;

if (vañar) {
  console.log("Tienes que descanzar");
} else {
  console.log("Primero tienes que bañarte");
}*/

let barcelona: number = 11;
let madrid: number = 10;
let messi: number = 1;
let juegaMessi: boolean = false;

function jugar(equipo1: number, equipo2: number, juegaMessi: boolean): void {
  let motivo: string = "";
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
