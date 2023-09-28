import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = {
    username: '',
    password: ''
  };

  constructor(private http: HttpClient, private router: Router) {}

  onLoginSubmit() {
    // Make an HTTP POST request to your backend /signIn endpoint with loginForm data
    this.http.post('http://localhost:9090/signIn', this.loginForm, { responseType: 'text' }).subscribe(
      (response) => {
        // Check if the response is a valid JWT token (assuming it's a string)
        if (response && response.trim().startsWith('eyJ')) {
          // Handle the JWT token (it's a valid token)
          localStorage.setItem('token', response);
          console.log('Token:', response);
          this.router.navigate(['/homepage']);
        } else {
          // Handle the case when the response is not a valid token (e.g., display an error message)
          console.error('Invalid token response:', response);
          // Handle login errors here
        }
      },
      (error) => {
        console.error('Error:', error);
        // Handle login errors
      }
    );
  }
}


