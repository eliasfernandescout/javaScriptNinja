var myvar2 = function(){
    return "variável myvar"
}
console.log(myvar2())

//QUANDO ATRIBUIMOS A PROPRIEDADE DE UM OBJETO UMA FUNÇÃO CHAMAMOS DE MÉTODO
console.log("-----------------------------------------");

let pessoa ={
    nome: "Dante",
    idade: 86,
    peso: 87
}
console.log(pessoa.nome);

pessoa.faculdade = "Engenharia de Software"; //NOVAS ATRIBUIÇÕES SEMPRE UTILIZAR . (PONTO)

console.log(pessoa);

console.log("=================================");

let pessoa2 ={
    nome: "Elias",
    idade: 86,
    peso: 87,
    sexo: "Masculino"
}

pessoa2.andar = function(){
    return "Pessoa andando";
}

console.log(pessoa2.andar());
console.log("*************************************************");

console.log(pessoa2.idade);
pessoa2.aniversario = function(){
    pessoa2.idade ++
}

console.log(pessoa2);
console.log(pessoa2.aniversario());
console.log(pessoa2);
pessoa2.sobrenome = "Fernandes";

pessoa2.nomeCompleto = function(){
    return pessoa2.nome + " " + pessoa2.sobrenome
}
console.log(pessoa2.nomeCompleto());