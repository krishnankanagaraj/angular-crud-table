import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
 users!:User[]
 
  constructor(private userService:UsersService){}
  ngOnInit(): void {
    this.users=this.userService.getUser()
  }
  deleteUser(index:number){
    this.userService.deleteUser(index)
  }
  editUser(user:User){
    console.log('table',user)
    this.userService.setSelectedUser(user)
  }
}
