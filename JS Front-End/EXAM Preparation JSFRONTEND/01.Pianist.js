function solve(input){
   let n =input.shift();
   const piececollection={};

// if we want to use this ComposerParser , we dont need  of each command to put commandToknes[], we just need to make function
//like this:

//commandParser[command]=[...commandTokens.sclice[1]];

   ///let composerParser={
   // 'Add':Addpiece,
    //'Remove':Removepiece,
   // 'ChangeKey':changeKeyOfPiese,
  // };

  for (let index = 0; index < n; index++) {
     const [piece,composer,key]=input.shift().split('|');
    piececollection[piece]={composer,key};
    
  }

  for (const line of input) {
    if(line==='stop'){
        break;
    }
    let commandTokens=line.split('|');
    let command=commandTokens[0];
    if(command==='Add'){
        Addpiece(commandTokens[1],commandTokens[2],commandTokens[3]);
    }
    else if(command=='Remove'){
        Removepiece(commandTokens[1]);
    }
    else if(command=='ChangeKey'){
        let newKey=commandTokens[2];
        changeKeyOfPiese(commandTokens[1],newKey);
    }
    
  }
  function Addpiece(piece, composer,key){
    if(piececollection.hasOwnProperty(piece)){
        console.log(`${piece} is already in the collection!`);
    }
    else{
        piececollection[piece]={composer,key};
        console.log(`${piece} by ${composer} in ${key} added to the collection!`);
    }

  }
  function Removepiece(piece){
    if(piececollection.hasOwnProperty(piece)){
     delete piececollection[piece];
        console.log(`Successfully removed ${piece}!`)
    }
    else{
        console.log(`Invalid operation! ${piece} does not exist in the collection.`);
    }

  }
  function changeKeyOfPiese(piece, newKey){
    if(piececollection.hasOwnProperty(piece)){
        piececollection[piece].key=newKey;
        console.log(`Changed the key of ${piece} to ${newKey}!`);
    }else{
        console.log(`Invalid operation! ${piece} does not exist in the collection.`);
    }

  }

   for (const piece in piececollection) {
    const {key, composer}=piececollection[piece];
    console.log(`${piece} -> Composer: ${composer}, Key: ${key}`)
   }

}
solve([
  '3',
  'Fur Elise|Beethoven|A Minor',
  'Moonlight Sonata|Beethoven|C# Minor',
  'Clair de Lune|Debussy|C# Minor',
  'Add|Sonata No.2|Chopin|B Minor',
  'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
  'Add|Fur Elise|Beethoven|C# Minor',
  'Remove|Clair de Lune',
  'ChangeKey|Moonlight Sonata|C# Major',
  'Stop'  
]
)