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
pessoa.apresentacao = function () {
  var sexo = "o";
  var idadeAnos = "anos";
  var metrosCaminhados = "metros";

  if (pessoa.sexo === "Feminino") {
    sexo = "a";
  }

  if (pessoa.idade === 1) {
    idadeAnos = "ano";
  }

  if (pessoa.caminhouQuantosMetros === 1) {
    metrosCaminhados = "metro";
  }

  return (
    "Olá, eu sou " +
    sexo +
    " " +
    pessoa.nome +
    " " +
    pessoa.sobrenome +
    ", tenho " +
    pessoa.idade +
    " " +
    idadeAnos +
    ", " +
    pessoa.altura +
    ", meu peso é " +
    pessoa.peso +
    " e, só hoje, eu já caminhei " +
    pessoa.caminhouQuantosMetros +
    " " +
    metrosCaminhados +
    "!"
  );
};

pessoa.apresentacao(); //Olá, eu sou o Dante Mattos Fernandes, tenho 17 anos, meu peso é 87 e, só hoje, eu já caminhei 2800 metros!

//   pessoa.andar = function (metros) {
//     pessoa.andando = true;
//    if (pessoa.andando == true) {
//      pessoa.caminhouQuantosMetros += metros;
//    } else if(pessoa.andando == false) {
//      console.log("Não posso caminhar");
//    }

//  };

//  pessoa.andar(100)
//  console.log(pessoa.caminhouQuantosMetros);
//  pessoa.andar(250)
//  console.log(pessoa.caminhouQuantosMetros);
//  pessoa.andar(200)
//  console.log(pessoa.caminhouQuantosMetros);

//   pessoa.aniversario = function(){
//     pessoa.idade++
// }
// pessoa.aniversario()
// console.log(pessoa);
// pessoa.aniversario()
// console.log(pessoa);
// pessoa.aniversario()
// console.log(pessoa);
// console.log(pessoa.idade);

//   pessoa.nomeCompleto = function(){
//       return "Olá! Meu nome é " + pessoa.nome + " " + pessoa.sobrenome;
//   }

//   console.log(pessoa.nomeCompleto());

//   pessoa.parar = function(){
//       pessoa.andando = false
//   }

//   console.log(pessoa);
