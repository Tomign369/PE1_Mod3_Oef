import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let fibRij = parseFloat(await userInput.question('Geef aan tot welke rij de fibonacci moet afgeprint worden: '))
let getal0 = 0
let getal1 = 1  
let seq = 0
let rij = ''

while(seq <= fibRij) {
    seq = getal0+getal1
    getal0 = getal1
    getal1 = seq
    console.log(seq)
    
}




process.exit()  