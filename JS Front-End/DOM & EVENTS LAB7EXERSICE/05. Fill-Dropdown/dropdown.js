function addItem() {
    const textInput = document.getElementById("newItemText");
    const valueInput = document.getElementById("newItemValue");
  
    const option = createOption(textInput.value, valueInput.value);
  
    const select = document.getElementById("menu");
    select.appendChild(option);
    clearInputFields();
  
    function createOption(text, value) {
      const option = document.createElement("option");
      option.textContent = text;
      option.value = value;
  
      return option;
    }
  
    function clearInputFields() {
      const inputs = Array.from(document.querySelectorAll("input"));
      inputs.forEach((input) => (input.value = ""));
    }
  }