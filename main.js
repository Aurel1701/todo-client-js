


const link = "http://localhost:8080/api/todo";
const link2 = "http://localhost:8080/api/todo/delete"
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
           lista.insertAdjacentHTML("afterbegin",`<li id="${dataContent[i].taskId}" class="lista-todo">${dataContent[i].taskName}<button type="button" class="btn btn-primary ps-4"> Cancella </button>  </li>`)
    
        
        
        }
        let elementsArray = document.querySelectorAll(".lista-todo")
        elementsArray.forEach(function(elem) {
            elem.addEventListener("input", function() {
                rimuoviTask(event)
            });
        });
       
    

})

   
};

function rimuoviTask(event) {

    console.log("ciao");
        event.preventDefault();
       
    
    

    
}






