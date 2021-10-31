const prompt = require('prompt-sync')({sigint: true});

//Intro
console.log();
console.log();
console.log('Welcome to the To-Do List Manager Application!');
console.log();
console.log(); 
console.log('==============================================');

//List compliation
let incompleteItems = [];
let completeItems = [];
let secondary;

const initial = prompt('    Select an action: [1] Create a to-do list [2] Complete a to-do item    ');

while (true){
//Creating a new list
if (initial === 1) {
    console.log();
    console.log('==============================================');
    console.log('You have chosen to create a new list');
    secondary = console.log(prompt('Enter a list item'    ));
    console.log(Number(incompleteItems[i] + 1)) + '[incomplete] ' + secondary);
    incompleteItems += secondary;
} 

//Modifying an existing item
else if (initial === 2) {
    console.log();
    console.log();
    console.log('You have chosen to complete a to-do list item');
    console.log(incompleteItems);
    secondary = console.log(prompt('Which item would you like to complete?');
    console.log(secondary);
    
}

}