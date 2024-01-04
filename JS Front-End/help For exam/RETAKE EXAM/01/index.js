function solve(input){

    let n =input.shift();
    const astronautcollection={};
    for (let index = 0; index < n; index++) {
        const [astronautName, oxygenlevel, energyreserves]=input.shift().split(' ');
        astronautcollection[astronautName]={oxygenlevel,energyreserves};
        
        
     }
     for (const line of input) {
    
        if(line==='End'){
            break;
        }
    let tokens=line.split(' - ');
    let command=tokens[0];
    if(command==="Explore"){

          let name=tokens[1];
           let neededEnergy=Number(tokens[2]);
     


     if(astronautcollection[name].energyreserves>=neededEnergy){
     astronautcollection[name].energyreserves-=neededEnergy;
       console.log(`${name} has successfully explored a new area and now has ${astronautcollection[name].energyreserves} energy!`);


      }
      else {
          console.log(`${name} does not have enough energy to explore!`);
          }



    }else if(command==="Refuel"){
         let name=tokens[1];
         let amount=Number(tokens[2]);
          
          let energyAsNumber=Number(astronautcollection[name].energyreserves);
          astronautcollection[name].energyreserves=energyAsNumber+amount;
            let energyAfterrefuel=astronautcollection[name].energyreserves;
         
          
          
          if(energyAfterrefuel>200){
              amount=amount-(energyAfterrefuel-200);
              
            astronautcollection[name].energyreserves=200;
          }


            console.log(`${name} refueled their energy by ${amount}!`)
          

    }else if(command==="Breathe"){

        let name=tokens[1];
        let amount=Number(tokens[2]);
          let oxygenAsNumber=Number(astronautcollection[name].oxygenlevel);
           astronautcollection[name].oxygenlevel=oxygenAsNumber+amount;
           let oxygenAfterbreathe=astronautcollection[name].oxygenlevel;
           if(oxygenAfterbreathe>100){
            amount=amount-(oxygenAfterbreathe-100);

            astronautcollection[name].oxygenlevel=100;
           }
        console.log(`${name} took a breath and recovered ${amount} oxygen!`);
    }

     
}
  for (const astrounat in astronautcollection) {
    console.log(`Astronaut: ${astrounat}, Oxygen: ${astronautcollection[astrounat].oxygenlevel}, Energy: ${astronautcollection[astrounat].energyreserves}`);
  }

}
solve([    '4',
'Alice 60 100',
'Bob 40 80',
'Charlie 70 150',
'Dave 80 180',
'Explore - Bob - 60',
'Refuel - Alice - 30',
'Breathe - Charlie - 50',
'Refuel - Dave - 40',
'Explore - Bob - 40',
'Breathe - Charlie - 30',
'Explore - Alice - 40',
'End']

)
