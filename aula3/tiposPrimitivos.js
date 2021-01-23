{propriedade: "valor"}
var objeto = {propriedade: "valor", propriedade2: 10, propriedade3: true}

console.log(objeto);
console.log("-------------------");
console.log(objeto.propriedade2);

var pessoa = {
    nome: "Dante",
    idade: 1,
    peso: 8,
    altura: 1.85
}
console.log("-------------------PESSOA---------------------");
console.log("Nome: " + pessoa.nome + "  Peso: " + pessoa.altura);

//FUNÇÕES SÃO OBJETOS DE PRIMEIRA CLASSE EM JAVASCRIPT - PQ PODEM SER ATRIBUIDAS A VARIAVEIS
console.log("-----------------------------------------------");
var myVar = function () {return "Variável myVar";}
console.log(myVar());
