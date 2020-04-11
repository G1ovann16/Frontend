import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {NgForm} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userList: any;
  list = {};
  showAll = true;
  j: number;
  data = [];
  showProperty = false;
  constructor(public userService: UserService) { }
ngOnInit(): void {
  this.getAllUsers();
   }

  getAllUsers(){
this.userService.getAll()
// tslint:disable-next-line: no-shadowed-variable
.subscribe(( users: any) =>
    {
      this.userList = users;
      console.log(this.userList);
    },
    err => console.log(err)
            );
        }
        addUser(taskform: NgForm){
          this.userService.setUser(taskform.value)
          .subscribe(msn => this.getAllUsers());
          console.log('entro');
          this.showAll = true;
        }
        select(i: number){
          this.j = i;
          this.showProperty = !this.showProperty;
          this.list = this.userList[i];
        }

}
