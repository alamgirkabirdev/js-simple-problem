function largestElement(number){
    let largest = 0;
    for(let i = 0; i < number.length; i++){
        const element = number[i];
      if(element > largest){
        largest = element;
      }
      
    }
    return largest;
}

const ages = [12, 54, 2, 32, 10, 75, 80];
const oldest = largestElement(ages);
const oldest2 = largestElement([-2, -6, -17]);
// console.log('oldest2',oldest2 );

// 21-5 class


// Task: find the lowest element of an array


const arr = [10, 12, 15, 20, 54, 75, 80];
const min = Math.min(...arr);
console.log(min);

const arr1 = [10, 12, 15, 20, 54, 75, 80];
const max = Math.max(...arr1);
console.log(max);