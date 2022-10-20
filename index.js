const ToDoHandler = {
    toDoList: [
        "Review HTML, make this look good.",
        "Review CSS, make this Responsive.",
        "Review JS, give this some functionality."
        ],

    saveList: function(){
        let items = JSON.stringify(this.toDoList);
        localStorage.setItem("todos", items)

    },
    
    readList: function(){
        let items =localStorage.getItem("todos");
        this.toDoList = JSON.parse(items) || [];
    },
  
    renderTodos: function(){
        const list = document.getElementById('list');
        let entry = "";
        if (list){
            for (let i =0; i < this.toDoList.length; i++){
                entry = entry.concat(
                    `<li>${this.toDoList[i]}<input type="button" value="delete" onclick="remove(${i})"></li>`);
            }
            list.innerHTML = entry;
        }
        
        
    },

    addTodo: function(item){
        this.toDoList.push(item);
        this.saveList();
        this.renderTodos();

    },

    removeTodo: function(index){
        this.toDoList.splice(index, 1);
        this.saveList();
        this.renderTodos();
    }

};
const remove = (index) => ToDoHandler.removeTodo(index);
ToDoHandler.readList();
ToDoHandler.renderTodos();
const saveToDo = () =>{
    const item = document.getElementById("newItem");
    console.log(item.value)
    if (item.value != ""){
        ToDoHandler.addTodo(item.value);
        item.value="";
    }
}
document.getElementById("newToDo").addEventListener("click", saveToDo);
//Handle reads and writes to Local storage

//display items on the page

//TODO: handle the rendering of notes. 