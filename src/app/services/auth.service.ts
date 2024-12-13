import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private validUser = { email: 'test@example.com', password: '123456' };

  login(email: string, password: string): Observable<boolean> {
    if (email === this.validUser.email && password === this.validUser.password) {
      localStorage.setItem('token', 'mock-jwt-token'); // Salva o token no localStorage
      return of(true);
    }
    return throwError(() => new Error('Credenciais inválidas'));
  }

  logout() {
    localStorage.removeItem('token'); // Remove o token
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}

