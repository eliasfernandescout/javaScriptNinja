//boolean -> retorna TRUE or FALSE
// undefined -> Variável não existe
// Null -> Ausência de Valor
// objetct {} -> É o mais importante em JavaScript
//Array []

//EX......|

var pessoa = {
  altura: 1.87,
  peso: 90,
};

console.log(pessoa); //IMPRIME TODAS AS PROPRIEDADES DO OBJETO
console.log(pessoa.peso); //IMPRIME SOMENTE O PESO
console.log("----------------------------");
pessoa.altura = 1.91;

console.log(pessoa);
console.log(pessoa.altura);

var numeros = [1, 2, 3, 4, 5, 6];
console.log(numeros);