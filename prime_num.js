function primeNumber(num){
    let primeFlag = true;
    if (num <= 1){
        primeflag=false;
    }
    else{
        for(i=2;i<num;i++){
            if(num % i == 0){
                primeFlag = false;
                break;
            }
        }
    }

    console.log(primeFlag);
    
}

primeNumber(5);

function sum() {
    console.log(1+1);
}

function multiply() {
    console.log(1*1);
}
