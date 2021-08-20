import { Component, OnInit } from '@angular/core';
import { faUserCircle} from '@fortawesome/free-solid-svg-icons';
import { UseClienteService } from '../../services/use-cliente.service';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  faUserCircle = faUserCircle;

  // tslint:disable-next-line:ban-types
  regionVisible: String = '';

nombreUser: any;
apellidoUser: any;

  constructor(
    public useClienteService: UseClienteService
  ) { }

  ngOnInit(): void {
    this.nombreUser = localStorage.getItem('nombreUser');
    this.apellidoUser = localStorage.getItem('apellidoUser');
    console.log(this.nombreUser,
      this.apellidoUser);
  }



  // tslint:disable-next-line:typedef
  getOrdenes(){
    console.log('ordenes');
    this.regionVisible = 'orden';
  }
}
