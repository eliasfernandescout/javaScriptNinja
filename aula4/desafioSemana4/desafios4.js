/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function(verificar){
    return verificar ? true : false
};
console.log(isTruthy('0'))
console.log('**-------------------------------------**')



// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
console.log(isTruthy(false))
console.log(isTruthy(null))
console.log(isTruthy(undefined))
console.log(isTruthy(''))
console.log(isTruthy(0))
console.log(isTruthy(-0)) 
console.log(isTruthy(NaN))   
console.log('**-------------------------------------**')   

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
console.log(isTruthy(1))
console.log(isTruthy('Oi'))
console.log(true)
console.log(isTruthy([]))
console.log(isTruthy({}))
console.log(isTruthy(function(){}))
console.log(isTruthy(20*30))
console.log(isTruthy(10-5))
console.log(isTruthy([1,2,3]))
console.log(isTruthy({
    nome: 'Elias',
    idade: '29'
}))
console.log('**-------------------------------------**')  


/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/

carro = {
    marca: 'Fiat',
    modelo: 'Punto',
    placa: 'KWI-8785',
    ano: 2014,
    cor: 'branco',
    quantasPortas: 4,
    assentos: 5,
    quantidadePessoas: 0
}
console.log('**-------------------------------------**')  

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudarCor = function(newColor){
    return carro.cor = newColor
}

console.log(carro.mudarCor('Azul'))
console.log(carro)
console.log('**-------------------------------------**')  


/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = function(){
    return carro.cor
}
console.log(carro.obterCor())
console.log('**-------------------------------------**')  


/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = function(){
    return carro.modelo
}

console.log(carro.obterModelo())
console.log('**-------------------------------------**')  

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/

carro.obterMarca = function(){
    return carro.marca
}
console.log(carro.obterMarca())
console.log('**-------------------------------------**')  

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/

carro.obterMarcaModelo = function(){
    return `Esse carro é um ${carro.obterMarca} ${carro.obterModelo}`
}
console.log(carro.obterMarcaModelo())
console.log('**-------------------------------------**')  
console.log('**-------------------------------------**') 
console.log('**-------------------------------------**') 


/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/

carro.adicionarPessoas = function (numeroPessoas) {
    var totalPessoas = carro.quantidadePessoas + numeroPessoas;
  
    if (carro.quantidadePessoas === carro.assentos && totalPessoas >= carro.assentos) {
      return 'O carro já está lotado!';
    }
  
    if (totalPessoas > carro.assentos) {
      var quantasPessoasCabem =  carro.assentos - carro.quantidadePessoas;
      var pluralOuSingular = quantasPessoasCabem === 1 ? ' pessoa' : ' pessoas';
      return 'Só cabem mais ' + quantasPessoasCabem + pluralOuSingular + '!';
    }
  
    carro.quantidadePessoas += numeroPessoas;
  
    return 'Já temos ' + carro.quantidadePessoas + ' pessoas no carro!';
  };


/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/


// Mude a cor do carro para vermelho.


// E agora, qual a cor do carro?


// Mude a cor do carro para verde musgo.


// E agora, qual a cor do carro?


// Qual a marca e modelo do carro?


// Adicione 2 pessoas no carro.


// Adicione mais 4 pessoas no carro.


// Faça o carro encher.


// Tire 4 pessoas do carro.


// Adicione 10 pessoas no carro.


// Quantas pessoas temos no carro?

