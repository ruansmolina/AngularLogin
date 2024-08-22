import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/user';

  constructor(private http: HttpClient) { }

  register(user:User):Observable<any>{
    return this.http.post(this.apiUrl,user);
  }
}

