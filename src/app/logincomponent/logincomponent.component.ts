import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-logincomponent',
  templateUrl: './logincomponent.component.html',
  styleUrl: './logincomponent.component.css'
})
export class LogincomponentComponent {

  constructor(private routers :Router,
    private authservice : AuthenticationService){}
  
     username : string = "";
     password : string = "";

     login()
     {
      this.authservice.login(this.username ,this.password).
      subscribe(response =>{
        localStorage.setItem('token',response.token);
        this.routers.navigateByUrl('/protected');
      },
       error=>
        {
console.log("Login error",error);
        });
     }
    } 



      
