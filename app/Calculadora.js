function Calculadora() {

};

Calculadora.prototype.soma = function() {
    var result = 0;
    for (var i = 0; i < arguments.length; i++)
        result += arguments[i];
    return result;
};

Calculadora.prototype.divisao = function() {

}

module.exports = Calculadora;