function minhaFuncao() {
  return (meuArray = [1, 2, 3, 4]);
}

console.log(minhaFuncao()[3]);

function returnObj() {
  return (carro = {
    cor: "Azul",
    marca: "Fiat",
    modelo: function () {
      return "Punto";
    },
  });
}

propriedade = returnObj().modelo()

console.log(propriedade)