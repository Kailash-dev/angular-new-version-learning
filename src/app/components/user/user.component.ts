import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

import { provideHttpClient } from '@angular/common/http';
import { HighlightDirective } from '../../highlight.directive';
import { UserService } from '../../services/user.service';



@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule,NgFor,NgIf,FormsModule,HighlightDirective],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {
  users!: string[];
  userName: string = 'Kailash';
  message: string = 'hello world';
  showUsers: boolean = false;

  constructor(private userService:UserService){}
  ngOnInit() {
    this.userService.getUsersFromApi().subscribe((users: any)=>{
      console.log(users);
      this.users = users;
    })
  }
  sayHello(){
    this.message = `Hello ${this.userName}`
  }
  toggleUsers(){
    this.showUsers = !this.showUsers;
  }


}


