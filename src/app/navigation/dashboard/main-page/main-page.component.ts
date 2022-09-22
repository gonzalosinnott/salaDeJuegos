import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(public authService: AuthService) { }
  user:any;

  ngOnInit(): void {
    this.authService.getAuth().subscribe(user => {
      if (user) {
        this.user.name = user.displayName;
        this.user.uid = user.uid;
        this.user.email = user.email;
      }
    });
  }

}
