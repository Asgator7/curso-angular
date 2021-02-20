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

    isAuthenticated(): boolean {
        return !!this.currentUser;
    }
}
