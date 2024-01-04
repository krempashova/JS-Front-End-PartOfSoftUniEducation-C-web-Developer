function solve(arr, rotationcount)
{
  for (let index = 0; index < rotationcount; index++) {
   const element=arr.shift();
   arr.push(element);
    
  }
 console.log(arr.join(" "));

}
solve([32,
    21, 61, 1], 4)