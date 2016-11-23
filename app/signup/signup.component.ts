import { Component } from '@angular/core';
import {User} from '../models/user';
import {UserService} from '../services/user.service'
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'fitness-signup',
  templateUrl: 'signup.component.html',
  styleUrls: ['signup.component.css']
})


export class SignupComponent {
       
    constructor(
        private userService: UserService,
        private router: Router) { }    
    
    user: User;
    submitted = false;


    submit(email: string, pwd: string, genpwd: string): void {
        if( genpwd != pwd) { return;}

        email = email.trim();
        pwd = pwd.trim();
        if (!email || !pwd) { return; }
        this.userService.create(email, pwd);

        this.submitted = true;
    }
    




}