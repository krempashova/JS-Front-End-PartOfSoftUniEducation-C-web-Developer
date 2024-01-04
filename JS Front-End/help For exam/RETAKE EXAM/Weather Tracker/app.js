let baseUrl="http://localhost:3030/jsonstore/tasks/";

let inputs={
    location:document.querySelector("#location"),
    temperature:document.querySelector("#temperature"),
    date:document.querySelector("#date"),
};

let Buttons={
    loadBtn:document.querySelector("#load-history"),
    addWeatherBtn:document.querySelector("#add-weather"),
    editWeatherBtn:document.querySelector("#edit-weather"),

};

let selectors = {
  divList: document.querySelector("#list"),
};

Buttons.loadBtn.addEventListener('click',loadallWeather);
Buttons.addWeatherBtn.addEventListener('click',addingWeather);

async function addingWeather(e) {
    e.preventDefault(e)
    if (Object.values(inputs).some((input) => input.value === "")) {
      return;
    }
    try {
      let currentWeather = {
        location: inputs.location.value,
        temperature: inputs.temperature.value,
        date: inputs.date.value,
      };
  
      await fetch(baseUrl, {
        method: "POST",
        body: JSON.stringify(currentWeather),
      });

      await loadallWeather();
     
    } catch (error) {
      console.log(error.message);
    }
  }


    async function loadallWeather() {
          selectors.divList.innerHTML = "";
              Buttons.editWeatherBtn.disabled=true;
             
      try {
          let data = await (await fetch(baseUrl)).json();
           let list = Object.values(data);
          list.forEach((i) => {
            let location = i.location;
            let temperature = i.temperature;
            let date = i.date;
             let id = i._id;
            let divContainer = createElement("div", null, ["container"], null,selectors.divList);
            createElement("h2",location, [],null,divContainer);
            createElement("h3", date ,[], null, divContainer);
            createElement("h3", temperature, [], null, divContainer);

            let changeBtn = createElement("button","Change",["change-btn"],id,divContainer);



              changeBtn.addEventListener("click", changeWeather);

         let deleteBtn = createElement( "button","Delete",["delete-btn"],id,divContainer);
       

      function changeWeather(e){
        Buttons.editWeatherBtn.disabled = true;
        Buttons.addWeatherBtn.disabled = false;
        let id = e.target.id;
        e.target.parentElement.remove();

        inputs.location.value = e.target.parentElement.children[0].textContent
        inputs.temperature.value= Number(e.target.parentElement.children[2].textContent)
        inputs.date.value  = e.target.parentElement.children[1].textContent
        Buttons.editWeatherBtn.addEventListener('click', async (e) =>{
          if(e){
            e.preventDefault()
          }
            try {
                let newItem = {
                    location:inputs.location.value,
                    temperature:inputs.temperature.value,
                    date:inputs.date.value,
                    _id:id,
                };
                await fetch(`${baseUrl}${newItem._id}`, {
                  method: "PUT",
                  body: JSON.stringify(newItem),
                });
                clear();
                await loadallWeather();
              } catch (error) {
                console.log(error);
              }
        })
    }

      
         deleteBtn.addEventListener("click", async (e) => {
        await fetch(`${baseUrl}${deleteBtn.id}`, {
          method: "DELETE",
        });
           await loadallWeather();
      });
      selectors.divList.appendChild(divContainer);
    });
 } catch (error) {
   console.log(error);
 }
}


  function createElement(type, textContent, classes, id, parent) {
  let element = document.createElement(type);
  if (textContent) {
    element.textContent = textContent;
  }
  if (classes && classes.length > 0) {
    element.classList.add(...classes);
  }
  if (id) {
    element.setAttribute("id", id);
  }
  if (parent) {
    parent.appendChild(element);
  }
  return element;
}
    

function clear() {
    inputs.location.value = "";
    inputs.temperature.value = "";
    inputs.date.value = "";
  }



  
