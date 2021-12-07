const nums = [1, 2, 3, 4, 5]


const soma = nums
.map(a => a * 2)
.reduce((a, b) => a + b)

console.log(soma)