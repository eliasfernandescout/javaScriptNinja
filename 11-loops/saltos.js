const minhaFunc = () =>{
    var number = 6;
    
    const verifyNumber = number === 10 ? true : false
    return  verifyNumber
}

console.log(minhaFunc())

/* o RETURN pula a execucao das proximas etapas */

var number = 10;

switch(number){
    case 1: 
        console.log('1')
        break;
    case 2:
        console.log('2')
        break;
    case 10:
        console.log('10')
        break;

    default:
        console.log('default')

}

console.log('Fim do switch')

/*TAMBEM E POSSIVEL UTILIZAR O BREAK EM UMA INSTRUCAO FOR */

for(let dinheiro = 0; dinheiro < 10; dinheiro++ ){
   dinheiro === 5 ? console.log('Dinheiro = a 5') : console.log('Dinheiro diferente de 5')

    if(dinheiro === 5){
        break
    }
    console.log(dinheiro)

}

console.log('Fim do FOR')