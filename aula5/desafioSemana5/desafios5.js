/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
// ?

let estudante = ['nome', 'matricula', 'idade', 'turno', 'livros']


/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
// ?

function listarEstudante(array){
    return array
}

console.log(listarEstudante(estudante))

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
// ?
console.log(listarEstudante(estudante)[1])
/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
// ?

function estudantesComMedia(estudantesArray, index){
    return estudantesArray[index]
}
console.log(estudantesComMedia(estudante, 4))

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
// ?
let tiposDiferentes = [1, 'Elias', true, {nome: 'adidas', ano: 2000}, false]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
// ?

function listarTiposDiferentes(listar){
    return listar

}
console.log(listarTiposDiferentes(tiposDiferentes))

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
// ?


function book(nomeAutor){
    livros = {
        'livro1':{
            quantidadeDePaginas: 100,
            autor: 'Dante',
            editora: 'Bleach Tokyo Editora'
        },
        'livro2':{
            quantidadeDePaginas: 250,
            autor: 'Elias',
            editora: 'Shippuden Edição Especializada'
        },
        'livro3':{
            quantidadeDePaginas: 450,
            autor: 'Jhess Mattos',
            editora: 'Kraftbook Editora'
        }
    }

    if(nomeAutor === livros.livro1.autor ){
        return livros.livro1
    }else if(nomeAutor === livros.livro2.autor){
        return livros.livro2
    }else if(nomeAutor === livros.livro3.autor){
        return livros.livro3
    }else{
        return livros
    }


}

console.log(book('Elias'))
console.log('#######################################################################')
/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// ?

console.log(book(livros))
console.log('#######################################################################')
/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// ?

console.log(book().livro1.autor, book().livro1.quantidadeDePaginas)

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?

console.log(`O livro do autor ${book().livro1} é o ${book().livro1.autor}`)

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ?

console.log(`O livro do autor ${book().livro1} é o ${book().livro1.editora}`)