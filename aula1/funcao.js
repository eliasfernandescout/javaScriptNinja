var x = 1;

function soma(){
    return x = x + 1; //para acessar as operações dentro de uma função é necessário dar RETURN
  
}
console.log(soma());

console.log(x + soma());

//FUNÇÕES PODEM RETORNAR VALORES E RECEBER ARGUMENTOS OU PARÂMETROS


//RECEBENDO PARÂMETROS E ARGUMENTOS \/..

function soma2(x, y){
    return x + y;
    
}

console.log(soma2(5, 5));