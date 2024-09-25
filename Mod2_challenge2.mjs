import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


let get1 = parseFloat(await userInput.question('geef een getal in: '))
let get2 = parseFloat(await userInput.question('geef een tweede getal in: '))
let ggd = 0

for(let i = Math.min(get1,get2); i >= 1; i--) {
    if (get1 % i === 0 && get2 % i === 0){
        ggd = i
        break
    }
}
console.log('Grootste gemeenschappelijke deler is ' + ggd)

process.exit() 