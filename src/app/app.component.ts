import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { UsersService } from './users.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users:User[]=[]
  selectedUser!:User
  constructor(private userService:UsersService){}
  ngOnInit(): void {
   this.users= this.userService.getUser()
  }
  
}
