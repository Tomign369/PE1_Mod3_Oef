import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let gemiddelde = 0
let teller = 0
let som = 0

while(gemiddelde < 25) {
    let getal = parseFloat (await userInput.question('geef een getal in: '));

    som += getal;
    teller ++

    gemiddelde = som/teller

    console.log(gemiddelde);
}
console.log('Gemiddelde is nu hoger dan 25, ciao!')

process.exit()


