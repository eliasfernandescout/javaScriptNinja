function minhaFuncao() {
  return (meuArray = [1, 2, 3, 4]);
}

console.log(minhaFuncao()[3]);

function returnObj() {
  return (carro = {
    cor: "Azul",
    marca: "Fiat",
    modelo: function () {
      return "Fiat";
    },
  });
}

propriedade = returnObj().marca

console.log(propriedade)