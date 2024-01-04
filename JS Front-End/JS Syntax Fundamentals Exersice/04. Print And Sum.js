function solve(numstart, numend)
{ 
    
    const numbers=[];
    let sum=0;
    for (let i=numstart;i<=numend;i++)
    {
        sum+=i;
        numbers.push(i);
    }
    console.log(numbers.join(' '))
    console.log(`Sum: ${sum}`)
}
solve(5,10)