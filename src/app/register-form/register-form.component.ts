import { Component } from '@angular/core';
import { User } from '../user.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
  updating:boolean=false;
  user:User={firstName:'',lastName:'',email:"",phone:'',address:{street:'',area:'',city:'',pincode:''}}
  constructor(private userService:UsersService){  
    this.userService.userSelected.subscribe((user:User)=>{
      this.user=user
    })
    this.userService.updating.subscribe(status=>{
      this.updating=status
    })
  }
  addnewUser(){
    if(this.user.firstName!==""){
      this.userService.addUser(this.user)
      this.user={firstName:'',lastName:'',email:"",phone:'',address:{street:'',area:'',city:'',pincode:''}}
    }
  }
  updateUser(){
    this.userService.updateUser(this.user)
    this.user={firstName:'',lastName:'',email:"",phone:'',address:{street:'',area:'',city:'',pincode:''}}
  }
}
