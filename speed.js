//create function that takes the cars speed as an input
function speedDetector(carSpeed){

    //define variable to store the demerit points that'll be reassigned using the If else statements
    let demeritPoints = 0;

    //If statement for demerit points
    if (carSpeed <= 70){
        return console.log("Ok");
    }
    else if (carSpeed >70 && carSpeed <= 75){
        demeritPoints = 1;
        return console.log(`Points: ${demeritPoints}`);
    }
    else if (carSpeed >75 && carSpeed <= 80){
        demeritPoints = 2;
        return console.log(`Points: ${demeritPoints}`);
    }
    else if (carSpeed >80 && carSpeed <= 85){
        demeritPoints = 3;
        return console.log(`Points: ${demeritPoints}`);
    }
    else if (carSpeed >85 && carSpeed <= 90){
        demeritPoints = 4;
        return console.log(`Points: ${demeritPoints}`);
    }
    else if (carSpeed >90 && carSpeed <= 95){
        demeritPoints = 5;
        return console.log(`Points: ${demeritPoints}`);
    }
    else if (carSpeed >95 && carSpeed <= 100){
        demeritPoints = 6;
        return console.log(`Points: ${demeritPoints}`);
    }
    else if (carSpeed >100 && carSpeed <= 105){
        demeritPoints = 7;
        return console.log(`Points: ${demeritPoints}`);
    }
    else if (carSpeed >105 && carSpeed <= 110){
        demeritPoints = 8;
        return console.log(`Points: ${demeritPoints}`);
    }
    else if (carSpeed >110 && carSpeed <= 115){
        demeritPoints = 9;
        return console.log(`Points: ${demeritPoints}`);
    }
    else if (carSpeed >115 && carSpeed <= 120){
        demeritPoints = 10;
        return console.log(`Points: ${demeritPoints}`);
    }
    else if (carSpeed >120 && carSpeed <= 125){
        demeritPoints = 11;
        return console.log(`Points: ${demeritPoints}`);
    }
    else if (carSpeed >125 && carSpeed <= 130){
        demeritPoints = 12;
        return console.log(`Points: ${demeritPoints}`);
    }
    else if(carSpeed > 130){
        return console.log("License Suspended")
    }
}

//Invoke the function to recieve return value 
speedDetector(100);