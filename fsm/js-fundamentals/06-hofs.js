/*
* High Order Functions - Arrays, Vetores
! 
? ForEach: Aplicações praticas
? Map: APlicações Praticar
? Reduce
*/
const nums = [1, 2, 3, 4]

const testForEach = (value, index, arr) => {
  // console.log(value, index, arr)
}
const retForEach = nums.forEach(testForEach)
console.log('Retorno ForEach', retForEach)

// ! Test hof .map()
const testMap = (value, index, arr) => {
  console.log(value, index, arr)
  return value * 3
  
  }
const retMap = nums.map(testMap)
console.log('Retorno Map', retMap)
/*
const soma = nums
.map(a => a * 2)
.reduce((a, b) => a + b)

console.log(soma)
*/