class notes{
    constructor(title, message){
        this.date = new Date();
        this.title = title;
        this.message = message
    }
}

const ToDoHandler = {
    toDoList: [
        "Review HTML, make this look good.",
        "Review CSS, make this Responsive.",
        "Review JS, give this some functionality."
                ],

    renderTodos: function(){
        const list = document.getElementById('list');
        let entry = "";
        if (list){
            for (item of this.toDoList){
                entry = entry.concat(`<div><li>${item}</li></div>`)
            }
            list.innerHTML = entry;
        }
        
        
    },

    

    
};

ToDoHandler.renderTodos();
//Handle reads and writes to Local storage




//display items on the page




//TODO: handle the rendering of notes. 