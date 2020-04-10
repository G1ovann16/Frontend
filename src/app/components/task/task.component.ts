import { Component, OnInit, Input } from '@angular/core';
import {TaskService} from '../../services/task.service';
import {task, Category} from '../../models/task';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  taskList: task[] = [];
  showAll = false;
  showDescription = false;
  showcategory = false;
  showuser = false;
  showstat = false;
  i: number;
  @Input() public taskDescription: string ;
  taskUser: {};
  taskStat: {};

  //#region var relacionales
  taskCategoryName: string ;
  taskCategoryDescription: string ;
  taskStatname: string ;
  taskStatregister: string ;
  taskUsername: string ;
  taskUserlastName: string ;
  taskUseremail: string ;
  taskUserpassword: string ;
  taskUserdirection: string ;

  //#endregion

  constructor(public taskService: TaskService) { }


ngOnInit(): void {
  this.getAllTask();
   }

  getAllTask(){
this.taskService.getAll()
// tslint:disable-next-line: no-shadowed-variable
.subscribe(( task: any) =>
    {
      this.taskList = task;
    },
    err => console.log(err)
            );
        }

addTask(taskform: NgForm){
  this.showAll = false;
  this.taskService.setTask(taskform.value)
  .subscribe(msn => this.getAllTask());
          }

delTask(i: number){
  this.taskService.erase(i)
  .subscribe(msn => this.getAllTask());

}

visible(i: number){
this.showDescription = true;
this.i = i;

this.taskDescription = this.taskList[i].description;
}

showCategory(){
    console.log('hola');
    this.showcategory = true;
    this.showuser = false;
    this.showstat = false;
    this.taskCategoryName = this.taskList[this.i].Category.name;
    this.taskCategoryDescription = this.taskList[this.i].Category.description;
}
showStat()
{
  this.showcategory = false;
  this.showuser = false;
  this.showstat = true;
  this.taskStatname = this.taskList[this.i].Stad.name;
  this.taskStatregister = this.taskList[this.i].Stad.register;
}
showUser()
{
  this.showcategory = false;
  this.showuser = true;
  this.showstat = false;
  this.taskUsername = this.taskList[this.i].User.name;
  this.taskUserlastName = this.taskList[this.i].User.lastname;
  this.taskUseremail = this.taskList[this.i].User.email;
  this.taskUserpassword = this.taskList[this.i].User.password;
  this.taskUserdirection = this.taskList[this.i].User.direction;
}


}
