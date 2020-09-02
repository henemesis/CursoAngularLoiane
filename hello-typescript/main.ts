// Até aqui temos JS "puro"

var minhaVar = "minha variável"

function minhaFunc(x, y) {
    return x + y;
}

//ES 6 OU ES 2015

let num = 2;
console.log('num');

// Utilizando Arrow Functions
var numeros = [1, 2, 3];

// Abaixo, exemplo de function sem programação funcional
numeros.map(function name(valor) {
    return valor * 2;
});

// Mudando o exemplo acima para Arrow Functions (Programação funcional)
numeros.map(valor => {
    return valor * 2;
});

class Matematica {
    soma(x, y) {
      return x + y;
    }
}