


const link = "http://localhost:8080/api/todo";
const link2 = "http://localhost:8080/api/todo/delete";
let content = document.querySelector(".container");
let lista = document.querySelector(".lista");
chiamataTasks();
chiamataTasks();
function chiamataTasks() {
    axios.get(link)
    .then((response)=>
    {
        console.log(response);
        dataContent = response.data
        lista.innerHTML = ""
        for (let i = 0; i < dataContent.length; i++) {
           lista.insertAdjacentHTML("afterbegin",`<li class="lista-todo">${dataContent[i].taskName}<button id="${dataContent[i].taskId}" type="button" class="btn btn-primary ps-4"> Cancella </button>  </li>`)
    
        
        
        }
        let elementsArray = document.querySelectorAll(".lista-todo")
        elementsArray.forEach(function(elem) {
            elem.addEventListener("click",  rimuoviTask);
        });
       
    

})

   
};

function rimuoviTask(event) {
    event.preventDefault();
    let taskId = event.target.id
   console.log(event.target.id);  
   console.log(link2+"/"+taskId);  
    axios.delete(link2+"/"+taskId)
   .then((response) => {
       chiamataTasks();
   }) 
   .catch((error) => {
    // codice da eseguire quando la richiesta non va a buon fine
    // error conterrà i dettagli della risposta 
    console.log(error);
    divErr.innerHTML="Impossibile inserire il corso: "+error.message;
});

    
}






