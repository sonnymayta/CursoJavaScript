// usando sintaxis antigua
// El objeto this hacer referencia al contexto de la function
var obj = {
  foo: function() { return 'foo'},
  bar: function() {
    document.addEventListener('click', event => this.foo())
  }
}