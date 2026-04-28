const form = document.querySelector("#contactForm"); 
const successP = document.querySelector("#success"); 

 
const nameInput = document.querySelector("#name"); 
const messageInput = document.querySelector("#message"); 

form.addEventListener("submit", function(event) { 

   
  event.preventDefault(); 
 

    
  const name = nameInput.value; 

  const message = messageInput.value; 

 

   
if (name === "" || message === "") { 

    successP.textContent = "Fyll i alla fält!"; 

    successP.style.color = "red"; 

    return; 

  } 

console.log(name, message); 
 

  successP.textContent = "Tack! Meddelandet skickades."; 

 
}); 

