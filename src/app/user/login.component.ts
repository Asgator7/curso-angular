import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component ({
    templateUrl: './login.component.html'

})

export class LoginComponent {
    userName: any;
    password: any;

    constructor(
        private router: Router,
        private authService: AuthService
    ){ }

    loginForms(formValues: any): void {
        this.authService.loginUser(formValues.username, formValues.password);
        this.router.navigate(['events']);
    }

    cancel(): void{
        this.router.navigate(['events']);
    }
}
