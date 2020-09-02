// Até aqui temos JS "puro"
var minhaVar = "minha variável";
function minhaFunc(x, y) {
    return x + y;
}
//ES 6 OU ES 2015
var num = 2;
console.log('num');
// Utilizando Arrow Functions
var numeros = [1, 2, 3];
// Abaixo, exemplo de function sem programação funcional
numeros.map(function name(valor) {
    return valor * 2;
});
// Mudando o exemplo acima para Arrow Functions (Programação funcional)
numeros.map(function (valor) {
    return valor * 2;
});
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
