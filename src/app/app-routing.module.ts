import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CategoryComponent} from './components/category/category.component';
import {UserComponent} from './components//user/user.component';
import {TaskComponent} from './components/task/task.component';
import {StadComponent} from './components/stad/stad.component';

const routes: Routes = [
  {path: 'category', component: CategoryComponent},
  {path: 'stad', component: StadComponent},
  {path: 'user', component: UserComponent},
  {path: 'task', component: TaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
