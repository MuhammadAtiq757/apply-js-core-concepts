// 1+ 2 + 3 + 4+ 5+ 6+ 7
// calculate factorial of a number using for loop
let sum = 0;
for(let i = 0; i <= 7; i++){
    sum = sum + i;
    console.log(i, sum);
}


// calculate factorial of a number using for loop in function

function sumOfNumbers(number){
    let sum = 0;
    for(let i = 0; i <= number; i++){
        sum = sum + i;
        console.log(i, sum);
    } 
    return sum;
}