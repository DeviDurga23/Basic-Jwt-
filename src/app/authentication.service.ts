import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  logout(): void {
    // Implement logout logic here if needed
    // For now, just clear the token
    localStorage.removeItem('token');
  }
  
  constructor(private http:HttpClient) { }

  login(username:string,password:string):Observable<any>

  {
  return   this.http.post("https://dummyjson.com/auth/login",{username,password});
  }
}
