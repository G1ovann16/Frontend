import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userList: any;
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

}
