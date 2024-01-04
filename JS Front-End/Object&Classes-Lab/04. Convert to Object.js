function convert(input){

let person=JSON.parse(input);

let entries=Object.entries(person);
for (let [key, value] of entries) {
    console.log(`${key}: ${value}`);
}
}
convert({"name": "George", "age": 40, "town": "Sofia"})