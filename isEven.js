function isEven(number){
    const remaindr = number % 2;
    if(remaindr === 0){
        return true;
    }

    else{
        return false;
    }
}

const myEvenNumber = isEven(400);
console.log(myEvenNumber);
const herEvenNumber = isEven(601);
console.log(herEvenNumber);
