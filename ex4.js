const prompt = require(`prompt-sync`)()
 const N = parseInt(prompt(`Digite um numero:`))

if ( N % 2 == 0) {
    console.log(`é um numero par de raiz ${Math.sqrt(N, 2)}`)
}
     
    else{
    console.log(`é um numero impar.`)
    console.log(`que elevado a 2 fica ${mat.potencia(N,2)}`)
    }
