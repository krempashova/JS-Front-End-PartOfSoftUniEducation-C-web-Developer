function printNthnumer(arr,nth)
{   let myarr=[];

   for (let i = 0; i < arr.length; i+=nth) {

      myarr.push(arr[i]);

   }

return(myarr);
}

printNthnumer(['1',
'2',
'3',
'4',
'5'],
6)