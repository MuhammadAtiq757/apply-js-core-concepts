// 21-5 no video: Calculate Sum of all numbers od an array

// function getSumOfAnArray(numbers){
//     for(let i = 0; i< numbers.length; i++){
//         const index = i;
//         const element = numbers[index];
//         console.log(index, element);
//     }
// }

// const myNumbers = [12, 23, 32, 34, 43, 45, 54];
// getSumOfAnArray(myNumbers);





// 21-6 no video: Get Odd Numbers of an array and get odd sum of an array


function getOddNumberArray(numbers){
    const oddNumber = [];
    for(let i = 0; i< numbers.length; i++){
        const index = i;
        const element = numbers[index];
       if(element % 2 !==0){
        console.log(index, element);
        oddNumber.push(element);
       }
        
    }
    return oddNumber;
}

const myNumbers = [12, 23, 32, 34, 43, 45, 54];
const oddNumber = getOddNumberArray(myNumbers);
console.log(oddNumber);
getOddNumberArray(myNumbers);
