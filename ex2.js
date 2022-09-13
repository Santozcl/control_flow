const prompt = require(`prompt-sync`)()

const N1 = parseInt (prompt(`Escreva N1:`));
const N2 = parseInt (prompt(`Escreva N2:`));
const N3 = parseInt (prompt(`Escreva N3:`));


if (N1 < N2  &&  N1 < N3  &&  N2 < N3 ) { 
    console.log(`A sequência é: ${N1}; ${N2}; ${N3}`)    
} 

    else if ( N1 < N2  &&  N1 < N3  &&  N3 < N2 ) { 
        console.log (`A sequência é: ${N1}; ${N3}; ${N2}`)
    }

        else if ( N2 < N1 && N2 < N3 && N1 < N3 ) {
             console.log ( `A sequência é: ${N2}; ${N1}; ${N3}` )
        }   

             else if(N2<N1 && N2<N3 && N3<N1){
                 console.log(`A sequência é: ${N2}; ${N3}; ${N1}`)
             }

                 else if(N3<N1 && N3<N2 && N1<N2){
                    console.log(`A sequência é: ${N3}; ${N1}; ${N2}`)
                 }

                     else if (N3<N1 && N3<N2 && N2<N1){
                         console.log(`A sequência é: ${N3}; ${N2}; ${N1}`)
                     }       

