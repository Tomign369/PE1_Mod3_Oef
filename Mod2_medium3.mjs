import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

/*
Priemgetal:
veel moeite gekost om dit probleem te begrijpen & op te lossen
https://www.youtube.com/watch?v=cbHMQxOuIUw -> als extra uitleg gebruikt.
Ook gebruik gemaatk van ChatGPT om me te ondersteunen in het beantwoorden van mijn vragen.
    *extra note: Ik zal nooit een code rechtstreeks copy/pasten zonder deze te begrijpen en te decoderen.
*/

let getal = parseFloat(await userInput.question('Geef een getal in om te controleren of het een priemgetal is: '));
let isPrime;
//splits het probleem op in drie delen:

// eerst kijken we if het ingegeven getal groter is dan 1 omdat een 1 geen priemgetal kan zijn.
if (getal < 2) {
    console.log(getal + ' is geen priemgetal.');  
}else{
    isPrime = true;  

   
    for (let i = 2; i < getal; i++) {
        if (getal % i === 0) {
            isPrime = false;  
            break;  
    }
    }
}

if (isPrime) {
    console.log(getal + ' is een priemgetal.');
} else {
    console.log(getal + ' is geen priemgetal.');
}


process.exit()