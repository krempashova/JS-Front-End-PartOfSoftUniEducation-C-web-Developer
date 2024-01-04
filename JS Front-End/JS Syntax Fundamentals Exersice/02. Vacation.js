function solve(numGroup, type,dayofweek)
{
    let priceforperson=0;
   switch(type)
   {
    case 'Students':
        if(dayofweek==='Friday')
        {
            priceforperson=8.45;
        }
        else if(dayofweek==='Saturday')
        {
            priceforperson=9.80;
       }
       else 
       {
        priceforperson=10.46;
       }
        break;
        case 'Business':
            if(dayofweek==='Friday')
            {
                priceforperson=10.90;
            }
            else if(dayofweek==='Saturday')
            {
                priceforperson=15.60;
           }
           else 
           {
            priceforperson=16;
           }
            break;
            case 'Regular':
                if(dayofweek==='Friday')
                {
                    priceforperson=15;
                }
                else if(dayofweek==='Saturday')
                {
                    priceforperson=20;
               }
               else 
               {
                priceforperson=22.50;
               }
                break;
   }
   let totalprice=numGroup*priceforperson;
   if(type==='Students' && numGroup>=30)
   {
   totalprice-=totalprice*0.15;
   }
   if(type==='Business' && numGroup>=100)
   {
    totalprice=(numGroup-10)*priceforperson;
   }
   if(type==='Regular' && numGroup>=10 && numGroup<=20)
   {
    totalprice-=totalprice*0.05;
   }
 console.log(`Total price: ${totalprice.toFixed(2)}`);
}
solve(30,
    "Students",
    "Sunday")