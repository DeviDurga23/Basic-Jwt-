import { Component, OnInit } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-protectedcomponent',
  templateUrl: './protectedcomponent.component.html',
  styleUrls: ['./protectedcomponent.component.css']
})
export class ProtectedcomponentComponent implements OnInit {
  user: any;

  constructor(private authService: AuthenticationService, private router: Router) {}

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.user = jwtDecode(token);
    }
  }

  logout(): void {
    // Assuming AuthenticationService has a logout() method
    this.authService.logout();
    this.router.navigateByUrl('/');
  }
}
