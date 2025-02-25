//INTERFACES

// Interfaces básicas

interface Persona {
  nombre: string;
  edad: number;
}

// Interfaces con propiedades opcionales:

interface Producto {
  nombre: string;
  precio: number;
  descripcion?: string;
}

// Interfaces para funciones:
interface Comparador {
  (a: number, b: number): boolean;
}

// Interfaces para clases (class interfaces):
interface Persona {
  nombre: string;
  edad: number;
  saludar(): void;
}
