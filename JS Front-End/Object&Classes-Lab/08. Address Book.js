function solve(input){
let adressbook={};
for (let line of input){
    let[name, adress]=line.split(':');
     adressbook[name]=adress;

}
let sortedNames = Object.keys(adressbook).sort((nameA, nameB)=>nameA.localeCompare(nameB));

for(let name of sortedNames){
    console.log(`${name} -> ${adressbook[name]}`);
}




}
solve(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd'])