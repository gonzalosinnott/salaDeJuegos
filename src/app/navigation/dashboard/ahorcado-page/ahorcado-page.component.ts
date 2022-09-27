import { Component, OnInit } from '@angular/core';
import { AhorcadoService } from 'src/app/services/ahorcado.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ahorcado-page',
  templateUrl: './ahorcado-page.component.html',
  styleUrls: ['./ahorcado-page.component.css']
})
export class AhorcadoPageComponent implements OnInit {

  word = '';
  hiddenWord = '';
  tries = 0;
  win = false;
  lost = false;
  triesImg = "assets/hangman/hangman0.png";
  letterButton:boolean = false;
  data:any;
  points:number = 0;

  constructor( private service: AhorcadoService) { }

  ngOnInit(): void {
    this.storeWord();
  }
  
  storeWord() {
    this.service.getRandomWord().subscribe((data) => {
      this.data = data;
      this.word = data.toString().toUpperCase().normalize("NFD").replace(/\p{Diacritic}/gu, "");
      this.hiddenWord = '_ '.repeat(this.word.length);
      console.log(this.word);
    });    
  }

  actionMethod(event: any) {
    event.target.disabled = true;
  }

  chosenOption(option: string) {
   
    if (this.word.indexOf(option) === -1) {
      this.tries++;
    }

    if(this.tries === 1){
      this.triesImg = "assets/hangman/hangman1.png"
    }

    if(this.tries === 2){
      this.triesImg = "assets/hangman/hangman2.png"
    }

    if(this.tries === 3){
      this.triesImg = "assets/hangman/hangman3.png"
    }

    if(this.tries === 4){
      this.triesImg = "assets/hangman/hangman4.png"
    }

    if(this.tries === 5){
      this.triesImg = "assets/hangman/hangman5.png"
    }

    if(this.tries === 6){
      this.triesImg = "assets/hangman/hangman6.png"
    }

    const hiddenWordArray = this.hiddenWord.split(' ');

    for (let i = 0; i < this.word.length; i++) {
      if (this.word[i] === option) {
        hiddenWordArray[i] = option;
      }
    }

    this.hiddenWord = hiddenWordArray.join(' ');
    this.checkGame();  
  }

  checkGame() {

    const wordArray = this.hiddenWord.split(' ');
    const wordCheck = wordArray.join('');

    if (wordCheck === this.word) {
      this.letterButton = true;
      this.win = true;
      this.triesImg = "assets/hangman/hangmanWon.png";
    }

    if (this.tries >= 7) {
      this.letterButton = true;
      this.lost = true;
      this.triesImg = "assets/hangman/hangmanLose.png";
    }
  }

  reload() {
    location.reload();
  }

}
