import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent implements OnInit {
  @Output() formData: EventEmitter<{
    email: string;
    user: string;
    password: string;
    password2: string;
  }> = new EventEmitter();

  form: FormGroup;

  constructor(private fb: FormBuilder,
              private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      user: ['', [Validators.required]],
      password: ['', Validators.required],
      password2: ['', Validators.required],
    });
  }

  get email() {
    return this.form.get('email');
  }

  get user() {
    return this.form.get('user');
  }

  get password() {
    return this.form.get('password');
  }

  get password2() {
    return this.form.get('password2');
  }

  onSubmit() {
    if(this.form.valid) {

      if(this.password.value !== this.password2.value) {
        this.toastr.error("Las contraseñas no coinciden");
        return;
      }

    this.formData.emit(this.form.value);
    }
  }
}
