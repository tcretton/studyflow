// Prefira definir as funcões na ordem de uso, se uma prcisar da outra
function opa() {
    // this........
    let i = 10
    console.log('Opa....', i)
    ola()
}
function ola() {
    console.log('Olá!!!!')
}

ola()

opa()

function soma(a,b) {
    let c = a + b
    return c   
}


// Outra forma definir function => ou inves de usar function
const somar = (a, b) => a + b
const c = soma(10, 5)
console.log(c)
