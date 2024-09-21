import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let hoogte = parseFloat(await userInput.question('geef de hoogte in: '))
let i = 0
let pyramide = ''

while(i != hoogte) {   
    pyramide += '*'
    console.log(pyramide)
    i++
}


process.exit()