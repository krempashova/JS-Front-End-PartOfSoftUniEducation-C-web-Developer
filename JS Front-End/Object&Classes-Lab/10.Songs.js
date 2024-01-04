function solve(input){
class Song{
    constructor(type, name, time){

    
    this.type=type;
    this.name=name;
    this.time=time;
}

}
let songs=[];
let numofsongs=input.shift();
//console.log(numofsongs)
let typeOfSong=input.pop();
//console.log(typeOfSong)
for( let i=0;i<numofsongs;i++){
    let[type, name, time]=input[i].split('_');
    let song=new Song(type,name,time);
    songs.push(song);
}
if(typeOfSong==="all"){
    songs.forEach((i)=>console.log(i.name));
}
else{
    let filteredsongs=songs.filter((i)=>i.type===typeOfSong);
    filteredsongs.forEach((i)=>console.log(i.name));
}


    
}
solve([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
    )