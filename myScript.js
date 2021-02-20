// Problem 1
// Write a JavaScript program to convert temperatures to and from celsius, fahrenheit. 
// [ Use the formula : c/5 = (f-32)/9, where c = temperature in celsius and f = temperature in fahrenheit]

function convertTemperature(temperature,type){
    let f;
    let c;
    if (type==="c"){
        c = temperature;
        f=(c*9)+160/5;
        console.log("The temperature in fahreneit is "+f);
        return f;
    }
    else if (type==="f"){
        f = temperature;
        c=((f-32)*5)/9;
        console.log("The temperature in celciuim is "+c);
        return c;
    }
    else{
        console.log("give the right type for temperature");
        return null;
    }
}

convertTemperature(56,"f");
convertTemperature(100,"c");



// Problem 2
// Write a JavaScript program to check whether a given number is in a given range. for example the program will 
// take as arguments the number z and an array [x, y] and it should check whether z is within x, y. 

function checkIfNumberIsInGivenRange(list,number){
    
    if (number>=list[0] && number<=list[1]){
        return true;
    }
    else {
        return false;
    }
    
}
checkIfNumberIsInGivenRange([2,20],5);






// Problem 3
// Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.