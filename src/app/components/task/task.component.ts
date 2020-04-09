import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../services/task.service';
import {task} from '../../models/task';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  constructor(public taskService: TaskService) { }

taskList = [];
showDescription = false;
taskDescription = '';

ngOnInit(): void {
    this.getAllTask();
  }

  getAllTask(){
this.taskService.getAll()
// tslint:disable-next-line: no-shadowed-variable
.subscribe(( task: any) =>
    {
      this.taskList = task;
      console.log(this.taskList[0].name, task);
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
this.taskDescription = this.taskList[i].description;
console.log(this.taskDescription);
return this.taskDescription;
}

}
