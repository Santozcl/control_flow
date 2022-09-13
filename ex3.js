const prompt = require(`prompt-sync`)()

const idade = parseInt(prompt(`Ecreva a sua idade: `))


     if ( idade >= 0 && idade <= 14 ) {
    console.log(`você se encontra na categoria infantil`)
    }

       else if( idade >= 15 && idade <= 17 ){
        console.log (`voce se encontra na categoria juvenil`)
        }

           else if ( idade >= 18 && idade <  25) {
            console.log(`você se encontra na categoria adulto`)
            }