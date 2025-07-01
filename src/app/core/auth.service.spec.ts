import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should login with correct credentials', () => {
    const result = service.login('g.guerragaldamesgmail.com', '123456');
    expect(result).toBeTrue();
  });

  it('should logout and return false on isLoggedIn', () => {
    service.logout();
    const loggedIn = service.isLoggedIn();
    expect(loggedIn).toBeFalse();
  });
});
