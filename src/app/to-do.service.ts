import { Injectable } from '@angular/core';
import { Init } from './init-todo';

@Injectable({
  providedIn: 'root'
})
export class ToDoService extends Init {
  getTodo!:any;
  constructor() { 
    super();
    console.log('TodoService Works');
    this.load();
  }
  getTodos() {
    this.getTodo = localStorage.getItem('todos');
    let todos = JSON.parse(this.getTodo);
    return todos;
  }

  addTodo(newTodo:any) {
    this.getTodo = localStorage.getItem('todos');
     let todos = JSON.parse(this.getTodo);
     // Add New TodoService
     todos.push(newTodo);
     // Set New Todos
     localStorage.setItem('todos', JSON.stringify(todos));
  }

  deleteTodo(todoText:any) {
    this.getTodo = localStorage.getItem('todos');
    let todos = JSON.parse(this.getTodo);

    for(let i = 0; i <todos.length; i++) {
     if(todos[i].text == todoText) {
         todos.splice(i, 1);
     }
  }
     // Set New Todos
     localStorage.setItem('todos', JSON.stringify(todos));
  }

   
}
