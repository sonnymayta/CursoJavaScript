const post = [{
  id: 1,
  title: 'Primer post',
  tags: ['JavaScript', 'Web development']
}, 
{
  id: 2,
  title: 'Mi experiencia con react',
  image: 'https://img.com',
  tags: ['JavaScript', 'Web development', 'react']
},
{
  id: 3,
  title: 'Mi experiencia con angular',
  image: 'https://img.com',
  tags: ['JavaScript', 'Web development', 'angular']
}]

// Método find nos permite encontrar un elemento
console.log(post.find(post => post.title == 'Mi experiencia con angular'));
console.log(post.find(post => post.id == 1));

// Método some nos devuleve true or false dependiendo si existe o no existe
console.log(post.some(post => post.id === 4));

// Include nos permite mirar si existe dentro de un array cierta palabra
console.log(post.some(post => post.tags.includes('react')));

// Método every nos permite verificar si en todas se cumple la condición
console.log(post.some(post => post.tags.includes('JavaScript')));

// Método map es como un bucle for de una forma más declarativa
console.log(post.map(post => post.title));

// Método filter nos permite filtrar
console.log(post.filter(post => post.tags.includes('angular')));
console.log(post.filter(post => post.image !== undefined));

// Método reduce*
console.log(post.reduce((allTags, post) => {
  return [...allTags, ...post.tags]
}, []));

console.log(post.reduce((allTags, post) => {
  return Array.from(new Set([...allTags, ...post.tags]))
}, []));

