import { Component, OnInit } from '@angular/core';
import { faBars, faArrowCircleRight, faMotorcycle, faUserClock,faRoad, faBoxOpen,faMobileAlt,faClipboardCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {
  faBars = faBars;
  faArrowCircleRight = faArrowCircleRight;
  faMotorcycle = faMotorcycle;
  faUserClock = faUserClock;
  faRoad = faRoad;
  faBoxOpen = faBoxOpen;
  faMobileAlt = faMobileAlt;
  faClipboardCheck=faClipboardCheck;

  constructor() { }

  ngOnInit(): void {
  }

}
