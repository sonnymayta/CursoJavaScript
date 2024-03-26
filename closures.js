// En javascript todo es un objeto
// Podemos guardar una function en un variable e invocarla como function
const saludar = function(nombre) {
  return "Hola " + nombre;
}

console.log(saludar('Carla'));
console.log(saludar);

// Una function puede estar dentro de una function
const a = "Hey!";

function global() {
  const b = "¿Qué ";

  function local() {
    const c = "tal?";
    return a + b + c;
  }

  return local;
}

console.log(global());
console.log(global()());

// function anidadas
const closure = global();
console.log(closure());

// Un closure es una function que encapsula una seria de variables y definiciones locales que 
// unicamente seran accesibles si son devueltas con el operador return.

// Closure
const miContador = (function() {
  let _contador = 0;

  function incrementar() {
    return _contador ++;
  }
  function decrementar() {
    return _contador --;
  }
  function valor () {
    return _contador;
  }

  return {
    incrementar,
    decrementar,
    valor
  }
})();

console.log(miContador.valor());
console.log(miContador.incrementar());
console.log(miContador.incrementar());
console.log(miContador.decrementar());