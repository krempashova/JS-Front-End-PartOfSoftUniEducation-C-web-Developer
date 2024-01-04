function solve(input){
class Cat{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
    sayMeow(){
        console.log(`${this.name}, age ${this.age} says Meow`)

    }
   

}
let cats=[];
for (const line of input) {
      let [name, age]= line.split(' '); 
      age=Number(age);
      cats.push(new Cat(name,age));
}
for (const cat of cats) {
    cat.sayMeow();

    
}
}
solve(['Mellow 2', 'Tom 5']
)