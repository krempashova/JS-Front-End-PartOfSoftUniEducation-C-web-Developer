function solve(number)
{
    let sum=0;
    let numbertostring=number.toString();
    for (let index = 0; index < numbertostring.length; index++) {
       
       sum+=Number(numbertostring[index]);
        
    }
    console.log(sum)
}
solve(245678)