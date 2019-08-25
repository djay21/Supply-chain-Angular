import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Rest/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  Username = "";
  Orgname="";
  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit() {
  }
  onSignIn() {
    this.authService.signIn(this.Username, this.Orgname);
    this.route.navigate(['/channel']);
  }
  onRegister() {
    localStorage.clear();
    this.authService.signIn('admin', 'foodproducer');
    this.route.navigate(['/register']);
  }
}
