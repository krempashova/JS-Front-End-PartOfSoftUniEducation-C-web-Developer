function solve(inputarr){
     const horses=inputarr.shift().split('|');
     //console.log(horses);
  let line=inputarr.shift();
  while( line!=="Finish"){

    let tokens=line.split(" ");
    let command=tokens[0];
    if(command=="Retake"){
   let overtakingHoorse=tokens[1];
   let overTakenHorse=tokens[2];

    let firshorsePosition=horses.indexOf(overtakingHoorse);
    console.log(firshorsePosition);

    let secondhorseposition=horses.indexOf(overTakenHorse);
    console.log(secondhorseposition);

          if(firshorsePosition < overTakenHorse){

           horses[overtakingHoorse]=secondhorseposition;
          
           horses[overTakenHorse]=firshorsePosition;

             console.log(`${overtakingHoorse} retakes ${overTakenHorse}.`);
          }
        

    }else if(command=="Trouble"){

    }else if(command=="Rage"){

    }else if(command=="Miracle"){

    }







       line=inputarr.shift();

    }
}
solve(
    ['Bella|Alexia|Sugar',
'Retake Alexia Sugar',
'Rage Bella',
'Trouble Bella',
'Finish']
)
