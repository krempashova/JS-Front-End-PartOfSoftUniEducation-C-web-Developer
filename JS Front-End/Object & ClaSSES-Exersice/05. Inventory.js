function solve(input){
    let heros=[];
    for (const line of input) {
        let [name,level,items]=line.split(' / ');
        level=Number(level);
        heros.push({name,level,items});    
    }
    let sortedheros=heros.sort((heroA,heroB)=>heroA.level-heroB.level);

    for (const {name,level,items} of sortedheros) {
        console.log(`Hero: ${name}`);
        console.log(`level => ${level}`);
        console.log(`items => ${items}`);
        
    }



}
solve([

    'Isacc / 25 / Apple, GravityGun',
    
    'Derek / 12 / BarrelVest, DestructionSword',
    
    'Hes / 1 / Desolator, Sentinel, Antara'])