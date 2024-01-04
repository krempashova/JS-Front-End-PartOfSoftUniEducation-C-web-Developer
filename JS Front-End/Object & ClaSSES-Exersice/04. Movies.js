function solve(input){
 let moviescollection=[];
 input.forEach(comand => {
    if(comand.includes("addMovie")){
        
    let name= comand.substr(9);
    moviescollection.push({
    name ,
  
    
   });
   
    
    }else if(comand.includes("directedBy")){
       const[movieName,directorName]=comand.split(' directedBy ');
       //console.log(name,director)
      let currmovie=moviescollection.find((m)=>m.name===movieName);
      if(currmovie){
        currmovie.director=directorName;
      }
    

    }else if(comand.includes("onDate")){
     const[movieName,dateName]=comand.split(' onDate ');
     let currmovie=moviescollection.find((m)=>m.name===movieName);
     if(currmovie){
        currmovie.date=dateName;
     }
    
    }
 });

 moviescollection.filter((m)=>m.name && m.date && m.director)
 .forEach((m)=>console.log(JSON.stringify(m)));
}
solve([

    'addMovie Fast and Furious',
 
    'addMovie Godfather',
    
    'Inception directedBy Christopher Nolan',
    
    'Godfather directedBy Francis Ford Coppola',
    
    'Godfather onDate 29.07.2018',
    
    'Fast and Furious onDate 30.07.2018',
    
    'Batman onDate 01.08.2018',
    
    'Fast and Furious directedBy Rob Cohen'
    
    ])
    solve([

        'addMovie The Avengers',
        
        'addMovie Superman',
        
        'The Avengers directedBy Anthony Russo',
        
        'The Avengers onDate 30.07.2010',
        
        'Captain America onDate 30.07.2010',
        
        'Captain America directedBy Joe Russo'
        
        ])