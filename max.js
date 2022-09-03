const business = 850;
const minister = 1550;
const army  = 600;

// if(business > minister){
//     console.log('Business person er pola is bigger'); 
// }
//  else{ console.log('minister er pola is bigger');
// }

 // compere
// if(business > minister && business > army){
//     console.log('Business is bigger');
// }
// else if(minister > business && minister > army){
//     console.log('Minister is bigger');
// } 

function findLargest(first, second){
    if(first > second){
        return first;
    }
    else{
        return second;
    }
    const largest =findLargest(354, 241);
    console.log( +largest);
}

// else{
    
//     console.log('Army is bigger');
// } 


var max = Math.max(business, minister, army);
// console.log('lergest is ',max);


// use onlaine
// program to find the largest among three numbers

// take input from the user
const num1 = parseFloat(500);
const num2 = parseFloat(600);
const num3 = parseFloat(700);
let largest;

// check the condition
if(num1 >= num2 && num1 >= num3) {
    largest = num1;
}
else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
}
else {
    largest = num3;
}

// display the result
console.log("The largest number is " + largest);
// 1---end---


// program to find the largest among three numbers

// take input from the user
const snum1 = parseFloat(450);
const snum2 = parseFloat(502);
const snum3 = parseFloat(620);
let smallest;

// check the condition
if(snum1 <= snum2 && snum1 <= snum3) {
    smallest = snum1;
}
else if (snum2 <= snum1 && snum2 <= snum3) {
    smallest = snum2;
}
else {
    smallest = snum3;
}

// display the result
console.log("The  smallest number is " +  smallest);

// class 21-3

// (--------
// alhamdulillah
// ------------)