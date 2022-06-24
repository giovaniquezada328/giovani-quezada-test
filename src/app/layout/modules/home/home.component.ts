import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  slides = [
    {'image': `https://via.placeholder.com/${this.numberRandom()}`},
    {'image': `https://via.placeholder.com/${this.numberRandom()}`},
    {'image': `https://via.placeholder.com/${this.numberRandom()}`},
    {'image': `https://via.placeholder.com/${this.numberRandom()}`},
    {'image': `https://via.placeholder.com/${this.numberRandom()}`}
  ];
  constructor() { }

  ngOnInit(): void {

  }

  numberRandom(){
    let min = 100;
    let max = 199;
    return Math.floor(Math.random()*(max-min+1)+min);
  }

}
