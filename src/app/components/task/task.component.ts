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
  showDescription = false;
  i: number;
  @Input() public taskDescription: string ;
  taskUser: {};
  taskStat: {};
  taskCategory: Category ;

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
    this.taskCategory = this.taskList[this.i].Category;
    console.log(this.taskCategory.name) ;
}
showStat()
{
  this.taskStat = this.taskList[this.i].Stad;
}
showUser()
{
  this.taskUser = this.taskList[this.i].User;
}
}
