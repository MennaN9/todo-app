import { Component , OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToDoService } from './to-do.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Todo App';
  todos!:any;
  text!:any;
  oldText!:any;
  appState = 'default';
  constructor(private todoService: ToDoService){

  }
  ngOnInit(){
    this.todos = this.todoService.getTodos();
  }

  addTodo() {
    let newTodo = {
      text: this.text
    }
    this.todos.push(newTodo);

    this.todoService.addTodo(newTodo);
    this.text = ' ';
  }
  
  deleteTodo(todoText:any) {
    for(let i = 0; i < this.todos.length; i++) {
      if(this.todos[i].text == todoText) {
          this.todos.splice(i, 1);
      }
    }

    this.todoService.deleteTodo(todoText);
  }

  editTodo(todo:any) {
    this.appState = 'edit';
    this.oldText = todo.text;
    this.text = todo.text;
  }


}
