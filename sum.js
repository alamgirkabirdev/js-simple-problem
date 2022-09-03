const numbers = [44, 25, 65, 75, 32, 62, 74, 85];

 let sum = 0;
for( let i = 0; i < numbers.length; i++){
    const element =numbers[i];
   
    sum = sum + element;
    console.log(sum);
}


function arrayTotal(numbers){

for(let i =0; i < numbers.length; i++){
    const element = numbers[i];
    let sum = 0;
    sum = sum + element;
}
return sum;

}

const total =arrayTotal([32, 45, 67]);
console.log('array total',total)

// class 20-4