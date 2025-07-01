import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;

  constructor() {}

  login(email: string, password: string): boolean {
    this.loggedIn = true;
    console.log(`Login con ${email}`);
    return true;
  }

  logout(): void {
    this.loggedIn = false;
    console.log('Logout realizado');
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
