function sortnames(arr)
{
   let sortedarr=arr.sort();
   for (let index = 0; index <sortedarr.length; index++) {
    console.log(`${index+1}.${sortedarr[index]}`);
    
   }

}
sortnames(["John", "Bob", "Christina", "Ema"])