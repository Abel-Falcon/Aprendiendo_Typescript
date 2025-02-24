// Declaración de una función con tipado Explícito
function sumar(a: number, b: number): number {
  return a + b;
}

//Funciones Flecha con retorno implícito (Inferido por TypeScript)

const dividir = (a: number, b: number) => a / b;

//Funciones con parametros opcionales

const saludar = (nombre: string, edad?: number) => {
  if (edad !== undefined) {
    return `Hola, mi nombre es ${nombre} y tengo ${edad} años`;
  } else {
    return `Hola, mi nombre es ${nombre}`;
  }
};

//Funciones con parametros por defecto

const saludar2 = (nombre: string, edad: number = 30) => {
  return `Hola, mi nombre es ${nombre} y tengo ${edad} años`;
};
