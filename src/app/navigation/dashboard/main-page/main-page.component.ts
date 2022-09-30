import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  user:any;
  score: any;
  snakeScore:any;
  preguntadosScore:any;
  mayorMenorScore:any;
  snakeHighScore:any;
  preguntadosHighScore:any;
  mayorMenorHighScore:any;
  snakeHighScoreUser:any;
  preguntadosHighScoreUser:any;
  mayorMenorHighScoreUser:any;
  
  constructor(public authService: AuthService,) { }
 

  ngOnInit(): void {
    this.authService.getAuth().subscribe(user => {
      if (user) {
        this.user = user;
      }
    });

    this.getScores();   
  }

  
  getScores(){
    this.getUserHighScores('preguntados').then((score) => {
      this.preguntadosScore = score;
    });

    this.getUserHighScores('mayor-menor').then((score) => {
      this.mayorMenorScore = score;
    });

    this.getUserHighScores('snake').then((score) => {
      this.snakeScore = score;
    });

    this.getPreguntadosHighScores('preguntados').then(() => {
          
    });

    this.getMayorMenorHighScores('mayor-menor').then(() => {
     
    });

    this.getSnakeHighScores('snake').then(() => {
     
    });
  }

  getUserHighScores(game){    
    let result = new Promise((resolve, reject) => {
      this.authService.getUserHighScore(game).then((score) => {
        resolve(score);
        result = score;
      });
    });
    return result;
  }


  getMayorMenorHighScores(game){
    let result = new Promise((resolve, reject) => {
      this.authService.getGameHighScore(game).then((data) => {
        resolve(data);
        this.mayorMenorHighScore = data.score;
        this.mayorMenorHighScoreUser = data.user;
      });
    });
    return result;
  }

  getSnakeHighScores(game){
    let result = new Promise((resolve, reject) => {
      this.authService.getGameHighScore(game).then((data) => {
        resolve(data);
        this.snakeHighScore = data.score;
        this.snakeHighScoreUser = data.user;
      });
    });
    return result;
  }

  getPreguntadosHighScores(game){
    let result = new Promise((resolve, reject) => {
      this.authService.getGameHighScore(game).then((data) => {
        resolve(data);
        this.preguntadosHighScore = data.score;
        this.preguntadosHighScoreUser = data.user;
      });
    });
    return result;
  }


}
