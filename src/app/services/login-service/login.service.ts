import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { LoginResponse } from 'src/app/types/login-response.type';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  login(name: string, password: string): Observable<Object> {
    return this.httpClient.post<LoginResponse>("/login", { name, password }).pipe(tap((value) => {
      sessionStorage.setItem("auth-token", value.token);
      sessionStorage.setItem("usarname", value.name);
    }));
  }
}
