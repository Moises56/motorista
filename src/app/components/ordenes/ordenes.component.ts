import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UseClienteService } from 'src/app/services/use-cliente.service';

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.css']
})
export class OrdenesComponent implements OnInit {

  Orden: any = [];

  constructor(
    private useClienteService: UseClienteService,
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
    this.useClienteService.getOrdenes().subscribe(
      res => {
        console.log(res);
        this.Orden = res;
      },
      err => console.log(err)
    );
  }

  abrirTomarOrdenModalModal(modal: any){
    this.modalService.open(
      modal,
      {
        size: 'xs',
        centered: false
      }
    );
  }

  tomarOrden(){
    alert('Orden Tomada tiempo de llegada 15 minutos.');
    this.modalService.dismissAll();
  }

}
