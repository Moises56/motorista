import { Component, OnInit } from '@angular/core';
import { faBars, faArrowCircleRight, faMotorcycle, faUserClock,faRoad, faBoxOpen,faMobileAlt,faClipboardCheck } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-landinpage',
  templateUrl: './landinpage.component.html',
  styleUrls: ['./landinpage.component.css']
})
export class LandinpageComponent implements OnInit {
  faBars = faBars;
  faArrowCircleRight = faArrowCircleRight;
  faMotorcycle = faMotorcycle;
  faUserClock = faUserClock;
  faRoad = faRoad;
  faBoxOpen = faBoxOpen;
  faMobileAlt = faMobileAlt;
  faClipboardCheck = faClipboardCheck;

  constructor() { }

  ngOnInit(): void {
  }

}
