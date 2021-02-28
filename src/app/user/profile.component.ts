import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  templateUrl: './profile.component.html',
  styles: [`
    em {float:right; color:#E05C65; padding-left: 10px;}
    .error input {background-color:#E3C3C5}
    .error ::-webkit-input-placeholder { color: #999 }
    .error ::-moz-placeholder { color: #999 }
    .error :-moz-placeholder { color: #999 }
    .error :ms-input-placeholder { color: #999 }
  `]
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;

  ngOnInit(): void {
    this.firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(this.authService.currentUser.lastName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  save(formsValue): any {
    this.authService.updateCurrentUser(formsValue.firstName, formsValue.lastName);
    this.router.navigate(['events']);
  }

  validateFirstName(): boolean{
    return this.firstName.valid || this.firstName.untouched;
  }

  validateLastName(): boolean{
    return this.lastName.valid || this.lastName.untouched;
  }

  cancel(): void {
    if (window.confirm('Are you sure? Exit this window will result in lost of information')) {
      this.router.navigate(['events']);
    }
  }
}
