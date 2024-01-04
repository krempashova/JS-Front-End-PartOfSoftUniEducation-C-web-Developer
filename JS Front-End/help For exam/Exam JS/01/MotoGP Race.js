function solve(input){

    let n=input.shift();
 const raiderscollection={};
 for (let index = 0; index < n; index++) {
    const [raider, fuelcapacity, position]=input.shift().split('|');
    raiderscollection[raider]={fuelcapacity,position};
    if(raiderscollection[raider].fuelcapacity>100){
        raiderscollection[raider].fuelcapacity=100;
    }
 }

 for (const line of input) {
    
    if(line==='Finish'){
        break;
    }
    let tokens=line.split(' - ');
    let command=tokens[0];
    if(command==='StopForFuel'){
       let riderName=tokens[1];
       let riderFuelCapacity=Number(tokens[2]);
       let rierposition=tokens[3];
        if(raiderscollection[riderName].fuelcapacity>riderFuelCapacity){
            
           console.log(`${riderName} does not need to stop for fuel!`);

        }else {
            raiderscollection[riderName].position=rierposition;
           console.log(`${riderName} stopped to refuel but lost his position, now he is ${rierposition}.`);
        }


    }else if(command==='Overtaking'){
        let rider1=tokens[1];
        let rider2=tokens[2];

          let rider1positionasaNumber=Number(raiderscollection[rider1].position);
          let rider2positionAsNUmber=Number(raiderscollection[rider2].position);
          
       if(rider1positionasaNumber<rider2positionAsNUmber){
       
         raiderscollection[rider1].position=rider2positionAsNUmber;
         raiderscollection[rider2].position=rider1positionasaNumber;

          console.log(`${rider1} overtook ${rider2}!`);
          }
 

    }else if(command==='EngineFail'){

        let rider=tokens[1];
        let lapsleft=Number(tokens[2]);
        delete raiderscollection[rider];
        console.log(`${rider} is out of the race because of a technical issue, ${lapsleft} laps before the finish.`);


    }
 }
 for (const raider in raiderscollection) {
 
    console.log(`${raider}`);
    console.log(`  Final position: ${raiderscollection[raider].position}`);
    
   }

}
solve((["4",
"Valentino Rossi|110|1",
"Marc Marquez|90|3",
"Jorge Lorenzo|80|4",
"Johann Zarco|200|2",
"StopForFuel - Johann Zarco - 90 - 5",
"Overtaking - Marc Marquez - Jorge Lorenzo",
"EngineFail - Marc Marquez - 10",
"Finish"])

)
