
//Loops are very helpful when dealing with arrays if you want to run the same code for each item in the array.

let i;

for(i = 1; i <= 5; i++){
    console.log ('value of i is : '+i);
}

let fruits = ['Apple', 'Banana', 'Grapes'];
let x;
for (x in fruits){
    console.log (fruits[x])
}

for(x of fruits){
    console.log (x);
}


//while loop
//This loop will continue to run for as long as the condition in the parentheses is true. That condition is a counter indicating
//that, as long as the variable i remains less than 10, the statementss inthe subsequent code block should run.

let count = 11;
while(count < 10){
    console.log ('Count '+count)
    count=count+1;
}


//Do-While
//The key difference between a while loop and a do while loop is the statements in the code before the conndition, This means that those
//statements are run once whether or not the condition is met.


count = 11;
do{
    console.log ('Count... '+count)
    count=count+1;
}while(count <= 10)