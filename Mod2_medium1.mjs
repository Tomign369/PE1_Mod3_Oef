import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let somgetal = 0
let getal = 1

// Minstens één keer het programma uitvoeren -> do...while loop.
do{
    getal = parseFloat(await userInput.question('geef een getal in (een 0 of minder om de som te zien: '));
    
    if(getal > 0) {
        somgetal += getal
    }

}while(getal > 0)
    
//eens we uit de loop zijn printen we de uitkomst
console.log('de som is: ' + somgetal)
    
process.exit()