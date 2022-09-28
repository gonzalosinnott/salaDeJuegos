import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-encuesta-page',
  templateUrl: './encuesta-page.component.html',
  styleUrls: ['./encuesta-page.component.css']
})
export class EncuestaPageComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder,
              private toastr: ToastrService,
              public auth: AuthService) {  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [null],
      lastName: [null],
      phone: [null],
      age: [null],
      favGame: [null],
      experience: [null],
      opinion: [null],
    });
  }

  onSubmit() {
    
    if (this.form.valid) {
      console.log(this.form.value);
      this.auth.SetUserSurvey(this.form.value);
      this.toastr.success('Encuesta enviada con éxito', '', {
        timeOut: 1500,
        positionClass: 'toast-center-center',      
      });
      this.form.reset();
    } else {
      this.toastr.warning('REVISE LOS CAMPOS DEL FORMULARIO' , '', {
        timeOut: 1500,
        positionClass: 'toast-center-center',      
      });
    } 
  }

}
