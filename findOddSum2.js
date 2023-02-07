// get sum of an array

function getSumOfAnArray(number){
    let sum = 0;
    for(let i =0; i < number.length; i++){
        const index = i;
        const element = number[index]
        sum = sum + element;
        console.log(index, element, sum);
    }
return sum;

}
const myNumber = [12, 34, 54, 65];
getSumOfAnArray(myNumber);




// get odd numbers of an array
function getOddNumbersOfAnArray(numbers){
const oddNumbers = [];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element % 2 !==0){
        console.log(index, element);
           oddNumbers.push(element); 
        }
    }
return oddNumbers;

}
const myNumbers = [12, 34, 54, 65, 66, 77, 89, 55];
const oddNumbers = getOddNumbersOfAnArray(myNumbers);
console.log(oddNumbers);
const oddNumberSum = getSumOfAnArray(oddNumbers);
console.log("odd number sum", oddNumberSum)
