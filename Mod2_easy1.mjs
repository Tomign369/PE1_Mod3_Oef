import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let i = 0

while(i <= 20){
    if(i % 2 == 0){
        console.log(i)
    }i++
}

process.exit();