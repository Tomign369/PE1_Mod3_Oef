import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

/*Maak een applicatie dat alle getallen tussen 1 en 100 afprint. Maar voor 
getallen deelbaar door 3 print je "Fizz" af, voor getallen deelbaar door 5
print je "Buzz" af en voor getallen deelbaar door 3 en 5 print je "FizzBuzz" af. */

//i <= 100
//als een getal deelbaar is door 3 Fizz
    //als dat getal ook deelbaar is door 5 FizzBuzz



for(let i = 1; i <= 100; i++) {
    let fbString = ''
    if(i % 3 === 0){
        fbString += 'Fizz'
        if(i % 5 ===0){
            fbString += 'Buzz'
        }
    console.log(i + ' : ' + fbString)
    }
}

process.exit()