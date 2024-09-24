import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let hoogte = parseFloat(await userInput.question('geef de hoogt in: '))

if(hoogte % 2 === 0) {
    hoogte --;

}


for(let rij = 1; rij <= hoogte; rij += 2) {
    let spatie = '';
    let ster = '';
    
    for(let kolomSpatie = 0; kolomSpatie < (hoogte - rij) / 2; kolomSpatie++){
        spatie += ' ';
    }

    for(let kolomSter = 0; kolomSter < rij;kolomSter ++){
        ster += '*';
    }
        
    console.log(spatie + ster + spatie)
}
for(let rij = hoogte - 2; rij >= 1; rij -= 2) {
    let spatie = '';
    let ster = '';

    for(let kolomSpatie = 0; kolomSpatie < (hoogte - rij) / 2; kolomSpatie++ ) {
        spatie += ' ';
    }
    
    for( let kolomSter = 0; kolomSter < rij; kolomSter++) {
        ster += '*';
    }
    console.log(spatie + ster + spatie)
}
process.exit()