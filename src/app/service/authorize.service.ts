import { Injectable } from '@angular/core';
import { Login } from '../interface/login';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeService {

  private readonly TOKEN_KEY = 'auth_token';
  private apiUrl = 'http://localhost:8080/user/login';

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { email, password })
      .pipe(
        map(response => {
          if (response && response.token) {
            this.saveToken(response.token);
          }
          return response;
        })
      );

  }

  public saveToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  // Obter token de autenticação
  public getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  // Remover token de autenticação
  public removeToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  // Verificar se o usuário está autenticado
  public isAuthenticated(): boolean {
    const token = this.getToken();
    // Verificar se o token existe e não está expirado, etc.
    return token !== null;
  }

}
