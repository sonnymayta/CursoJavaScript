// Funcion con argumento por defecto
function saludar(nombre = "Usuario") {
  return `Hola ${nombre}`
}
console.log(saludar("carlos"));
console.log(saludar());

// Funciones forma antigua
// function Inventario(nombre) {
//   this.nombre = nombre;
//   this.articulos = [];
// }
// Inventario.prototype.getNombre = function() {
//   return this.nombre;
// }
// Inventario.prototype.add = function(articulo, cantidad) {
//   this.articulos[articulo] = cantidad;
// }
// Inventario.prototype.cantidad = function(articulo) {
//   return this.articulos[articulo]
// }
// let libros = new Inventario("libros");
// console.log(libros.getNombre());
// libros.add("Aprendiendo JavaScript", 5);
// console.log(libros.cantidad("Aprendiendo JavaScript"));

// Funciones forma moderna
class Inventario {
  constructor(nombre) {
    this.nombre = nombre;
    this.articulos = [];
  }

  getNombre() {
    return this.nombre;
  }

  add(articulo, cantidad) {
    this.articulos[articulo] = cantidad;
  }

  getCantidad(articulo) {
    return this.articulos[articulo];
  }
}

let libros = new Inventario("libros");
console.log(libros.getNombre());
libros.add("Aprendiendo JavaScript", 5);
console.log(libros.getCantidad("Aprendiendo JavaScript"));