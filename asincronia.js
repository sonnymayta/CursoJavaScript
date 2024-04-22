// const datos = [{
//   id: 1,
//   title: "Iron Man",
//   year: 2008
// }, {
//   id: 2,
//   title: "Spiderman",
//   year: 20017
// }, {
//   id: 3,
//   title: "Avengers",
//   year: 2019
// }]

const datos = [];

// const getDatos = () => {
//   return datos;
// }

// Uso de las promesas
const getDatos = () => {
  return new Promise((resolve, reject) => {
    if(datos.length === 0) {
      reject(new Error("No existen datos"))
    }
    setTimeout(() => {
      resolve(datos);
    }, 1500);
  })
}

// getDatos().then((datos) => console.log(datos));

// Utilizando una función asincrona y capturando el error en un try-catch

async function fetchingData() {
  try {
    const datosFetched = await getDatos();
    console.log(datosFetched);
  }
  catch (ex) {
    console.log(ex.message);
  }
  
}
fetchingData();

/*
  Las funciones asincronas trabajan junto con las promesas para simplificar el manejo de operaciones
  asíncronas, como realizar solicitudes a servidores, leer archivos o cualquier operación que pueda
  tardar tiempo en completarse. ESTUDIAR
*/