import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {path: "", redirectTo: "todos", pathMatch: 'full'},
  {path: "todos", component: TodoComponent},
  {path: "students", component: StudentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
