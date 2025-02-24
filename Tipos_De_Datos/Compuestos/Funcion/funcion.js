"use strict";
// Declaración de una función con tipado Explícito
function sumar(a, b) {
    return a + b;
}
//Funciones Flecha con retorno implícito (Inferido por TypeScript)
const dividir = (a, b) => a / b;
//Funciones con parametros opcionales
const saludar = (nombre, edad) => {
    if (edad !== undefined) {
        return `Hola, mi nombre es ${nombre} y tengo ${edad} años`;
    }
    else {
        return `Hola, mi nombre es ${nombre}`;
    }
};
//Funciones con parametros por defecto
const saludar2 = (nombre, edad = 30) => {
    return `Hola, mi nombre es ${nombre} y tengo ${edad} años`;
};
