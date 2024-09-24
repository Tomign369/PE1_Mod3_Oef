import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let tafel = 5

for(let i = 1; i <= 10; i ++ ){
    let product = i * tafel 
    console.log(tafel + ' x ' + i + ' = ' + product)
}

process.exit()