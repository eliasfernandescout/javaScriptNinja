let myvar = function(){
    return 'variável myvar'

}

console.log(myvar())

var pessoa = {
    nome: 'Elias Fernandes',
    idade: 77,
    altura: 1.85,
    peso: 130
}
console.log(pessoa)

pessoa = {
    nome: 'Elias Fernandes',
    idade: 77,
    altura: 1.85,
    peso: 130,
    sexo: 'Masculino'
}

console.log(pessoa)
pessoa.cor = 'Verde'
console.log('------------------------------')
console.log(pessoa)

pessoa.andar = () =>{
    return 'Pessoa andando'
}
console.log(pessoa.andar())

pessoa.aniversario = () =>{
    return pessoa.idade ++
}

console.log(pessoa)

console.log(pessoa.aniversario())
console.log('-------------PESSOA ATUALIZADO------------------\n')
console.log(pessoa)