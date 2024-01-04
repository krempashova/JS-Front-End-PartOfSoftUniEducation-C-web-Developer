function solve( input)
{

     let result;

    let inputtype=typeof(input)
    if(inputtype==='number')
    {
      result=Math.pow(input,2)*Math.PI;
      console.log(result.toFixed(2))
    }
    else {
        console.log(`We can not calculate the circle area, because we receive a ${inputtype}.`)
    }
}
solve('name')