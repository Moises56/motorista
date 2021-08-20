import { Component, OnInit } from '@angular/core';
import { UseClienteService } from 'src/app/services/use-cliente.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(
    public useClienteService: UseClienteService
  ) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  getOrdenes(){
    console.log('ordenes');
  }

}
