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