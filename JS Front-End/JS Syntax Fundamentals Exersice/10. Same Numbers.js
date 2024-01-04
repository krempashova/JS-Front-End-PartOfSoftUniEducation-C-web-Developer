function printedNumber(number)
{ 

     let isSame=true;
    
   let numberasString=number.toString();
   let sum=Number(numberasString[0]);
   for (let index = 1; index <numberasString.length; index++) {
     sum+=Number(numberasString[index]);
    
    if(numberasString[index]!==numberasString[index-1])
    {
        isSame=false;
    }
    
   }
   console.log(isSame);
   console.log(sum)

}
printedNumber(1234)