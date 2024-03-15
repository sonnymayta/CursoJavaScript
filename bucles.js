function bucleWhile(numero) {
  // Sintaxis del bucle while
  let i = 0;
  while(i < numero) {
    console.log(i);
    i++;
  }
}
bucleWhile(11);

function bucleDoWhile(numero) {
  // Sintaxis del bucle do while
  let i = 0;
  do {
    console.log(i);
    i++;
  } while (i < numero);
}
bucleDoWhile(0);

function bucleFor(numero) {
  // Sintaxis del bucle for
   for(let i=0; i<numero; i++) {
    console.log(i);
   }
}
bucleFor(11);

// Metodos que tiene un array para ser recorrido
const miArray = [1, 2, 3, 4];
miArray.forEach(function(item, index) {
  console.log("El valor de la posición " + index + " es: " + item);
})

const libro = {
  titulo: "Libro",
  autor: "Ronald",
  paginas: 100,
  editorial: "Mi libro",
  precio: "25"
}

const props = Object.getOwnPropertyNames(libro);
props.forEach(name => {
  let valor = Object.getOwnPropertyDescriptor(libro, name).value;
  console.log(`La propiedad ${name} contiene: ${valor}`)
})

// Forma más modernas de recorrer un array de tipo objeto
for (let prop in libro) {
  console.log(`La propiedad ${prop} contiene: ${libro[prop]}`);
}