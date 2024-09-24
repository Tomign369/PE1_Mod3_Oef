import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

/*
Priemgetal:
veel moeite gekost om dit probleem te begrijpen & op te lossen omdat we hier een loop combineren met if, else 
& for loops.
https://www.youtube.com/watch?v=cbHMQxOuIUw -> als extra uitleg gebruikt.
Ook gebruik gemaatk van ChatGPT om me te ondersteunen in het beantwoorden van mijn vragen.
    *extra note: Ik zal nooit een code rechtstreeks copy/pasten zonder deze te begrijpen en te decoderen.
*/

let getal = parseFloat(await userInput.question('Geef een getal in om te controleren of het een priemgetal is: '));
let isPrime;

//splits het probleem op in drie delen:
// eerst kijken we if het getal groter is dan 1 omdat een 1 geen priemgetal is.
if (getal < 2) {
    console.log(getal + ' is geen priemgetal.');  

// ten tweede gaan we bereken of het getal al dan niet een priemgetal is.
}else{
    isPrime = true; // we werken met een boolean en gaan ervan uit dat deze waar is tenzij (getal % i = 0)

    for (let i = 2; i < getal; i++) {
        if (getal % i === 0) {
            isPrime = false;  
            break;  
    }
    }
}

// ten derde gaan we de uitkomst printen: if isPrime(=true) dan... anders...
if (isPrime) {
    console.log(getal + ' is een priemgetal.');
} else {
    console.log(getal + ' is geen priemgetal.');
}


process.exit()