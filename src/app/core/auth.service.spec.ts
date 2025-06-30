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

  it('should return true when login with correct credentials', () => {
    const result = service.login('user@test.com', 'Test123!');
    expect(result).toBeTrue();
  });

  it('should return false when not logged in', () => {
    service.logout();
    expect(service.isLoggedIn()).toBeFalse();
  });
});
