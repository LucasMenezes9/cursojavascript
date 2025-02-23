/*       TIPOS DE DADOS
   * Strings -> Textos 
   * Numbers -> Números
   * boolean -> booleano
   * Object  -> Objetos
   * Null & Undefined
   * Array -> Matriz
*/

/* String (pode ser com aspas duplas, simpes ou crase(permite inclusão de código e pular linhas))*/
const texto = "Testando aspas duplas"
const texto2 = 'Testando aspas simples'
const texto4 = 'incluindo código'
const texto3 = `testando crase
pulando linha ${texto4}`

console.log(texto)
console.log(texto2)
console.log(texto3)

/* Numbers -> Números */

const numero = 200 * 2
console.log(numero)

/* boolean -> booleano */

const campo = false
console.log(campo)

/* Object  -> Objetos (é uma forma de agrupar varias informações em uma unica variável)*/

const usuario = {
    nome: 'Lucas',
    idade: 30,
    casado: true
}
console.log(usuario.nome)
console.log(usuario)

/*Null & Undefined */

const usuario2 = {
    nome: 'Lucas',
    idade: 40,
    casado: true,
    conjuge: null
}
console.log(usuario2)
console.log(usuario2.abacate)

/* Array -> Matriz (Serve para agrupar muitas informações, tipo vários objetos, numeros, nomes, o q eu quiser) */

const meuArray = [
    {
        nome: 'Lucas',
        idade: 30,
        casado: true,
        conjuge: "Dona Bonita"
    }, {
        nome: 'João',
        idade: 40,
        casado: false,
        conjuge: null
    }, {
        nome: 'Julio',
        idade: 23,
        casado: false,
        conjuge: null
    }
]
console.log(meuArray)
console.log(meuArray[0])
console.log(meuArray[2])
console.log(meuArray[30])

