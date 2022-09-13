const prompt = require (`prompt-sync`)()

const n1 = parseInt(prompt(`Escreva N1:`));
const n2 = parseInt(prompt(`Escreva N2:`));
const n3 = parseInt(prompt(`Escreva N3:`));


if (n1 > n2 && n1 > n3 )  {
    console.log(`o numero ${n1} é o maior`);
}

if ( n2 > n1 && n2 > n3 ) {
	console.log(`o numero ${n2} é o maior` );
}

if ( n3 > n1 && n3 > n2 ) {
	console.log(`o numero ${n3} é o maior`);
}

