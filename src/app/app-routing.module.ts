import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./login/login.module').then((m) => m.LoginModule) },
  { path: 'todo', loadChildren: () => import('./todo-list/todo-list.module').then((m) => m.TodoListModule) },
  { path: '', redirectTo: `/login`, pathMatch: 'full' },
  { path: '**', redirectTo: `/login`, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
