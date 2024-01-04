function cityinfo(city){
    let entries=Object.entries(city);
    for(let[key,value]of entries)
    {

        console.log(`${key} -> ${value}`);

    }
}
