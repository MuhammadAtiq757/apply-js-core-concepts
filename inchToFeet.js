// const myInch = 144;
// const myFeet = myInch / 12;
// console.log("my feet is:", myFeet); 


// inch to feet in function

function inchToFeet(inches){
    const feet = inches/12;
    return feet;
}

const dadaInche = 144;
const dadaFeet = inchToFeet(dadaInche);
console.log(dadaFeet);