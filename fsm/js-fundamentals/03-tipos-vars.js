const num = 10.10
const str = `Meu numero é: ${num + 1}` // Definir String "" ou '' ou ``(neste ultimo `template string` caso pode incluir variavel)
console.log(str)

const obj = {
    name: 'Tercio Cretton',
    city: {
        name: 'Cruzeiro',
        uf: 'SP'
    }
}
const key = 'city' // key propriedade do objeto, assim dá ler
console.log(obj[key]) // Tbm é posivel navegar no objeto dinamicamente, usando [nome_variavel], o nome da variavel precisa entrar entre colchetes neste caso.

const arr = [1,2,3] // [] = Array, lista de valores
console.log(arr[0]) // no array o indice é numero inteiro começando com 0


// functions: first-class citizens -
// Função: conjunto de passos encapslado de modo lógico.
// parseInt: transforma texto em número.
// Referencia da função é diferente da invocação. Algumas funções aceitam função dentro da função.
const toint = parseInt // Defini a função parseinInt, sem parenteses, como uma variavel tipo const !
console.log(toint('10') + 1)
