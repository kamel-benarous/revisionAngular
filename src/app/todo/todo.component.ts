import { Component } from '@angular/core';



interface TODO {
  label: string;
  isDone: boolean;
}


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  newTodo: String ="" ;
  todos: TODO[] = [];

  addNewTodo(): void {
    if(this.newTodo.length > 0) {
      let todo: TODO = {
        label: this.newTodo.toString(),
        isDone: false
      }
  
      this.todos.push(todo);
      this.newTodo = "";
    }
  }

  markAsDone(i: number): void {
    this.todos[i].isDone = !this.todos[i].isDone; 
  }
}
