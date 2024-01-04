function solve(number, ...comands){
    let sum=Number(number);
    for (let index = 0; index < comands.length; index++) {
        const comand=comands[index];
        switch(comand)
        {
            case"chop":
            sum/=2;
            break;
            case "dice":
             sum=Math.sqrt(sum);
             break;
            case"spice":
                sum=sum+1;
                break;
    case "bake":
        sum*=3;
        break;
        case "fillet":
            sum-=sum*0.20;
            break;
        }
        console.log(sum);
    }

}
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')