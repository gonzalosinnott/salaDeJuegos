import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';


@Component({
  selector: 'app-cv-page',
  templateUrl: './cv-page.component.html',
  styleUrls: ['./cv-page.component.css']
})
export class CvPageComponent implements OnInit {

  constructor(private _location: Location) {}

  ngOnInit(): void {
  }

  backClicked() {
    this._location.back();
  }
}
