import { Component, OnInit } from '@angular/core';
import { faTimes, faMapMarkedAlt, faHandHoldingUsd, faUserClock, faMotorcycle} from '@fortawesome/free-solid-svg-icons';
import { UseClienteService } from '../../services/use-cliente.service';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  faMotorcycle = faMotorcycle;
  faUserClock = faUserClock;
  faHandHoldingUsd = faHandHoldingUsd;
  faMapMarkedAlt = faMapMarkedAlt;
  faTimes = faTimes;

  constructor(
    public useClienteService: UseClienteService
  ) { }

  ngOnInit(): void {
  }

}
