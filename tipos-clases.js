const libro = {
  titulo: "Libro",
  autor: "Ronald",
  paginas: 100,
  editorial: "Mi libro",
  precio: "25",
  leer: function() {
    console.log("He leido un libro");
  }
}

console.log(libro.titulo);
console.log(libro["autor"]);
libro.leer();

// Otras formas
let revista = new Object({
  titulo: "Semanal",
  autor: "Renata"
});

console.log(revista.autor);

let info = {
  titulo: "Mi titulo",
  autor: {
    nombre: "Carla",
    edad: 36,
    redes: {
      twitter: "twitter.com/Carla",
      facebook: "facebook.com/Carla"
    }
  }
}

console.log(info.autor.nombre);
console.log(info['autor']['redes']['facebook']);

// Comprobación de objetos
const coche1 = {marca: "Tesla", modelo: "X"};
const coche2 = {marca: "Tesla", modelo: "X"};
console.log(coche1 === coche2);
console.log(coche1.marca === coche2.marca);
const coche3 = coche1;
console.log(coche3 === coche1);

// Clase number
console.log(0x1F); // valores hexadecimales
console.log(1/0); // resultado infinito
console.log(-1e10000);
console.log("a" / 15) // resultado NaN

console.log(parseInt("15")); // Convertir texto a numero
console.log(parseInt("1111", 2)); // usando binarios
console.log(parseInt("1111", 16)); // usando hexadecimal
console.log(parseFloat("5e3")); // Para numeros en coma flotante

// Redondear
let n = 2.5678;
console.log(n.toFixed(2));
console.log(parseFloat(n.toFixed(2)));

// Exponenciar
console.log(n.toExponential(2));

// Pasar un numero a string
let valor = 1111;
console.log(valor.toString()); // En base decimal
console.log(valor.toString(2)); // En base binario
console.log(valor.toString(16)); // En base hexadecimal

// Clase math
console.log(Math.PI);
console.log(Math.E);
console.log(Math.random());
console.log(Math.pow(2, 6));
console.log(Math.min(2, 4, 6));
console.log(Math.max(4, 6, 2));

// Tipos de arreglos
let array = [];
let arrayObjetos = [
  { propiedad: "valor" },
  { propiedad: "valor" },
  { propiedad: "valor" }
]
let matriz = [
  [2, 4],
  [3, 6],
]
console.log(matriz[0][0]);

// Funciones pertenecientes a los arrays
let arrayTodo = [
  1,
  true,
  [3, 2],
  "hola",
  { clave: "valor"}
];
console.log(arrayTodo.length);

let arrayPrueba = [3, 5, 6, 2];
console.log(arrayPrueba);
arrayPrueba.sort(); // Ordenar
console.log(arrayPrueba);
arrayPrueba.pop(); // Eliminar ultimo elemento
console.log(arrayPrueba);
arrayPrueba.push(2); // Agregar un elemento al final
console.log(arrayPrueba);
arrayPrueba.reverse(); // Dar la vuelta el array
console.log(arrayPrueba);

// función map que nos permite aplicar una función a cada elemento del array
let arrayRaices = [2, 4, 5, 6];
let raices = arrayRaices.map((function(item) {
  return Math.sqrt(item);
}));
console.log(raices);

// función filter
let arrayMultiplos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let multiplos = arrayMultiplos.filter(item => item % 3 === 0);
console.log(multiplos);

// función slice (inmutable)
let arrayPartir = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arrayPartir.slice(3));
console.log(arrayPartir);
console.log(arrayPartir.slice(2, 4));

// clase string
let miTexto = "Hola";
console.log("JavaScript"[2]); // Caracter en la posición 2
console.log("JavaScript".length); // Tamaño del string
console.log("JavaScript".charCodeAt(2)); // Devuelve el valor unicode
console.log("JavaScript".indexOf("Script")); // En que posición se encuentra el texto enviado por parametros (resultado -1 si no existe)
console.log("JavaScript".substring(2, 4)); // Caracteres que se encuentran en el siguiente rango

// revisar split en string