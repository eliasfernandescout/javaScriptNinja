let pessoa = {
  nome: "Dante",
  sobrenome: "Mattos Fernandes",
  sexo: "Masculino",
  idade: 17,
  altura: 1.92,
  peso: 87,
  andando: false,
  caminhouQuantosMetros: 0,
};
pessoa.aniversario = function () {
  pessoa.idade++;
};

pessoa.andar = function (metros) {
    pessoa.andando = true;
   if (pessoa.andando = true) {
     pessoa.caminhouQuantosMetros += metros;
   } else if(pessoa.andando == false) {
     console.log("Não posso caminhar");
   }
   return
 
 };

console.log(pessoa);
console.log(pessoa.aniversario());
console.log(pessoa.andar());
console.log('-------------------------');
pessoa.aniversario();
pessoa.andar();
console.log(pessoa);
pessoa.andar()
