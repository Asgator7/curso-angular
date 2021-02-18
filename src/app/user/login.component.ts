import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component ({
    templateUrl: './login.component.html'

})

export class LoginComponent {
    userName: any;
    password: any;

    constructor(
        private router: Router,
    ){ }

    login(formValues): any {
        console.log(formValues);
        this.router.navigate(['events']);
    }

    cancel(): any{
        this.router.navigate(['events']);
    }
}
