function multificationOfNumber(number){
    let result= 1;
    for(let i = 1; i<=number; i++){
        result = result*i;
    }
    return result;
}

const result = multificationOfNumber(10);
console.log(result);