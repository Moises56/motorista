import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngbd-carousel-basic',
  templateUrl: './ngbd-carousel-basic.component.html',
  styleUrls: ['./ngbd-carousel-basic.component.css']
})
export class NgbdCarouselBasicComponent implements OnInit {
  carrousel = [1,2,3,4,5,6].map((n) => `../assets/carrousel/${n}.jpg`);
  constructor() { }

  ngOnInit(): void {
  }

}
