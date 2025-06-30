import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login(email: string, password: string) {
    console.log(`Login con ${email} y ${password}`);
    return true;
  }

  logout() {
    console.log('Logout');
  }

  isLoggedIn(): boolean {
    return true;
  }
}
