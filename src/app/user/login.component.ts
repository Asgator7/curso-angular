import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './login.component.html',
    styles: [`
        em {float: right; color: #E05C65; padding-left: 10px;}
    `]

})

export class LoginComponent {
    userName: any;
    password: any;
    mouseoverLogin: boolean;

    constructor(
        private router: Router,
        private authService: AuthService
    ) { }

    loginForms(formValues: any): void {
        this.authService.loginUser(formValues.username, formValues.password);
        this.router.navigate(['events']);
    }

    cancel(): void {
        if (window.confirm('Are you sure? Exit this window will result in lost of information')) {
            this.router.navigate(['events']);
        }
    }
}
