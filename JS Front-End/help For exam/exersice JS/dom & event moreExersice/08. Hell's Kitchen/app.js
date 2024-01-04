function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      const inputArr=document.querySelector("#inputs > textarea").value;
      //console.log(inputArr);
      const restaurantcollection={};
  for (let index = 0; index < inputArr.lehgth; index++) {
   const [restaurantName]=inputArr.shift().split(' - ');
   restaurantcollection[restaurantName]={...employess, ...salary};
  }

 console.log(restaurantcollection);


     
      
   }
}
