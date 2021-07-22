import { Component } from '@angular/core';
import { faBars, faArrowCircleRight, faMotorcycle, faUserClock,faRoad, faBoxOpen,faMobileAlt,faClipboardCheck } from '@fortawesome/free-solid-svg-icons';

@Component({

  selector: 'app-root', 
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'motorista';
  faBars = faBars;
  faArrowCircleRight = faArrowCircleRight;
  faMotorcycle = faMotorcycle;
  faUserClock = faUserClock;
  faRoad = faRoad;
  faBoxOpen = faBoxOpen;
  faMobileAlt = faMobileAlt;
  faClipboardCheck=faClipboardCheck;
}
