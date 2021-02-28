import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable()
export class AuthService {
    currentUser: IUser;

    loginUser(username: string, password: string): void {
        this.currentUser = {
            id: 1,
            userName: username,
            firstName: 'Antonio',
            lastName: 'Brasílio'
        };
    }

    updateCurrentUser(firstName: string, lastName): void{
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
    }

    isAuthenticated(): boolean {
        return !!this.currentUser;
    }
}
