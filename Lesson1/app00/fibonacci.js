const fibonacci=function (number) {
    

        if(number<0) number=number*-1;
        if(number<=2){
            return 1;
        }
        else{
            // console.log("inside timeout");
            return fibonacci(number-1)+fibonacci(number-2);
        }
    
}
// console.log("first");
console.log(`fibonaci of -6 is: `,fibonacci(-6))
// console.log("last");