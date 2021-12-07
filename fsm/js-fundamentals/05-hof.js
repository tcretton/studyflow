/* Fullstack Master - Devpleno - Tércio Cretton
* High Order Functions - Title
! Alerta Alert

*/

const soma = (a, b) => a + b
const mult = (a, b) => a * b


const calc = (op, a, b) => op(a,b)

const selectOp = op => {
  if (op === '+'){
    return soma
  }
}


const c = calc (selectOp('+'), 10, 5)
console.log(c)

const d = calc (selectOp('+'), 10, 5)

console.log(d)



