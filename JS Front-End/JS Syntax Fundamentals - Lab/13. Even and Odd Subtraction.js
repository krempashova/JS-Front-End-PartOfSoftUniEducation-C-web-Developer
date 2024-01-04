function solve(arr)
{
    let evensum=0;
    let oddsum=0;
for(let i=0; i<arr.length;i++)
{
    if(arr[i]%2==0)
    {
       evensum+=arr[i];
    }
    else {
        oddsum+=arr[i];
    }
}
    let result=evensum-oddsum;
    console.log(result)

}
solve([3,5,7,9] )