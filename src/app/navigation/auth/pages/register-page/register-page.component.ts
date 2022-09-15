import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';
import { LoginData } from 'src/app/interfaces/login-data.interface';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent implements OnInit {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  register(data: LoginData) {
    
    this.authService
      .register(data)
      .then(() => this.router.navigate(['/dashboard']))
      .catch((e) => this.toastr.error(e.message));      
  }
}