//Imports Node js readline module
const readline = require('readline');

//Create interface with the reasline method, createInterface, and establish to read input from standard input and write output from standard output.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Prompt user for input, grade, and the input is used in the callback function.
rl.question('What is your grade? ', (grade) => {
    rl.close(); //close the interface

    //Input changed from string to number for accurate comparison.
    grade = parseInt(grade);

    //Run input through the statements to determine the grade letter equivalent.
    if (grade > 79 && grade <= 100){
        console.log("Congradulations! Your grade is an A!");
    }
    else if (grade >= 60 && grade <= 79){
        console.log("Your Grade is a B");
    }
    else if(grade >= 50 && grade < 60){
        console.log("Your Grade is a C");
    }
    else if (grade >= 40 && grade < 50){
        console.log("Your Grade is a D");
    }
    else if (grade >= 0 && grade < 40){
        console.log("Your Grade is a E");
    }
    else{
        console.log("Please input a valid grade.")
    }

});
