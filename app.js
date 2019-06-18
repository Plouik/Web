const EventEmitter = require('events');
const somme = require('./somme');
const readline = require('readline');
const rl = readline.createInterface({input : process.stdin,
                                    output : process.stdout});
let num1 = Math.floor((Math.random()*10)+1);
let num2 = Math.floor((Math.random()*10)+1);
let answer = num1 + num2;

rl.question(`what is ${ num1 } +${ num2}?\n`,
(userInput)=>{
    let nom = userInput.trim();
    if(userInput.trim() == answer){
        rl.close();
    }
    else{
        rl.setPrompt('False\n');
        rl.prompt();
        rl.on('line',(userInput)=>{
            if(userInput.trim() == answer){
                rl.close();
            }
            else{
                rl.setPrompt(`your answer ${userInput} is incorrect\n`);
                rl.prompt();
            }
        })
    }
})
rl.on('close',()=>{
    console.log('Correct');
})
class Person extends EventEmitter{
    constructor(name){
        super();
        this._name = name;
        this.on('name',()=> {
            console.log('my name is '+this.name);
        });
    }
    get name(){
        return this._name;
    }
    
}

let marcus = new Person('marcus');
marcus.emit('name');

    