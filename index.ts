
import { create } from "domain";
import inquirer from "inquirer"
let todos:string[] = ["Faraz", "Ahmed"]

async function createTodo(todos:string[]){
    let newTodo = await inquirer.prompt(
        {
            type:"list",
            name:"todo",
            message:"Please select an Operation",
            choices:["Add","Update","View","Delete"]
        }
    )
    console.log(newTodo);
    
    if (newTodo.todo == "Add"){
        let newTodo = await inquirer.prompt(
            {
                type:"input",
                name:"todoo",
                message:"what do you want to Add?"
            }
        )
        todos.push(newTodo.todoo)
        console.log(todos);
    }
    
    if (newTodo.todo == "Update"){
        let updateTodo = await inquirer.prompt({
            type:"list",
            name:"update",
            message:"Select item for update?",
            choices:todos.map(item => item)
        })
        let addTodo = await inquirer.prompt({
           type:"input",
           name:"todo",
           message:"Enter new item"
        });
todos.push(addTodo.todo);
console.log(todos.filter(val => val !== updateTodo.update));
}
if (newTodo.todo == "View"){
 console.log(todos)
}
if(newTodo.todo == "Delete"){
    let deleteTodo = await inquirer.prompt({
        type:"list",
        name:"delete",
        message:"Select item for delete?",
        choices:todos.map(item => item)
    })
    todos = todos.filter(val => val  !== deleteTodo.delete)
    console.log(todos);
}
}
createTodo(todos)