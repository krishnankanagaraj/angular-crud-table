import { EventEmitter, Injectable, Output } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  @Output() userSelected=new EventEmitter<User>()
  @Output() updating=new EventEmitter<boolean>()
  users:User[]=[{
    firstName:'krishnan',
    lastName:'kanagaraj',
    email:'krishnan@gmail.com',
    phone:'8668084373',
    address:{street:'mgrStreet',area:'medavakkam',city:'chennai',pincode:'600100'}
  }]
  selectedUser!:User
  constructor() { }
  getUser(){
    return this.users
  }
  addUser(user:User){
    this.users.push(user)
  }
  updateUser(user:User){
    let index=this.users.findIndex(u=>u.email===user.email&&u.firstName===user.firstName)
    this.users.splice(index,1,user)
  }
  deleteUser(id:number){
    this.users.splice(id,1)
  }
  setSelectedUser(user:User){
    this.selectedUser=user
    console.log("service",this.selectedUser)
    this.userSelected.emit(this.selectedUser)
    this.updating.emit(true)
  }
}
